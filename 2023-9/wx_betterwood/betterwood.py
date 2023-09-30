import execjs
import requests

# 需要两个参数
# MessageId = ''
# Signature = ''
url = 'https://api.betterwood.com/hotel/brand/museum/list'

# 执行js
with open('./betterwood.js', 'r') as f:
    read = f.read()
v = execjs.compile(read).call('get_headers', url)
MessageId = v['MessageId']
Signature = v['Signature']

headers = {
    'Connection': 'keep-alive',
    'BusinessType': '1',
    'MessageId': MessageId,
    'DeviceManufacture': 'devtools',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.3 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1 wechatdevtools/1.06.2308310 MicroMessenger/8.0.5 Language/zh_CN webview/',
    'content-type': 'application/json',
    'AppVersion': '2.3.6',
    'OsVersion': 'iOS 10.0.1',
    'Signature': Signature,
    'Channel': 'bdw',
    'ClientType': '5',
    'DeviceModel': 'iPhone 5',
    'Accept': '*/*',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://servicewechat.com/wx578d66d433900d15/devtools/page-frame.html',
}
response = requests.get(url, headers=headers)

print(response.json())
