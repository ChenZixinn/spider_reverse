import re

import execjs
import requests

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://xueqiu.com/today',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
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

with open("./ali.js") as f:
    js_code = f.read()

cookie_acw_sc__v2 = execjs.compile(js_code).call("get_cookie", arg1)
print(cookie_acw_sc__v2)

cookies = {
    'acw_tc': '276077b016902199053576571e1f6b574bdc6999622d01493039816fb81269',
    'acw_sc__v2': cookie_acw_sc__v2,
    'xq_a_token': '197a3a870824d1754f6edf083d719bd1a3aabe88',
    'xqat': '197a3a870824d1754f6edf083d719bd1a3aabe88',
    'xq_r_token': 'f3676d47182482b690747de814788450c6d4fcf1',
    'xq_id_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTY5MTYyNzcwNSwiY3RtIjoxNjkwMjE5ODY0NzczLCJjaWQiOiJkOWQwbjRBWnVwIn0.WkyFVi-JnEvpzeMg4HXMUJMS-YC7kGFRU5JQYv_5Hk1KBMIzUrv2xsjOZ06QhBCZQJDN9ILBaPbfZuCIZu6v9q3PD9LpkjVcnePDh7UZiJcMyAiJ6DupgwiPA5AUsZQjCaUyq_uuqn_kEVEqqfqb9OCQ0jK63Qb9KcoDH4gPSa6hg2nxjgCDscBOMWgdsfQoR8sPcKZKOuPjscstKesZWNoE0JCHLj-hnq0d__XJrviVQA-niCiYXPEzPR4aia-AuOggd-q5yLRFV21t0Av8vFL5OPvOAEP7tz6LP9vjZ49L9gTmUHAa-V4AccRk0C98FwdP6gkjfWxdS7AXofcqNg',
    'u': '921690219906273',
    'Hm_lvt_1db88642e346389874251b5a1eded6e3': '1690219908',
    'device_id': '309a2e24c35d715301c30ba218ba1486',
    'Hm_lpvt_1db88642e346389874251b5a1eded6e3': '1690219917',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    # 'Cookie': 'acw_tc=276077b016902199053576571e1f6b574bdc6999622d01493039816fb81269; acw_sc__v2=64beb581d41d6e9ad024f58d7fd14e534fe948b9; xq_a_token=197a3a870824d1754f6edf083d719bd1a3aabe88; xqat=197a3a870824d1754f6edf083d719bd1a3aabe88; xq_r_token=f3676d47182482b690747de814788450c6d4fcf1; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTY5MTYyNzcwNSwiY3RtIjoxNjkwMjE5ODY0NzczLCJjaWQiOiJkOWQwbjRBWnVwIn0.WkyFVi-JnEvpzeMg4HXMUJMS-YC7kGFRU5JQYv_5Hk1KBMIzUrv2xsjOZ06QhBCZQJDN9ILBaPbfZuCIZu6v9q3PD9LpkjVcnePDh7UZiJcMyAiJ6DupgwiPA5AUsZQjCaUyq_uuqn_kEVEqqfqb9OCQ0jK63Qb9KcoDH4gPSa6hg2nxjgCDscBOMWgdsfQoR8sPcKZKOuPjscstKesZWNoE0JCHLj-hnq0d__XJrviVQA-niCiYXPEzPR4aia-AuOggd-q5yLRFV21t0Av8vFL5OPvOAEP7tz6LP9vjZ49L9gTmUHAa-V4AccRk0C98FwdP6gkjfWxdS7AXofcqNg; u=921690219906273; Hm_lvt_1db88642e346389874251b5a1eded6e3=1690219908; device_id=309a2e24c35d715301c30ba218ba1486; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1690219917',
    'Pragma': 'no-cache',
    'Referer': 'https://xueqiu.com/today',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
}

response = requests.get('https://xueqiu.com/today', cookies=cookies, headers=headers).text
print(response)
