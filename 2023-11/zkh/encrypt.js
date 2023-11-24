const forge = require('node-forge');
const crypto_js = require('crypto')
window = global;
// var loader;
// !(function (l) {
//
//     var t = {}
//         , c = {
//         15: 0
//     }
//         , p = [];
//
//     function i(e) {
//         if (t[e])
//             return t[e].exports;
//         var r = t[e] = {
//             i: e,
//             l: !1,
//             exports: {}
//         };
//         return l[e].call(r.exports, r, r.exports, i),
//             r.l = !0,
//             r.exports
//     }
//
//     i.m = l,
//         i.c = t,
//         i.d = function (e, r, t) {
//             i.o(e, r) || Object.defineProperty(e, r, {
//                 enumerable: !0,
//                 get: t
//             })
//         }
//         ,
//         i.r = function (e) {
//             "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
//                 value: "Module"
//             }),
//                 Object.defineProperty(e, "__esModule", {
//                     value: !0
//                 })
//         }
//         ,
//         i.t = function (r, e) {
//             if (1 & e && (r = i(r)),
//             8 & e)
//                 return r;
//             if (4 & e && "object" == typeof r && r && r.__esModule)
//                 return r;
//             var t = Object.create(null);
//             if (i.r(t),
//                 Object.defineProperty(t, "default", {
//                     enumerable: !0,
//                     value: r
//                 }),
//             2 & e && "string" != typeof r)
//                 for (var n in r)
//                     i.d(t, n, function (e) {
//                         return r[e]
//                     }
//                         .bind(null, n));
//             return t
//         }
//         ,
//         i.n = function (e) {
//             var r = e && e.__esModule ? function () {
//                         return e.default
//                     }
//                     : function () {
//                         return e
//                     }
//             ;
//             return i.d(r, "a", r),
//                 r
//         }
//         ,
//         i.o = function (e, r) {
//             return Object.prototype.hasOwnProperty.call(e, r)
//         }
//         ,
//         i.p = "//static.zkh360.com/file/resource/official/";
//     loader = i;
//
//
// })(
//     {
//         0: function (e, t) {
//             e.exports = {}
//         },
//         1: function (t, e, n) {
//             var r = n(853)
//                 , o = n(854)
//                 , i = n(588)
//                 , a = n(855);
//             t.exports = function (t, e) {
//                 return r(t) || o(t, e) || i(t, e) || a()
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         }
//         ,
//         3: function (z, e, t) {
//             "use strict";
//             t.d(e, "lb", function () {
//                 return y
//             }),
//                 t.d(e, "c", function () {
//                     return v
//                 }),
//                 t.d(e, "qb", function () {
//                     return g
//                 }),
//                 t.d(e, "t", function () {
//                     return b
//                 }),
//                 t.d(e, "ob", function () {
//                     return k
//                 }),
//                 t.d(e, "m", function () {
//                     return O
//                 }),
//                 t.d(e, "h", function () {
//                     return w
//                 }),
//                 t.d(e, "Q", function () {
//                     return N
//                 }),
//                 t.d(e, "U", function () {
//                     return C
//                 }),
//                 t.d(e, "W", function () {
//                     return S
//                 }),
//                 t.d(e, "B", function () {
//                     return M
//                 }),
//                 t.d(e, "ib", function () {
//                     return F
//                 }),
//                 t.d(e, "O", function () {
//                     return q
//                 }),
//                 t.d(e, "i", function () {
//                     return B
//                 }),
//                 t.d(e, "L", function () {
//                     return x
//                 }),
//                 t.d(e, "pb", function () {
//                     return U
//                 }),
//                 t.d(e, "E", function () {
//                     return H
//                 }),
//                 t.d(e, "A", function () {
//                     return V
//                 }),
//                 t.d(e, "mb", function () {
//                     return W
//                 }),
//                 t.d(e, "x", function () {
//                     return K
//                 }),
//                 t.d(e, "z", function () {
//                     return G
//                 }),
//                 t.d(e, "db", function () {
//                     return T
//                 }),
//                 t.d(e, "Y", function () {
//                     return J
//                 }),
//                 t.d(e, "d", function () {
//                     return Q
//                 }),
//                 t.d(e, "p", function () {
//                     return $
//                 }),
//                 t.d(e, "J", function () {
//                     return Y
//                 }),
//                 t.d(e, "I", function () {
//                     return Z
//                 }),
//                 t.d(e, "hb", function () {
//                     return X
//                 }),
//                 t.d(e, "T", function () {
//                     return ee
//                 }),
//                 t.d(e, "j", function () {
//                     return te
//                 }),
//                 t.d(e, "r", function () {
//                     return ne
//                 }),
//                 t.d(e, "sb", function () {
//                     return re
//                 }),
//                 t.d(e, "eb", function () {
//                     return ae
//                 }),
//                 t.d(e, "bb", function () {
//                     return oe
//                 }),
//                 t.d(e, "n", function () {
//                     return ce
//                 }),
//                 t.d(e, "gb", function () {
//                     return _
//                 }),
//                 t.d(e, "cb", function () {
//                     return ie
//                 }),
//                 t.d(e, "ab", function () {
//                     return se
//                 }),
//                 t.d(e, "G", function () {
//                     return le
//                 }),
//                 t.d(e, "y", function () {
//                     return L
//                 }),
//                 t.d(e, "v", function () {
//                     return ue
//                 }),
//                 t.d(e, "Z", function () {
//                     return de
//                 }),
//                 t.d(e, "F", function () {
//                     return pe
//                 }),
//                 t.d(e, "s", function () {
//                     return fe
//                 }),
//                 t.d(e, "D", function () {
//                     return me
//                 }),
//                 t.d(e, "V", function () {
//                     return he
//                 }),
//                 t.d(e, "o", function () {
//                     return ye
//                 }),
//                 t.d(e, "l", function () {
//                     return D
//                 }),
//                 t.d(e, "vb", function () {
//                     return ve
//                 }),
//                 t.d(e, "tb", function () {
//                     return ge
//                 }),
//                 t.d(e, "kb", function () {
//                     return be
//                 }),
//                 t.d(e, "M", function () {
//                     return ke
//                 }),
//                 t.d(e, "N", function () {
//                     return Oe
//                 }),
//                 t.d(e, "R", function () {
//                     return we
//                 }),
//                 t.d(e, "K", function () {
//                     return Ne
//                 }),
//                 t.d(e, "H", function () {
//                     return Ee
//                 }),
//                 t.d(e, "f", function () {
//                     return je
//                 }),
//                 t.d(e, "g", function () {
//                     return Ce
//                 }),
//                 t.d(e, "k", function () {
//                     return Se
//                 }),
//                 t.d(e, "X", function () {
//                     return Ie
//                 }),
//                 t.d(e, "u", function () {
//                     return xe
//                 }),
//                 t.d(e, "e", function () {
//                     return Te
//                 }),
//                 t.d(e, "ub", function () {
//                     return Pe
//                 }),
//                 t.d(e, "P", function () {
//                     return _e
//                 }),
//                 t.d(e, "nb", function () {
//                     return Le
//                 }),
//                 t.d(e, "rb", function () {
//                     return De
//                 }),
//                 t.d(e, "fb", function () {
//                     return Re
//                 }),
//                 t.d(e, "w", function () {
//                     return ze
//                 }),
//                 t.d(e, "q", function () {
//                     return Ae
//                 }),
//                 t.d(e, "jb", function () {
//                     return Me
//                 }),
//                 t.d(e, "S", function () {
//                     return Fe
//                 }),
//                 t.d(e, "b", function () {
//                     return qe
//                 }),
//                 t.d(e, "C", function () {
//                     return Be
//                 }),
//                 t.d(e, "a", function () {
//                     return Ue
//                 }),
//                 t(35);
//             var e = t(5)
//                 , r = t.n(e)
//                 , e = t(6)
//                 , n = t.n(e)
//                 , e = t(0)
//                 , o = t.n(e)
//                 , c = t(42)
//                 , a = t(10)
//                 , i = t(4)
//                 , e = t(453)
//                 , s = t.n(e)
//                 , l = t(37)
//                 , u = t(15)
//                 , d = t(207);
//
//             function p(t, e) {
//                 var n, r = Object.keys(t);
//                 return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
//                 e && (n = n.filter(function (e) {
//                     return Object.getOwnPropertyDescriptor(t, e).enumerable
//                 })),
//                     r.push.apply(r, n)),
//                     r
//             }
//
//             function f(t) {
//                 for (var e = 1; e < arguments.length; e++) {
//                     var n = null != arguments[e] ? arguments[e] : {};
//                     e % 2 ? p(Object(n), !0).forEach(function (e) {
//                         r()(t, e, n[e])
//                     }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function (e) {
//                         Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
//                     })
//                 }
//                 return t
//             }
//
//             var m = t(398)
//                 , h = t(58)
//                 , y = function (e, t) {
//                 var n = ""
//                     , n = Math.ceil(1e14 * Math.random()).toString().substr(0, e || 4);
//                 return t && (n += Date.now()),
//                     n
//             }
//                 , v = function (e) {
//                 var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
//                 return "pro" === t ? e : "".concat(t, "_").concat(e)
//             }
//                 , g = function (e, t) {
//                 var n = window.location.href
//                     , r = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .3) || .3
//                     , a = new Date;
//                 a.setTime(a.getTime() + 24 * r * 60 * 60 * 1e3),
//                     document.cookie = "".concat(e, "=").concat(encodeURIComponent(t), ";expires=").concat(a.toGMTString(), ";path=/;").concat(-1 < n.indexOf("local") || -1 < n.indexOf("127.0.0.1") ? "" : "domain=.zkh.com")
//             }
//                 , b = function (e) {
//                 e = document.cookie.match(new RegExp("(^| )".concat(e, "=([^;]*)(;|$)")));
//                 return null != e ? D(e[2]) : null
//             }
//                 , k = function (e) {
//                 g(e, "", -1)
//             }
//                 , O = function (e) {
//                 var t = e.id;
//                 return (1 == e.type ? "recommend_floor_" : "category_floor_").concat(t)
//             }
//                 , w = function (e) {
//                 var t = e.id;
//                 return (1 == e.type ? "floor_1_" : "floor_2_").concat(t)
//             };
//
//             function N(e) {
//                 for (var t = {
//                     left: 0,
//                     top: 0
//                 }; e && e !== document.body;)
//                     t.left += e.offsetLeft,
//                         t.top += e.offsetTop,
//                         e = e.offsetParent;
//                 return t
//             }
//
//             function E() {
//                 var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
//                     , t = e.groupId || ""
//                     , n = document.createElement("script");
//                 n.type = "text/javascript",
//                 e.uname && (e.uname = e.uname.replace(/'|"/g, "")),
//                 e.udTitle && (e.udTitle = e.udTitle.replace(/'|"/g, "")),
//                     n.innerHTML = '\n  var udData = {\n    "code": "5b141kjb",\n    "link": "https://zkh360.udesk.cn/im_client/?web_plugin_id=137301&group_id='.concat(t, "\",\n    \"noBubble\": true,\n    \"targetSelector\": '.my-service-btn',\n    \"selector\": '.find-service-btn',\n    \"onUnread\": function(data) {\n      var count = data.count;\n      var el = document.getElementById('udeskUnreadCount');\n      if (count) {\n        count = count > 99 ? '99+' : count;\n        el.innerHTML = count;\n        el.style.display = 'block';\n      } else {\n        el.style.display = 'none';\n      }\n    }\n  }\n  if (").concat(e.uid, ") {\n    udData.customer = {\n      nonce: '").concat(e.nonce, "',\n      signature: '").concat(e.signature, "',\n      timestamp: '").concat(e.timestamp, "',\n      web_token: '").concat(e.webToken, "',\n      c_name: '").concat(e.uname, "',\n      c_tags: '").concat(e.serviceId, "',\n      c_cf_dialogueDesc: '").concat(e.invoice_id, "',\n      c_phone: '").concat(e.uid, "'\n    };\n  }\n  if ('").concat(e.udUrl, "' != 'undefined') {\n    udData.product = {\n      title: '").concat(e.udTitle, "',\n      url: '").concat(e.udUrl, "',\n      image: '").concat(e.udImage, "',\n      '价格':'").concat(e.udPrice, "'\n    }\n  }\n  // if ('").concat(e.isHuman, '\' == \'true\') {\n  //   udData = {\n  //     "code": "5b141kjb",\n  //     "link": "https://zkh360.udesk.cn/im_client/?web_plugin_id=163731&group_id=').concat(t, '",\n  //     "targetSelector": ".my-service-btn",\n  //     "selector": \'.find-service-btn\',\n  //     "mode": "inner",\n  //     "noBubble": true,\n  //     "customer": {\n  //         "nonce": \'').concat(e.nonce, "',\n  //         signature: '").concat(e.signature, "',\n  //         timestamp: '").concat(e.timestamp, "',\n  //         web_token: '").concat(e.webToken, "',\n  //         c_name: '").concat(e.uname, "',\n  //         c_tags: '").concat(e.serviceId, "',\n  //         c_cf_dialogueDesc: '").concat(e.invoice_id, "',\n  //         c_phone: '").concat(e.uid, '\'\n  //     }\n  //   }\n  // }\n  (function(a,h,c,b,f,g){a["UdeskApiObject"]=f;a[f]=a[f]||function(){(a[f].d=a[f].d||[]).push(arguments)};g=h.createElement(c);g.async=1;g.charset="utf-8";g.src=b;c=h.getElementsByTagName(c)[0];c.parentNode.insertBefore(g,c)})(window,document,"script","https://assets-cli.udesk.cn/im_client/js/udeskApi.js","ud");\n  ud(udData);\n  '),
//                     document.getElementsByTagName("head")[0].appendChild(n)
//             }
//
//             var j, C = function (e) {
//                 if ("string" != typeof e)
//                     return e;
//                 var t, n = e, r = {
//                     "&": "&amp;",
//                     ">": "&gt;",
//                     "<": "&lt;",
//                     '"': "&quot;",
//                     "'": "&#39;"
//                 };
//                 for (t in r)
//                     var a = new RegExp(t, "g")
//                         , n = n.replace(a, r[t]);
//                 return n
//             }, S = function (e) {
//                 var t = e.pageType
//                     , t = void 0 === t ? 0 : t
//                     , n = e.productInfo
//                     , r = e.injectConst
//                     , r = void 0 === r ? window.__INJECT_CONST__ : r
//                     , e = e.orderNum
//                     , e = 1 === t ? n.proSkuNo : 2 === t ? void 0 === e ? "" : e : ""
//                     , a = r.wwwOrigin;
//                 Object(c.p)({
//                     pageType: t,
//                     relationNo: e
//                 }).then(function (e) {
//                     return e && "0000" === e.code ? E(n ? f(f({}, e.result), {}, {
//                         udTitle: n.proSkuProductName,
//                         udUrl: "".concat(a, "/item/").concat(n.proSkuNo, ".html"),
//                         udImage: n.leftImageList && n.leftImageList.length ? n.leftImageList[0] : "",
//                         udPrice: 0 < n.sellingPrice ? "￥" + n.sellingPrice : "待询价",
//                         isHuman: isHuman
//                     }) : f({}, e.result)) : E({}),
//                         null
//                 }).catch(function (e) {
//                     E({}),
//                         console.log(e)
//                 })
//             }, A = {
//                 webUrl: {},
//                 webSubUrl: {},
//                 passport: "",
//                 userInfo: {},
//                 isLogin: !1,
//                 loginPath: "",
//                 logoutPath: ""
//             };
//
//             function M(e) {
//                 return j = j || e.createContext(A)
//             }
//
//             function F(e) {
//                 for (var t = (e = parseFloat((e + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "").split(".")[0].split("").reverse(), e = e.split(".")[1], n = "", r = 0; r < t.length; r++)
//                     n += t[r] + ((r + 1) % 3 == 0 && r + 1 != t.length ? "," : "");
//                 return n.split("").reverse().join("") + "." + e
//             }
//
//             function q(e, t) {
//                 return ["pic", "sidePic"].includes(e) ? "大图" : t && "list" == e ? "新列表" : "列表"
//             }
//
//             function I(e) {
//                 return e.replace(/[\u0391-\uFFE5]/g, "aa").length
//             }
//
//             function B(e, t) {
//                 if (!e)
//                     return e;
//                 var n = I(e)
//                     , r = 0
//                     , a = "";
//                 if (n <= t)
//                     return e;
//                 for (var o = 0; o < n; o++) {
//                     var c = e.charAt(o);
//                     if (128 < e.charCodeAt(o) ? r += 2 : r++,
//                         a += c,
//                     t <= r)
//                         return a + "..."
//                 }
//                 return a
//             }
//
//             function x(e) {
//                 var t,
//                     n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "12px 'Microsoft Yahei', Arial, sans-serif";
//                 return "undefined" != typeof document ? ((t = (x.canvas || (x.canvas = document.createElement("canvas"))).getContext("2d")).font = n,
//                     t.measureText(e).width) : 8 * I(e)
//             }
//
//             function U(e) {
//                 var t = e;
//                 (t = "string" == typeof e ? document.getElementById(e) : t) && t.scrollIntoView({
//                     block: "start",
//                     behavior: "smooth"
//                 })
//             }
//
//             function H() {
//                 return window.pageXOffset ? {
//                     scrollLeft: window.pageXOffset,
//                     scrollTop: window.pageYOffset
//                 } : {
//                     scrollLeft: document.body.scrollLeft + document.documentElement.scrollLeft,
//                     scrollTop: document.body.scrollTop + document.documentElement.scrollTop
//                 }
//             }
//
//             function V(e) {
//                 e = e.id;
//                 return "left-static-nav-".concat(void 0 === e ? "" : e)
//             }
//
//             function W(e) {
//                 var t = e.val
//                     , n = e.min
//                     , e = e.max;
//                 return void 0 !== n && t < n ? n : void 0 !== e && e < t ? e : t
//             }
//
//             function K(e, t) {
//                 var n;
//                 "undefined" != typeof document && ((n = new Image).onload = function () {
//                     t({
//                         w: n.width,
//                         h: n.height
//                     })
//                 }
//                     ,
//                     n.src = e)
//             }
//
//             function G() {
//                 var n = 0;
//                 return Object(u.forEach)(document.querySelectorAll("body *"), function (e) {
//                     e = e;
//                     var e = window.getComputedStyle ? getComputedStyle(e) : e.currentStyle
//                         , t = parseInt(e.zIndex);
//                     "static" != e.position && n < t && (n = t)
//                 }),
//                     n
//             }
//
//             function T(e, t, n) {
//                 if (e && t) {
//                     t = t.productStock;
//                     if (t)
//                         return "2" === n ? 0 === t.promotionStock || e.minOrderNum > t.promotionStock || e.proSkuMinOrderNum > t.promotionStock : (0 === t.stock || e.minOrderNum > t.stock || e.proSkuMinOrderNum > t.stock) && (e.isSoldOutStop || 600 === e.proSkuLeadTime)
//                 }
//             }
//
//             function J(e, t, n) {
//                 return !(!e || !t) && (t = T(e, t, n),
//                 !1 === e.ifRelease || !e.ifCanSaleThisRegion || t)
//             }
//
//             function Q(e) {
//                 var t = e.contentList
//                     , t = void 0 === t ? [] : t
//                     , n = e.deliverData
//                     , o = void 0 === n ? [] : n
//                     , n = e.type
//                     , c = void 0 === n ? "listPageDelivery" : n;
//                 return t.map(function (e, t) {
//                     var n = o[t] && o[t][c] || {}
//                         , r = o[t] && o[t].productStatus || {}
//                         , t = o[t] && o[t].productStock || {}
//                         , a = n.tagType;
//                     return f(f({}, e), {}, {
//                         offShelfStatus: [2, 3, 5].includes(a),
//                         isDisabledSku: [2, 3, 4, 5].includes(a),
//                         skuStock: f(f(f({}, n), r), t),
//                         type: c,
//                         serverDefaultDelivery: !1
//                     })
//                 })
//             }
//
//             function $(e) {
//                 var t = e.deliverData
//                     , t = void 0 === t ? [] : t
//                     , e = e.type
//                     , n = void 0 === e ? "listPageDelivery" : e
//                     , r = {};
//                 return t.forEach(function (e) {
//                     var t = e[n];
//                     r[e.skuNo] = {
//                         offShelfStatus: [2, 3, 5].includes(t.tagType),
//                         isDisabledSku: [2, 3, 4, 5].includes(t.tagType),
//                         skuStock: f(f(f({}, t), e.productStatus), e.productStock),
//                         type: n,
//                         serverDefaultDelivery: !1
//                     }
//                 }),
//                     r
//             }
//
//             function Y(e) {
//                 switch (e) {
//                     case 2:
//                         return "已下架";
//                     case 3:
//                         return "缺货";
//                     case 4:
//                         return "";
//                     case 5:
//                         return "售罄";
//                     default:
//                         return ""
//                 }
//             }
//
//             function Z(e) {
//                 switch (e) {
//                     case 2:
//                         return "//static.zkh360.com/image/2020-10-29/downsale-1603940253330.png";
//                     case 3:
//                         return "//static.zkh360.com/image/2021-08-09/outofstock-1628494742731.png";
//                     case 4:
//                         return "";
//                     case 5:
//                         return "//static.zkh360.com/image/2020-10-26/offsale-1603700979538.png";
//                     default:
//                         return ""
//                 }
//             }
//
//             function X(e, t) {
//                 e = s.a.parse(e).pathname,
//                     t = s.a.parse(t).pathname;
//                 return "string" == typeof e && e && !e.endsWith("/") && (e += "/"),
//                 "string" != typeof t || t.endsWith("/") || (t += "/"),
//                 e === t
//             }
//
//             function ee(e, t, n) {
//                 e = s.a.parse(e).pathname;
//                 return !(!n || !/#/.test(t) || n !== "#" + t.split("#")[1]) || !(!(n = /terms/).test(e) || !n.test(t)) || e === t || void 0
//             }
//
//             var te = function (e, t) {
//                 return e ? (e = e.split(" ")[0] || "",
//                     t ? e.replace(/\-/g, t) : e) : ""
//             };
//
//             function ne(e) {
//                 for (var t = 0, n = 0; n < e.length; n++)
//                     null != e.charAt(n).match(/[^\x00-\xff]/gi) ? t += 2 : t += 1;
//                 return t
//             }
//
//             function re(e) {
//                 return "2" == e ? 3 : null
//             }
//
//             function ae(e) {
//                 return "" === e || null == e
//             }
//
//             var oe = function (e) {
//                 return e && "function" == typeof e
//             };
//
//             function ce(e, t) {
//                 t = t || 2,
//                     e = e || 0;
//                 for (var n = (e = parseFloat((e + "").replace(/[^\d\.-]/g, "")).toFixed(t) + "").split(".")[0].split("").reverse(), t = e.split(".")[1], r = "", a = 0; a < n.length; a++)
//                     r += n[a] + ((a + 1) % 3 == 0 && a + 1 != n.length ? "," : "");
//                 return r.split("").reverse().join("") + "." + t
//             }
//
//             function P(e) {
//                 return "object" == n()(e) && "[object object]" == Object.prototype.toString.call(e).toLowerCase() && !e.length
//             }
//
//             function _(e) {
//                 for (var t = Object.keys(e).sort(), n = Object.create(null), r = 0; r < t.length; r++) {
//                     var a = t[r]
//                         , o = e[a];
//                     P(o) ? n[a] = _(o) : Object(u.isArray)(o) ? n[a] = o.map(function (e) {
//                         return P(e) ? _(e) : e
//                     }) : n[a] = o
//                 }
//                 return n
//             }
//
//             function ie(e) {
//                 var e = e.getBoundingClientRect()
//                     , t = e.top
//                     , n = e.right
//                     , r = e.bottom
//                     , e = e.left
//                     , a = window.innerHeight
//                     , o = window.innerWidth;
//                 return !(a < t || r < 0 || o < e || n < 0)
//             }
//
//             function se(e) {
//                 for (var t in e)
//                     if (e.hasOwnProperty(t))
//                         return !1;
//                 return !0
//             }
//
//             function le(e, t) {
//                 return -1 < e.indexOf("/search.html") ? 1 : -1 < e.indexOf("list/c-") && t.id ? 2 : -1 < e.indexOf("list/b-") && t.bid ? 3 : -1 < e.indexOf("list/h-") && t.id ? 6 : -1 < e.indexOf("/specificSearch-") && t.searchSceneNo ? 7 : ""
//             }
//
//             function L() {
//                 var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []
//                     , t = 1 < arguments.length ? arguments[1] : void 0
//                     , n = 2 < arguments.length ? arguments[2] : void 0
//                     , r = (e = e || []).findIndex(function (e) {
//                     return e.selected
//                 })
//                     , e = (e = e.filter(function (e) {
//                     return e.selected
//                 }))[0] || {};
//                 return 2 === t ? {
//                     key: 0 < r ? r : 0,
//                     selectData: e
//                 } : e.child ? (r = e.child.findIndex(function (e) {
//                     return e.selected
//                 }),
//                     e = (e = e.child.filter(function (e) {
//                         return e.selected
//                     }))[0] || {},
//                     3 === t ? {
//                         key: 0 < r ? r : 0,
//                         selectData: e
//                     } : 4 === t && n ? (e.child || (e.child = []),
//                         {
//                             key: 0 < (r = e.child.findIndex(function (e) {
//                                 return e.serialNum === n
//                             })) ? r : 0,
//                             selectData: e.child.filter(function (e) {
//                                 return e.serialNum === n
//                             })[0] || {}
//                         }) : void 0) : {
//                     key: 0,
//                     selectData: {}
//                 }
//             }
//
//             function ue(e, t) {
//                 e = L(e, 4, t).selectData,
//                     t = void 0 === e ? {} : e;
//                 return t && 2 === t.filterCatalogueType ? {
//                     filterCatalogueType: t.filterCatalogueType,
//                     catalogs: t.child.map(function (e) {
//                         return {
//                             value: e.serialNum,
//                             label: e.name
//                         }
//                     })
//                 } : {
//                     filterCatalogueType: t.filterCatalogueType,
//                     catalogs: []
//                 }
//             }
//
//             function de(e, t) {
//                 return t > function e(t) {
//                     return t.offsetParent ? e(t.offsetParent) + t.offsetTop : t.offsetTop
//                 }(e = e.current || e) - document.documentElement.clientHeight
//             }
//
//             var pe = function () {
//                 var e = 0;
//                 return document.documentElement && document.documentElement.scrollTop ? e = document.documentElement.scrollTop : document.body && (e = document.body.scrollTop),
//                     e
//             }
//                 , fe = function () {
//                 return document.body.clientHeight && document.documentElement.clientHeight ? Math.min(document.body.clientHeight, document.documentElement.clientHeight) : Math.max(document.body.clientHeight, document.documentElement.clientHeight)
//             }
//                 , me = function () {
//                 return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
//             };
//
//             function he() {
//                 var e = document.createElement("script");
//                 e.src = "https://lib.baomitu.com/jquery/1.12.4/jquery.min.js",
//                     document.body.appendChild(e)
//             }
//
//             var ye = function (e) {
//                 var t, n, r, a = o.a.createElement("span", null, o.a.createElement("strong", null, parseInt(e)), " 秒");
//                 return 60 < parseInt(e) && (t = parseInt(e) % 60,
//                     n = parseInt(e / 60),
//                     a = o.a.createElement("span", null, o.a.createElement("strong", null, n), " 分 ", o.a.createElement("strong", null, t), " 秒"),
//                 60 < n) && (n = parseInt(e / 60) % 60,
//                     r = parseInt(parseInt(e / 60) / 60),
//                     a = o.a.createElement("span", null, o.a.createElement("strong", null, r), " 小时 ", o.a.createElement("strong", null, n), " 分 ", o.a.createElement("strong", null, t), " 秒"),
//                 24 < r) && (r = parseInt(parseInt(e / 60) / 60) % 24,
//                     e = parseInt(parseInt(parseInt(e / 60) / 60) / 24),
//                     a = o.a.createElement("span", null, o.a.createElement("strong", null, e), " 天 ", o.a.createElement("strong", null, r), " 小时 ", o.a.createElement("strong", null, n), " 分 ", o.a.createElement("strong", null, t), " 秒")),
//                     a
//             }
//                 , D = function (e) {
//                 if (!e)
//                     return e;
//                 var t = e;
//                 try {
//                     t = decodeURIComponent(e)
//                 } catch (e) {
//                     console.log("decodeURIComponent Error", e)
//                 }
//                 return t
//             }
//                 , ve = {
//                 getStorageItem: function (e) {
//                     return window.localStorage ? JSON.parse(localStorage.getItem(e)) : JSON.parse(b(e))
//                 },
//                 setStorageItem: function (e, t) {
//                     window.localStorage ? localStorage.setItem(e, JSON.stringify(t)) : g(e, JSON.stringify(t))
//                 },
//                 removeStorageItem: function (e) {
//                     window.localStorage ? localStorage.removeItem(e) : k(e)
//                 }
//             };
//
//             function ge() {
//                 -1 < location.href.indexOf("utm_source") ? g("webSource", location.href, 1) : document.referrer && document.referrer.indexOf(".zkh.com") < 0 ? g("webSource", document.referrer, 1) : document.referrer || k("webSource")
//             }
//
//             var be = function (e, t, n) {
//                 return Object(l.q)({
//                     requests: [{
//                         number: t || 1,
//                         sku: e
//                     }]
//                 }).then(function (e) {
//                     var t, n, r = {};
//                     return "0000" === e.code && (t = (e.result && e.result[0] || {}).listPageDelivery || {},
//                         n = (e.result && e.result[0] || {}).productStatus || {},
//                         e = (e.result && e.result[0] || {}).productStock || {},
//                         r = f(f(f({}, t), n), e)),
//                         r
//                 })
//             }
//                 , ke = function (e) {
//                 var e = e.split("?")[0].split("//")[1]
//                     , t = e.indexOf("/");
//                 return {
//                     host: e.substring(0, t),
//                     pathname: e.substring(t)
//                 }
//             }
//                 , Oe = function () {
//                 var e = location.href;
//                 return -1 < e.indexOf("utm_source") && -1 < e.indexOf("utm_term") ? (e = Object(a.z)().utm_term,
//                     D(e)) : null
//             }
//                 , we = function (e) {
//                 for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1, n = 0, r = []; n < e.length;)
//                     r.push(e.slice(n, n += t));
//                 return r
//             }
//                 , Ne = function (t, n) {
//                 var r, e;
//                 return Object(u.isArray)(t) ? (r = [],
//                     t.map(function (t) {
//                         var e = n.filter(function (e) {
//                             return e.value === t
//                         });
//                         e.length && r.push(e[0].label)
//                     }),
//                     r) : (e = n.filter(function (e) {
//                     return e.value === t
//                 })).length ? e[0].label : ""
//             }
//                 , Ee = function () {
//                 var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []
//                     , t = 1 < arguments.length ? arguments[1] : void 0
//                     , e = e.filter(function (e) {
//                     return e.title === t
//                 });
//                 return e.length ? (Object(u.isArray)(e[0].id) ? e[0].id : [e[0].id]).map(function (e) {
//                     return "".concat(e)
//                 }) : []
//             }
//                 , je = [{
//                 value: -99,
//                 text: "全部状态"
//             }, {
//                 value: 0,
//                 text: "审批中"
//             }, {
//                 value: 1,
//                 text: "审批通过"
//             }, {
//                 value: 2,
//                 text: "审批退回"
//             }, {
//                 value: -1,
//                 text: "已取消"
//             }]
//                 , Ce = [{
//                 value: -99,
//                 text: "全部状态"
//             }, {
//                 value: 0,
//                 text: "待审批"
//             }, {
//                 value: 1,
//                 text: "已审批"
//             }, {
//                 value: -1,
//                 text: "已取消"
//             }]
//                 , Se = [{
//                 value: "-1",
//                 text: "全部日期"
//             }, {
//                 value: "1",
//                 text: "三天以内"
//             }, {
//                 value: "2",
//                 text: "一个月以内"
//             }, {
//                 value: "3",
//                 text: "三个月以内"
//             }]
//                 , Ie = {
//                 1: "普通发票",
//                 2: "增值税发票",
//                 3: "电子普通发票"
//             }
//                 , xe = function (e) {
//                 e = window && window.__INJECT_CONST__ && window.__INJECT_CONST__[e];
//                 return b(e)
//             }
//                 , Te = function (e, t) {
//                 if (e)
//                     for (var n in e)
//                         void 0 === e[n] ? delete e[n] : e[n] = m.encrypt(e[n], t, {
//                             mode: h.mode.ECB,
//                             padding: h.pad.Pkcs7
//                         }).toString()
//             }
//                 , Pe = function (e) {
//                 if (e) {
//                     for (var t in e)
//                         e[t] = e[t] + "";
//                     return e
//                 }
//             }
//                 , _e = function (e) {
//                 return !e || Number.isNaN(e) ? "" : e < 1024 ? e + "B" : e < Math.pow(1024, 2) ? (e / 1024).toFixed(2) + "KB" : e < Math.pow(1024, 3) ? (e / Math.pow(1024, 2)).toFixed(2) + "MB" : e < Math.pow(1024, 4) ? (e / Math.pow(1024, 3)).toFixed(2) + "G" : (e / Math.pow(1024, 4)).toFixed(2) + "T"
//             }
//                 , Le = function (e, t) {
//                 if (!e.length || !t.length)
//                     return e;
//                 for (var n = [], r = 0; r < e.length; r++)
//                     t.includes(e[r]) || n.push(e[r]);
//                 return n
//             }
//                 , De = function (e, t, n) {
//                 var r;
//                 return e = parseFloat(e),
//                     t = parseFloat(t),
//                     n = parseFloat(n),
//                     isNaN(t) || isNaN(n) ? (r = isNaN(e) ? 0 : parseInt(e)) < 0 ? 0 : r : isNaN(e) ? (i.a.toast({
//                         container: "数量必须是数字！"
//                     }),
//                         t) : e % 1 ? (i.a.toast({
//                         container: "数量必须是整数！"
//                     }),
//                         t) : e - t < 0 ? (i.a.toast({
//                         container: "商品不得低于起订量！"
//                     }),
//                         t) : !(n < 1) && (e - t) % n ? (i.a.toast({
//                         container: "请按最小包装数购买"
//                     }),
//                         (t + Math.round((e - t) / n) * n).toFixed(0)) : e
//             }
//                 , Re = function (e) {
//                 return Date.parse(new Date((e = e,
//                     (e += "").replace(/-/g, "/")))) >= Date.parse(new Date)
//             }
//                 , ze = function (e) {
//                 return {
//                     1: "到齐发货",
//                     2: "有货先发"
//                 }[e]
//             }
//                 , Ae = function (e, t) {
//                 return 0 === e ? t || "" : 1 === e ? "工作日周末交货" : 2 === e ? "只限工作日交货" : ""
//             };
//
//             function Me() {
//                 var a = [].slice.call(arguments)
//                     , e = a.shift()
//                     , o = 0;
//                 return e.replace(/%(\w)?(\d)?([dfsx])/gi, function (e, t, n, r) {
//                     t = n ? new Array(+n + 1).join(t || "") : "";
//                     return "d" == r && (t += parseInt(a[o++])),
//                         n ? t.slice(-1 * n) : t
//                 })
//             }
//
//             var Fe = function () {
//                 var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
//                 if (!e)
//                     return [];
//                 for (var t = [], n = 0, r = 0; r < e.length; r++) {
//                     var a = 6.25 * R(e[r].normalText) + 7 * R(e[r].boldText) + 2 + (r != e.length - 1 ? 4 : 0);
//                     n + a <= 208 && (n += a,
//                         t.push(e[r]))
//                 }
//                 return t
//             }
//                 , R = function (e) {
//                 for (var t = 0, n = 0; n < e.length; n++) {
//                     var r = e.charCodeAt(n);
//                     t += 0 <= r && r <= 128 ? 1 : 2
//                 }
//                 return t
//             }
//                 , qe = function () {
//                 try {
//                     var e = b("utmStore")
//                         , t = e ? JSON.parse(e) : null;
//                     return !(!t || !(t.$utm_source || t.$utm_medium || t.$utm_term || t.$utm_content || t.$utm_campaign))
//                 } catch (e) {
//                     console.log(e)
//                 }
//             }
//                 , Be = function (e) {
//                 var e = e.rangeFilter
//                     , t = {}
//                     , n = {};
//                 return e && e.length && e.map(function (e) {
//                     (e.min || e.max) && ("price" == e.rangeType ? t = {
//                         min: Number(e.min),
//                         max: Number(e.max)
//                     } : "moq" == e.rangeType && (n = {
//                         min: Number(e.min),
//                         max: Number(e.max)
//                     }))
//                 }),
//                     {
//                         priceRange: t,
//                         moqRange: n
//                     }
//             }
//                 , Ue = function (e) {
//                 var t, n = window.localStorage.getItem("BDLogRegisterUrl"),
//                     r = window.localStorage.getItem("SearchRegister360"),
//                     a = window.localStorage.getItem("ShowRegister360");
//                 n ? Object(d.a)({
//                     body: JSON.stringify({
//                         token: "LUytZd6QTO8WP0cD4zN3xhT3ZEin7HoE@Q6g1m2LAxV0PBBWueh9EZdwQDSaBGU7G",
//                         conversionTypes: [{
//                             logidUrl: n,
//                             newType: 3
//                         }]
//                     }),
//                     requestMethod: "POST",
//                     url: "https://ocpc.baidu.com/ocpcapi/api/uploadConvertData"
//                 }).finally(function () {
//                     n && window.localStorage.removeItem("BDLogRegisterUrl")
//                 }) : r ? (t = JSON.stringify({
//                     data: {
//                         data_industry: "ocpc_ps_convert",
//                         data_detail: {
//                             qhclickid: r,
//                             event: "REGISTERED"
//                         }
//                     }
//                 }),
//                     Object(d.a)({
//                         headers: {
//                             "App-Key": "7otivridb9dfs8kikimo",
//                             "App-Sign": h.MD5("jha378ymumdug0l3t6x6tnqbkvjqjnxj" + t).toString(),
//                             "Content-Type": "application/json;charset=utf-8"
//                         },
//                         body: t,
//                         requestMethod: "POST",
//                         url: "https://convert.dop.360.cn/uploadWebConvert"
//                     }).finally(function () {
//                         r && window.localStorage.removeItem("SearchRegister360")
//                     })) : a && (t = JSON.stringify({
//                     data: {
//                         data_industry: "ocpc_zs_convert",
//                         data_detail: {
//                             qhclickid: a,
//                             event: "REGISTERED",
//                             jzqs: "1199072",
//                             trans_id: h.MD5(e.userName).toString()
//                         }
//                     }
//                 }),
//                     Object(d.a)({
//                         headers: {
//                             "App-Key": "7otivridb9dfs8kikimo",
//                             "App-Sign": h.MD5("jha378ymumdug0l3t6x6tnqbkvjqjnxj" + t).toString(),
//                             "Content-Type": "application/json;charset=utf-8"
//                         },
//                         body: t,
//                         requestMethod: "POST",
//                         url: "https://convert.dop.360.cn/uploadWebConvert"
//                     }).finally(function () {
//                         a && window.localStorage.removeItem("ShowRegister360")
//                     }))
//             }
//         },
//         5: function (t, e, n) {
//             var r = n(589);
//             t.exports = function (t, e, n) {
//                 return (e = r(e)) in t ? Object.defineProperty(t, e, {
//                     value: n,
//                     enumerable: !0,
//                     configurable: !0,
//                     writable: !0
//                 }) : t[e] = n,
//                     t
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         },
//         6: function (e, t) {
//             function n(t) {
//                 return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
//                         return typeof t
//                     }
//                     : function (t) {
//                         return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
//                     }
//                     ,
//                     e.exports.__esModule = !0,
//                     e.exports.default = e.exports,
//                     n(t)
//             }
//
//             e.exports = n,
//                 e.exports.__esModule = !0,
//                 e.exports.default = e.exports
//         },
//         8: function (t, e) {
//             function n() {
//                 return t.exports = n = Object.assign ? Object.assign.bind() : function (t) {
//                     for (var e = 1; e < arguments.length; e++) {
//                         var n, r = arguments[e];
//                         for (n in r)
//                             Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
//                     }
//                     return t
//                 }
//                     ,
//                     t.exports.__esModule = !0,
//                     t.exports.default = t.exports,
//                     n.apply(this, arguments)
//             }
//
//             t.exports = n,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         },
//         9: function (e, t, n) {
//             "use strict";
//             n.d(t, "a", function () {
//                 return d
//             });
//             var r,
//                 t = n(6),
//                 S = n.n(t),
//                 t = n(5),
//                 a = n.n(t),
//                 t = n(13),
//                 o = n.n(t),
//                 t = n(65),
//                 c = n.n(t),
//                 m = n(3),
//                 h = n(172),
//                 t = n(574),
//                 y = n.n(t),
//                 v = n(42),
//                 g = n(11),
//                 t = n(398),
//                 b = n.n(t),
//                 t = n(58),
//                 k = n.n(t),
//                 i = n(10),
//                 O = n(208);
//
//             function I() {
//                 I = function () {
//                     return c
//                 }
//                 ;
//                 var s, c = {}, e = Object.prototype, l = e.hasOwnProperty,
//                     u = Object.defineProperty || function (e, t, n) {
//                         e[t] = n.value
//                     }
//                     , t = "function" == typeof Symbol ? Symbol : {}, r = t.iterator || "@@iterator",
//                     n = t.asyncIterator || "@@asyncIterator", a = t.toStringTag || "@@toStringTag";
//
//                 function o(e, t, n) {
//                     return Object.defineProperty(e, t, {
//                         value: n,
//                         enumerable: !0,
//                         configurable: !0,
//                         writable: !0
//                     }),
//                         e[t]
//                 }
//
//                 try {
//                     o({}, "")
//                 } catch (s) {
//                     o = function (e, t, n) {
//                         return e[t] = n
//                     }
//                 }
//
//                 function i(e, t, n, r) {
//                     var a, o, c, i, t = t && t.prototype instanceof y ? t : y, t = Object.create(t.prototype),
//                         r = new j(r || []);
//                     return u(t, "_invoke", {
//                         value: (a = e,
//                                 o = n,
//                                 c = r,
//                                 i = p,
//                                 function (e, t) {
//                                     if (i === f)
//                                         throw new Error("Generator is already running");
//                                     if (i === m) {
//                                         if ("throw" === e)
//                                             throw t;
//                                         return {
//                                             value: s,
//                                             done: !0
//                                         }
//                                     }
//                                     for (c.method = e,
//                                              c.arg = t; ;) {
//                                         var n = c.delegate;
//                                         if (n) {
//                                             n = function e(t, n) {
//                                                 var r = n.method
//                                                     , a = t.iterator[r];
//                                                 if (a === s)
//                                                     return n.delegate = null,
//                                                     "throw" === r && t.iterator.return && (n.method = "return",
//                                                         n.arg = s,
//                                                         e(t, n),
//                                                     "throw" === n.method) || "return" !== r && (n.method = "throw",
//                                                         n.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
//                                                         h;
//                                                 r = d(a, t.iterator, n.arg);
//                                                 if ("throw" === r.type)
//                                                     return n.method = "throw",
//                                                         n.arg = r.arg,
//                                                         n.delegate = null,
//                                                         h;
//                                                 a = r.arg;
//                                                 return a ? a.done ? (n[t.resultName] = a.value,
//                                                     n.next = t.nextLoc,
//                                                 "return" !== n.method && (n.method = "next",
//                                                     n.arg = s),
//                                                     n.delegate = null,
//                                                     h) : a : (n.method = "throw",
//                                                     n.arg = new TypeError("iterator result is not an object"),
//                                                     n.delegate = null,
//                                                     h)
//                                             }(n, c);
//                                             if (n) {
//                                                 if (n === h)
//                                                     continue;
//                                                 return n
//                                             }
//                                         }
//                                         if ("next" === c.method)
//                                             c.sent = c._sent = c.arg;
//                                         else if ("throw" === c.method) {
//                                             if (i === p)
//                                                 throw i = m,
//                                                     c.arg;
//                                             c.dispatchException(c.arg)
//                                         } else
//                                             "return" === c.method && c.abrupt("return", c.arg);
//                                         i = f;
//                                         n = d(a, o, c);
//                                         if ("normal" === n.type) {
//                                             if (i = c.done ? m : "suspendedYield",
//                                             n.arg === h)
//                                                 continue;
//                                             return {
//                                                 value: n.arg,
//                                                 done: c.done
//                                             }
//                                         }
//                                         "throw" === n.type && (i = m,
//                                             c.method = "throw",
//                                             c.arg = n.arg)
//                                     }
//                                 }
//                         )
//                     }),
//                         t
//                 }
//
//                 function d(e, t, n) {
//                     try {
//                         return {
//                             type: "normal",
//                             arg: e.call(t, n)
//                         }
//                     } catch (e) {
//                         return {
//                             type: "throw",
//                             arg: e
//                         }
//                     }
//                 }
//
//                 c.wrap = i;
//                 var p = "suspendedStart"
//                     , f = "executing"
//                     , m = "completed"
//                     , h = {};
//
//                 function y() {
//                 }
//
//                 function v() {
//                 }
//
//                 function g() {
//                 }
//
//                 var t = {}
//                     , b = (o(t, r, function () {
//                     return this
//                 }),
//                     Object.getPrototypeOf)
//                     , b = b && b(b(C([])))
//                     , k = (b && b !== e && l.call(b, r) && (t = b),
//                     g.prototype = y.prototype = Object.create(t));
//
//                 function O(e) {
//                     ["next", "throw", "return"].forEach(function (t) {
//                         o(e, t, function (e) {
//                             return this._invoke(t, e)
//                         })
//                     })
//                 }
//
//                 function w(c, i) {
//                     var t;
//                     u(this, "_invoke", {
//                         value: function (n, r) {
//                             function e() {
//                                 return new i(function (e, t) {
//                                         !function t(e, n, r, a) {
//                                             var o, e = d(c[e], c, n);
//                                             if ("throw" !== e.type)
//                                                 return (n = (o = e.arg).value) && "object" == S()(n) && l.call(n, "__await") ? i.resolve(n.__await).then(function (e) {
//                                                     t("next", e, r, a)
//                                                 }, function (e) {
//                                                     t("throw", e, r, a)
//                                                 }) : i.resolve(n).then(function (e) {
//                                                     o.value = e,
//                                                         r(o)
//                                                 }, function (e) {
//                                                     return t("throw", e, r, a)
//                                                 });
//                                             a(e.arg)
//                                         }(n, r, e, t)
//                                     }
//                                 )
//                             }
//
//                             return t = t ? t.then(e, e) : e()
//                         }
//                     })
//                 }
//
//                 function N(e) {
//                     var t = {
//                         tryLoc: e[0]
//                     };
//                     1 in e && (t.catchLoc = e[1]),
//                     2 in e && (t.finallyLoc = e[2],
//                         t.afterLoc = e[3]),
//                         this.tryEntries.push(t)
//                 }
//
//                 function E(e) {
//                     var t = e.completion || {};
//                     t.type = "normal",
//                         delete t.arg,
//                         e.completion = t
//                 }
//
//                 function j(e) {
//                     this.tryEntries = [{
//                         tryLoc: "root"
//                     }],
//                         e.forEach(N, this),
//                         this.reset(!0)
//                 }
//
//                 function C(t) {
//                     if (t || "" === t) {
//                         var n, e = t[r];
//                         if (e)
//                             return e.call(t);
//                         if ("function" == typeof t.next)
//                             return t;
//                         if (!isNaN(t.length))
//                             return n = -1,
//                                 (e = function e() {
//                                         for (; ++n < t.length;)
//                                             if (l.call(t, n))
//                                                 return e.value = t[n],
//                                                     e.done = !1,
//                                                     e;
//                                         return e.value = s,
//                                             e.done = !0,
//                                             e
//                                     }
//                                 ).next = e
//                     }
//                     throw new TypeError(S()(t) + " is not iterable")
//                 }
//
//                 return u(k, "constructor", {
//                     value: v.prototype = g,
//                     configurable: !0
//                 }),
//                     u(g, "constructor", {
//                         value: v,
//                         configurable: !0
//                     }),
//                     v.displayName = o(g, a, "GeneratorFunction"),
//                     c.isGeneratorFunction = function (e) {
//                         e = "function" == typeof e && e.constructor;
//                         return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
//                     }
//                     ,
//                     c.mark = function (e) {
//                         return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g,
//                             o(e, a, "GeneratorFunction")),
//                             e.prototype = Object.create(k),
//                             e
//                     }
//                     ,
//                     c.awrap = function (e) {
//                         return {
//                             __await: e
//                         }
//                     }
//                     ,
//                     O(w.prototype),
//                     o(w.prototype, n, function () {
//                         return this
//                     }),
//                     c.AsyncIterator = w,
//                     c.async = function (e, t, n, r, a) {
//                         void 0 === a && (a = Promise);
//                         var o = new w(i(e, t, n, r), a);
//                         return c.isGeneratorFunction(t) ? o : o.next().then(function (e) {
//                             return e.done ? e.value : o.next()
//                         })
//                     }
//                     ,
//                     O(k),
//                     o(k, a, "Generator"),
//                     o(k, r, function () {
//                         return this
//                     }),
//                     o(k, "toString", function () {
//                         return "[object Generator]"
//                     }),
//                     c.keys = function (e) {
//                         var t, n = Object(e), r = [];
//                         for (t in n)
//                             r.push(t);
//                         return r.reverse(),
//                             function e() {
//                                 for (; r.length;) {
//                                     var t = r.pop();
//                                     if (t in n)
//                                         return e.value = t,
//                                             e.done = !1,
//                                             e
//                                 }
//                                 return e.done = !0,
//                                     e
//                             }
//                     }
//                     ,
//                     c.values = C,
//                     j.prototype = {
//                         constructor: j,
//                         reset: function (e) {
//                             if (this.prev = 0,
//                                 this.next = 0,
//                                 this.sent = this._sent = s,
//                                 this.done = !1,
//                                 this.delegate = null,
//                                 this.method = "next",
//                                 this.arg = s,
//                                 this.tryEntries.forEach(E),
//                                 !e)
//                                 for (var t in this)
//                                     "t" === t.charAt(0) && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = s)
//                         },
//                         stop: function () {
//                             this.done = !0;
//                             var e = this.tryEntries[0].completion;
//                             if ("throw" === e.type)
//                                 throw e.arg;
//                             return this.rval
//                         },
//                         dispatchException: function (n) {
//                             if (this.done)
//                                 throw n;
//                             var r = this;
//
//                             function e(e, t) {
//                                 return o.type = "throw",
//                                     o.arg = n,
//                                     r.next = e,
//                                 t && (r.method = "next",
//                                     r.arg = s),
//                                     !!t
//                             }
//
//                             for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
//                                 var a = this.tryEntries[t]
//                                     , o = a.completion;
//                                 if ("root" === a.tryLoc)
//                                     return e("end");
//                                 if (a.tryLoc <= this.prev) {
//                                     var c = l.call(a, "catchLoc")
//                                         , i = l.call(a, "finallyLoc");
//                                     if (c && i) {
//                                         if (this.prev < a.catchLoc)
//                                             return e(a.catchLoc, !0);
//                                         if (this.prev < a.finallyLoc)
//                                             return e(a.finallyLoc)
//                                     } else if (c) {
//                                         if (this.prev < a.catchLoc)
//                                             return e(a.catchLoc, !0)
//                                     } else {
//                                         if (!i)
//                                             throw new Error("try statement without catch or finally");
//                                         if (this.prev < a.finallyLoc)
//                                             return e(a.finallyLoc)
//                                     }
//                                 }
//                             }
//                         },
//                         abrupt: function (e, t) {
//                             for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
//                                 var r = this.tryEntries[n];
//                                 if (r.tryLoc <= this.prev && l.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
//                                     var a = r;
//                                     break
//                                 }
//                             }
//                             var o = (a = a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc ? null : a) ? a.completion : {};
//                             return o.type = e,
//                                 o.arg = t,
//                                 a ? (this.method = "next",
//                                     this.next = a.finallyLoc,
//                                     h) : this.complete(o)
//                         },
//                         complete: function (e, t) {
//                             if ("throw" === e.type)
//                                 throw e.arg;
//                             return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
//                                 this.method = "return",
//                                 this.next = "end") : "normal" === e.type && t && (this.next = t),
//                                 h
//                         },
//                         finish: function (e) {
//                             for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
//                                 var n = this.tryEntries[t];
//                                 if (n.finallyLoc === e)
//                                     return this.complete(n.completion, n.afterLoc),
//                                         E(n),
//                                         h
//                             }
//                         },
//                         catch: function (e) {
//                             for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
//                                 var n, r, a = this.tryEntries[t];
//                                 if (a.tryLoc === e)
//                                     return "throw" === (n = a.completion).type && (r = n.arg,
//                                         E(a)),
//                                         r
//                             }
//                             throw new Error("illegal catch attempt")
//                         },
//                         delegateYield: function (e, t, n) {
//                             return this.delegate = {
//                                 iterator: C(e),
//                                 resultName: t,
//                                 nextLoc: n
//                             },
//                             "next" === this.method && (this.arg = s),
//                                 h
//                         }
//                     },
//                     c
//             }
//
//             function s(t, e) {
//                 var n, r = Object.keys(t);
//                 return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
//                 e && (n = n.filter(function (e) {
//                     return Object.getOwnPropertyDescriptor(t, e).enumerable
//                 })),
//                     r.push.apply(r, n)),
//                     r
//             }
//
//             function w(t) {
//                 for (var e = 1; e < arguments.length; e++) {
//                     var n = null != arguments[e] ? arguments[e] : {};
//                     e % 2 ? s(Object(n), !0).forEach(function (e) {
//                         a()(t, e, n[e])
//                     }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (e) {
//                         Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
//                     })
//                 }
//                 return t
//             }
//
//             var l = c.a.create()
//                 , t = (new Date).getTime().toString()
//                 , N = (t + t + t).substring(0, 32)
//                 , E = k.a.enc.Latin1.parse(N)
//                 , u = {};
//
//             function d(t) {
//                 var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
//                     , n = t.url.replace(/\//g, "_");
//                 return u[n] && e || (u[n] = l(t)),
//                     u[n].finally(function () {
//                         delete u[n]
//                     }).catch(function (e) {
//                         return window.__bl && __bl.error(e, {
//                             filename: t.url
//                         }),
//                             e
//                     })
//             }
//
//             l.interceptors.request.use(function (e) {
//                 return (r = r || o()(I().mark(function e(t) {
//                     var n, r, a, o, c, i, s, l, u, d, p, f;
//                     return I().wrap(function (e) {
//                         for (; ;)
//                             switch (e.prev = e.next) {
//                                 case 0:
//                                     if (n = Object(m.lb)(8, !0),
//                                     t.headers && "application/x-www-form-urlencoded" === t.headers["content-type"] && (t.data = Object(h.stringify)(t.data)),
//                                     window.__INJECT_CONST__.isDpm && (t.headers["zkh-version"] = "DPM"),
//                                         !t.signatureVerify) {
//                                         e.next = 20;
//                                         break
//                                     }
//                                     if (r = Object(m.u)("ukey")) {
//                                         e.next = 12;
//                                         break
//                                     }
//                                     return e.next = 10,
//                                         Object(v.r)();
//                                 case 10:
//                                     a = e.sent,
//                                         r = a.result;
//                                 case 12:
//                                     a = t.data ? JSON.stringify(Object(m.gb)(t.data)) : "",
//                                         i = w(w({}, t.params || {}), {}, {
//                                             traceId: n
//                                         }),
//                                         i = JSON.stringify(Object(m.ub)(Object(m.gb)(i))),
//                                         i = "body=".concat(a, "&params=").concat(i, "&sign_token=").concat(r),
//                                         i = y()(i, r),
//                                         t.headers.zkhs = i,
//                                         t.headers.zkhst = r;
//                                 case 20:
//                                     if (!t.encryptApi) {
//                                         e.next = 38;
//                                         break
//                                     }
//                                     if (t.headers["content-type"] = "application/json;charset=UTF-8",
//                                         o = Object(m.u)("rsaKeyName"),
//                                         c = Object(m.u)("rsaGroupName"),
//                                         o) {
//                                         e.next = 31;
//                                         break
//                                     }
//                                     return e.next = 27,
//                                         Object(v.o)();
//                                 case 27:
//                                     i = e.sent,
//                                         s = i.result,
//                                         o = s && s.rsaKey,
//                                         c = s && s.rsaGroup;
//                                 case 31:
//                                     (s = new JSEncrypt).setPublicKey(o),
//                                         l = s.encrypt(N),
//                                         t.headers["x-akc"] = l,
//                                         t.headers["x-rgn"] = c,
//                                         Object(m.e)(t.params, E),
//                                         t.data = {
//                                             cipher: b.a.encrypt(JSON.stringify(t.data), E, {
//                                                 mode: k.a.mode.ECB,
//                                                 padding: k.a.pad.Pkcs7
//                                             }).toString()
//                                         };
//                                 case 38:
//                                     t.headers && t.headers.cookie && (l = t.headers.cookie.match(new RegExp("(^| )anonymous_id=([^;]*)(;|$)"))) && l[2] && (t.headers["x-sc-anonymous-id"] = l[2]),
//                                     null != (u = window) && null != (u = u.sensors) && u.quick && (u = Object(m.t)("utmStore"),
//                                         d = u ? JSON.parse(u) : null,
//                                         t.headers.platform_type = "JavaScript",
//                                         t.headers["x-sc-anonymous-id"] = Object(g.hb)(),
//                                         Object(m.qb)("anonymous_id", Object(g.hb)()),
//                                         u) && (d.flow_type && (t.headers["flow-type"] = encodeURIComponent(d.flow_type)),
//                                     d.$utm_source && (t.headers["utm-source"] = encodeURIComponent(d.$utm_source)),
//                                     d.$utm_medium && (t.headers["utm-medium"] = encodeURIComponent(d.$utm_medium)),
//                                     d.$utm_term && (t.headers["utm-term"] = encodeURIComponent(d.$utm_term)),
//                                     d.$utm_content && (t.headers["utm-content"] = encodeURIComponent(d.$utm_content)),
//                                         d.$utm_campaign) && (t.headers["utm-campaign"] = encodeURIComponent(d.$utm_campaign));
//                                     try {
//                                         (p = O.a.get() || []).length && (f = p.slice(0, 10).map(function (e) {
//                                             return encodeURIComponent(e)
//                                         }),
//                                             t.headers["utm-search-keywords"] = f)
//                                     } catch (e) {
//                                     }
//                                     return t.url = (-1 === t.url.indexOf("?") ? "".concat(t.url, "?traceId=") : "".concat(t.url, "&traceId=")).concat(n),
//                                         t.method = t.method || "get",
//                                         e.abrupt("return", t);
//                                 case 44:
//                                 case "end":
//                                     return e.stop()
//                             }
//                     }, e)
//                 }))).apply(this, arguments)
//             }, function (e) {
//                 return Promise.reject(e)
//             }),
//                 l.interceptors.response.use(function (e) {
//                     var t, n;
//                     return e.config.encryptApi && e.data && (n = b.a.decrypt(e.data, E, {
//                         mode: k.a.mode.ECB,
//                         padding: k.a.pad.Pkcs7
//                     }),
//                         e.data = JSON.parse(n.toString(k.a.enc.Utf8))),
//                         200 === e.status ? ((e.data && !e.data.code || "" === e.data) && (t = {
//                             code: "0000",
//                             message: "成功",
//                             result: e.data,
//                             success: !0
//                         }),
//                         e.config.searchSceneId && (n = Object(i.r)(e.config.url).traceId,
//                             t ? t.traceId = n : e.data.traceId = n),
//                         "1213" == (null == e || null == (n = e.data) ? void 0 : n.code) && (n = location.href,
//                             location.href = "/robotVerify.html?target=".concat(n, "&targetEnd")),
//                             Promise.resolve(t || e.data || {})) : Promise.reject(e)
//                 }, function (e) {
//                     var t;
//                     if (c.a.isCancel(e))
//                         throw "Request canceled, ".concat(e.message);
//                     if (e.response) {
//                         var n = e.response.data;
//                         switch (e.config.encryptApi && (n = b.a.decrypt(n, E, {
//                             mode: k.a.mode.ECB,
//                             padding: k.a.pad.Pkcs7
//                         }).toString(k.a.enc.Utf8)),
//                             e.response.status) {
//                             case 400:
//                                 t = {
//                                     code: "400",
//                                     message: n || "接口异常"
//                                 };
//                                 break;
//                             case 401:
//                                 t = {
//                                     code: "401",
//                                     message: n.message || "token过期"
//                                 };
//                                 break;
//                             case 504:
//                                 t = {
//                                     code: "504",
//                                     message: n.message || n || "服务超时，稍后重试！"
//                                 };
//                                 break;
//                             default:
//                                 t = {
//                                     code: "500",
//                                     message: n.message || n || "系统异常，稍后重试！"
//                                 }
//                         }
//                     } else
//                         t = {
//                             code: "500",
//                             message: "系统异常，稍后重试！"
//                         };
//                     return window.__bl && __bl.error(e, {
//                         filename: "axios.js"
//                     }),
//                         Promise.reject(t)
//                 })
//         },
//         10: function (z, e, t) {
//             "use strict";
//             t.d(e, "q", function () {
//                 return u
//             }),
//                 t.d(e, "s", function () {
//                     return d
//                 }),
//                 t.d(e, "B", function () {
//                     return m
//                 }),
//                 t.d(e, "n", function () {
//                     return p
//                 }),
//                 t.d(e, "w", function () {
//                     return f
//                 }),
//                 t.d(e, "t", function () {
//                     return h
//                 }),
//                 t.d(e, "u", function () {
//                     return y
//                 }),
//                 t.d(e, "v", function () {
//                     return v
//                 }),
//                 t.d(e, "I", function () {
//                     return g
//                 }),
//                 t.d(e, "l", function () {
//                     return b
//                 }),
//                 t.d(e, "k", function () {
//                     return k
//                 }),
//                 t.d(e, "P", function () {
//                     return O
//                 }),
//                 t.d(e, "Q", function () {
//                     return w
//                 }),
//                 t.d(e, "R", function () {
//                     return N
//                 }),
//                 t.d(e, "d", function () {
//                     return E
//                 }),
//                 t.d(e, "G", function () {
//                     return j
//                 }),
//                 t.d(e, "y", function () {
//                     return C
//                 }),
//                 t.d(e, "D", function () {
//                     return S
//                 }),
//                 t.d(e, "z", function () {
//                     return I
//                 }),
//                 t.d(e, "r", function () {
//                     return x
//                 }),
//                 t.d(e, "i", function () {
//                     return T
//                 }),
//                 t.d(e, "c", function () {
//                     return P
//                 }),
//                 t.d(e, "b", function () {
//                     return _
//                 }),
//                 t.d(e, "a", function () {
//                     return L
//                 }),
//                 t.d(e, "o", function () {
//                     return A
//                 }),
//                 t.d(e, "L", function () {
//                     return M
//                 }),
//                 t.d(e, "O", function () {
//                     return F
//                 }),
//                 t.d(e, "H", function () {
//                     return q
//                 }),
//                 t.d(e, "F", function () {
//                     return B
//                 }),
//                 t.d(e, "C", function () {
//                     return U
//                 }),
//                 t.d(e, "E", function () {
//                     return H
//                 }),
//                 t.d(e, "A", function () {
//                     return V
//                 }),
//                 t.d(e, "J", function () {
//                     return W
//                 }),
//                 t.d(e, "K", function () {
//                     return K
//                 }),
//                 t.d(e, "N", function () {
//                     return G
//                 }),
//                 t.d(e, "j", function () {
//                     return J
//                 }),
//                 t.d(e, "g", function () {
//                     return Q
//                 }),
//                 t.d(e, "f", function () {
//                     return $
//                 }),
//                 t.d(e, "e", function () {
//                     return Y
//                 }),
//                 t.d(e, "M", function () {
//                     return Z
//                 }),
//                 t.d(e, "x", function () {
//                     return X
//                 }),
//                 t.d(e, "h", function () {
//                     return ee
//                 }),
//                 t.d(e, "m", function () {
//                     return te
//                 }),
//                 t.d(e, "p", function () {
//                     return ne
//                 });
//             var e = t(35)
//                 , r = t.n(e)
//                 , e = t(5)
//                 , a = t.n(e)
//                 , e = t(172)
//                 , i = t.n(e)
//                 , e = t(0)
//                 , o = t.n(e)
//                 , c = t(258)
//                 , n = t(67);
//
//             function s(t, e) {
//                 var n, r = Object.keys(t);
//                 return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
//                 e && (n = n.filter(function (e) {
//                     return Object.getOwnPropertyDescriptor(t, e).enumerable
//                 })),
//                     r.push.apply(r, n)),
//                     r
//             }
//
//             function l(t) {
//                 for (var e = 1; e < arguments.length; e++) {
//                     var n = null != arguments[e] ? arguments[e] : {};
//                     e % 2 ? s(Object(n), !0).forEach(function (e) {
//                         a()(t, e, n[e])
//                     }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (e) {
//                         Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
//                     })
//                 }
//                 return t
//             }
//
//             function u(e) {
//                 var e = l({}, e)
//                     , t = e.protocol
//                     , n = e.host
//                     , e = e.port;
//                 return !e || "https:" === t && "443" === "".concat(e) || "http:" === t && "80" === "".concat(e) ? "".concat(t, "//").concat(n) : "".concat(t, "//").concat(n, ":").concat(e)
//             }
//
//             function d(e) {
//                 var t = e.injectConst
//                     , t = void 0 === t ? window.__INJECT_CONST__ : t
//                     , n = e.redirectUrl
//                     , n = void 0 === n ? "" : n
//                     , e = e.isJumpNewPage
//                     , e = void 0 !== e && e
//                     , e = "" === n || -1 < n.indexOf("http") ? "" : u(e ? t.webUrl : t.webSubUrl)
//                     , e = encodeURIComponent("".concat(e).concat(n))
//                     , n = t.loginPath;
//                 return e && (n += "?origin=".concat(e)),
//                     n
//             }
//
//             function m(e) {
//                 e = e.keyword;
//                 return encodeURIComponent(void 0 === e ? "" : e)
//             }
//
//             function p(e) {
//                 var t, n = e.proCatalogId, r = e.listShowStyle, a = e.query, a = void 0 === a ? {} : a, o = e.source,
//                     c = e.linkURL, e = e.levels;
//                 if (c)
//                     return c;
//                 if (1 === e || 2 === e)
//                     return "/list/catalogList-".concat(n, ".html?source=").concat(o);
//                 if (a && a.showType)
//                     return "/list/c-".concat(n, ".html?showType=").concat(a.showType, "&clp=").concat(a.clp);
//                 switch (r) {
//                     case 1:
//                         t = "/list/c-".concat(n, ".html?showType=list&clp=0");
//                         break;
//                     case 2:
//                         t = "/list/c-".concat(n, ".html?showType=sideList&clp=0");
//                         break;
//                     default:
//                         t = "/list/c-".concat(n, ".html?showType=pic&clp=1")
//                 }
//                 return t
//             }
//
//             function f(e) {
//                 e = e.injectConst,
//                     e = void 0 === e ? window.__INJECT_CONST__ : e;
//                 return "".concat(e.wwwOrigin, "/shoppingCart/cart.html")
//             }
//
//             function h(e) {
//                 var t = e.injectConst
//                     , n = void 0 === t ? window.__INJECT_CONST__ : t
//                     , t = e.productInfo
//                     , e = void 0 === t ? {} : t
//                     , t = (e.catalogs || []).map(function (e) {
//                     return {
//                         url: p(l(l({}, e), {}, {
//                             injectConst: n
//                         })),
//                         name: e.catalogName
//                     }
//                 });
//                 return [{
//                     url: "/",
//                     name: "首页"
//                 }].concat(r()(t), [{
//                     name: e.proSkuProductName
//                 }])
//             }
//
//             function y(e) {
//                 var t = e.proSkuNo
//                     , n = e.proSkuId
//                     , r = e.level4CatalogueId
//                     , a = e.keywords
//                     , o = e.detailType
//                     , c = e.scene
//                     , e = e.relationSkuNo
//                     , n = i.a.stringify(l({
//                     proSkuId: n,
//                     level4CatalogueId: r,
//                     keywords: a,
//                     scene: void 0 === c ? "" : c,
//                     relationSkuNo: void 0 === e ? "" : e
//                 }, null != o ? {
//                     detailType: o
//                 } : {}));
//                 return "/item/".concat(t, ".html").concat(n ? "?" + n : "")
//             }
//
//             function v(e, t) {
//                 var n = e.catalogId
//                     , r = e.brandIds
//                     , a = e.from
//                     , o = e.viewType
//                     , c = e.clp
//                     , i = e.sort
//                     , s = e.rangeFilter
//                     , l = e.extraFilter
//                     , u = e.keyword
//                     , d = e.properties
//                     , p = e.injectConst
//                     , e = e.originPath
//                     , f = []
//                     , i = (o && f.push("showType=".concat(o)),
//                 c && f.push("clp=".concat(c ? "1" : "0")),
//                 n && f.push("catalogId=".concat(n)),
//                 i && f.push("sort=".concat(i)),
//                 null != s && s.length && s.map(function (e) {
//                     "price" == e.rangeType ? f.push("priceRange=".concat(e.min, "-").concat(e.max)) : "moq" == e.rangeType && f.push("moqRange=".concat(e.min, "-").concat(e.max))
//                 }),
//                 l && (o = [],
//                 null != (c = l) && c.showIndustryFeatured && o.push("showIndustryFeatured"),
//                 null != c && c.inStock && o.push("inStock"),
//                     n = o.length ? "extraFilter=".concat(o.join("||")) : "") && f.push(n),
//                 !r || 1 === r.length && "" === r[0] || f.push("brandIds=".concat(r.join("||"))),
//                     function (e) {
//                         var t, n = 0 < arguments.length && void 0 !== e ? e : {}, r = [];
//                         for (t in n)
//                             n.hasOwnProperty(t) && r.push("".concat(t, "_").concat(n[t].join("||")));
//                         return r.join("^")
//                     }(d));
//                 return i && f.push("env=".concat(encodeURIComponent(i))),
//                 a && !t && f.push("from=".concat(a)),
//                 null != p && null != (s = p.query) && s.notNeedCorrect && f.push("notNeedCorrect=".concat(p.query.notNeedCorrect)),
//                 u && f.push("keyword=".concat(m({
//                     keyword: u
//                 }))),
//                 e + "?" + f.join("&")
//             }
//
//             function g(e, t) {
//                 e = "/goods/downLoadFileByPath/".concat(e, "?fileName=").concat(t.name, "&relativePath=").concat(t.href);
//                 return "/zkhweb/donwFiles/".concat(encodeURIComponent(t.name), "?target=").concat(encodeURIComponent(e))
//             }
//
//             function b(e, t) {
//                 t = i.a.stringify(t);
//                 return "/content/list/c-".concat(e, ".html").concat(t ? "?" + t : "")
//             }
//
//             function k(e) {
//                 var t = e.articleId;
//                 return (2 === e.newsPostType ? "/content/live-" : "/content/article-").concat(t, ".html")
//             }
//
//             t(195);
//             var O = "//static.zkh360.com/image/2022-02-21/logo220221-1645424922414.png"
//                 , w = "//static.zkh360.com/image/2022-09-30/zkhLogo150White-1664522920906.png"
//                 , N = "//static.zkh360.com/logo/logo-2022-10.png"
//                 , E = "//static.zkh360.com/image/2020-09-10/qs-1599728350361.jpg"
//                 , j = "//static.zkh360.com/image/2020-11-04/live-cover-default-1604482299976.jpg";
//
//             function C(e, t) {
//                 var n;
//                 if (t = t || window.__INJECT_CONST__,
//                     e.tagExist) {
//                     var r, a = "";
//                     switch (e.tagType) {
//                         case 1:
//                             a = p({
//                                 proCatalogId: e.tagId,
//                                 injectConst: t
//                             });
//                             break;
//                         case 2:
//                             void 0 === (r = {
//                                 brandId: e.tagId,
//                                 injectConst: t
//                             }).injectConst && window.__INJECT_CONST__,
//                                 a = "/list/b-".concat(r.brandId, ".html");
//                             break;
//                         case 3:
//                             r = {
//                                 industryNo: e.industryNo,
//                                 injectConst: t
//                             },
//                                 a = "/list/h-".concat(r.industryNo, ".html")
//                     }
//                     return a
//                 }
//                 return void 0 === (n = {
//                     keyword: e.tagName,
//                     injectConst: t
//                 }).injectConst && window.__INJECT_CONST__,
//                     n = m({
//                         keyword: n.keyword
//                     }),
//                     "/search.html?keywords=".concat(n)
//             }
//
//             function S(e) {
//                 var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : E;
//                 e.target.onerror = null,
//                     e.target.src = t
//             }
//
//             function I() {
//                 for (var e = location.search.substr(1), t = {}, n = e.length ? e.split("&") : [], r = n.length, a = 0; a < r; a++) {
//                     var o = n[a].split("=")
//                         , c = R(o[0])
//                         , o = R(o[1]);
//                     c && (t[c] = o)
//                 }
//                 return t
//             }
//
//             function x(e) {
//                 for (var e = e.split("?")[1], t = {}, n = e.length ? e.split("&") : [], r = n.length, a = 0; a < r; a++) {
//                     var o = n[a].split("=")
//                         , c = R(o[0])
//                         , o = R(o[1]);
//                     c && (t[c] = o)
//                 }
//                 return t
//             }
//
//             function T() {
//                 var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
//                 return !e || -1 < e.indexOf("imageMogr2/format/webp") || -1 < e.indexOf("x-oss-process=image/format,webp") || -1 < e.indexOf("x-oss-process=style/WEBPCOM_style") || -1 < e.indexOf("x-oss-process=style/webp_origin50") ? e : e.indexOf("x-oss-process=style/") < 0 && -1 < e.indexOf("static.zkh360.com") ? "".concat(e).concat(-1 < e.indexOf("?") ? "&" : "?", "imageMogr2/format/webp") : e.indexOf("x-oss-process") < 0 && (-1 < e.indexOf("imart360") || -1 < e.indexOf("zkh360")) ? "".concat(e).concat(-1 < e.indexOf("?") ? "&" : "?", "x-oss-process=image/format,webp") : -1 < e.indexOf("x-oss-process=style/common_style") ? e.replace("common_style", "WEBPCOM_style") : -1 < e.indexOf("x-oss-process=style/no_watermark") ? e.replace("no_watermark", "webp_nowatermark") : -1 < e.indexOf("x-oss-process=style/origin_50") ? e.replace("origin_50", "webp_origin50") : e
//             }
//
//             function P() {
//                 try {
//                     return 0 == document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
//                 } catch (e) {
//                     return !1
//                 }
//             }
//
//             var _ = function () {
//                 return {
//                     header: {
//                         name: "个人中心"
//                     },
//                     menus: [{
//                         name: "订单中心",
//                         children: [{
//                             name: "我的订单",
//                             link: "/user/myOrders.html",
//                             relatedLink: ["/user/myOrderDetail"]
//                         }, {
//                             name: "订单审批",
//                             link: "/user/approvalList.html",
//                             relatedLink: ["/user/approveDetail", "/user/applyDetail"]
//                         }, {
//                             name: "我的询价",
//                             link: "/user/myInquiryOrders.html"
//                         }, {
//                             name: "我的售后",
//                             link: "/user/afterSale/list.html"
//                         }]
//                     }, {
//                         name: "企业管理",
//                         children: [{
//                             name: "企业订单",
//                             key: "orgOrder",
//                             link: "/user/teamOrderList.html",
//                             relatedLink: ["/user/teamOrderDetail"]
//                         }, {
//                             name: "企业审批单",
//                             key: "orgApprovalOrder",
//                             link: "/user/teamApplyList.html",
//                             relatedLink: ["/user/teamApplyDetail"]
//                         }, {
//                             name: "用户管理",
//                             key: "userManage",
//                             link: "/user/groupMember.html"
//                         }, {
//                             name: "角色管理",
//                             key: "roleManage",
//                             link: "/user/roleManage.html"
//                         }, {
//                             name: "流程管理\t",
//                             key: "processManage",
//                             link: "/user/approveAdmin.html"
//                         }, {
//                             name: "物料管理",
//                             key: "materialManage",
//                             link: "/user/productMaterial.html"
//                         }, {
//                             name: "成本中心管理",
//                             key: "costCenterManage",
//                             link: "/user/costCenter.html"
//                         }, {
//                             name: "用户采购配置",
//                             key: "userPurchaseConfig",
//                             link: "/user/userPurchase.html"
//                         }, {
//                             name: "成为尊享会员",
//                             key: "becomeVIP",
//                             link: "/user/groupUpgrade.html"
//                         }, {
//                             name: "企业配置中心",
//                             key: "customerConfigCenter",
//                             link: "/user/customerConfigCenter.html"
//                         }]
//                     }, {
//                         name: "商品池管理",
//                         children: [{
//                             name: "商品池管理",
//                             link: "/user/productPool.html"
//                         }]
//                     }, {
//                         name: "我关注的",
//                         children: [{
//                             name: "需求清单",
//                             link: "/user/demandList.html"
//                         }, {
//                             name: "浏览历史",
//                             link: "/user/myBrowse.html"
//                         }, {
//                             name: "关注/收藏",
//                             link: "/user/myFavorite.html"
//                         }, {
//                             name: "问答列表",
//                             link: "/user/qaList.html"
//                         }, {
//                             name: "下载中心",
//                             link: "/user/downloadCenter.html"
//                         }]
//                     }, {
//                         name: "采购分析",
//                         children: [{
//                             name: "金额统计",
//                             link: "/user/purchaseReport/amount.html"
//                         }, {
//                             name: "商品统计",
//                             link: "/user/purchaseReport/product.html"
//                         }]
//                     }, {
//                         name: "账号中心",
//                         children: [{
//                             name: "账号与安全",
//                             link: "/view/UserSection/editPersonInvoiceTitle.html"
//                         }, {
//                             name: "发票抬头管理",
//                             link: "/view/UserSection/ChangeInvoice.html"
//                         }, {
//                             name: "地址管理",
//                             link: "/user/address.html"
//                         }, {
//                             name: "我的优惠券",
//                             link: "/user/coupon.html"
//                         }, {
//                             name: "账号注销",
//                             link: "/user/accountCancel.html"
//                         }, {
//                             name: "推荐管理",
//                             link: "/user/individualization.html"
//                         }, {
//                             name: "我的额度",
//                             link: "/user/amount.html"
//                         }]
//                     }]
//                 }
//             }
//                 , L = function () {
//                 return {
//                     header: {
//                         name: "帮助中心"
//                     },
//                     menus: [{
//                         name: "个人中心",
//                         children: [{
//                             name: "如何注册",
//                             link: "/help/log-in.html"
//                         }, {
//                             name: "尊享会员权益",
//                             link: "/help/membership-benefits.html"
//                         }, {
//                             name: "升级专属商城",
//                             link: "/help/upgrade.html"
//                         }, {
//                             name: "用户协议",
//                             link: "/help/terms.html"
//                         }, {
//                             name: "忘记密码",
//                             link: "/help/forgot-password.html"
//                         }, {
//                             name: "如何查看名片",
//                             link: "/help/card.html"
//                         }]
//                     }, {
//                         name: "新手指南",
//                         children: [{
//                             name: "如何下单",
//                             link: "/help/orders.html"
//                         }, {
//                             name: "如何询价",
//                             link: "/help/prices.html"
//                         }, {
//                             name: "如何支付",
//                             link: "/help/payments.html"
//                         }, {
//                             name: "如何查看订单进度",
//                             link: "/help/order-status.html"
//                         }, {
//                             name: "如何导出或打印订单",
//                             link: "/help/printing-orders.html"
//                         }, {
//                             name: "价格说明",
//                             link: "/help/price-details.html"
//                         }]
//                     }, {
//                         name: "配送政策",
//                         children: [{
//                             name: "运费政策",
//                             link: "/help/shipping-inspections.html#section1"
//                         }, {
//                             name: "发货交期说明",
//                             link: "/help/shipping-inspections.html#section2"
//                         }, {
//                             name: "验货",
//                             link: "/help/shipping-inspections.html#section3"
//                         }]
//                     }, {
//                         name: "售后服务",
//                         children: [{
//                             name: "售后政策",
//                             link: "/help/returns-replacements.html"
//                         }, {
//                             name: "投诉与建议",
//                             link: "/help/feedbacks.html"
//                         }]
//                     }, {
//                         name: "常见问题",
//                         children: [{
//                             name: "发票管理",
//                             link: "/help/invoices.html"
//                         }, {
//                             name: "地址管理",
//                             link: "/help/address.html"
//                         }, {
//                             name: "如何查看协议商品",
//                             link: "/help/deal.html"
//                         }, {
//                             name: "如何在线审批",
//                             link: "/help/online-approval.html"
//                         }, {
//                             name: "如何组织管理",
//                             link: "/help/organizations-management.html"
//                         }]
//                     }, {
//                         name: "关于我们",
//                         children: [{
//                             name: "公司简介",
//                             link: "/help/about-us.html"
//                         }, {
//                             name: "联系我们",
//                             link: "/help/contact-us.html"
//                         }, {
//                             name: "加入我们",
//                             link: "http://imart360.zhiye.com/"
//                         }, {
//                             name: "分公司介绍",
//                             link: "/help/subsidiaries.html"
//                         }]
//                     }]
//                 }
//             }
//                 , D = {
//                 0: "待支付",
//                 2: "待发货",
//                 3: "交易成功",
//                 4: "已取消",
//                 5: "部分取消",
//                 6: "部分发货",
//                 7: "部分支付",
//                 8: "已发货",
//                 11: "待发货(集货中)"
//             };
//
//             function A(e, t, n) {
//                 if ("approval" === t) {
//                     if (-1 == n)
//                         return "已取消";
//                     if (1 !== n)
//                         return "待支付"
//                 }
//                 return 3 == e.orderInquiryPayType || 4 == e.orderInquiryPayType ? 0 == e.sapSyncStatus ? 0 != e.orderInquiryStatus ? D[e.orderInquiryStatus] : "待发货" : 0 != e.orderInquiryStatus ? D[e.orderInquiryStatus] : "订单待确认" : D[e.orderInquiryStatus]
//             }
//
//             function M(e, t) {
//                 var n, r;
//                 t.getFieldError(e) && (n = t.getFieldValue(e),
//                     (r = {})[e] = {
//                         value: n,
//                         error: ""
//                     },
//                     t.setFields(l({}, r)))
//             }
//
//             var F = [{
//                 value: 1,
//                 label: "石油化工"
//             }, {
//                 value: 2,
//                 label: "食品饮料"
//             }, {
//                 value: 3,
//                 label: "冶金"
//             }, {
//                 value: 4,
//                 label: "电子"
//             }, {
//                 value: 5,
//                 label: "电器机械和器材"
//             }, {
//                 value: 6,
//                 label: "汽车"
//             }, {
//                 value: 7,
//                 label: "纺织服装"
//             }, {
//                 value: 8,
//                 label: "非金属矿产（水泥）"
//             }, {
//                 value: 9,
//                 label: "电力"
//             }, {
//                 value: 10,
//                 label: "建筑行业"
//             }, {
//                 value: 11,
//                 label: "通用设备"
//             }, {
//                 value: 12,
//                 label: "采矿业"
//             }, {
//                 value: 13,
//                 label: "金属制品"
//             }, {
//                 value: 14,
//                 label: "专用设备"
//             }, {
//                 value: 15,
//                 label: "医药"
//             }, {
//                 value: 16,
//                 label: "造纸印刷"
//             }, {
//                 value: 17,
//                 label: "交通运输设备"
//             }, {
//                 value: 18,
//                 label: "烟草"
//             }, {
//                 value: 19,
//                 label: "其他制造业"
//             }, {
//                 value: 20,
//                 label: "批发零售"
//             }, {
//                 value: 21,
//                 label: "其他行业"
//             }]
//                 , q = [{
//                 value: 1,
//                 label: "采购、总务"
//             }, {
//                 value: 2,
//                 label: "设计、技术人员"
//             }, {
//                 value: 3,
//                 label: "设计兼采购"
//             }, {
//                 value: 4,
//                 label: "维护人员"
//             }, {
//                 value: 5,
//                 label: "品质管理"
//             }, {
//                 value: 6,
//                 label: "生产制造、安装工事人员"
//             }, {
//                 value: 7,
//                 label: "管理层"
//             }, {
//                 value: 8,
//                 label: "其它"
//             }]
//                 , B = [{
//                 value: "15",
//                 label: "劳保及安全"
//             }, {
//                 value: "16",
//                 label: "润滑及胶黏"
//             }, {
//                 value: "13",
//                 label: "办公及清洁"
//             }, {
//                 value: "14",
//                 label: "搬运及存储"
//             }, {
//                 value: "5",
//                 label: "检测及仪表"
//             }, {
//                 value: "6",
//                 label: "焊接及磨具"
//             }, {
//                 value: "7",
//                 label: "紧固及密封"
//             }, {
//                 value: "8",
//                 label: "泵阀及管件"
//             }, {
//                 value: "1",
//                 label: "实验室试剂"
//             }, {
//                 value: "2",
//                 label: "实验室耗材"
//             }, {
//                 value: "3",
//                 label: "实验室设备"
//             }, {
//                 value: "4",
//                 label: "实验室仪器"
//             }, {
//                 value: "9",
//                 label: "气动及液压"
//             }, {
//                 value: "10",
//                 label: "机械及轴承"
//             }, {
//                 value: "11",
//                 label: "电气及工控"
//             }, {
//                 value: "12",
//                 label: "照明及暖通"
//             }, {
//                 value: "17",
//                 label: "刀具及量具"
//             }, {
//                 value: "18",
//                 label: "工具及耗材"
//             }];
//
//             function U() {
//                 var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
//                 return 1 < arguments.length && void 0 !== arguments[1] && arguments[1] && e.ifCanSaleThisRegion && e.purchasable && e.skuState
//             }
//
//             var H = {
//                 1: [{
//                     id: 3,
//                     desc: "电子普通发票"
//                 }, {
//                     id: 2,
//                     desc: "增值税专用发票",
//                     disabled: !0
//                 }],
//                 2: [{
//                     id: 2,
//                     desc: "增值税专用发票"
//                 }, {
//                     id: 3,
//                     desc: "电子普通发票"
//                 }, {
//                     id: 1,
//                     desc: "普通发票"
//                 }]
//             }
//                 , V = function (e) {
//                 var t = e.origin
//                     , n = e.pathname
//                     , e = e.href;
//                 return /^\/item\/[A-Za-z0-9]*.html$/.test(n) ? "".concat(t, "/item") : /^\/detail\/[A-Za-z0-9]*.html$/.test(n) ? "".concat(t, "/detail") : e
//             }
//                 , W = {
//                 1: "非常差",
//                 2: "差",
//                 3: "一般",
//                 4: "满意",
//                 5: "非常满意"
//             }
//                 , K = {
//                 1: "1分",
//                 2: "2分",
//                 3: "3分",
//                 4: "4分",
//                 5: "5分"
//             }
//                 , G = {
//                 1: "未审核",
//                 2: "已删除",
//                 3: "正常"
//             }
//                 , J = function () {
//                 var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []
//                     , t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1
//                     , e = e.filter(function (e) {
//                     return e.levels === t
//                 });
//                 return e && e.length ? e[0].catalogName : ""
//             }
//                 , Q = function (e) {
//                 if (e)
//                     return e.map(function (e) {
//                         return {
//                             label: "".concat(e.approvalStatusText, "(").concat(e.skuList && e.skuList.length, ")")
//                         }
//                     })
//             }
//                 , $ = function (e) {
//                 return e && e[0] && 0 === e[0].approvalStatus ? e[0].skuList : []
//             }
//                 , Y = function (e, t, n) {
//                 return !t && e && e[0] && 0 === e[0].approvalStatus ? n : e[t] && e[t].skuList
//             }
//                 , Z = function (e) {
//                 var t = e.filter(function (e) {
//                     return 1 === e.status
//                 })
//                     , e = e.filter(function (e) {
//                     return 0 === e.status
//                 });
//                 return {
//                     passSkuNoList: t.map(function (e) {
//                         return e.proSkuNo
//                     }),
//                     rejectSkuNoList: e.map(function (e) {
//                         return e.proSkuNo
//                     })
//                 }
//             };
//
//             function X(e, t) {
//                 if (3 == e.orderInquiryPayType && 0 == e.orderInquiryStatus) {
//                     if (0 !== e.sapSyncStatus)
//                         return o.a.createElement("div", {
//                             className: "status-info-wrap"
//                         }, o.a.createElement("p", {
//                             style: {
//                                 "font-size": "16px",
//                                 color: "#333"
//                             }
//                         }, "订单待确认"), e.countDownSeconds && e.showCountDown ? o.a.createElement(c.a, {
//                             seconds: e.countDownSeconds
//                         }) : "", e.sapSyncStatus ? "" : o.a.createElement("a", {
//                             className: "link",
//                             href: "/help/payments.html"
//                         }, "线下转账操作说明"))
//                 } else if (4 == e.orderInquiryPayType) {
//                     if (4 == e.orderInquiryStatus)
//                         return o.a.createElement("div", {
//                             className: "status-info-wrap"
//                         }, o.a.createElement("p", {
//                             style: {
//                                 "font-size": "16px",
//                                 color: "#333"
//                             }
//                         }, "已取消"), o.a.createElement("p", null, "取消原因：", o.a.createElement("span", {
//                             style: {
//                                 color: "#f74747"
//                             }
//                         }, e.orderInquiryCancelReason || "您主动取消")));
//                     if (0 !== e.sapSyncStatus)
//                         return o.a.createElement("div", {
//                             className: "status-info-wrap"
//                         }, o.a.createElement("p", {
//                             style: {
//                                 "font-size": "16px",
//                                 color: "#333"
//                             }
//                         }, "订单待确认"))
//                 } else {
//                     var n;
//                     if (0 == e.orderInquiryStatus)
//                         return n = null,
//                         "myOrderDetail" === t && (n = o.a.createElement("a", {
//                             href: "/payment/onlinepay.html?ordernum=".concat(e.orderInquiryNo, "&totalmoney=").concat(e.orderInquiryTotalMoney),
//                             className: "btn-order"
//                         }, "立即支付")),
//                             o.a.createElement("div", {
//                                 className: "status-info-wrap"
//                             }, o.a.createElement("p", {
//                                 style: {
//                                     "font-size": "16px",
//                                     color: "#333"
//                                 }
//                             }, "待支付"), e.countDownSeconds && e.showCountDown ? o.a.createElement(c.a, {
//                                 seconds: e.countDownSeconds
//                             }) : "", o.a.createElement("p", null, n));
//                     if (4 == e.orderInquiryStatus || 5 == e.orderInquiryStatus)
//                         return o.a.createElement("div", {
//                             className: "status-info-wrap"
//                         }, o.a.createElement("p", {
//                             style: {
//                                 "font-size": "16px",
//                                 color: "#333"
//                             }
//                         }, D[e.orderInquiryStatus]), o.a.createElement("p", null, "取消原因：", o.a.createElement("span", {
//                             style: {
//                                 "font-size": "16px",
//                                 color: "#f74747"
//                             }
//                         }, e.orderInquiryCancelReason || "您主动取消")))
//                 }
//                 return ""
//             }
//
//             function ee(e) {
//                 return [{
//                     arrived: !0,
//                     bottomText: "提交订单",
//                     bottomDateTime: e.insertDate
//                 }, {
//                     arrived: !!e.orderInquiryPayTime,
//                     bottomText: "订单支付",
//                     bottomDateTime: e.orderInquiryPayTime
//                 }, {
//                     arrived: !!e.actualDeliveryDate,
//                     bottomText: "商品发货",
//                     bottomDateTime: e.actualDeliveryDate
//                 }, {
//                     arrived: !!e.orderInquiryFinishTime,
//                     bottomText: "收货完成",
//                     bottomDateTime: e.orderInquiryFinishTime
//                 }]
//             }
//
//             function te(e) {
//                 return e.serviceSku ? o.a.createElement("div", {
//                     className: "serve-date-tip"
//                 }, "服务预约", o.a.createElement(n.a, {
//                     placement: "top",
//                     title: e.supplierTelephone || ""
//                 }, o.a.createElement("span", null, o.a.createElement("i", {
//                     class: "iconfont"
//                 }, "")))) : e.deliveryException ? e.exceptionText : o.a.createElement("div", {
//                     className: "deliver-wrap"
//                 }, e.deliveryDateText ? o.a.createElement("div", null, "预计", e.deliveryDateText, o.a.createElement("br", null), "发货") : "", e.arrivalDateText ? o.a.createElement("div", null, "预计", e.arrivalDateText, o.a.createElement("br", null), "送达") : "")
//             }
//
//             function ne(e, t) {
//                 return 3 == e.orderInquiryPayType || 4 == e.orderInquiryPayType ? 0 == e.sapSyncStatus ? 0 != t.status ? D[t.status] : "待发货" : "订单待确认" : D[t.status]
//             }
//
//             var R = function (e) {
//                 if (!e)
//                     return e;
//                 var t = "";
//                 try {
//                     t = decodeURI(e)
//                 } catch (e) {
//                     console.log("decodeURI Error", e)
//                 }
//                 return t
//             }
//         },
//         13: function (t, e) {
//             function u(t, e, n, r, o, i, a) {
//                 try {
//                     var s = t[i](a)
//                         , u = s.value
//                 } catch (t) {
//                     return n(t)
//                 }
//                 s.done ? e(u) : Promise.resolve(u).then(r, o)
//             }
//
//             t.exports = function (s) {
//                 return function () {
//                     var t = this
//                         , a = arguments;
//                     return new Promise(function (e, n) {
//                             var r = s.apply(t, a);
//
//                             function o(t) {
//                                 u(r, e, n, o, i, "next", t)
//                             }
//
//                             function i(t) {
//                                 u(r, e, n, o, i, "throw", t)
//                             }
//
//                             o(void 0)
//                         }
//                     )
//                 }
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         },
//         18: function (e, t) {
//             function n(t) {
//                 return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
//                     return t.__proto__ || Object.getPrototypeOf(t)
//                 }
//                     ,
//                     e.exports.__esModule = !0,
//                     e.exports.default = e.exports,
//                     n(t)
//             }
//
//             e.exports = n,
//                 e.exports.__esModule = !0,
//                 e.exports.default = e.exports
//         },
//         20: function (t, e) {
//             t.exports = function (t) {
//                 if (void 0 === t)
//                     throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//                 return t
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         }
//         , 21: function (t, e) {
//             t.exports = function (t, e) {
//                 if (!(t instanceof e))
//                     throw new TypeError("Cannot call a class as a function")
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         }
//         , 22: function (t, e, n) {
//             var r = n(852);
//             t.exports = function (t, e) {
//                 if ("function" != typeof e && null !== e)
//                     throw new TypeError("Super expression must either be null or a function");
//                 t.prototype = Object.create(e && e.prototype, {
//                     constructor: {
//                         value: t,
//                         writable: !0,
//                         configurable: !0
//                     }
//                 }),
//                     Object.defineProperty(t, "prototype", {
//                         writable: !1
//                     }),
//                 e && r(t, e)
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         }
//         , 23: function (t, e, n) {
//             var o = n(589);
//
//             function r(t, e) {
//                 for (var n = 0; n < e.length; n++) {
//                     var r = e[n];
//                     r.enumerable = r.enumerable || !1,
//                         r.configurable = !0,
//                     "value" in r && (r.writable = !0),
//                         Object.defineProperty(t, o(r.key), r)
//                 }
//             }
//
//             t.exports = function (t, e, n) {
//                 return e && r(t.prototype, e),
//                 n && r(t, n),
//                     Object.defineProperty(t, "prototype", {
//                         writable: !1
//                     }),
//                     t
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         }
//         , 24: function (t, e, n) {
//             var r = n(6).default
//                 , o = n(20);
//             t.exports = function (t, e) {
//                 if (e && ("object" === r(e) || "function" == typeof e))
//                     return e;
//                 if (void 0 !== e)
//                     throw new TypeError("Derived constructors may only return object or undefined");
//                 return o(t)
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         }
//         , 25: function (t, e, n) {
//             "use strict";
//             n.d(e, "a", function () {
//                 return o
//             });
//             var r = n(452);
//
//             function o(t, e, n) {
//                 return (e = Object(r.a)(e)) in t ? Object.defineProperty(t, e, {
//                     value: n,
//                     enumerable: !0,
//                     configurable: !0,
//                     writable: !0
//                 }) : t[e] = n,
//                     t
//             }
//         },
//         35: function (t, e, n) {
//             var r = n(743)
//                 , o = n(744)
//                 , i = n(588)
//                 , a = n(745);
//             t.exports = function (t) {
//                 return r(t) || o(t) || i(t) || a()
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         },
//         42: function (z, e, t) {
//             "use strict";
//             t.d(e, "C", function () {
//                 return n
//             }),
//                 t.d(e, "D", function () {
//                     return a
//                 }),
//                 t.d(e, "G", function () {
//                     return o
//                 }),
//                 t.d(e, "B", function () {
//                     return c
//                 }),
//                 t.d(e, "z", function () {
//                     return i
//                 }),
//                 t.d(e, "h", function () {
//                     return s
//                 }),
//                 t.d(e, "p", function () {
//                     return l
//                 }),
//                 t.d(e, "q", function () {
//                     return u
//                 }),
//                 t.d(e, "b", function () {
//                     return d
//                 }),
//                 t.d(e, "l", function () {
//                     return p
//                 }),
//                 t.d(e, "F", function () {
//                     return f
//                 }),
//                 t.d(e, "u", function () {
//                     return m
//                 }),
//                 t.d(e, "w", function () {
//                     return h
//                 }),
//                 t.d(e, "x", function () {
//                     return y
//                 }),
//                 t.d(e, "E", function () {
//                     return v
//                 }),
//                 t.d(e, "f", function () {
//                     return g
//                 }),
//                 t.d(e, "v", function () {
//                     return b
//                 }),
//                 t.d(e, "s", function () {
//                     return k
//                 }),
//                 t.d(e, "y", function () {
//                     return O
//                 }),
//                 t.d(e, "t", function () {
//                     return w
//                 }),
//                 t.d(e, "j", function () {
//                     return N
//                 }),
//                 t.d(e, "A", function () {
//                     return E
//                 }),
//                 t.d(e, "i", function () {
//                     return j
//                 }),
//                 t.d(e, "r", function () {
//                     return C
//                 }),
//                 t.d(e, "o", function () {
//                     return S
//                 }),
//                 t.d(e, "m", function () {
//                     return I
//                 }),
//                 t.d(e, "n", function () {
//                     return x
//                 }),
//                 t.d(e, "k", function () {
//                     return T
//                 }),
//                 t.d(e, "d", function () {
//                     return P
//                 }),
//                 t.d(e, "e", function () {
//                     return _
//                 }),
//                 t.d(e, "g", function () {
//                     return L
//                 }),
//                 t.d(e, "a", function () {
//                     return D
//                 }),
//                 t.d(e, "H", function () {
//                     return R
//                 }),
//                 t.d(e, "c", function () {
//                     return A
//                 });
//             var r = t(9);
//
//             function n(e) {
//                 var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
//                 return Object(r.a)({
//                     url: "/servezkhApi/search/searchHotWord/".concat(e),
//                     method: "get",
//                     params: {
//                         keyword: t
//                     }
//                 })
//             }
//
//             function a(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/adrecomment/ad/operation/trendingHashtag/".concat(e),
//                     method: "get"
//                 })
//             }
//
//             function o(e) {
//                 var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
//                 return Object(r.a)({
//                     url: "/servezkhApi/search/suggestResult",
//                     method: "post",
//                     params: {
//                         keyword: e,
//                         count: t
//                     }
//                 })
//             }
//
//             function c() {
//                 var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
//                 return Object(r.a)({
//                     url: "/servezkhApi/catalog/listIndexCatalogs",
//                     method: "get",
//                     config: e
//                 })
//             }
//
//             function i() {
//                 var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
//                     , t = 1 < arguments.length ? arguments[1] : void 0;
//                 return Object(r.a)({
//                     url: "/servezkhApi/catalog/1/homeFirstCatalogs",
//                     method: "get",
//                     config: e,
//                     params: {
//                         isDpm: t
//                     }
//                 })
//             }
//
//             function s() {
//                 var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1
//                     , t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
//                 return Object(r.a)({
//                     url: "/servezkhApi/catalog/getByLevel",
//                     method: "get",
//                     params: {
//                         level: e,
//                         name: t
//                     }
//                 })
//             }
//
//             function l(e) {
//                 var t = e.pageType
//                     , t = void 0 === t ? 0 : t
//                     , n = e.relationNo
//                     , n = void 0 === n ? "" : n
//                     , e = e.channel
//                     , e = void 0 === e ? 1 : e;
//                 return Object(r.a)({
//                     url: "/servezkhApi/xiaoneng/".concat(e, "/chatConfigInfo"),
//                     method: "get",
//                     params: {
//                         pageType: t,
//                         relationNo: n
//                     }
//                 })
//             }
//
//             function u(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/shoppingCarts/getCartType01List",
//                     method: "get",
//                     params: e
//                 })
//             }
//
//             function d(e) {
//                 var t = e.proSkuNos
//                     , e = e.cartType;
//                 return Object(r.a)({
//                     url: "/servezkhApi/shoppingCarts/batchDeleteCartSku",
//                     method: "post",
//                     data: {
//                         proSkuNos: t,
//                         cartType: e
//                     }
//                 })
//             }
//
//             function p() {
//                 var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
//                 return Object(r.a)({
//                     url: "/servezkhApi/userPersonAccount/1/loginUserInfo",
//                     method: "get",
//                     config: e
//                 })
//             }
//
//             function f(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/userPersonAccount/personalizedRecommendationSwitch",
//                     method: "post",
//                     data: e
//                 }, !0)
//             }
//
//             function m(e) {
//                 return Object(r.a)({
//                     url: e,
//                     method: "get"
//                 })
//             }
//
//             function h(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/userInvoices/invoiceInfoTitleList",
//                     method: "get",
//                     config: e
//                 })
//             }
//
//             function y(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/userInvoices/invoiceInfoTitlePage",
//                     method: "get",
//                     params: e
//                 })
//             }
//
//             function v(e) {
//                 e = e.invoiceInfoId;
//                 return Object(r.a)({
//                     url: "/servezkhApi/userPersonAccount/loginSetInvoiceTitle",
//                     method: "post",
//                     dataType: "json",
//                     params: {
//                         invoiceInfoId: e
//                     }
//                 })
//             }
//
//             function g(e) {
//                 var t = e.config
//                     , e = e.clientIp;
//                 return Object(r.a)({
//                     url: "/servezkhApi/region/getAddressByIp",
//                     method: "get",
//                     timeout: 1e3,
//                     config: t,
//                     params: {
//                         clientIp: e
//                     }
//                 }, !0)
//             }
//
//             function b(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/userFavoriteHistory",
//                     method: "get",
//                     dataType: "json",
//                     contentType: "application/json; charset=utf-8",
//                     params: e
//                 }, !0)
//             }
//
//             function k(e) {
//                 e = e.proSkuNo;
//                 return Object(r.a)({
//                     url: "/servezkhApi/userFavoriteHistory",
//                     method: "post",
//                     dataType: "json",
//                     contentType: "application/json; charset=utf-8",
//                     data: {
//                         proSkuNo: e
//                     }
//                 }, !0)
//             }
//
//             function O(e) {
//                 e = e.proSkuNo;
//                 return Object(r.a)({
//                     url: "/servezkhApi/userFavoriteHistory/".concat(e),
//                     method: "DELETE",
//                     contentType: "application/json; charset=utf-8",
//                     dataType: "json"
//                 }, !0)
//             }
//
//             function w(e, t) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/shoppingCarts/addSkuToCart",
//                     method: "post",
//                     data: e,
//                     params: {
//                         cityCode: t
//                     }
//                 })
//             }
//
//             function N(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/content/class/home/list",
//                     method: "get",
//                     config: e
//                 })
//             }
//
//             function E(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/orgUser/relation/acceptInviteAdd",
//                     method: "post",
//                     params: {
//                         inviteKey: e
//                     }
//                 })
//             }
//
//             function j(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/orgUser/relation/inviteInfo",
//                     method: "get",
//                     params: {
//                         code: e
//                     }
//                 })
//             }
//
//             function C() {
//                 return Object(r.a)({
//                     url: "/zkhweb/zkhAuth/signToken",
//                     method: "get"
//                 })
//             }
//
//             function S() {
//                 return Object(r.a)({
//                     url: "/zkhweb/zkhAuth/rsaKey",
//                     method: "get"
//                 })
//             }
//
//             function I() {
//                 return Object(r.a)({
//                     url: "/servezkhApi/regionals/provinces",
//                     method: "get"
//                 })
//             }
//
//             function x(e) {
//                 var t = e.type
//                     , e = e.id;
//                 return Object(r.a)({
//                     url: "/servezkhApi/regionals/".concat(t, "/").concat(e),
//                     method: "get"
//                 })
//             }
//
//             function T() {
//                 return Object(r.a)({
//                     url: "/servezkhApi/content/news/findInvalidPageNews",
//                     method: "get"
//                 })
//             }
//
//             function P(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/questionAnswer/feedback",
//                     method: "post",
//                     data: e
//                 })
//             }
//
//             function _(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/questionAnswer/feedbackSearch",
//                     method: "post",
//                     data: e
//                 })
//             }
//
//             function L() {
//                 return Object(r.a)({
//                     url: "/servezkhApi/userPersonAccount/agreement",
//                     method: "get"
//                 })
//             }
//
//             function D(e) {
//                 var t = e.id
//                     , e = e.version;
//                 return Object(r.a)({
//                     url: "/servezkhApi/userPersonAccount/agreement/consent/".concat(t, "/").concat(e),
//                     method: "post"
//                 })
//             }
//
//             function R(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/userBrowseHistory",
//                     method: "get",
//                     params: e
//                 })
//             }
//
//             function A(e) {
//                 return Object(r.a)({
//                     url: "/servezkhApi/userBrowseHistory/".concat(e),
//                     method: "delete"
//                 })
//             }
//         },
//         65: function (e, t) {
//             "use strict";
//             e.exports = function (e, t) {
//                 return function () {
//                     for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
//                         n[r] = arguments[r];
//                     return e.apply(t, n)
//                 }
//             }
//         },
//
//     67: function (e, t, n) {
//         "use strict";
//         n.d(t, "a", function () {
//             return r
//         });
//         var t = n(8)
//             , o = n.n(t)
//             , t = n(21)
//             , i = n.n(t)
//             , t = n(23)
//             , c = n.n(t)
//             , t = n(20)
//             , s = n.n(t)
//             , t = n(22)
//             , l = n.n(t)
//             , t = n(24)
//             , u = n.n(t)
//             , t = n(18)
//             , d = n.n(t)
//             , t = n(5)
//             , p = n.n(t)
//             , f = n(0)
//             , m = n.n(f)
//             , h = n(739)
//             , y = n(230);
//         var r = function (e) {
//             l()(a, e);
//             n = a,
//                 r = function () {
//                     if ("undefined" == typeof Reflect || !Reflect.construct)
//                         return !1;
//                     if (Reflect.construct.sham)
//                         return !1;
//                     if ("function" == typeof Proxy)
//                         return !0;
//                     try {
//                         return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
//                         })),
//                             !0
//                     } catch (e) {
//                         return !1
//                     }
//                 }();
//             var n, r, t = function () {
//                 var e, t = d()(n);
//                 return e = r ? (e = d()(this).constructor,
//                     Reflect.construct(t, arguments, e)) : t.apply(this, arguments),
//                     u()(this, e)
//             };
//
//             function a(e) {
//                 var c;
//                 return i()(this, a),
//                     c = t.call(this, e),
//                     p()(s()(c), "onVisibleChange", function (e) {
//                         c.setState({
//                             visible: e
//                         }),
//                             c.props.onVisibleChange(e)
//                     }),
//                     p()(s()(c), "onPopupAlign", function (e, t) {
//                         var n, r, a = c.getPlacements(), o = Object.keys(a).filter(function (e) {
//                             return a[e].points[0] === t.points[0] && a[e].points[1] === t.points[1]
//                         })[0];
//                         o && (n = e.getBoundingClientRect(),
//                             r = {
//                                 top: "50%",
//                                 left: "50%"
//                             },
//                             0 <= o.indexOf("top") || 0 <= o.indexOf("Bottom") ? r.top = "".concat(n.height - t.offset[1], "px") : (0 <= o.indexOf("Top") || 0 <= o.indexOf("bottom")) && (r.top = "".concat(-t.offset[1], "px")),
//                             0 <= o.indexOf("left") || 0 <= o.indexOf("Right") ? r.left = "".concat(n.width - t.offset[0], "px") : (0 <= o.indexOf("right") || 0 <= o.indexOf("Left")) && (r.left = "".concat(-t.offset[0], "px")),
//                             e.style.transformOrigin = "".concat(r.left, " ").concat(r.top))
//                     }),
//                     c.state = {
//                         visible: !1
//                     },
//                     c
//             }
//
//             return c()(a, [{
//                 key: "getPopupDomNode",
//                 value: function () {
//                     return this.refs.tooltip.getPopupDomNode()
//                 }
//             }, {
//                 key: "getPlacements",
//                 value: function () {
//                     var e = this.props
//                         , t = e.builtinPlacements
//                         , e = e.arrowPointAtCenter;
//                     return t || Object(y.a)({
//                         arrowPointAtCenter: e,
//                         verticalArrowShift: 8
//                     })
//                 }
//             }, {
//                 key: "render",
//                 value: function () {
//                     var e = this.props
//                         , t = e.prefixCls
//                         , n = e.title
//                         , r = e.overlay
//                         , e = e.children
//                         , a = this.state.visible
//                         , r = (n || r || (a = !1),
//                     "visible" in this.props && (a = this.props.visible),
//                     this.props.openClassName || "".concat(t, "-open"))
//                         , t = e && e.props && e.props.className ? "".concat(e.props.className, " ").concat(r) : r;
//                     return m.a.createElement(h.a, o()({
//                         overlay: n,
//                         visible: a,
//                         onPopupAlign: this.onPopupAlign,
//                         ref: "tooltip"
//                     }, this.props, {
//                         builtinPlacements: this.getPlacements(),
//                         onVisibleChange: this.onVisibleChange
//                     }), a ? Object(f.cloneElement)(e, {
//                         className: t
//                     }) : e)
//                 }
//             }]),
//                 a
//         }(m.a.Component);
//         p()(r, "defaultProps", {
//             prefixCls: "ant-tooltip",
//             placement: "top",
//             mouseEnterDelay: .1,
//             mouseLeaveDelay: .1,
//             onVisibleChange: function () {
//             },
//             arrowPointAtCenter: !1
//         })
//     },
//         172: function (t, e, n) {
//             "use strict";
//             var r = String.prototype.replace
//                 , o = /%20/g;
//             t.exports = {
//                 default: "RFC3986",
//                 formatters: {
//                     RFC1738: function (t) {
//                         return r.call(t, o, "+")
//                     },
//                     RFC3986: function (t) {
//                         return String(t)
//                     }
//                 },
//                 RFC1738: "RFC1738",
//                 RFC3986: "RFC3986"
//             }
//         },
//
//         230: function (e, t, n) {
//             "use strict";
//             n.d(t, "a", function () {
//                 return c
//             });
//             var r = n(688)
//                 , a = {
//                 adjustX: 1,
//                 adjustY: 1
//             }
//                 , o = [0, 0];
//
//             function c() {
//                 var e, t, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
//                 return n.arrowPointAtCenter ? (e = n.arrowWidth,
//                     t = n.horizontalArrowShift,
//                     n = n.verticalArrowShift,
//                     {
//                         left: {
//                             points: ["cr", "cl"],
//                             overflow: a,
//                             offset: [-4, 0],
//                             targetOffset: o
//                         },
//                         right: {
//                             points: ["cl", "cr"],
//                             overflow: a,
//                             offset: [4, 0],
//                             targetOffset: o
//                         },
//                         top: {
//                             points: ["bc", "tc"],
//                             overflow: a,
//                             offset: [0, -4],
//                             targetOffset: o
//                         },
//                         bottom: {
//                             points: ["tc", "bc"],
//                             overflow: a,
//                             offset: [0, 4],
//                             targetOffset: o
//                         },
//                         topLeft: {
//                             points: ["bl", "tc"],
//                             overflow: a,
//                             offset: [-((t = void 0 === t ? 16 : t) + (e = void 0 === e ? 5 : e)), -4],
//                             targetOffset: o
//                         },
//                         leftTop: {
//                             points: ["tr", "cl"],
//                             overflow: a,
//                             offset: [-4, -((n = void 0 === n ? 12 : n) + e)],
//                             targetOffset: o
//                         },
//                         topRight: {
//                             points: ["br", "tc"],
//                             overflow: a,
//                             offset: [t + e, -4],
//                             targetOffset: o
//                         },
//                         rightTop: {
//                             points: ["tl", "cr"],
//                             overflow: a,
//                             offset: [4, -(n + e)],
//                             targetOffset: o
//                         },
//                         bottomRight: {
//                             points: ["tr", "bc"],
//                             overflow: a,
//                             offset: [t + e, 4],
//                             targetOffset: o
//                         },
//                         rightBottom: {
//                             points: ["bl", "cr"],
//                             overflow: a,
//                             offset: [4, n + e],
//                             targetOffset: o
//                         },
//                         bottomLeft: {
//                             points: ["tl", "bc"],
//                             overflow: a,
//                             offset: [-(t + e), 4],
//                             targetOffset: o
//                         },
//                         leftBottom: {
//                             points: ["br", "cl"],
//                             overflow: a,
//                             offset: [-4, n + e],
//                             targetOffset: o
//                         }
//                     }) : r.placements
//             }
//         },
//         258: function (e, t, n) {
//             "use strict";
//             var r = n(1)
//                 , s = n.n(r)
//                 , l = n(0)
//                 , u = n.n(l);
//             n(867),
//                 t.a = function (e) {
//                     var t, n, r, a, o = e.seconds, e = Object(l.useState)(""), e = s()(e, 2), c = e[0], i = e[1];
//                     return Object(l.useEffect)(function () {
//                         var e = null;
//                         return 0 < c && (e = setTimeout(function () {
//                             i(c - 1)
//                         }, 1e3)),
//                             function () {
//                                 clearTimeout(e)
//                             }
//                     }),
//                         Object(l.useEffect)(function () {
//                             i(o)
//                         }, [o]),
//                         0 < c ? u.a.createElement("span", {
//                             className: "time-format-list",
//                             dangerouslySetInnerHTML: {
//                                 __html: (e = c,
//                                     a = "<span class='time'> " + parseInt(e) + " </span>秒",
//                                 60 < parseInt(e) && (t = parseInt(e) % 60,
//                                     a = "<span class='time'> " + (n = parseInt(e / 60)) + " </span>分<span class='time'> " + t + " </span>秒",
//                                 60 < n) && (n = parseInt(e / 60) % 60,
//                                     a = "<span class='time'> " + (r = parseInt(parseInt(e / 60) / 60)) + " </span>小时<span class='time'> " + n + " </span>分<span class='time'> " + t + " </span>秒",
//                                 24 < r) && (r = parseInt(parseInt(e / 60) / 60) % 24,
//                                     a = "<span class='time'> " + parseInt(parseInt(parseInt(e / 60) / 60) / 24) + " </span>天<span class='time'> " + r + " </span>小时<span class='time'> " + n + " </span>分<span class='time'> " + t + " </span>秒"),
//                                     a)
//                             },
//                             "data-v-00d97da9": ""
//                         }) : ""
//                 }
//         },
//         587: function (t, e) {
//             t.exports = function (t, e) {
//                 (null == e || e > t.length) && (e = t.length);
//                 for (var n = 0, r = new Array(e); n < e; n++)
//                     r[n] = t[n];
//                 return r
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         },
//         588: function (t, e, n) {
//             var r = n(587);
//             t.exports = function (t, e) {
//                 var n;
//                 if (t)
//                     return "string" == typeof t ? r(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         }
//         ,
//         589: function (t, e, n) {
//             var r = n(6).default
//                 , o = n(746);
//             t.exports = function (t) {
//                 t = o(t, "string");
//                 return "symbol" === r(t) ? t : String(t)
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         },
//
//     688: function(e, t, n) {
//         "use strict";
//         t.__esModule = !0;
//         var o = {
//             adjustX: 1,
//             adjustY: 1
//         }
//           , r = [0, 0]
//           , o = t.placements = {
//             left: {
//                 points: ["cr", "cl"],
//                 overflow: o,
//                 offset: [-4, 0],
//                 targetOffset: r
//             },
//             right: {
//                 points: ["cl", "cr"],
//                 overflow: o,
//                 offset: [4, 0],
//                 targetOffset: r
//             },
//             top: {
//                 points: ["bc", "tc"],
//                 overflow: o,
//                 offset: [0, -4],
//                 targetOffset: r
//             },
//             bottom: {
//                 points: ["tc", "bc"],
//                 overflow: o,
//                 offset: [0, 4],
//                 targetOffset: r
//             },
//             topLeft: {
//                 points: ["bl", "tl"],
//                 overflow: o,
//                 offset: [0, -4],
//                 targetOffset: r
//             },
//             leftTop: {
//                 points: ["tr", "tl"],
//                 overflow: o,
//                 offset: [-4, 0],
//                 targetOffset: r
//             },
//             topRight: {
//                 points: ["br", "tr"],
//                 overflow: o,
//                 offset: [0, -4],
//                 targetOffset: r
//             },
//             rightTop: {
//                 points: ["tl", "tr"],
//                 overflow: o,
//                 offset: [4, 0],
//                 targetOffset: r
//             },
//             bottomRight: {
//                 points: ["tr", "br"],
//                 overflow: o,
//                 offset: [0, 4],
//                 targetOffset: r
//             },
//             rightBottom: {
//                 points: ["bl", "br"],
//                 overflow: o,
//                 offset: [4, 0],
//                 targetOffset: r
//             },
//             bottomLeft: {
//                 points: ["tl", "bl"],
//                 overflow: o,
//                 offset: [0, 4],
//                 targetOffset: r
//             },
//             leftBottom: {
//                 points: ["br", "bl"],
//                 overflow: o,
//                 offset: [-4, 0],
//                 targetOffset: r
//             }
//         };
//         t.default = o
//     },
//         739: function(t, e) {
//             t.exports = function(t) {
//                 if (Array.isArray(t))
//                     return t
//             }
//             ,
//             t.exports.__esModule = !0,
//             t.exports.default = t.exports
//         },
//         743: function (t, e, n) {
//             var r = n(587);
//             t.exports = function (t) {
//                 if (Array.isArray(t))
//                     return r(t)
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         }
//         , 744: function (t, e) {
//             t.exports = function (t) {
//                 if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
//                     return Array.from(t)
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         }
//         , 745: function (t, e) {
//             t.exports = function () {
//                 throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         }
//         ,
//         746: function (t, e, n) {
//             var r = n(6).default;
//             t.exports = function (t, e) {
//                 if ("object" !== r(t) || null === t)
//                     return t;
//                 var n = t[Symbol.toPrimitive];
//                 if (void 0 === n)
//                     return ("string" === e ? String : Number)(t);
//                 n = n.call(t, e || "default");
//                 if ("object" !== r(n))
//                     return n;
//                 throw new TypeError("@@toPrimitive must return a primitive value.")
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         },
//         852: function(n, t) {
//             function r(t, e) {
//                 return n.exports = r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
//                     return t.__proto__ = e,
//                     t
//                 }
//                 ,
//                 n.exports.__esModule = !0,
//                 n.exports.default = n.exports,
//                 r(t, e)
//             }
//             n.exports = r,
//             n.exports.__esModule = !0,
//             n.exports.default = n.exports
//         },
//         853: function (t, e) {
//             t.exports = function (t) {
//                 if (Array.isArray(t))
//                     return t
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         }
//         , 854: function (t, e) {
//             t.exports = function (t, e) {
//                 var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
//                 if (null != n) {
//                     var r, o, i, a, s = [], u = !0, c = !1;
//                     try {
//                         if (i = (n = n.call(t)).next,
//                         0 === e) {
//                             if (Object(n) !== n)
//                                 return;
//                             u = !1
//                         } else
//                             for (; !(u = (r = i.call(n)).done) && (s.push(r.value),
//                             s.length !== e); u = !0)
//                                 ;
//                     } catch (t) {
//                         c = !0,
//                             o = t
//                     } finally {
//                         try {
//                             if (!u && null != n.return && (a = n.return(),
//                             Object(a) !== a))
//                                 return
//                         } finally {
//                             if (c)
//                                 throw o
//                         }
//                     }
//                     return s
//                 }
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         }
//         , 855: function (t, e) {
//             t.exports = function () {
//                 throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//             }
//                 ,
//                 t.exports.__esModule = !0,
//                 t.exports.default = t.exports
//         },
//
//         867: function (e, t, n) {
//         },
//
//     }
// );


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


