var writer_;
commonjsGlobal = global;
!function (g) {
    var r, e, t, i;
    r = {
        1: [function (e, t, n) {
            t.exports = function (e, t) {
                for (var n = Array(arguments.length - 1), o = 0, r = 2, i = !0; r < arguments.length;)
                    n[o++] = arguments[r++];
                return new Promise((function (r, a) {
                        n[o] = function (e) {
                            if (i)
                                if (i = !1,
                                    e)
                                    a(e);
                                else {
                                    for (var t = Array(arguments.length - 1), n = 0; n < t.length;)
                                        t[n++] = arguments[n];
                                    r.apply(null, t)
                                }
                        }
                        ;
                        try {
                            e.apply(t || null, n)
                        } catch (s) {
                            i && (i = !1,
                                a(s))
                        }
                    }
                ))
            }
        }
            , {}],
        2: [function (e, t, n) {
            n.length = function (e) {
                var t = e.length;
                if (!t)
                    return 0;
                for (var n = 0; 1 < --t % 4 && "=" == (e[0 | t] || "");)
                    ++n;
                return Math.ceil(3 * e.length) / 4 - n
            }
            ;
            for (var o = Array(64), r = Array(123), i = 0; i < 64;)
                r[o[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
            n.encode = function (e, t, n) {
                for (var r, i = null, a = [], s = 0, c = 0; t < n;) {
                    var u = e[t++];
                    switch (c) {
                        case 0:
                            a[s++] = o[u >> 2],
                                r = (3 & u) << 4,
                                c = 1;
                            break;
                        case 1:
                            a[s++] = o[r | u >> 4],
                                r = (15 & u) << 2,
                                c = 2;
                            break;
                        case 2:
                            a[s++] = o[r | u >> 6],
                                a[s++] = o[63 & u],
                                c = 0
                    }
                    8191 < s && ((i = i || []).push(String.fromCharCode.apply(String, a)),
                        s = 0)
                }
                return c && (a[s++] = o[r],
                    a[s++] = 61,
                1 === c && (a[s++] = 61)),
                    i ? (s && i.push(String.fromCharCode.apply(String, a.slice(0, s))),
                        i.join("")) : String.fromCharCode.apply(String, a.slice(0, s))
            }
            ;
            var a = "invalid encoding";
            n.decode = function (e, t, n) {
                for (var o, i = n, s = 0, c = 0; c < e.length;) {
                    var u = e.charCodeAt(c++);
                    if (61 == u && 1 < s)
                        break;
                    if ((u = r[u]) === g)
                        throw Error(a);
                    switch (s) {
                        case 0:
                            o = u,
                                s = 1;
                            break;
                        case 1:
                            t[n++] = o << 2 | (48 & u) >> 4,
                                o = u,
                                s = 2;
                            break;
                        case 2:
                            t[n++] = (15 & o) << 4 | (60 & u) >> 2,
                                o = u,
                                s = 3;
                            break;
                        case 3:
                            t[n++] = (3 & o) << 6 | u,
                                s = 0
                    }
                }
                if (1 === s)
                    throw Error(a);
                return n - i
            }
                ,
                n.test = function (e) {
                    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
                }
        }
            , {}],
        3: [function (e, t, n) {
            (t.exports = function e(t, n) {
                    "string" == typeof t && (n = t,
                        t = g);
                    var o = [];

                    function r(t) {
                        if ("string" != typeof t) {
                            var n = i();
                            if (e.verbose && console.log("codegen: " + n),
                                n = "return " + n,
                                t) {
                                for (var a = Object.keys(t), s = Array(a.length + 1), c = Array(a.length), u = 0; u < a.length;)
                                    s[u] = a[u],
                                        c[u] = t[a[u++]];
                                return s[u] = n,
                                    Function.apply(null, s).apply(null, c)
                            }
                            return Function(n)()
                        }
                        for (var l = Array(arguments.length - 1), d = 0; d < l.length;)
                            l[d] = arguments[++d];
                        if (d = 0,
                            t = t.replace(/%([%dfijs])/g, (function (e, t) {
                                    var n = l[d++];
                                    switch (t) {
                                        case "d":
                                        case "f":
                                            return "" + +("" + n);
                                        case "i":
                                            return "" + Math.floor(n);
                                        case "j":
                                            return JSON.stringify(n);
                                        case "s":
                                            return "" + n
                                    }
                                    return "%"
                                }
                            )),
                        d !== l.length)
                            throw Error("parameter count mismatch");
                        return o.push(t),
                            r
                    }

                    function i(e) {
                        return "function " + (e || n || "") + "(" + (t && t.join(",") || "") + "){\n  " + o.join("\n  ") + "\n}"
                    }

                    return r.toString = i,
                        r
                }
            ).verbose = !1
        }
            , {}],
        4: [function (e, t, n) {
            function o() {
                this.t = {}
            }

            (t.exports = o).prototype.on = function (e, t, n) {
                return (this.t[e] || (this.t[e] = [])).push({
                    fn: t,
                    ctx: n || this
                }),
                    this
            }
                ,
                o.prototype.off = function (e, t) {
                    if (e === g)
                        this.t = {};
                    else if (t === g)
                        this.t[e] = [];
                    else
                        for (var n = this.t[e], o = 0; o < n.length;)
                            n[o].fn === t ? n.splice(o, 1) : ++o;
                    return this
                }
                ,
                o.prototype.emit = function (e) {
                    var t = this.t[e];
                    if (t) {
                        for (var n = [], o = 1; o < arguments.length;)
                            n.push(arguments[o++]);
                        for (o = 0; o < t.length;)
                            t[o].fn.apply(t[o++].ctx, n)
                    }
                    return this
                }
        }
            , {}],
        5: [function (e, t, n) {
            t.exports = i;
            var o = e(1)
                , r = e(7)("fs");

            function i(e, t, n) {
                return t = "function" == typeof t ? (n = t,
                    {}) : t || {},
                    n ? !t.xhr && r && r.readFile ? r.readFile(e, (function (o, r) {
                            return o && "undefined" != typeof XMLHttpRequest ? i.xhr(e, t, n) : o ? n(o) : n(null, t.binary ? r : r.toString("utf8"))
                        }
                    )) : i.xhr(e, t, n) : o(i, this, e, t)
            }

            i.xhr = function (e, t, n) {
                var o = new XMLHttpRequest;
                o.onreadystatechange = function () {
                    if (4 !== o.readyState)
                        return g;
                    if (0 !== o.status && 200 !== o.status)
                        return n(Error("status " + o.status));
                    if (t.binary) {
                        if (!(e = o.response))
                            for (var e = [], r = 0; r < o.responseText.length; ++r)
                                e.push(255 & o.responseText.charCodeAt(r));
                        return n(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e)
                    }
                    return n(null, o.responseText)
                }
                    ,
                t.binary && ("overrideMimeType" in o && o.overrideMimeType("text/plain; charset=x-user-defined"),
                    o.responseType = "arraybuffer"),
                    o.open("GET", e),
                    o.send()
            }
        }
            , {
                1: 1,
                7: 7
            }],
        6: [function (e, t, n) {
            function o(e) {
                function t(e, t, n, o) {
                    var r = t < 0 ? 1 : 0;
                    e(0 === (t = r ? -t : t) ? 0 < 1 / t ? 0 : 2147483648 : isNaN(t) ? 2143289344 : 34028234663852886e22 < t ? (r << 31 | 2139095040) >>> 0 : t < 11754943508222875e-54 ? (r << 31 | Math.round(t / 1401298464324817e-60)) >>> 0 : (r << 31 | 127 + (r = Math.floor(Math.log(t) / Math.LN2)) << 23 | 8388607 & Math.round(t * Math.pow(2, -r) * 8388608)) >>> 0, n, o)
                }

                function n(e, t, n) {
                    return t = 2 * ((e = e(t, n)) >> 31) + 1,
                        n = e >>> 23 & 255,
                        e &= 8388607,
                        255 == n ? e ? NaN : 1 / 0 * t : 0 == n ? 1401298464324817e-60 * t * e : t * Math.pow(2, n - 150) * (8388608 + e)
                }

                function o(e, t, n) {
                    d[0] = e,
                        t[n] = f[0],
                        t[n + 1] = f[1],
                        t[n + 2] = f[2],
                        t[n + 3] = f[3]
                }

                function c(e, t, n) {
                    d[0] = e,
                        t[n] = f[3],
                        t[n + 1] = f[2],
                        t[n + 2] = f[1],
                        t[n + 3] = f[0]
                }

                function u(e, t) {
                    return f[0] = e[t],
                        f[1] = e[t + 1],
                        f[2] = e[t + 2],
                        f[3] = e[t + 3],
                        d[0]
                }

                function l(e, t) {
                    return f[3] = e[t],
                        f[2] = e[t + 1],
                        f[1] = e[t + 2],
                        f[0] = e[t + 3],
                        d[0]
                }

                var d, f, p, h, m;

                function v(e, t, n, o, r, i) {
                    var a, s = o < 0 ? 1 : 0;
                    0 === (o = s ? -o : o) ? (e(0, r, i + t),
                        e(0 < 1 / o ? 0 : 2147483648, r, i + n)) : isNaN(o) ? (e(0, r, i + t),
                        e(2146959360, r, i + n)) : 17976931348623157e292 < o ? (e(0, r, i + t),
                        e((s << 31 | 2146435072) >>> 0, r, i + n)) : o < 22250738585072014e-324 ? (e((a = o / 5e-324) >>> 0, r, i + t),
                        e((s << 31 | a / 4294967296) >>> 0, r, i + n)) : (e(4503599627370496 * (a = o * Math.pow(2, -(o = 1024 === (o = Math.floor(Math.log(o) / Math.LN2)) ? 1023 : o))) >>> 0, r, i + t),
                        e((s << 31 | o + 1023 << 20 | 1048576 * a & 1048575) >>> 0, r, i + n))
                }

                function g(e, t, n, o, r) {
                    return t = e(o, r + t),
                        r = 2 * ((o = e(o, r + n)) >> 31) + 1,
                        t = 4294967296 * (1048575 & o) + t,
                        2047 == (n = o >>> 20 & 2047) ? t ? NaN : 1 / 0 * r : 0 == n ? 5e-324 * r * t : r * Math.pow(2, n - 1075) * (t + 4503599627370496)
                }

                function W(e, t, n) {
                    p[0] = e,
                        t[n] = h[0],
                        t[n + 1] = h[1],
                        t[n + 2] = h[2],
                        t[n + 3] = h[3],
                        t[n + 4] = h[4],
                        t[n + 5] = h[5],
                        t[n + 6] = h[6],
                        t[n + 7] = h[7]
                }

                function y(e, t, n) {
                    p[0] = e,
                        t[n] = h[7],
                        t[n + 1] = h[6],
                        t[n + 2] = h[5],
                        t[n + 3] = h[4],
                        t[n + 4] = h[3],
                        t[n + 5] = h[2],
                        t[n + 6] = h[1],
                        t[n + 7] = h[0]
                }

                function b(e, t) {
                    return h[0] = e[t],
                        h[1] = e[t + 1],
                        h[2] = e[t + 2],
                        h[3] = e[t + 3],
                        h[4] = e[t + 4],
                        h[5] = e[t + 5],
                        h[6] = e[t + 6],
                        h[7] = e[t + 7],
                        p[0]
                }

                function C(e, t) {
                    return h[7] = e[t],
                        h[6] = e[t + 1],
                        h[5] = e[t + 2],
                        h[4] = e[t + 3],
                        h[3] = e[t + 4],
                        h[2] = e[t + 5],
                        h[1] = e[t + 6],
                        h[0] = e[t + 7],
                        p[0]
                }

                return "undefined" != typeof Float32Array ? (d = new Float32Array([-0]),
                    m = 128 === (f = new Uint8Array(d.buffer))[3],
                    e.writeFloatLE = m ? o : c,
                    e.writeFloatBE = m ? c : o,
                    e.readFloatLE = m ? u : l,
                    e.readFloatBE = m ? l : u) : (e.writeFloatLE = t.bind(null, r),
                    e.writeFloatBE = t.bind(null, i),
                    e.readFloatLE = n.bind(null, a),
                    e.readFloatBE = n.bind(null, s)),
                    "undefined" != typeof Float64Array ? (p = new Float64Array([-0]),
                        m = 128 === (h = new Uint8Array(p.buffer))[7],
                        e.writeDoubleLE = m ? W : y,
                        e.writeDoubleBE = m ? y : W,
                        e.readDoubleLE = m ? b : C,
                        e.readDoubleBE = m ? C : b) : (e.writeDoubleLE = v.bind(null, r, 0, 4),
                        e.writeDoubleBE = v.bind(null, i, 4, 0),
                        e.readDoubleLE = g.bind(null, a, 0, 4),
                        e.readDoubleBE = g.bind(null, s, 4, 0)),
                    e
            }

            function r(e, t, n) {
                t[n] = 255 & e,
                    t[n + 1] = e >>> 8 & 255,
                    t[n + 2] = e >>> 16 & 255,
                    t[n + 3] = e >>> 24
            }

            function i(e, t, n) {
                t[n] = e >>> 24,
                    t[n + 1] = e >>> 16 & 255,
                    t[n + 2] = e >>> 8 & 255,
                    t[n + 3] = 255 & e
            }

            function a(e, t) {
                return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
            }

            function s(e, t) {
                return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
            }

            t.exports = o(o)
        }
            , {}],
        7: [function (t, i, n) {
            function r(t) {
                try {
                    var i = eval("require")(t);
                    if (i && (i.length || Object.keys(i).length))
                        return i
                } catch (t10) {
                }
                return null
            }

            i.exports = r
        }
            , {}],
        8: [function (e, t, n) {
            var o = (n = n).isAbsolute = function (e) {
                    return /^(?:\/|\w+:)/.test(e)
                }
                , r = n.normalize = function (e) {
                    var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/")
                        , n = o(e);
                    e = "";
                    n && (e = t.shift() + "/");
                    for (var r = 0; r < t.length;)
                        ".." === t[r] ? 0 < r && ".." !== t[r - 1] ? t.splice(--r, 2) : n ? t.splice(r, 1) : ++r : "." === t[r] ? t.splice(r, 1) : ++r;
                    return e + t.join("/")
                }
            ;
            n.resolve = function (e, t, n) {
                return n || (t = r(t)),
                    !o(t) && (e = (e = n ? e : r(e)).replace(/(?:\/|^)[^/]+$/, "")).length ? r(e + "/" + t) : t
            }
        }
            , {}],
        9: [function (e, t, n) {
            t.exports = function (e, t, n) {
                var o = n || 8192
                    , r = o >>> 1
                    , i = null
                    , a = o;
                return function (n) {
                    return n < 1 || r < n ? e(n) : (o < a + n && (i = e(o),
                        a = 0),
                        n = t.call(i, a, a += n),
                    7 & a && (a = 1 + (7 | a)),
                        n)
                }
            }
        }
            , {}],
        10: [function (e, t, n) {
            n.length = function (e) {
                for (var t, n = 0, o = 0; o < e.length; ++o)
                    (t = e.charCodeAt(o)) < 128 ? n += 1 : t < 2048 ? n += 2 : 55296 == (64512 & t) && 56320 == (64512 & e.charCodeAt(o + 1)) ? (++o,
                        n += 4) : n += 3;
                return n
            }
                ,
                n.read = function (e, t, n) {
                    if (n - t < 1)
                        return "";
                    for (var o, r = null, i = [], a = 0; t < n;)
                        (o = e[t++]) < 128 ? i[a++] = o : 191 < o && o < 224 ? i[a++] = (31 & o) << 6 | 63 & e[t++] : 239 < o && o < 365 ? (o = ((7 & o) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536,
                            i[a++] = 55296 + (o >> 10),
                            i[a++] = 56320 + (1023 & o)) : i[a++] = (15 & o) << 12 | (63 & e[t++]) << 6 | 63 & e[t++],
                        8191 < a && ((r = r || []).push(String.fromCharCode.apply(String, i)),
                            a = 0);
                    return r ? (a && r.push(String.fromCharCode.apply(String, i.slice(0, a))),
                        r.join("")) : String.fromCharCode.apply(String, i.slice(0, a))
                }
                ,
                n.write = function (e, t, n) {
                    for (var o, r, i = n, a = 0; a < e.length; ++a)
                        (o = e.charCodeAt(a)) < 128 ? t[n++] = o : (o < 2048 ? t[n++] = o >> 6 | 192 : (55296 == (64512 & o) && 56320 == (64512 & (r = e.charCodeAt(a + 1))) ? (++a,
                            t[n++] = (o = 65536 + ((1023 & o) << 10) + (1023 & r)) >> 18 | 240,
                            t[n++] = o >> 12 & 63 | 128) : t[n++] = o >> 12 | 224,
                            t[n++] = o >> 6 & 63 | 128),
                            t[n++] = 63 & o | 128);
                    return n - i
                }
        }
            , {}],
        11: [function (e, t, n) {
            var o = e(14)
                , r = e(33);

            function i(e, t, n, r) {
                if (t.resolvedType)
                    if (t.resolvedType instanceof o) {
                        e("switch(d%s){", r);
                        for (var i = t.resolvedType.values, a = Object.keys(i), s = 0; s < a.length; ++s)
                            t.repeated && i[a[s]] === t.typeDefault && e("default:"),
                                e("case%j:", a[s])("case %i:", i[a[s]])("m%s=%j", r, i[a[s]])("break");
                        e("}")
                    } else
                        e('if(typeof d%s!=="object")', r)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", r, n, r);
                else {
                    var c = !1;
                    switch (t.type) {
                        case "double":
                        case "float":
                            e("m%s=Number(d%s)", r, r);
                            break;
                        case "uint32":
                        case "fixed32":
                            e("m%s=d%s>>>0", r, r);
                            break;
                        case "int32":
                        case "sint32":
                        case "sfixed32":
                            e("m%s=d%s|0", r, r);
                            break;
                        case "uint64":
                            c = !0;
                        case "int64":
                        case "sint64":
                        case "fixed64":
                        case "sfixed64":
                            e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", r, r, c)('else if(typeof d%s==="string")', r)("m%s=parseInt(d%s,10)", r, r)('else if(typeof d%s==="number")', r)("m%s=d%s", r, r)('else if(typeof d%s==="object")', r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", r, r, r, c ? "true" : "");
                            break;
                        case "bytes":
                            e('if(typeof d%s==="string")', r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", r, r, r)("else if(d%s.length)", r)("m%s=d%s", r, r);
                            break;
                        case "string":
                            e("m%s=String(d%s)", r, r);
                            break;
                        case "bool":
                            e("m%s=Boolean(d%s)", r, r)
                    }
                }
                return e
            }

            function a(e, t, n, r) {
                if (t.resolvedType)
                    t.resolvedType instanceof o ? e("d%s=o.enums===String?types[%i].values[m%s]:m%s", r, n, r, r) : e("d%s=types[%i].toObject(m%s,o)", r, n, r);
                else {
                    var i = !1;
                    switch (t.type) {
                        case "double":
                        case "float":
                            e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", r, r, r, r);
                            break;
                        case "uint64":
                            i = !0;
                        case "int64":
                        case "sint64":
                        case "fixed64":
                        case "sfixed64":
                            e('if(typeof m%s==="number")', r)("d%s=o.longs===String?String(m%s):m%s", r, r, r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", r, r, r, r, i ? "true" : "", r);
                            break;
                        case "bytes":
                            e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", r, r, r, r, r);
                            break;
                        default:
                            e("d%s=m%s", r, r)
                    }
                }
                return e
            }

            n.fromObject = function (e) {
                var t = e.fieldsArray
                    , n = r.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
                if (!t.length)
                    return n("return new this.ctor");
                n("var m=new this.ctor");
                for (var a = 0; a < t.length; ++a) {
                    var s = t[a].resolve()
                        , c = r.safeProp(s.name);
                    s.map ? (n("if(d%s){", c)('if(typeof d%s!=="object")', c)("throw TypeError(%j)", s.fullName + ": object expected")("m%s={}", c)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", c),
                        i(n, s, a, c + "[ks[i]]")("}")("}")) : s.repeated ? (n("if(d%s){", c)("if(!Array.isArray(d%s))", c)("throw TypeError(%j)", s.fullName + ": array expected")("m%s=[]", c)("for(var i=0;i<d%s.length;++i){", c),
                        i(n, s, a, c + "[i]")("}")("}")) : (s.resolvedType instanceof o || n("if(d%s!=null){", c),
                        i(n, s, a, c),
                    s.resolvedType instanceof o || n("}"))
                }
                return n("return m")
            }
                ,
                n.toObject = function (e) {
                    var t = e.fieldsArray.slice().sort(r.compareFieldsById);
                    if (!t.length)
                        return r.codegen()("return {}");
                    for (var n = r.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}"), i = [], s = [], c = [], u = 0; u < t.length; ++u)
                        t[u].partOf || (t[u].resolve().repeated ? i : t[u].map ? s : c).push(t[u]);
                    if (i.length) {
                        for (n("if(o.arrays||o.defaults){"),
                                 u = 0; u < i.length; ++u)
                            n("d%s=[]", r.safeProp(i[u].name));
                        n("}")
                    }
                    if (s.length) {
                        for (n("if(o.objects||o.defaults){"),
                                 u = 0; u < s.length; ++u)
                            n("d%s={}", r.safeProp(s[u].name));
                        n("}")
                    }
                    if (c.length) {
                        for (n("if(o.defaults){"),
                                 u = 0; u < c.length; ++u) {
                            var l, d = c[u], f = r.safeProp(d.name);
                            d.resolvedType instanceof o ? n("d%s=o.enums===String?%j:%j", f, d.resolvedType.valuesById[d.typeDefault], d.typeDefault) : d.long ? n("if(util.Long){")("var n=new util.Long(%i,%i,%j)", d.typeDefault.low, d.typeDefault.high, d.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", f)("}else")("d%s=o.longs===String?%j:%i", f, d.typeDefault.toString(), d.typeDefault.toNumber()) : d.bytes ? (l = "[" + Array.prototype.slice.call(d.typeDefault).join(",") + "]",
                                n("if(o.bytes===String)d%s=%j", f, String.fromCharCode.apply(String, d.typeDefault))("else{")("d%s=%s", f, l)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", f, f)("}")) : n("d%s=%j", f, d.typeDefault)
                        }
                        n("}")
                    }
                    var p = !1;
                    for (u = 0; u < t.length; ++u) {
                        d = t[u];
                        var h = e.i.indexOf(d);
                        f = r.safeProp(d.name);
                        d.map ? (p || (p = !0,
                            n("var ks2")),
                            n("if(m%s&&(ks2=Object.keys(m%s)).length){", f, f)("d%s={}", f)("for(var j=0;j<ks2.length;++j){"),
                            a(n, d, h, f + "[ks2[j]]")("}")) : d.repeated ? (n("if(m%s&&m%s.length){", f, f)("d%s=[]", f)("for(var j=0;j<m%s.length;++j){", f),
                            a(n, d, h, f + "[j]")("}")) : (n("if(m%s!=null&&m.hasOwnProperty(%j)){", f, d.name),
                            a(n, d, h, f),
                        d.partOf && n("if(o.oneofs)")("d%s=%j", r.safeProp(d.partOf.name), d.name)),
                            n("}")
                    }
                    return n("return d")
                }
        }
            , {
                14: 14,
                33: 33
            }],
        12: [function (e, t, n) {
            t.exports = function (e) {
                var t = i.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter((function (e) {
                        return e.map
                    }
                )).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
                e.group && t("if((t&7)===4)")("break"),
                    t("switch(t>>>3){");
                for (var n = 0; n < e.fieldsArray.length; ++n) {
                    var a = e.i[n].resolve()
                        , s = a.resolvedType instanceof o ? "int32" : a.type
                        , c = "m" + i.safeProp(a.name);
                    t("case %i:", a.id),
                        a.map ? (t("if(%s===util.emptyObject)", c)("%s={}", c)("var c2 = r.uint32()+r.pos"),
                            r.defaults[a.keyType] !== g ? t("k=%j", r.defaults[a.keyType]) : t("k=null"),
                            r.defaults[s] !== g ? t("value=%j", r.defaults[s]) : t("value=null"),
                            t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", a.keyType)("case 2:"),
                            r.basic[s] === g ? t("value=types[%i].decode(r,r.uint32())", n) : t("value=r.%s()", s),
                            t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"),
                            r.long[a.keyType] !== g ? t('%s[typeof k==="object"?util.longToHash(k):k]=value', c) : t("%s[k]=value", c)) : a.repeated ? (t("if(!(%s&&%s.length))", c, c)("%s=[]", c),
                        r.packed[s] !== g && t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", c, s)("}else"),
                            r.basic[s] === g ? t(a.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", c, n) : t("%s.push(r.%s())", c, s)) : r.basic[s] === g ? t(a.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", c, n) : t("%s=r.%s()", c, s),
                        t("break")
                }
                for (t("default:")("r.skipType(t&7)")("break")("}")("}"),
                         n = 0; n < e.i.length; ++n) {
                    var u = e.i[n];
                    u.required && t("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + u.name + "'")
                }
                return t("return m")
            }
            ;
            var o = e(14)
                , r = e(32)
                , i = e(33)
        }
            , {
                14: 14,
                32: 32,
                33: 33
            }],
        13: [function (e, t, n) {
            t.exports = function (e) {
                for (var t, n = i.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()"), s = e.fieldsArray.slice().sort(i.compareFieldsById), c = 0; c < s.length; ++c) {
                    var u = s[c].resolve()
                        , l = e.i.indexOf(u)
                        , d = u.resolvedType instanceof o ? "int32" : u.type
                        , f = r.basic[d];
                    t = "m" + i.safeProp(u.name),
                        u.map ? (n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, u.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (u.id << 3 | 2) >>> 0, 8 | r.mapKey[u.keyType], u.keyType),
                            f === g ? n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", l, t) : n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | f, d, t),
                            n("}")("}")) : u.repeated ? (n("if(%s!=null&&%s.length){", t, t),
                            u.packed && r.packed[d] !== g ? n("w.uint32(%i).fork()", (u.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", d, t)("w.ldelim()") : (n("for(var i=0;i<%s.length;++i)", t),
                                f === g ? a(n, u, l, t + "[i]") : n("w.uint32(%i).%s(%s[i])", (u.id << 3 | f) >>> 0, d, t)),
                            n("}")) : (u.optional && n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, u.name),
                            f === g ? a(n, u, l, t) : n("w.uint32(%i).%s(%s)", (u.id << 3 | f) >>> 0, d, t))
                }
                return n("return w")
            }
            ;
            var o = e(14)
                , r = e(32)
                , i = e(33);

            function a(e, t, n, o) {
                return t.resolvedType.group ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", n, o, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", n, o, (t.id << 3 | 2) >>> 0)
            }
        }
            , {
                14: 14,
                32: 32,
                33: 33
            }],
        14: [function (e, t, n) {
            t.exports = a;
            var o = e(22);
            ((a.prototype = Object.create(o.prototype)).constructor = a).className = "Enum";
            var r = e(21)
                , i = e(33);

            function a(e, t, n, r, i) {
                if (o.call(this, e, n),
                t && "object" != typeof t)
                    throw TypeError("values must be an object");
                if (this.valuesById = {},
                    this.values = Object.create(this.valuesById),
                    this.comment = r,
                    this.comments = i || {},
                    this.reserved = g,
                    t)
                    for (var a = Object.keys(t), s = 0; s < a.length; ++s)
                        "number" == typeof t[a[s]] && (this.valuesById[this.values[a[s]] = t[a[s]]] = a[s])
            }

            a.fromJSON = function (e, t) {
                return (e = new a(e, t.values, t.options, t.comment, t.comments)).reserved = t.reserved,
                    e
            }
                ,
                a.prototype.toJSON = function (e) {
                    return e = !!e && !!e.keepComments,
                        i.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : g, "comment", e ? this.comment : g, "comments", e ? this.comments : g])
                }
                ,
                a.prototype.add = function (e, t, n) {
                    if (!i.isString(e))
                        throw TypeError("name must be a string");
                    if (!i.isInteger(t))
                        throw TypeError("id must be an integer");
                    if (this.values[e] !== g)
                        throw Error("duplicate name '" + e + "' in " + this);
                    if (this.isReservedId(t))
                        throw Error("id " + t + " is reserved in " + this);
                    if (this.isReservedName(e))
                        throw Error("name '" + e + "' is reserved in " + this);
                    if (this.valuesById[t] !== g) {
                        if (!this.options || !this.options.allow_alias)
                            throw Error("duplicate id " + t + " in " + this);
                        this.values[e] = t
                    } else
                        this.valuesById[this.values[e] = t] = e;
                    return this.comments[e] = n || null,
                        this
                }
                ,
                a.prototype.remove = function (e) {
                    if (!i.isString(e))
                        throw TypeError("name must be a string");
                    var t = this.values[e];
                    if (null == t)
                        throw Error("name '" + e + "' does not exist in " + this);
                    return delete this.valuesById[t],
                        delete this.values[e],
                        delete this.comments[e],
                        this
                }
                ,
                a.prototype.isReservedId = function (e) {
                    return r.isReservedId(this.reserved, e)
                }
                ,
                a.prototype.isReservedName = function (e) {
                    return r.isReservedName(this.reserved, e)
                }
        }
            , {
                21: 21,
                22: 22,
                33: 33
            }],
        15: [function (e, t, n) {
            t.exports = u;
            var o = e(22);
            ((u.prototype = Object.create(o.prototype)).constructor = u).className = "Field";
            var r, i = e(14), a = e(32), s = e(33), c = /^required|optional|repeated$/;

            function u(e, t, n, r, i, u, l) {
                if (s.isObject(r) ? (l = i,
                    u = r,
                    r = i = g) : s.isObject(i) && (l = u,
                    u = i,
                    i = g),
                    o.call(this, e, u),
                !s.isInteger(t) || t < 0)
                    throw TypeError("id must be a non-negative integer");
                if (!s.isString(n))
                    throw TypeError("type must be a string");
                if (r !== g && !c.test(r = r.toString().toLowerCase()))
                    throw TypeError("rule must be a string rule");
                if (i !== g && !s.isString(i))
                    throw TypeError("extend must be a string");
                this.rule = (r = "proto3_optional" === r ? "optional" : r) && "optional" !== r ? r : g,
                    this.type = n,
                    this.id = t,
                    this.extend = i || g,
                    this.required = "required" === r,
                    this.optional = !this.required,
                    this.repeated = "repeated" === r,
                    this.map = !1,
                    this.message = null,
                    this.partOf = null,
                    this.typeDefault = null,
                    this.defaultValue = null,
                    this.long = !!s.Long && a.long[n] !== g,
                    this.bytes = "bytes" === n,
                    this.resolvedType = null,
                    this.extensionField = null,
                    this.declaringField = null,
                    this.n = null,
                    this.comment = l
            }

            u.fromJSON = function (e, t) {
                return new u(e, t.id, t.type, t.rule, t.extend, t.options, t.comment)
            }
                ,
                Object.defineProperty(u.prototype, "packed", {
                    get: function () {
                        return null === this.n && (this.n = !1 !== this.getOption("packed")),
                            this.n
                    }
                }),
                u.prototype.setOption = function (e, t, n) {
                    return "packed" === e && (this.n = null),
                        o.prototype.setOption.call(this, e, t, n)
                }
                ,
                u.prototype.toJSON = function (e) {
                    return e = !!e && !!e.keepComments,
                        s.toObject(["rule", "optional" !== this.rule && this.rule || g, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : g])
                }
                ,
                u.prototype.resolve = function () {
                    return this.resolved ? this : ((this.typeDefault = a.defaults[this.type]) === g && (this.resolvedType = (this.declaringField || this).parent.lookupTypeOrEnum(this.type),
                        this.resolvedType instanceof r ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]),
                    this.options && null != this.options.default && (this.typeDefault = this.options.default,
                    this.resolvedType instanceof i && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])),
                    this.options && (!0 !== this.options.packed && (this.options.packed === g || !this.resolvedType || this.resolvedType instanceof i) || delete this.options.packed,
                    Object.keys(this.options).length || (this.options = g)),
                        this.long ? (this.typeDefault = s.Long.fromNumber(this.typeDefault, "u" == (this.type[0] || "")),
                        Object.freeze && Object.freeze(this.typeDefault)) : this.bytes && "string" == typeof this.typeDefault && (s.base64.test(this.typeDefault) ? s.base64.decode(this.typeDefault, e = s.newBuffer(s.base64.length(this.typeDefault)), 0) : s.utf8.write(this.typeDefault, e = s.newBuffer(s.utf8.length(this.typeDefault)), 0),
                            this.typeDefault = e),
                        this.map ? this.defaultValue = s.emptyObject : this.repeated ? this.defaultValue = s.emptyArray : this.defaultValue = this.typeDefault,
                    this.parent instanceof r && (this.parent.ctor.prototype[this.name] = this.defaultValue),
                        o.prototype.resolve.call(this));
                    var e
                }
                ,
                u.d = function (e, t, n, o) {
                    return "function" == typeof t ? t = s.decorateType(t).name : t && "object" == typeof t && (t = s.decorateEnum(t).name),
                        function (r, i) {
                            s.decorateType(r.constructor).add(new u(i, e, t, n, {
                                default: o
                            }))
                        }
                }
                ,
                u.r = function (e) {
                    r = e
                }
        }
            , {
                14: 14,
                22: 22,
                32: 32,
                33: 33
            }],
        16: [function (e, t, n) {
            var o = t.exports = e(17);
            o.build = "light",
                o.load = function (e, t, n) {
                    return (t = "function" == typeof t ? (n = t,
                        new o.Root) : t || new o.Root).load(e, n)
                }
                ,
                o.loadSync = function (e, t) {
                    return (t = t || new o.Root).loadSync(e)
                }
                ,
                o.encoder = e(13),
                o.decoder = e(12),
                o.verifier = e(36),
                o.converter = e(11),
                o.ReflectionObject = e(22),
                o.Namespace = e(21),
                o.Root = e(26),
                o.Enum = e(14),
                o.Type = e(31),
                o.Field = e(15),
                o.OneOf = e(23),
                o.MapField = e(18),
                o.Service = e(30),
                o.Method = e(20),
                o.Message = e(19),
                o.wrappers = e(37),
                o.types = e(32),
                o.util = e(33),
                o.ReflectionObject.r(o.Root),
                o.Namespace.r(o.Type, o.Service, o.Enum),
                o.Root.r(o.Type),
                o.Field.r(o.Type)
        }
            , {
                11: 11,
                12: 12,
                13: 13,
                14: 14,
                15: 15,
                17: 17,
                18: 18,
                19: 19,
                20: 20,
                21: 21,
                22: 22,
                23: 23,
                26: 26,
                30: 30,
                31: 31,
                32: 32,
                33: 33,
                36: 36,
                37: 37
            }],
        17: [function (e, t, n) {
            var o = n;

            function r() {
                o.util.r(),
                    o.Writer.r(o.BufferWriter),
                    o.Reader.r(o.BufferReader)
            }

            o.build = "minimal",
                o.Writer = e(38),
                o.BufferWriter = e(39),
                o.Reader = e(24),
                o.BufferReader = e(25),
                o.util = e(35),
                o.rpc = e(28),
                o.roots = e(27),
                o.configure = r,
                r()
        }
            , {
                24: 24,
                25: 25,
                27: 27,
                28: 28,
                35: 35,
                38: 38,
                39: 39
            }],
        18: [function (e, t, n) {
            t.exports = a;
            var o = e(15);
            ((a.prototype = Object.create(o.prototype)).constructor = a).className = "MapField";
            var r = e(32)
                , i = e(33);

            function a(e, t, n, r, a, s) {
                if (o.call(this, e, t, r, g, g, a, s),
                    !i.isString(n))
                    throw TypeError("keyType must be a string");
                this.keyType = n,
                    this.resolvedKeyType = null,
                    this.map = !0
            }

            a.fromJSON = function (e, t) {
                return new a(e, t.id, t.keyType, t.type, t.options, t.comment)
            }
                ,
                a.prototype.toJSON = function (e) {
                    return e = !!e && !!e.keepComments,
                        i.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : g])
                }
                ,
                a.prototype.resolve = function () {
                    if (this.resolved)
                        return this;
                    if (r.mapKey[this.keyType] === g)
                        throw Error("invalid key type: " + this.keyType);
                    return o.prototype.resolve.call(this)
                }
                ,
                a.d = function (e, t, n) {
                    return "function" == typeof n ? n = i.decorateType(n).name : n && "object" == typeof n && (n = i.decorateEnum(n).name),
                        function (o, r) {
                            i.decorateType(o.constructor).add(new a(r, e, t, n))
                        }
                }
        }
            , {
                15: 15,
                32: 32,
                33: 33
            }],
        19: [function (e, t, n) {
            t.exports = r;
            var o = e(35);

            function r(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        this[t[n]] = e[t[n]]
            }

            r.create = function (e) {
                return this.$type.create(e)
            }
                ,
                r.encode = function (e, t) {
                    return this.$type.encode(e, t)
                }
                ,
                r.encodeDelimited = function (e, t) {
                    return this.$type.encodeDelimited(e, t)
                }
                ,
                r.decode = function (e) {
                    return this.$type.decode(e)
                }
                ,
                r.decodeDelimited = function (e) {
                    return this.$type.decodeDelimited(e)
                }
                ,
                r.verify = function (e) {
                    return this.$type.verify(e)
                }
                ,
                r.fromObject = function (e) {
                    return this.$type.fromObject(e)
                }
                ,
                r.toObject = function (e, t) {
                    return this.$type.toObject(e, t)
                }
                ,
                r.prototype.toJSON = function () {
                    return this.$type.toObject(this, o.toJSONOptions)
                }
        }
            , {
                35: 35
            }],
        20: [function (e, t, n) {
            t.exports = i;
            var o = e(22);
            ((i.prototype = Object.create(o.prototype)).constructor = i).className = "Method";
            var r = e(33);

            function i(e, t, n, i, a, s, c, u, l) {
                if (r.isObject(a) ? (c = a,
                    a = s = g) : r.isObject(s) && (c = s,
                    s = g),
                t !== g && !r.isString(t))
                    throw TypeError("type must be a string");
                if (!r.isString(n))
                    throw TypeError("requestType must be a string");
                if (!r.isString(i))
                    throw TypeError("responseType must be a string");
                o.call(this, e, c),
                    this.type = t || "rpc",
                    this.requestType = n,
                    this.requestStream = !!a || g,
                    this.responseType = i,
                    this.responseStream = !!s || g,
                    this.resolvedRequestType = null,
                    this.resolvedResponseType = null,
                    this.comment = u,
                    this.parsedOptions = l
            }

            i.fromJSON = function (e, t) {
                return new i(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment, t.parsedOptions)
            }
                ,
                i.prototype.toJSON = function (e) {
                    return e = !!e && !!e.keepComments,
                        r.toObject(["type", "rpc" !== this.type && this.type || g, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", e ? this.comment : g, "parsedOptions", this.parsedOptions])
                }
                ,
                i.prototype.resolve = function () {
                    return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType),
                        this.resolvedResponseType = this.parent.lookupType(this.responseType),
                        o.prototype.resolve.call(this))
                }
        }
            , {
                22: 22,
                33: 33
            }],
        21: [function (e, t, n) {
            t.exports = l;
            var o = e(22);
            ((l.prototype = Object.create(o.prototype)).constructor = l).className = "Namespace";
            var r, i, a, s = e(15), c = e(33);

            function u(e, t) {
                if (!e || !e.length)
                    return g;
                for (var n = {}, o = 0; o < e.length; ++o)
                    n[e[o].name] = e[o].toJSON(t);
                return n
            }

            function l(e, t) {
                o.call(this, e, t),
                    this.nested = g,
                    this.e = null
            }

            function d(e) {
                return e.e = null,
                    e
            }

            l.fromJSON = function (e, t) {
                return new l(e, t.options).addJSON(t.nested)
            }
                ,
                l.arrayToJSON = u,
                l.isReservedId = function (e, t) {
                    if (e)
                        for (var n = 0; n < e.length; ++n)
                            if ("string" != typeof e[n] && e[n][0] <= t && e[n][1] > t)
                                return !0;
                    return !1
                }
                ,
                l.isReservedName = function (e, t) {
                    if (e)
                        for (var n = 0; n < e.length; ++n)
                            if (e[n] === t)
                                return !0;
                    return !1
                }
                ,
                Object.defineProperty(l.prototype, "nestedArray", {
                    get: function () {
                        return this.e || (this.e = c.toArray(this.nested))
                    }
                }),
                l.prototype.toJSON = function (e) {
                    return c.toObject(["options", this.options, "nested", u(this.nestedArray, e)])
                }
                ,
                l.prototype.addJSON = function (e) {
                    if (e)
                        for (var t, n = Object.keys(e), o = 0; o < n.length; ++o)
                            t = e[n[o]],
                                this.add((t.fields !== g ? r : t.values !== g ? a : t.methods !== g ? i : t.id !== g ? s : l).fromJSON(n[o], t));
                    return this
                }
                ,
                l.prototype.get = function (e) {
                    return this.nested && this.nested[e] || null
                }
                ,
                l.prototype.getEnum = function (e) {
                    if (this.nested && this.nested[e] instanceof a)
                        return this.nested[e].values;
                    throw Error("no such enum: " + e)
                }
                ,
                l.prototype.add = function (e) {
                    if (!(e instanceof s && e.extend !== g || e instanceof r || e instanceof a || e instanceof i || e instanceof l))
                        throw TypeError("object must be a valid nested object");
                    if (this.nested) {
                        var t = this.get(e.name);
                        if (t) {
                            if (!(t instanceof l && e instanceof l) || t instanceof r || t instanceof i)
                                throw Error("duplicate name '" + e.name + "' in " + this);
                            for (var n = t.nestedArray, o = 0; o < n.length; ++o)
                                e.add(n[o]);
                            this.remove(t),
                            this.nested || (this.nested = {}),
                                e.setOptions(t.options, !0)
                        }
                    } else
                        this.nested = {};
                    return (this.nested[e.name] = e).onAdd(this),
                        d(this)
                }
                ,
                l.prototype.remove = function (e) {
                    if (!(e instanceof o))
                        throw TypeError("object must be a ReflectionObject");
                    if (e.parent !== this)
                        throw Error(e + " is not a member of " + this);
                    return delete this.nested[e.name],
                    Object.keys(this.nested).length || (this.nested = g),
                        e.onRemove(this),
                        d(this)
                }
                ,
                l.prototype.define = function (e, t) {
                    if (c.isString(e))
                        e = e.split(".");
                    else if (!Array.isArray(e))
                        throw TypeError("illegal path");
                    if (e && e.length && "" === e[0])
                        throw Error("path must be relative");
                    for (var n = this; 0 < e.length;) {
                        var o = e.shift();
                        if (n.nested && n.nested[o]) {
                            if (!((n = n.nested[o]) instanceof l))
                                throw Error("path conflicts with non-namespace objects")
                        } else
                            n.add(n = new l(o))
                    }
                    return t && n.addJSON(t),
                        n
                }
                ,
                l.prototype.resolveAll = function () {
                    for (var e = this.nestedArray, t = 0; t < e.length;)
                        e[t] instanceof l ? e[t++].resolveAll() : e[t++].resolve();
                    return this.resolve()
                }
                ,
                l.prototype.lookup = function (e, t, n) {
                    if ("boolean" == typeof t ? (n = t,
                        t = g) : t && !Array.isArray(t) && (t = [t]),
                    c.isString(e) && e.length) {
                        if ("." === e)
                            return this.root;
                        e = e.split(".")
                    } else if (!e.length)
                        return this;
                    if ("" === e[0])
                        return this.root.lookup(e.slice(1), t);
                    var o = this.get(e[0]);
                    if (o) {
                        if (1 === e.length) {
                            if (!t || ~t.indexOf(o.constructor))
                                return o
                        } else if (o instanceof l && (o = o.lookup(e.slice(1), t, !0)))
                            return o
                    } else
                        for (var r = 0; r < this.nestedArray.length; ++r)
                            if (this.e[r] instanceof l && (o = this.e[r].lookup(e, t, !0)))
                                return o;
                    return null === this.parent || n ? null : this.parent.lookup(e, t)
                }
                ,
                l.prototype.lookupType = function (e) {
                    var t = this.lookup(e, [r]);
                    if (!t)
                        throw Error("no such type: " + e);
                    return t
                }
                ,
                l.prototype.lookupEnum = function (e) {
                    var t = this.lookup(e, [a]);
                    if (!t)
                        throw Error("no such Enum '" + e + "' in " + this);
                    return t
                }
                ,
                l.prototype.lookupTypeOrEnum = function (e) {
                    var t = this.lookup(e, [r, a]);
                    if (!t)
                        throw Error("no such Type or Enum '" + e + "' in " + this);
                    return t
                }
                ,
                l.prototype.lookupService = function (e) {
                    var t = this.lookup(e, [i]);
                    if (!t)
                        throw Error("no such Service '" + e + "' in " + this);
                    return t
                }
                ,
                l.r = function (e, t, n) {
                    r = e,
                        i = t,
                        a = n
                }
        }
            , {
                15: 15,
                22: 22,
                33: 33
            }],
        22: [function (e, t, n) {
            (t.exports = i).className = "ReflectionObject";
            var o, r = e(33);

            function i(e, t) {
                if (!r.isString(e))
                    throw TypeError("name must be a string");
                if (t && !r.isObject(t))
                    throw TypeError("options must be an object");
                this.options = t,
                    this.parsedOptions = null,
                    this.name = e,
                    this.parent = null,
                    this.resolved = !1,
                    this.comment = null,
                    this.filename = null
            }

            Object.defineProperties(i.prototype, {
                root: {
                    get: function () {
                        for (var e = this; null !== e.parent;)
                            e = e.parent;
                        return e
                    }
                },
                fullName: {
                    get: function () {
                        for (var e = [this.name], t = this.parent; t;)
                            e.unshift(t.name),
                                t = t.parent;
                        return e.join(".")
                    }
                }
            }),
                i.prototype.toJSON = function () {
                    throw Error()
                }
                ,
                i.prototype.onAdd = function (e) {
                    this.parent && this.parent !== e && this.parent.remove(this),
                        this.parent = e,
                        this.resolved = !1,
                    (e = e.root) instanceof o && e.u(this)
                }
                ,
                i.prototype.onRemove = function (e) {
                    (e = e.root) instanceof o && e.o(this),
                        this.parent = null,
                        this.resolved = !1
                }
                ,
                i.prototype.resolve = function () {
                    return this.resolved || this.root instanceof o && (this.resolved = !0),
                        this
                }
                ,
                i.prototype.getOption = function (e) {
                    return this.options ? this.options[e] : g
                }
                ,
                i.prototype.setOption = function (e, t, n) {
                    return n && this.options && this.options[e] !== g || ((this.options || (this.options = {}))[e] = t),
                        this
                }
                ,
                i.prototype.setParsedOption = function (e, t, n) {
                    this.parsedOptions || (this.parsedOptions = []);
                    var o, i, a = this.parsedOptions;
                    return n ? (i = a.find((function (t) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }
                    ))) ? (o = i[e],
                        r.setProperty(o, n, t)) : ((i = {})[e] = r.setProperty({}, n, t),
                        a.push(i)) : ((i = {})[e] = t,
                        a.push(i)),
                        this
                }
                ,
                i.prototype.setOptions = function (e, t) {
                    if (e)
                        for (var n = Object.keys(e), o = 0; o < n.length; ++o)
                            this.setOption(n[o], e[n[o]], t);
                    return this
                }
                ,
                i.prototype.toString = function () {
                    var e = this.constructor.className
                        , t = this.fullName;
                    return t.length ? e + " " + t : e
                }
                ,
                i.r = function (e) {
                    o = e
                }
        }
            , {
                33: 33
            }],
        23: [function (e, t, n) {
            t.exports = a;
            var o = e(22);
            ((a.prototype = Object.create(o.prototype)).constructor = a).className = "OneOf";
            var r = e(15)
                , i = e(33);

            function a(e, t, n, r) {
                if (Array.isArray(t) || (n = t,
                    t = g),
                    o.call(this, e, n),
                t !== g && !Array.isArray(t))
                    throw TypeError("fieldNames must be an Array");
                this.oneof = t || [],
                    this.fieldsArray = [],
                    this.comment = r
            }

            function s(e) {
                if (e.parent)
                    for (var t = 0; t < e.fieldsArray.length; ++t)
                        e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t])
            }

            a.fromJSON = function (e, t) {
                return new a(e, t.oneof, t.options, t.comment)
            }
                ,
                a.prototype.toJSON = function (e) {
                    return e = !!e && !!e.keepComments,
                        i.toObject(["options", this.options, "oneof", this.oneof, "comment", e ? this.comment : g])
                }
                ,
                a.prototype.add = function (e) {
                    if (!(e instanceof r))
                        throw TypeError("field must be a Field");
                    return e.parent && e.parent !== this.parent && e.parent.remove(e),
                        this.oneof.push(e.name),
                        this.fieldsArray.push(e),
                        s(e.partOf = this),
                        this
                }
                ,
                a.prototype.remove = function (e) {
                    if (!(e instanceof r))
                        throw TypeError("field must be a Field");
                    var t = this.fieldsArray.indexOf(e);
                    if (t < 0)
                        throw Error(e + " is not a member of " + this);
                    return this.fieldsArray.splice(t, 1),
                    -1 < (t = this.oneof.indexOf(e.name)) && this.oneof.splice(t, 1),
                        e.partOf = null,
                        this
                }
                ,
                a.prototype.onAdd = function (e) {
                    o.prototype.onAdd.call(this, e);
                    for (var t = 0; t < this.oneof.length; ++t) {
                        var n = e.get(this.oneof[t]);
                        n && !n.partOf && (n.partOf = this).fieldsArray.push(n)
                    }
                    s(this)
                }
                ,
                a.prototype.onRemove = function (e) {
                    for (var t, n = 0; n < this.fieldsArray.length; ++n)
                        (t = this.fieldsArray[n]).parent && t.parent.remove(t);
                    o.prototype.onRemove.call(this, e)
                }
                ,
                a.d = function () {
                    for (var e = Array(arguments.length), t = 0; t < arguments.length;)
                        e[t] = arguments[t++];
                    return function (t, n) {
                        i.decorateType(t.constructor).add(new a(n, e)),
                            Object.defineProperty(t, n, {
                                get: i.oneOfGetter(e),
                                set: i.oneOfSetter(e)
                            })
                    }
                }
        }
            , {
                15: 15,
                22: 22,
                33: 33
            }],
        24: [function (e, t, n) {
            t.exports = c;
            var o, r = e(35), i = r.LongBits, a = r.utf8;

            function s(e, t) {
                return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
            }

            function c(e) {
                this.buf = e,
                    this.pos = 0,
                    this.len = e.length
            }

            function u() {
                return r.Buffer ? function (e) {
                        return (c.create = function (e) {
                                return r.Buffer.isBuffer(e) ? new o(e) : d(e)
                            }
                        )(e)
                    }
                    : d
            }

            var l, d = "undefined" != typeof Uint8Array ? function (e) {
                        if (e instanceof Uint8Array || Array.isArray(e))
                            return new c(e);
                        throw Error("illegal buffer")
                    }
                    : function (e) {
                        if (Array.isArray(e))
                            return new c(e);
                        throw Error("illegal buffer")
                    }
            ;

            function f() {
                var e = new i(0, 0)
                    , t = 0;
                if (!(4 < this.len - this.pos)) {
                    for (; t < 3; ++t) {
                        if (this.pos >= this.len)
                            throw s(this);
                        if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0,
                        this.buf[this.pos++] < 128)
                            return e
                    }
                    return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0,
                        e
                }
                for (; t < 4; ++t)
                    if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0,
                    this.buf[this.pos++] < 128)
                        return e;
                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0,
                    e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0,
                this.buf[this.pos++] < 128)
                    return e;
                if (t = 0,
                4 < this.len - this.pos) {
                    for (; t < 5; ++t)
                        if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0,
                        this.buf[this.pos++] < 128)
                            return e
                } else
                    for (; t < 5; ++t) {
                        if (this.pos >= this.len)
                            throw s(this);
                        if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0,
                        this.buf[this.pos++] < 128)
                            return e
                    }
                throw Error("invalid varint encoding")
            }

            function p(e, t) {
                return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
            }

            function h() {
                if (this.pos + 8 > this.len)
                    throw s(this, 8);
                return new i(p(this.buf, this.pos += 4), p(this.buf, this.pos += 4))
            }

            c.create = u(),
                c.prototype.h = r.Array.prototype.subarray || r.Array.prototype.slice,
                c.prototype.uint32 = (l = 4294967295,
                        function () {
                            if (l = (127 & this.buf[this.pos]) >>> 0,
                            this.buf[this.pos++] < 128)
                                return l;
                            if (l = (l | (127 & this.buf[this.pos]) << 7) >>> 0,
                            this.buf[this.pos++] < 128)
                                return l;
                            if (l = (l | (127 & this.buf[this.pos]) << 14) >>> 0,
                            this.buf[this.pos++] < 128)
                                return l;
                            if (l = (l | (127 & this.buf[this.pos]) << 21) >>> 0,
                            this.buf[this.pos++] < 128)
                                return l;
                            if (l = (l | (15 & this.buf[this.pos]) << 28) >>> 0,
                            this.buf[this.pos++] < 128)
                                return l;
                            if ((this.pos += 5) > this.len)
                                throw this.pos = this.len,
                                    s(this, 10);
                            return l
                        }
                ),
                c.prototype.int32 = function () {
                    return 0 | this.uint32()
                }
                ,
                c.prototype.sint32 = function () {
                    var e = this.uint32();
                    return e >>> 1 ^ -(1 & e) | 0
                }
                ,
                c.prototype.bool = function () {
                    return 0 !== this.uint32()
                }
                ,
                c.prototype.fixed32 = function () {
                    if (this.pos + 4 > this.len)
                        throw s(this, 4);
                    return p(this.buf, this.pos += 4)
                }
                ,
                c.prototype.sfixed32 = function () {
                    if (this.pos + 4 > this.len)
                        throw s(this, 4);
                    return 0 | p(this.buf, this.pos += 4)
                }
                ,
                c.prototype.float = function () {
                    if (this.pos + 4 > this.len)
                        throw s(this, 4);
                    var e = r.float.readFloatLE(this.buf, this.pos);
                    return this.pos += 4,
                        e
                }
                ,
                c.prototype.double = function () {
                    if (this.pos + 8 > this.len)
                        throw s(this, 4);
                    var e = r.float.readDoubleLE(this.buf, this.pos);
                    return this.pos += 8,
                        e
                }
                ,
                c.prototype.bytes = function () {
                    var e = this.uint32()
                        , t = this.pos
                        , n = this.pos + e;
                    if (n > this.len)
                        throw s(this, e);
                    return this.pos += e,
                        Array.isArray(this.buf) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this.h.call(this.buf, t, n)
                }
                ,
                c.prototype.string = function () {
                    var e = this.bytes();
                    return a.read(e, 0, e.length)
                }
                ,
                c.prototype.skip = function (e) {
                    if ("number" == typeof e) {
                        if (this.pos + e > this.len)
                            throw s(this, e);
                        this.pos += e
                    } else
                        do {
                            if (this.pos >= this.len)
                                throw s(this)
                        } while (128 & this.buf[this.pos++]);
                    return this
                }
                ,
                c.prototype.skipType = function (e) {
                    switch (e) {
                        case 0:
                            this.skip();
                            break;
                        case 1:
                            this.skip(8);
                            break;
                        case 2:
                            this.skip(this.uint32());
                            break;
                        case 3:
                            for (; 4 != (e = 7 & this.uint32());)
                                this.skipType(e);
                            break;
                        case 5:
                            this.skip(4);
                            break;
                        default:
                            throw Error("invalid wire type " + e + " at offset " + this.pos)
                    }
                    return this
                }
                ,
                c.r = function (e) {
                    o = e,
                        c.create = u(),
                        o.r();
                    var t = r.Long ? "toLong" : "toNumber";
                    r.merge(c.prototype, {
                        int64: function () {
                            return f.call(this)[t](!1)
                        },
                        uint64: function () {
                            return f.call(this)[t](!0)
                        },
                        sint64: function () {
                            return f.call(this).zzDecode()[t](!1)
                        },
                        fixed64: function () {
                            return h.call(this)[t](!0)
                        },
                        sfixed64: function () {
                            return h.call(this)[t](!1)
                        }
                    })
                }
        }
            , {
                35: 35
            }],
        25: [function (e, t, n) {
            t.exports = i;
            var o = e(24);
            (i.prototype = Object.create(o.prototype)).constructor = i;
            var r = e(35);

            function i(e) {
                o.call(this, e)
            }

            i.r = function () {
                r.Buffer && (i.prototype.h = r.Buffer.prototype.slice)
            }
                ,
                i.prototype.string = function () {
                    var e = this.uint32();
                    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len))
                }
                ,
                i.r()
        }
            , {
                24: 24,
                35: 35
            }],
        26: [function (e, t, n) {
            t.exports = d;
            var o = e(21);
            ((d.prototype = Object.create(o.prototype)).constructor = d).className = "Root";
            var r, i, a, s = e(15), c = e(14), u = e(23), l = e(33);

            function d(e) {
                o.call(this, "", e),
                    this.deferred = [],
                    this.files = []
            }

            function f() {
            }

            d.fromJSON = function (e, t) {
                return t = t || new d,
                e.options && t.setOptions(e.options),
                    t.addJSON(e.nested)
            }
                ,
                d.prototype.resolvePath = l.path.resolve,
                d.prototype.fetch = l.fetch,
                d.prototype.load = function e(t, n, o) {
                    "function" == typeof n && (o = n,
                        n = g);
                    var r = this;
                    if (!o)
                        return l.asPromise(e, r, t, n);
                    var s = o === f;

                    function c(e, t) {
                        if (o) {
                            var n = o;
                            if (o = null,
                                s)
                                throw e;
                            n(e, t)
                        }
                    }

                    function u(e) {
                        var t = e.lastIndexOf("google/protobuf/");
                        return -1 < t && (t = e.substring(t)) in a ? t : null
                    }

                    function d(e, t) {
                        try {
                            if (l.isString(t) && "{" == (t[0] || "") && (t = JSON.parse(t)),
                                l.isString(t)) {
                                i.filename = e;
                                var o, a = i(t, r, n), d = 0;
                                if (a.imports)
                                    for (; d < a.imports.length; ++d)
                                        (o = u(a.imports[d]) || r.resolvePath(e, a.imports[d])) && p(o);
                                if (a.weakImports)
                                    for (d = 0; d < a.weakImports.length; ++d)
                                        (o = u(a.weakImports[d]) || r.resolvePath(e, a.weakImports[d])) && p(o, !0)
                            } else
                                r.setOptions(t.options).addJSON(t.nested)
                        } catch (f) {
                            c(f)
                        }
                        s || h || c(null, r)
                    }

                    function p(e, t) {
                        if (!~r.files.indexOf(e))
                            if (r.files.push(e),
                            e in a)
                                s ? d(e, a[e]) : (++h,
                                    setTimeout((function () {
                                            --h,
                                                d(e, a[e])
                                        }
                                    )));
                            else if (s) {
                                var n;
                                try {
                                    n = l.fs.readFileSync(e).toString("utf8")
                                } catch (i) {
                                    return void (t || c(i))
                                }
                                d(e, n)
                            } else
                                ++h,
                                    r.fetch(e, (function (n, i) {
                                            --h,
                                            o && (n ? t ? h || c(null, r) : c(n) : d(e, i))
                                        }
                                    ))
                    }

                    var h = 0;
                    l.isString(t) && (t = [t]);
                    for (var m, v = 0; v < t.length; ++v)
                        (m = r.resolvePath("", t[v])) && p(m);
                    return s ? r : (h || c(null, r),
                        g)
                }
                ,
                d.prototype.loadSync = function (e, t) {
                    if (!l.isNode)
                        throw Error("not supported");
                    return this.load(e, t, f)
                }
                ,
                d.prototype.resolveAll = function () {
                    if (this.deferred.length)
                        throw Error("unresolvable extensions: " + this.deferred.map((function (e) {
                                return "'extend " + e.extend + "' in " + e.parent.fullName
                            }
                        )).join(", "));
                    return o.prototype.resolveAll.call(this)
                }
            ;
            var p = /^[A-Z]/;

            function h(e, t) {
                var n = t.parent.lookup(t.extend);
                if (n) {
                    var o = new s(t.fullName, t.id, t.type, t.rule, g, t.options);
                    return (o.declaringField = t).extensionField = o,
                        n.add(o),
                        1
                }
            }

            d.prototype.u = function (e) {
                if (e instanceof s)
                    e.extend === g || e.extensionField || h(0, e) || this.deferred.push(e);
                else if (e instanceof c)
                    p.test(e.name) && (e.parent[e.name] = e.values);
                else if (!(e instanceof u)) {
                    if (e instanceof r)
                        for (var t = 0; t < this.deferred.length;)
                            h(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                    for (var n = 0; n < e.nestedArray.length; ++n)
                        this.u(e.e[n]);
                    p.test(e.name) && (e.parent[e.name] = e)
                }
            }
                ,
                d.prototype.o = function (e) {
                    var t;
                    if (e instanceof s)
                        e.extend !== g && (e.extensionField ? (e.extensionField.parent.remove(e.extensionField),
                            e.extensionField = null) : -1 < (t = this.deferred.indexOf(e)) && this.deferred.splice(t, 1));
                    else if (e instanceof c)
                        p.test(e.name) && delete e.parent[e.name];
                    else if (e instanceof o) {
                        for (var n = 0; n < e.nestedArray.length; ++n)
                            this.o(e.e[n]);
                        p.test(e.name) && delete e.parent[e.name]
                    }
                }
                ,
                d.r = function (e, t, n) {
                    r = e,
                        i = t,
                        a = n
                }
        }
            , {
                14: 14,
                15: 15,
                21: 21,
                23: 23,
                33: 33
            }],
        27: [function (e, t, n) {
            t.exports = {}
        }
            , {}],
        28: [function (e, t, n) {
            n.Service = e(29)
        }
            , {
                29: 29
            }],
        29: [function (e, t, n) {
            t.exports = r;
            var o = e(35);

            function r(e, t, n) {
                if ("function" != typeof e)
                    throw TypeError("rpcImpl must be a function");
                o.EventEmitter.call(this),
                    this.rpcImpl = e,
                    this.requestDelimited = !!t,
                    this.responseDelimited = !!n
            }

            ((r.prototype = Object.create(o.EventEmitter.prototype)).constructor = r).prototype.rpcCall = function e(t, n, r, i, a) {
                if (!i)
                    throw TypeError("request must be specified");
                var s = this;
                if (!a)
                    return o.asPromise(e, s, t, n, r, i);
                if (!s.rpcImpl)
                    return setTimeout((function () {
                            a(Error("already ended"))
                        }
                    ), 0),
                        g;
                try {
                    return s.rpcImpl(t, n[s.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), (function (e, n) {
                            if (e)
                                return s.emit("error", e, t),
                                    a(e);
                            if (null === n)
                                return s.end(!0),
                                    g;
                            if (!(n instanceof r))
                                try {
                                    n = r[s.responseDelimited ? "decodeDelimited" : "decode"](n)
                                } catch (o) {
                                    return s.emit("error", o, t),
                                        a(o)
                                }
                            return s.emit("data", n, t),
                                a(null, n)
                        }
                    ))
                } catch (c) {
                    return s.emit("error", c, t),
                        setTimeout((function () {
                                a(c)
                            }
                        ), 0),
                        g
                }
            }
                ,
                r.prototype.end = function (e) {
                    return this.rpcImpl && (e || this.rpcImpl(null, null, null),
                        this.rpcImpl = null,
                        this.emit("end").off()),
                        this
                }
        }
            , {
                35: 35
            }],
        30: [function (e, t, n) {
            t.exports = s;
            var o = e(21);
            ((s.prototype = Object.create(o.prototype)).constructor = s).className = "Service";
            var r = e(20)
                , i = e(33)
                , a = e(28);

            function s(e, t) {
                o.call(this, e, t),
                    this.methods = {},
                    this.f = null
            }

            function c(e) {
                return e.f = null,
                    e
            }

            s.fromJSON = function (e, t) {
                var n = new s(e, t.options);
                if (t.methods)
                    for (var o = Object.keys(t.methods), i = 0; i < o.length; ++i)
                        n.add(r.fromJSON(o[i], t.methods[o[i]]));
                return t.nested && n.addJSON(t.nested),
                    n.comment = t.comment,
                    n
            }
                ,
                s.prototype.toJSON = function (e) {
                    var t = o.prototype.toJSON.call(this, e)
                        , n = !!e && !!e.keepComments;
                    return i.toObject(["options", t && t.options || g, "methods", o.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || g, "comment", n ? this.comment : g])
                }
                ,
                Object.defineProperty(s.prototype, "methodsArray", {
                    get: function () {
                        return this.f || (this.f = i.toArray(this.methods))
                    }
                }),
                s.prototype.get = function (e) {
                    return this.methods[e] || o.prototype.get.call(this, e)
                }
                ,
                s.prototype.resolveAll = function () {
                    for (var e = this.methodsArray, t = 0; t < e.length; ++t)
                        e[t].resolve();
                    return o.prototype.resolve.call(this)
                }
                ,
                s.prototype.add = function (e) {
                    if (this.get(e.name))
                        throw Error("duplicate name '" + e.name + "' in " + this);
                    return e instanceof r ? c((this.methods[e.name] = e).parent = this) : o.prototype.add.call(this, e)
                }
                ,
                s.prototype.remove = function (e) {
                    if (e instanceof r) {
                        if (this.methods[e.name] !== e)
                            throw Error(e + " is not a member of " + this);
                        return delete this.methods[e.name],
                            e.parent = null,
                            c(this)
                    }
                    return o.prototype.remove.call(this, e)
                }
                ,
                s.prototype.create = function (e, t, n) {
                    for (var o, r = new a.Service(e, t, n), s = 0; s < this.methodsArray.length; ++s) {
                        var c = i.lcFirst((o = this.f[s]).resolve().name).replace(/[^$\w_]/g, "");
                        r[c] = i.codegen(["r", "c"], i.isReserved(c) ? c + "_" : c)("return this.rpcCall(m,q,s,r,c)")({
                            m: o,
                            q: o.resolvedRequestType.ctor,
                            s: o.resolvedResponseType.ctor
                        })
                    }
                    return r
                }
        }
            , {
                20: 20,
                21: 21,
                28: 28,
                33: 33
            }],
        31: [function (e, t, n) {
            t.exports = y;
            var o = e(21);
            ((y.prototype = Object.create(o.prototype)).constructor = y).className = "Type";
            var r = e(14)
                , i = e(23)
                , a = e(15)
                , s = e(18)
                , c = e(30)
                , u = e(19)
                , l = e(24)
                , d = e(38)
                , f = e(33)
                , p = e(13)
                , h = e(12)
                , m = e(36)
                , v = e(11)
                , W = e(37);

            function y(e, t) {
                o.call(this, e, t),
                    this.fields = {},
                    this.oneofs = g,
                    this.extensions = g,
                    this.reserved = g,
                    this.group = g,
                    this.c = null,
                    this.i = null,
                    this.a = null,
                    this.l = null
            }

            function b(e) {
                return e.c = e.i = e.a = null,
                    delete e.encode,
                    delete e.decode,
                    delete e.verify,
                    e
            }

            Object.defineProperties(y.prototype, {
                fieldsById: {
                    get: function () {
                        if (this.c)
                            return this.c;
                        this.c = {};
                        for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
                            var n = this.fields[e[t]]
                                , o = n.id;
                            if (this.c[o])
                                throw Error("duplicate id " + o + " in " + this);
                            this.c[o] = n
                        }
                        return this.c
                    }
                },
                fieldsArray: {
                    get: function () {
                        return this.i || (this.i = f.toArray(this.fields))
                    }
                },
                oneofsArray: {
                    get: function () {
                        return this.a || (this.a = f.toArray(this.oneofs))
                    }
                },
                ctor: {
                    get: function () {
                        return this.l || (this.ctor = y.generateConstructor(this)())
                    },
                    set: function (e) {
                        var t = e.prototype;
                        t instanceof u || ((e.prototype = new u).constructor = e,
                            f.merge(e.prototype, t)),
                            e.$type = e.prototype.$type = this,
                            f.merge(e, u, !0),
                            this.l = e;
                        for (var n = 0; n < this.fieldsArray.length; ++n)
                            this.i[n].resolve();
                        var o = {};
                        for (n = 0; n < this.oneofsArray.length; ++n)
                            o[this.a[n].resolve().name] = {
                                get: f.oneOfGetter(this.a[n].oneof),
                                set: f.oneOfSetter(this.a[n].oneof)
                            };
                        n && Object.defineProperties(e.prototype, o)
                    }
                }
            }),
                y.generateConstructor = function (e) {
                    for (var t, n = f.codegen(["p"], e.name), o = 0; o < e.fieldsArray.length; ++o)
                        (t = e.i[o]).map ? n("this%s={}", f.safeProp(t.name)) : t.repeated && n("this%s=[]", f.safeProp(t.name));
                    return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
                }
                ,
                y.fromJSON = function (e, t) {
                    var n = new y(e, t.options);
                    n.extensions = t.extensions,
                        n.reserved = t.reserved;
                    for (var u = Object.keys(t.fields), l = 0; l < u.length; ++l)
                        n.add((void 0 !== t.fields[u[l]].keyType ? s : a).fromJSON(u[l], t.fields[u[l]]));
                    if (t.oneofs)
                        for (u = Object.keys(t.oneofs),
                                 l = 0; l < u.length; ++l)
                            n.add(i.fromJSON(u[l], t.oneofs[u[l]]));
                    if (t.nested)
                        for (u = Object.keys(t.nested),
                                 l = 0; l < u.length; ++l) {
                            var d = t.nested[u[l]];
                            n.add((d.id !== g ? a : d.fields !== g ? y : d.values !== g ? r : d.methods !== g ? c : o).fromJSON(u[l], d))
                        }
                    return t.extensions && t.extensions.length && (n.extensions = t.extensions),
                    t.reserved && t.reserved.length && (n.reserved = t.reserved),
                    t.group && (n.group = !0),
                    t.comment && (n.comment = t.comment),
                        n
                }
                ,
                y.prototype.toJSON = function (e) {
                    var t = o.prototype.toJSON.call(this, e)
                        , n = !!e && !!e.keepComments;
                    return f.toObject(["options", t && t.options || g, "oneofs", o.arrayToJSON(this.oneofsArray, e), "fields", o.arrayToJSON(this.fieldsArray.filter((function (e) {
                            return !e.declaringField
                        }
                    )), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : g, "reserved", this.reserved && this.reserved.length ? this.reserved : g, "group", this.group || g, "nested", t && t.nested || g, "comment", n ? this.comment : g])
                }
                ,
                y.prototype.resolveAll = function () {
                    for (var e = this.fieldsArray, t = 0; t < e.length;)
                        e[t++].resolve();
                    var n = this.oneofsArray;
                    for (t = 0; t < n.length;)
                        n[t++].resolve();
                    return o.prototype.resolveAll.call(this)
                }
                ,
                y.prototype.get = function (e) {
                    return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null
                }
                ,
                y.prototype.add = function (e) {
                    if (this.get(e.name))
                        throw Error("duplicate name '" + e.name + "' in " + this);
                    if (e instanceof a && e.extend === g) {
                        if ((this.c || this.fieldsById)[e.id])
                            throw Error("duplicate id " + e.id + " in " + this);
                        if (this.isReservedId(e.id))
                            throw Error("id " + e.id + " is reserved in " + this);
                        if (this.isReservedName(e.name))
                            throw Error("name '" + e.name + "' is reserved in " + this);
                        return e.parent && e.parent.remove(e),
                            (this.fields[e.name] = e).message = this,
                            e.onAdd(this),
                            b(this)
                    }
                    return e instanceof i ? (this.oneofs || (this.oneofs = {}),
                        (this.oneofs[e.name] = e).onAdd(this),
                        b(this)) : o.prototype.add.call(this, e)
                }
                ,
                y.prototype.remove = function (e) {
                    if (e instanceof a && e.extend === g) {
                        if (!this.fields || this.fields[e.name] !== e)
                            throw Error(e + " is not a member of " + this);
                        return delete this.fields[e.name],
                            e.parent = null,
                            e.onRemove(this),
                            b(this)
                    }
                    if (e instanceof i) {
                        if (!this.oneofs || this.oneofs[e.name] !== e)
                            throw Error(e + " is not a member of " + this);
                        return delete this.oneofs[e.name],
                            e.parent = null,
                            e.onRemove(this),
                            b(this)
                    }
                    return o.prototype.remove.call(this, e)
                }
                ,
                y.prototype.isReservedId = function (e) {
                    return o.isReservedId(this.reserved, e)
                }
                ,
                y.prototype.isReservedName = function (e) {
                    return o.isReservedName(this.reserved, e)
                }
                ,
                y.prototype.create = function (e) {
                    return new this.ctor(e)
                }
                ,
                y.prototype.setup = function () {
                    for (var e = this.fullName, t = [], n = 0; n < this.fieldsArray.length; ++n)
                        t.push(this.i[n].resolve().resolvedType);
                    this.encode = p(this)({
                        Writer: d,
                        types: t,
                        util: f
                    }),
                        this.decode = h(this)({
                            Reader: l,
                            types: t,
                            util: f
                        }),
                        this.verify = m(this)({
                            types: t,
                            util: f
                        }),
                        this.fromObject = v.fromObject(this)({
                            types: t,
                            util: f
                        }),
                        this.toObject = v.toObject(this)({
                            types: t,
                            util: f
                        });
                    var o = W[e];
                    return o && ((e = Object.create(this)).fromObject = this.fromObject,
                        this.fromObject = o.fromObject.bind(e),
                        e.toObject = this.toObject,
                        this.toObject = o.toObject.bind(e)),
                        this
                }
                ,
                y.prototype.encode = function (e, t) {
                    return this.setup().encode(e, t)
                }
                ,
                y.prototype.encodeDelimited = function (e, t) {
                    return this.encode(e, t && t.len ? t.fork() : t).ldelim()
                }
                ,
                y.prototype.decode = function (e, t) {
                    return this.setup().decode(e, t)
                }
                ,
                y.prototype.decodeDelimited = function (e) {
                    return e instanceof l || (e = l.create(e)),
                        this.decode(e, e.uint32())
                }
                ,
                y.prototype.verify = function (e) {
                    return this.setup().verify(e)
                }
                ,
                y.prototype.fromObject = function (e) {
                    return this.setup().fromObject(e)
                }
                ,
                y.prototype.toObject = function (e, t) {
                    return this.setup().toObject(e, t)
                }
                ,
                y.d = function (e) {
                    return function (t) {
                        f.decorateType(t, e)
                    }
                }
        }
            , {
                11: 11,
                12: 12,
                13: 13,
                14: 14,
                15: 15,
                18: 18,
                19: 19,
                21: 21,
                23: 23,
                24: 24,
                30: 30,
                33: 33,
                36: 36,
                37: 37,
                38: 38
            }],
        32: [function (e, t, n) {
            e = e(33);
            var o = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

            function r(e, t) {
                var n = 0
                    , r = {};
                for (t |= 0; n < e.length;)
                    r[o[n + t]] = e[n++];
                return r
            }

            n.basic = r([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]),
                n.defaults = r([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", e.emptyArray, null]),
                n.long = r([0, 0, 0, 1, 1], 7),
                n.mapKey = r([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2),
                n.packed = r([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
        }
            , {
                33: 33
            }],
        33: [function (e, t, n) {
            var o, r, i = t.exports = e(35), a = e(27);
            i.codegen = e(3),
                i.fetch = e(5),
                i.path = e(8),
                i.fs = i.inquire("fs"),
                i.toArray = function (e) {
                    if (e) {
                        for (var t = Object.keys(e), n = Array(t.length), o = 0; o < t.length;)
                            n[o] = e[t[o++]];
                        return n
                    }
                    return []
                }
                ,
                i.toObject = function (e) {
                    for (var t = {}, n = 0; n < e.length;) {
                        var o = e[n++]
                            , r = e[n++];
                        r !== g && (t[o] = r)
                    }
                    return t
                }
            ;
            var s = /\\/g
                , c = /"/g;
            i.isReserved = function (e) {
                return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e)
            }
                ,
                i.safeProp = function (e) {
                    return !/^[$\w_]+$/.test(e) || i.isReserved(e) ? '["' + e.replace(s, "\\\\").replace(c, '\\"') + '"]' : "." + e
                }
                ,
                i.ucFirst = function (e) {
                    return (e[0] || "").toUpperCase() + e.substring(1)
                }
            ;
            var u = /_([a-z])/g;
            i.camelCase = function (e) {
                return e.substring(0, 1) + e.substring(1).replace(u, (function (e, t) {
                        return t.toUpperCase()
                    }
                ))
            }
                ,
                i.compareFieldsById = function (e, t) {
                    return e.id - t.id
                }
                ,
                i.decorateType = function (t, n) {
                    return t.$type ? (n && t.$type.name !== n && (i.decorateRoot.remove(t.$type),
                        t.$type.name = n,
                        i.decorateRoot.add(t.$type)),
                        t.$type) : (n = new (o = o || e(31))(n || t.name),
                        i.decorateRoot.add(n),
                        n.ctor = t,
                        Object.defineProperty(t, "$type", {
                            value: n,
                            enumerable: !1
                        }),
                        Object.defineProperty(t.prototype, "$type", {
                            value: n,
                            enumerable: !1
                        }),
                        n)
                }
            ;
            var l = 0;
            i.decorateEnum = function (t) {
                if (t.$type)
                    return t.$type;
                var n = new (r = r || e(14))("Enum" + l++, t);
                return i.decorateRoot.add(n),
                    Object.defineProperty(t, "$type", {
                        value: n,
                        enumerable: !1
                    }),
                    n
            }
                ,
                i.setProperty = function (e, t, n) {
                    if ("object" != typeof e)
                        throw TypeError("dst must be an object");
                    if (!t)
                        throw TypeError("path must be specified");
                    return function e(t, n, o) {
                        var r = n.shift();
                        return 0 < n.length ? t[r] = e(t[r] || {}, n, o) : ((n = t[r]) && (o = [].concat(n).concat(o)),
                            t[r] = o),
                            t
                    }(e, t = t.split("."), n)
                }
                ,
                Object.defineProperty(i, "decorateRoot", {
                    get: function () {
                        return a.decorated || (a.decorated = new (e(26)))
                    }
                })
        }
            , {
                14: 14,
                26: 26,
                27: 27,
                3: 3,
                31: 31,
                35: 35,
                5: 5,
                8: 8
            }],
        34: [function (e, t, n) {
            t.exports = r;
            var o = e(35);

            function r(e, t) {
                this.lo = e >>> 0,
                    this.hi = t >>> 0
            }

            var i = r.zero = new r(0, 0);
            i.toNumber = function () {
                return 0
            }
                ,
                i.zzEncode = i.zzDecode = function () {
                    return this
                }
                ,
                i.length = function () {
                    return 1
                }
                ,
                r.zeroHash = "\0\0\0\0\0\0\0\0",
                r.fromNumber = function (e) {
                    if (0 === e)
                        return i;
                    var t = e < 0
                        , n = (e = t ? -e : e) >>> 0;
                    e = (e - n) / 4294967296 >>> 0;
                    return t && (e = ~e >>> 0,
                        n = ~n >>> 0,
                    4294967295 < ++n && (n = 0,
                    4294967295 < ++e && (e = 0))),
                        new r(n, e)
                }
                ,
                r.from = function (e) {
                    if ("number" == typeof e)
                        return r.fromNumber(e);
                    if (o.isString(e)) {
                        if (!o.Long)
                            return r.fromNumber(parseInt(e, 10));
                        e = o.Long.fromString(e)
                    }
                    return e.low || e.high ? new r(e.low >>> 0, e.high >>> 0) : i
                }
                ,
                r.prototype.toNumber = function (e) {
                    if (!e && this.hi >>> 31) {
                        var t = 1 + ~this.lo >>> 0;
                        e = ~this.hi >>> 0;
                        return -(t + 4294967296 * (e = t ? e : e + 1 >>> 0))
                    }
                    return this.lo + 4294967296 * this.hi
                }
                ,
                r.prototype.toLong = function (e) {
                    return o.Long ? new o.Long(0 | this.lo, 0 | this.hi, !!e) : {
                        low: 0 | this.lo,
                        high: 0 | this.hi,
                        unsigned: !!e
                    }
                }
            ;
            var a = String.prototype.charCodeAt;
            r.fromHash = function (e) {
                return "\0\0\0\0\0\0\0\0" === e ? i : new r((a.call(e, 0) | a.call(e, 1) << 8 | a.call(e, 2) << 16 | a.call(e, 3) << 24) >>> 0, (a.call(e, 4) | a.call(e, 5) << 8 | a.call(e, 6) << 16 | a.call(e, 7) << 24) >>> 0)
            }
                ,
                r.prototype.toHash = function () {
                    return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
                }
                ,
                r.prototype.zzEncode = function () {
                    var e = this.hi >> 31;
                    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0,
                        this.lo = (this.lo << 1 ^ e) >>> 0,
                        this
                }
                ,
                r.prototype.zzDecode = function () {
                    var e = -(1 & this.lo);
                    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0,
                        this.hi = (this.hi >>> 1 ^ e) >>> 0,
                        this
                }
                ,
                r.prototype.length = function () {
                    var e = this.lo
                        , t = (this.lo >>> 28 | this.hi << 4) >>> 0
                        , n = this.hi >>> 24;
                    return 0 == n ? 0 == t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : n < 128 ? 9 : 10
                }
        }
            , {
                35: 35
            }],
        35: [function (e, t, n) {
            var o = n;

            function r(e, t, n) {
                for (var o = Object.keys(t), r = 0; r < o.length; ++r)
                    e[o[r]] !== g && n || (e[o[r]] = t[o[r]]);
                return e
            }

            function i(e) {
                function t(e, n) {
                    if (!(this instanceof t))
                        return new t(e, n);
                    Object.defineProperty(this, "message", {
                        get: function () {
                            return e
                        }
                    }),
                        Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
                            value: Error().stack || ""
                        }),
                    n && r(this, n)
                }

                return (t.prototype = Object.create(Error.prototype)).constructor = t,
                    Object.defineProperty(t.prototype, "name", {
                        get: function () {
                            return e
                        }
                    }),
                    t.prototype.toString = function () {
                        return this.name + ": " + this.message
                    }
                    ,
                    t
            }

            o.asPromise = e(1),
                o.base64 = e(2),
                o.EventEmitter = e(4),
                o.float = e(6),
                o.inquire = e(7),
                o.utf8 = e(10),
                o.pool = e(9),
                o.LongBits = e(34),
                o.isNode = !!(void 0 !== commonjsGlobal && commonjsGlobal && commonjsGlobal.process && commonjsGlobal.process.versions && commonjsGlobal.process.versions.node),
                o.global = o.isNode && commonjsGlobal || "undefined" != typeof window && window || "undefined" != typeof self && self || this,
                o.emptyArray = Object.freeze ? Object.freeze([]) : [],
                o.emptyObject = Object.freeze ? Object.freeze({}) : {},
                o.isInteger = Number.isInteger || function (e) {
                    return "number" == typeof e && isFinite(e) && Math.floor(e) === e
                }
                ,
                o.isString = function (e) {
                    return "string" == typeof e || e instanceof String
                }
                ,
                o.isObject = function (e) {
                    return e && "object" == typeof e
                }
                ,
                o.isset = o.isSet = function (e, t) {
                    var n = e[t];
                    return null != n && e.hasOwnProperty(t) && ("object" != typeof n || 0 < (Array.isArray(n) ? n : Object.keys(n)).length)
                }
                ,
                o.Buffer = function () {
                    try {
                        var e = o.inquire("buffer").Buffer;
                        return e.prototype.utf8Write ? e : null
                    } catch (t) {
                        return null
                    }
                }(),
                o.v = null,
                o.b = null,
                o.newBuffer = function (e) {
                    return "number" == typeof e ? o.Buffer ? o.b(e) : new o.Array(e) : o.Buffer ? o.v(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e)
                }
                ,
                o.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                o.Long = o.global.dcodeIO && o.global.dcodeIO.Long || o.global.Long || o.inquire("long"),
                o.key2Re = /^true|false|0|1$/,
                o.key32Re = /^-?(?:0|[1-9][0-9]*)$/,
                o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,
                o.longToHash = function (e) {
                    return e ? o.LongBits.from(e).toHash() : o.LongBits.zeroHash
                }
                ,
                o.longFromHash = function (e, t) {
                    return e = o.LongBits.fromHash(e),
                        o.Long ? o.Long.fromBits(e.lo, e.hi, t) : e.toNumber(!!t)
                }
                ,
                o.merge = r,
                o.lcFirst = function (e) {
                    return (e[0] || "").toLowerCase() + e.substring(1)
                }
                ,
                o.newError = i,
                o.ProtocolError = i("ProtocolError"),
                o.oneOfGetter = function (e) {
                    for (var t = {}, n = 0; n < e.length; ++n)
                        t[e[n]] = 1;
                    return function () {
                        for (var e = Object.keys(this), n = e.length - 1; -1 < n; --n)
                            if (1 === t[e[n]] && this[e[n]] !== g && null !== this[e[n]])
                                return e[n]
                    }
                }
                ,
                o.oneOfSetter = function (e) {
                    return function (t) {
                        for (var n = 0; n < e.length; ++n)
                            e[n] !== t && delete this[e[n]]
                    }
                }
                ,
                o.toJSONOptions = {
                    longs: String,
                    enums: String,
                    bytes: String,
                    json: !0
                },
                o.r = function () {
                    var e = o.Buffer;
                    e ? (o.v = e.from !== Uint8Array.from && e.from || function (t, n) {
                            return new e(t, n)
                        }
                            ,
                            o.b = e.allocUnsafe || function (t) {
                                return new e(t)
                            }
                    ) : o.v = o.b = null
                }
        }
            , {
                1: 1,
                10: 10,
                2: 2,
                34: 34,
                4: 4,
                6: 6,
                7: 7,
                9: 9
            }],
        36: [function (e, t, n) {
            t.exports = function (e) {
                var t = r.codegen(["m"], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected")
                    , n = {};
                e.oneofsArray.length && t("var p={}");
                for (var o = 0; o < e.fieldsArray.length; ++o) {
                    var s, c = e.i[o].resolve(), u = "m" + r.safeProp(c.name);
                    c.optional && t("if(%s!=null&&m.hasOwnProperty(%j)){", u, c.name),
                        c.map ? (t("if(!util.isObject(%s))", u)("return%j", i(c, "object"))("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){"),
                            function (e, t, n) {
                                switch (t.keyType) {
                                    case "int32":
                                    case "uint32":
                                    case "sint32":
                                    case "fixed32":
                                    case "sfixed32":
                                        e("if(!util.key32Re.test(%s))", n)("return%j", i(t, "integer key"));
                                        break;
                                    case "int64":
                                    case "uint64":
                                    case "sint64":
                                    case "fixed64":
                                    case "sfixed64":
                                        e("if(!util.key64Re.test(%s))", n)("return%j", i(t, "integer|Long key"));
                                        break;
                                    case "bool":
                                        e("if(!util.key2Re.test(%s))", n)("return%j", i(t, "boolean key"))
                                }
                            }(t, c, "k[i]"),
                            a(t, c, o, u + "[k[i]]")("}")) : c.repeated ? (t("if(!Array.isArray(%s))", u)("return%j", i(c, "array"))("for(var i=0;i<%s.length;++i){", u),
                            a(t, c, o, u + "[i]")("}")) : (c.partOf && (s = r.safeProp(c.partOf.name),
                        1 === n[c.partOf.name] && t("if(p%s===1)", s)("return%j", c.partOf.name + ": multiple values"),
                            n[c.partOf.name] = 1,
                            t("p%s=1", s)),
                            a(t, c, o, u)),
                    c.optional && t("}")
                }
                return t("return null")
            }
            ;
            var o = e(14)
                , r = e(33);

            function i(e, t) {
                return e.name + ": " + t + (e.repeated && "array" !== t ? "[]" : e.map && "object" !== t ? "{k:" + e.keyType + "}" : "") + " expected"
            }

            function a(e, t, n, r) {
                if (t.resolvedType)
                    if (t.resolvedType instanceof o) {
                        e("switch(%s){", r)("default:")("return%j", i(t, "enum value"));
                        for (var a = Object.keys(t.resolvedType.values), s = 0; s < a.length; ++s)
                            e("case %i:", t.resolvedType.values[a[s]]);
                        e("break")("}")
                    } else
                        e("{")("var e=types[%i].verify(%s);", n, r)("if(e)")("return%j+e", t.name + ".")("}");
                else
                    switch (t.type) {
                        case "int32":
                        case "uint32":
                        case "sint32":
                        case "fixed32":
                        case "sfixed32":
                            e("if(!util.isInteger(%s))", r)("return%j", i(t, "integer"));
                            break;
                        case "int64":
                        case "uint64":
                        case "sint64":
                        case "fixed64":
                        case "sfixed64":
                            e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", r, r, r, r)("return%j", i(t, "integer|Long"));
                            break;
                        case "float":
                        case "double":
                            e('if(typeof %s!=="number")', r)("return%j", i(t, "number"));
                            break;
                        case "bool":
                            e('if(typeof %s!=="boolean")', r)("return%j", i(t, "boolean"));
                            break;
                        case "string":
                            e("if(!util.isString(%s))", r)("return%j", i(t, "string"));
                            break;
                        case "bytes":
                            e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', r, r, r)("return%j", i(t, "buffer"))
                    }
                return e
            }
        }
            , {
                14: 14,
                33: 33
            }],
        37: [function (e, t, n) {
            var o = e(19);
            n[".google.protobuf.Any"] = {
                fromObject: function (e) {
                    if (e && e["@type"]) {
                        var t = e["@type"].substring(1 + e["@type"].lastIndexOf("/"))
                            , n = this.lookup(t);
                        if (n)
                            return ~(t = "." == (e["@type"][0] || "") ? e["@type"].substr(1) : e["@type"]).indexOf("/") || (t = "/" + t),
                                this.create({
                                    type_url: t,
                                    value: n.encode(n.fromObject(e)).finish()
                                })
                    }
                    return this.fromObject(e)
                },
                toObject: function (e, t) {
                    var n, r = "", i = "";
                    return t && t.json && e.type_url && e.value && (i = e.type_url.substring(1 + e.type_url.lastIndexOf("/")),
                        r = e.type_url.substring(0, 1 + e.type_url.lastIndexOf("/")),
                    (n = this.lookup(i)) && (e = n.decode(e.value))),
                        e instanceof this.ctor || !(e instanceof o) ? this.toObject(e, t) : (t = e.$type.toObject(e, t),
                            e = "." === e.$type.fullName[0] ? e.$type.fullName.substr(1) : e.$type.fullName,
                            t["@type"] = i = (r = "" === r ? "type.googleapis.com/" : r) + e,
                            t)
                }
            }
        }
            , {
                19: 19
            }],
        38: [function (e, t, n) {
            t.exports = d;
            var o, r = e(35), i = r.LongBits, a = r.base64, s = r.utf8;

            function c(e, t, n) {
                this.fn = e,
                    this.len = t,
                    this.next = g,
                    this.val = n
            }

            function u() {
            }

            function l(e) {
                this.head = e.head,
                    this.tail = e.tail,
                    this.len = e.len,
                    this.next = e.states
            }

            function d() {
                this.len = 0,
                    this.head = new c(u, 0, 0),
                    this.tail = this.head,
                    this.states = null
            }

            function f() {
                return r.Buffer ? function () {
                        return (d.create = function () {
                                return new o
                            }
                        )()
                    }
                    : function () {
                        return new d
                    }
            }

            function p(e, t, n) {
                t[n] = 255 & e
            }

            function h(e, t) {
                this.len = e,
                    this.next = g,
                    this.val = t
            }

            function m(e, t, n) {
                for (; e.hi;)
                    t[n++] = 127 & e.lo | 128,
                        e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0,
                        e.hi >>>= 7;
                for (; 127 < e.lo;)
                    t[n++] = 127 & e.lo | 128,
                        e.lo = e.lo >>> 7;
                t[n++] = e.lo
            }

            function v(e, t, n) {
                t[n] = 255 & e,
                    t[n + 1] = e >>> 8 & 255,
                    t[n + 2] = e >>> 16 & 255,
                    t[n + 3] = e >>> 24
            }

            d.create = f(),
                d.alloc = function (e) {
                    return new r.Array(e)
                }
                ,
            r.Array !== Array && (d.alloc = r.pool(d.alloc, r.Array.prototype.subarray)),
                d.prototype.p = function (e, t, n) {
                    return this.tail = this.tail.next = new c(e, t, n),
                        this.len += t,
                        this
                }
                ,
                (h.prototype = Object.create(c.prototype)).fn = function (e, t, n) {
                    for (; 127 < e;)
                        t[n++] = 127 & e | 128,
                            e >>>= 7;
                    t[n] = e
                }
                ,
                d.prototype.uint32 = function (e) {
                    return this.len += (this.tail = this.tail.next = new h((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len,
                        this
                }
                ,
                d.prototype.int32 = function (e) {
                    return e < 0 ? this.p(m, 10, i.fromNumber(e)) : this.uint32(e)
                }
                ,
                d.prototype.sint32 = function (e) {
                    return this.uint32((e << 1 ^ e >> 31) >>> 0)
                }
                ,
                d.prototype.int64 = d.prototype.uint64 = function (e) {
                    return e = i.from(e),
                        this.p(m, e.length(), e)
                }
                ,
                d.prototype.sint64 = function (e) {
                    return e = i.from(e).zzEncode(),
                        this.p(m, e.length(), e)
                }
                ,
                d.prototype.bool = function (e) {
                    return this.p(p, 1, e ? 1 : 0)
                }
                ,
                d.prototype.sfixed32 = d.prototype.fixed32 = function (e) {
                    return this.p(v, 4, e >>> 0)
                }
                ,
                d.prototype.sfixed64 = d.prototype.fixed64 = function (e) {
                    return e = i.from(e),
                        this.p(v, 4, e.lo).p(v, 4, e.hi)
                }
                ,
                d.prototype.float = function (e) {
                    return this.p(r.float.writeFloatLE, 4, e)
                }
                ,
                d.prototype.double = function (e) {
                    return this.p(r.float.writeDoubleLE, 8, e)
                }
            ;
            var W = r.Array.prototype.set ? function (e, t, n) {
                        t.set(e, n)
                    }
                    : function (e, t, n) {
                        for (var o = 0; o < e.length; ++o)
                            t[n + o] = e[o]
                    }
            ;
            d.prototype.bytes = function (e) {
                var t, n = e.length >>> 0;
                return n ? (r.isString(e) && (t = d.alloc(n = a.length(e)),
                    a.decode(e, t, 0),
                    e = t),
                    this.uint32(n).p(W, n, e)) : this.p(p, 1, 0)
            }
                ,
                d.prototype.string = function (e) {
                    var t = s.length(e);
                    return t ? this.uint32(t).p(s.write, t, e) : this.p(p, 1, 0)
                }
                ,
                d.prototype.fork = function () {
                    return this.states = new l(this),
                        this.head = this.tail = new c(u, 0, 0),
                        this.len = 0,
                        this
                }
                ,
                d.prototype.reset = function () {
                    return this.states ? (this.head = this.states.head,
                        this.tail = this.states.tail,
                        this.len = this.states.len,
                        this.states = this.states.next) : (this.head = this.tail = new c(u, 0, 0),
                        this.len = 0),
                        this
                }
                ,
                d.prototype.ldelim = function () {
                    var e = this.head
                        , t = this.tail
                        , n = this.len;
                    return this.reset().uint32(n),
                    n && (this.tail.next = e.next,
                        this.tail = t,
                        this.len += n),
                        this
                }
                ,
                d.prototype.finish = function () {
                    for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e;)
                        e.fn(e.val, t, n),
                            n += e.len,
                            e = e.next;
                    return t
                }
                ,
                d.r = function (e) {
                    o = e,
                        d.create = f(),
                        o.r()
                }
        }
            , {
                35: 35
            }],
        39: [function (e, t, n) {
            t.exports = i;
            var o = e(38);
            (i.prototype = Object.create(o.prototype)).constructor = i;
            var r = e(35);

            function i() {
                o.call(this)
            }

            function a(e, t, n) {
                e.length < 40 ? r.utf8.write(e, t, n) : t.utf8Write ? t.utf8Write(e, n) : t.write(e, n)
            }

            i.r = function () {
                i.alloc = r.b,
                    i.writeBytesBuffer = r.Buffer && r.Buffer.prototype instanceof Uint8Array && "set" === r.Buffer.prototype.set.name ? function (e, t, n) {
                            t.set(e, n)
                        }
                        : function (e, t, n) {
                            if (e.copy)
                                e.copy(t, n, 0, e.length);
                            else
                                for (var o = 0; o < e.length;)
                                    t[n++] = e[o++]
                        }
            }
                ,
                i.prototype.bytes = function (e) {
                    var t = (e = r.isString(e) ? r.v(e, "base64") : e).length >>> 0;
                    return this.uint32(t),
                    t && this.p(i.writeBytesBuffer, t, e),
                        this
                }
                ,
                i.prototype.string = function (e) {
                    var t = r.Buffer.byteLength(e);
                    return this.uint32(t),
                    t && this.p(a, t, e),
                        this
                }
                ,
                i.r()
        }
            , {
                35: 35,
                38: 38
            }]
    },
        e = {},
        t = [16],
        i = function t(n) {
            var o = e[n];
            return o || r[n][0].call(o = e[n] = {
                exports: {}
            }, t, o, o.exports),
                o.exports
        }(t[0]),
        i.util.global.protobuf = i,
    module && module.exports && (module.exports = i)
    // 方法存放在i变量中
    writer_ = i;
}()

function PolicyInfoByTypeIdParam_encode(m, w) {
    if (!w)
        w = writer_.Writer.create()
    if (m.policyType != null && Object.hasOwnProperty.call(m, "policyType"))
        w.uint32(10).string(m.policyType)
    if (m.centralId != null && Object.hasOwnProperty.call(m, "centralId"))
        w.uint32(18).string(m.centralId)
    if (m.province != null && Object.hasOwnProperty.call(m, "province"))
        w.uint32(26).string(m.province)
    if (m.city != null && Object.hasOwnProperty.call(m, "city"))
        w.uint32(34).string(m.city)
    if (m.downtown != null && Object.hasOwnProperty.call(m, "downtown"))
        w.uint32(42).string(m.downtown)
    if (m.garden != null && Object.hasOwnProperty.call(m, "garden"))
        w.uint32(50).string(m.garden)
    if (m.sort != null && Object.hasOwnProperty.call(m, "sort"))
        w.uint32(56).uint32(m.sort)
    if (m.pageNum != null && Object.hasOwnProperty.call(m, "pageNum"))
        w.uint32(64).uint32(m.pageNum)
    if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
        w.uint32(72).uint32(m.pageSize)
    if (m.homePageFlag != null && Object.hasOwnProperty.call(m, "homePageFlag"))
        w.uint32(80).uint32(m.homePageFlag)
    return w
}

/**
 * 接收类型和页号，返回请求所需的参数
 * @param type 类型，str
 * @param page 页号，int
 * @returns {*} 加密后的数据，字典格式，数据在"data"
 */
function get_data(type, page) {
    var data = {
        "policyType": type,
        "province": "",
        "city": "",
        "downtown": "",
        "garden": "",
        "centralId": "",
        "sort": 0,
        "homePageFlag": 1,
        "pageNum": page,
        "pageSize": 7
    }
    result = PolicyInfoByTypeIdParam_encode(data).finish().slice()

    return result;
}

console.log(get_data("3", 1))