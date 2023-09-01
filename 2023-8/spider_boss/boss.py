import execjs
import requests

zp_token = '91d9ePB4FTW0uKzFQfzRWFEEOM0hjAlIJL2s3JgY5UQcuFml%2BL18sWiwNMSsZA242fiZSJCZXSH44KCBnEXNqOgJmI3AUTGMcTXpVKCMzAF0wQSZ3S2owNicBAz0rcCtNPB9gW3V3RXR1Ono='


def get_api(job_name, city_code, page, zp_token):
    cookies = {
        'wd_guid': 'a5d21dc0-1da8-496a-a015-24ad7b906c31',
        'historyState': 'state',
        '_bl_uid': '3Cljvltnty46Ipq4Is87kRLchkmw',
        'boss_login_mode': 'sms',
        'lastCity': '101281600',
        '__zp_seo_uuid__': '80bf6375-1e18-4b72-87b4-6de0ed14f03a',
        '__g': '-',
        '__l': 'r=https%3A%2F%2Fcn.bing.com%2F&l=%2Fwww.zhipin.com%2Fdongguan%2F&s=1&g=&s=3&friend_source=0',
        '__c': '1693124722',
        '__a': '43905306.1693124722..1693124722.13.1.13.13',
        '__zp_stoken__': zp_token
    }

    headers = {
        'authority': 'www.zhipin.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        # 'cookie': 'lastCity=101280600; __zp_seo_uuid__=2a696868-db18-46cb-a9d8-ee61a45c1b8d; __g=-; __l=r=https%3A%2F%2Fcn.bing.com%2F&l=%2Fwww.zhipin.com%2Fshenzhen%2F&s=1&g=&s=3&friend_source=0; __c=1693026882; __a=63412443.1691892745.1691892745.1693026882.3.2.2.3; wd_guid=bd182fd5-e5db-4daf-b3dc-34a406893c36; historyState=state; _bl_uid=Fql2slIerdykhRh6jwFmkIdrvpse; __zp_stoken__=ad34eWCUTC1I3FyZ7fGIuWAAsARcpQh5BZiZBcEhYbzhQO28Xb3l%2FZkN0Om9sLyV5LXtlQGx3HWUkfTs3LEIocAZwThoHVhsNFVsdeAxUJTtfHCFwXzpxYkR0YGsoCAMyb0JXPz99EG9pPD4%3D',
        'pragma': 'no-cache',
        'referer': f'https://www.zhipin.com/web/geek/job?query={job_name}&city={city_code}&page=1',
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
        'scene': '1',
        'query': job_name,
        'city': city_code,
        'experience': '',
        'payType': '',
        'partTime': '',
        'degree': '',
        'industry': '',
        'scale': '',
        'stage': '',
        'position': '',
        'jobType': '',
        'salary': '',
        'multiBusinessDistrict': '',
        'multiSubway': '',
        'page': str(page),
        'pageSize': '30',
    }
    response = requests.get('https://www.zhipin.com/wapi/zpgeek/search/joblist.json', params=params, cookies=cookies,
                            headers=headers)
    return response

def get_zp_token(seed, ts)-> str:
    # 读取./boss_zp_token.js执行函数
    with open('./boss_zp_token.js', 'r') as f:
        js = f.read()
    zp_token = execjs.compile(js).call('get_zp_token', seed, ts)
    return zp_token


def get_job(job_name, page, city_code=None):
    global zp_token
    while True:
        response = get_api(job_name, city_code, page, zp_token)

        resp = response.json()
        if resp.get('code') == 37:
            # 重新生成zp_token
            seed = resp.get('zpData', {}).get('seed')
            ts = resp.get('zpData', {}).get('ts')
            zp_token = get_zp_token(seed, ts)
            print(resp)
        elif resp.get('code') == 0:
            # 更新zp_token
            sseed = response.cookies.get('__zp_sseed__')
            sts = response.cookies.get('__zp_sts__')
            zp_token = get_zp_token(sseed, sts)
            return resp
        else:
            raise Exception(f'获取数据失败：{resp}')


if __name__ == '__main__':
    for i in range(1, 10):
        get_job("python", i, '101280600')
