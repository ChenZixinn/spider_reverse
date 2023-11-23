const forge = require('node-forge');

var loader;
!function(l) {
    function e(e) {
        for (var r, t, n = e[0], o = e[1], u = e[2], i = 0, f = []; i < n.length; i++)
            t = n[i],
            c[t] && f.push(c[t][0]),
            c[t] = 0;
        for (r in o)
            Object.prototype.hasOwnProperty.call(o, r) && (l[r] = o[r]);
        for (s && s(e); f.length; )
            f.shift()();
        return p.push.apply(p, u || []),
        a()
    }
    function a() {
        for (var e, r = 0; r < p.length; r++) {
            for (var t = p[r], n = !0, o = 1; o < t.length; o++) {
                var u = t[o];
                0 !== c[u] && (n = !1)
            }
            n && (p.splice(r--, 1),
            e = i(i.s = t[0]))
        }
        return e
    }
    var t = {}
      , c = {
        72: 0
    }
      , p = [];
    function i(e) {
        var r;
        return (t[e] || (r = t[e] = {
            i: e,
            l: !1,
            exports: {}
        },
        l[e].call(r.exports, r, r.exports, i),
        r.l = !0,
        r)).exports
    }
    i.m = l,
    i.c = t,
    i.d = function(e, r, t) {
        i.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: t
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(r, e) {
        if (1 & e && (r = i(r)),
        8 & e)
            return r;
        if (4 & e && "object" == typeof r && r && r.__esModule)
            return r;
        var t = Object.create(null);
        if (i.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: r
        }),
        2 & e && "string" != typeof r)
            for (var n in r)
                i.d(t, n, function(e) {
                    return r[e]
                }
                .bind(null, n));
        return t
    }
    ,
    i.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(r, "a", r),
        r
    }
    ,
    i.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }
    ,
    i.p = "//static.zkh360.com/file/resource/official/";
    var r = (n = window.webpackJsonp = window.webpackJsonp || []).push.bind(n);
    n.push = e;
    for (var n = n.slice(), o = 0; o < n.length; o++)
        e(n[o]);
    var s = r;
    a()

    loader = i;
}([

]);











o = '-----BEGIN PUBLIC KEY-----' +
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbY2WDZ40at3cyZ/OlxhYPPdwE4w38gVJIBJwv/lLGFIs2pUfcWxeeFol5FJj5H4yefW8EDE/rXj3A4MD9pn/Cx/1E3NCiCxRgvAeOECJ6YNZFG8ELtYUD2dZS0iDBnRbzZqaqzf/BECVX/zfcabTzC9qvoQDJPpyQviHh0+QBNQIDAQAB' +
    '-----END PUBLIC KEY-----'
c = "1700726408227"
navigator = {}

Latin1 = {
            stringify: function(t) {
                for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                    var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    r.push(String.fromCharCode(o))
                }
                return r.join("")
            },
            parse: function(t) {
                for (var e = t.length, n = [], r = 0; r < e; r++)
                    n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                return new l.init(n,e)
            }
        },

get_E = function (){
    t  = (new Date).getTime().toString()
    N = (t + t + t).substring(0, 32)
    Latin1.parse(N)
    return E
}

case31 = function (traceId) {


    // 设置公钥
    const publicKey = o; // 这里填写您的公钥
    const publicKeyPem = forge.pki.publicKeyFromPem(publicKey);

    // 加密数据
    function encryptWithPublicKey(data, publicKey) {
        return forge.util.encode64(publicKey.encrypt(data));
    }

    // 准备要加密的数据
    const dataToEncrypt = traceId; // 这里填写您要加密的数据

    // 使用公钥加密
    const encryptedData = encryptWithPublicKey(dataToEncrypt, publicKeyPem);
    // 准备HTTP请求的headers
    const headers = {
        'x-akc': encryptedData,
        'x-rgn': c // 这里填写对应的区域值
    };

// 准备HTTP请求的数据
    const requestData = {
        // ... 在这里添加请求的数据
    };

    // 使用ECB模式和PKCS7填充加密请求数据
    const cipher = forge.cipher.createCipher('AES-ECB', '...'); // 这里填写您的密钥
    cipher.start({iv: ''});
    cipher.update(forge.util.createBuffer(JSON.stringify(requestData), 'utf8'));
    cipher.finish();
    const encryptedRequestData = cipher.output.getBytes();

}

getTraceId = function (e = 8, t = !0) {
    var n = ""
        , n = Math.ceil(1e14 * Math.random()).toString().substr(0, e || 4);
    return t && (n += Date.now()),
        n
}
// traceId = getTraceId()
// console.log(case31(traceId));

console.log(get_E());

