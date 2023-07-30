import time

import execjs
import requests
cookies = {
    'pgv_pvid': '4826943597',
    'RK': 'SUGwIlokfo',
    'ptcz': '0ce98086743fb0e2bee86985622f97d9e1a8d00f6ea90790fa70febd9c2ad512',
    'pac_uid': '0_3dbf64d18e6b3',
    'tvfe_boss_uuid': '4a04f45fa84447cf',
    'fqm_pvqid': 'f39574d3-81a2-4eea-8b82-8153f97bda6d',
    'ts_uid': '231797942',
    'fqm_sessionid': 'f6e205ba-8396-45f4-a8be-8215a6b5c79d',
    'pgv_info': 'ssid=s3550716637',
    'ts_refer': 'www.google.com/',
    'login_type': '2',
    'tmeLoginType': '1',
    'qqmusic_key': 'W_X_5ZlEyC3OuNOVERjRGWzNALi-MeFAyNrKnpugCNAJgQlhZm3jgHfUbbgmxJbnuF5J3SKsHIaD1gTw',
    'psrf_qqrefresh_token': '',
    'psrf_qqopenid': '',
    'euin': 'oK6kowEAoK4z7ecsoe4ioKcqoc**',
    'wxuin': '1152921504860531892',
    'wxunionid': 'oqFLxsuiKH2JPlHgEe2kKNWMh4M4',
    'wxrefresh_token': '71_QdzEqJ1pZ3aDc5a5_zKFLhK2v2EVYKcq2zgqiRIstWtJ_c2Ejwck6lK-c_BeQr48HFia-XHxFk3YkxYAFdsqadMkmM8IFzgsmaiB7A24-vY',
    'qm_keyst': 'W_X_5ZlEyC3OuNOVERjRGWzNALi-MeFAyNrKnpugCNAJgQlhZm3jgHfUbbgmxJbnuF5J3SKsHIaD1gTw',
    'psrf_qqaccess_token': '',
    'psrf_qqunionid': '',
    'wxopenid': 'opCFJw_o5XKpVzS1TR8QNItZkOvU',
    'wxuin': '1152921504860531892',
    'qm_keyst': 'W_X_5ZlEyC3OuNOVERjRGWzNALi-MeFAyNrKnpugCNAJgQlhZm3jgHfUbbgmxJbnuF5J3SKsHIaD1gTw',
    'ts_last': 'y.qq.com/n/ryqq/search',
}

headers = {
    'authority': 'u.y.qq.com',
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded',
    # 'cookie': 'pgv_pvid=4826943597; RK=SUGwIlokfo; ptcz=0ce98086743fb0e2bee86985622f97d9e1a8d00f6ea90790fa70febd9c2ad512; pac_uid=0_3dbf64d18e6b3; tvfe_boss_uuid=4a04f45fa84447cf; fqm_pvqid=f39574d3-81a2-4eea-8b82-8153f97bda6d; ts_uid=231797942; fqm_sessionid=f6e205ba-8396-45f4-a8be-8215a6b5c79d; pgv_info=ssid=s3550716637; ts_refer=www.google.com/; login_type=2; tmeLoginType=1; qqmusic_key=W_X_5ZlEyC3OuNOVERjRGWzNALi-MeFAyNrKnpugCNAJgQlhZm3jgHfUbbgmxJbnuF5J3SKsHIaD1gTw; psrf_qqrefresh_token=; psrf_qqopenid=; euin=oK6kowEAoK4z7ecsoe4ioKcqoc**; wxuin=1152921504860531892; wxunionid=oqFLxsuiKH2JPlHgEe2kKNWMh4M4; wxrefresh_token=71_QdzEqJ1pZ3aDc5a5_zKFLhK2v2EVYKcq2zgqiRIstWtJ_c2Ejwck6lK-c_BeQr48HFia-XHxFk3YkxYAFdsqadMkmM8IFzgsmaiB7A24-vY; qm_keyst=W_X_5ZlEyC3OuNOVERjRGWzNALi-MeFAyNrKnpugCNAJgQlhZm3jgHfUbbgmxJbnuF5J3SKsHIaD1gTw; psrf_qqaccess_token=; psrf_qqunionid=; wxopenid=opCFJw_o5XKpVzS1TR8QNItZkOvU; wxuin=1152921504860531892; qm_keyst=W_X_5ZlEyC3OuNOVERjRGWzNALi-MeFAyNrKnpugCNAJgQlhZm3jgHfUbbgmxJbnuF5J3SKsHIaD1gTw; ts_last=y.qq.com/n/ryqq/search',
    'origin': 'https://y.qq.com',
    'pragma': 'no-cache',
    'referer': 'https://y.qq.com/',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
}

# 请求参数
singer = "周杰伦"
page_num = 1
data = '{"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":"1152921504860531892","g_tk_new_20200303":1531704962,"g_tk":1531704962},"req_1":{"method":"DoSearchForQQMusicDesktop","module":"music.search.SearchCgiService","param":{"remoteplace":"txt.yqq.top","searchid":"68939297501935721","search_type":0,"query":"'+singer+'","page_num":'+str(page_num)+',"num_per_page":10}}}'

# 获取sign加密参数
with open("./loader.js") as f:
    js_code = f.read()

time_str = round(time.time() * 1000)
sign = execjs.compile(js_code).call("get_sign", data)

params = {
    # 时间戳
    '_': time_str,
    # 加密参数
    'sign': sign,
}

# 这里data要编码
response = requests.post('https://u.y.qq.com/cgi-bin/musics.fcg', params=params, cookies=cookies, headers=headers,
                         data=data.encode()).json()

print(response)