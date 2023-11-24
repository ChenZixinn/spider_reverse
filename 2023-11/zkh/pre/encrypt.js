window = this;
document = {};

var aaa;
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
    aaa = i;


})({
    3: function (t, e, n) {
        "use strict";
        n.d(e, "w", function () {
            return l
        }),
            n.d(e, "A", function () {
                return f
            }),
            n.d(e, "e", function () {
                return h
            }),
            n.d(e, "y", function () {
                return d
            }),
            n.d(e, "c", function () {
                return p
            }),
            n.d(e, "b", function () {
                return m
            }),
            n.d(e, "l", function () {
                return v
            }),
            n.d(e, "m", function () {
                return b
            }),
            n.d(e, "o", function () {
                return w
            }),
            n.d(e, "n", function () {
                return M
            }),
            n.d(e, "i", function () {
                return E
            }),
            n.d(e, "v", function () {
                return S
            }),
            n.d(e, "k", function () {
                return k
            }),
            n.d(e, "z", function () {
                return x
            }),
            n.d(e, "j", function () {
                return N
            }),
            n.d(e, "f", function () {
                return O
            }),
            n.d(e, "x", function () {
                return T
            }),
            n.d(e, "g", function () {
                return C
            }),
            n.d(e, "h", function () {
                return j
            }),
            n.d(e, "a", function () {
                return I
            }),
            n.d(e, "r", function () {
                return P
            }),
            n.d(e, "p", function () {
                return A
            }),
            n.d(e, "u", function () {
                return R
            }),
            n.d(e, "C", function () {
                return L
            }),
            n.d(e, "d", function () {
                return D
            }),
            n.d(e, "B", function () {
                return B
            }),
            n.d(e, "s", function () {
                return z
            }),
            n.d(e, "q", function () {
                return U
            }),
            n.d(e, "t", function () {
                return F
            });


        function c(e, t) {
            var n, r = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e),
            t && (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
                r.push.apply(r, n)),
                r
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(n), !0).forEach(function (t) {
                    r()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        var l = function (t, e) {
            var n = "",
                n = Math.ceil(1e14 * Math.random()).toString().substr(0, t || 4);
            return e && (n += Date.now()),
                n
        }, f = function (t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .3,
                r = window.location.href,
                i = n || .3,
                n = new Date;
            n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3),
                document.cookie = "".concat(t, "=").concat(encodeURIComponent(e), ";expires=").concat(n.toGMTString(), ";path=/;").concat(-1 < r.indexOf("localhost") || -1 < r.indexOf("127.0.0.1") ? "" : "domain=.zkh360.com")
        }, h = function (t) {
            t = document.cookie.match(new RegExp("(^| )".concat(t, "=([^;]*)(;|$)")));
            return null != t ? decodeURIComponent(t[2]) : null
        }, d = function (t) {
            f(t, "", -1)
        }, p = function (t) {
            var e = t.id;
            return (1 == t.type ? "recommend_floor_" : "category_floor_").concat(e)
        }, m = function (t) {
            var e = t.id;
            return (1 == t.type ? "floor_1_" : "floor_2_").concat(e)
        };

        function v(t) {
            for (var e = {
                left: 0,
                top: 0
            }; t && t !== document.body;)
                e.left += t.offsetLeft,
                    e.top += t.offsetTop,
                    t = t.offsetParent;
            return e
        }

        function y() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e = t.groupId || "",
                n = document.createElement("script");
            n.type = "text/javascript",
                n.innerHTML = '\n  var udData = {\n    "code": "5b141kjb",\n    "link": "https://zkh360.udesk.cn/im_client/?web_plugin_id=137301&group_id='.concat(e, '",\n    "noBubble": true,\n    "targetSelector": \'.my-service-btn\',\n    "selector": \'.find-service-btn\'\n  }\n  if (').concat(t.uid, ") {\n    udData.customer = {\n      nonce: '").concat(t.nonce, "',\n      signature: '").concat(t.signature, "',\n      timestamp: '").concat(t.timestamp, "',\n      web_token: '").concat(t.webToken, "',\n      c_name: '").concat(t.uname, "',\n      c_tags: '").concat(t.serviceId, "',\n      c_phone: '").concat(t.uid, "'\n    };\n  }\n  if ('").concat(t.udUrl, "' != 'undefined') {\n    udData.product = {\n      title: '").concat(t.udTitle, "',\n      url: '").concat(t.udUrl, "',\n      image: '").concat(t.udImage, "',\n      '价格':'").concat(t.udPrice, '\'\n    }\n  }\n  (function(a,h,c,b,f,g){a["UdeskApiObject"]=f;a[f]=a[f]||function(){(a[f].d=a[f].d||[]).push(arguments)};g=h.createElement(c);g.async=1;g.charset="utf-8";g.src=b;c=h.getElementsByTagName(c)[0];c.parentNode.insertBefore(g,c)})(window,document,"script","https://assets-cli.udesk.cn/im_client/js/udeskApi.js","ud");\n  ud(udData);\n  '),
                document.getElementsByTagName("head")[0].appendChild(n)
        }

        var g, b = function (t) {
            if ("string" != typeof t) return t;
            var e, n = t,
                r = {
                    "&": "&amp;",
                    ">": "&gt;",
                    "<": "&lt;",
                    '"': "&quot;",
                    "'": "&#39;"
                };
            // for (e in r)
            //     var i = new RegExp(e, "g"),
            //         n = n.replace(i, r[e]);
            return n
        }, w = function (t) {
            var e = t.pageType,
                e = void 0 === e ? 0 : e,
                n = t.productInfo,
                r = t.injectConst,
                t = t.orderNum,
                t = void 0 === t ? "" : t,
                t = 1 === e ? n.proSkuNo : 2 === e ? t : "";
            Object(i.g)({
                pageType: e,
                relationNo: t
            }).then(function (t) {
                var e;
                return t && "0000" === t.code ? n ? (e = r.webSubUrl,
                    y(u(u({}, t.result), {}, {
                        udTitle: n.proSkuProductName,
                        udUrl: "//".concat(e.host, "/item/").concat(n.proSkuNo, ".html"),
                        udImage: n.leftImageList && n.leftImageList.length ? n.leftImageList[0] : "",
                        udPrice: 0 < n.sellingPrice ? "￥" + n.sellingPrice : "待询价"
                    }))) : y(t.result) : y(),
                    null
            }).catch(function (t) {
                y(),
                    console.log(t)
            })
        }, M = function () {
            var t = document.createElement("script");
            t.type = "text/javascript",
                t.innerHTML = '\n  !function (e, t, n, g, i) { e[i] = e[i] || function () { (e[i].q = e[i].q || []).push(arguments) }, n = t.createElement("script"), tag = t.getElementsByTagName("script")[0], n.async = 1, n.src = (\'https:\' == document.location.protocol ? \'https://\' : \'http://\') + g, tag.parentNode.insertBefore(n, tag) }(window, document, "script", "assets.giocdn.com/2.1/gio.js", "gio");\n  gio(\'init\', \'8ccf9443d38f1ead\', {});\n  gio(\'send\');\n  // Web弹窗SDK\n  !function(n,e){function t(e,n){return function(){e.apply(n,1===arguments.length?[arguments[0]]:Array.apply(null,arguments))}}var s=n.gio?t(n.gio.q.unshift,n.gio.q):t(n._vds.push,n._vds),i="growingio-sdk";n[i]={pendingEvents:[]},s(["setListener",function(e){n[i]&&n[i].eventMessageQueue?n[i].eventMessageQueue.feed(e):n[i].pendingEvents.length<=200&&n[i].pendingEvents.push(e)}]);var o=e.createElement("script"),r=e.getElementsByTagName("script");o.async=1,o.src=("https:"==e.location.protocol?"https://":"http://")+"assets.giocdn.com/sdk/marketing/1.1/access.js";var g=r[r.length-1];g.parentNode.insertBefore(o,g)}(window,document);\n  ',
                document.getElementsByTagName("head")[0].appendChild(t)
        }, _ = {
            webUrl: {},
            webSubUrl: {},
            passport: "",
            userInfo: {},
            isLogin: !1,
            loginPath: "",
            logoutPath: ""
        };

        function E(t) {
            return g = g || t.createContext(_)
        }

        function S(t) {
            for (var e = (t = parseFloat((t + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "").split(".")[0].split("").reverse(), t = t.split(".")[1], n = "", r = 0; r < e.length; r++)
                n += e[r] + ((r + 1) % 3 == 0 && r + 1 != e.length ? "," : "");
            return n.split("").reverse().join("") + "." + t
        }

        function k(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "12px 'Microsoft Yahei', Arial, sans-serif";
            if ("undefined" == typeof document) return 8 * t.replace(/[\u0391-\uFFE5]/g, "aa").length;
            var n = (k.canvas || (k.canvas = document.createElement("canvas"))).getContext("2d");
            return n.font = e,
                n.measureText(t).width
        }

        function x(t) {
            var e = t;
            (e = "string" == typeof t ? document.getElementById(t) : e) && e.scrollIntoView({
                block: "start",
                behavior: "smooth"
            })
        }

        function N() {
            return window.pageXOffset ? {
                scrollLeft: window.pageXOffset,
                scrollTop: window.pageYOffset
            } : {
                scrollLeft: document.body.scrollLeft + document.documentElement.scrollLeft,
                scrollTop: document.body.scrollTop + document.documentElement.scrollTop
            }
        }

        function O(t) {
            var e = t.hasRelated,
                e = void 0 !== e && e,
                t = t.hasOhter;
            return [{
                id: "detail_floor_0",
                name: "商品参数",
                isShow: !0
            }, {
                id: "detail_floor_1",
                name: "全部选型",
                isShow: !(void 0 === t || !t)
            }, {
                id: "detail_floor_2",
                name: "搭配推荐",
                isShow: !!e
            }, {
                id: "detail_floor_3",
                name: "商品介绍",
                isShow: !0
            }]
        }

        function T(t) {
            var e = t.val,
                n = t.min,
                t = t.max;
            return void 0 !== n && e < n ? n : void 0 !== t && t < e ? t : e
        }

        function C(t, e) {
            var n;
            "undefined" != typeof document && ((n = new Image).onload = function () {
                e({
                    w: n.width,
                    h: n.height
                })
            },
                n.src = t)
        }

        function j() {
            return Math.max.apply(null, $.map($("body *"), function (t, e) {
                if ("static" != $(t).css("position")) return parseInt($(t).css("z-index")) || -1
            }))
        }

        function I(n, t) {
            return "asc" === t ? function (t, e) {
                t = t[n],
                    e = e[n];
                return e < t ? 1 : t < e ? -1 : 0
            } : "desc" === t ? function (t, e) {
                t = t[n],
                    e = e[n];
                return t < e ? 1 : e < t ? -1 : 0
            } : void 0
        }

        function P(t, e, n) {
            if (t && e) return (0 === e.stockTotalQty || 0 === e.totalQty) && (t.isSoldOutStop || 600 === t.proSkuLeadTime) || "2" === n && t.minOrderNum > e.promotionStock
        }

        function A(t, e, n) {
            if (!t || !e) return !1;
            n = P(t, e, n);
            return !1 === t.ifRelease || !t.ifCanSaleThisRegion || n
        }

        function R(t, e) {
            t = o.a.parse(t).pathname,
                e = o.a.parse(e).pathname;
            return "string" == typeof t && t && !t.endsWith("/") && (t += "/"),
            "string" != typeof e || e.endsWith("/") || (e += "/"),
            t === e
        }

        var L = function (t, e) {
            if (t) {
                t = new Date(t);
                return a.a.format(t, e || "YYYY-MM-DD")
            }
            return ""
        };

        function D(t) {
            for (var e = 0, n = 0; n < t.length; n++)
                null != t.charAt(n).match(/[^\x00-\xff]/gi) ? e += 2 : e += 1;
            return e
        }

        function B(t) {
            return "2" == t ? 3 : null
        }

        function z(t) {
            return "" === t || null == t
        }

        var U = function (t) {
            return t && "function" == typeof t
        };

        function F(t) {
            for (var e = Object.keys(t).sort(), n = Object.create(null), r = 0; r < e.length; r++) {
                var i = e[r],
                    o = t[i],
                    a = o;
                "object" != s()(a) || "[object object]" != Object.prototype.toString.call(a).toLowerCase() || a.length ? n[i] = o : n[i] = F(o)
            }
            return n
        }
    },
    416: function (t, e, n) {
        var r, i, o, l;
        t.exports = (r = n(730),
            n = (t = r).lib,
            i = n.WordArray,
            o = n.Hasher,
            n = t.algo,
            l = [],
            n = n.SHA1 = o.extend({
                _doReset: function () {
                    this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                },
                _doProcessBlock: function (t, e) {
                    for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], a = n[3], s = n[4], c = 0; c < 80; c++) {
                        c < 16 ? l[c] = 0 | t[e + c] : (u = l[c - 3] ^ l[c - 8] ^ l[c - 14] ^ l[c - 16],
                            l[c] = u << 1 | u >>> 31);
                        var u = (r << 5 | r >>> 27) + s + l[c];
                        u += c < 20 ? 1518500249 + (i & o | ~i & a) : c < 40 ? 1859775393 + (i ^ o ^ a) : c < 60 ? (i & o | i & a | o & a) - 1894007588 : (i ^ o ^ a) - 899497514,
                            s = a,
                            a = o,
                            o = i << 30 | i >>> 2,
                            i = r,
                            r = u
                    }
                    n[0] = n[0] + r | 0,
                        n[1] = n[1] + i | 0,
                        n[2] = n[2] + o | 0,
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
                    var t = o.clone.call(this);
                    return t._hash = this._hash.clone(),
                        t
                }
            }),
            t.SHA1 = o._createHelper(n),
            t.HmacSHA1 = o._createHmacHelper(n),
            r.SHA1)
    },
    730: function (t, e, m) {
        (function (p) {
                t.exports = function (u) {
                    var n = Object.create || function (t) {
                        return d.prototype = t,
                            t = new d,
                            d.prototype = null,
                            t
                    }
                        , t = {}
                        , e = t.lib = {}
                        , i = e.Base = {
                        extend: function (t) {
                            var e = n(this);
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
                    }
                        , l = e.WordArray = i.extend({
                        init: function (t, e) {
                            t = this.words = t || [],
                                this.sigBytes = null != e ? e : 4 * t.length
                        },
                        toString: function (t) {
                            return (t || a).stringify(this)
                        },
                        concat: function (t) {
                            var e = this.words
                                , n = t.words
                                , r = this.sigBytes
                                , i = t.sigBytes;
                            if (this.clamp(),
                            r % 4)
                                for (var o = 0; o < i; o++) {
                                    var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    e[r + o >>> 2] |= a << 24 - (r + o) % 4 * 8
                                }
                            else
                                for (o = 0; o < i; o += 4)
                                    e[r + o >>> 2] = n[o >>> 2];
                            return this.sigBytes += i,
                                this
                        },
                        clamp: function () {
                            var t = this.words
                                , e = this.sigBytes;
                            t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8,
                                t.length = u.ceil(e / 4)
                        },
                        clone: function () {
                            var t = i.clone.call(this);
                            return t.words = this.words.slice(0),
                                t
                        },
                        random: function (t) {
                            for (var e = [], n = 0; n < t; n += 4)
                                e.push(function () {
                                    if (r) {
                                        if ("function" == typeof r.getRandomValues)
                                            try {
                                                return r.getRandomValues(new Uint32Array(1))[0]
                                            } catch (t) {
                                            }
                                        if ("function" == typeof r.randomBytes)
                                            try {
                                                return r.randomBytes(4).readInt32LE()
                                            } catch (t) {
                                            }
                                    }
                                    throw new Error("Native crypto module could not be used to get secure random number.")
                                }());
                            return new l.init(e, t)
                        }
                    })
                        , o = t.enc = {}
                        , a = o.Hex = {
                        stringify: function (t) {
                            for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                                var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                r.push((o >>> 4).toString(16)),
                                    r.push((15 & o).toString(16))
                            }
                            return r.join("")
                        },
                        parse: function (t) {
                            for (var e = t.length, n = [], r = 0; r < e; r += 2)
                                n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                            return new l.init(n, e / 2)
                        }
                    }
                        , s = o.Latin1 = {
                        stringify: function (t) {
                            for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                                var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                r.push(String.fromCharCode(o))
                            }
                            return r.join("")
                        },
                        parse: function (t) {
                            for (var e = t.length, n = [], r = 0; r < e; r++)
                                n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                            return new l.init(n, e)
                        }
                    }
                        , c = o.Utf8 = {
                        stringify: function (t) {
                            try {
                                return decodeURIComponent(escape(s.stringify(t)))
                            } catch (t) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function (t) {
                            return s.parse(unescape(encodeURIComponent(t)))
                        }
                    }
                        , f = e.BufferedBlockAlgorithm = i.extend({
                        reset: function () {
                            this._data = new l.init,
                                this._nDataBytes = 0
                        },
                        _append: function (t) {
                            "string" == typeof t && (t = c.parse(t)),
                                this._data.concat(t),
                                this._nDataBytes += t.sigBytes
                        },
                        _process: function (t) {
                            var e, n = this._data, r = n.words, i = n.sigBytes, o = this.blockSize, a = i / (4 * o),
                                s = (a = t ? u.ceil(a) : u.max((0 | a) - this._minBufferSize, 0)) * o,
                                i = u.min(4 * s, i);
                            if (s) {
                                for (var c = 0; c < s; c += o)
                                    this._doProcessBlock(r, c);
                                e = r.splice(0, s),
                                    n.sigBytes -= i
                            }
                            return new l.init(e, i)
                        },
                        clone: function () {
                            var t = i.clone.call(this);
                            return t._data = this._data.clone(),
                                t
                        },
                        _minBufferSize: 0
                    })
                        , h = (e.Hasher = f.extend({
                        cfg: i.extend(),
                        init: function (t) {
                            this.cfg = this.cfg.extend(t),
                                this.reset()
                        },
                        reset: function () {
                            f.reset.call(this),
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
                        t.algo = {});

                    function d() {
                    }

                    return t
                }(Math)
            }
        ).call(this, m(38))
    },

    38: function (t, e) {
        var n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
                eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }
})

var encrypt = function (s, r) {
    var a = aaa(416);
    t = a(s, r)

    for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        r.push((o >>> 4).toString(16)),
            r.push((15 & o).toString(16))
    }
    return r.join("")
}

var genTraceId = function() {
    var t = 8, e = !0
    var n = ""
        , n = Math.ceil(1e14 * Math.random()).toString().substr(0, t || 4);
    return e && (n += Date.now()), n
}

s = 'body={"brandId":"","catalogueId":"260844","cityCode":511000,"clp":true,"extraFilter":{"inStock":false,"showIndustryFeatured":false},"from":0,"fz":false,"keyword":"","productFilter":{"brandIds":[""],"properties":{}},"rangeFilter":null,"searchType":{"notNeedCorrect":false},"size":20,"sort":0}&params={"traceId":"546432811611720786126"}&sign_token=48bccd43c6304110af2e4beb71946e8e'
r = '48bccd43c6304110af2e4beb71946e8e'
console.log(encrypt(s, r))
// console.log(genTraceId())