o = '-----BEGIN PUBLIC KEY-----' +
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbY2WDZ40at3cyZ/OlxhYPPdwE4w38gVJIBJwv/lLGFIs2pUfcWxeeFol5FJj5H4yefW8EDE/rXj3A4MD9pn/Cx/1E3NCiCxRgvAeOECJ6YNZFG8ELtYUD2dZS0iDBnRbzZqaqzf/BECVX/zfcabTzC9qvoQDJPpyQviHh0+QBNQIDAQAB' +
    '-----END PUBLIC KEY-----'
c = "1700726408227"
navigator = {}
l = {}
l.init = function (t) {
    if (t instanceof ArrayBuffer && (t = new Uint8Array(t)),
    (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)),
    t instanceof Uint8Array) {
        for (var e = t.byteLength, r = [], i = 0; i < e; i++)
            r[i >>> 2] |= t[i] << 24 - i % 4 * 8;
        n.call(this, r, e)
    } else
        n.apply(this, arguments)
}
Latin1 = {
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
        return {"sigBytes": e, "words":n}
    }
}

get_E = function () {
    t = (new Date).getTime().toString()
    N = (t + t + t).substring(0, 32)

    return Latin1.parse(N)
}

case31 = function (traceId, data) {
    // 设置公钥
    const publicKey = o; // 这里填写您的公钥
    const publicKeyPem = forge.pki.publicKeyFromPem(publicKey);

    // 加密数据
    function encryptWithPublicKey(data, publicKey) {
        return forge.util.encode64(publicKey.encrypt(data));
    }

    // 使用公钥加密
    const encryptedData = encryptWithPublicKey(traceId, publicKeyPem);
    // 准备HTTP请求的headers
    const headers = {
        'x-akc': encryptedData,
        'x-rgn': c // 这里填写对应的区域值
    };

    console.log(headers)

    // 使用ECB模式和PKCS7填充加密请求数据
    cipher: b.a.encrypt(JSON.stringify(t.data), E, {
        mode: k.a.mode.ECB,
        padding: k.a.pad.Pkcs7
    }).toString()
}

