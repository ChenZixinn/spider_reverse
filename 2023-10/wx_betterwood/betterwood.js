// 导入md5
const CryptoJS = require('crypto-js')

// url = "https://api.betterwood.com/hotel/brand/museum/list"

/**
 * 传入接口的完整url，返回headers中的参数
 * @param url 接口的完整url
 * @returns {{Signature: *, MessageId}}
 */
function get_headers(url) {
    // MessageId
    H = function (t) {
        for (var n = [8, 13, 18, 23], e = 0; e < n.length; e++)
            t = t.slice(0, n[e]) + "-" + t.slice(n[e]);
        return t
    }
    x = function () {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = [], e = "0123456789abcdef", r = 0; r < 36; r++) {
            var o = Math.floor(16 * Math.random());
            n[r] = e.substring(o, o + 1)
        }
        n[14] = "4";
        var i = 3 & Number(n[19]) | 8;
        n[19] = e.substring(i, i + 1),
            n[8] = n[13] = n[18] = n[23] = "-";
        var u = n.join("")
            , a = H(CryptoJS.MD5(u + (new Date).getTime() + t).toString());
        return a
    }
    MessageId = x()


    // Signature
    L = function (t, n, e, r, o, i, u, a, s) {
        var d = "";
        return d = a ? "AppVersion=".concat(o, "Authorization=").concat(a, "Channel=").concat(i, "ClientType=").concat(r, "DeviceManufacture=").concat(n, "DeviceModel=").concat(e, "MessageId=").concat(u, "OsVersion=").concat(t, "AppKey=C49E2654AAA94F5085A9C12FE2CAB09CUrl=").concat(s) : "AppVersion=".concat(o, "Channel=").concat(i, "ClientType=").concat(r, "DeviceManufacture=").concat(n, "DeviceModel=").concat(e, "MessageId=").concat(u, "OsVersion=").concat(t, "AppKey=C49E2654AAA94F5085A9C12FE2CAB09CUrl=").concat(s),
            d = CryptoJS.MD5(d.replace(/\s*/g, "")).toString().substring(4, 28).toLocaleUpperCase()
    }
    var o = {
        "content-type": "application/json",
        "Channel": "bdw",
        "AppVersion": "2.3.6",
        "BusinessType": 1,
        "MessageId": MessageId,
        "ClientType": "5",
        "OsVersion": "iOS 10.0.1",
        "DeviceManufacture": "devtools",
        "DeviceModel": "iPhone 5"
    }
        , i = o.OsVersion
        , u = o.DeviceManufacture
        , c = o.DeviceModel
        , a = o.ClientType
        , d = o.AppVersion
        , l = o.Channel
        , p = o.MessageId
        , h = o.Authorization
        , g = encodeURIComponent(url.split("betterwood.com")[1].split("?")[0])
        , Signature = L(i, u, c, a, d, l, p, h, g);

    return {
        'Signature': Signature,
        'MessageId': MessageId,
    }
}