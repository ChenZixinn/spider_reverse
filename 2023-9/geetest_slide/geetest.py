import io
import json
import random
import re
import time
from pathlib import Path

import ddddocr
import execjs
from PIL import Image
import requests


# 创建会话对象
session = requests.Session()


def get_t():
    return str(int(time.time()*1000))


def parse_bg_captcha(img, im_show=False, save_path=None):
    """
    滑块乱序背景图还原
    :param img: 图片路径str/图片路径Path对象/图片二进制
        eg: 'assets/bg.webp'
            Path('assets/bg.webp')
    :param im_show: 是否显示还原结果, <type 'bool'>; default: False
    :param save_path: 保存路径, <type 'str'>/<type 'Path'>; default: None
    :return: 还原后背景图 RGB图片格式
    """
    if isinstance(img, (str, Path)):
        _img = Image.open(img)
    elif isinstance(img, bytes):
        _img = Image.open(io.BytesIO(img))
    else:
        raise ValueError(f'输入图片类型错误, 必须是<type str>/<type Path>/<type bytes>: {type(img)}')
    # 图片还原顺序, 定值
    _Ge = [39, 38, 48, 49, 41, 40, 46, 47, 35, 34, 50, 51, 33, 32, 28, 29, 27, 26, 36, 37, 31, 30, 44, 45, 43,
           42, 12, 13, 23, 22, 14, 15, 21, 20, 8, 9, 25, 24, 6, 7, 3, 2, 0, 1, 11, 10, 4, 5, 19, 18, 16, 17]
    w_sep, h_sep = 10, 80

    # 还原后的背景图
    new_img = Image.new('RGB', (260, 160))

    for idx in range(len(_Ge)):
        x = _Ge[idx] % 26 * 12 + 1
        y = h_sep if _Ge[idx] > 25 else 0
        # 从背景图中裁剪出对应位置的小块
        img_cut = _img.crop((x, y, x + w_sep, y + h_sep))
        # 将小块拼接到新图中
        new_x = idx % 26 * 10
        new_y = h_sep if idx > 25 else 0
        new_img.paste(img_cut, (new_x, new_y))

    # new_img转为bytes
    if im_show:
        new_img.show()
    if save_path is not None:
        save_path = Path(save_path).resolve().__str__()
        new_img.save(save_path)
    stream = io.BytesIO()
    new_img.save(stream, format='JPEG')
    image_bytes = stream.getvalue()

    # 关闭字节流
    stream.close()
    # TypeError: a bytes-like object is required, not '_io.BytesIO'
    return image_bytes
    # ————————————————
    # 版权声明：本文为CSDN博主「帯泪的鱼」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    # 原文链接：https://blog.csdn.net/qq_42857999/article/details/121628908


def get_gt_and_challenge():
    """
    第一次请求，获取gt和challenge
    :return: gt, challenge
    """

    cookies = None

    headers = {
        'authority': 'www.geetest.com',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        # 'cookie': 'AGL_USER_ID=7075d2d8-204a-4342-a886-0f397056a796; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218a7338176f1767-07fece585a75da-19525634-1484784-18a733817701bc3%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fauth.geetest.com%2Flogin%2F%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThhNzMzODE3NmYxNzY3LTA3ZmVjZTU4NWE3NWRhLTE5NTI1NjM0LTE0ODQ3ODQtMThhNzMzODE3NzAxYmMzIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218a7338176f1767-07fece585a75da-19525634-1484784-18a733817701bc3%22%7D; 461cca3146ff093d059dee9439aa6b26=b6642792-7ee3-4fa3-bb03-a44cf78386ec',
        'pragma': 'no-cache',
        'referer': 'https://www.geetest.com/demo/slide-float.html',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }

    params = {
        't': get_t(),
    }

    response = session.get('https://www.geetest.com/demo/gt/register-slide', params=params, cookies=cookies,
                            headers=headers)
    # print(response.json())
    return response.json()


def other_static_js():

    headers = {
        'authority': 'static.geetest.com',
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'origin': 'https://www.geetest.com',
        'pragma': 'no-cache',
        'referer': 'https://www.geetest.com/',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'script',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    }

    response = session.get('https://static.geetest.com/static/js/fullpage.9.1.6.js', headers=headers)

def get_cookie_user(gt):
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'https://www.geetest.com/',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
    }

    params = {
        'gt': gt,
        'callback': f'geetest_{get_t()}',
    }

    return session.get('https://apiv6.geetest.com/gettype.php', params=params, headers=headers).cookies


def get_cookie_ajax_user(gt, challenge):
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'https://www.geetest.com/',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
    }

    response = session.get(
        f'https://api.geetest.com/ajax.php?gt={gt}&challenge={challenge}&lang=zh-cn&pt=0&client_type=web&w=&callback=geetest_{get_t()}',
        headers=headers,
    )
    return response.cookies


