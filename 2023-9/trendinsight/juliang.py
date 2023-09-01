import re

import execjs
import requests


# TODO 补充cookies
cookies = {
    'x-jupiter-uuid': '',
    'passport_csrf_token': '',
    'passport_csrf_token_default': '',
    'tt_scid': '',
    'msToken': '',
    '_csrf_token': '',
}


def get_ms_token() -> str:
    """
    获取msToken参数，需要cookies
    :return: msToken
    """
    headers = {
        'authority': 'trendinsight.oceanengine.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cache-control': 'no-cache',
        # 'cookie': 'x-jupiter-uuid=1693558439394154; _csrf_token=9ycwWVOMVVNiE_BmXRwUf8oZ; passport_csrf_token=0a41ea3b44bd033ef1e823ffa9112f90; passport_csrf_token_default=0a41ea3b44bd033ef1e823ffa9112f90; msToken=ehPNdH1mB66AySijgRtx-f1atz9qlcr2uKEHrsypj-ULT02rvlcdiGswv--qeA-EebRhjzQ0YP6iyo-mLZlMdlGmpuMCaFBRgZt2-UyY; msToken=_KcOyW9bDd4mm6XsdqkbSc8qiJqry2VHdwEieICtP4apBltmZE4-2EzjLmqvTsAiNHUegXXU6xOPPF1deza31dEwNywqrULjjJkRRJz-I8q-WdO3QzzyKX145R7YN2I=',
        'pragma': 'no-cache',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Microsoft Edge";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.62',
    }

    params = {
        'dates': 'daily-20230831_weekly-20230827_monthly-202307',
        'area': '["11"]',
        'category_id': '1',
    }
    # 请求area接口，获取msToken
    response = requests.get('https://trendinsight.oceanengine.com/area', params=params, cookies=cookies,
                            headers=headers).text
    if 'msToken' in response:
        ms_token = re.search(r'msToken=(.*?);', response).group(1)
        return ms_token
    else:
        return ''


def get_poi_list() -> dict:
    """
    获取数据
    :return: json格式的数据
    """
    # 获取msToken
    ms_token = get_ms_token()
    if not ms_token:
        print("not msToken")
        return {}
    headers = {
        'authority': 'trendinsight.oceanengine.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        # 'cookie': 'x-jupiter-uuid=1693558439394154; passport_csrf_token=0a41ea3b44bd033ef1e823ffa9112f90; passport_csrf_token_default=0a41ea3b44bd033ef1e823ffa9112f90; tt_scid=MyHL03hKf14m8ZilNFlF3pgpjx8Y.8pQtmKZIoH0eepE7ZeM3LGV9WKgv3KdN7cr5382; msToken=srj7Ai0cM-Sp0GqCfyqJUcWdK1ywr7c30GiGjRRB1zomE5bDtK1coO-ztZHsS-puVE2q4hU81DCVEltaBMzGFN8JHghbD0fNo6NUwe9YVaMkMRpwdxWBFfn9XndN_bw=; msToken=_Kxm05H3L2pUqh4Ri-PSa2ciLgvaopNqTRdq6iG_lYEaYt4SOgSM_tv8MzHrptcNgM4H9nl5w_xnFx6j1OUFIyvPm7w0dtN3gSxITHedK0Xhwg3xqFFvio9u0i5MOd4=; _csrf_token=bf9QPxmGU8Ufaaes_FNGrmrd',
        'origin': 'https://trendinsight.oceanengine.com',
        'pragma': 'no-cache',
        'referer': 'https://trendinsight.oceanengine.com/area?dates=daily-20230831_weekly-20230827_monthly-202308&area=%5B%2211%22%5D&category_id=0',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Microsoft Edge";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.62',
    }

    # 请求参数，根据需要调整
    json_data = {
        'category_id': '0',
        'rank_style': 'daily',
        'rank_level': '2',
        'location_id': '11',
        'rank_date': '20230831',
        'app': 'aweme',
        'pageSize': '10',
        'ranking': 'poi_rank',
        'page': '2',
    }

    url = 'https://trendinsight.oceanengine.com/api/open/area/get_poi_list'

    # 读取./juliang.js调用get_params方法，获取两个加密参数
    with open('./juliang.js', 'r') as f:
        js_code = f.read()
        ctx = execjs.compile(js_code)
        params_dict = ctx.call('get_param', ms_token, url, json_data)
    x_bogus = params_dict['X-Bogus']
    _signature = params_dict['_signature']

    # 发起请求
    response = requests.post(
        f'{url}?msToken={ms_token}&X-Bogus={x_bogus}&_signature={_signature}',
        cookies=cookies,
        headers=headers,
        json=json_data,
    )
    return response.json()


if __name__ == '__main__':
    print(get_poi_list())
