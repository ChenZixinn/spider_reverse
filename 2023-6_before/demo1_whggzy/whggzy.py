import requests

url = "http://www.whggzy.com/front/search/category"

headers = {
    # 这两个参数是必须的
    "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "Referer": "http://www.whggzy.com/PurchaseAdvisory/index.html",

    # 通过xhr断点找到接口的headers包含一下几个
    'Accept': "*/*",
    'Content-Type': "application/json",
    'X-Requested-With': "XMLHttpRequest",


}

# 通过查看参数发现data传的是字符串，所以这个通过字符串的方式发送data，而不是字典
data = '''{
    "categoryCode": "MostImportant",
    "pageNo": 1,
    "pageSize": 15
}'''

print(requests.post(url, headers=headers, data=data).text)
