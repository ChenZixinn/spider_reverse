import time

import requests
import execjs

# 请求的参数
data = '{"cid":"FactoryRankServiceWidget:FactoryRankServiceWidget","methodName":"execute","params":"{\\"extParam\\":{\\"methodName\\":\\"readRelatedRankEntries\\",\\"cateId\\":\\"10166\\",\\"size\\":\\"15\\"}}"}'

# sign = token & 时间戳 & g & 请求参数
token = "2a3e896698e27affa623d6ecd90aca5e"
i = int(time.time() * 1000)
g = "12574478"
# 拼接出字符串
j = f"{token}&{i}&{g}&{str(data)}"

# 使用js文件生成sign
with open("h.js", "r", encoding="utf-8") as f:
    js_code = f.read()
sign = execjs.compile(js_code).call("h", j)

# 设置header和params
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "Referer": "https://sale.1688.com/",
    # 这里需要传入cookie，不然会提示token为空
    "Cookie":"ali_apache_id=11.186.201.43.1663984139311.308083.7; lid=%E6%93%A6%E8%82%A9%E8%80%8C%E8%BF%87_i; ali_apache_track=c_mid=b2b-304522062300831|c_lid=%E6%93%A6%E8%82%A9%E8%80%8C%E8%BF%87_i|c_ms=1; alicnweb=touch_tb_at%3D1663984141571%7Clastlogonid%3D%25E6%2593%25A6%25E8%2582%25A9%25E8%2580%258C%25E8%25BF%2587_i; cookie2=18fcec77ee17f5a0befe325b42e559c1; sgcookie=E100uLL9nh0QfcW2lMNwr8FDApO7CvIHlwKtUR5G1KocviAC7UKDzEtWXrEdn4ZjMfFwtpoNgTt6A35P4OSwhcR14WifvxsQwS5zPQiEvjCf%2Bkg%3D; t=98a2c5ef884a77ed116b8c40aa337b55; _tb_token_=335e17e513ee3; __cn_logon__=false; ali_ab=183.36.181.166.1685669557509.1; cna=KRiDHKOhigkCAbcGKOLNw97C; xlly_s=1; _csrf_token=1685669653018; _m_h5_tk=2a3e896698e27affa623d6ecd90aca5e_1685700926011; _m_h5_tk_enc=4d2c59116a4b16b003d4aad6ad370526; isg=BJWVwjqdXa0wCHlRwV1TjfrjpJdPkkmkrNr9nhc6KIxabrVg3-LQdKJvOHJY7mFc; l=fBjX5pF7NwyQJ--ZBOfZnurza77TMIRAguPzaNbMi9fPOD1H5b6OW1a6_rYMCnGVFssJR3R4Lnf6BeYBcgI-nxvtjsx8SjkmnmOk-Wf..; tfstk=cvMcBjMSwz_BElvtPqwXhmGAssAdaF6a-AkSUh0tI4EECtH30smFa6WP334DRE51.",
}
# 这里的data、时间戳要和sign里的data一样
params = {"jsv": "2.6.1", "appKey": "12574478", "t": str(i), "sign": sign, "v": "1.0", "type": "jsonp", "isSec": 0,
          "timeout": 20000, "api": "mtop.taobao.widgetService.getJsonComponent", "dataType": "jsonp",
          "jsonpIncPrefix": "mboxfc", "callback": "mtopjsonpmboxfc3", "data": data}

url = "https://h5api.m.1688.com/h5/mtop.taobao.widgetservice.getjsoncomponent/1.0/"
print(requests.get(url, headers=headers, params=params).text)
