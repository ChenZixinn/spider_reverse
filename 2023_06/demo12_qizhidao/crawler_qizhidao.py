import json

import requests
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import base64
from pkcs7 import PKCS7Encoder


def AES_decrypt(data, hasUse:int):
    """
    解密方法
    :param data: 数据，接口中的data1参数
    :param hasUse: hasUse参数，用来获取加密key
    :return: 解密后的字典数据
    """
    key_list = [b"xc46VoB49X3PGYAg", b"KE3pb84wxqLTZEG3", b"18Lw0OEaBBUwHYNT", b"jxxWWIzvkqEQcZrd", b"40w42rjLEXxYhxRn",
                b"K6hkD03WNW8N1fPM", b"I8V3IwIhrwNbWxqz", b"3JNNbxAP4zi5oSGA", b"7pUuESQl8aRTFFKK", b"KB4GAHN6M5soB3WV"]
    # 解码
    html = base64.b64decode(data)
    # mode为ECB的AES加密
    aes = AES.new(key_list[hasUse-1], AES.MODE_ECB)
    # 解密
    info = aes.decrypt(html)
    # 填充
    decrypt = unpad(info, AES.block_size).decode()
    return json.loads(decrypt)


# 通过curlconvert（https://curlconverter.com/）生成请求代码
cookies = {
    'wz_uuid': 'X%2Fa4b7e834699f617fc2428d3d3e509928',
    'sensorsdata2015jssdkchannel': '%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D',
    'Hm_lvt_9ea3e7293b7c088e0d2c88874b63e7dd': '1689777143',
    'token': 'eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi50dGs5YlNkZ1lCS0tGWjVWaFhvMWZnLlQyMWhXTjZkX29pSnZZcWpfOThrRENVZkFldkVTckEyNHZYd2ZNYmxjTE5NeC03emRKcjVuUW0wajRzX0F1VS10SlAtUFZOWUZ6Qm9lZ29pTWFTXzRmeE52VGlFSUtFOERFMWRnQWpyblB6WldfQ0pBcXdEcFpRQnlpa1RLZmtJamVvVllYLUlSUlVWY1QxNEhhcmhHQktfU3hvSW9jQmZtWjV4aVc4SVNpUWxHeFNyMjhfbU81YXEzS3M5V05DYTVZWlJHUnpqSlRNSlJHa2tMNDFxdVEuNlEwWDhDaTVLV19kdGllQ1oyUWVfdw.nfmeio4xKklqFvmQMfHMrQFBNI1BqgP-MUfDn-eVJ2Kp5xe2Ku6PymUYwg_8TUP7yg9GtMee0TUa5sQlvvHZqQ',
    'accessToken': 'eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi50dGs5YlNkZ1lCS0tGWjVWaFhvMWZnLlQyMWhXTjZkX29pSnZZcWpfOThrRENVZkFldkVTckEyNHZYd2ZNYmxjTE5NeC03emRKcjVuUW0wajRzX0F1VS10SlAtUFZOWUZ6Qm9lZ29pTWFTXzRmeE52VGlFSUtFOERFMWRnQWpyblB6WldfQ0pBcXdEcFpRQnlpa1RLZmtJamVvVllYLUlSUlVWY1QxNEhhcmhHQktfU3hvSW9jQmZtWjV4aVc4SVNpUWxHeFNyMjhfbU81YXEzS3M5V05DYTVZWlJHUnpqSlRNSlJHa2tMNDFxdVEuNlEwWDhDaTVLV19kdGllQ1oyUWVfdw.nfmeio4xKklqFvmQMfHMrQFBNI1BqgP-MUfDn-eVJ2Kp5xe2Ku6PymUYwg_8TUP7yg9GtMee0TUa5sQlvvHZqQ',
    'creditNo': '%22%22',
    'param_sign': 'rqd3lt',
    'SSO_SESSION_ID': 'YzI3YWJjOWEtYTgyNC00MDVlLTk4ZGItNGJkNDM1NTg1YWUz',
    'acw_tc': '784e2ca816900794228843102e20ad4a6f8c79118e26d4a2b126f5024b728c',
    'patentDetailTechnicalSupportShowTime': 'show',
    'Hm_lpvt_9ea3e7293b7c088e0d2c88874b63e7dd': '1690080902',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%2204dc736832124b66841aa70b1d9d1d65%22%2C%22first_id%22%3A%221896e90f5a7d41-020705f8463bb2c-1b525634-2073600-1896e90f5a8cb8%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfbG9naW5faWQiOiIwNGRjNzM2ODMyMTI0YjY2ODQxYWE3MGIxZDlkMWQ2NSIsIiRpZGVudGl0eV9jb29raWVfaWQiOiIxODk2ZTkwZjVhN2Q0MS0wMjA3MDVmODQ2M2JiMmMtMWI1MjU2MzQtMjA3MzYwMC0xODk2ZTkwZjVhOGNiOCJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%2204dc736832124b66841aa70b1d9d1d65%22%7D%2C%22%24device_id%22%3A%221896e90f5a7d41-020705f8463bb2c-1b525634-2073600-1896e90f5a8cb8%22%7D',
    'x-web-ip': '113.77.243.101, 120.78.44.166, 100.121.108.213',
}

