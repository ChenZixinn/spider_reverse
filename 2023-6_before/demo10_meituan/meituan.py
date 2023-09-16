import base64
import json
import time
import zlib

import requests


def decode_sign(token_str):
    token_str = token_str.replace(" ", "")

    # base编码
    # token_str = f"\"{str(token_str)}\""
    # token_str = str(token_str)
    # token_str = f"'{token_str}'"

    print(f"str:::{token_str}")

    encode1 = str(token_str).encode()
    # 参数 压缩成 特殊的编码
    compress = zlib.compress(encode1)
    b_encode = base64.b64encode(compress)
    # 转变 str
    e_sign = str(b_encode, encoding="utf-8")
    return e_sign


def get_token_data(data, not_last=True):
    token_encode = base64.b64decode(data.encode())
    # 二进制解压decompress
    token_str = zlib.decompress(token_encode).decode("utf-8")
    print("1111")
    print(token_str)
    # ip
    # token_str = token_str.replace("'", "\"")
    # if not_last:
    #     # sign = json.loads(token_str)["sign"]
    #     sign = json.loads(token_str)
    #     print(sign)
    #     get_token_data(sign, False)


# 生成sign
params = {
    'cityName': '广州',
    'cateId': 0,
    'areaId': 0,
    'sort': '',
    'dinnerCountAttrId': '',
    'page': 1,
    'userId': '234746173',
    'uuid': 'cab1469b7bd84ca09ea5.1686484028.1.0.0',
    'platform': 1,
    'partner': 126,
    'originUrl': 'https://gz.meituan.com/meishi/',
    'riskLevel': 1,
    'optimusCode': 10
}
params_str =  "\""
# 对key进行排序
keys = [i for i in params.keys()]
keys.sort()
# 拼接
for key in keys:
    params_str += f"{key}={params.get(key)}&"
params_str = params_str[:-1]
params_str += "\""
# 加密
sign = decode_sign(params_str)

# 生成_token
iP = {
    'rId': 100900,
    'ver': "1.0.6",
    # 'ts': 1686369166338,
    # 'cts': 1686369167064,
    "ts":1686485181487,
    "cts":1686485200311,
    'brVD': [
        1920,
        150
    ],
    'brR': [
        [
            1920,
            1080
        ],
        [
            1920,
            981
        ],
        30,
        30
    ],
    'bI': [
        'https://gz.meituan.com/meishi/',
        ''
    ],
    'mT': [],
    'kT': [],
    'aT': [],
    'tT': [],
    'aM': '',
    'sign': sign
}

ip_json = '{"rId":100900,"ver":"1.0.6","ts":1686485181487,"cts":1686485200311,"brVD":[1920,150],"brR":[[1920,1080],[1920,981],30,30],"bI":["https://gz.meituan.com/meishi/",""],"mT":[],"kT":[],"aT":[],"tT":[],"aM":"","sign":"eJwljU1uwyAQhe+SBUsMDsFOJRZVVpWq7nKAsZk6oxiwYKjUHCbXqLrqaXKPUnX1Pj29nx1khBfvlJiB8R+IP98goHt8/zy+7sJTjJhPqUZ+Zs4tI9LGFGo5JY9OK5EyLRTPeXUX5q08dd1ykwGJK0Q5p9A1LhfqxAZLKzTJ3Cad7q3YVuD3lEOzM5XrK37g2rikzE7Ugn9//d4MxuphL2ol72aYtLHHaZj8aGZQR4SD1Ha0ZjSqH6WWSqrdL1yKSlc="}'
my_json = json.dumps(iP).replace(" ", '')
print(ip_json==my_json)
print()
params["_token"] = decode_sign(json.dumps(iP))
# url = "https://gz.meituan.com/meishi/api/poi/getPoiList?"
# headers = {
#     "Cookie": 'uuid=a63a78dd2c6d4b8fa71d.1686314553.1.0.0; _lxsdk_cuid=188a02e1500c8-0a5a1464137002-1c525634-1fa400-188a02e1500c8; WEBDFPID=3y14z78z14v45v97y8569vuxz2y2w126811z97v8z4097958u7w48713-2001674556041-1686314555132WEUGSSM75613c134b6a252faa6802015be905513214; mtcdn=K; qruuid=fbee9f74-162b-483c-b1aa-8ec768c236b0; token2=AgGZIbi2lzfVJExG-UP_COPrJScWpUpvQqXc4_qvhfg1aPNdM4gKib0f1AgFDvfWKoFK-pwqZk69IAAAAADjGAAA4cp65WW_BGhwA2TCJypD8sq-G4SjXc_mYF_PRR5i8WVkumJgHOOqNiq7TvWNRYms; oops=AgGZIbi2lzfVJExG-UP_COPrJScWpUpvQqXc4_qvhfg1aPNdM4gKib0f1AgFDvfWKoFK-pwqZk69IAAAAADjGAAA4cp65WW_BGhwA2TCJypD8sq-G4SjXc_mYF_PRR5i8WVkumJgHOOqNiq7TvWNRYms; lt=AgGZIbi2lzfVJExG-UP_COPrJScWpUpvQqXc4_qvhfg1aPNdM4gKib0f1AgFDvfWKoFK-pwqZk69IAAAAADjGAAA4cp65WW_BGhwA2TCJypD8sq-G4SjXc_mYF_PRR5i8WVkumJgHOOqNiq7TvWNRYms; u=234746173; n=move_on_; unc=move_on_; _lxsdk=188a02e1500c8-0a5a1464137002-1c525634-1fa400-188a02e1500c8; ci=20; rvct=20%2C70; client-id=f4264e44-01fa-424b-9fd9-a07897d53362; __mta=150369929.1686314725417.1686314725417.1686324299749.2; firstTime=1686324301881; _lx_utm=utm_source%3Dgoogle%26utm_medium%3Dorganic; _lxsdk_s=188a0a34c8b-d8a-4f7-334%7C%7C12',
#     "Referer": "https://gz.meituan.com/meishi/",
#     "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
# }
# data = requests.get(url, headers=headers, params=params).text
# # print(data)
#
# print(params["_token"])
