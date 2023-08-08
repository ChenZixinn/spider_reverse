var CryptoJS = require('crypto-js');

// 算法直接用CryptoJS.HmacSHA512
function cry(e, t) {
      return CryptoJS.HmacSHA512(e, t).toString()
        };

// key 相关
o = {}
o.default = {
    "n": 20,
    "codes": {
        "0": "W",
        "1": "l",
        "2": "k",
        "3": "B",
        "4": "Q",
        "5": "g",
        "6": "f",
        "7": "i",
        "8": "i",
        "9": "r",
        "10": "v",
        "11": "6",
        "12": "A",
        "13": "K",
        "14": "N",
        "15": "k",
        "16": "4",
        "17": "L",
        "18": "1",
        "19": "8"
    }
}
var r = function() {
        for (var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase(), t = e + e, n = "", i = 0; i < t.length; ++i) {
            var a = t[i].charCodeAt() % o.default.n;
            n += o.default.codes[a]
        }
        return n
    };
var key = function() {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase()
              , n = JSON.stringify(e).toLowerCase();
            // return (0,o.default)(t + n, (0,a.default)(t)).toLowerCase().substr(8, 20)
            return cry(t + n, r(t)).toLowerCase().substr(8, 20)
        };

var value = function() {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
      , n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase()
      , i = JSON.stringify(e).toLowerCase();
    return cry(n + "pathString" + i + t, r(n))
};

// t = '/api/datalist/changelist?keyno=5dffb644394922f9073544a08f38be9f&pageindex=2'
// l = value(t, undefined, tid)
// console.log(l);

function run(path, tid){
    k = key(path)
    v = value(path,undefined, tid)
    var headers = {}
    // var e = {"data": data}
    return headers[k] = v,
            headers["user-agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
            // headers["referer"]= "https://www.qcc.com/firm/5dffb644394922f9073544a08f38be9f.html",
           headers
}

// tid在请求的首页上
tid = '44747b55cb3d98c74a4c561ea1476713'
// path是请求的完整路径
path = '/api/datalist/touzilist?isNewAgg=true&keyNo=5dffb644394922f9073544a08f38be9f&pageIndex=4'
console.log(run(path, tid));