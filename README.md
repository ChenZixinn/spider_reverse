# 爬虫逆向



本项目记录一些学习爬虫逆向的案例或者资料，仅供学习参考，请勿用于非法用途。

目前已经爬取：**中国五矿、qq音乐、产业政策大数据平台、企知道、雪球网、1688、七麦数据、whggzy、企名科技、mohurd、艺恩数据、欧科云链(oklink)、企知道**

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



## 三、其他

### 1、空气质量指数（反debug）

url：https://www.aqistudy.cn/historydata/monthdata.php?city=%E5%8C%97%E4%BA%AC

#### 1.1 反debug

##### 1.1.1 跳过debug

![image-20230622123802952](./README.assets/image-20230622123802952.png)

##### 1.1.2 弹出开发者工具

![image-20230622124037862](./README.assets/image-20230622124037862.png)

#### 1.2 请求参数解析

通过js生产请求参数

 [aqi.js](other/demo1_aqi/aqi.js) 

![image-20230705220910980](./README.assets/image-20230705220910980.png)



### 2、天安财险

![image-20230705221116122](./README.assets/image-20230705221116122.png)

- 完成登陆请求中的json_key参数加密方法
- 解析返回的接口

 [tianaw.js](other/demo2_tianaw/tianaw.js)



### 3、企知道（2023-7-23：反debug、AES加密、逆向）

url：https://patents.qizhidao.com/



#### 3.1 反debug

这个网站的反debug是带参数的，直接设置跳过会导致返回不了结果卡死。需要通过脚本返回空的值，注意：需要等页面加载后再执行。

```js
func_constructor_ = Function.prototype.constructor;
Function.prototype.constructor = function (a) {
    if (a == 'debugger') {
        return function(){};
    }
    return func_constructor_(a);
};
```

![image-20230723113329633](./README.assets/image-20230723113329633.png)



#### 3.2、构造请求接口

复制接口的cURL到https://curlconverter.com/自动构造，代码有点长这里只放片段：

```python
import requests

cookies = {
    # ...
}

headers = {
    'authority': 'app.qizhidao.com',
  	# ...
}

json_data = {
    'text_ver': 'N',
    # ...
    'statement': '华为',
    'filter': '',
    'pageCount': 21073,
    'checkResult': True,
}

response = requests.post(
    'https://app.qizhidao.com/qzd-bff-patent/patent/simple-version/search',
    cookies=cookies,
    headers=headers,
    json=json_data,
).json()

# 返回结果：
# {'code': 0, 'status': 0, 'success': True, 'msg': '成功', 'data1': 'ikEaI3qCl29i...', 'hasUse': 2}
```



#### 3.3 解密

##### 3.3.1 参数解释

**data1**：这个是加密后的参数，需要解密。AES加密

**hasUse**：加密的key的位置。key是个字典，2代表第二个value



##### 3.3.2 查找加密js

- 搜索”encrypt“

![image-20230723115442814](./README.assets/image-20230723115442814.png)

- 搜索接口

![image-20230723120236468](./README.assets/image-20230723120236468.png)

> 交集在**186ef37.js**



##### 3.3.3 断点调试

![image-20230723120510583](./README.assets/image-20230723120510583.png)

```js
// 第一个参数是密文，第二个参数是加密的key
// AES加密
_0xecb012 = function(_0x23e639, _0x5b5a7f) {
            return function(_0x1a0f85, _0x3f0bf9) {
                var _0x17296a = a0_0xe452
                  , _0x49db2a = _0x2ecfe6['a']['enc']['Utf8']['parse'](_0x3f0bf9 || '46cc793c53' + _0x17296a(0x1f7))
                  , _0x5bc6c6 = _0x2ecfe6['a'][_0x17296a(0x1dc)]['decrypt'](_0x1a0f85, _0x49db2a, {
                    // 加密模式是ECB
                    'mode': _0x2ecfe6['a'][_0x17296a(0x22f)][_0x17296a(0x27a)],
                    'padding': _0x2ecfe6['a'][_0x17296a(0x242)][_0x17296a(0x27f)]
                });
                return _0x2ecfe6['a'][_0x17296a(0x23b)][_0x17296a(0x238)][_0x17296a(0x1f9)](_0x5bc6c6)[_0x17296a(0x1d6)]();
            }(_0x23e639, _0x5b3606[_0x5b5a7f]);
```



通过观察发现key不是固定的，存储在一个字典中。通过接口返回的值hasUse选择对应的key。

![image-20230723121116914](./README.assets/image-20230723121116914.png)

#### 3.4  构造解密函数

