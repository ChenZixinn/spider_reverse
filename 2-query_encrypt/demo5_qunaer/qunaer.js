// 所有方法
function getRandomKey(t) {
    var n = "";
    // 从时间戳的第四位开始截取
    var r = ("" + t).substr(4);
    // 时间戳每一位映射的acsii编码
    r.split("").forEach(function (e) {
        n += e.charCodeAt()
    });
    // md5加密
    var i = (0,
        f.default)(n).toString();
    // -6:
    return i.substr(-6)
}

// headers的主要生成方法
function getToken() {
    // dict
    var t = {};
    // this.getQtTime((0,s.default)(this.dencryptCode(this.qtTime))) 依然是时间戳
    t[this.getRandomKey(this.getQtTime((0,
        s.default)(this.dencryptCode(this.qtTime))))] = this.encrypt();
    return t
}

// 加密算法
function encryptFunction() {
    /**
     * 调试进入这两个算法中，找到他们对应的算法，找关键字，例如算法名称
     * f：md5
     * n: SHA1
     */
    return [function (e) {
        // t % 2 == 0执行这个方法
        // e = t时间戳 + n字符串
        var t = (0,
            u.default)(e).toString();
        return (0,
            f.default)(t).toString()
    }
        // t % 2 == 1执行这个方法
        , function (e) {
            var t = (0,
                f.default)(e).toString();
            return (0,
                u.default)(t).toString()
        }
    ]
}

function dencryptCode(t) {
    return t.map(function (e) {
        return String.fromCharCode(e - 2)
    }).join("")
}

function getQtTime(t) {
    //
    /*
    * 如果有t这里直接返回t
    * 没t这里把时间戳分割后的char值-2转为字符串
    */
    return t ? Number(t.split(",").map(function (e) {
        return String.fromCharCode(e - 2)
    }).join("")) : 0
}

// 获取字符串方法
function getTokenStr() {
    var t = this.dencryptCode(this.tokenStr);
    // 这里选择了页面中一个id为t的元素的值
    var n = document.getElementById(t).innerHTML;
    // 这里会返回元素的值或者方法的值
    return n ? n : (0,
        s.default)(this.dencryptCode(this.cookieToken))
}


// 获取参数的方法
function encrypt() {
    // t是页面元素的值
    var t = this.getTokenStr()
        // 这里n是时间戳
        , n = this.getQtTime((0,
        s.default)(this.dencryptCode(this.qtTime)))
        // r是对时间戳取模
        , r = n % 2;
    return encryptFunction()[r](t + n)
}

// 加密的方法
function encryptToken(t) {
    return (0,
        f.default)(t).toString()
}
