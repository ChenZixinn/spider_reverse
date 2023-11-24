import requests

cookies = {
    'AGL_USER_ID': '213cdeb8-afdf-4d0b-a294-941178f47726',
    'utmStore': '%7B%22flow_type%22%3A%22%E5%85%8D%E8%B4%B9%22%7D',
    '_bl_uid': '40l8Xphva48vmXwsmi6mdjt4Ia53',
    'anonymous_id': '18bfb1fd336195-0e70cb6534bec1-26031051-2073600-18bfb1fd3374a6',
    'citycode': '%7B%22cityCode%22%3A310100%2C%22cityName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%2C%22provinceCode%22%3A310000%2C%22provinceName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%7D',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%2218bfb1fd336195-0e70cb6534bec1-26031051-2073600-18bfb1fd3374a6%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiZmIxZmQzMzYxOTUtMGU3MGNiNjUzNGJlYzEtMjYwMzEwNTEtMjA3MzYwMC0xOGJmYjFmZDMzNzRhNiJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218bfb1fd336195-0e70cb6534bec1-26031051-2073600-18bfb1fd3374a6%22%7D',
    'sensorsdata2015session': '%7B%7D',
    'webSource': 'https%3A%2F%2Fwww.google.com%2F',
    'p_pub_key': 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBCW08wCzCOzs5qU7RxL0VYV7TBZr3rrYYqFrI1Nr1Na+FP0B52ffsIqioES8tZEqDXQ59Ksd9rFHutXsRWB6urfBb+MJfmsXynp/2IVhHq+DK68vptgzkGadT8w51uyllExRBj3t2cmkqxrzdrIyCMIXNdnGRCNwJ/taiwftNOQIDAQAB',
    'p_pub_gr': '1700812808417',
    'JSESSIONID': 'E9CE898324B66C77DF00C8BA543E3FB1',
    '_znt': '8.93',
}
cookies = None

headers = {
    # 'authority': 'www.zkh.com',
    # 'accept': 'application/json, text/plain, */*',
    # 'accept-language': 'zh-CN,zh;q=0.9',
    # 'cache-control': 'no-cache',
    # 'content-type': 'application/json;charset=UTF-8',
    # 'cookie': 'AGL_USER_ID=213cdeb8-afdf-4d0b-a294-941178f47726; utmStore=%7B%22flow_type%22%3A%22%E5%85%8D%E8%B4%B9%22%7D; _bl_uid=40l8Xphva48vmXwsmi6mdjt4Ia53; anonymous_id=18bfb1fd336195-0e70cb6534bec1-26031051-2073600-18bfb1fd3374a6; citycode=%7B%22cityCode%22%3A310100%2C%22cityName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%2C%22provinceCode%22%3A310000%2C%22provinceName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%7D; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218bfb1fd336195-0e70cb6534bec1-26031051-2073600-18bfb1fd3374a6%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiZmIxZmQzMzYxOTUtMGU3MGNiNjUzNGJlYzEtMjYwMzEwNTEtMjA3MzYwMC0xOGJmYjFmZDMzNzRhNiJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218bfb1fd336195-0e70cb6534bec1-26031051-2073600-18bfb1fd3374a6%22%7D; sensorsdata2015session=%7B%7D; webSource=https%3A%2F%2Fwww.google.com%2F; p_pub_key=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBCW08wCzCOzs5qU7RxL0VYV7TBZr3rrYYqFrI1Nr1Na+FP0B52ffsIqioES8tZEqDXQ59Ksd9rFHutXsRWB6urfBb+MJfmsXynp/2IVhHq+DK68vptgzkGadT8w51uyllExRBj3t2cmkqxrzdrIyCMIXNdnGRCNwJ/taiwftNOQIDAQAB; p_pub_gr=1700812808417; JSESSIONID=E9CE898324B66C77DF00C8BA543E3FB1; _znt=8.93',
    # 'flow-type': '%E5%85%8D%E8%B4%B9',
    # 'origin': 'https://www.zkh.com',
    # 'platform_type': 'JavaScript',
    # 'pragma': 'no-cache',
    # 'referer': 'https://www.zkh.com/search.html?keywords=%E4%BA%9A%E5%BE%B7%E5%AE%A2%20HFR16&hasLinkWord=1&isHistory=1',
    # 'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    # 'sec-ch-ua-mobile': '?0',
    # 'sec-ch-ua-platform': '"Windows"',
    # 'sec-fetch-dest': 'empty',
    # 'sec-fetch-mode': 'cors',
    # 'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    # 'utm-search-keywords': '%E4%BA%9A%E5%BE%B7%E5%AE%A2%20HFR16,%E4%BA%9A%E5%BE%B7%E5%AE%A2%2016,%E4%BA%9A%E5%BE%B7%E5%AE%A2%20HR16',
    'x-akc': 'cLRtakFy8XgoV8BuWU1S4jWAqpltySEDXfU5izjoCuX3pdgu78IvpFNwDllk0dgpxXmj1OZUsgjC0rBA9v4eF8pcVub04QcNuQV0jzxy+FIh4VNuAQkK8d1q33urjmhg6UTjJVi+Ermq5M7tzeol/38x131PPRBCjkEIIWnZgWg=',
    'x-rgn': '1700812808417',
    # 'x-sc-anonymous-id': '18bfb1fd336195-0e70cb6534bec1-26031051-2073600-18bfb1fd3374a6',
}

params = {
    'traceId': '294042031700817434505',
}

json_data = {
    'cipher': 'cg/F+PdsV8rtVBS0K8/EHipYRu/qOCB952cWhqIa4zuqV3Yf+0Itx3rX3A1T9h9M',
}

response = requests.post(
    f'https://www.zkh.com/servezkhApi/preferential/display/enc/price?traceId={params["traceId"]}',
    # params=params,
    cookies=cookies,
    headers=headers,
    json=json_data,
)
print(response.text)
# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{"cipher":"cg/F+PdsV8rtVBS0K8/EHipYRu/qOCB952cWhqIa4zuqV3Yf+0Itx3rX3A1T9h9M"}'
#response = requests.post(
#    'https://www.zkh.com/servezkhApi/preferential/display/enc/price',
#    params=params,
#    cookies=cookies,
#    headers=headers,
#    data=data,
#)