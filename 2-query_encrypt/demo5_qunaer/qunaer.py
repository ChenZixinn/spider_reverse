import hashlib
import time

import requests


def md5_hash(text):
    # 创建MD5哈希对象
    md5_hasher = hashlib.md5()
    # 更新哈希对象以包含待加密的文本
    md5_hasher.update(text.encode('utf-8'))
    # 返回MD5加密后的结果
    return md5_hasher.hexdigest()


def sha1_hash(text):
    # 创建SHA1哈希对象
    sha1_hasher = hashlib.sha1()
    # 更新哈希对象以包含待加密的文本
    sha1_hasher.update(text.encode('utf-8'))
    # 返回SHA1加密后的结果
    return sha1_hasher.hexdigest()


def get_random_key(t):
    """ 获取请求头参数的key """
    # 截取4开始的字符串
    t = str(t)[4:]
    n = ""
    # 转为ascii编码并拼接
    for i in t:
        n += str(ord(i))
    # md5解密
    key = md5_hash(n)
    # 返回最后6位
    return key[-6:]


def get_headers():
    """ 获取请求头参数 键值对"""
    t = int(time.time() * 1000)
    key = get_random_key(t)
    value = get_m(t)
    return {key: value}


def get_m(n=None):
    """ 获取__m__参数"""
    # .data["__m__"] = u.default.encryptToken(u.default.encrypt());
    # 获取需要被加密的参数，即u.default.encrypt()

    # 页面存储的token"00008a002f1051a169b06202"
    t = "00008a002f1051a169b06202"
    # 时间戳
    if not n:
        n = int(time.time() * 1000)
    # 时间戳取余
    r = n % 2
    # print(r)
    p1 = t + str(n)
    # print(p1)
    # 根据r决定先用SHA1还是MD5
    if r == 0:
        # SHA1
        p1 = sha1_hash(p1)
        # MD5
        p1 = md5_hash(p1)
    else:
        # MD5
        p1 = md5_hash(p1)
        # SHA1
        p1 = sha1_hash(p1)
    # 最后再用一次MD5加密
    p1 = md5_hash(p1)

    return p1


# fbc1646d57a2b22ceb5f5ef60018f67d
# print(get_m())


if __name__ == '__main__':
    # 获取参数
    m = get_m()
    header_ = get_headers()
    headers = {
        i: header_.get(i) for i in header_.keys()
    }
    headers[
        "User-Agent"] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
    headers["Origin"] = "https://m.flight.qunar.com"
    print(headers)

    query = {
        "Bella": "1683616182042##0e949af1f198db8b14e663b4703756988682a20a##iKohiK3wgMkMf-i0gUPwaUPsXuPwaUPwaUPwXwPwa5TQjOWxcI10aS30a=D0aS3maK2+iK3siK3sX2XmEKvsESPAESv8EK3sXuPwawPwasDOVRj8asDwasv8as20aS30a2a0aSisyI0wcIkNiK3wiKWTiK3wfKDAWSfHWKa=fRE0WR3NWs0UjKvOaKaNWIWSfSEHaKv0aS30a2a0aSi=y-ELfuPwaUPsXuPwaUkGWuPmEukhXUkGWuPNawkTXukGWuPmWhkhEUkGWwkhEhPNaukGWUPNXwkhXukGWwkTWukTVhkGWUPNXwPmEhkGWuPmXukTauPwaUPwXwPwaMe0d-oxgMEsiK3wiKWTiK3wiKiRiPPAiKHGiPihiPPNiKtwiPDsiPPAiKt=iPiIiKiRiPPmiKtmiPGTiPP+iKHIiPGDiPPOiK0IiPDAiPPmiPGIiPDwiKiRiK3wiKiRiK3wfIksj+iQgCEQcOm0aS30a=D0aS30EKP0VDP0X230EKP0VKa0XPD0EKP0VRX0X2jpP-kbj-3bjOFeJukGVukTawPNEukGWUPNXwkhXukGWwkTWukTVhPwXwkGWwPmVukhVukGWhkhXUkhWwPwaUPwXwPwaMHxg+X0aS30a=D0aSieqMfLy9opohNno9NHgUNScO=0aS30a2a0aSisj+iQgCEKgMa0aS30a=D0WP30aSi+f9iwf-Wxo-iSfuNSq9W=iK3wiKiRiK3wjOFec9Fbq5GAcMGwd5pbjwPwaUPAEhP+Ehvt##6qbqpQVyC7BS_C_yfW8Ap##arrCity,baby,cabinType,child,depCity,from,goDate,firstRequest",
        "arrCity": "上海",
        "baby": "0",
        "cabinType": "0",
        "child": "0",
        "depCity": "北京",
        "firstRequest": True,
        "from": "touch_index_search",
        "goDate": "2023-06-22",
        "r": 1686031230028,
        "sort": 5,
        "st": 1686031230024,
        "startNum": 0,
        "underageOption": "",
        "__m__": m,
        "_v": 2
    }
    url = "https://m.flight.qunar.com/flight/api/touchInnerList"
    print(requests.post(url, data=query, headers=headers).text)
