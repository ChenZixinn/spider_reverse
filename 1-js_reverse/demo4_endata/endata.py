"""js混淆"""
import execjs
import requests

url = "https://www.endata.com.cn/API/GetData.ashx"
headers = {
"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"

}
data = {
    "year": 2023,
    "MethodName": "BoxOffice_GetYearInfoData"
}
ori_data = requests.post(url, headers=headers, data=data).text

with open("./endata.js", 'r') as f:
    js_code = f.read()

result = execjs.compile(js_code).call("webInstace.shell", ori_data)

print(result)

# (webInstace.shell(data));
