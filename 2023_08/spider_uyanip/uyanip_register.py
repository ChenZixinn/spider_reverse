import string
from io import BytesIO
import random

import ddddocr
import requests
from PIL import Image

ocr = ddddocr.DdddOcr()

def register(phone_number:str):
    """
    注册
    :param phone_number: 手机号
    :return: 成功或None
    """
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json; charset=UTF-8',
        'Origin': 'https://www.uyanip.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.uyanip.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188',
        'sec-ch-ua': '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    # 获取图片验证码和Cookies
    img_obj = get_img()
    if img_obj:
        # 发送短信，返回token。验证码错误会失败
        code_obj = send_code(phone_number, img_obj['captcha_code'], img_obj["cookies"])
        if code_obj["errCode"] != 0:
            print(code_obj['data'])
            return None
        print(f"code_obj:{code_obj}")
        # 手机验证码
        phone_code = ''
        phone_code = input("请输入手机验证码：")

        json_data = {
            # 这里需要传入短信验证码接口返回的token
            'vtoken': code_obj['data'],
            # 手机号
            'phone': phone_number,
            # 手机短信验证码
            'smscode': phone_code,
            'password': 'mima123456',
            'confirmPassword': 'mima123456',
            # 随机用户名
            'nickname': generate_username(),
            'pinvitationCode': '',
            'type': 0,
        }
        # 发送注册请求
        response = requests.put('https://api.duyandb.com/auth/register/submit', headers=headers, json=json_data)
        # 成功会返回{'errCode':0, 'data': ''}
        print(response.json())
        return response.json()

def get_img():
    """
    获取验证码
    :return: 返回cookies和验证码
    """
    headers = {
        'Accept': 'image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'https://www.uyanip.com/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188',
        'sec-ch-ua': '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    response = requests.get('https://api.duyandb.com/auth/register/captcha', headers=headers)
    print(response.cookies)
    # 检查响应状态码是否为 200
    if response.status_code == 200:
        # 将响应的内容解析为图片
        image = Image.open(BytesIO(response.content))
        captcha_code = ocr.classification(image)
    else:
        print("请求失败，状态码：", response.status_code)
        return None
    # 这里的coockies用于下一次请求
    return {
        "cookies":response.cookies, "captcha_code":captcha_code
    }

def send_code(phone_number:str, captcha_code, cookies):
    """
    发送短信验证码
    :param phone_number: 手机号
    :param captcha_code: 图片验证码
    :param cookies: 图片验证码拿到的Cookies
    :return: {'data':'', 'errCode': 0}
    """
    """
    发送验证码
    :param phone_number: 手机号
    :return: {'data':'', 'errCode': 0}
    """

    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json; charset=UTF-8',
        'Origin': 'https://www.uyanip.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.uyanip.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188',
        'sec-ch-ua': '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    # 这里传入手机号和图片验证码
    json_data = {
        'value': phone_number,
        'captchaCode': captcha_code,
    }

    response = requests.post('https://api.duyandb.com/auth/register/smscode', cookies=cookies, headers=headers,
                             json=json_data)
    # 返回data和状态码，状态码为0则请求成功
    return response.json()


def generate_username(length=8):
    # 定义允许使用的字符集合
    # characters = string.ascii_letters + string.digits + string.punctuation
    characters = string.ascii_letters + string.digits

    # 随机生成指定长度的用户名
    username = ''.join(random.choice(characters) for _ in range(length))

    return username


if __name__ == '__main__':
    result = register('17118061111')
    if result and result.get('errCode') == 0:
        print("注册成功")
    else:
        print('注册失败，请重试')