```python
def AES_decrypt(data, hasUse:int):
    key_list = [b"xc46VoB49X3PGYAg", b"KE3pb84wxqLTZEG3", b"18Lw0OEaBBUwHYNT", b"jxxWWIzvkqEQcZrd", b"40w42rjLEXxYhxRn",
                b"K6hkD03WNW8N1fPM", b"I8V3IwIhrwNbWxqz", b"3JNNbxAP4zi5oSGA", b"7pUuESQl8aRTFFKK", b"KB4GAHN6M5soB3WV"]
    # 解码
    html = base64.b64decode(data)
    # mode为ECB的AES加密
    aes = AES.new(key_list[hasUse-1], AES.MODE_ECB)
    # 解密
    info = aes.decrypt(html)
    # 填充
    decrypt = unpad(info, AES.block_size).decode()
    return decrypt
```



##### 3.5 结果

[完整代码](./other/demo3_qizhidao/crawler_qizhidao.py)

![image-20230723123350450](./README.assets/image-20230723123350450.png)



# 案例_2023-7（TODO）



## 阿里系cookie加密（acw_sc__v2 ）

#### 1、请求

有两次请求，第一次获取js代码，第二次通过代码生成参数发送请求

尝试本地替换，发现没有进入方法。是在VM中执行的



#### 2、查找js代码

##### 打断点，查看堆栈

进入debug，可以看到调用的位置，打断点调试，**进入堆栈中的方法**。

![image-20230725000802567](./README.assets/image-20230725000802567.png)



##### 找到参数

参数是**arg2**，查找这个参数。

![image-20230725000921359](./README.assets/image-20230725000921359.png)



##### 找生成参数的js代码

返回原代码，找到生成arg2的代码，把混淆的代码还原。通过对比，只有arg1值是不固定的，在第一次请求中就包含了这个值，通过正则提取，传入js代码里生成就可以得到cookie。

```js
String['prototype']['hexXor'] = function (_0x4e08d8) {
    var _0x5a5d3b = '';
    for (var _0xe89588 = 0x0; _0xe89588 < this['length'] && _0xe89588 < _0x4e08d8['length']; _0xe89588 += 0x2) {
        var _0x401af1 = parseInt(this['slice'](_0xe89588, _0xe89588 + 0x2), 0x10);
        var _0x105f59 = parseInt(_0x4e08d8['slice'](_0xe89588, _0xe89588 + 0x2), 0x10);
        var _0x189e2c = (_0x401af1 ^ _0x105f59)['toString'](0x10);
        if (_0x189e2c['length'] == 0x1) {
            _0x189e2c = '\x30' + _0x189e2c;
        }
        _0x5a5d3b += _0x189e2c;
    }
    return _0x5a5d3b;
}

String['prototype']['unsbox'] = function () {
    var _0x4b082b = [0xf, 0x23, 0x1d, 0x18, 0x21, 0x10, 0x1, 0x26, 0xa, 0x9, 0x13, 0x1f, 0x28, 0x1b, 0x16, 0x17, 0x19, 0xd, 0x6, 0xb, 0x27, 0x12, 0x14, 0x8, 0xe, 0x15, 0x20, 0x1a, 0x2, 0x1e, 0x7, 0x4, 0x11, 0x5, 0x3, 0x1c, 0x22, 0x25, 0xc, 0x24];
    var _0x4da0dc = [];
    var _0x12605e = '';
    for (var _0x20a7bf = 0x0; _0x20a7bf < this['length']; _0x20a7bf++) {
        var _0x385ee3 = this[_0x20a7bf];
        for (var _0x217721 = 0x0; _0x217721 < _0x4b082b['length']; _0x217721++) {
            if (_0x4b082b[_0x217721] == _0x20a7bf + 0x1) {
                _0x4da0dc[_0x217721] = _0x385ee3;
            }
        }
    }
    _0x12605e = _0x4da0dc['join']('');
    return _0x12605e;
}

function get_cookie(arg1) {

    // 这个值是变化的
    // var arg1 = 'E7FC4E89FD5A4E550E19A8BE2061BD16BE4C0DB3';

    var _0x23a392 = arg1['unsbox']();

    var _0x5e8b26 = '3000176000856006061501533003690027800375'
// arg2 = _0x23a392[_0x55f3('0x1b', '\x7a\x35\x4f\x26')](_0x5e8b26);
    arg2 = _0x23a392['hexXor'](_0x5e8b26);

    return arg2
}

console.log(get_cookie('E7FC4E89FD5A4E550E19A8BE2061BD16BE4C0DB3'));
```



#### 3、发起请求、生成cookie

[代码](2023-7/day2_cookie加密等/spider_xueqiu/ali.py)

