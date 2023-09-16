import requests
import execjs

"""加密"""

query = f"pg=2&pgsz=15&total=0"
url = f"https://jzsc.mohurd.gov.cn/APi/webApi/dataservice/query/comp/list?{query}"

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"

}
# 获取到原始数据
ori_data = requests.get(url, headers=headers).text

# 打开js文件
with open("mohurd.js", "r") as f:
    jscode = f.read()

ctx = execjs.compile(jscode).call('m', ori_data)

print(ctx)




