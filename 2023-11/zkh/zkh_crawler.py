import json
import sys
import urllib.parse

import execjs
import requests



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
        self.cookies = None
        self.session = requests.session()
        self.type = ""
        self.result_data = {
            "all_goods_data": {},
            "min_price_data": {}
        }

    def search_good(self, model_name='', part_name='', brand='', type=''):
        """
        根据品牌和型号搜索，模块名称和标准件名称可以不传
        Args:
            model_name: 模块名称
            part_name: 标准/非标件名称
            brand: 品牌
            type: 型号

        Returns:
            [所有商品，最低价格商品]
        """
        self.type = type
        keyword = urllib.parse.quote(f"{brand} {type}")
        # 搜索页面的结果，获取页面中的商品列表。并将数据转为json
        html = self.req_search(keyword)
        goods_data = self.get_all_valid_goods(html)
        if not goods_data:
            return self.result_data
        # 页面的数据不包含价格，需要通过另一个请求获取。需要传入商品的proSkuNo列表
        pro_sku_no_list = self.get_pro_sku_no(goods_data)
        price_data = self.req_price(pro_sku_no_list)

        return self.merge_json(goods_data, price_data)

    def get_pro_sku_no(self, goods_data):
        pro_sku_no_list = []
        for goods in goods_data:
            if goods.get("proSkuNo"):
                pro_sku_no_list.append(goods.get("proSkuNo"))
        return pro_sku_no_list

    def req_search(self, keyword):
        """

        Args:
            keyword: 查询的关键词

        Returns:

        """
        response = requests.get(
            f'https://www.zkh.com/search.html?keywords={keyword}',
            cookies=self.cookies,
            headers=self.headers,
            proxies=self.proxies
        )
        # 将text写入到html文件
        # with open('zkh.html', 'w', encoding='utf-8') as f:
        #     f.write(response.text)
        # 转为xpath
        # html = etree.HTML(response.text)
        # total = html.xpath("//span[@class='filter-total']/b/text()")
        # if not total or total == '0':
        #     raise Exception(f"商品 '{keyword}' 无搜索结果")
        return response.text

    def get_all_valid_goods(self, text):

        # 正则匹配json内容: "content": ([.*?])
        import json
        import re
        # json.loads(re.findall("window.__INITIAL_DATA__ =(.*?);</script>", text)[0].replace("undefined", '""'))
        js_text = re.findall("window.__INITIAL_DATA__ =(.*?);</script>", text)
        if not js_text:
            return []
        js_data = json.loads(js_text[0].replace("undefined", '""')).get('catalog', {}).get("content", [])
        valid_data = []
        for d in js_data:
            if self.type in d.get("proMaterialNo"):
                valid_data.append(d)
        return valid_data

    def get_cheap(self, html):
        pass

    def get_rsa_key(self):
        # cookies = {
        #     'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%2218bfcc3f742c5f-0a2a23d1a566308-16525634-1484784-18bfcc3f74310c3%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiZmNjM2Y3NDJjNWYtMGEyYTIzZDFhNTY2MzA4LTE2NTI1NjM0LTE0ODQ3ODQtMThiZmNjM2Y3NDMxMGMzIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218bfcc3f742c5f-0a2a23d1a566308-16525634-1484784-18bfcc3f74310c3%22%7D',
        #     'sensorsdata2015session': '%7B%7D',
        #     'webSource': 'https%3A%2F%2Fwww.google.com.hk%2F',
        #     '_bl_uid': 'UdlRXpabbptcnda82ngOiRvo3vm2',
        #     'AGL_USER_ID': '78392bb4-56bc-42bf-b3bd-b5cbcd3883c3',
        #     'utmStore': '%7B%22flow_type%22%3A%22%E5%85%8D%E8%B4%B9%22%7D',
        #     'JSESSIONID': 'C7186356E14BBC435C4A16C286E3F84E',
        #     '_znt': '91.34',
        #     'anonymous_id': '18bfcc3f742c5f-0a2a23d1a566308-16525634-1484784-18bfcc3f74310c3',
        #     'citycode': '%7B%22provinceName%22%3A%22%E5%B9%BF%E4%B8%9C%E7%9C%81%22%2C%22cityName%22%3A%22%E6%B7%B1%E5%9C%B3%E5%B8%82%22%2C%22provinceCode%22%3A440000%2C%22cityCode%22%3A440300%7D',
        # }
        cookies = None
        headers = {
            'authority': 'www.zkh.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            # 'cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218bfcc3f742c5f-0a2a23d1a566308-16525634-1484784-18bfcc3f74310c3%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiZmNjM2Y3NDJjNWYtMGEyYTIzZDFhNTY2MzA4LTE2NTI1NjM0LTE0ODQ3ODQtMThiZmNjM2Y3NDMxMGMzIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218bfcc3f742c5f-0a2a23d1a566308-16525634-1484784-18bfcc3f74310c3%22%7D; sensorsdata2015session=%7B%7D; webSource=https%3A%2F%2Fwww.google.com.hk%2F; _bl_uid=UdlRXpabbptcnda82ngOiRvo3vm2; AGL_USER_ID=78392bb4-56bc-42bf-b3bd-b5cbcd3883c3; utmStore=%7B%22flow_type%22%3A%22%E5%85%8D%E8%B4%B9%22%7D; JSESSIONID=C7186356E14BBC435C4A16C286E3F84E; _znt=91.34; anonymous_id=18bfcc3f742c5f-0a2a23d1a566308-16525634-1484784-18bfcc3f74310c3; citycode=%7B%22provinceName%22%3A%22%E5%B9%BF%E4%B8%9C%E7%9C%81%22%2C%22cityName%22%3A%22%E6%B7%B1%E5%9C%B3%E5%B8%82%22%2C%22provinceCode%22%3A440000%2C%22cityCode%22%3A440300%7D',
            'flow-type': '%E5%85%8D%E8%B4%B9',
            'platform_type': 'JavaScript',
            'pragma': 'no-cache',
            'referer': 'https://www.zkh.com/search.html?keywords=%E4%BA%9A%E5%BE%B7%E5%AE%A2%20HFR16N&hasLinkWord=1',
            'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            # 'uber-trace-id': 'bdbeb64c170083747073810013f15812:bdbeb64c17008374:0:1',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'utm-search-keywords': '%E4%BA%9A%E5%BE%B7%E5%AE%A2%20HFR16N,AIRTAC%2F%E4%BA%9A%E5%BE%B7%E5%AE%A2%20HFR16N,AIRTAC%2F%E4%BA%9A%E5%BE%B7%E5%AE%A2%2016N',
            'x-sc-anonymous-id': '18bfcc3f742c5f-0a2a23d1a566308-16525634-1484784-18bfcc3f74310c3',
        }

        params = {
            'traceId': self.js.call('getTraceId'),
        }

        response = self.session.get('https://www.zkh.com/zkhweb/zkhAuth/rsaKey', params=params, cookies=cookies,
                                headers=headers)
        return response.json()

    def merge_json(self, json1, json2):
        """
        合并商品列表和价格列表，返回合并后的所有数据、最低价格的商品
        Args:
            json1: 原始商品列表
            json2: 价格列表

        Returns:
            [所有商品列表数据, 最低商品数据]
        """
        # 创建一个字典，用于按照skuNo合并数据
        merged_data = {}

        # 合并第一个JSON数据
        for item in json1:
            sku_no = item['proSkuNo']
            if sku_no not in merged_data:
                merged_data[sku_no] = item
            else:
                merged_data[sku_no].update(item)
        min_price = sys.maxsize
        min_price_goods = None
        # 合并第二个JSON数据
        for item in json2:
            sku_no = item['skuNo']
            if sku_no not in merged_data:
                merged_data[sku_no] = item
            else:
                merged_data[sku_no].update(item)
            merged_data[sku_no]['url'] = f'https://www.zkh.com/item/{sku_no}.html'
            if 0 < merged_data[sku_no]['sellingPrice'] < min_price:
                min_price = merged_data[sku_no]['sellingPrice']
                min_price_goods = merged_data[sku_no]
        # 将合并后的数据转换为JSON字符串
        # merged_json = json.dumps(list(merged_data.values()))
        self.result_data['min_price_data'] = min_price_goods
        self.result_data['all_goods_data'] = merged_data
        return self.result_data

    def req_price(self, data):
        res_rsa_key = self.get_rsa_key()

        trace_id = self.js.call("getTraceId")
        N_E = self.js.call("get_N_E")
        N = N_E[0]
        E = N_E[1]
        # trace_id = '294042031700817434505'

        res = self.js.call("get_cipher_and_headers", trace_id, data, res_rsa_key['result']['rsaKey'], res_rsa_key['result']['rsaGroup'], N, E)
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
            # 'x-sc-anonymous-id': '18bfcc3f742c5f-0a2a23d1a566308-16525634-1484784-18bfcc3f74310c3',
        }

        params = {
            'traceId': trace_id,
        }

        json_data = {
            'cipher': res['cipher'],
        }

        response = self.session.post(
            'https://www.zkh.com/servezkhApi/preferential/display/enc/price',
            params=params,
            cookies=cookies,
            headers=headers,
            json=json_data,
        )
        print(response.text)
        res = self.js.call("decrypt", response.text, E)
        print(res)
        return res.get("result", [])


if __name__ == '__main__':
    min_time = sys.maxsize
    for i in range(10):
        import time
        start = time.time()
        crawler = ZkhCrawler()
        data = crawler.search_good(brand="亚德客", type='PTL4M5A-M')
        print(f"所有商品：{data['all_goods_data']}")
        print(f"最低价格商品:{data['min_price_data']}")
        end_time = time.time() - start
        min_time = min(end_time, min_time)
        print(f"耗时：{end_time}")
    print(f"最快速度:{min_time}")