# 爬虫逆向



本项目记录一些学习爬虫逆向的案例或者资料，仅供学习参考，请勿用于非法用途。

目前已经爬取：**1688、七麦数据、whggzy、企名科技、mohurd、艺恩数据、欧科云链(oklink)**

环境安装：

npm install 

pip install -r requirements.txt



## 一、js逆向

#### 定位数据接口的方式：

- 静态页面字体加密：HTML实体编码
- 数据加密：动态数据 -> ajax **JSON.parse**



### 1、whggzy（接口参数）

#### 1.1 搜索响应数据找到接口

接口为 “http://www.whggzy.com/front/search/category”

![image-20230602094847529](./README.assets/image-20230602094847529.png)



#### 1.2 设置header和data

将接口的headers和data传入，并进行测试

```python
headers = {
    # 这两个参数是必须的
    "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "Referer": "http://www.whggzy.com/PurchaseAdvisory/index.html",
}

# 通过查看参数发现data传的是字符串，所以这个通过字符串的方式发送data，而不是字典
data = {
    "categoryCode": "MostImportant",
    "pageNo": 1,
    "pageSize": 15
}
```

**访问后报错**



#### 1.3 断点调试

在源代码->xhr/提取断点中加入断点，观察到headers的参数，且data参数为字符串

![image-20230602095429289](./README.assets/image-20230602095429289.png)



##### 完整代码

```python
import requests

url = "http://www.whggzy.com/front/search/category"

headers = {
    # 这两个参数是必须的
    "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "Referer": "http://www.whggzy.com/PurchaseAdvisory/index.html",

    # 通过xhr断点找到接口的headers包含一下几个
    'Accept': "*/*",
    'Content-Type': "application/json",
    'X-Requested-With': "XMLHttpRequest",


}

# 通过查看参数发现data传的是字符串，所以这个通过字符串的方式发送data，而不是字典
data = '''{
    "categoryCode": "MostImportant",
    "pageNo": 1,
    "pageSize": 15
}'''

print(requests.post(url, headers=headers, data=data).text)

```







### 2、企名科技(数据加密)

url: https://www.qimingpian.com/finosda/project/pinvestment

#### 2.1 搜索数据

搜索不到数据，判断为通过ajax数据加密

找到接口：

![image-20230602114517059](./README.assets/image-20230602114517059.png)



#### 2.2 断点调试

找到js文件

![image-20230602114651972](./README.assets/image-20230602114651972.png)



找到加密数据的方法：

![image-20230602104759972](./README.assets/image-20230602104759972.png)



```js
// 还需要找到o方法和decode方法，整合成js文件
function s(e) {
    return JSON.parse(o("5e5062e82f15fe4ca9d24bc5", a.a.decode(e), 0, 0, "012345677890123", 1))
}
```



#### 2.3 调用接口获取数据，放入js方法中解密

```python
import json

import execjs
import requests

url = 'https://vipapi.qimingpian.cn/DataList/productListVip'

headers = {}

data = {}

# 打开js文件
with open("./demo2_qiming.js", "r") as f:
    jscode = f.read()

# 调用api接口拿到加密数据
resp = requests.get(url, headers=headers, data=data).json()

# 调用js文件
ctx = execjs.compile(jscode).call('s', resp["encrypt_data"])

print(ctx)
print(f"type:{type(ctx)}")
```



### 3、建筑(AES)

url： https://jzsc.mohurd.gov.cn/data/company



#### 3.1 获取数据

接口：https://jzsc.mohurd.gov.cn/APi/webApi/dataservice/query/comp/list?pg=0&pgsz=15&total=0



数据经过加密，data: 95780ba09437300...



#### 3.2 查找js

通过接口名称找到js文件，在js文件里搜索JSON.parse，打断点进行调试

![image-20230602142415295](./README.assets/image-20230602142415295.png)



#### 3.3 js解密