def get_c_and_s(gt, challenge, cookies=None):
    """
    获取c和s参数，需要传入gt和challenge
    :return:
    """
    # cookies = None

    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        # 'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218a7338176f1767-07fece585a75da-19525634-1484784-18a733817701bc3%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fauth.geetest.com%2Flogin%2F%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThhNzMzODE3NmYxNzY3LTA3ZmVjZTU4NWE3NWRhLTE5NTI1NjM0LTE0ODQ3ODQtMThhNzMzODE3NzAxYmMzIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218a7338176f1767-07fece585a75da-19525634-1484784-18a733817701bc3%22%7D; GeeTestUser=f0788cd5502fa7cbe41ac24a5992b2d7',
        'Pragma': 'no-cache',
        'Referer': 'https://www.geetest.com/',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
    }

    response = session.get(
        f'https://apiv6.geetest.com/get.php?gt={gt}&challenge={challenge}&lang=zh-cn&pt=0&client_type=web&callback=geetest_1694239359661&w=',
        cookies=cookies,
        headers=headers,
    )
    # 转为json
    json_str = get_json(response.text)
    return json_str


def get_json(text):
    """
    提取出geetest_ddd(*)里的json数据，返回dict
    :param text:
    :return:
    """
    # re取出geetest_1694239359661()中的json
    json_str = re.search(r'geetest_\d+\((.*?)\)', text).group(1)
    # 转为json
    js = json.loads(json_str)
    return js


def get_img_and_params(gt, challenge, cookies=None):

    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        # 'Cookie': 'GeeTestUser=1379c9207f415478e94894e43b879b32; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218a7338176f1767-07fece585a75da-19525634-1484784-18a733817701bc3%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fauth.geetest.com%2Flogin%2F%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThhNzMzODE3NmYxNzY3LTA3ZmVjZTU4NWE3NWRhLTE5NTI1NjM0LTE0ODQ3ODQtMThhNzMzODE3NzAxYmMzIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218a7338176f1767-07fece585a75da-19525634-1484784-18a733817701bc3%22%7D; GeeTestAjaxUser=21fd622449a60f9a7537765de8acbccb',
        'Pragma': 'no-cache',
        'Referer': 'https://www.geetest.com/',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
    }

    params = {
        'is_next': 'true',
        'type': 'slide3',
        'gt': gt,
        'challenge': challenge,
        'lang': 'zh-cn',
        'https': 'true',
        'protocol': 'https://',
        'offline': 'false',
        'product': 'embed',
        'api_server': 'api.geetest.com',
        'isPC': 'true',
        'autoReset': 'true',
        'width': '100%',
        'callback': f'geetest_{get_t()}',
    }
    # print(f"callback:{params['callback']}")

    response = session.get('https://api.geetest.com/get.php', params=params, cookies=cookies, headers=headers)
    # print(response.text)
    return response


def get_img(api_server, url):
    """
    网络请求获取图片
    :return:
    """
    headers = {
        'authority': 'static.geetest.com',
        'accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'origin': 'https://www.geetest.com',
        'pragma': 'no-cache',
        'referer': 'https://www.geetest.com/',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    }
    print(f"{api_server}{url}")
    response = session.get(f"https://{api_server}{url}", headers=headers)
    return response.content


def get_slice_res(target_bytes, background_bytes):
    slide = ddddocr.DdddOcr(det=False, ocr=False)

    res = slide.slide_comparison(target_bytes, background_bytes)

    return res


def slice_main(cookies, gt, challenge, w):

    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        # 'Cookie': 'GeeTestAjaxUser=151f4bdbc9854e0202a7d4a9b2854baf; GeeTestUser=de604e0d18c12a7c48acdbd9c6d0f40f',
        'Pragma': 'no-cache',
        'Referer': 'https://www.geetest.com/',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
    }

    response = session.get(
        f'https://api.geetest.com/ajax.php?gt={gt}&challenge={challenge}&lang=zh-cn&%24_BCe=0&client_type=web&w={w}&callback=geetest_{get_t()}',
        cookies=cookies,
        headers=headers,
    )

    return response


def get_type(gt, cookies):

    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        # 'Cookie': 'GeeTestUser=51a45e772463dc3565fa63cf7ccfaa9a',
        'Pragma': 'no-cache',
        'Referer': 'https://www.geetest.com/',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
    }

    params = {
        'gt': gt,
        'callback': f'geetest_{get_t()}',
    }

    response = session.get('https://apiv6.geetest.com/gettype.php', params=params, cookies=cookies, headers=headers)


def other_statis_js_2():

    headers = {
        'authority': 'static.geetest.com',
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'origin': 'https://www.geetest.com',
        'pragma': 'no-cache',
        'referer': 'https://www.geetest.com/',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'script',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    }

    response = session.get('https://static.geetest.com/static/js/slide.7.9.1.js', headers=headers)
def other_static_js_3():
    import requests

    headers = {
        'authority': 'static.geetest.com',
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'origin': 'https://www.geetest.com',
        'pragma': 'no-cache',
        'referer': 'https://www.geetest.com/',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'script',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    }

    response = session.get('https://static.geetest.com/static/js/gct.b71a9027509bc6bcfef9fc6a196424f5.js',
                            headers=headers)


