// 补环境
window = global;
location = {
    "ancestorOrigins": {},
    "href": "https://y.qq.com/n/ryqq/search?w=%E9%82%93%E7%B4%AB%E6%A3%8B&t=song&remoteplace=txt.yqq.center",
    "origin": "https://y.qq.com",
    "protocol": "https:",
    "host": "y.qq.com",
    "hostname": "y.qq.com",
    "port": "",
    "pathname": "/n/ryqq/search",
    "search": "?w=%E9%82%93%E7%B4%AB%E6%A3%8B&t=song&remoteplace=txt.yqq.center",
    "hash": ""
}
// 主要是补这里的环境
navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
}

var loader;
require('./module')
!function (e) {
    function t(t) {
        for (var a, n, f = t[0], d = t[1], i = t[2], l = 0, s = []; l < f.length; l++)
            n = f[l],
            Object.prototype.hasOwnProperty.call(o, n) && o[n] && s.push(o[n][0]),
                o[n] = 0;
        for (a in d)
            Object.prototype.hasOwnProperty.call(d, a) && (e[a] = d[a]);
        for (u && u(t); s.length;)
            s.shift()();
        return c.push.apply(c, i || []),
            r()
    }

    function r() {
        for (var e, t = 0; t < c.length; t++) {
            for (var r = c[t], a = !0, n = 1; n < r.length; n++) {
                var d = r[n];
                0 !== o[d] && (a = !1)
            }
            a && (c.splice(t--, 1),
                e = f(f.s = r[0]))
        }
        return e
    }

    var a = {}
        , n = {
        20: 0
    }
        , o = {
        20: 0
    }
        , c = [];

    function f(t) {
        if (a[t])
            return a[t].exports;
        var r = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, f),
            r.l = !0,
            r.exports
    }

    f.e = function (e) {
        var t = [];
        n[e] ? t.push(n[e]) : 0 !== n[e] && {
            1: 1,
            3: 1,
            4: 1,
            5: 1,
            6: 1,
            7: 1,
            8: 1,
            9: 1,
            10: 1,
            11: 1,
            12: 1,
            13: 1,
            14: 1,
            15: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            21: 1,
            22: 1,
            23: 1,
            24: 1,
            25: 1
        }[e] && t.push(n[e] = new Promise((function (t, r) {
                for (var a = "css/" + ({
                    1: "common",
                    3: "album",
                    4: "albumDetail",
                    5: "album_mall",
                    6: "category",
                    7: "cmtpage",
                    8: "index",
                    9: "msg_center",
                    10: "mv",
                    11: "mvList",
                    12: "mv_toplist",
                    13: "notfound",
                    14: "player",
                    15: "player_radio",
                    16: "playlist",
                    17: "playlist_edit",
                    18: "profile",
                    19: "radio",
                    21: "search",
                    22: "singer",
                    23: "singer_list",
                    24: "songDetail",
                    25: "toplist"
                }[e] || e) + "." + {
                    1: "2e3d715e72682303d35b",
                    3: "5cf0d69eaf29bcab23d2",
                    4: "798353db5b0eb05d5358",
                    5: "df4c243f917604263e58",
                    6: "20d532d798099a44bc88",
                    7: "e3bedf2b5810f8db0684",
                    8: "ea0adb959fef9011fc25",
                    9: "020422608fe8bfb1719a",
                    10: "8bdb1df6c5436b790baa",
                    11: "47ce9300786df1b70584",
                    12: "4aee33230ba2d6b81dce",
                    13: "e6f63b0cf57dd029fbd6",
                    14: "1d2dbefbea113438324a",
                    15: "d893492de07ce97d8048",
                    16: "9484fde660fe93d9f9f0",
                    17: "67fb85e7f96455763c83",
                    18: "5e8c651e74b13244f7cf",
                    19: "3befd83c10b19893ec66",
                    21: "b2d11f89ea6a512a2302",
                    22: "c7a38353c5f4ebb47491",
                    23: "df0961952a2d3f022894",
                    24: "4c080567e394fd45608b",
                    25: "8edb142553f97482e00f"
                }[e] + ".chunk.css?max_age=2592000", o = f.p + a, c = document.getElementsByTagName("link"), d = 0; d < c.length; d++) {
                    var i = (u = c[d]).getAttribute("data-href") || u.getAttribute("href");
                    if ("stylesheet" === u.rel && (i === a || i === o))
                        return t()
                }
                var l = document.getElementsByTagName("style");
                for (d = 0; d < l.length; d++) {
                    var u;
                    if ((i = (u = l[d]).getAttribute("data-href")) === a || i === o)
                        return t()
                }
                var s = document.createElement("link");
                s.rel = "stylesheet",
                    s.type = "text/css",
                    s.onload = t,
                    s.onerror = function (t) {
                        var a = t && t.target && t.target.src || o
                            , c = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                        c.code = "CSS_CHUNK_LOAD_FAILED",
                            c.request = a,
                            delete n[e],
                            s.parentNode.removeChild(s),
                            r(c)
                    }
                    ,
                    s.href = o,
                0 !== s.href.indexOf(window.location.origin + "/") && (s.crossOrigin = "anonymous"),
                    document.getElementsByTagName("head")[0].appendChild(s)
            }
        )).then((function () {
                n[e] = 0
            }
        )));
        var r = o[e];
        if (0 !== r)
            if (r)
                t.push(r[2]);
            else {
                var a = new Promise((function (t, a) {
                        r = o[e] = [t, a]
                    }
                ));
                t.push(r[2] = a);
                var c, d = document.createElement("script");
                d.charset = "utf-8",
                    d.timeout = 120,
                f.nc && d.setAttribute("nonce", f.nc),
                    d.src = function (e) {
                        return f.p + "js/" + ({
                            1: "common",
                            3: "album",
                            4: "albumDetail",
                            5: "album_mall",
                            6: "category",
                            7: "cmtpage",
                            8: "index",
                            9: "msg_center",
                            10: "mv",
                            11: "mvList",
                            12: "mv_toplist",
                            13: "notfound",
                            14: "player",
                            15: "player_radio",
                            16: "playlist",
                            17: "playlist_edit",
                            18: "profile",
                            19: "radio",
                            21: "search",
                            22: "singer",
                            23: "singer_list",
                            24: "songDetail",
                            25: "toplist"
                        }[e] || e) + ".chunk." + {
                            1: "618ef0f0ad517597cc7e",
                            3: "57adeab72a3ec5a6940c",
                            4: "fb9a0df49aac1081fd8b",
                            5: "ce88bd122dac655490ca",
                            6: "61e9cda365918e62c56a",
                            7: "d1f5d3bb80ee8f19b2e1",
                            8: "f6087ccdc75b061ed139",
                            9: "2a7c708a45a64a5e16a6",
                            10: "ee53681d6f5f8e5d8085",
                            11: "c925c75c1a05b9bd0958",
                            12: "05c8cac12541d9e063bb",
                            13: "e8b9a6dad95b623cab82",
                            14: "8d908157e24f028f0e28",
                            15: "4bc220500f83ecf5d4c0",
                            16: "4e90681d2ce0ba4a2884",
                            17: "72dfb28846b85bcce963",
                            18: "75c0a2317c5f30583651",
                            19: "89e9600c87d40494d2a0",
                            21: "dac8e2e218f6e40164ee",
                            22: "f727873408f9d38f3265",
                            23: "1fa9992cf45f54603a69",
                            24: "4e38573b87120e0a3b0a",
                            25: "7730902602801ab48700"
                        }[e] + ".js?max_age=2592000"
                    }(e),
                0 !== d.src.indexOf(window.location.origin + "/") && (d.crossOrigin = "anonymous");
                var i = new Error;
                c = function (t) {
                    d.onerror = d.onload = null,
                        clearTimeout(l);
                    var r = o[e];
                    if (0 !== r) {
                        if (r) {
                            var a = t && ("load" === t.type ? "missing" : t.type)
                                , n = t && t.target && t.target.src;
                            i.message = "Loading chunk " + e + " failed.\n(" + a + ": " + n + ")",
                                i.name = "ChunkLoadError",
                                i.type = a,
                                i.request = n,
                                r[1](i)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var l = setTimeout((function () {
                        c({
                            type: "timeout",
                            target: d
                        })
                    }
                ), 12e4);
                d.onerror = d.onload = c,
                    document.head.appendChild(d)
            }
        return Promise.all(t)
    }
        ,
        f.m = e,
        f.c = a,
        f.d = function (e, t, r) {
            f.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
        ,
        f.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        f.t = function (e, t) {
            if (1 & t && (e = f(e)),
            8 & t)
                return e;
            if (4 & t && "object" === typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (f.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & t && "string" != typeof e)
                for (var a in e)
                    f.d(r, a, function (t) {
                        return e[t]
                    }
                        .bind(null, a));
            return r
        }
        ,
        f.n = function (e) {
            var t = e && e.__esModule ? function () {
                        return e.default
                    }
                    : function () {
                        return e
                    }
            ;
            return f.d(t, "a", t),
                t
        }
        ,
        f.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        f.p = "/ryqq/",
        f.oe = function (e) {
            throw e
        }
    ;
    var d = window.webpackJsonp = window.webpackJsonp || []
        , i = d.push.bind(d);
    d.push = t,
        d = d.slice();
    for (var l = 0; l < d.length; l++)
        t(d[l]);
    var u = i;
    r()
    loader = f;
}([]);

function get_sign(data) {
    let o = loader(350).default;
    return o(data)
}
