const aes = require("crypto-js")
var privateKey = "ciKAJTYXcaiHdCrN"

/**
 * 加密
 * @param l 要加密的文本
 * @returns {*}
 */
newEncrypt = function (l) {
    var n = aes.enc.Utf8.parse(privateKey)
        , t = aes.enc.Utf8.parse(privateKey)
        , e = aes.enc.Utf8.parse(l)
        , a = aes.AES.encrypt(e, n, {
        iv: t,
        mode: aes.mode.CBC,
        padding: aes.pad.Pkcs7
    });
    return aes.enc.Base64.stringify(a.ciphertext)
}


/**
 * 解密
 * @param l
 * @returns {*}
 */
newDecoto = function (l) {
    var n = aes.enc.Base64.parse(l)
        , t = aes.enc.Utf8.parse(privateKey)
        , e = aes.enc.Utf8.parse(privateKey)
        , a = aes.lib.CipherParams.create({
        ciphertext: n
    });
    return aes.AES.decrypt(a, t, {
        iv: e,
        mode: aes.mode.CBC,
        padding: aes.pad.Pkcs7
    }).toString(aes.enc.Utf8)
}

var f = {
    "body": {
        "loginMethod": "1",
        "name": "15014324839",
        "password": "12312312312"
    },
    "head": {
        "userCode": null,
        "channelCode": "101",
        // "transTime": (new Date()).getTime(),
        "transTime": 1688549765646,
        "transToken": "",
        "customerId": null,
        "transSerialNumber": ""
    }
}

// json_key参数加密
const json_key = newEncrypt(JSON.stringify(f))
console.log(json_key)


// 解析结果
function getResult(data) {
    // var data = '8UQlJBq0xiGEcNeOz8oGgaTX/aNh8S1TAn6oIGlPz1/eEwl1q26a2NyMSNcubZHPyBmBBRYCpAHd+QBIoBuvBMPcnHjnvsMOXwv6In77aIU6PHbS4gIF5p1Dm/UkAy3bSqoYTaTmLuQx3V+tBbxLUzVXbRA0AdYfdbdKfHXFo4GqwUuaC4yjdFic4iTu4GfE2piFzmWriTJrqtJqLfNF3DWLJ77uFZb4+Jnjutx5xvrQmEYF23PUTkkPfQZB+hV6qNihIZJrCSzLyyc8PaIef6+e81UHPpBvS9dH1BvyUMcewd8RtskToqvejBzPtCYF'
    var n = data.replace(/[\r\n]/g, "")
    var t = newDecoto(n)
    console.log(t)
    return t
}
var data = '8UQlJBq0xiGEcNeOz8oGgaTX/aNh8S1TAn6oIGlPz1/eEwl1q26a2NyMSNcubZHPyBmBBRYCpAHd+QBIoBuvBMPcnHjnvsMOXwv6In77aIU6PHbS4gIF5p1Dm/UkAy3bSqoYTaTmLuQx3V+tBbxLUzVXbRA0AdYfdbdKfHXFo4GqwUuaC4yjdFic4iTu4GfE2piFzmWriTJrqtJqLfNF3DWLJ77uFZb4+Jnjutx5xvrQmEYF23PUTkkPfQZB+hV6qNihIZJrCSzLyyc8PaIef6+e81UHPpBvS9dH1BvyUMcewd8RtskToqvejBzPtCYF'
var data = 'tzLSXRbOKZrz9hWpvdbkY0iosxc+nYHzMOF2QSkGbe5pppOo+AfHxWkspVsMTuAkjyz+6n1CAGQ7cP3QPTRYu04GrxLIP0PmkIuyqcEdp1vOfmEJ7bT/BxwWVR5dWHeIsEPOlN/Nk7PPAyWvLpxU11pxYBGGPlUeeqk0U7y9xR7hykqIcHb98XYf3vMTriZXZzhxKrWeSw+tyo6vA7NizxjcGbyUzF47wQNgRWVchaeXPvBXajvstc+1q+/2DH6CD6CAdCRSM3GBb89S6jHSFOF0xa8EsCh7L3dbsAzc8HvOH28L529D+oRwVI3PPALT'
var data = 'tzLSXRbOKZrz9hWpvdbkY0iosxc+nYHzMOF2QSkGbe5pppOo+AfHxWkspVsMTuAkjyz+6n1CAGQ7cP3QPTRYu04GrxLIP0PmkIuyqcEdp1vOfmEJ7bT/BxwWVR5dWHeIsEPOlN/Nk7PPAyWvLpxU11pxYBGGPlUeeqk0U7y9xR7hykqIcHb98XYf3vMTriZXZzhxKrWeSw+tyo6vA7NizxjcGbyUzF47wQNgRWVchaeXPvBXajvstc+1q+/2DH6CD6CAdCRSM3GBb89S6jHSFOF0xa8EsCh7L3dbsAzc8HvOH28L529D+oRwVI3PPALT'
var data = 'tzLSXRbOKZrz9hWpvdbkY0iosxc+nYHzMOF2QSkGbe5pppOo+AfHxWkspVsMTuAkjyz+6n1CAGQ7\\ncP3QPTRYu04GrxLIP0PmkIuyqcEdp1vOfmEJ7bT/BxwWVR5dWHeIsEPOlN/Nk7PPAyWvLpxU11px\\nYBGGPlUeeqk0U7y9xR7hykqIcHb98XYf3vMTriZXZzhxKrWeSw+tyo6vA7NizxjcGbyUzF47wQNg\\nRWVchaeXPvBXajvstc+1q+/2DH6CD6CAdCRSM3GBb89S6jHSFOF0xa8EsCh7L3dbsAzc8HvOH28L\\n529D+oRwVI3PPALT'
getResult(data)
