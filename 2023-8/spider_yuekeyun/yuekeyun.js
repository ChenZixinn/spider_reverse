window = global;

// 加载器
var loader;
!function (e) {
    function t(t) {
        for (var a, o, l = t[0], u = t[1], s = t[2], d = 0, f = []; d < l.length; d++)
            o = l[d],
            Object.prototype.hasOwnProperty.call(r, o) && r[o] && f.push(r[o][0]),
                r[o] = 0;
        for (a in u)
            Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
        for (c && c(t); f.length;)
            f.shift()();
        return i.push.apply(i, s || []),
            n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, l = 1; l < n.length; l++) {
                var u = n[l];
                0 !== r[u] && (a = !1)
            }
            a && (i.splice(t--, 1),
                e = o(o.s = n[0]))
        }
        return e
    }

    var a = {}
        , r = {
        528: 0
    }
        , i = [];

    function o(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o),
            n.l = !0,
            n.exports
    }

    o.e = function (e) {
        var t = []
            , n = r[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var a = new Promise(function (t, a) {
                        n = r[e] = [t, a]
                    }
                );
                t.push(n[2] = a);
                var i, l = document.createElement("script");
                l.charset = "utf-8",
                    l.timeout = 120,
                o.nc && l.setAttribute("nonce", o.nc),
                    l.src = function (e) {
                        return o.p + "js/chunks/" + ({
                            133: "agreement",
                            134: "cinemaAgreement",
                            135: "goodsHoSalesInfo",
                            136: "goodsImportData",
                            137: "goodsStorageCheck",
                            138: "goodsStorageHandout",
                            139: "goodsStorageLoss",
                            140: "goodsStorageReturn",
                            141: "goodsStorageTransfer",
                            142: "hoPurchase",
                            143: "otherSetting",
                            144: "purchase",
                            145: "singleSubsidyManagement",
                            146: "storageItem"
                        }[e] || e) + ".chunk.js"
                    }(e),
                0 !== l.src.indexOf(window.location.origin + "/") && (l.crossOrigin = "anonymous");
                var u = new Error;
                i = function (t) {
                    l.onerror = l.onload = null,
                        clearTimeout(s);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type)
                                , i = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + a + ": " + i + ")",
                                u.name = "ChunkLoadError",
                                u.type = a,
                                u.request = i,
                                n[1](u)
                        }
                        r[e] = void 0
                    }
                }
                ;
                var s = setTimeout(function () {
                    i({
                        type: "timeout",
                        target: l
                    })
                }, 12e4);
                l.onerror = l.onload = i,
                    document.head.appendChild(l)
            }
        return Promise.all(t)
    }
        ,
        o.m = e,
        o.c = a,
        o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        o.t = function (e, t) {
            if (1 & t && (e = o(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (o.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & t && "string" != typeof e)
                for (var a in e)
                    o.d(n, a, function (t) {
                        return e[t]
                    }
                        .bind(null, a));
            return n
        }
        ,
        o.n = function (e) {
            var t = e && e.__esModule ? function () {
                        return e.default
                    }
                    : function () {
                        return e
                    }
            ;
            return o.d(t, "a", t),
                t
        }
        ,
        o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        o.p = "//g.alicdn.com/alipic-lark/larkportal-front/3.0.144/",
        o.oe = function (e) {
            throw e
        }
    ;
    var l = window.webpackJsonp = window.webpackJsonp || []
        , u = l.push.bind(l);
    l.push = t,
        l = l.slice();
    for (var s = 0; s < l.length; s++)
        t(l[s]);
    var c = u;
    i.push([1354, 0]),
        n()
    loader = o;
}([
    // 把需要的方法放进来
    function (e, t) {
        var n, a, r, o = 16, l = o, u = 65536, s = u >>> 1, c = u * u, d = u - 1;

        function f(e) {
            n = new Array(e);
            for (var t = 0; t < n.length; t++)
                n[t] = 0;
            a = new p,
                (r = new p).digits[0] = 1
        }

        f(20);
        h(1e15);

        function p(e) {
            this.digits = "boolean" == typeof e && 1 == e ? null : n.slice(0),
                this.isNeg = !1
        }

        function A(e) {
            var t = new p(!0);
            return t.digits = e.digits.slice(0),
                t.isNeg = e.isNeg,
                t
        }

        function h(e) {
            var t = new p;
            t.isNeg = e < 0,
                e = Math.abs(e);
            for (var n = 0; e > 0;)
                t.digits[n++] = e & d,
                    e = Math.floor(e / u);
            return t
        }

        function m(e) {
            for (var t = "", n = e.length - 1; n > -1; --n)
                t += e.charAt(n);
            return t
        }

        var v = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

        function g(e, t) {
            var n = new p;
            n.digits[0] = t;
            for (var r = Y(e, n), i = v[r[1].digits[0]]; 1 == U(r[0], a);)
                r = Y(r[0], n),
                    digit = r[1].digits[0],
                    i += v[r[1].digits[0]];
            return (e.isNeg ? "-" : "") + m(i)
        }

        var y = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

        function E(e) {
            var t = "";
            for (i = 0; i < 4; ++i)
                t += y[15 & e],
                    e >>>= 4;
            return m(t)
        }

        function b(e) {
            for (var t = "", n = (R(e),
                R(e)); n > -1; --n)
                t += E(e.digits[n]);
            return t
        }

        function I(e) {
            return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 90 ? 10 + e - 65 : e >= 97 && e <= 122 ? 10 + e - 97 : 0
        }

        function S(e) {
            for (var t = 0, n = Math.min(e.length, 4), a = 0; a < n; ++a)
                t <<= 4,
                    t |= I(e.charCodeAt(a));
            return t
        }

        function M(e) {
            for (var t = new p, n = e.length, a = 0; n > 0; n -= 4,
                ++a)
                t.digits[a] = S(e.substr(Math.max(n - 4, 0), Math.min(n, 4)));
            return t
        }

        function T(e, t) {
            var n;
            if (e.isNeg != t.isNeg)
                t.isNeg = !t.isNeg,
                    n = w(e, t),
                    t.isNeg = !t.isNeg;
            else {
                n = new p;
                for (var a, r = 0, i = 0; i < e.digits.length; ++i)
                    a = e.digits[i] + t.digits[i] + r,
                        n.digits[i] = a % u,
                        r = Number(a >= u);
                n.isNeg = e.isNeg
            }
            return n
        }

        function w(e, t) {
            var n;
            if (e.isNeg != t.isNeg)
                t.isNeg = !t.isNeg,
                    n = T(e, t),
                    t.isNeg = !t.isNeg;
            else {
                var a, r;
                n = new p,
                    r = 0;
                for (var i = 0; i < e.digits.length; ++i)
                    a = e.digits[i] - t.digits[i] + r,
                        n.digits[i] = a % u,
                    n.digits[i] < 0 && (n.digits[i] += u),
                        r = 0 - Number(a < 0);
                if (-1 == r) {
                    r = 0;
                    for (i = 0; i < e.digits.length; ++i)
                        a = 0 - n.digits[i] + r,
                            n.digits[i] = a % u,
                        n.digits[i] < 0 && (n.digits[i] += u),
                            r = 0 - Number(a < 0);
                    n.isNeg = !e.isNeg
                } else
                    n.isNeg = e.isNeg
            }
            return n
        }

        function R(e) {
            for (var t = e.digits.length - 1; t > 0 && 0 == e.digits[t];)
                --t;
            return t
        }

        function N(e) {
            var t, n = R(e), a = e.digits[n], r = (n + 1) * l;
            for (t = r; t > r - l && 0 == (32768 & a); --t)
                a <<= 1;
            return t
        }

        function D(e, t) {
            for (var n, a, r, i = new p, l = R(e), u = R(t), s = 0; s <= u; ++s) {
                for (n = 0,
                         r = s,
                         j = 0; j <= l; ++j,
                         ++r)
                    a = i.digits[r] + e.digits[j] * t.digits[s] + n,
                        i.digits[r] = a & d,
                        n = a >>> o;
                i.digits[s + l + 1] = n
            }
            return i.isNeg = e.isNeg != t.isNeg,
                i
        }

        function k(e, t) {
            var n, a, r;
            result = new p,
                n = R(e),
                a = 0;
            for (var i = 0; i <= n; ++i)
                r = result.digits[i] + e.digits[i] * t + a,
                    result.digits[i] = r & d,
                    a = r >>> o;
            return result.digits[1 + n] = a,
                result
        }

        function C(e, t, n, a, r) {
            for (var i = Math.min(t + r, e.length), o = t, l = a; o < i; ++o,
                ++l)
                n[l] = e[o]
        }

        var O = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535);

        function x(e, t) {
            var n = Math.floor(t / l)
                , a = new p;
            C(e.digits, 0, a.digits, n, a.digits.length - n);
            for (var r = t % l, i = l - r, o = a.digits.length - 1, u = o - 1; o > 0; --o,
                --u)
                a.digits[o] = a.digits[o] << r & d | (a.digits[u] & O[r]) >>> i;
            return a.digits[0] = a.digits[o] << r & d,
                a.isNeg = e.isNeg,
                a
        }

        var L = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);

        function B(e, t) {
            var n = Math.floor(t / l)
                , a = new p;
            C(e.digits, n, a.digits, 0, e.digits.length - n);
            for (var r = t % l, i = l - r, o = 0, u = o + 1; o < a.digits.length - 1; ++o,
                ++u)
                a.digits[o] = a.digits[o] >>> r | (a.digits[u] & L[r]) << i;
            return a.digits[a.digits.length - 1] >>>= r,
                a.isNeg = e.isNeg,
                a
        }

        function P(e, t) {
            var n = new p;
            return C(e.digits, 0, n.digits, t, n.digits.length - t),
                n
        }

        function Q(e, t) {
            var n = new p;
            return C(e.digits, t, n.digits, 0, n.digits.length - t),
                n
        }

        function G(e, t) {
            var n = new p;
            return C(e.digits, 0, n.digits, 0, t),
                n
        }

        function U(e, t) {
            if (e.isNeg != t.isNeg)
                return 1 - 2 * Number(e.isNeg);
            for (var n = e.digits.length - 1; n >= 0; --n)
                if (e.digits[n] != t.digits[n])
                    return e.isNeg ? 1 - 2 * Number(e.digits[n] > t.digits[n]) : 1 - 2 * Number(e.digits[n] < t.digits[n]);
            return 0
        }

        function Y(e, t) {
            var n, a, i = N(e), o = N(t), f = t.isNeg;
            if (i < o)
                return e.isNeg ? ((n = A(r)).isNeg = !t.isNeg,
                    e.isNeg = !1,
                    t.isNeg = !1,
                    a = w(t, e),
                    e.isNeg = !0,
                    t.isNeg = f) : (n = new p,
                    a = A(e)),
                    new Array(n, a);
            n = new p,
                a = e;
            for (var h = Math.ceil(o / l) - 1, m = 0; t.digits[h] < s;)
                t = x(t, 1),
                    ++m,
                    ++o,
                    h = Math.ceil(o / l) - 1;
            a = x(a, m),
                i += m;
            for (var v = Math.ceil(i / l) - 1, g = P(t, v - h); -1 != U(a, g);)
                ++n.digits[v - h],
                    a = w(a, g);
            for (var y = v; y > h; --y) {
                var E = y >= a.digits.length ? 0 : a.digits[y]
                    , b = y - 1 >= a.digits.length ? 0 : a.digits[y - 1]
                    , I = y - 2 >= a.digits.length ? 0 : a.digits[y - 2]
                    , S = h >= t.digits.length ? 0 : t.digits[h]
                    , M = h - 1 >= t.digits.length ? 0 : t.digits[h - 1];
                n.digits[y - h - 1] = E == S ? d : Math.floor((E * u + b) / S);
                for (var D = n.digits[y - h - 1] * (S * u + M), C = E * c + (b * u + I); D > C;)
                    --n.digits[y - h - 1],
                        D = n.digits[y - h - 1] * (S * u | M),
                        C = E * u * u + (b * u + I);
                (a = w(a, k(g = P(t, y - h - 1), n.digits[y - h - 1]))).isNeg && (a = T(a, g),
                    --n.digits[y - h - 1])
            }
            return a = B(a, m),
                n.isNeg = e.isNeg != f,
            e.isNeg && (n = f ? T(n, r) : w(n, r),
                a = w(t = B(t, m), a)),
            0 == a.digits[0] && 0 == R(a) && (a.isNeg = !1),
                new Array(n, a)
        }

        function W(e) {
            var t = Q(D(Q(e, this.k - 1), this.mu), this.k + 1)
                , n = w(G(e, this.k + 1), G(D(t, this.modulus), this.k + 1));
            n.isNeg && (n = T(n, this.bkplus1));
            for (var a = U(n, this.modulus) >= 0; a;)
                a = U(n = w(n, this.modulus), this.modulus) >= 0;
            return n
        }

        function V(e, t) {
            var n = D(e, t);
            return this.modulo(n)
        }

        function z(e, t) {
            var n = new p;
            n.digits[0] = 1;
            for (var a = e, r = t; 0 != (1 & r.digits[0]) && (n = this.multiplyMod(n, a)),
            0 != (r = B(r, 1)).digits[0] || 0 != R(r);)
                a = this.multiplyMod(a, a);
            return n
        }

        e.exports = {
            RSAKeyPair: function (e, t, n) {
                this.e = M(e),
                    this.d = M(t),
                    this.m = M(n),
                    this.chunkSize = 2 * R(this.m),
                    this.radix = 16,
                    this.barrett = new function (e) {
                        this.modulus = A(e),
                            this.k = R(this.modulus) + 1;
                        var t, n, a = new p;
                        a.digits[2 * this.k] = 1,
                            this.mu = (t = a,
                                n = this.modulus,
                                Y(t, n)[0]),
                            this.bkplus1 = new p,
                            this.bkplus1.digits[this.k + 1] = 1,
                            this.modulo = W,
                            this.multiplyMod = V,
                            this.powMod = z
                    }
                    (this.m)
            },
            setMaxDigits: f,
            encryptedString: function (e, t) {
                for (var n = new Array, a = t.length, r = 0; r < a;)
                    n[r] = t.charCodeAt(r),
                        r++;
                for (; n.length % e.chunkSize != 0;)
                    n[r++] = 0;
                var i, o, l, u = n.length, s = "";
                for (r = 0; r < u; r += e.chunkSize) {
                    for (l = new p,
                             i = 0,
                             o = r; o < r + e.chunkSize; ++i)
                        l.digits[i] = n[o++],
                            l.digits[i] += n[o++] << 8;
                    var c = e.barrett.powMod(l, e.e);
                    s += (16 == e.radix ? b(c) : g(c, e.radix)) + " "
                }
                return s.substring(0, s.length - 1)
            }
        }
    },
]);
// console.log(loader(0));