def __ease_out_expo(sep):
    """
    缓动函数 easeOutExpo
    参考：https://easings.net/zh-cn#easeOutExpo
    """
    if sep == 1:
        return 1
    else:
        return 1 - pow(2, -10 * sep)


def get_slide_track(distance):
    """
    根据滑动距离生成滑动轨迹
    :param distance: 需要滑动的距离
    :return: 滑动轨迹<type 'list'>: [[x,y,t], ...]
        x: 已滑动的横向距离
        y: 已滑动的纵向距离, 除起点外, 均为0
        t: 滑动过程消耗的时间, 单位: 毫秒
    """

    if not isinstance(distance, int) or distance < 0:
        raise ValueError(f"distance类型必须是大于等于0的整数: distance: {distance}, type: {type(distance)}")
    # 初始化轨迹列表
    slide_track = [
        [random.randint(-50, -10), random.randint(-50, -10), 0],
        [0, 0, 0],
    ]
    # 共记录count次滑块位置信息
    count = 30 + int(distance / 2)
    # 初始化滑动时间
    t = random.randint(50, 100)
    # 记录上一次滑动的距离
    _x = 0
    _y = 0
    for i in range(count):
        # 已滑动的横向距离
        x = round(__ease_out_expo(i / count) * distance)
        # 滑动过程消耗的时间
        t += random.randint(10, 20)
        if x == _x:
            continue
        slide_track.append([x, _y, t])
        _x = x
    slide_track.append(slide_track[-1])
    return slide_track


def main():

    # 第一次请求，获取gt和challenge
    gt_and_challenge = get_gt_and_challenge()
    if gt_and_challenge.get('success', 0) != 1:
        raise Exception('获取gt和challenge失败')
    gt = gt_and_challenge['gt']
    challenge = gt_and_challenge['challenge']
    print(f"第一次请求，获取gt和challenge:{gt_and_challenge}")
    # print(gt_and_challenge)

    # get_cookie
    cookies_user = get_cookie_user(gt)
    # cookies_user = None
    # print(cookies_user)

    # 额外的请求
    get_type(gt, cookies_user)
    other_static_js()
    # 第二次请求，获取c和s参数
    c_and_s = get_c_and_s(gt, challenge, cookies_user)
    if c_and_s.get('status', 'error') != 'success':
        raise Exception('获取c和s参数失败')
    c = c_and_s.get('data', {}).get('c')
    s = c_and_s.get('data', {}).get('s')
    print(f"第二次请求，获取c和s参数:{c_and_s}")
    # print(c_and_s)

    # get_cookie_ajax_user
    cookie_ajax_user = get_cookie_ajax_user(gt, challenge)
    # 额外请求
    other_statis_js_2()
    # time.sleep(2)

    # 第三次请求，获取图片，更新参数
    response = get_img_and_params(gt, challenge, cookie_ajax_user)
    data_js = get_json(response.text)
    print(f"第三次请求，获取图片，更新参数:{data_js}")
    # print(data_js)

    # 额外请求
    other_static_js_3()

    # 更新参数
    gt = data_js['gt']
    challenge = data_js['challenge']
    c = data_js['c']
    s = data_js['s']

    # 合并两个cookies
    cookies = response.cookies.copy()
    cookies.update(cookie_ajax_user)
    # cookies = None
    # print(cookies)
    time.sleep(2)
    # 第四次请求，获取图片
    full_bg = get_img(data_js['static_servers'][0], data_js['fullbg'])
    bg = get_img(data_js['static_servers'][0], data_js['bg'])
    print(full_bg[:10])
    print(bg[:10])

    # 识别结果
    background_bytes = parse_bg_captcha(full_bg, im_show=False, save_path='full_bg.jpg')
    target_bytes = parse_bg_captcha(bg, im_show=False, save_path='bg.jpg')
    # Image转bytes
    res = get_slice_res(target_bytes, background_bytes)
    print(f"识别结果:{res}")

    # 读取slide.js执行get_w()方法
    with open('generate_w.js', 'r') as f:
        js = f.read()
    ctx = execjs.compile(js)
    from GTrace import GTrace
    gtrace = GTrace()
    # -10，图片不是从头部开始的
    distance, track = gtrace.get_mouse_pos_path(res['target'][0]-10)
    params = {
        # , gt, challenge, pass_distance, c, s, trance
        'gt': gt,
        'challenge': challenge,
        'distance': distance,
        "passtime": track[len(track)-1][2],
        'c': c,
        's': s,
        'track': track
    }
    print(params)
    w = ctx.call('generate_w', params)
    # w = ctx.call('get_w', params)

    print(f"生成参数:{w}")
    print(len(w))
    # 第五次请求，验证结果
    time.sleep(5)
    response = slice_main(cookies, gt, challenge, w)
    print(response.text)


if __name__ == '__main__':
    main()
    # 识别结果
    # background_bytes = parse_bg_captcha("./61d8ff9ed.webp", im_show=False, save_path='full_bg.jpg')
    target_bytes = parse_bg_captcha("./d401d55fc.webp", im_show=False, save_path='bg.jpg')
    # Image转bytes
    # res = get_slice_res(target_bytes, background_bytes)
    # print(f"识别结果:{res}")