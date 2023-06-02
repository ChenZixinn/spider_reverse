# 爬虫逆向



本项目记录一些学习爬虫逆向的案例或者资料



## 一、js逆向



#### 定位数据接口的方式：

- 静态页面字体加密：HTML实体编码
- 数据加密：动态数据 -> ajax **JSON.parse**



## js逆向demo

### 1 whggzy（接口参数）

#### 1.1 搜索响应数据找到接口

接口为 “http://www.whggzy.com/front/search/category”

![image-20230602094847529](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/爬虫逆向/README.assets/image-20230602094847529.png)



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

![image-20230602095429289](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/爬虫逆向/README.assets/image-20230602095429289.png)



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







### 2 企名科技(数据加密)

url: https://www.qimingpian.com/finosda/project/pinvestment

#### 2.1 搜索数据

搜索不到数据，判断为通过ajax数据加密

找到接口：

![image-20230602114517059](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/爬虫逆向/README.assets/image-20230602114517059.png)



#### 2.2 断点调试

找到js文件

![image-20230602114651972](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/爬虫逆向/README.assets/image-20230602114651972.png)



找到加密数据的方法：

![image-20230602104759972](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/爬虫逆向/README.assets/image-20230602104759972.png)



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



### 3 建筑(AES)

url： https://jzsc.mohurd.gov.cn/data/company



#### 3.1 获取数据

接口：https://jzsc.mohurd.gov.cn/APi/webApi/dataservice/query/comp/list?pg=0&pgsz=15&total=0



数据经过加密，data: 95780ba09437300...



#### 3.2 查找js

通过接口名称找到js文件，在js文件里搜索JSON.parse，打断点进行调试

![image-20230602142415295](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/爬虫逆向/README.assets/image-20230602142415295.png)



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





### 5 1688 TODO

url: https://sale.1688.com/factory/category.html?spm=a260k.22464671.home2019category.1.6e517a6exMGJcG&mainId=10166

#### 5.1 查看接口

有加密参数，找这个参数的js文件

![image-20230602100140806](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/爬虫逆向/README.assets/image-20230602100140806.png)

#### 5.2 搜索加密参数

![image-20230602100323351](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/爬虫逆向/README.assets/image-20230602100323351.png)



### 6 cninfo TODO

url: https://webapi.cninfo.com.cn/#/marketDataDate



#### 6.1、加密字段

![image-20230602102009457](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/爬虫逆向/README.assets/image-20230602102009457.png)



#### 6.2 搜索js文件

通过标头名或者路径搜索，找到js文件

![image-20230602102531128](/Users/chenzixin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Code/python/爬虫逆向/README.assets/image-20230602102531128.png)