常见js算法：crypto-js、jsdom、hash、md5、逆向算法

判断使用的加密是CryptoJS，使用npm安装库后导入，替换原始js里使用的方法

```js
const CryptoJS = require('crypto-js')
// 常见js算法：jsdom hash md5 逆向算法

function m(t) {
    // d.a是CryptoJS
    var f = CryptoJS.enc.Utf8.parse("jo8j9wGw%6HbxfFn")
    var h = CryptoJS.enc.Utf8.parse("0123456789ABCDEF")
    var e = CryptoJS.enc.Hex.parse(t),

        n = CryptoJS.enc.Base64.stringify(e),
        a = CryptoJS.AES.decrypt(n, f, {
            iv: h,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }),
        r = a.toString(CryptoJS.enc.Utf8);
    return r.toString()
}
```



### 4、endata（js混淆）

url: https://www.endata.com.cn/BoxOffice/BO/Year/index.html

#### 4.1 获取数据

```python
url = "https://www.endata.com.cn/API/GetData.ashx"
headers = {}  # 略
data = {}  # 略
ori_data = requests.post(url, headers=headers, data=data).text

"""
out:
AFB3D177A5D1D916CFEFBE70FEFC0C59C0463AE137DE1A099C4B169B8AB9DBC33EE55B1...（加密数据）
"""
```



#### 4.2 搜索加密接口

![image-20230602153850946](./README.assets/image-20230602153850946.png)





#### 4.3 js

通过断点找到加密的方法，方法经过了js混淆，直接复制方法，执行这个方法，根据提示补齐所有缺失的属性。

![image-20230602154006084](./README.assets/image-20230602154006084.png)



#### 4.4 navigator

js代码中存在一个navigator属性，为环境属性，需要手动写入

```js
global.navigator = {'userAgent': "node.js"}
```





#### 4.5 结合接口完成代码

```python
"""js混淆"""
import execjs
import requests

url = "https://www.endata.com.cn/API/GetData.ashx"
headers = {
"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"

}
data = {
    "year": 2023,
    "MethodName": "BoxOffice_GetYearInfoData"
}
ori_data = requests.post(url, headers=headers, data=data).text

with open("./endata.js", 'r') as f:
    js_code = f.read()

result = execjs.compile(js_code).call("webInstace.shell", ori_data)

print(result)

# (webInstace.shell(data));

```





## 二、请求参数加密

### 1、1688

url: https://sale.1688.com/factory/category.html?spm=a260k.22464671.home2019category.1.6e517a6exMGJcG&mainId=10166

#### 1.1 查看接口

有加密参数，找这个参数的js文件

![image-20230602100140806](./README.assets/image-20230602100140806.png)

#### 1.2 搜索加密参数

**sign参数的组成：**token & 时间戳 & g & 请求参数，数据均没有变化

再经过h函数

![image-20230602100323351](./README.assets/image-20230602100323351.png)



#### 1.3 得到sign

```python
# 请求的参数
data = '{"cid":"FactoryRankServiceWidget:FactoryRankServiceWidget","methodName":"execute","params":"{\\"extParam\\":{\\"methodName\\":\\"readRelatedRankEntries\\",\\"cateId\\":\\"10166\\",\\"size\\":\\"15\\",\\"pageNo\\":\\"1\\",\\"pageSize\\":\\"20\\",}}"}'

# sign = token & 时间戳 & g & 请求参数
token = "2a3e896698e27affa623d6ecd90aca5e"
i = int(time.time() * 1000)
g = "12574478"
# 拼接出字符串
j = f"{token}&{i}&{g}&{str(data)}"

# 使用js文件生成sign
with open("./h.js", "r", encoding="utf-8") as f:
    js_code = f.read()
sign = execjs.compile(js_code).call("h", j)

```



#### 1.4 访问接口