headers = {
    'authority': 'app.qizhidao.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'accesstoken': 'eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi50dGs5YlNkZ1lCS0tGWjVWaFhvMWZnLlQyMWhXTjZkX29pSnZZcWpfOThrRENVZkFldkVTckEyNHZYd2ZNYmxjTE5NeC03emRKcjVuUW0wajRzX0F1VS10SlAtUFZOWUZ6Qm9lZ29pTWFTXzRmeE52VGlFSUtFOERFMWRnQWpyblB6WldfQ0pBcXdEcFpRQnlpa1RLZmtJamVvVllYLUlSUlVWY1QxNEhhcmhHQktfU3hvSW9jQmZtWjV4aVc4SVNpUWxHeFNyMjhfbU81YXEzS3M5V05DYTVZWlJHUnpqSlRNSlJHa2tMNDFxdVEuNlEwWDhDaTVLV19kdGllQ1oyUWVfdw.nfmeio4xKklqFvmQMfHMrQFBNI1BqgP-MUfDn-eVJ2Kp5xe2Ku6PymUYwg_8TUP7yg9GtMee0TUa5sQlvvHZqQ',
    'content-type': 'application/json',
    # 'cookie': 'wz_uuid=X%2Fa4b7e834699f617fc2428d3d3e509928; sensorsdata2015jssdkchannel=%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D; Hm_lvt_9ea3e7293b7c088e0d2c88874b63e7dd=1689777143; token=eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi50dGs5YlNkZ1lCS0tGWjVWaFhvMWZnLlQyMWhXTjZkX29pSnZZcWpfOThrRENVZkFldkVTckEyNHZYd2ZNYmxjTE5NeC03emRKcjVuUW0wajRzX0F1VS10SlAtUFZOWUZ6Qm9lZ29pTWFTXzRmeE52VGlFSUtFOERFMWRnQWpyblB6WldfQ0pBcXdEcFpRQnlpa1RLZmtJamVvVllYLUlSUlVWY1QxNEhhcmhHQktfU3hvSW9jQmZtWjV4aVc4SVNpUWxHeFNyMjhfbU81YXEzS3M5V05DYTVZWlJHUnpqSlRNSlJHa2tMNDFxdVEuNlEwWDhDaTVLV19kdGllQ1oyUWVfdw.nfmeio4xKklqFvmQMfHMrQFBNI1BqgP-MUfDn-eVJ2Kp5xe2Ku6PymUYwg_8TUP7yg9GtMee0TUa5sQlvvHZqQ; accessToken=eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi50dGs5YlNkZ1lCS0tGWjVWaFhvMWZnLlQyMWhXTjZkX29pSnZZcWpfOThrRENVZkFldkVTckEyNHZYd2ZNYmxjTE5NeC03emRKcjVuUW0wajRzX0F1VS10SlAtUFZOWUZ6Qm9lZ29pTWFTXzRmeE52VGlFSUtFOERFMWRnQWpyblB6WldfQ0pBcXdEcFpRQnlpa1RLZmtJamVvVllYLUlSUlVWY1QxNEhhcmhHQktfU3hvSW9jQmZtWjV4aVc4SVNpUWxHeFNyMjhfbU81YXEzS3M5V05DYTVZWlJHUnpqSlRNSlJHa2tMNDFxdVEuNlEwWDhDaTVLV19kdGllQ1oyUWVfdw.nfmeio4xKklqFvmQMfHMrQFBNI1BqgP-MUfDn-eVJ2Kp5xe2Ku6PymUYwg_8TUP7yg9GtMee0TUa5sQlvvHZqQ; creditNo=%22%22; param_sign=rqd3lt; SSO_SESSION_ID=YzI3YWJjOWEtYTgyNC00MDVlLTk4ZGItNGJkNDM1NTg1YWUz; acw_tc=784e2ca816900794228843102e20ad4a6f8c79118e26d4a2b126f5024b728c; patentDetailTechnicalSupportShowTime=show; Hm_lpvt_9ea3e7293b7c088e0d2c88874b63e7dd=1690080902; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2204dc736832124b66841aa70b1d9d1d65%22%2C%22first_id%22%3A%221896e90f5a7d41-020705f8463bb2c-1b525634-2073600-1896e90f5a8cb8%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfbG9naW5faWQiOiIwNGRjNzM2ODMyMTI0YjY2ODQxYWE3MGIxZDlkMWQ2NSIsIiRpZGVudGl0eV9jb29raWVfaWQiOiIxODk2ZTkwZjVhN2Q0MS0wMjA3MDVmODQ2M2JiMmMtMWI1MjU2MzQtMjA3MzYwMC0xODk2ZTkwZjVhOGNiOCJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%2204dc736832124b66841aa70b1d9d1d65%22%7D%2C%22%24device_id%22%3A%221896e90f5a7d41-020705f8463bb2c-1b525634-2073600-1896e90f5a8cb8%22%7D; x-web-ip=113.77.243.101, 120.78.44.166, 100.121.108.213',
    'device-id': 'BagomEiCgy9JAwmXvGbEkcLZXnAe4wCOn5gsmssX9ifgzPdJKTXQQbYBXQtEHh3wDMJCHS5DeqbJeTcvNdWZDQA==',
    'eagleeye-pappname': 'fyw9n1jhpf@545ab88155a2a87',
    'eagleeye-sessionid': '9klIwkvkeO9umRjeacsvna2j1pR6',
    'eagleeye-traceid': '20f1728d16900809365551035a2a87',
    'h5version': 'v1.0.0',
    'origin': 'https://patents.qizhidao.com',
    'referer': 'https://patents.qizhidao.com/',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'sensordeviceid': '1896e90f5a7d41-020705f8463bb2c-1b525634-2073600-1896e90f5a8cb8',
    'sensorsdistinctid': '04dc736832124b66841aa70b1d9d1d65',
    'signature': '4e0277e900072ceb7f4ea5b7086f2401.etQF71',
    'token': 'eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi50dGs5YlNkZ1lCS0tGWjVWaFhvMWZnLlQyMWhXTjZkX29pSnZZcWpfOThrRENVZkFldkVTckEyNHZYd2ZNYmxjTE5NeC03emRKcjVuUW0wajRzX0F1VS10SlAtUFZOWUZ6Qm9lZ29pTWFTXzRmeE52VGlFSUtFOERFMWRnQWpyblB6WldfQ0pBcXdEcFpRQnlpa1RLZmtJamVvVllYLUlSUlVWY1QxNEhhcmhHQktfU3hvSW9jQmZtWjV4aVc4SVNpUWxHeFNyMjhfbU81YXEzS3M5V05DYTVZWlJHUnpqSlRNSlJHa2tMNDFxdVEuNlEwWDhDaTVLV19kdGllQ1oyUWVfdw.nfmeio4xKklqFvmQMfHMrQFBNI1BqgP-MUfDn-eVJ2Kp5xe2Ku6PymUYwg_8TUP7yg9GtMee0TUa5sQlvvHZqQ',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'user-agent-web': 'X/a4b7e834699f617fc2428d3d3e509928',
}