// s是公钥，可以在网页源代码中找到
s = {
    "daily": "f15fb948704151452b51b9914d32d5c51083dab544541f115e7afa4e7783a5c9a9537c9478cb284c369e1687c99ae93c2f7fd0b3787194930ba9d3a06a6c15e0eb0dc393eefc6c2ae491f6289c0eed5bae55ef8731928e388b6311a039a9e97ca33199993fc84982b52f09842ebbd93140e1f98fddba791e06a3e36250ac96df",
    "zlg_daily": "f15fb948704151452b51b9914d32d5c51083dab544541f115e7afa4e7783a5c9a9537c9478cb284c369e1687c99ae93c2f7fd0b3787194930ba9d3a06a6c15e0eb0dc393eefc6c2ae491f6289c0eed5bae55ef8731928e388b6311a039a9e97ca33199993fc84982b52f09842ebbd93140e1f98fddba791e06a3e36250ac96df",
    "pre": "8c99bea915e2f3623d5bb15209ffdde3a0aa1b9652a7a3222423f00994ce2d7b5f8ef837ed2bfe940235932e3ecdabf15f15bd6e71943f5fd5166a1dd0e78f309ba39acfadec05de53c0655342caab2231b63bbbac549ce901085a14709e483b1c4037934f9d3bccd0d8a0291403d6c40b00daea810ec5fdb784591dc03188c5",
    "zlg_pre": "8c99bea915e2f3623d5bb15209ffdde3a0aa1b9652a7a3222423f00994ce2d7b5f8ef837ed2bfe940235932e3ecdabf15f15bd6e71943f5fd5166a1dd0e78f309ba39acfadec05de53c0655342caab2231b63bbbac549ce901085a14709e483b1c4037934f9d3bccd0d8a0291403d6c40b00daea810ec5fdb784591dc03188c5",
    "prod": "837ec9791ee734418f44220b56cd22252c53309f59c560ff231d71e2579d38ea7a4408b017b1af85c6683111da151af25dddc53904a01e219bd56495a1add8cb70e54428bb87d95cd40478f6f800414be8a334ac779f4b819ae94fec240dc2ace1f99df64de88eef7bcbde4aabbdeac0e70a55e61331a9ea3d0546fe647977f9",
    "zlg_prod": "837ec9791ee734418f44220b56cd22252c53309f59c560ff231d71e2579d38ea7a4408b017b1af85c6683111da151af25dddc53904a01e219bd56495a1add8cb70e54428bb87d95cd40478f6f800414be8a334ac779f4b819ae94fec240dc2ace1f99df64de88eef7bcbde4aabbdeac0e70a55e61331a9ea3d0546fe647977f9"
}
// loader(0)是RSA加密的函数
var i = loader(0);

function get_password(e) {
    i.setMaxDigits(130);
    var c = new i.RSAKeyPair("10001", "", s['prod']);
    // e参数是密码
    return i.encryptedString(c, encodeURIComponent(e));
}


console.log(get_password('123456'));