```python
# 设置header和params
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "Referer": "https://sale.1688.com/",
    # 这里需要传入cookie，不然会提示token为空
    "Cookie":"...",
}
# 这里的data、时间戳要和sign里的data一样
params = {"jsv": "2.6.1", "appKey": "12574478", "t": str(i), "sign": sign, "v": "1.0", "type": "jsonp", "isSec": 0,
          "timeout": 20000, "api": "mtop.taobao.widgetService.getJsonComponent", "dataType": "jsonp",
          "jsonpIncPrefix": "mboxfc", "callback": "mtopjsonpmboxfc3", "data": data}

url = "https://h5api.m.1688.com/h5/mtop.taobao.widgetservice.getjsoncomponent/1.0/"
print(requests.get(url, headers=headers, params=params).text)
```







### 2、cninfo TODO

url: https://webapi.cninfo.com.cn/#/marketDataDate



#### 2.1 加密字段

为base64加密

![image-20230602102009457](./README.assets/image-20230602102009457.png)



#### 2.2 搜索js文件

通过标头名或者路径搜索，找到js文件；该方法使用了js混淆。

![image-20230602102531128](./README.assets/image-20230602102531128.png)



### 3、七麦数据（接口隐藏、js混淆）

url: https://www.qimai.cn/rank



#### 3.1找到接口

通过英文搜索到接口（中文有编码）

![image-20230604223717940](./README.assets/image-20230604223717940.png)

#### 3.2 搜索js文件

##### 找到js文件

接口的参数名搜索js，参数名：**analysis**，找到对应的js文件



##### 添加断点

在js文件中添加接口url的路径：/rank/indexPlus/brand_id/1



##### 单步调试找到加密位置

![image-20230604225151994](./README.assets/image-20230604225151994.png)



#### 3.3 编写js

js使用了js混淆，需要根据调试根据判断使用了什么方法，具体请看注解

```js
// 注释的代码为原始代码

function v(t) {
    // 找到这里使用的方法
    // t = z[V1](t)[T](/%([0-9A-F]{2})/g, function(n, t) {
    t = encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (n, t) {
        // 这里的Y1是个固定字符
        // return o(Y1 + t)
        return o("0x" + t)
    });
    try {
        // boat方法
        // return z[Q1](t)
        return btoa(t)
    } catch (n) {
        // 找到这个方法
        // return z[W1][K1](t)[U1](Z1)
        return Buffer.from(t).toString("base64")
    }
}


function o(n) {
    let f2 = '66';
    let s2 = '72';
    let d2 = '6f';
    let m2 = '6d';
    let l2 = '43';
    let v2 = '68';
    let p2 = '61';
    let h2 = '64';
    let y2 = '65';
    t = "",

        [f2, s2, d2, m2, l2, v2, p2, s2, l2, d2, h2, y2].forEach(function (n) {
            t += unescape("%u00" + n)
        });
    var t, e = t;
    // 调试时这里的e一直是undefined，通过打断点再调试确定为这个方法
    // return z[b2][e](n)
    return String.fromCharCode(n)
}

function h(n, t) {
    t = t || u();
    // 替换方法和值
    // for (var e = (n = n[$1](_))[R], r = t[R], a = q1, i = H; i < e; i++)
    for (var e = (n = n.split("")).length, r = t.length, a = "charCodeAt", i = 0; i < e; i++)
        n[i] = o(n[i][a](0) ^ t[(i + 10) % r][a](0));
    // return n[I1](_)
    return n.join("")
}

function url(pass) {
    var s = 1359
    var H = 0
    var e, r = +new Date() - (s || H) - 1661224081041, a = [];
    var v1 = "@#"
    // 固定值
    var d = "xyz517cda96abcd"

    // a = a[Ot]()[I1](_),
    a = a.sort().join("")

    // 这里调用了一个去掉域名的方法，但我们传的是后面的接口路径，所以直接使用
    // a = (a += v + t[Jt][T](t[Mt], _)) + (v + r) + (v + 3),
    a = (a += v1 + pass) + (v1 + r) + (v1 + 3)

    // 在调试工具里找到这两个方法，复制到上面
    // e = (0,
    //     i[jt])((0,
    //     i[qt])(a, d))
    e = (0,
        v)((0,
        h)(a, d))
    return e
}

const pass = "/rank/indexPlus/brand_id/1"
console.log(url(pass));
```



