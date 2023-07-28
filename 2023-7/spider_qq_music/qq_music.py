import time

import execjs
import requests
time_str = round(time.time() * 1000)
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
    'wxuin': '1152921504860531892',
    'qm_keyst': 'W_X_5fBRMSJBXybdD8e7a2qzUHVtVGDXRhKOGFhOTIYY8yDMMtu4gVeEPQyZaQxLChXJjLjFeEs7raHs',
    'psrf_qqunionid': '',
    'tmeLoginType': '1',
    'qqmusic_key': 'W_X_5fBRMSJBXybdD8e7a2qzUHVtVGDXRhKOGFhOTIYY8yDMMtu4gVeEPQyZaQxLChXJjLjFeEs7raHs',
    'psrf_qqrefresh_token': '',
    'psrf_qqopenid': '',
    'euin': 'oK6kowEAoK4z7ecsoe4ioKcqoc**',
    'psrf_qqaccess_token': '',
    'wxrefresh_token': '71_BWnlL3ltmhRBCLMgXxj4INC5FtbXDeswS1LeZTL-N4IcKukHXAcQov-Ilp16lusUXjrmMzqEwl02NrUZt4CxGcN2dyAJb0tvvnw2FXOtN0s',
    'qm_keyst': 'W_X_5fBRMSJBXybdD8e7a2qzUHVtVGDXRhKOGFhOTIYY8yDMMtu4gVeEPQyZaQxLChXJjLjFeEs7raHs',
    'wxuin': '1152921504860531892',
    'wxunionid': 'oqFLxsuiKH2JPlHgEe2kKNWMh4M4',
    'wxopenid': 'opCFJw_o5XKpVzS1TR8QNItZkOvU',
    'login_type': '2',
    'ts_last': 'y.qq.com/n/ryqq/search',
}

headers = {
    'authority': 'u.y.qq.com',
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded',
    # 'cookie': 'pgv_pvid=4826943597; RK=SUGwIlokfo; ptcz=0ce98086743fb0e2bee86985622f97d9e1a8d00f6ea90790fa70febd9c2ad512; pac_uid=0_3dbf64d18e6b3; tvfe_boss_uuid=4a04f45fa84447cf; fqm_pvqid=f39574d3-81a2-4eea-8b82-8153f97bda6d; ts_uid=231797942; fqm_sessionid=f6e205ba-8396-45f4-a8be-8215a6b5c79d; pgv_info=ssid=s3550716637; ts_refer=www.google.com/; wxuin=1152921504860531892; qm_keyst=W_X_5fBRMSJBXybdD8e7a2qzUHVtVGDXRhKOGFhOTIYY8yDMMtu4gVeEPQyZaQxLChXJjLjFeEs7raHs; psrf_qqunionid=; tmeLoginType=1; qqmusic_key=W_X_5fBRMSJBXybdD8e7a2qzUHVtVGDXRhKOGFhOTIYY8yDMMtu4gVeEPQyZaQxLChXJjLjFeEs7raHs; psrf_qqrefresh_token=; psrf_qqopenid=; euin=oK6kowEAoK4z7ecsoe4ioKcqoc**; psrf_qqaccess_token=; wxrefresh_token=71_BWnlL3ltmhRBCLMgXxj4INC5FtbXDeswS1LeZTL-N4IcKukHXAcQov-Ilp16lusUXjrmMzqEwl02NrUZt4CxGcN2dyAJb0tvvnw2FXOtN0s; qm_keyst=W_X_5fBRMSJBXybdD8e7a2qzUHVtVGDXRhKOGFhOTIYY8yDMMtu4gVeEPQyZaQxLChXJjLjFeEs7raHs; wxuin=1152921504860531892; wxunionid=oqFLxsuiKH2JPlHgEe2kKNWMh4M4; wxopenid=opCFJw_o5XKpVzS1TR8QNItZkOvU; login_type=2; ts_last=y.qq.com/n/ryqq/search',
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
data = '{"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":"1152921504860531892","g_tk_new_20200303":260306547,"g_tk":260306547},"req_1":{"module":"music.musicsearch.HotkeyService","method":"GetHotkeyForQQMusicMobile","param":{"searchid":"26383790827344385","remoteplace":"txt.yqq.top","from":"yqqweb"}},"req_2":{"module":"music.musicsearch.HotkeyService","method":"GetHotkeyForQQMusicMobile","param":{"searchid":"21765592882582019","remoteplace":"txt.yqq.top","from":"yqqweb"}},"req_3":{"module":"yqq.WhiteListServer","method":"Pass","param":{}},"req_4":{"module":"userInfo.VipQueryServer","method":"SRFVipQuery_V2","param":{"uin_list":["1152921504860531892"]}},"req_5":{"module":"userInfo.BaseUserInfoServer","method":"get_user_baseinfo_v2","param":{"vec_uin":["1152921504860531892"]}},"req_6":{"module":"music.lvz.VipIconUiShowSvr","method":"GetVipIconUiV2","param":{"PID":3}},"req_7":{"module":"MessageCenter.MessageCenterServer","method":"GetMessage","param":{"uin":"1152921504860531892","red_dot":[{"msg_type":1}]}},"req_8":{"module":"GlobalComment.GlobalCommentMessageReadServer","method":"GetMessage","param":{"uin":"1152921504860531892","page_num":0,"page_size":1,"last_msg_id":"","type":0}}}'

with open("./loader.js") as f:
    js_code = f.read()

sign = execjs.compile(js_code).call("get_sign", data)
print(sign)
print(sign == '')
params = {
    '_': time_str,
    'sign': sign,
}


response = requests.post('https://u.y.qq.com/cgi-bin/musics.fcg', params=params, cookies=cookies, headers=headers, data=data.encode()).json()

print(response)