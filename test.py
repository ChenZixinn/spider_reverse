from urllib.parse import quote

url = r'http://app.miit-eidc.org.cn/miitxxgk/gonggao/xxgk/queryCpParamPage'
encoded_url = quote(url, safe='')

print(encoded_url)

print(url)