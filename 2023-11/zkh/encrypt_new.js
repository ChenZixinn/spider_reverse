const forge = require('node-forge');
const crypto_js = require('crypto-js')
const NodeRSA = require('node-rsa');
window = global;
var loader;
var ba_encrypt;
!(function (l) {

    var t = {}
        , c = {
        15: 0
    }
        , p = [];

    function i(e) {
        if (t[e])
            return t[e].exports;
        var r = t[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return l[e].call(r.exports, r, r.exports, i),
            r.l = !0,
            r.exports
    }

    i.m = l,
        i.c = t,
        i.d = function (e, r, t) {
            i.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: t
            })
        }
        ,
        i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        i.t = function (r, e) {
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
                    i.d(t, n, function (e) {
                        return r[e]
                    }
                        .bind(null, n));
            return t
        }
        ,
        i.n = function (e) {
            var r = e && e.__esModule ? function () {
                        return e.default
                    }
                    : function () {
                        return e
                    }
            ;
            return i.d(r, "a", r),
                r
        }
        ,
        i.o = function (e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }
        ,
        i.p = "//static.zkh360.com/file/resource/official/";

    loader = i;


})(
    {

        // 58: function(e, t) {
        //     e.exports = CryptoJS
        // },
        398: function (t, e, n) {
            var x;
            t.exports = (x = n(236),
                n(893),
                n(894),
                n(624),
                n(896),
                function () {
                    for (var t = x, e = t.lib.BlockCipher, n = t.algo, c = [], r = [], o = [], i = [], a = [], s = [], f = [], l = [], d = [], p = [], u = [], h = 0; h < 256; h++)
                        u[h] = h < 128 ? h << 1 : h << 1 ^ 283;
                    for (var y = 0, m = 0, h = 0; h < 256; h++) {
                        var v = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4
                            , g = (c[y] = v = v >>> 8 ^ 255 & v ^ 99,
                            u[r[v] = y])
                            , b = u[g]
                            , _ = u[b]
                            , w = 257 * u[v] ^ 16843008 * v;
                        o[y] = w << 24 | w >>> 8,
                            i[y] = w << 16 | w >>> 16,
                            a[y] = w << 8 | w >>> 24,
                            s[y] = w,
                            f[v] = (w = 16843009 * _ ^ 65537 * b ^ 257 * g ^ 16843008 * y) << 24 | w >>> 8,
                            l[v] = w << 16 | w >>> 16,
                            d[v] = w << 8 | w >>> 24,
                            p[v] = w,
                            y ? (y = g ^ u[u[u[_ ^ g]]],
                                m ^= u[u[m]]) : y = m = 1
                    }
                    var O = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
                        , n = n.AES = e.extend({
                        _doReset: function () {
                            if (!this._nRounds || this._keyPriorReset !== this._key) {
                                for (var t, e = this._keyPriorReset = this._key, n = e.words, r = e.sigBytes / 4, o = 4 * (1 + (this._nRounds = 6 + r)), i = this._keySchedule = [], a = 0; a < o; a++)
                                    a < r ? i[a] = n[a] : (t = i[a - 1],
                                        a % r ? 6 < r && a % r == 4 && (t = c[t >>> 24] << 24 | c[t >>> 16 & 255] << 16 | c[t >>> 8 & 255] << 8 | c[255 & t]) : (t = c[(t = t << 8 | t >>> 24) >>> 24] << 24 | c[t >>> 16 & 255] << 16 | c[t >>> 8 & 255] << 8 | c[255 & t],
                                            t ^= O[a / r | 0] << 24),
                                        i[a] = i[a - r] ^ t);
                                for (var s = this._invKeySchedule = [], u = 0; u < o; u++)
                                    a = o - u,
                                        t = u % 4 ? i[a] : i[a - 4],
                                        s[u] = u < 4 || a <= 4 ? t : f[c[t >>> 24]] ^ l[c[t >>> 16 & 255]] ^ d[c[t >>> 8 & 255]] ^ p[c[255 & t]]
                            }
                        },
                        encryptBlock: function (t, e) {
                            this._doCryptBlock(t, e, this._keySchedule, o, i, a, s, c)
                        },
                        decryptBlock: function (t, e) {
                            var n = t[e + 1];
                            t[e + 1] = t[e + 3],
                                t[e + 3] = n,
                                this._doCryptBlock(t, e, this._invKeySchedule, f, l, d, p, r),
                                n = t[e + 1],
                                t[e + 1] = t[e + 3],
                                t[e + 3] = n
                        },
                        _doCryptBlock: function (t, e, n, r, o, i, a, s) {
                            for (var u = this._nRounds, c = t[e] ^ n[0], f = t[e + 1] ^ n[1], l = t[e + 2] ^ n[2], d = t[e + 3] ^ n[3], p = 4, h = 1; h < u; h++)
                                 var y = r[c >>> 24] ^ o[f >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & d] ^ n[p++]
                                     , m = r[f >>> 24] ^ o[l >>> 16 & 255] ^ i[d >>> 8 & 255] ^ a[255 & c] ^ n[p++]
                                     , v = r[l >>> 24] ^ o[d >>> 16 & 255] ^ i[c >>> 8 & 255] ^ a[255 & f] ^ n[p++]
                                     , g = r[d >>> 24] ^ o[c >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & l] ^ n[p++]
                                     , c = y
                                     , f = m
                                     , l = v
                                     , d = g;
                            y = (s[c >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & d]) ^ n[p++],
                                m = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & c]) ^ n[p++],
                                v = (s[l >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & f]) ^ n[p++],
                                g = (s[d >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[p++],
                                t[e] = y,
                                t[e + 1] = m,
                                t[e + 2] = v,
                                t[e + 3] = g
                        },
                        keySize: 8
                    });
                    t.AES = e._createHelper(n)
                }(),
                x.AES)
        },
        236: function (t, e, n) {
            function r() {
            }

            var c, o, i, a, f, s, u, l, d, p, h;
            t.exports = (c = Math,
                o = Object.create || function (t) {
                    return r.prototype = t,
                        t = new r,
                        r.prototype = null,
                        t
                }
                ,
                i = (t = {}).lib = {},
                a = i.Base = {
                    extend: function (t) {
                        var e = o(this);
                        return t && e.mixIn(t),
                        e.hasOwnProperty("init") && this.init !== e.init || (e.init = function () {
                                e.$super.init.apply(this, arguments)
                            }
                        ),
                            (e.init.prototype = e).$super = this,
                            e
                    },
                    create: function () {
                        var t = this.extend();
                        return t.init.apply(t, arguments),
                            t
                    },
                    init: function () {
                    },
                    mixIn: function (t) {
                        for (var e in t)
                            t.hasOwnProperty(e) && (this[e] = t[e]);
                        t.hasOwnProperty("toString") && (this.toString = t.toString)
                    },
                    clone: function () {
                        return this.init.prototype.extend(this)
                    }
                },
                f = i.WordArray = a.extend({
                    init: function (t, e) {
                        t = this.words = t || [],
                            this.sigBytes = null != e ? e : 4 * t.length
                    },
                    toString: function (t) {
                        return (t || u).stringify(this)
                    },
                    concat: function (t) {
                        var e = this.words
                            , n = t.words
                            , r = this.sigBytes
                            , o = t.sigBytes;
                        if (this.clamp(),
                        r % 4)
                            for (var i = 0; i < o; i++) {
                                var a = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                e[r + i >>> 2] |= a << 24 - (r + i) % 4 * 8
                            }
                        else
                            for (i = 0; i < o; i += 4)
                                e[r + i >>> 2] = n[i >>> 2];
                        return this.sigBytes += o,
                            this
                    },
                    clamp: function () {
                        var t = this.words
                            , e = this.sigBytes;
                        t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8,
                            t.length = c.ceil(e / 4)
                    },
                    clone: function () {
                        var t = a.clone.call(this);
                        return t.words = this.words.slice(0),
                            t
                    },
                    random: function (t) {
                        for (var e = [], n = 0; n < t; n += 4) {
                            var r = function (t) {
                                var e = 987654321
                                    , n = 4294967295;
                                return function () {
                                    return ((((e = 36969 * (65535 & e) + (e >> 16) & n) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & n) & n) / 4294967296 + .5) * (.5 < c.random() ? 1 : -1)
                                }
                            }(4294967296 * (o || c.random()))
                                , o = 987654071 * r();
                            e.push(4294967296 * r() | 0)
                        }
                        return new f.init(e, t)
                    }
                }),
                s = t.enc = {},
                u = s.Hex = {
                    stringify: function (t) {
                        for (var e = t.words, n = t.sigBytes, r = [], o = 0; o < n; o++) {
                            var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            r.push((i >>> 4).toString(16)),
                                r.push((15 & i).toString(16))
                        }
                        return r.join("")
                    },
                    parse: function (t) {
                        for (var e = t.length, n = [], r = 0; r < e; r += 2)
                            n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                        return new f.init(n, e / 2)
                    }
                },
                l = s.Latin1 = {
                    stringify: function (t) {
                        for (var e = t.words, n = t.sigBytes, r = [], o = 0; o < n; o++) {
                            var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            r.push(String.fromCharCode(i))
                        }
                        return r.join("")
                    },
                    parse: function (t) {
                        for (var e = t.length, n = [], r = 0; r < e; r++)
                            n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new f.init(n, e)
                    }
                },
                d = s.Utf8 = {
                    stringify: function (t) {
                        try {
                            return decodeURIComponent(escape(l.stringify(t)))
                        } catch (t) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function (t) {
                        return l.parse(unescape(encodeURIComponent(t)))
                    }
                },
                p = i.BufferedBlockAlgorithm = a.extend({
                    reset: function () {
                        this._data = new f.init,
                            this._nDataBytes = 0
                    },
                    _append: function (t) {
                        "string" == typeof t && (t = d.parse(t)),
                            this._data.concat(t),
                            this._nDataBytes += t.sigBytes
                    },
                    _process: function (t) {
                        var e = this._data
                            , n = e.words
                            , r = e.sigBytes
                            , o = this.blockSize
                            , i = r / (4 * o)
                            , a = (t ? c.ceil(i) : c.max((0 | i) - this._minBufferSize, 0)) * o
                            , t = c.min(4 * a, r);
                        if (a) {
                            for (var s = 0; s < a; s += o)
                                this._doProcessBlock(n, s);
                            var u = n.splice(0, a);
                            e.sigBytes -= t
                        }
                        return new f.init(u, t)
                    },
                    clone: function () {
                        var t = a.clone.call(this);
                        return t._data = this._data.clone(),
                            t
                    },
                    _minBufferSize: 0
                }),
                i.Hasher = p.extend({
                    cfg: a.extend(),
                    init: function (t) {
                        this.cfg = this.cfg.extend(t),
                            this.reset()
                    },
                    reset: function () {
                        p.reset.call(this),
                            this._doReset()
                    },
                    update: function (t) {
                        return this._append(t),
                            this._process(),
                            this
                    },
                    finalize: function (t) {
                        return t && this._append(t),
                            this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function (n) {
                        return function (t, e) {
                            return new n.init(e).finalize(t)
                        }
                    },
                    _createHmacHelper: function (n) {
                        return function (t, e) {
                            return new h.HMAC.init(n, e).finalize(t)
                        }
                    }
                }),
                h = t.algo = {},
                t)
        },
        893: function (t, e, n) {
            var h;
            t.exports = (t = n(236),
                h = t.lib.WordArray,
                t.enc.Base64 = {
                    stringify: function (t) {
                        var e = t.words
                            , n = t.sigBytes
                            , r = this._map;
                        t.clamp();
                        for (var o = [], i = 0; i < n; i += 3)
                            for (var a = (e[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, s = 0; s < 4 && i + .75 * s < n; s++)
                                o.push(r.charAt(a >>> 6 * (3 - s) & 63));
                        var u = r.charAt(64);
                        if (u)
                            for (; o.length % 4;)
                                o.push(u);
                        return o.join("")
                    },
                    parse: function (t) {
                        var e = t.length
                            , n = this._map;
                        if (!(r = this._reverseMap))
                            for (var r = this._reverseMap = [], o = 0; o < n.length; o++)
                                r[n.charCodeAt(o)] = o;
                        for (var i, a, s = n.charAt(64), u = (s && -1 !== (s = t.indexOf(s)) && (e = s),
                            t), c = e, f = r, l = [], d = 0, p = 0; p < c; p++)
                            p % 4 && (i = f[u.charCodeAt(p - 1)] << p % 4 * 2,
                                a = f[u.charCodeAt(p)] >>> 6 - p % 4 * 2,
                                l[d >>> 2] |= (i | a) << 24 - d % 4 * 8,
                                d++);
                        return h.create(l, d)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                },
                t.enc.Base64)
        }
        ,
        894: function (t, e, n) {
            var i;
            t.exports = (i = n(236),
                function (u) {
                    for (var t = i, e = t.lib, n = e.WordArray, r = e.Hasher, e = t.algo, k = [], o = 0; o < 64; o++)
                        k[o] = 4294967296 * u.abs(u.sin(o + 1)) | 0;
                    e = e.MD5 = r.extend({
                        _doReset: function () {
                            this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878])
                        },
                        _doProcessBlock: function (t, e) {
                            for (var n = 0; n < 16; n++) {
                                var r = e + n
                                    , o = t[r];
                                t[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
                            }
                            var i = this._hash.words
                                , a = t[e + 0]
                                , s = t[e + 1]
                                , u = t[e + 2]
                                , c = t[e + 3]
                                , f = t[e + 4]
                                , l = t[e + 5]
                                , d = t[e + 6]
                                , p = t[e + 7]
                                , h = t[e + 8]
                                , y = t[e + 9]
                                , m = t[e + 10]
                                , v = t[e + 11]
                                , g = t[e + 12]
                                , b = t[e + 13]
                                , _ = t[e + 14]
                                , w = t[e + 15]
                                , O = j(i[0], E = i[1], S = i[2], x = i[3], a, 7, k[0])
                                , x = j(x, O, E, S, s, 12, k[1])
                                , S = j(S, x, O, E, u, 17, k[2])
                                , E = j(E, S, x, O, c, 22, k[3]);
                            O = j(O, E, S, x, f, 7, k[4]),
                                x = j(x, O, E, S, l, 12, k[5]),
                                S = j(S, x, O, E, d, 17, k[6]),
                                E = j(E, S, x, O, p, 22, k[7]),
                                O = j(O, E, S, x, h, 7, k[8]),
                                x = j(x, O, E, S, y, 12, k[9]),
                                S = j(S, x, O, E, m, 17, k[10]),
                                E = j(E, S, x, O, v, 22, k[11]),
                                O = j(O, E, S, x, g, 7, k[12]),
                                x = j(x, O, E, S, b, 12, k[13]),
                                S = j(S, x, O, E, _, 17, k[14]),
                                O = P(O, E = j(E, S, x, O, w, 22, k[15]), S, x, s, 5, k[16]),
                                x = P(x, O, E, S, d, 9, k[17]),
                                S = P(S, x, O, E, v, 14, k[18]),
                                E = P(E, S, x, O, a, 20, k[19]),
                                O = P(O, E, S, x, l, 5, k[20]),
                                x = P(x, O, E, S, m, 9, k[21]),
                                S = P(S, x, O, E, w, 14, k[22]),
                                E = P(E, S, x, O, f, 20, k[23]),
                                O = P(O, E, S, x, y, 5, k[24]),
                                x = P(x, O, E, S, _, 9, k[25]),
                                S = P(S, x, O, E, c, 14, k[26]),
                                E = P(E, S, x, O, h, 20, k[27]),
                                O = P(O, E, S, x, b, 5, k[28]),
                                x = P(x, O, E, S, u, 9, k[29]),
                                S = P(S, x, O, E, p, 14, k[30]),
                                O = M(O, E = P(E, S, x, O, g, 20, k[31]), S, x, l, 4, k[32]),
                                x = M(x, O, E, S, h, 11, k[33]),
                                S = M(S, x, O, E, v, 16, k[34]),
                                E = M(E, S, x, O, _, 23, k[35]),
                                O = M(O, E, S, x, s, 4, k[36]),
                                x = M(x, O, E, S, f, 11, k[37]),
                                S = M(S, x, O, E, p, 16, k[38]),
                                E = M(E, S, x, O, m, 23, k[39]),
                                O = M(O, E, S, x, b, 4, k[40]),
                                x = M(x, O, E, S, a, 11, k[41]),
                                S = M(S, x, O, E, c, 16, k[42]),
                                E = M(E, S, x, O, d, 23, k[43]),
                                O = M(O, E, S, x, y, 4, k[44]),
                                x = M(x, O, E, S, g, 11, k[45]),
                                S = M(S, x, O, E, w, 16, k[46]),
                                O = A(O, E = M(E, S, x, O, u, 23, k[47]), S, x, a, 6, k[48]),
                                x = A(x, O, E, S, p, 10, k[49]),
                                S = A(S, x, O, E, _, 15, k[50]),
                                E = A(E, S, x, O, l, 21, k[51]),
                                O = A(O, E, S, x, g, 6, k[52]),
                                x = A(x, O, E, S, c, 10, k[53]),
                                S = A(S, x, O, E, m, 15, k[54]),
                                E = A(E, S, x, O, s, 21, k[55]),
                                O = A(O, E, S, x, h, 6, k[56]),
                                x = A(x, O, E, S, w, 10, k[57]),
                                S = A(S, x, O, E, d, 15, k[58]),
                                E = A(E, S, x, O, b, 21, k[59]),
                                O = A(O, E, S, x, f, 6, k[60]),
                                x = A(x, O, E, S, v, 10, k[61]),
                                S = A(S, x, O, E, u, 15, k[62]),
                                E = A(E, S, x, O, y, 21, k[63]),
                                i[0] = i[0] + O | 0,
                                i[1] = i[1] + E | 0,
                                i[2] = i[2] + S | 0,
                                i[3] = i[3] + x | 0
                        },
                        _doFinalize: function () {
                            var t = this._data
                                , e = t.words
                                , n = 8 * this._nDataBytes
                                , r = 8 * t.sigBytes
                                , o = (e[r >>> 5] |= 128 << 24 - r % 32,
                                u.floor(n / 4294967296));
                            e[15 + (64 + r >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                                e[14 + (64 + r >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                                t.sigBytes = 4 * (e.length + 1),
                                this._process();
                            for (var o = this._hash, i = o.words, a = 0; a < 4; a++) {
                                var s = i[a];
                                i[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                            }
                            return o
                        },
                        clone: function () {
                            var t = r.clone.call(this);
                            return t._hash = this._hash.clone(),
                                t
                        }
                    });

                    function j(t, e, n, r, o, i, a) {
                        t = t + (e & n | ~e & r) + o + a;
                        return (t << i | t >>> 32 - i) + e
                    }

                    function P(t, e, n, r, o, i, a) {
                        t = t + (e & r | n & ~r) + o + a;
                        return (t << i | t >>> 32 - i) + e
                    }

                    function M(t, e, n, r, o, i, a) {
                        t = t + (e ^ n ^ r) + o + a;
                        return (t << i | t >>> 32 - i) + e
                    }

                    function A(t, e, n, r, o, i, a) {
                        t = t + (n ^ (e | ~r)) + o + a;
                        return (t << i | t >>> 32 - i) + e
                    }

                    t.MD5 = r._createHelper(e),
                        t.HmacMD5 = r._createHmacHelper(e)
                }(Math),
                i.MD5)
        }
        ,
        895: function (t, e, n) {
            var s;
            t.exports = (t = n(236),
                n = t.lib.Base,
                s = t.enc.Utf8,
                void (t.algo.HMAC = n.extend({
                    init: function (t, e) {
                        t = this._hasher = new t.init,
                        "string" == typeof e && (e = s.parse(e));
                        var n = t.blockSize
                            , r = 4 * n;
                        (e = e.sigBytes > r ? t.finalize(e) : e).clamp();
                        for (var t = this._oKey = e.clone(), e = this._iKey = e.clone(), o = t.words, i = e.words, a = 0; a < n; a++)
                            o[a] ^= 1549556828,
                                i[a] ^= 909522486;
                        t.sigBytes = e.sigBytes = r,
                            this.reset()
                    },
                    reset: function () {
                        var t = this._hasher;
                        t.reset(),
                            t.update(this._iKey)
                    },
                    update: function (t) {
                        return this._hasher.update(t),
                            this
                    },
                    finalize: function (t) {
                        var e = this._hasher
                            , t = e.finalize(t);
                        return e.reset(),
                            e.finalize(this._oKey.clone().concat(t))
                    }
                })))
        }
        ,
        896: function (t, e, n) {
            function i(t, e, n) {
                var r, o = this._iv;
                o ? (r = o,
                    this._iv = void 0) : r = this._prevBlock;
                for (var i = 0; i < n; i++)
                    t[e + i] ^= r[i]
            }

            function o(t) {
                return "string" == typeof t ? y : h
            }

            var r, a, s, u, c, f, l, d, p, h, y;
            t.exports = (t = n(236),
                n(624),
                void (t.lib.Cipher || (n = (t = t).lib,
                    r = n.Base,
                    a = n.WordArray,
                    s = n.BufferedBlockAlgorithm,
                    (u = t.enc).Utf8,
                    c = u.Base64,
                    f = t.algo.EvpKDF,
                    l = n.Cipher = s.extend({
                        cfg: r.extend(),
                        createEncryptor: function (t, e) {
                            return this.create(this._ENC_XFORM_MODE, t, e)
                        },
                        createDecryptor: function (t, e) {
                            return this.create(this._DEC_XFORM_MODE, t, e)
                        },
                        init: function (t, e, n) {
                            this.cfg = this.cfg.extend(n),
                                this._xformMode = t,
                                this._key = e,
                                this.reset()
                        },
                        reset: function () {
                            s.reset.call(this),
                                this._doReset()
                        },
                        process: function (t) {
                            return this._append(t),
                                this._process()
                        },
                        finalize: function (t) {
                            return t && this._append(t),
                                this._doFinalize()
                        },
                        keySize: 4,
                        ivSize: 4,
                        _ENC_XFORM_MODE: 1,
                        _DEC_XFORM_MODE: 2,
                        _createHelper: function (r) {
                            return {
                                encrypt: function (t, e, n) {
                                    return o(e).encrypt(r, t, e, n)
                                },
                                decrypt: function (t, e, n) {
                                    return o(e).decrypt(r, t, e, n)
                                }
                            }
                        }
                    }),
                    n.StreamCipher = l.extend({
                        _doFinalize: function () {
                            return this._process(!0)
                        },
                        blockSize: 1
                    }),
                    u = t.mode = {},
                    d = n.BlockCipherMode = r.extend({
                        createEncryptor: function (t, e) {
                            return this.Encryptor.create(t, e)
                        },
                        createDecryptor: function (t, e) {
                            return this.Decryptor.create(t, e)
                        },
                        init: function (t, e) {
                            this._cipher = t,
                                this._iv = e
                        }
                    }),
                    d = u.CBC = ((u = d.extend()).Encryptor = u.extend({
                        processBlock: function (t, e) {
                            var n = this._cipher
                                , r = n.blockSize;
                            i.call(this, t, e, r),
                                n.encryptBlock(t, e),
                                this._prevBlock = t.slice(e, e + r)
                        }
                    }),
                        u.Decryptor = u.extend({
                            processBlock: function (t, e) {
                                var n = this._cipher
                                    , r = n.blockSize
                                    , o = t.slice(e, e + r);
                                n.decryptBlock(t, e),
                                    i.call(this, t, e, r),
                                    this._prevBlock = o
                            }
                        }),
                        u),
                    u = (t.pad = {}).Pkcs7 = {
                        pad: function (t, e) {
                            for (var e = 4 * e, n = e - t.sigBytes % e, r = n << 24 | n << 16 | n << 8 | n, o = [], i = 0; i < n; i += 4)
                                o.push(r);
                            e = a.create(o, n);
                            t.concat(e)
                        },
                        unpad: function (t) {
                            var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                            t.sigBytes -= e
                        }
                    },
                    n.BlockCipher = l.extend({
                        cfg: l.cfg.extend({
                            mode: d,
                            padding: u
                        }),
                        reset: function () {
                            l.reset.call(this);
                            var t, e = this.cfg, n = e.iv, e = e.mode;
                            this._xformMode == this._ENC_XFORM_MODE ? t = e.createEncryptor : (t = e.createDecryptor,
                                this._minBufferSize = 1),
                                this._mode && this._mode.__creator == t ? this._mode.init(this, n && n.words) : (this._mode = t.call(e, this, n && n.words),
                                    this._mode.__creator = t)
                        },
                        _doProcessBlock: function (t, e) {
                            this._mode.processBlock(t, e)
                        },
                        _doFinalize: function () {
                            var t, e = this.cfg.padding;
                            return this._xformMode == this._ENC_XFORM_MODE ? (e.pad(this._data, this.blockSize),
                                t = this._process(!0)) : (t = this._process(!0),
                                e.unpad(t)),
                                t
                        },
                        blockSize: 4
                    }),
                    p = n.CipherParams = r.extend({
                        init: function (t) {
                            this.mixIn(t)
                        },
                        toString: function (t) {
                            return (t || this.formatter).stringify(this)
                        }
                    }),
                    d = (t.format = {}).OpenSSL = {
                        stringify: function (t) {
                            var e = t.ciphertext
                                , t = t.salt
                                , t = t ? a.create([1398893684, 1701076831]).concat(t).concat(e) : e;
                            return t.toString(c)
                        },
                        parse: function (t) {
                            var e, t = c.parse(t), n = t.words;
                            return 1398893684 == n[0] && 1701076831 == n[1] && (e = a.create(n.slice(2, 4)),
                                n.splice(0, 4),
                                t.sigBytes -= 16),
                                p.create({
                                    ciphertext: t,
                                    salt: e
                                })
                        }
                    },
                    h = n.SerializableCipher = r.extend({
                        cfg: r.extend({
                            format: d
                        }),
                        encrypt: function (t, e, n, r) {
                            r = this.cfg.extend(r);
                            var o = t.createEncryptor(n, r)
                                , e = o.finalize(e)
                                , o = o.cfg;
                            return p.create({
                                ciphertext: e,
                                key: n,
                                iv: o.iv,
                                algorithm: t,
                                mode: o.mode,
                                padding: o.padding,
                                blockSize: t.blockSize,
                                formatter: r.format
                            })
                        },
                        decrypt: function (t, e, n, r) {
                            return r = this.cfg.extend(r),
                                e = this._parse(e, r.format),
                                t.createDecryptor(n, r).finalize(e.ciphertext)
                        },
                        _parse: function (t, e) {
                            return "string" == typeof t ? e.parse(t, this) : t
                        }
                    }),
                    u = (t.kdf = {}).OpenSSL = {
                        execute: function (t, e, n, r) {
                            r = r || a.random(8);
                            t = f.create({
                                keySize: e + n
                            }).compute(t, r),
                                n = a.create(t.words.slice(e), 4 * n);
                            return t.sigBytes = 4 * e,
                                p.create({
                                    key: t,
                                    iv: n,
                                    salt: r
                                })
                        }
                    },
                    y = n.PasswordBasedCipher = h.extend({
                        cfg: h.cfg.extend({
                            kdf: u
                        }),
                        encrypt: function (t, e, n, r) {
                            n = (r = this.cfg.extend(r)).kdf.execute(n, t.keySize, t.ivSize),
                                r.iv = n.iv,
                                t = h.encrypt.call(this, t, e, n.key, r);
                            return t.mixIn(n),
                                t
                        },
                        decrypt: function (t, e, n, r) {
                            r = this.cfg.extend(r),
                                e = this._parse(e, r.format);
                            n = r.kdf.execute(n, t.keySize, t.ivSize, e.salt);
                            return r.iv = n.iv,
                                h.decrypt.call(this, t, e, n.key, r)
                        }
                    }))))
        },
        574: function (t, e, n) {
            var r, o, i, f;
            t.exports = (t = n(236),
                r = (n = t).lib,
                o = r.WordArray,
                i = r.Hasher,
                r = n.algo,
                f = [],
                r = r.SHA1 = i.extend({
                    _doReset: function () {
                        this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function (t, e) {
                        for (var n = this._hash.words, r = n[0], o = n[1], i = n[2], a = n[3], s = n[4], u = 0; u < 80; u++) {
                            f[u] = u < 16 ? 0 | t[e + u] : (c = f[u - 3] ^ f[u - 8] ^ f[u - 14] ^ f[u - 16]) << 1 | c >>> 31;
                            var c = (r << 5 | r >>> 27) + s + f[u];
                            c += u < 20 ? 1518500249 + (o & i | ~o & a) : u < 40 ? 1859775393 + (o ^ i ^ a) : u < 60 ? (o & i | o & a | i & a) - 1894007588 : (o ^ i ^ a) - 899497514,
                                s = a,
                                a = i,
                                i = o << 30 | o >>> 2,
                                o = r,
                                r = c
                        }
                        n[0] = n[0] + r | 0,
                            n[1] = n[1] + o | 0,
                            n[2] = n[2] + i | 0,
                            n[3] = n[3] + a | 0,
                            n[4] = n[4] + s | 0
                    },
                    _doFinalize: function () {
                        var t = this._data
                            , e = t.words
                            , n = 8 * this._nDataBytes
                            , r = 8 * t.sigBytes;
                        return e[r >>> 5] |= 128 << 24 - r % 32,
                            e[14 + (64 + r >>> 9 << 4)] = Math.floor(n / 4294967296),
                            e[15 + (64 + r >>> 9 << 4)] = n,
                            t.sigBytes = 4 * e.length,
                            this._process(),
                            this._hash
                    },
                    clone: function () {
                        var t = i.clone.call(this);
                        return t._hash = this._hash.clone(),
                            t
                    }
                }),
                n.SHA1 = i._createHelper(r),
                n.HmacSHA1 = i._createHmacHelper(r),
                t.SHA1)
        },
        624: function (t, e, n) {
            var r, o, f, i, a;
            t.exports = (t = n(236),
                n(574),
                n(895),
                r = (n = t).lib,
                o = r.Base,
                f = r.WordArray,
                r = n.algo,
                i = r.MD5,
                a = r.EvpKDF = o.extend({
                    cfg: o.extend({
                        keySize: 4,
                        hasher: i,
                        iterations: 1
                    }),
                    init: function (t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function (t, e) {
                        for (var n = this.cfg, r = n.hasher.create(), o = f.create(), i = o.words, a = n.keySize, s = n.iterations; i.length < a;) {
                            u && r.update(u);
                            var u = r.update(t).finalize(e);
                            r.reset();
                            for (var c = 1; c < s; c++)
                                u = r.finalize(u),
                                    r.reset();
                            o.concat(u)
                        }
                        return o.sigBytes = 4 * a,
                            o
                    }
                }),
                n.EvpKDF = function (t, e, n) {
                    return a.create(n).compute(t, e)
                }
                ,
                t.EvpKDF)
        }

    }
);


o = '-----BEGIN PUBLIC KEY-----' +
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbY2WDZ40at3cyZ/OlxhYPPdwE4w38gVJIBJwv/lLGFIs2pUfcWxeeFol5FJj5H4yefW8EDE/rXj3A4MD9pn/Cx/1E3NCiCxRgvAeOECJ6YNZFG8ELtYUD2dZS0iDBnRbzZqaqzf/BECVX/zfcabTzC9qvoQDJPpyQviHh0+QBNQIDAQAB' +
    '-----END PUBLIC KEY-----'
o = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBCW08wCzCOzs5qU7RxL0VYV7TBZr3rrYYqFrI1Nr1Na+FP0B52ffsIqioES8tZEqDXQ59Ksd9rFHutXsRWB6urfBb+MJfmsXynp/2IVhHq+DK68vptgzkGadT8w51uyllExRBj3t2cmkqxrzdrIyCMIXNdnGRCNwJ/taiwftNOQIDAQAB"
c = "1700812808417"
navigator = {}
// l = {}
// l.init = function (t) {
//     if (t instanceof ArrayBuffer && (t = new Uint8Array(t)),
//     (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)),
//     t instanceof Uint8Array) {
//         for (var e = t.byteLength, r = [], i = 0; i < e; i++)
//             r[i >>> 2] |= t[i] << 24 - i % 4 * 8;
//         n.call(this, r, e)
//     } else
//         n.apply(this, arguments)
// }
// Latin1 = {
//     stringify: function (t) {
//         for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
//             var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
//             r.push(String.fromCharCode(o))
//         }
//         return r.join("")
//     },
//     parse: function (t) {
//         for (var e = t.length, n = [], r = 0; r < e; r++)
//             n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
//         return {"sigBytes": e, "words": n}
//     }
// }

get_E = function () {
    t = (new Date).getTime().toString()
    N = (t + t + t).substring(0, 32)
    return [N, crypto_js.enc.Latin1.parse(N)]
}

get_cipher_and_headers = function (traceId, data) {
    d = get_E()
    N = d[0]
    E = d[1]

    // 创建 RSA 实例
    const key = new NodeRSA();

    // 设置公钥
    key.importKey(o, 'pkcs8-public');

    // 加密数据
    const encryptedData = key.encrypt(N, 'base64');

    // console.log('加密后的数据：', encryptedData);


    // 准备HTTP请求的headers
    const headers = {
        'x-akc': encryptedData,
        'x-rgn': c // 这里填写对应的区域值
    };


    // 使用ECB模式和PKCS7填充加密请求数据
    a = loader(398)

    let cipher = a.encrypt(JSON.stringify(data), E, {
        mode: crypto_js.mode.ECB,
        padding: crypto_js.pad.Pkcs7
    }).toString()
    headers["cipher"] = cipher
    return headers
}

getTraceId = function (e = 8, t = !0) {
    var n = ""
        , n = Math.ceil(1e14 * Math.random()).toString().substr(0, e || 4);
    return t && (n += Date.now()),
        n
}

// traceId = getTraceId()
// // // console.log(traceId)
// var d = get_E();
// console.log(d[0])
// console.log(d[1])
// data = [
//     "FU8443",
//     "FU8448",
//     "AE2959677",
//     "AE2970409"
// ]
// console.log(get_cipher_and_headers(traceId, data));