json_data = {
    'text_ver': 'N',
    'subWordSwitch': None,
    'sortColumns': [
        {
            'columnName': '_score',
            'shortName': '_score',
            'sortType': 0,
        },
    ],
    'listColumns': [
        {
            'name': '标题',
            'shortName': 'TI',
            'columnName': 'patent_name',
        },
        {
            'name': '公开(公告)号',
            'shortName': 'PN',
            'columnName': 'out_num',
        },
        {
            'name': '摘要',
            'shortName': 'ABS',
            'columnName': 'patent_brief',
        },
        {
            'name': '摘要附图',
            'shortName': 'IMAGE',
            'columnName': 'patent_img',
        },
        {
            'name': '当前权利人',
            'shortName': 'ASP',
            'columnName': 'patent_person',
        },
        {
            'name': '发明(设计)人',
            'shortName': 'IN',
            'columnName': 'designer',
        },
        {
            'name': '申请日',
            'shortName': 'AD',
            'columnName': 'app_date',
        },
        {
            'name': '公开(公告)日',
            'shortName': 'PD',
            'columnName': 'out_date',
        },
        {
            'name': '申请号',
            'shortName': 'AN',
            'columnName': 'app_num_standard',
        },
    ],
    'columnType': 1,
    'orderColumn': '_score',
    'orderType': '_score',
    'simpleVersion': True,
    'current': 1,
    'pageSize': 20,
    'statement': '华为',
    'filter': '',
    'pageCount': 21073,
    'checkResult': True,
}

response = requests.post(
    'https://app.qizhidao.com/qzd-bff-patent/patent/simple-version/search',
    cookies=cookies,
    headers=headers,
    json=json_data,
).json()


data = AES_decrypt(response["data1"], response["hasUse"])

print(data)

