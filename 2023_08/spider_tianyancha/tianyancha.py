"""
天眼查
"""
import time
from urllib.parse import quote
from bs4 import BeautifulSoup


import requests

cookies = {
    'HWWAFSESID': 'c15932ce0ff51dba300',
    'HWWAFSESTIME': '1690898264760',
    'csrfToken': 'lVSO3zjp2VerzFUuxWhicAUB',
    'TYCID': '648eb370307311ee9af795a802621f71',
    'sajssdk_2015_cross_new_user': '1',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%22189b163ff79869-0d463bb2be54fb8-1a525634-2073600-189b163ff7a6e7%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E5%BC%95%E8%8D%90%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fsizeqz59wy.feishu.cn%2F%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg5YjE2M2ZmNzk4NjktMGQ0NjNiYjJiZTU0ZmI4LTFhNTI1NjM0LTIwNzM2MDAtMTg5YjE2M2ZmN2E2ZTcifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22189b163ff79869-0d463bb2be54fb8-1a525634-2073600-189b163ff7a6e7%22%7D',
    'Hm_lvt_e92c8d65d92d534b0fc290df538b4758': '1690898269',
    'bannerFlag': 'true',
    'searchSessionId': '1690898275.00432266',
    'Hm_lpvt_e92c8d65d92d534b0fc290df538b4758': '1690898278',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    # 'Cookie': 'HWWAFSESID=c15932ce0ff51dba300; HWWAFSESTIME=1690898264760; csrfToken=lVSO3zjp2VerzFUuxWhicAUB; TYCID=648eb370307311ee9af795a802621f71; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22189b163ff79869-0d463bb2be54fb8-1a525634-2073600-189b163ff7a6e7%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E5%BC%95%E8%8D%90%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fsizeqz59wy.feishu.cn%2F%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg5YjE2M2ZmNzk4NjktMGQ0NjNiYjJiZTU0ZmI4LTFhNTI1NjM0LTIwNzM2MDAtMTg5YjE2M2ZmN2E2ZTcifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22189b163ff79869-0d463bb2be54fb8-1a525634-2073600-189b163ff7a6e7%22%7D; Hm_lvt_e92c8d65d92d534b0fc290df538b4758=1690898269; bannerFlag=true; searchSessionId=1690898275.00432266; Hm_lpvt_e92c8d65d92d534b0fc290df538b4758=1690898278',
    'Pragma': 'no-cache',
    'Referer': 'https://www.tianyancha.com/',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
}

params = {
    'key': '华为',
    'sessionNo': time.time(),
}
referer = f"https://www.tianyancha.com/search?key={quote(params['key'])}&sessionNo={params['sessionNo']}"
response = requests.get('https://www.tianyancha.com/search', params=params, cookies=cookies, headers=headers)
# print(response.text)

soup = BeautifulSoup(response.text, "lxml")
company_list = soup.select("div.index_search-box__7YVh6")
for i in company_list:
    company_name = i.select_one("a.index_alink__zcia5 span").text
    url = i.select_one("a.index_alink__zcia5").get("href")

    import requests

    cookies = {
        'HWWAFSESID': 'c15932ce0ff51dba300',
        'HWWAFSESTIME': '1690898264760',
        'csrfToken': 'lVSO3zjp2VerzFUuxWhicAUB',
        'TYCID': '648eb370307311ee9af795a802621f71',
        'sajssdk_2015_cross_new_user': '1',
        'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%22189b163ff79869-0d463bb2be54fb8-1a525634-2073600-189b163ff7a6e7%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E5%BC%95%E8%8D%90%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fsizeqz59wy.feishu.cn%2F%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg5YjE2M2ZmNzk4NjktMGQ0NjNiYjJiZTU0ZmI4LTFhNTI1NjM0LTIwNzM2MDAtMTg5YjE2M2ZmN2E2ZTcifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22189b163ff79869-0d463bb2be54fb8-1a525634-2073600-189b163ff7a6e7%22%7D',
        'Hm_lvt_e92c8d65d92d534b0fc290df538b4758': '1690898269',
        'bannerFlag': 'true',
        'searchSessionId': str(params["sessionNo"]),
        'Hm_lpvt_e92c8d65d92d534b0fc290df538b4758': '1690899661',
    }

    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        # 'Cookie': 'HWWAFSESID=c15932ce0ff51dba300; HWWAFSESTIME=1690898264760; csrfToken=lVSO3zjp2VerzFUuxWhicAUB; TYCID=648eb370307311ee9af795a802621f71; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22189b163ff79869-0d463bb2be54fb8-1a525634-2073600-189b163ff7a6e7%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E5%BC%95%E8%8D%90%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fsizeqz59wy.feishu.cn%2F%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg5YjE2M2ZmNzk4NjktMGQ0NjNiYjJiZTU0ZmI4LTFhNTI1NjM0LTIwNzM2MDAtMTg5YjE2M2ZmN2E2ZTcifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22189b163ff79869-0d463bb2be54fb8-1a525634-2073600-189b163ff7a6e7%22%7D; Hm_lvt_e92c8d65d92d534b0fc290df538b4758=1690898269; bannerFlag=true; searchSessionId=1690898275.00432266; Hm_lpvt_e92c8d65d92d534b0fc290df538b4758=1690899661',
        'Pragma': 'no-cache',
        'Referer': referer,
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
    }

    response = requests.get(url, cookies=cookies, headers=headers)

    try:
        soup = BeautifulSoup(response.text, "lxml")
        text = soup.select_one("span.index_copy-text__ri7W6").text
        print(f"统一社会信用代码: {text}")
    except Exception as e:
        print(e)
        print(f"获取失败：{url}")