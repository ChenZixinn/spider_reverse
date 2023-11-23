
def get_text(html, xpath, index):
    res = html.xpath(xpath)
    if res:
        res = res[index]
        return res
    return ''