import requests
import execjs

url = "https://api.qimai.cn"
url_args = "/rank/indexPlus/brand_id/1"

headers = {
"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"

}

with open("./qimai.js") as f:
    js_code = f.read()

analysis = execjs.compile(js_code).call("url", url_args)
print(analysis)
text = requests.get(f"{url}{url_args}?analysis={analysis}", headers=headers).json()
# print(bytes(text, 'utf-8').decode('unicode_escape'))

print(text)