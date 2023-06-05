function v(t) {
    t = encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (n, t) {
        return o("0x" + t)
    });
    try {
        return btoa(t)
    } catch (n) {
        return Buffer.from(t).toString("base64")
    }
}

function o(n) {
    var f2 = '66';
    var s2 = '72';
    var d2 = '6f';
    var m2 = '6d';
    var l2 = '43';
    var v2 = '68';
    var p2 = '61';
    var h2 = '64';
    var y2 = '65';
    t = "",

        [f2, s2, d2, m2, l2, v2, p2, s2, l2, d2, h2, y2].forEach(function (n) {
            t += unescape("%u00" + n)
        });
    var t, e = t;
    return String.fromCharCode(n)
}

function h(n, t) {
    t = t || u();
    for (var e = (n = n.split("")).length, r = t.length, a = "charCodeAt", i = 0; i < e; i++)
        n[i] = o(n[i][a](0) ^ t[(i + 10) % r][a](0));
    return n.join("")
}

function url(pass) {
    var s = 1359
    var H = 0
    var e, r = +new Date() - (s || H) - 1661224081041, a = [];
    var v1 = "@#"
    var d = "xyz517cda96abcd"
    a = a.sort().join("")
    a = (a += v1 + pass) + (v1 + r) + (v1 + 3),
        e = (0,
            v)((0,
            h)(a, d))
    return e
}

const pass = "/rank/indexPlus/brand_id/1"
console.log(url(pass));