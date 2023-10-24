import execjs
import requests


# v = ''
# 执行js
with open('./tonghuashun.js', 'r') as f:
    read = f.read()
v = execjs.compile(read).call('get_v')
print(v)

cookies = {
    'v': v,
}

headers = {
    'Accept': 'text/html, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    # 'Cookie': 'v=AwXUYMwDzJIULejOHcVDbB0kEko6wrmOA3eciQdqwyNLRyu0zxLJJJPGrWeU',
    'Pragma': 'no-cache',
    'Referer': 'http://q.10jqka.com.cn/',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'hexin-v': v,
}

response = requests.get(
    'http://q.10jqka.com.cn/index/index/board/all/field/zdf/order/desc/page/2/ajax/1/',
    cookies=cookies,
    headers=headers,
    verify=False,
)

print(response.status_code)
print(response.text)