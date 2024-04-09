import execjs
import requests
# 获取public
import requests

cookies = {
    'SUNWAY-ESCM-COOKIE': 'ddafdfab-9b93-4305-945b-638765c0e908',
    '__jsluid_s': '59576d8aec12dcd0b8d7ace276153a5c',
    'JSESSIONID': 'B4CB9A846B989F4E415958AA5D1618E4',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    # 'Content-Length': '0',
    # 'Cookie': 'SUNWAY-ESCM-COOKIE=ddafdfab-9b93-4305-945b-638765c0e908; __jsluid_s=59576d8aec12dcd0b8d7ace276153a5c; JSESSIONID=B4CB9A846B989F4E415958AA5D1618E4',
    'Origin': 'https://ec.minmetals.com.cn',
    'Pragma': 'no-cache',
    'Referer': 'https://ec.minmetals.com.cn/open/home/purchase-info',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
}

public_key = requests.post('https://ec.minmetals.com.cn/open/homepage/public', cookies=cookies, headers=headers).text
print(public_key)

# 获取数据
cookies = {
    'SUNWAY-ESCM-COOKIE': 'ddafdfab-9b93-4305-945b-638765c0e908',
    '__jsluid_s': '59576d8aec12dcd0b8d7ace276153a5c',
    'JSESSIONID': '996122C23C4B5536966CF09E0011D71F',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    # 'Cookie': 'SUNWAY-ESCM-COOKIE=ddafdfab-9b93-4305-945b-638765c0e908; __jsluid_s=59576d8aec12dcd0b8d7ace276153a5c; JSESSIONID=996122C23C4B5536966CF09E0011D71F',
    'Origin': 'https://ec.minmetals.com.cn',
    'Pragma': 'no-cache',
    'Referer': 'https://ec.minmetals.com.cn/open/home/purchase-info',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
}


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