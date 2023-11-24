# 导入AES加密库，具体库的导入方式因编程语言而异
from aes_library import AES

# 待加密的数据
plaintext = "Hello, World!"

# 密钥，密钥长度通常为16字节（128位）、24字节（192位）或32字节（256位）
key = "1234567890123456"  # 128位密钥

# 初始化AES加密器，指定加密模式为ECB和填充方式为PKCS7
aes = AES(key, mode=AES.MODE_ECB, padding=AES.PKCS7)

# 加密数据
cipher_text = aes.encrypt(plaintext)

# 输出密文
print("Cipher Text:", cipher_text)

# 解密数据
deciphered_text = aes.decrypt(cipher_text)

# 输出解密后的明文
print("Deciphered Text:", deciphered_text)
