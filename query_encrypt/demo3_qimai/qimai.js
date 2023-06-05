function v(t) {
    // 找到这里使用的方法
    // t = z[V1](t)[T](/%([0-9A-F]{2})/g, function(n, t) {
    t = encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (n, t) {
        // 这里的Y1是个固定字符
        // return o(Y1 + t)
        return o("0x" + t)
    });
    try {
        // boat方法
        // return z[Q1](t)
        return btoa(t)
    } catch (n) {
        // 找到这个方法
        // return z[W1][K1](t)[U1](Z1)
        return Buffer.from(t).toString("base64")
    }
}


function o(n) {
    let f2 = '66';
    let s2 = '72';
    let d2 = '6f';
    let m2 = '6d';
    let l2 = '43';
    let v2 = '68';
    let p2 = '61';
    let h2 = '64';
    let y2 = '65';
    t = "",

        [f2, s2, d2, m2, l2, v2, p2, s2, l2, d2, h2, y2].forEach(function (n) {
            t += unescape("%u00" + n)
        });
    var t, e = t;
    // 调试时这里的e一直是undefined，通过打断点再调试确定为这个方法
    // return z[b2][e](n)
    return String.fromCharCode(n)
}

function h(n, t) {
    t = t || u();
    // 替换方法和值
    // for (var e = (n = n[$1](_))[R], r = t[R], a = q1, i = H; i < e; i++)
    for (var e = (n = n.split("")).length, r = t.length, a = "charCodeAt", i = 0; i < e; i++)
        n[i] = o(n[i][a](0) ^ t[(i + 10) % r][a](0));
    // return n[I1](_)
    return n.join("")
}

function url(pass) {
    var s = 1359
    var H = 0
    var e, r = +new Date() - (s || H) - 1661224081041, a = [];
    var v1 = "@#"
    // 固定值
    var d = "xyz517cda96abcd"

    // a = a[Ot]()[I1](_),
    a = a.sort().join("")

    // 这里调用了一个去掉域名的方法，但我们传的是后面的接口路径，所以直接使用
    // a = (a += v + t[Jt][T](t[Mt], _)) + (v + r) + (v + 3),
    a = (a += v1 + pass) + (v1 + r) + (v1 + 3)

    // 在调试工具里找到这两个方法，复制到上面
    // e = (0,
    //     i[jt])((0,
    //     i[qt])(a, d))
    e = (0,
        v)((0,
        h)(a, d))
    return e
}

const pass = "/rank/indexPlus/brand_id/1"
console.log(url(pass));