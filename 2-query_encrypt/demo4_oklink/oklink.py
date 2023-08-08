import base64
import random
import time

import requests
import execjs

times = int(time.time() * 1000)

def get_api_key():
    """获取加密字符串"""
    times = int(time.time() * 1000)

    # 固定的加密值
    api_key = "a2c903cc-b31e-4547-9299-b6d07b7631ab"

    # encryptApiKey()
    key1 = api_key[0:8]
    key2 = api_key[8:]
    # 交换位置
    new_key = key2 + key1

    # encryptTime()
    a = 1111111111111

    new_time = str(1 * times + a)
    random1 = str(random.randint(0, 9))
    random2 = str(random.randint(0, 9))
    random3 = str(random.randint(0, 9))
    # 拼接
    cur_time = new_time + random1 + random2 + random3

    # 合并前面生成的两个值，并用base64加密
    this_key = new_key + "|" + cur_time
    n_k = this_key.encode("utf-8")
    x_apikey = base64.b64encode(n_k)
    return x_apikey


if __name__ == '__main__':
    url = f"https://www.oklink.com/api/explorer/v1/btc/transactionsNoRestrict?t={times}&offset=0&txType=&limit=20&sort="

    with open("./oklink.js") as f:
        js_code = f.read()

    # x_apikey = execjs.compile(js_code).call("getApiKey")
    x_apikey = get_api_key()

    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
        "X-Apikey": x_apikey
    }
    print(requests.get(url, headers=headers).text)