### 4、oklink

#### 4.1 查看接口

![image-20230605145711223](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/spider_reverse/README.assets/image-20230605145711223.png)





#### 4.2 搜索js文件



##### 找到加密的位置

找到方法，再进行搜索

![image-20230605150642725](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/spider_reverse/README.assets/image-20230605150642725.png)



#### 4.3 js实现

找到webpack打包的代码，改写后补齐所有方法

##### 原代码

```js
{
    key: "encryptApiKey",
    value: function() {
        var t = this.API_KEY
          , e = t.split("")
          , n = e.splice(0, 8);
        return t = e.concat(n).join("")
    }
}, {
    key: "encryptTime",
    value: function(t) {
        var e = (1 * t + a).toString().split("")
          , n = parseInt(10 * Math.random(), 10)
          , r = parseInt(10 * Math.random(), 10)
          , o = parseInt(10 * Math.random(), 10);
        return e.concat([n, r, o]).join("")
    }
}, {
    key: "comb",
    value: function(t, e) {
        var n = "".concat(t, "|").concat(e);
        return window.btoa(n)
    }
}, 
{
    key: "getApiKey",
    value: function() {
        var t = (new Date).getTime()
          , e = this.encryptApiKey();
        return t = this.encryptTime(t),
        this.comb(e, t)
    }
}
```



##### 改写

```js
function encryptApiKey() {
    let API_KEY = "a2c903cc-b31e-4547-9299-b6d07b7631ab"
    var t = API_KEY
        , e = t.split("")
        , n = e.splice(0, 8);
    return t = e.concat(n).join("")
}

function encryptTime(t) {
    let a = 1111111111111
    var e = (1 * t + a).toString().split("")
        , n = parseInt(10 * Math.random(), 10)
        , r = parseInt(10 * Math.random(), 10)
        , o = parseInt(10 * Math.random(), 10);
    return e.concat([n, r, o]).join("")
}

function comb(t, e) {
    var n = "".concat(t, "|").concat(e);
    return Buffer.from(n).toString("base64")
}

function getApiKey() {
    var t = (new Date).getTime()
        , e = encryptApiKey();
    return t = encryptTime(t),
        comb(e, t)
}

getApiKey()
```



#### 4.4 python代码实现

```python

def get_api_key():
    """获取加密字符串"""
    times = int(time.time() * 1000)

    # 固定的加密值
    api_key = "a2c903cc-b31e-4547-9299-b6d07b7631ab"

    # encryptApiKey()
    key1 = api_key[0:8]
    key2 = api_key[8:]
    # 交换位置
    new_key = key2 + key1

    # encryptTime()
    a = 1111111111111

    new_time = str(1 * times + a)
    random1 = str(random.randint(0, 9))
    random2 = str(random.randint(0, 9))
    random3 = str(random.randint(0, 9))
    # 拼接
    cur_time = new_time + random1 + random2 + random3

    # 合并前面生成的两个值，并用base64加密
    this_key = new_key + "|" + cur_time
    n_k = this_key.encode("utf-8")
    x_apikey = base64.b64encode(n_k)
    return x_apikey
```



### 5、去哪儿机票服务

url:https://m.flight.qunar.com/h5/flight/

#### 5.1、接口的加密

1、请求参数：**\_\_m\_\_**

![image-20230605172141802](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/spider_reverse/README.assets/image-20230605172141802.png)

2、请求头参数：**键值对加密**

![image-20230605172331402](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/spider_reverse/README.assets/image-20230605172331402.png)

