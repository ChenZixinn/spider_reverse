import json
import re
import time

import tqdm

import trace
import urllib.parse

import ddddocr
import execjs
import requests

with open('./core.js', 'r') as f:
    js = f.read()


def get_actoken():
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'http://app.miit-eidc.org.cn/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    }

    params = {
        'referer': 'http://app.miit-eidc.org.cn/miitxxgk/gonggao/xxgk/queryCpParamPage',
        'zoneId': '',
        'dt': 'QZCRDl9Lpl1BBgQRQAKByyc31aO1bp/J',
        'id': '0b46352afd8742fa934f87745fbf7f36',
        'ipv6': 'false',
        'runEnv': '10',
        'iv': '2',
        'loadVersion': '2.3.0',
        'callback': '__JSONP_x5im7fw_0',
    }

    response = requests.get('http://c.dun.163.com/api/v2/getconf', params=params, headers=headers, verify=False)
    ac_token = re.findall(r'"token":"(.*?)"', response.text)[0]
    dt = re.findall(r'"dt":"(.*?)"', response.text)[0]
    return ac_token, dt


def get_img(ac_token, dt):
    cb = execjs.compile(js).call('get_cb')
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'http://app.miit-eidc.org.cn/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
        'Host': 'c.dun.163.com'
    }

    params = {
        'referer': 'http://app.miit-eidc.org.cn/miitxxgk/gonggao/xxgk/queryCpParamPage',
        'zoneId': 'CN31',
        'dt': dt,
        'acToken': ac_token,
        'id': '0b46352afd8742fa934f87745fbf7f36',
        'fp': execjs.compile(js).call('get_fp'),
        'https': 'false',
        'type': 'undefined',
        'version': '2.23.0',
        'dpr': '2',
        'dev': '1',
        'cb': cb,
        # 'cb': "OIishntnm3JJhRtSnlq5+xVq1vpcT8cztWDCKc6Y/uxXTbaiYWM.WXkrEYN60ovUXS95SZDHqDubjbjRz6u6lN8VERf7",
        'ipv6': 'false',
        'runEnv': '10',
        'group': '',
        'scene': '',
        'lang': 'zh-CN',
        'sdkVersion': 'undefined',
        'iv': '2',
        'width': '320',
        'audio': 'false',
        'sizeType': '10',
        'smsVersion': 'v3',
        'token': '',
        'callback': '__JSONP_e7b96vq_1',
    }

    response = requests.get('http://c.dun.163.com/api/v3/get', params=params, headers=headers, verify=False)
    # print(response.text)
    # response.text: __JSONP_e7b96vq_1({"data":{"bg":["http://necaptcha.nosdn.127.net/ede3a93be8a4415185cf40d33b9dc866@2x.jpg","http://necaptcha1.nosdn.127.net/ede3a93be8a4415185cf40d33b9dc866@2x.jpg"],"front":["http://necaptcha.nosdn.127.net/d771625d3d35466ba31e4e0a82225829@2x.png","http://necaptcha1.nosdn.127.net/d771625d3d35466ba31e4e0a82225829@2x.png"],"token":"cbefdcb6504041b68089aaff0b69d7d9","type":2,"zoneId":"CN31"},"error":0,"msg":"ok"});
    # 提取出json
    import re
    import json
    res = re.findall(r'__JSONP_e7b96vq_1\((.*)\);', response.text)[0]
    res = json.loads(res)
    # print(res)
    return res


def main_():
    ac_token, dt = get_actoken()
    res = get_img(ac_token, dt)
    bg = res.get('data').get('bg')[0]
    front = res.get('data').get('front')[0]
    token = res.get('data').get('token')
    zone_id = res.get('data').get('zoneId')

    distance = get_distance(bg, front)
    data = get_check_data(distance, token)
    result = check(zone_id, token, data, dt)
    return result


def get_distance(bg: str, front: str) -> int:
    bg_content = requests.get(bg).content
    front_content = requests.get(front).content
    with open('./bg.jpg', 'wb') as f:
        f.write(bg_content)
    with open('./front.png', 'wb') as f:
        f.write(front_content)

    slide = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)

    distance = int(slide.slide_match(front_content, bg_content, simple_target=True).get('target')[0] * 0.66)
    # print(distance)
    return distance + 10


def get_check_data(distance: int, token: str) -> str:
    """
    生成轨迹，返回data参数
    :param distance:
    :return: data
    """
    # distance = distance + 10
    # from GTrace import GTrace
    # trace = GTrace()
    # distance, res = trace.get_mouse_pos_path(distance)
    res = trace.get_track(distance)
    # print(f'滑块距离:{distance}')
    data = execjs.compile(js).call('trace', token, distance, res)
    return data['data']


def check(zone_id, token, data, dt):
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'http://app.miit-eidc.org.cn/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    }

    params = {
        'referer': urllib.parse.quote('http://app.miit-eidc.org.cn/miitxxgk/gonggao/xxgk/queryCpParamPage', safe=''),
        'zoneId': zone_id,
        'dt': dt,
        'id': '0b46352afd8742fa934f87745fbf7f36',
        'token': token,
        'acToken': 'undefined',
        'data': urllib.parse.quote(data, safe=''),
        'width': '320',
        'type': '2',
        'version': '2.23.0',
        'cb': execjs.compile(js).call('get_cb'),
        'extraData': '',
        'bf': '0',
        'runEnv': '10',
        'sdkVersion': 'undefined',
        'iv': '2',
        'callback': '__JSONP_8lb964i_1',
    }

    url = 'http://c.dun.163.com/api/v3/check'
    url_params = f'?referer={params["referer"]}&zoneId=CN31&dt={dt}&id=0b46352afd8742fa934f87745fbf7f36&token={params.get("token")}&acToken=undefined&data={params.get("data")}&width=320&type=2&version=2.23.0&cb={params.get("cb")}&extraData=&bf=0&runEnv=10&sdkVersion=undefined&iv=2&callback={params.get("callback")}'

    response = requests.get(url + url_params, headers=headers, verify=False)
    # response = requests.get(url, params=params, headers=headers, verify=False)
    # print(response.text)
    text_ = re.findall(r'__JSONP_8lb964i_1\((.*)\);', response.text)[0]
    result = json.loads(text_)
    print(result)
    return result


if __name__ == '__main__':
    count = 0
    times = 100
    for i in tqdm.trange(times):
        result = main_()
        if result.get('data', {}).get('result'):
            print('验证成功')
            count += 1
    print(f'成功率:{count / times}')
    # main_()
    # print(get_actoken())
    # print(get_check_data(100, 'd8243b2617a34dd89b688876d11034b1'))
