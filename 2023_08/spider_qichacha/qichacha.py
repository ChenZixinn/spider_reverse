import re

import execjs
import requests

# TODO 这里补充一下cookies
cookies = {
}


def build_api_headers(url, key_no, pid, tid, json_data=None):
    """
    构造请求头
    Args:
        url: 链接，包含参数
        key_no: 企业编号
        pid: 页面的加密参数pid
        tid: 页面的加密参数tid
        json_data: post请求的json数据
    Returns:
        response对象
    """
    headers = {'authority': 'www.qcc.com', 'accept': 'application/json, text/plain, */*',
               'accept-language': 'zh-CN,zh;q=0.9', 'cache-control': 'no-cache', 'content-type': 'application/json',
               'origin': 'https://www.qcc.com', 'pragma': 'no-cache',
               'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
               'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '"macOS"', 'sec-fetch-dest': 'empty',
               'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-origin',
               'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
               'x-requested-with': 'XMLHttpRequest', "referer": f'https://www.qcc.com/firm/{key_no}.html', 'x-pid': pid}

    # 正则取出'/api'及其后面的所有内容
    path = re.findall(r'(/api.*)', url)[0]

    print(f"path: {path}")
    # 执行qichacha.js中的run方法
    with open('./qichacha_.js', 'r', encoding='utf-8') as f:
        js = f.read()
    if json_data:
        ctx = execjs.compile(js).call('run', path, tid, json_data)
    else:
        ctx = execjs.compile(js).call('run', path, tid)
    # ctx是个字典，便利出所有的key和value，添加到headers中，不要覆盖原来的headers
    for k, v in ctx.items():
        headers[k] = v
    return headers


def post_api(url, key_no, pid, tid, json_data=None):
    """
    请求企查查api接口，post请求
    Args:
        url: 链接，包含参数
        key_no: 企业编号
        pid: 页面的加密参数pid
        tid: 页面的加密参数tid
        json_data: post请求的json数据
    Returns:
        response对象
    """
    headers = build_api_headers(url, key_no, pid, tid, json_data)

    response = requests.post(url, cookies=cookies, headers=headers, json=json_data)
    return response


def get_api(url, key_no, pid, tid, json_data=None):
    """
    get请求企查查api接口
    Args:
        url: 链接，包含参数
        key_no: 企业编号
        pid: 页面的加密参数pid
        tid: 页面的加密参数tid

    Returns:
        response对象
    """
    headers = build_api_headers(url, key_no, pid, tid, json_data)

    response = requests.get(url, cookies=cookies, headers=headers)
    return response


if __name__ == '__main__':
    # 以某企业为例
    key_no = '5dffb644394922f9073544a08f38be9f'
    pid = 'e19fd3c7ed52c1725cfff3226ba8af8c'
    tid = 'd471a1659954b0cf6eb558c770dfdb3b'

    # 请求可能需要会员，如果没有会员可以访问其他不需要会员的接口
    # get请求
    page_index = 1
    get_url = f'https://www.qcc.com/api/datalist/mainmember?keyNo={key_no}&nodeName=IpoEmployees&pageIndex={page_index}'
    main_member = get_api(get_url, key_no, pid, tid).json()
    print(main_member)

    # post请求
    post_url = 'https://www.qcc.com/api/datalist/financiallist'
    json_data = {
        'keyNo': '5dffb644394922f9073544a08f38be9f',
        'type': 'cm',
        'reportType': 1,
        'reportPeriodTypes': [
            0,
            4,
        ],
        'currency': '',
        'rate': 1,
    }
    financial = post_api(post_url, key_no, pid, tid, json_data=json_data).json()
    print(financial)
