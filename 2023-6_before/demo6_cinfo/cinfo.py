# 导入所需的库
import execjs

# 定义JavaScript代码
with open("ent.js") as f:
    js_code = f.read()
#  这里将上述代码粘贴进来

# 创建一个JavaScript执行环境
ctx = execjs.compile(js_code)

# 调用getResCode方法
res_code = ctx.call('getResCode')

# 打印结果
print(res_code)