#### 5.2、请求参数

##### 通过js查找算法	

f()为**md5**加密

![image-20230605223339438](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/spider_reverse/README.assets/image-20230605223339438.png)



u()为**SHA1**加密

![image-20230605223535368](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/spider_reverse/README.assets/image-20230605223535368.png)

##### js代码解析

```js
// 所有方法

// 加密算法
function encryptFunction() {
    /**
     * 调试进入这两个算法中，找到他们对应的算法，找关键字，例如算法名称
     * f：md5
     * n: SHA1
     */
    return [function (e) {
        // t % 2 == 0执行这个方法
        // e = t时间戳 + n字符串
        var t = (0,
            u.default)(e).toString();
        return (0,
            f.default)(t).toString()
    }
        // t % 2 == 1执行这个方法
        , function (e) {
            var t = (0,
                f.default)(e).toString();
            return (0,
                u.default)(t).toString()
        }
    ]
}

function dencryptCode(t) {
    return t.map(function (e) {
        return String.fromCharCode(e - 2)
    }).join("")
}

function getQtTime(t) {
    /*
    * 如果有t这里直接返回t
    * 没t这里把时间戳分割后的char值-2转为字符串
    */
    return t ? Number(t.split(",").map(function (e) {
        return String.fromCharCode(e - 2)
    }).join("")) : 0
}

// 获取字符串方法
function getTokenStr() {
    var t = this.dencryptCode(this.tokenStr);
    // 这里选择了页面中一个id为t的元素的值
    var n = document.getElementById(t).innerHTML;
    // 这里会返回元素的值或者方法的值
    return n ? n : (0,
        s.default)(this.dencryptCode(this.cookieToken))
}


// 获取参数的方法
function encrypt() {
    // t是页面元素的值
    var t = this.getTokenStr()
        // 这里n是时间戳
        , n = this.getQtTime((0,
        s.default)(this.dencryptCode(this.qtTime)))
        // r是对时间戳取模
        , r = n % 2;
    return encryptFunction()[r](t + n)
}

// 加密的方法
function encryptToken(t) {
    return (0,
        f.default)(t).toString()
}
```



##### python生成该参数

根据前面解析js代码，得到m参数的生成逻辑

```python
import hashlib
import time

def md5_hash(text):
    # 创建MD5哈希对象
    md5_hasher = hashlib.md5()
    # 更新哈希对象以包含待加密的文本
    md5_hasher.update(text.encode('utf-8'))
    # 返回MD5加密后的结果
    return md5_hasher.hexdigest()

def sha1_hash(text):
    # 创建SHA1哈希对象
    sha1_hasher = hashlib.sha1()
    # 更新哈希对象以包含待加密的文本
    sha1_hasher.update(text.encode('utf-8'))
    # 返回SHA1加密后的结果
    return sha1_hasher.hexdigest()


def get_m():
    # .data["__m__"] = u.default.encryptToken(u.default.encrypt());
    # 获取需要被加密的参数，即u.default.encrypt()

    # 页面存储的token"00008a002f1051a169b06202"
    t = "00008a002f1051a169b06202"
    # 时间戳
    n = int(time.time() * 1000)
    # n = 1686020493263
    # 时间戳取余
    r = n % 2

    p1 = t + str(n)

    # 根据r决定先用SHA1还是MD5
    if r == 0:
        # SHA1
        p1 = sha1_hash(p1)
        # MD5
        p1 = md5_hash(p1)
    else:
        # MD5
        p1 = md5_hash(p1)
        # SHA1
        p1 = sha1_hash(p1)
    # 最后再用一次MD5加密
    p1 = md5_hash(p1)

    return p1

# fbc1646d57a2b22ceb5f5ef60018f67d
print(get_m())
```



#### 5.3、请求头参数

##### js代码解析

