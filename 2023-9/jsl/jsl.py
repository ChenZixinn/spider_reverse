import json

import requests
import re
import execjs

session = requests.session()
headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://beian.miit.gov.cn/index',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
}

# 第一次请求，获取cookie：__jsl_clearance_s参数
response = session.get('https://beian.miit.gov.cn/index', headers=headers)
cookie_js = re.findall(r'<script>document.cookie=(.*?);location.href=', response.text)[0]
cookie = execjs.eval(cookie_js)
cookie_value = re.findall('__jsl_clearance_s=(.*?); Max-age=', cookie)
session.cookies.set('__jsl_clearance_s', cookie_value[0])

# 第二次请求，获取加密js代码
response = session.get('https://beian.miit.gov.cn/index', headers=headers)
with open('./jsl.html', 'w') as f:
    # 这里面是加密代码，有三种加密方式(md5\sha1\sha256),根据data['ha']判断
    f.write(response.text)
# 获取go里面的参数
go_js = re.findall(r';go\((.*?)\)</script>', response.text)[0]
data = json.loads(go_js)
with open('./jsl.js', 'r') as f:
    read = f.read()
cookie_value = execjs.compile(read).call('get_cookie', data)[0]

# 第三次请求，携带一次返回的cookie和第二次请求的js代码生成的cookie，请求页面
session.cookies.set(data['tn'], cookie_value)
res = session.get('https://beian.miit.gov.cn/index', headers=headers)
print(res.text)  # 请求成功
