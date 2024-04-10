from DrissionPage import ChromiumOptions, WebPage
import base64

url = base64.b64decode(b'aHR0cHM6Ly93d3cudXJidGl4LmhrLw==').decode('utf-8')

# 启动并访问网站
co = ChromiumOptions()
page = WebPage(chromium_options=co)
page.get(url)

# 开始监听包含'list?AfbF5fe='的接口
page.listen.start('list?AfbF5fe=')
i = 0
for packet in page.listen.steps():
    print(packet.response.body)  # body为json格式数据，raw_body可以得到原始数据
    # 手动退出
    i += 1
    if i >= 7:
        break
page.close()