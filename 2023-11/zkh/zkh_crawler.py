import urllib.parse

import execjs
import requests
from commom.settings import *
from lxml import etree

from commom.utils import get_text


class ZkhCrawler:
    def __init__(self):
        # 执行js文件
        with open("encrypt_new.js", "r", encoding="utf8") as f:
            content = f.read()
        self.js = execjs.compile(content)
        self.headers = {
            'authority': 'www.zkh.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            # 'cookie': '_bl_uid=jjlOjp5q9kXfgpk7dx84896jFO7X; AGL_USER_ID=61b93cb0-c706-4005-b029-e1bfb3cf26ff; utmStore=%7B%22flow_type%22%3A%22%E5%85%8D%E8%B4%B9%22%7D; sensorsdata2015session=%7B%7D; anonymous_id=18bf5e2df542a3-021cb9b252742a6-26031051-2073600-18bf5e2df558a9; citycode=%7B%22cityCode%22%3A310100%2C%22cityName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%2C%22provinceCode%22%3A310000%2C%22provinceName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%7D; _znt=33.42; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218bf5e2df542a3-021cb9b252742a6-26031051-2073600-18bf5e2df558a9%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiZjVlMmRmNTQyYTMtMDIxY2I5YjI1Mjc0MmE2LTI2MDMxMDUxLTIwNzM2MDAtMThiZjVlMmRmNTU4YTkifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218bf5e2df542a3-021cb9b252742a6-26031051-2073600-18bf5e2df558a9%22%7D; JSESSIONID=8EC55BFB16028C00C8F456CA14C541EB',
            'pragma': 'no-cache',
            'referer': 'https://www.zkh.com/search.html?keywords=%E5%9B%9B%E6%AD%A5%E7%99%BB%E9%AB%98%E6%A2%AF1m%20L2100mm*W1200mm*H500mm%2FWt35.4KG&hasLinkWord=1',
            'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        }
        self.cookies = {
            '_bl_uid': 'jjlOjp5q9kXfgpk7dx84896jFO7X',
            'AGL_USER_ID': '61b93cb0-c706-4005-b029-e1bfb3cf26ff',
            'utmStore': '%7B%22flow_type%22%3A%22%E5%85%8D%E8%B4%B9%22%7D',
            'sensorsdata2015session': '%7B%7D',
            'anonymous_id': '18bf5e2df542a3-021cb9b252742a6-26031051-2073600-18bf5e2df558a9',
            'citycode': '%7B%22cityCode%22%3A310100%2C%22cityName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%2C%22provinceCode%22%3A310000%2C%22provinceName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%7D',
            '_znt': '33.42',
            'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%2218bf5e2df542a3-021cb9b252742a6-26031051-2073600-18bf5e2df558a9%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiZjVlMmRmNTQyYTMtMDIxY2I5YjI1Mjc0MmE2LTI2MDMxMDUxLTIwNzM2MDAtMThiZjVlMmRmNTU4YTkifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218bf5e2df542a3-021cb9b252742a6-26031051-2073600-18bf5e2df558a9%22%7D',
            'JSESSIONID': '8EC55BFB16028C00C8F456CA14C541EB',
        }
        self.proxies = PROXIES
        self.proxies = None

    def search_good(self, model_name='', part_name='', brand='', type=''):
        keyword = urllib.parse.quote(f"{brand} {type}")
        html = self.req_search(keyword)
        goods_data = self.get_all_goods(html)
        self.get_cheap(html)


    def req_search(self, keyword):
        response = requests.get(
            f'https://www.zkh.com/search.html?keywords={keyword}',
            cookies=self.cookies,
            headers=self.headers,
            proxies=self.proxies
        )
        # 将text写入到html文件
        with open('zkh.html', 'w', encoding='utf-8') as f:
            f.write(response.text)
        # 转为xpath
        html = etree.HTML(response.text)
        total = html.xpath("//span[@class='filter-total']/b/text()")
        if not total or total == '0':
            raise Exception(f"商品 '{keyword}' 无搜索结果")
        return html

    def get_all_goods(self, html):
        goods_list = html.xpath("//div[@class='goods-item-wrap-new clearfix common-item-wrap']")
        goods_data = []
        for goods in goods_list:
            # 获取文本
            title = get_text(goods, ".//div[contains(@class, 'goods-name')]/@title", 0)
            integer = get_text(goods, ".//span[@class='integer']/text()", 0)
            decimal = get_text(goods, ".//span[@class='decimal']/text()", 0)
            unit = get_text(goods, ".//span[@class='unit']/text()", 0)
            material_no = get_text(goods, ".//div[contains(@class,'material-no')]/span/text()", -1)
            goods_data.append({"title":title, "integer": integer, "decimal":decimal, "unit":unit, "material_no":material_no})
        return goods_data

    def get_cheap(self, html):
        pass


    def req_price(self):
        trace_id = self.js.call("getTraceId")
        # TODO
        # trace_id = '294042031700817434505'
        data = [
            "FU8443",
            "FU8448",
            "AE2959677",
            "AE2970409"
        ]
        res = self.js.call("get_cipher_and_headers", trace_id, data)
        print(res)

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
            '_znt': '13.15',
            'JSESSIONID': '6D7058B5E6E9D6C869A47F9EE1781C3E',
        }
        cookies = None

        headers = {
            # 'authority': 'www.zkh.com',
            # 'accept': 'application/json, text/plain, */*',
            # 'accept-language': 'zh-CN,zh;q=0.9',
            # 'cache-control': 'no-cache',
            # 'content-type': 'application/json;charset=UTF-8',
            # # 'cookie': 'AGL_USER_ID=213cdeb8-afdf-4d0b-a294-941178f47726; utmStore=%7B%22flow_type%22%3A%22%E5%85%8D%E8%B4%B9%22%7D; _bl_uid=40l8Xphva48vmXwsmi6mdjt4Ia53; anonymous_id=18bfb1fd336195-0e70cb6534bec1-26031051-2073600-18bfb1fd3374a6; citycode=%7B%22cityCode%22%3A310100%2C%22cityName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%2C%22provinceCode%22%3A310000%2C%22provinceName%22%3A%22%E4%B8%8A%E6%B5%B7%E5%B8%82%22%7D; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218bfb1fd336195-0e70cb6534bec1-26031051-2073600-18bfb1fd3374a6%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiZmIxZmQzMzYxOTUtMGU3MGNiNjUzNGJlYzEtMjYwMzEwNTEtMjA3MzYwMC0xOGJmYjFmZDMzNzRhNiJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218bfb1fd336195-0e70cb6534bec1-26031051-2073600-18bfb1fd3374a6%22%7D; sensorsdata2015session=%7B%7D; webSource=https%3A%2F%2Fwww.google.com%2F; p_pub_key=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBCW08wCzCOzs5qU7RxL0VYV7TBZr3rrYYqFrI1Nr1Na+FP0B52ffsIqioES8tZEqDXQ59Ksd9rFHutXsRWB6urfBb+MJfmsXynp/2IVhHq+DK68vptgzkGadT8w51uyllExRBj3t2cmkqxrzdrIyCMIXNdnGRCNwJ/taiwftNOQIDAQAB; p_pub_gr=1700812808417; _znt=13.15; JSESSIONID=6D7058B5E6E9D6C869A47F9EE1781C3E',
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
            # 'utm-search-keywords': '%E4%BA%9A%E5%BE%B7%E5%AE%A2%20HFR16,%E4%BA%9A%E5%BE%B7%E5%AE%A2%2016,%E4%BA%9A%E5%BE%B7%E5%AE%A2%20HR16',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'x-akc': res['x-akc'],
            'x-rgn': res['x-rgn'],
            'x-sc-anonymous-id': '18bfb1fd336195-0e70cb6534bec1-26031051-2073600-18bfb1fd3374a6',
        }

        params = {
            'traceId': trace_id,
        }

        json_data = {
            'cipher': res['cipher'],
        }

        response = requests.post(
            'https://www.zkh.com/servezkhApi/preferential/display/enc/price',
            params=params,
            cookies=cookies,
            headers=headers,
            json=json_data,
        )
        print(response.text)


if __name__ == '__main__':
    crawler = ZkhCrawler()
    # crawler.search_good(brand="亚德客", type='HFR16')
    crawler.req_price()