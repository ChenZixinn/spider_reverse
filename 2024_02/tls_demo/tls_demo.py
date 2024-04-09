import requests

# 0、普通请求
res = requests.get('https://match.yuanrenxue.cn/api/match/19?page=1')
print(res.text)  # TLS指纹校验不通过

# 1、修改urllib3源码
import urllib3

urllib3.util.ssl_.DEFAULT_CIPHERS = ":".join(
    [
        "ECDHE+AESGCM",
        "ECDHE+CHACHA20",
        "DHE+AESGCM",
        "DHE+CHACHA20",
        "ECDH+AESGCM",
        "DH+AESGCM",
        # 修改掉部分内容
        # "ECDH+AES",
        # "DH+AES",
        # "RSA+AESGCM",
        # "RSA+AES",
        "!aNULL",
        "!eNULL",
        "!MD5",
        "!DSS",
    ]
)

res = requests.get('https://match.yuanrenxue.cn/api/match/19?page=1')
print(res.text)  # 通过

# 2、用curl_cffi通过验证
from curl_cffi import requests

res = requests.get('https://match.yuanrenxue.cn/api/match/19?page=1', impersonate="chrome110")
print(res.text)  # 通过