```js
// 生成key的方法，传入的参数是时间戳
function getRandomKey(t) {
    var n = "";
    // 从时间戳的第四位开始截取
    var r = ("" + t).substr(4);
    // 时间戳每一位映射的acsii编码
    r.split("").forEach(function (e) {
        n += e.charCodeAt()
    });
    // md5加密
    var i = (0,
        f.default)(n).toString();
    // -6:
    return i.substr(-6)
}

// headers的主要生成方法
function getToken() {
    // dict
    var t = {};
    // this.getQtTime((0,s.default)(this.dencryptCode(this.qtTime))) 依然是时间戳
  	// value是__m__参数一样的加密方法
    t[this.getRandomKey(this.getQtTime((0,
        s.default)(this.dencryptCode(this.qtTime))))] = this.encrypt();
    return t
}
```

##### python实现

```python
def get_random_key(t):
    """ 获取请求头参数的key """
    # 截取4开始的字符串
    t = str(t)[4:]
    n = ""
    # 转为ascii编码并拼接
    for i in t:
        n += str(ord(i))
    # md5解密
    key = md5_hash(n)
    # 返回最后6位
    return key[-6:]


def get_headers():
    """ 获取请求头参数 键值对"""
    t = int(time.time() * 1000)
		# 获取key
    key = get_random_key(t)
    # 获取值
    value = get_m(t)
    return {key:value}
```



### 6、美团

url: https://gz.meituan.com/meishi/

#### 6.1、接口的加密

_token为加密参数。

![image-20230609204919138](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/spider_reverse/README.assets/image-20230609204919138.png)



#### 6.2、查找js

查找到token的生成位置，找到加密的方法

![image-20230609210113287](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/spider_reverse/README.assets/image-20230609210113287.png)



#### 6.3、生成参数

_token参数为iP类进行加密后得到的，但目前只能得出iP的sign参数，对iP进行加密后没办法得到最终的值，**如果你知道怎么做欢迎提交issue给我**。



**iP.sign**为参数排序后进行base64加密。

```python
def decode_sign(token_str):
    token_str = token_str.replace(" ", "")

    # base编码
    # token_str = f"\"{str(token_str)}\""
    # token_str = str(token_str)
    # token_str = f"'{token_str}'"

    print(f"str:::{token_str}")

    encode1 = str(token_str).encode()
    # 参数 压缩成 特殊的编码
    compress = zlib.compress(encode1)
    b_encode = base64.b64encode(compress)
    # 转变 str
    e_sign = str(b_encode, encoding="utf-8")
    return e_sign
  
# 查询参数
params = {
    'cityName': '广州',
    'cateId': 0,
    'areaId': 0,
    'sort': '',
    'dinnerCountAttrId': '',
    'page': 1,
    'userId': '234746173',
    'uuid': 'cab1469b7bd84ca09ea5.1686484028.1.0.0',
    'platform': 1,
    'partner': 126,
    'originUrl': 'https://gz.meituan.com/meishi/',
    'riskLevel': 1,
    'optimusCode': 10
}

# 生成sign
params_str =  "\""
# 对key进行排序
keys = [i for i in params.keys()]
keys.sort()
# 拼接
for key in keys:
    params_str += f"{key}={params.get(key)}&"
params_str = params_str[:-1]
params_str += "\""
# 加密
sign = decode_sign(params_str)

# iP
iP = {
    'rId': 100900,
    'ver': "1.0.6",
    # 'ts': 1686369166338,
    # 'cts': 1686369167064,
    "ts":1686485181487,
    "cts":1686485200311,
    'brVD': [
        1920,
        150
    ],
    'brR': [
        [
            1920,
            1080
        ],
        [
            1920,
            981
        ],
        30,
        30
    ],
    'bI': [
        'https://gz.meituan.com/meishi/',
        ''
    ],
    'mT': [],
    'kT': [],
    'aT': [],
    'tT': [],
    'aM': '',
    'sign': sign
}
```