```python
import re

import execjs
import requests

headers = {
# ...
}

# 获取到第一次请求的值，返回生成cookie的代码，里面包含了需要的参数 arg1
response = requests.get('https://xueqiu.com/today', headers=headers).text

# with open("./ali.html", 'w', encoding='utf-8') as f:
#     f.write(response)

# 正则提取arg1的值
# Regular expression pattern to match the argument assignment
pattern = r"var arg1='([A-F0-9]+)';"

# Search for the pattern in the JavaScript code
arg1 = re.search(pattern, response).group(1)

with open("./xueqiu.js") as f:
    js_code = f.read()

cookie_acw_sc__v2 = execjs.compile(js_code).call("get_cookie", arg1)
print(cookie_acw_sc__v2)

cookies = {
    'acw_sc__v2': cookie_acw_sc__v2,
		# ...
}

headers = {
 #...
}

response = requests.get('https://xueqiu.com/today', cookies=cookies, headers=headers).text
print(response)

```



## 产业政策大数据平台（带参数的反debug、进制流加密）

http://www.spolicy.com/



#### 1.1 查看调用堆栈，找到第一个方法

![image-20230723101606586](./README.assets/image-20230723101606586.png)

```js
// 调用的方法
[f(-302, -39, -274, -178, "mK8a") + o(430, 0, "sXA$") + "r"](t[c(-294, "o#Hz", 0, -62)](t[h(1402, 1326, 1439, "wJdL")], t[h(1596, 1182, 1426, "2QAW")]))[c(-180, "mK8a", 0, -159)](t[h(1113, 950, 1143, "Es!I")])

// 逐步拆解

[f(-302, -39, -274, -178, "mK8a") + o(430, 0, "sXA$") + "r"]
// => ['constructor']

(t[c(-294, "o#Hz", 0, -62)](t[h(1402, 1326, 1439, "wJdL")], t[h(1596, 1182, 1426, "2QAW")]))
// => debugger

[c(-180, "mK8a", 0, -159)]
// => call

(t[h(1113, 950, 1143, "Es!I")])
// => action
```



#### 1.2执行脚本跳过debugger

```js
func_constructor_ = Function.prototype.constructor;
Function.prototype.constructor = function (a) {
    if (a == 'debugger') {
        return function(){};
    }
    return func_constructor_(a);
};
```

![image-20230725233312016](./README.assets/image-20230725233312016.png)





#### 1.3 XHR断点找到接口

xhr中添加接口的路径：**/info_api/policyType/showPolicyType**



找到**interceptors.response.use**的位置，返回的结果中存在了加密数据**data**。

![image-20230726000638651](./README.assets/image-20230726000638651.png)



#### 1.4 找生成的方法，生成加密方法

找到生成o的位置：

![image-20230727000547059](./README.assets/image-20230727000547059.png)



找到生成的方法：

![image-20230727000609949](./README.assets/image-20230727000609949.png)



这里缺少了Writer，断点进入，这个代码是在vm中的生成的，找到函数的位置，扣下来完整的代码，用变量接收：

```js
var writer_;
commonjsGlobal = global;
!function (g) {
    var r, e, t, i;
    r = {...},
        e = {},
        t = [16],
        i = function t(n) {
            var o = e[n];
            return o || r[n][0].call(o = e[n] = {
                exports: {}
            }, t, o, o.exports),
                o.exports
        }(t[0]),
        i.util.global.protobuf = i,
    module && module.exports && (module.exports = i)
    // 方法存放在i变量中
    writer_ = i;
}()


function PolicyInfoByTypeIdParam_encode(m, w) {
    if (!w)
        w = writer_.Writer.create()
    if (m.policyType != null && Object.hasOwnProperty.call(m, "policyType"))
        w.uint32(10).string(m.policyType)
    if (m.centralId != null && Object.hasOwnProperty.call(m, "centralId"))
        w.uint32(18).string(m.centralId)
    if (m.province != null && Object.hasOwnProperty.call(m, "province"))
        w.uint32(26).string(m.province)
    if (m.city != null && Object.hasOwnProperty.call(m, "city"))
        w.uint32(34).string(m.city)
    if (m.downtown != null && Object.hasOwnProperty.call(m, "downtown"))
        w.uint32(42).string(m.downtown)
    if (m.garden != null && Object.hasOwnProperty.call(m, "garden"))
        w.uint32(50).string(m.garden)
    if (m.sort != null && Object.hasOwnProperty.call(m, "sort"))
        w.uint32(56).uint32(m.sort)
    if (m.pageNum != null && Object.hasOwnProperty.call(m, "pageNum"))
        w.uint32(64).uint32(m.pageNum)
    if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
        w.uint32(72).uint32(m.pageSize)
    if (m.homePageFlag != null && Object.hasOwnProperty.call(m, "homePageFlag"))
        w.uint32(80).uint32(m.homePageFlag)
    return w
}



/**
 * 接收类型和页号，返回请求所需的参数
 * @param type 类型，str
 * @param page 页号，int
 * @returns {*} 加密后的数据，字典格式，数据在"data"
 */
function get_data(type, page) {
    var data = {
        "policyType": type,
        "province": "",
        "city": "",
        "downtown": "",
        "garden": "",
        "centralId": "",
        "sort": 0,
        "homePageFlag": 1,
        "pageNum": page,
        "pageSize": 7
    }
    result = PolicyInfoByTypeIdParam_encode(data).finish().slice()

    return result;
}

console.log(get_data("3", 1))
```



