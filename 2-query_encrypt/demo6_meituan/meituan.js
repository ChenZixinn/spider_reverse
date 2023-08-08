// 加密的方法，reload是加密，reqUrlAndParams是要加密的字符串
var token = window.Rohr_Opt.reload(reqUrlAndParams);

var iI = function (jc) {
    // 把值转为json字符串
    // 字典是无序的，所以前面的排序是不需要的步骤
    jc = cD.deflate(JSON.stringify(jc));
    // 看返回结果判断是什么压缩，1、如果是数组则是二进制压缩，2、ascii码映射
    // 这里返回结果是数组
    jc = iD(jc);
    return jc
};

var iJ = function (je) {
    var jd = [];
    var ck = Object.keys(je).sort();
    ck.forEach(function (jf, bx) {
        if (jf !== _$_543c[136] && jf !== _$_543c[137]) {
            jd.push(jf + _$_543c[122] + je[jf])
        }
    });
    jd = jd.join(_$_543c[121]);
    // jd=被排序过的请求参数
    return iI(jd)
};

// jv=reqUrlAndParams 不带_token的请求参数
function reload(jv) {
    var jw;
    var jx = {};

    // 生成jx：把字符串的参数转换为字典形式
    if (typeof jv === _$_543c[91]) {
        jx = iO.parse(jv.split(_$_543c[146])[1])
    } else {
        if (typeof jv === _$_543c[2]) {
            jx = jv
        }
    }


    ;iP.sign = iJ(jx);
    iP.cts = new Date().getTime();
    jw = iI(iP);
    if (Rohr_Opt.LogVal && typeof (window) !== _$_543c[0]) {
        window[Rohr_Opt.LogVal] = encodeURIComponent(jw)
    }
    ;

    return jw
}