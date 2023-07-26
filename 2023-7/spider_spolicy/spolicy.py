import execjs
import requests

cookies = {
    'JSESSIONID': '06E56173D2C3F93ED26BD48A9F0B661D',
    'Hm_lvt_6146f11e5afab71309b3accbfc4a932e': '1690078456,1690298958',
    'Hm_lpvt_6146f11e5afab71309b3accbfc4a932e': '1690388225',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/octet-stream',
    # 'Cookie': 'JSESSIONID=06E56173D2C3F93ED26BD48A9F0B661D; Hm_lvt_6146f11e5afab71309b3accbfc4a932e=1690078456,1690298958; Hm_lpvt_6146f11e5afab71309b3accbfc4a932e=1690388225',
    'Origin': 'http://www.spolicy.com',
    'Pragma': 'no-cache',
    'Referer': 'http://www.spolicy.com/',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
}

with open("./spolicy.js") as f:
    js_code = f.read()

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