#### 1.5 携带加密参数发起请求

```python
import execjs
import requests

cookies = {
    # 略
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    # ... 略
}

with open("./spolicy.js") as f:
    js_code = f.read()

# 获取type4的，第一页的请求加密参数
data = execjs.compile(js_code).call("get_data", "4", 1)
print(data)

response = requests.post(
    'http://www.spolicy.com/info_api/policyType/showPolicyType',
    cookies=cookies,
    headers=headers,
    # 转为bytes
    data=bytes(data["data"]),
    verify=False,
).json()

print(response)

```





### 中国五矿（单文件webpack）

url：https://ec.minmetals.com.cn/open/home/purchase-info

#### 1、接口解析

每次请求都有两个接口，**public**获取公钥，用于后面加密参数；**by-lx-page**是数据接口，参数param是加密后的请求参数

![image-20230730115501441](./README.assets/image-20230730115501441.png)



#### 2、解密js

##### 2.1、搜索**/open/homepage/public**（public公钥接口路径）找到js文件位置

![image-20230730115747471](./README.assets/image-20230730115747471.png)

##### 2.2、在生成位置找到加载器

![image-20230730110315271](./README.assets/image-20230730110315271.png)

##### 2.3、只要加载器部分，下面的函数可以只复制需要的

![image-20230730110359241](./README.assets/image-20230730110359241.png)

##### 2.4、补充需要的模块，在这里搜索9816，复制到代码中

![image-20230730111507516](./README.assets/image-20230730111507516.png)

##### 2.5、运行时报错，原因是缺少模块，打印出e，看看报错前的模块名，补充模块

```shel
/minmetals.js:52
return A[e].call(t.exports, t, t.exports, g),
                        ^
TypeError: Cannot read property 'call' of undefined

```

##### 2.6、之后补齐所有代码，有两个部分是变化的，**public**公钥和**e**请求参数部分，后续通过python传入

```js
// ....其他代码省略
function get_param(public_key, param) {
    // public_key
    r = public_key
    // e: params
    e = param
    t.setPublicKey(r),
        a = m(m({}, e), {}, {
            // 这里是md5加密，不用扣代码了，直接写一个
            sign: md5Hash(JSON.stringify(e)),
            timeStamp: +new Date
        });
    s = t.encryptLong(JSON.stringify(a))
    return s
}

// 公钥
r = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCSiymi3Afc6HgSatBwseBv/Q87Ul18dAPavud/9Jbr+w2xIoD9t/f1k8A/cv2apGmPwKnudecWa5IfXPVUvoqjG8GsTBR9kL4QKkBveZx46wx2KZEBSbjx9Ok92hgr6sCEHT4sO53VF6rhzYJ4WaqsugGdL3CrZEGV3x7MuvZ0tQIDAQAB'
// 请求参数
e = {
    "inviteMethod": "",
    "businessClassfication": "",
    "mc": "",
    "lx": "ZBGG",
    "dwmc": "",
    "pageIndex": 1
}
get_param(r, e)
```



#### 3、编写程序

分为两个步骤，1是获取public公钥，2是将参数和公钥进行加密，发起请求

```python
import execjs
import requests
# 获取public
import requests

cookies = {
    # ...
}
headers = {
    # ...
}

# 获取public_key
public_key = requests.post('https://ec.minmetals.com.cn/open/homepage/public', cookies=cookies, headers=headers).text
print(public_key)


# 获取parms加密参数
with open("./minmetals.js") as f:
    js_code = f.read()

param = {
    "inviteMethod": "",
    "businessClassfication": "",
    "mc": "",
    "lx": "ZBGG",
    "dwmc": "",
    "pageIndex": 2
}
param = execjs.compile(js_code).call("get_param", public_key, param)

json_data = {
    'param': param
}

response = requests.post(
    'https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page',
    cookies=cookies,
    headers=headers,
    json=json_data,
).json()

print(response)
```