getTraceId = function (e = 8, t = !0) {
    var n = ""
        , n = Math.ceil(1e14 * Math.random()).toString().substr(0, e || 4);
    return t && (n += Date.now()),
        n
}
// traceId = getTraceId()
// console.log(case31(traceId));

// E = get_E()
// console.log(E)
// console.log(Latin1.stringify(E));

E = {
    "words": [
        825700400,
        926496308,
        909653817,
        842086192,
        808925494,
        875968567,
        959590711,
        808466233
    ],
    "sigBytes": 32
}
data = [
    "FU8443",
    "FU8448",
    "AE2959677",
    "AE2970409"
]

// 密钥，将字符串转换为 Buffer

// 待加密的数据
const plaintext = JSON.stringify(data);
console.log("plaintext: " + plaintext)
// 密钥，密钥长度通常为16字节（128位）、24字节（192位）或32字节（256位）
const key = Buffer.from(Latin1.stringify(E), 'hex');  // 128位密钥
console.log("key:" + key)


console.log("key:" + key)
// 初始化AES加密器，指定加密模式为ECB
const cipher = crypto_js.createCipheriv('aes-128-ecb', key, null);

// 加密数据
let cipherText = cipher.update(plaintext, 'utf-8', 'hex');
cipherText += cipher.final('hex');

// 输出密文
console.log('Cipher Text:', cipherText);

// 解密数据
const decipher = crypto_js.createDecipheriv('aes-128-ecb', key, null);
let decipheredText = decipher.update(cipherText, 'hex', 'utf-8');
decipheredText += decipher.final('utf-8');

// 输出解密后的明文
console.log('Deciphered Text:', decipheredText);

