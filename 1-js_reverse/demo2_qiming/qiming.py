"""python调用js"""
import json

import execjs
import requests

url = 'https://vipapi.qimingpian.cn/DataList/productListVip'

headers = {
"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
}

data = {
    "time_interval": "",
    "tag": "",
    "tag_type": "",
    "province": "",
    "lunci": "",
    "page": 1,
    "num": 20,
    "unionid": ""
}

# 打开js文件
with open("./demo2_qiming.js", "r") as f:
    jscode = f.read()

# 调用api接口拿到加密数据
resp = requests.get(url, headers=headers, data=data).json()

# 调用js文件
ctx = execjs.compile(jscode).call('s', resp["encrypt_data"])

print(ctx)
print(f"type:{type(ctx)}")