#!usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time     : 2021/1/27
# @Author   : Shufei Lei
# @Software : PyCharm
import copy
from pprint import pprint

import execjs
import requests
import requests.utils


class Zkh_Industrial_Supermarket():
    def __init__(self):
        self.session = requests.session()

        self.index_url = "https://www.zkh.com/"
        self.get_zkhst_url = "https://web.zkh.com/zkhweb/zkhAuth/signToken?traceId={}"
        self.get_data_url = "https://web.zkh.com/servezkhApi/search/1/product?traceId={}"

        self.base_headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
        }
        self.compile = self.get_js_compile()

    def get_index(self):
        # 获取待爬列表页的url
        response = self.session.get(self.index_url, headers=self.base_headers)
        if response.status_code == 200:
            pass
            # print(response.content.decode("utf8"))

    def get_zkhst(self):
        traceid = self.compile.call("genTraceId")
        response = self.session.get(self.get_zkhst_url.format(traceid), headers=self.base_headers)
        if response.status_code == 200:
            # print(self.session.cookies)
            return requests.utils.dict_from_cookiejar(self.session.cookies)["zkhst"]

    def get_data(self, category_id):
        zkhst = self.get_zkhst()
        traceid = self.compile.call("genTraceId")
        data = 'body={"brandId":"","catalogueId":"%s","cityCode":610100,"clp":true,' \
               '"extraFilter":{"inStock":false,"showIndustryFeatured":false},"from":0,"fz":false,"keyword":"",' \
               '"productFilter":{"brandIds":[""],"properties":{}},"rangeFilter":null,' \
               '"searchType":{"notNeedCorrect":false},"size":20,"sort":0}' \
               '&params={"traceId":"%s"}&sign_token=%s' % (category_id, traceid, zkhst)
        zkhs = self.compile.call("encrypt", data, zkhst)
        headers = copy.deepcopy(self.base_headers)
        headers.update({
            "zkhs": zkhs,
            "zkhst": zkhst,
            "accept": "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=UTF-8",
        })

        payload = '{"brandId": "","catalogueId": "%s","cityCode": 610100,"clp": true,"extraFilter": ' \
                  '{"showIndustryFeatured": false, "inStock": false},"from": 0,"fz": false,"keyword":"",' \
                  '"productFilter": {"brandIds": [""], "properties": {}},"rangeFilter": null,' \
                  '"searchType": {"notNeedCorrect": false},"size": 20, "sort": 0}' % category_id
        response = self.session.post(self.get_data_url.format(traceid), data=payload, headers=headers)
        pprint(response.json()["result"])

    def get_js_compile(self):
        with open("encrypt.js", "r", encoding="utf8") as f:
            content = f.read()
        return execjs.compile(content)


if __name__ == '__main__':
    zkh = Zkh_Industrial_Supermarket()
    zkh.get_data(260186)