### QQ音乐

url:https://y.qq.com/n/ryqq/search

#### 1、接口解析

![image-20230730123000503](./README.assets/image-20230730123000503.png)

接口中**sign**参数为加密参数



#### 2、还原js

##### 2.1、搜索sign找到js文件

![image-20230730122850019](./README.assets/image-20230730122850019.png)



##### 2.2、加密的方法是o()，找到o的生成位置

 **加载器**

n为加载器，把n的代码复制（webpack）

![image-20230730124305966](./README.assets/image-20230730124305966.png)



```js
var loader_;
!function(e) {
  // ...
  // f是加载器，用全局变量接收
  loader_ = f;
}([])
```



**加载器方法**

这里是具体方法，把整个代码复制，在原来的代码中导入

![image-20230730124318895](./README.assets/image-20230730124318895.png)

```js
// 加载这个方法的所有代码
require("module")
var loader_;
!function(e) {
  // ...
  // f是加载器，用全局变量接收
  loader_ = f;
}([])
```



##### 2.3、测试

使用相同的参数，网页中返回的加密参数值为："zzb5f83fe81ctmp7buyrgfgmht5hfggeb4159a0"

```js
// ....

// 对比和网页的加密结果是否一致
origin_result = "zzb5f83fe81ctmp7buyrgfgmht5hfggeb4159a0"
result = loader_(350).default(t_data)

// 并不一致
// zzb5f83fe81ctmp7buyrgfgmht5hfggeb4159a0
// zzb2938d59cvfb4kyj1do3c4ldgj6o9qe0f41793
```



##### 2.4、补充环境

加密方法是一样的，但是结果不一样，考虑是环境的问题，补充一些环境再测试

![image-20230730124957945](./README.assets/image-20230730124957945.png)

```js
navigator = {
    canGoBack: true,
    canGoForward: false,
    currentEntry: {
        "id": "661fc912-9d2d-45e5-a144-fae79c979d88",
        "index": 5,
        "key": "0c8d1b22-53bb-4d51-98e0-5830e055d2b9",
        "ondispose": null,
        "sameDocument": true,
        "url": "https://y.qq.com/n/ryqq/search?w=%E5%91%A8%E6%9D%B0%E4%BC%A6&t=song&remoteplace=txt.yqq.top"
    },
    "oncurrententrychange": null,
    "onnavigate": null,
    "onnavigateerror": null,
    "onnavigatesuccess": null,
    "transition": null
}
location = {
    "ancestorOrigins": {},
    "href": "https://y.qq.com/n/ryqq/search?w=%E5%91%A8%E6%9D%B0%E4%BC%A6&t=song&remoteplace=txt.yqq.top",
    "origin": "https://y.qq.com",
    "protocol": "https:",
    "host": "y.qq.com",
    "hostname": "y.qq.com",
    "port": "",
    "pathname": "/n/ryqq/search",
    "search": "?w=%E5%91%A8%E6%9D%B0%E4%BC%A6&t=song&remoteplace=txt.yqq.top",
    "hash": ""
}
// ....

console.log("zzb5f83fe81ctmp7buyrgfgmht5hfggeb4159a0");
console.log(loader_(350).default(t_data));

//zzb5f83fe81ctmp7buyrgfgmht5hfggeb4159a0
//zzb5f83fe81ctmp7buyrgfgmht5hfggeb4159a0
```



### 3、编写代码

```python
import time

import execjs
import requests

# cookies和headers一定要正确才能请求到
cookies = {
    # ...
}

headers = {
  # ...
}

# 请求参数
singer = "周杰伦"
page_num = 1
data = '{"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":"1152921504860531892","g_tk_new_20200303":1531704962,"g_tk":1531704962},"req_1":{"method":"DoSearchForQQMusicDesktop","module":"music.search.SearchCgiService","param":{"remoteplace":"txt.yqq.top","searchid":"68939297501935721","search_type":0,"query":"'+singer+'","page_num":'+str(page_num)+',"num_per_page":10}}}'

# 获取sign加密参数
with open("./loader.js") as f:
    js_code = f.read()

time_str = round(time.time() * 1000)
sign = execjs.compile(js_code).call("get_sign", data)

params = {
    # 时间戳
    '_': time_str,
    # 加密参数
    'sign': sign,
}

# 这里data要编码
response = requests.post('https://u.y.qq.com/cgi-bin/musics.fcg', params=params, cookies=cookies, headers=headers, data=data.encode()).json()

print(response)
```

