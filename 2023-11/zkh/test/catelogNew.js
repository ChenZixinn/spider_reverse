(window.webpackJsonp = window.webpackJsonp || []).push([[14], {
    0: function(e, t) {
        e.exports = React
    },
    104: function(e, t, a) {
        "use strict";
        var r = a(5)
          , n = a.n(r)
          , r = a(1)
          , q = a.n(r)
          , R = a(0)
          , B = a.n(R)
          , r = a(7)
          , H = a(71)
          , W = a(72)
          , G = a(123)
          , A = a(185)
          , U = a(66)
          , Q = a(37)
          , z = a(3)
          , K = (a(248),
        a(15));
        function o(t, e) {
            var a, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)),
            r
        }
        function V(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(a), !0).forEach(function(e) {
                    n()(t, e, a[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return t
        }
        t.a = Object(r.connect)(function(e) {
            return {
                injectConst: e.common.injectConst,
                isLogin: e.common.injectConst.isLogin,
                user: e.common.user,
                citycode: e.common.citycode
            }
        })(function(i) {
            function n(t) {
                for (var e = 2, a = 0; a < k.length; a++)
                    if (k[a].filter(function(e) {
                        return e.proSkuNo == t
                    }).length) {
                        e = a + 1;
                        break
                    }
                return e = 6 == u ? Math.ceil(e / 2) : e
            }
            function e(e, t, a) {
                var r = n(e.proSkuNo);
                i.onClick && i.onClick(e, t, a, r)
            }
            function t(e, t, a) {
                var r = n(e.proSkuNo);
                i.onShow && i.onShow(e, t, a, r)
            }
            var l = i.dispatch
              , a = i.citycode
              , r = i.keyword
              , r = void 0 === r ? "" : r
              , o = i.type
              , s = void 0 === o ? "catalog" : o
              , o = i.sectionNum
              , u = void 0 === o ? 3 : o
              , d = Object(R.useRef)(!1)
              , p = Object(R.useRef)(!1)
              , o = Object(R.useState)(!1)
              , o = q()(o, 2)
              , c = o[0]
              , f = o[1]
              , o = Object(R.useState)([])
              , o = q()(o, 2)
              , m = o[0]
              , h = o[1]
              , o = Object(R.useState)({})
              , o = q()(o, 2)
              , v = o[0]
              , g = o[1]
              , o = Object(R.useState)({})
              , o = q()(o, 2)
              , y = o[0]
              , b = o[1]
              , o = Object(R.useState)({})
              , o = q()(o, 2)
              , w = o[0]
              , E = o[1]
              , o = Object(R.useState)([])
              , o = q()(o, 2)
              , k = o[0]
              , S = o[1]
              , o = Object(R.useState)([])
              , o = q()(o, 2)
              , _ = o[0]
              , O = o[1]
              , N = Object(R.useRef)(!0)
              , j = Object(R.useRef)(!0)
              , x = Object(R.useRef)(!0)
              , L = Object(R.useRef)(0)
              , I = Object(R.useRef)(0)
              , T = Object(R.useRef)(0)
              , P = Object(R.useRef)(!1)
              , o = Object(R.useCallback)(function() {
                c || d.current || p.current || f(!0)
            }, [c, d.current, p.current])
              , C = (Object(R.useEffect)(function() {
                h([]),
                g({}),
                b({}),
                E({}),
                S([]),
                L.current = 0,
                I.current = 0,
                T.current = 0
            }, [i.listQueryParams]),
            Object(R.useEffect)(function() {
                d.current = !i.hasNextSection
            }, [i.hasNextSection]),
            Object(R.useEffect)(function() {
                c && !d.current && D()
            }, [c]),
            Object(R.useEffect)(function() {
                var e;
                k.length && N.current && (e = L.current,
                e = k && k[e] && k[e][0]) && (N.current = !1,
                C(e).finally(function() {
                    L.current += 1,
                    N.current = !0
                }))
            }, [k, L.current]),
            Object(R.useEffect)(function() {
                var e;
                P.current && k.length && j.current && (e = I.current,
                e = k && k[e] && k[e][0]) && (j.current = !1,
                F(e).finally(function() {
                    I.current += 1,
                    j.current = !0
                }))
            }, [k, I.current]),
            Object(R.useEffect)(function() {
                var e;
                _.length && (e = T.current,
                e = _ && _[e] && _[e][0]) && x.current && (x.current = !1,
                M(e).finally(function() {
                    T.current += 1,
                    x.current = !0
                }))
            }, [_, T.current]),
            function() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []
                  , r = [];
                return a.forEach(function(e) {
                    var t;
                    0 < (null == e || null == (t = e.searchResSpuItemList) ? void 0 : t.length) ? e.searchResSpuItemList.forEach(function(e) {
                        r.push({
                            number: 1,
                            sku: e.proSkuNo
                        })
                    }) : r.push({
                        number: 1,
                        sku: e.proSkuNo
                    })
                }),
                Object(Q.r)({
                    requests: r
                }).then(function(e) {
                    var t;
                    "0000" === e.code && e.result && e.result.length ? (t = e.result,
                    t = Object(z.p)({
                        contentList: a,
                        deliverData: t
                    }),
                    t = Object.assign(v, t),
                    g(Object(K.cloneDeep)(t)),
                    console.log("更新库存")) : console.log("库存接口错误", e.message)
                }).catch(function(e) {
                    console.log("库存接口错误", e)
                })
            }
            )
              , F = function(e) {
                var a = [];
                return e.map(function(e) {
                    var t;
                    0 < (null == e || null == (t = e.searchResSpuItemList) ? void 0 : t.length) ? e.searchResSpuItemList.forEach(function(e) {
                        a.push(e.proSkuNo)
                    }) : a.push(e.proSkuNo)
                }),
                Object(Q.t)({
                    skuNoList: a
                }).then(function(e) {
                    var t;
                    "0000" === e.code && (t = {},
                    (e = e.result || []).length) && (e.map(function(e) {
                        null != e && e.skuNo && (t[e.skuNo] = V(V({}, e), {}, {
                            price: e.sellingPrice,
                            asyncProductTags: e.ifReturnAllProductTag ? e.productTagsForPrice : []
                        }))
                    }),
                    t = Object.assign(y, t),
                    b(Object(K.cloneDeep)(t)),
                    console.log("更新价格"))
                })
            }
              , M = function(e) {
                return Object(Q.u)({
                    data: e
                }).then(function(e) {
                    "0000" === e.code && (e = e.result || {},
                    e = Object.assign(w, e),
                    E(Object(K.cloneDeep)(e)))
                })
            }
              , D = function() {
                var c = i.section + 1;
                Object(Q.m)({}, V(V({}, i.listQueryParams), {}, {
                    suggestPriceOnly: !1,
                    section: c
                })).then(function(e) {
                    var a, r, n, t, o;
                    "0000" === e.code ? (e = e.result || {},
                    a = e.page && e.page.content || [],
                    r = !(u <= c) && e.hasNextSection,
                    n = Object(K.cloneDeep)(m.concat(a)),
                    P.current = e.ifHidePrice,
                    new Promise(function(e) {
                        h(n),
                        l({
                            type: "industry" === s ? "industry/updateTodo" : "catalog/updateTodo",
                            payload: {
                                section: c,
                                hasNextSection: r
                            }
                        });
                        var t = Object(K.cloneDeep)(k);
                        t.push([a]),
                        S(t),
                        e("")
                    }
                    ).then(function() {
                        f(!1),
                        d.current = !r
                    }),
                    e.ifHideSpu && (o = Object(K.cloneDeep)(_),
                    null !== e) && null != (t = e.spuItemThumbnailInfoReqList) && t.length && (o.push([e.spuItemThumbnailInfoReqList]),
                    O(o)),
                    i.afterSectionLoad && i.afterSectionLoad({
                        content: a,
                        section: c
                    })) : (p.current = !0,
                    f(!1))
                }).catch(function(e) {
                    console.log("列表接口失败", e),
                    p.current = !0,
                    f(!1)
                })
            };
            return B.a.createElement(A.a, {
                className: "infiniteScroll",
                immediate: !1,
                distance: 1500,
                disabled: d.current,
                onRefresh: o,
                "data-v-1e2b28bd": ""
            }, "pic" === i.viewType || "sidePic" === i.viewType ? B.a.createElement(B.a.Fragment, null, B.a.createElement("div", {
                className: "goods-wrap",
                "data-v-1e2b28bd": ""
            }, B.a.createElement(H.a, {
                from: i.from,
                isLogin: i.isLogin,
                cityCode: a.cityCode,
                content: m,
                ifHidePrice: P.current,
                priceInfoMap: y,
                stockInfoMap: v,
                spuThumbInfo: w,
                isPriceReady: !0,
                viewType: i.viewType,
                keyword: r,
                onClick: e,
                onShow: t,
                "data-v-1e2b28bd": ""
            }))) : B.a.createElement(B.a.Fragment, null, i.ifShowNewListModel ? B.a.createElement("div", {
                className: "list-item-wrap clearfix",
                "data-v-1e2b28bd": ""
            }, B.a.createElement(G.a, {
                isLogin: i.isLogin,
                content: m,
                isPriceReady: !0,
                ifHidePrice: P.current,
                priceInfoMap: y,
                stockInfoMap: v,
                keyword: r,
                onClick: e,
                onShow: t,
                "data-v-1e2b28bd": ""
            })) : B.a.createElement("div", {
                className: "list-item-wrap clearfix",
                "data-v-1e2b28bd": ""
            }, B.a.createElement(W.a, {
                type: s,
                lessProp: "industry" === s,
                hideHeader: !0,
                isLogin: i.isLogin,
                content: m,
                ifHidePrice: P.current,
                priceInfoMap: y,
                stockInfoMap: v,
                isPriceReady: !0,
                viewType: i.viewType,
                cartList: i.cartList,
                keyword: r,
                onClick: e,
                onShow: t,
                "data-v-1e2b28bd": ""
            }))), c && !d.current ? B.a.createElement("div", {
                className: "spin-loading",
                "data-v-1e2b28bd": ""
            }, B.a.createElement(U.a, {
                "data-v-1e2b28bd": ""
            }), B.a.createElement(U.a, {
                "data-v-1e2b28bd": ""
            }), B.a.createElement(U.a, {
                "data-v-1e2b28bd": ""
            })) : null, p.current && !c ? B.a.createElement("div", {
                className: "error-wrap",
                "data-v-1e2b28bd": ""
            }, "数据加载失败，请刷新", B.a.createElement("span", {
                className: "textBlue",
                onClick: function() {
                    f(!0),
                    p.current = !1
                },
                "data-v-1e2b28bd": ""
            }, "重试")) : null)
        })
    },
    106: function(e, t, a) {
        "use strict";
        var r = a(1)
          , k = a.n(r)
          , S = a(0)
          , _ = a.n(S)
          , r = a(7)
          , s = a(4)
          , n = a(8)
          , O = a.n(n)
          , n = a(5)
          , N = a.n(n)
          , j = a(33)
          , x = a(36)
          , L = (a(95),
        a(32))
          , I = (a(84),
        a(31))
          , T = (a(80),
        a(46))
          , P = (a(143),
        a(42))
          , n = (a(246),
        a(50))
          , C = (a(121),
        a(3));
        function F(t, e) {
            var a, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)),
            r
        }
        var M = {
            labelCol: {
                span: 5
            },
            wrapperCol: {
                span: 19
            }
        }
          , D = x.a.Item
          , q = T.a.Group
          , R = n.a.Group
          , u = x.a.create()(function(n) {
            function e() {
                g(!1),
                o(),
                n.onCancel && n.onCancel()
            }
            function o() {
                s(0),
                l(""),
                f([]),
                d(""),
                n.form.resetFields()
            }
            var t = Object(S.useState)(!1)
              , t = k()(t, 2)
              , c = t[0]
              , i = t[1]
              , t = Object(S.useState)("")
              , t = k()(t, 2)
              , a = t[0]
              , l = t[1]
              , t = Object(S.useState)(0)
              , t = k()(t, 2)
              , r = t[0]
              , s = t[1]
              , t = Object(S.useState)("")
              , t = k()(t, 2)
              , u = t[0]
              , d = t[1]
              , t = Object(S.useState)([])
              , t = k()(t, 2)
              , p = t[0]
              , f = t[1]
              , t = Object(S.useState)(!1)
              , t = k()(t, 2)
              , m = t[0]
              , h = t[1]
              , t = Object(S.useState)(!1)
              , t = k()(t, 2)
              , v = t[0]
              , g = t[1]
              , t = n.form.getFieldProps
              , y = (Object(S.useEffect)(function() {
                h(n.injectConst.isLogin)
            }, [n.injectConst]),
            t("content"))
              , b = t("satisfactionDegree", {
                rules: [{
                    required: !0,
                    message: "请选择是否满意"
                }],
                initialValue: 2
            })
              , t = t("resultList", {
                rules: [{
                    required: !0,
                    message: "请选择具体原因"
                }],
                onChange: function(e) {
                    f(e)
                }
            })
              , w = [{
                label: "缺乏品牌",
                value: "7"
            }, {
                label: "缺少型号",
                value: "8"
            }, {
                label: "价格过高",
                value: "3"
            }, {
                label: "交期不好",
                value: "4"
            }, {
                label: "筛选条件不佳",
                value: "9"
            }, {
                label: "排序不合理",
                value: "2"
            }, {
                label: "页面卡顿",
                value: "5"
            }, {
                label: "结果不准确",
                value: "1"
            }, {
                label: "其他",
                value: "6"
            }]
              , E = [{
                label: "采购",
                value: "1"
            }, {
                label: "使用人",
                value: "3"
            }, {
                label: "供应商",
                value: "2"
            }, {
                label: "其他",
                value: "4"
            }];
            return _.a.createElement(j.a, {
                title: "搜索评价",
                width: 500,
                footer: [],
                style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    marginLeft: "-220px",
                    marginTop: "-160px"
                },
                maskClosable: !1,
                onCancel: e,
                wrapClassName: "suggest-modal-wrap",
                visible: n.show,
                "data-v-0deb6818": ""
            }, _.a.createElement("div", {
                className: "suggest-modal-inner",
                "data-v-0deb6818": ""
            }, v ? _.a.createElement("div", {
                className: "answer-ok-wrap",
                "data-v-0deb6818": ""
            }, _.a.createElement("div", {
                className: "answer-ok-left",
                "data-v-0deb6818": ""
            }, _.a.createElement("img", {
                src: "//static.zkh360.com/image/2021-12-16/doc-1639647621580.png",
                className: "answer-ok-img",
                "data-v-0deb6818": ""
            })), _.a.createElement("div", {
                className: "answer-ok-right",
                "data-v-0deb6818": ""
            }, _.a.createElement("span", {
                className: "answer-ok-desc",
                "data-v-0deb6818": ""
            }, "感谢反馈！"), m ? _.a.createElement(_.a.Fragment, null, _.a.createElement("p", {
                "data-v-0deb6818": ""
            }, "您的反馈我们已经收到，工作人员将在1个工作日内回复您。"), _.a.createElement("p", {
                "data-v-0deb6818": ""
            }, "您可以到  ", _.a.createElement("a", {
                className: "blue",
                href: "/user/qaList.html",
                target: "_blank",
                "data-v-0deb6818": ""
            }, "“我的震坤行-问答列表”"), "  查看回复结果，请您耐心等待！")) : _.a.createElement("p", {
                className: "text-center",
                "data-v-0deb6818": ""
            }, "感谢反馈，我们会持续改善！")), _.a.createElement(L.a, {
                type: "primary",
                onClick: function() {
                    g(!1),
                    n.onCancel && n.onCancel()
                },
                "data-v-0deb6818": ""
            }, "确定")) : _.a.createElement(x.a, {
                horizontal: !0,
                "data-v-0deb6818": ""
            }, _.a.createElement(D, O()({}, M, {
                label: "搜索结果",
                "data-v-0deb6818": ""
            }), _.a.createElement("span", O()({}, b, {
                className: "suggest-type-text",
                "data-v-0deb6818": ""
            }), "不满意")), _.a.createElement(D, O()({}, M, {
                label: "请选择原因",
                className: "checkbox-form-item",
                "data-v-0deb6818": ""
            }), _.a.createElement(R, O()({}, t, {
                options: w,
                value: p,
                "data-v-0deb6818": ""
            }))), _.a.createElement(D, O()({}, M, {
                label: "您的角色",
                "data-v-0deb6818": ""
            }), _.a.createElement(q, {
                value: u,
                onChange: function(e) {
                    d(e.target.value)
                },
                "data-v-0deb6818": ""
            }, E.map(function(e) {
                return _.a.createElement(T.a, {
                    value: e.value,
                    key: "radio-".concat(e.value),
                    "data-v-0deb6818": ""
                }, e.label)
            }))), _.a.createElement(D, O()({}, M, {
                label: "问题反馈",
                className: "note-form-item",
                "data-v-0deb6818": ""
            }), _.a.createElement(I.a, O()({}, y, {
                type: "textarea",
                maxLength: "200",
                onKeyUp: function() {
                    var e;
                    e = n.form.getFieldValue("content") || "",
                    s(e.length || 0)
                },
                autosize: {
                    minRows: 2,
                    maxRows: 6
                },
                placeholder: "请输入反馈内容，我们将尽快为您提供帮助",
                onFocus: function() {
                    return e = "content",
                    l(""),
                    void (n.form.getFieldError(e) && (t = n.form.getFieldValue(e),
                    (a = {})[e] = {
                        value: t,
                        error: ""
                    },
                    n.form.setFields(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var a = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? F(Object(a), !0).forEach(function(e) {
                                N()(t, e, a[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : F(Object(a)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                            })
                        }
                        return t
                    }({}, a))));
                    var e, t, a
                },
                "data-v-0deb6818": ""
            })), _.a.createElement("span", {
                className: "num-count",
                "data-v-0deb6818": ""
            }, r, "/200")), _.a.createElement(D, {
                className: "btn-item",
                style: {
                    paddingTop: 10,
                    marginBottom: 0,
                    textAlign: "center"
                },
                "data-v-0deb6818": ""
            }, _.a.createElement("div", {
                className: "textRed",
                "data-v-0deb6818": ""
            }, a), _.a.createElement("div", {
                className: "btn-list",
                "data-v-0deb6818": ""
            }, _.a.createElement(L.a, {
                type: "primary",
                loading: c,
                onClick: function() {
                    n.form.validateFields(function(e, t) {
                        var a, r;
                        e || c || (i(!0),
                        e = new FormData,
                        a = n.user ? n.user.userInfoMobile : "",
                        r = t.content || "",
                        e.append("mobile", a),
                        e.append("satisfactionDegree", 2),
                        e.append("dissatisfactionReason", p.join(",")),
                        e.append("userRole", u),
                        e.append("content", r),
                        Object(P.e)(e).then(function(e) {
                            "0000" === e.code ? (n.form.resetFields(),
                            s(0),
                            g(!0),
                            n.onSuccess && n.onSuccess({
                                reason: Object(C.K)(p, w),
                                post: Object(C.K)(u, E),
                                feedback_content: r
                            })) : l(e.message)
                        }).finally(function() {
                            i(!1),
                            o()
                        }))
                    })
                },
                "data-v-0deb6818": ""
            }, "提交"), _.a.createElement(L.a, {
                type: "default",
                onClick: e,
                "data-v-0deb6818": ""
            }, "取消"))))))
        })
          , n = (a(247),
        a(2))
          , d = a.n(n)
          , p = a(11)
          , n = a(657);
        t.a = Object(n.a)(Object(r.connect)(function(e) {
            return {
                user: e.common.user,
                injectConst: e.common.injectConst
            }
        })(function(o) {
            function a(e) {
                var t = void 0 === (t = o.listInfo) ? {} : t
                  , a = o.injectConst;
                Object(p.o)({
                    is_satisfied: e,
                    Coreword: (null == (e = t.searchWord) ? void 0 : e.coreWord) || "暂无",
                    key_word: (null == (e = a.query) ? void 0 : e.keywords) || "暂无",
                    key_word_type: a.isHistory ? "历史搜索" : a.hotSearch ? "热门搜索" : "自由搜索",
                    search_method: "文字",
                    search_result_match_num: null == (e = t.page) ? void 0 : e.totalElements,
                    search_result_match_type: t.searchTypeText || "精确搜索",
                    search_type: o.searchType || "全局搜索"
                })
            }
            var e = Object(S.useState)(!1)
              , e = k()(e, 2)
              , r = e[0]
              , n = e[1]
              , e = Object(S.useState)(!0)
              , e = k()(e, 2)
              , t = e[0]
              , c = e[1]
              , e = Object(S.useState)(!1)
              , e = k()(e, 2)
              , i = e[0]
              , l = e[1];
            return _.a.createElement("div", {
                className: "feedback-base-wrap",
                "data-v-1d7e2e9b": ""
            }, _.a.createElement("div", {
                className: d()("feedback-wrap", {
                    show: t
                }),
                "data-v-1d7e2e9b": ""
            }, _.a.createElement("div", {
                className: "feedback-inner",
                "data-v-1d7e2e9b": ""
            }, _.a.createElement("img", {
                src: "//static.zkh360.com/image/2023-03-16/feedback-icon-1678935210471.jpg",
                "data-v-1d7e2e9b": ""
            }), _.a.createElement("p", {
                className: "text",
                "data-v-1d7e2e9b": ""
            }, "您对搜索结果是否满意？"), _.a.createElement("div", {
                className: "btn",
                onClick: function() {
                    var e, t;
                    r || (n(!0),
                    e = new FormData,
                    t = o.user ? o.user.userInfoMobile : "",
                    e.append("mobile", t),
                    e.append("satisfactionDegree", 1),
                    Object(P.e)(e).then(function(e) {
                        "0000" === e.code && s.a.toast({
                            container: "提交成功，感谢您的反馈！"
                        })
                    }).finally(function() {
                        n(!1)
                    }),
                    a("满意"))
                },
                "data-v-1d7e2e9b": ""
            }, "满意"), _.a.createElement("div", {
                className: "btn",
                onClick: function() {
                    l(!0),
                    a("不满意")
                },
                "data-v-1d7e2e9b": ""
            }, "不满意")), _.a.createElement("span", {
                className: "close iconfont",
                onClick: function() {
                    c(!1)
                },
                "data-v-1d7e2e9b": ""
            }, ""), _.a.createElement(u, {
                show: i,
                user: o.user,
                injectConst: o.injectConst,
                dispatch: o.dispatch,
                onCancel: function() {
                    return l(!1)
                },
                onSuccess: function(e) {
                    var t = e.reason
                      , a = e.post
                      , e = e.feedback_content
                      , r = o.listInfo
                      , r = void 0 === r ? {} : r
                      , n = o.injectConst;
                    Object(p.p)({
                        reason: t,
                        post: a,
                        feedback_content: e,
                        Coreword: null == (t = r.searchWord) ? void 0 : t.coreWord,
                        key_word: null == (a = n.query) ? void 0 : a.keywords,
                        key_word_type: n.query.isHistory ? "历史搜索" : n.query.hotSearch ? "热门搜索" : "自由搜索",
                        search_method: "文字",
                        search_result_match_num: null == (e = r.page) ? void 0 : e.totalElements,
                        search_result_match_type: r.searchTypeText || "精确搜索",
                        search_type: o.searchType || "全局搜索"
                    })
                },
                "data-v-1d7e2e9b": ""
            })))
        }))
    },
    108: function(e, t, a) {
        "use strict";
        var r = a(6)
          , j = a.n(r)
          , r = a(13)
          , c = a.n(r)
          , r = a(0)
          , i = a.n(r)
          , r = a(7)
          , l = a(206)
          , s = a(11)
          , u = a(15);
        function x() {
            x = function() {
                return c
            }
            ;
            var l, c = {}, e = Object.prototype, s = e.hasOwnProperty, u = Object.defineProperty || function(e, t, a) {
                e[t] = a.value
            }
            , t = "function" == typeof Symbol ? Symbol : {}, r = t.iterator || "@@iterator", a = t.asyncIterator || "@@asyncIterator", n = t.toStringTag || "@@toStringTag";
            function o(e, t, a) {
                return Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                o({}, "")
            } catch (l) {
                o = function(e, t, a) {
                    return e[t] = a
                }
            }
            function i(e, t, a, r) {
                var n, o, c, i, t = t && t.prototype instanceof v ? t : v, t = Object.create(t.prototype), r = new O(r || []);
                return u(t, "_invoke", {
                    value: (n = e,
                    o = a,
                    c = r,
                    i = p,
                    function(e, t) {
                        if (i === f)
                            throw new Error("Generator is already running");
                        if (i === m) {
                            if ("throw" === e)
                                throw t;
                            return {
                                value: l,
                                done: !0
                            }
                        }
                        for (c.method = e,
                        c.arg = t; ; ) {
                            var a = c.delegate;
                            if (a) {
                                a = function e(t, a) {
                                    var r = a.method
                                      , n = t.iterator[r];
                                    if (n === l)
                                        return a.delegate = null,
                                        "throw" === r && t.iterator.return && (a.method = "return",
                                        a.arg = l,
                                        e(t, a),
                                        "throw" === a.method) || "return" !== r && (a.method = "throw",
                                        a.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                                        h;
                                    r = d(n, t.iterator, a.arg);
                                    if ("throw" === r.type)
                                        return a.method = "throw",
                                        a.arg = r.arg,
                                        a.delegate = null,
                                        h;
                                    n = r.arg;
                                    return n ? n.done ? (a[t.resultName] = n.value,
                                    a.next = t.nextLoc,
                                    "return" !== a.method && (a.method = "next",
                                    a.arg = l),
                                    a.delegate = null,
                                    h) : n : (a.method = "throw",
                                    a.arg = new TypeError("iterator result is not an object"),
                                    a.delegate = null,
                                    h)
                                }(a, c);
                                if (a) {
                                    if (a === h)
                                        continue;
                                    return a
                                }
                            }
                            if ("next" === c.method)
                                c.sent = c._sent = c.arg;
                            else if ("throw" === c.method) {
                                if (i === p)
                                    throw i = m,
                                    c.arg;
                                c.dispatchException(c.arg)
                            } else
                                "return" === c.method && c.abrupt("return", c.arg);
                            i = f;
                            a = d(n, o, c);
                            if ("normal" === a.type) {
                                if (i = c.done ? m : "suspendedYield",
                                a.arg === h)
                                    continue;
                                return {
                                    value: a.arg,
                                    done: c.done
                                }
                            }
                            "throw" === a.type && (i = m,
                            c.method = "throw",
                            c.arg = a.arg)
                        }
                    }
                    )
                }),
                t
            }
            function d(e, t, a) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, a)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            c.wrap = i;
            var p = "suspendedStart"
              , f = "executing"
              , m = "completed"
              , h = {};
            function v() {}
            function g() {}
            function y() {}
            var t = {}
              , b = (o(t, r, function() {
                return this
            }),
            Object.getPrototypeOf)
              , b = b && b(b(N([])))
              , w = (b && b !== e && s.call(b, r) && (t = b),
            y.prototype = v.prototype = Object.create(t));
            function E(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    o(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function k(c, i) {
                var t;
                u(this, "_invoke", {
                    value: function(a, r) {
                        function e() {
                            return new i(function(e, t) {
                                !function t(e, a, r, n) {
                                    var o, e = d(c[e], c, a);
                                    if ("throw" !== e.type)
                                        return (a = (o = e.arg).value) && "object" == j()(a) && s.call(a, "__await") ? i.resolve(a.__await).then(function(e) {
                                            t("next", e, r, n)
                                        }, function(e) {
                                            t("throw", e, r, n)
                                        }) : i.resolve(a).then(function(e) {
                                            o.value = e,
                                            r(o)
                                        }, function(e) {
                                            return t("throw", e, r, n)
                                        });
                                    n(e.arg)
                                }(a, r, e, t)
                            }
                            )
                        }
                        return t = t ? t.then(e, e) : e()
                    }
                })
            }
            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function _(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function O(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(S, this),
                this.reset(!0)
            }
            function N(t) {
                if (t || "" === t) {
                    var a, e = t[r];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length))
                        return a = -1,
                        (e = function e() {
                            for (; ++a < t.length; )
                                if (s.call(t, a))
                                    return e.value = t[a],
                                    e.done = !1,
                                    e;
                            return e.value = l,
                            e.done = !0,
                            e
                        }
                        ).next = e
                }
                throw new TypeError(j()(t) + " is not iterable")
            }
            return u(w, "constructor", {
                value: g.prototype = y,
                configurable: !0
            }),
            u(y, "constructor", {
                value: g,
                configurable: !0
            }),
            g.displayName = o(y, n, "GeneratorFunction"),
            c.isGeneratorFunction = function(e) {
                e = "function" == typeof e && e.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            c.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                o(e, n, "GeneratorFunction")),
                e.prototype = Object.create(w),
                e
            }
            ,
            c.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            E(k.prototype),
            o(k.prototype, a, function() {
                return this
            }),
            c.AsyncIterator = k,
            c.async = function(e, t, a, r, n) {
                void 0 === n && (n = Promise);
                var o = new k(i(e, t, a, r),n);
                return c.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }
            ,
            E(w),
            o(w, n, "Generator"),
            o(w, r, function() {
                return this
            }),
            o(w, "toString", function() {
                return "[object Generator]"
            }),
            c.keys = function(e) {
                var t, a = Object(e), r = [];
                for (t in a)
                    r.push(t);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var t = r.pop();
                        if (t in a)
                            return e.value = t,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            c.values = N,
            O.prototype = {
                constructor: O,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = l,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = l,
                    this.tryEntries.forEach(_),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = l)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(a) {
                    if (this.done)
                        throw a;
                    var r = this;
                    function e(e, t) {
                        return o.type = "throw",
                        o.arg = a,
                        r.next = e,
                        t && (r.method = "next",
                        r.arg = l),
                        !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t]
                          , o = n.completion;
                        if ("root" === n.tryLoc)
                            return e("end");
                        if (n.tryLoc <= this.prev) {
                            var c = s.call(n, "catchLoc")
                              , i = s.call(n, "finallyLoc");
                            if (c && i) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            } else if (c) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0)
                            } else {
                                if (!i)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                        var r = this.tryEntries[a];
                        if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var n = r;
                            break
                        }
                    }
                    var o = (n = n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc ? null : n) ? n.completion : {};
                    return o.type = e,
                    o.arg = t,
                    n ? (this.method = "next",
                    this.next = n.finallyLoc,
                    h) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    h
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a = this.tryEntries[t];
                        if (a.finallyLoc === e)
                            return this.complete(a.completion, a.afterLoc),
                            _(a),
                            h
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a, r, n = this.tryEntries[t];
                        if (n.tryLoc === e)
                            return "throw" === (a = n.completion).type && (r = a.arg,
                            _(n)),
                            r
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, a) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: t,
                        nextLoc: a
                    },
                    "next" === this.method && (this.arg = l),
                    h
                }
            },
            c
        }
        t.a = Object(r.connect)(function(e) {
            return {
                pros: e.catalog.pros,
                properties: e.catalog.properties
            }
        })(function(e) {
            var t, r = e.pros, n = e.dispatch, o = e.properties;
            return i.a.createElement(l.a, {
                className: "goods-select-side",
                pros: r,
                prosFilter: function(e) {
                    return (t = t || c()(x().mark(function e(a) {
                        return x().wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    console.log("params", a),
                                    "add" === a.type ? o[a.id] = a.value : "delete" === a.type && delete o[a.id],
                                    r.forEach(function(t) {
                                        o[t.proSpecId] && t.proSpecId != a.id && (o[t.proSpecId].concat([]).forEach(function(e) {
                                            -1 === t.specificationValueList.indexOf(e) && Object(u.pull)(o[t.proSpecId], e)
                                        }),
                                        0 === o[t.proSpecId].length) && delete o[t.proSpecId]
                                    }),
                                    n({
                                        type: "catalog/updateTodo",
                                        payload: {
                                            properties: o,
                                            from: 0
                                        }
                                    }),
                                    n({
                                        type: "catalog/getListInfo"
                                    }),
                                    Object(s.O)({
                                        module: "产品分类页",
                                        operation_type: "add" === a.changeType ? "勾选" : "取消",
                                        option_title: a.title,
                                        option_content: a.changeItem ? a.changeItem.label : ""
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }))).apply(this, arguments)
                },
                properties: o
            })
        })
    },
    117: function(e, t, a) {
        "use strict";
        var r = a(5)
          , n = a.n(r)
          , r = a(0)
          , s = a.n(r)
          , u = (a(305),
        a(63));
        function o(t, e) {
            var a, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)),
            r
        }
        function d(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(a), !0).forEach(function(e) {
                    n()(t, e, a[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return t
        }
        function p(e) {
            var t = e.samelevel
              , t = void 0 === t ? [] : t
              , a = e.data
              , r = void 0 === a ? {} : a
              , n = e.isSeo
              , o = e.getUrl;
            return s.a.createElement("ul", {
                className: "crumbs-itme-list"
            }, t && t.map(function(e) {
                return s.a.createElement("li", {
                    key: e.proCatalogId
                }, n ? s.a.createElement(u.a, {
                    url: o && o(d(d({}, r), {}, {
                        proCatalogId: e.proCatalogId,
                        listShowStyle: e.listShowStyle,
                        levels: e.levels
                    })),
                    text: e.catalogName
                }) : s.a.createElement("a", {
                    href: o && o(d(d({}, r), {}, {
                        proCatalogId: e.proCatalogId,
                        listShowStyle: e.listShowStyle,
                        levels: e.levels
                    }))
                }, e.catalogName))
            }))
        }
        t.a = function(a) {
            var e = a.type
              , t = a.query
              , r = a.prePath
              , n = a.prePathSec
              , o = a.postPath
              , c = a.isSeo
              , i = a.getUrl
              , l = {
                type: void 0 === e ? "" : e,
                query: void 0 === t ? {} : t
            };
            return s.a.createElement("div", {
                className: "breadcrumbs-wrap"
            }, s.a.createElement("ul", {
                className: "crumbs-list"
            }, r ? s.a.createElement("li", {
                className: "crumbs-item"
            }, s.a.createElement("i", {
                className: "gt-icon"
            }, ">"), s.a.createElement("a", {
                className: "pre-path-item",
                href: r.path
            }, r.name)) : "", n ? s.a.createElement("li", {
                className: "crumbs-item"
            }, s.a.createElement("i", {
                className: "gt-icon"
            }, ">"), s.a.createElement("a", {
                className: "pre-path-item",
                href: n.path
            }, n.name)) : "", a.breadcrumbs.length ? a.breadcrumbs.map(function(e, t) {
                return s.a.createElement("li", {
                    key: e.proCatalogId,
                    className: "crumbs-item"
                }, s.a.createElement("i", {
                    className: "gt-icon"
                }, ">"), c ? t !== a.breadcrumbs.length - 1 ? s.a.createElement(u.a, {
                    className: "crumbs-item-name",
                    url: i && i(d(d({}, l), {}, {
                        proCatalogId: e.proCatalogId,
                        listShowStyle: e.listShowStyle,
                        levels: e.levels
                    })),
                    text: e.catalogName
                }) : s.a.createElement("h1", null, s.a.createElement(u.a, {
                    className: "crumbs-item-name",
                    url: i && i(d(d({}, l), {}, {
                        proCatalogId: e.proCatalogId,
                        listShowStyle: e.listShowStyle,
                        levels: e.levels
                    })),
                    text: e.catalogName
                })) : s.a.createElement("a", {
                    className: "crumbs-item-name",
                    href: i && i(d(d({}, l), {}, {
                        proCatalogId: e.proCatalogId,
                        listShowStyle: e.listShowStyle,
                        levels: e.levels
                    }))
                }, e.catalogName), s.a.createElement("s", null, s.a.createElement("i", {
                    className: "iconfont arrow"
                }, "")), s.a.createElement(p, {
                    samelevel: e.samelevel,
                    data: l,
                    isSeo: c,
                    getUrl: i
                }))
            }) : null, o ? s.a.createElement("li", {
                className: "crumbs-item"
            }, s.a.createElement("i", {
                className: "gt-icon"
            }, ">"), s.a.createElement("a", {
                className: "post-path-item",
                href: o.path
            }, o.name)) : ""))
        }
    },
    118: function(e, t, a) {
        "use strict";
        function N(e) {
            return e.selectorLen ? e.proCatalog.map(function(e) {
                return {
                    label: e.catalogName,
                    value: e.proCatalogId,
                    listShowStyle: e.listShowStyle
                }
            }) : []
        }
        var r = a(1)
          , j = a.n(r)
          , x = a(0)
          , L = a.n(x)
          , I = (a(308),
        a(136))
          , T = a(169)
          , P = a(170)
          , r = a(7)
          , n = a(2)
          , C = a.n(n);
        t.a = Object(r.connect)(function(e) {
            return {
                injectConst: e.common.injectConst,
                proCatalog: e.catalog.proCatalog,
                keyword: e.catalog.keyword,
                pros: e.catalog.pros,
                brands: e.catalog.brands,
                classifiedBrands: e.catalog.classifiedBrands,
                selectorLen: e.catalog.selectorLen,
                brandIds: e.catalog.brandIds,
                headerSelect: e.catalog.headerSelect,
                viewType: e.catalog.viewType
            }
        })(function(t) {
            function a(e, t) {
                var a, r, n, o;
                "品牌" === t ? (a = [],
                r = [],
                e.forEach(function(e) {
                    a.push(e.value),
                    r.push(e.label)
                }),
                c({
                    value: a,
                    label: r
                }, t)) : (o = [],
                e.forEach(function(e) {
                    n = e.value,
                    o.push(e.label)
                }),
                c({
                    value: n,
                    label: o
                }, t))
            }
            function c(e, t) {
                n && n(l, e, t)
            }
            function r(e) {
                return e && e.map(function(e) {
                    return {
                        label: e.proBrandName,
                        value: e.proBrandId,
                        isRecommend: e.ifMainBrand || e.ifPrivateBrand
                    }
                }) || []
            }
            var e = t.viewType
              , n = t.selectCallBack
              , o = t.type
              , i = t.keyword
              , l = t.dispatch
              , s = t.isSeo
              , u = t.getUrl
              , d = t.isWithoutBrand
              , p = t.isSearchPage
              , f = Object(x.useState)(N(t))
              , f = j()(f, 2)
              , m = f[0]
              , h = f[1]
              , f = Object(x.useState)([])
              , f = j()(f, 2)
              , v = f[0]
              , g = f[1]
              , f = Object(x.useState)([])
              , f = j()(f, 2)
              , y = f[0]
              , b = f[1]
              , f = Object(x.useState)(!1)
              , f = j()(f, 2)
              , w = f[0]
              , E = f[1]
              , f = Object(x.useState)([])
              , f = j()(f, 2)
              , k = f[0]
              , S = f[1]
              , f = Object(x.useState)("")
              , f = j()(f, 2)
              , _ = f[0]
              , O = f[1];
            return Object(x.useEffect)(function() {
                var e, a;
                t.selectorLen && (h(N(t)),
                b(r(t.brands)),
                S(function(e) {
                    e = e && e.map(function(e) {
                        return {
                            label: e.firstLetter,
                            value: e.firstLetter,
                            brandList: r(e.brandList)
                        }
                    });
                    return (e = e || []).unshift({
                        label: "全部品牌",
                        value: null,
                        brandList: r(t.brands)
                    }),
                    e
                }(t.classifiedBrands)),
                g((e = t.pros,
                a = [],
                e.map(function(t) {
                    t.specificationValueList && t.specificationValueList.length && a.push({
                        title: t.proSpecName,
                        proSpecId: t.proSpecId,
                        list: t.specificationValueList.map(function(e) {
                            return {
                                label: e,
                                value: t.proSpecId,
                                proSpecId: t.proSpecId
                            }
                        })
                    })
                }),
                a)))
            }, [t.proCatalog, t.brands, t.pros, t.classifiedBrands]),
            Object(x.useEffect)(function() {
                E("sidePic" === e || "sideList" === e)
            }, [e]),
            L.a.createElement("div", {
                className: C()("selector-box-wrap-new", {
                    "selector-box-mb": w,
                    "empty-filter": !(m && m.length) || !(!d && y.length) || !v || v.length < 1,
                    "no-margin-top": t.noMarginTop
                })
            }, L.a.createElement("ul", {
                className: "selector-tag"
            }, L.a.createElement("li", null, m && m.length ? L.a.createElement(I.a, {
                title: "目录",
                isSearchPage: p,
                key: "catalogs",
                type: o,
                query: {
                    keyword: i
                },
                isShowMultiple: !1,
                selectorList: m,
                singleSelect: c,
                isSeo: s,
                getUrl: u,
                curTitle: _,
                updateCurTitle: O
            }) : null, !d && y.length ? L.a.createElement(T.a, {
                title: "品牌",
                key: "brands",
                selectorList: y,
                classifiedSelectorList: k,
                singleSelect: c,
                multipleSelect: a,
                curTitle: _,
                updateCurTitle: O,
                headerSelect: t.headerSelect
            }) : null, !w && v.length ? v.slice(0, 3).map(function(e) {
                return L.a.createElement(I.a, {
                    title: e.title,
                    key: "pros_".concat(e.proSpecId),
                    selectorList: e.list,
                    multipleSelect: a,
                    singleSelect: c,
                    curTitle: _,
                    updateCurTitle: O,
                    headerSelect: t.headerSelect
                })
            }) : null, !w && 3 < v.length ? L.a.createElement(P.a, {
                list: v.slice(3),
                singleSelect: c,
                multipleSelect: a
            }) : null)))
        })
    },
    123: function(e, t, a) {
        "use strict";
        var f = a(0)
          , m = a.n(f)
          , h = a(10)
          , n = a(193)
          , o = a(184)
          , c = a(70)
          , r = a(6)
          , j = a.n(r)
          , r = a(5)
          , i = a.n(r)
          , r = a(13)
          , v = a.n(r)
          , r = a(1)
          , g = a.n(r)
          , r = a(7)
          , l = a(107)
          , y = a.n(l)
          , b = a(45)
          , w = a(26)
          , E = a(91)
          , k = a(90)
          , S = a(134)
          , _ = a(122)
          , O = a(102)
          , N = a(63)
          , x = a(203)
          , L = a(4)
          , I = a(37)
          , T = a(11)
          , P = a(3)
          , C = a(15)
          , l = a(2)
          , F = a.n(l);
        function M() {
            M = function() {
                return c
            }
            ;
            var l, c = {}, e = Object.prototype, s = e.hasOwnProperty, u = Object.defineProperty || function(e, t, a) {
                e[t] = a.value
            }
            , t = "function" == typeof Symbol ? Symbol : {}, r = t.iterator || "@@iterator", a = t.asyncIterator || "@@asyncIterator", n = t.toStringTag || "@@toStringTag";
            function o(e, t, a) {
                return Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                o({}, "")
            } catch (l) {
                o = function(e, t, a) {
                    return e[t] = a
                }
            }
            function i(e, t, a, r) {
                var n, o, c, i, t = t && t.prototype instanceof v ? t : v, t = Object.create(t.prototype), r = new O(r || []);
                return u(t, "_invoke", {
                    value: (n = e,
                    o = a,
                    c = r,
                    i = p,
                    function(e, t) {
                        if (i === f)
                            throw new Error("Generator is already running");
                        if (i === m) {
                            if ("throw" === e)
                                throw t;
                            return {
                                value: l,
                                done: !0
                            }
                        }
                        for (c.method = e,
                        c.arg = t; ; ) {
                            var a = c.delegate;
                            if (a) {
                                a = function e(t, a) {
                                    var r = a.method
                                      , n = t.iterator[r];
                                    if (n === l)
                                        return a.delegate = null,
                                        "throw" === r && t.iterator.return && (a.method = "return",
                                        a.arg = l,
                                        e(t, a),
                                        "throw" === a.method) || "return" !== r && (a.method = "throw",
                                        a.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                                        h;
                                    r = d(n, t.iterator, a.arg);
                                    if ("throw" === r.type)
                                        return a.method = "throw",
                                        a.arg = r.arg,
                                        a.delegate = null,
                                        h;
                                    n = r.arg;
                                    return n ? n.done ? (a[t.resultName] = n.value,
                                    a.next = t.nextLoc,
                                    "return" !== a.method && (a.method = "next",
                                    a.arg = l),
                                    a.delegate = null,
                                    h) : n : (a.method = "throw",
                                    a.arg = new TypeError("iterator result is not an object"),
                                    a.delegate = null,
                                    h)
                                }(a, c);
                                if (a) {
                                    if (a === h)
                                        continue;
                                    return a
                                }
                            }
                            if ("next" === c.method)
                                c.sent = c._sent = c.arg;
                            else if ("throw" === c.method) {
                                if (i === p)
                                    throw i = m,
                                    c.arg;
                                c.dispatchException(c.arg)
                            } else
                                "return" === c.method && c.abrupt("return", c.arg);
                            i = f;
                            a = d(n, o, c);
                            if ("normal" === a.type) {
                                if (i = c.done ? m : "suspendedYield",
                                a.arg === h)
                                    continue;
                                return {
                                    value: a.arg,
                                    done: c.done
                                }
                            }
                            "throw" === a.type && (i = m,
                            c.method = "throw",
                            c.arg = a.arg)
                        }
                    }
                    )
                }),
                t
            }
            function d(e, t, a) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, a)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            c.wrap = i;
            var p = "suspendedStart"
              , f = "executing"
              , m = "completed"
              , h = {};
            function v() {}
            function g() {}
            function y() {}
            var t = {}
              , b = (o(t, r, function() {
                return this
            }),
            Object.getPrototypeOf)
              , b = b && b(b(N([])))
              , w = (b && b !== e && s.call(b, r) && (t = b),
            y.prototype = v.prototype = Object.create(t));
            function E(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    o(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function k(c, i) {
                var t;
                u(this, "_invoke", {
                    value: function(a, r) {
                        function e() {
                            return new i(function(e, t) {
                                !function t(e, a, r, n) {
                                    var o, e = d(c[e], c, a);
                                    if ("throw" !== e.type)
                                        return (a = (o = e.arg).value) && "object" == j()(a) && s.call(a, "__await") ? i.resolve(a.__await).then(function(e) {
                                            t("next", e, r, n)
                                        }, function(e) {
                                            t("throw", e, r, n)
                                        }) : i.resolve(a).then(function(e) {
                                            o.value = e,
                                            r(o)
                                        }, function(e) {
                                            return t("throw", e, r, n)
                                        });
                                    n(e.arg)
                                }(a, r, e, t)
                            }
                            )
                        }
                        return t = t ? t.then(e, e) : e()
                    }
                })
            }
            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function _(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function O(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(S, this),
                this.reset(!0)
            }
            function N(t) {
                if (t || "" === t) {
                    var a, e = t[r];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length))
                        return a = -1,
                        (e = function e() {
                            for (; ++a < t.length; )
                                if (s.call(t, a))
                                    return e.value = t[a],
                                    e.done = !1,
                                    e;
                            return e.value = l,
                            e.done = !0,
                            e
                        }
                        ).next = e
                }
                throw new TypeError(j()(t) + " is not iterable")
            }
            return u(w, "constructor", {
                value: g.prototype = y,
                configurable: !0
            }),
            u(y, "constructor", {
                value: g,
                configurable: !0
            }),
            g.displayName = o(y, n, "GeneratorFunction"),
            c.isGeneratorFunction = function(e) {
                e = "function" == typeof e && e.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            c.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                o(e, n, "GeneratorFunction")),
                e.prototype = Object.create(w),
                e
            }
            ,
            c.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            E(k.prototype),
            o(k.prototype, a, function() {
                return this
            }),
            c.AsyncIterator = k,
            c.async = function(e, t, a, r, n) {
                void 0 === n && (n = Promise);
                var o = new k(i(e, t, a, r),n);
                return c.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }
            ,
            E(w),
            o(w, n, "Generator"),
            o(w, r, function() {
                return this
            }),
            o(w, "toString", function() {
                return "[object Generator]"
            }),
            c.keys = function(e) {
                var t, a = Object(e), r = [];
                for (t in a)
                    r.push(t);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var t = r.pop();
                        if (t in a)
                            return e.value = t,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            c.values = N,
            O.prototype = {
                constructor: O,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = l,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = l,
                    this.tryEntries.forEach(_),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = l)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(a) {
                    if (this.done)
                        throw a;
                    var r = this;
                    function e(e, t) {
                        return o.type = "throw",
                        o.arg = a,
                        r.next = e,
                        t && (r.method = "next",
                        r.arg = l),
                        !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t]
                          , o = n.completion;
                        if ("root" === n.tryLoc)
                            return e("end");
                        if (n.tryLoc <= this.prev) {
                            var c = s.call(n, "catchLoc")
                              , i = s.call(n, "finallyLoc");
                            if (c && i) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            } else if (c) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0)
                            } else {
                                if (!i)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                        var r = this.tryEntries[a];
                        if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var n = r;
                            break
                        }
                    }
                    var o = (n = n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc ? null : n) ? n.completion : {};
                    return o.type = e,
                    o.arg = t,
                    n ? (this.method = "next",
                    this.next = n.finallyLoc,
                    h) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    h
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a = this.tryEntries[t];
                        if (a.finallyLoc === e)
                            return this.complete(a.completion, a.afterLoc),
                            _(a),
                            h
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a, r, n = this.tryEntries[t];
                        if (n.tryLoc === e)
                            return "throw" === (a = n.completion).type && (r = a.arg,
                            _(n)),
                            r
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, a) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: t,
                        nextLoc: a
                    },
                    "next" === this.method && (this.arg = l),
                    h
                }
            },
            c
        }
        function s(t, e) {
            var a, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)),
            r
        }
        function D(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(a), !0).forEach(function(e) {
                    i()(t, e, a[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return t
        }
        a(244);
        var u = Object(r.connect)(function(e) {
            return {
                role: e.common.rolePermission
            }
        })(function(l) {
            function r(e) {
                var t;
                e.proSkuNo && e.proSkuQty && ((t = Object(C.cloneDeep)(d))[e.proSkuNo] = e,
                a(t))
            }
            function o(e, t, a, r) {
                l.onClick && l.onClick(e, t, a),
                r && (t = l.keyword ? "?keywords=".concat(Object(h.B)({
                    keyword: l.keyword
                })) : "",
                window.open("/item/".concat(e.proSkuNo, ".html").concat(t)))
            }
            var n, s = l.dispatch, e = l.keyword, u = void 0 === e ? "" : e, c = l.stockInfoMap || {}, e = Object(f.useState)({}), e = g()(e, 2), d = e[0], a = e[1], i = Object(f.useRef)(), p = (i.current = (null == (e = l.data) ? void 0 : e.searchResSpuItemList) || [],
            (null == (e = l.data) || null == (e = e.searchResSpuItemList) ? void 0 : e.filter(function(e) {
                return 1 == e.productPositioning
            })) || []);
            return m.a.createElement("div", {
                className: "clearfix spu-list-wrap",
                "data-v-f3b2c702": ""
            }, null != (e = l.data) && null != (e = e.searchResSpuItemList) && e.length ? m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                className: "left-content",
                "data-v-f3b2c702": ""
            }, m.a.createElement("div", {
                className: "prop-title",
                "data-v-f3b2c702": ""
            }, "订货编码"), l.data.searchResSpuItemList.map(function(r, n) {
                var e;
                return m.a.createElement(b.InView, {
                    as: "div",
                    threshold: .7,
                    triggerOnce: !0,
                    className: "prop-cell sku-column",
                    onChange: function(e) {
                        var t;
                        t = n,
                        e && setTimeout(function() {
                            l.onShow && l.onShow(i.current[t], l.skuIndex, t)
                        }, 2e3)
                    },
                    onClick: function() {
                        return o(r, l.skuIndex, n)
                    },
                    key: "sku-".concat(r.proSkuNo, "-").concat(n),
                    "data-v-f3b2c702": ""
                }, m.a.createElement("a", {
                    href: "/item/".concat(r.proSkuNo, ".html").concat(l.keyword ? "?keywords=".concat(Object(h.B)({
                        keyword: l.keyword
                    })) : ""),
                    target: "_blank",
                    "data-v-f3b2c702": ""
                }, m.a.createElement("div", {
                    className: "sku-item",
                    "data-v-f3b2c702": ""
                }, m.a.createElement("span", {
                    className: "sku-no",
                    "data-v-f3b2c702": ""
                }, r.customerMaterialNo || r.proSkuNo), m.a.createElement("i", {
                    className: "iconfont copy-icon",
                    onClick: function(e) {
                        var t = r
                          , a = n;
                        e.preventDefault(),
                        e.stopPropagation(),
                        e = t.customerMaterialNo || t.proSkuNo,
                        y()(e),
                        L.a.toast({
                            container: "复制成功"
                        }),
                        Object(T.J)({
                            key_word: u,
                            request_id: l.requestId,
                            product_code: t.proSkuNo,
                            product_exhibition_type: w.d[t.priceType] || "",
                            product_exhibition_value: t.sellingPrice
                        }),
                        l.onClick && l.onClick(t, a)
                    },
                    "data-v-f3b2c702": ""
                }, "")), Object(P.I)(null == (e = c[r.proSkuNo]) || null == (e = e.skuStock) ? void 0 : e.tagType) ? m.a.createElement("div", {
                    className: "tag-wrap",
                    "data-v-f3b2c702": ""
                }, m.a.createElement("img", {
                    className: "tag-icon",
                    src: Object(P.I)(null == (e = c[r.proSkuNo]) || null == (e = e.skuStock) ? void 0 : e.tagType),
                    "data-v-f3b2c702": ""
                })) : null))
            })), m.a.createElement("div", {
                className: "center-content",
                "data-v-f3b2c702": ""
            }, m.a.createElement("table", {
                className: "spu-table",
                "data-v-f3b2c702": ""
            }, m.a.createElement("thead", {
                "data-v-f3b2c702": ""
            }, m.a.createElement("tr", {
                "data-v-f3b2c702": ""
            }, 1 < (null === p ? void 0 : p.length) && m.a.createElement("th", {
                className: "zkh-tag-cell",
                "data-v-f3b2c702": ""
            }), m.a.createElement("th", {
                "data-v-f3b2c702": ""
            }, null != (e = l.role) && e.canSeePrice ? "含税单价" : ""), null != (e = l.data.propertyName) && e.length ? l.data.propertyName.map(function(e, t) {
                return m.a.createElement("th", {
                    key: t,
                    "data-v-f3b2c702": ""
                }, e)
            }) : null)), m.a.createElement("tbody", {
                "data-v-f3b2c702": ""
            }, l.data.searchResSpuItemList.map(function(a, e) {
                var t;
                return m.a.createElement("tr", {
                    key: "spu-".concat(a.proSkuNo, "-").concat(e),
                    onClick: function() {
                        return o(a, l.skuIndex, e, !0)
                    },
                    "data-v-f3b2c702": ""
                }, 1 < (null === p ? void 0 : p.length) && m.a.createElement("td", {
                    className: "prop-cell zkh-tag-cell",
                    "data-v-f3b2c702": ""
                }, 1 == a.productPositioning && m.a.createElement(E.a, {
                    tagItem: w.g,
                    "data-v-f3b2c702": ""
                })), m.a.createElement("td", {
                    className: "prop-cell price-cell",
                    "data-v-f3b2c702": ""
                }, null != (t = l.role) && t.canSeePrice ? m.a.createElement(m.a.Fragment, null, m.a.createElement(S.a, {
                    role: l.role,
                    price: l.priceInfoMap && (null == (t = l.priceInfoMap[a.proSkuNo]) ? void 0 : t.price) || a.price,
                    originPrice: l.priceInfoMap && (null == (t = l.priceInfoMap[a.proSkuNo]) ? void 0 : t.originPrice) || a.originPrice,
                    priceType: l.priceInfoMap && (null == (t = l.priceInfoMap[a.proSkuNo]) ? void 0 : t.priceType) || a.priceType,
                    isPriceReady: l.isPriceReady,
                    ifHidePrice: l.ifHidePrice && !l.priceInfoMap[a.proSkuNo],
                    unit: a.unitOfMeasureCode,
                    "data-v-f3b2c702": ""
                }), m.a.createElement(N.a, {
                    url: "/item/".concat(a.proSkuNo, ".html").concat(u ? "?keywords=".concat(Object(h.B)({
                        keyword: u
                    })) : ""),
                    target: "_blank",
                    "data-v-f3b2c702": ""
                }, m.a.createElement(_.a, {
                    data: l.priceInfoMap && l.priceInfoMap[a.proSkuNo] || a,
                    memberText: "企业享会员价",
                    "data-v-f3b2c702": ""
                }))) : ""), null != a && null != (t = a.keySpecificationValueList) && t.length ? a.keySpecificationValueList.map(function(e, t) {
                    return m.a.createElement("td", {
                        className: "prop-cell",
                        key: "spec-".concat(a.proSkuNo, "-").concat(t),
                        "data-v-f3b2c702": ""
                    }, e.replace(/\<[\/]?em\>/g, ""))
                }) : null)
            })))), m.a.createElement("div", {
                className: "right-content",
                "data-v-f3b2c702": ""
            }, m.a.createElement("div", {
                className: "prop-title",
                "data-v-f3b2c702": ""
            }), l.data.searchResSpuItemList.map(function(t, e) {
                var a;
                return m.a.createElement("div", {
                    className: "action-columns",
                    key: "action-".concat(t.proSkuNo, "-").concat(e),
                    onClick: function() {
                        return o(t, l.skuIndex, e)
                    },
                    "data-v-f3b2c702": ""
                }, m.a.createElement("div", {
                    className: "prop-cell number-cell",
                    "data-v-f3b2c702": ""
                }, m.a.createElement("div", {
                    className: "stock-wrap",
                    "data-v-f3b2c702": ""
                }, c[t.proSkuNo] ? m.a.createElement(O.a, {
                    data: c[t.proSkuNo],
                    "data-v-f3b2c702": ""
                }) : ""), 0 == t.ifInProductPool ? m.a.createElement("span", {
                    className: "grey-tag",
                    "data-v-f3b2c702": ""
                }, "商品不在商品池中") : null, 0 == t.ifInProductPool || null != (a = c[t.proSkuNo]) && a.isDisabledSku ? null : m.a.createElement(k.a, {
                    size: "small",
                    mpq: t.mpq,
                    proSkuNo: t.proSkuNo,
                    price: l.priceInfoMap && (null == (a = l.priceInfoMap[t.proSkuNo]) ? void 0 : a.price) || t.price,
                    minOrderNum: t.proSkuMinOrderNum,
                    isSoldOutStop: t.isSoldOutStop,
                    proSkuLeadTime: t.proSkuLeadTime,
                    skuStock: (null == (a = c[t.proSkuNo]) ? void 0 : a.skuStock) || null,
                    onChange: r,
                    isDisabled: l.priceInfoMap && -3 === (null == (a = l.priceInfoMap[t.proSkuNo]) ? void 0 : a.price) || -3 === t.price,
                    defaultValue: 0,
                    allowUnderMinOrder: !0,
                    isAddBuyCheck: l.isLogin,
                    index: e,
                    "data-v-f3b2c702": ""
                })), m.a.createElement("div", {
                    className: "prop-cell add-cart-cell",
                    "data-v-f3b2c702": ""
                }, 0 == t.ifInProductPool || null != (a = c[t.proSkuNo]) && a.isDisabledSku ? null : m.a.createElement("i", {
                    className: F()("iconfont add-cart-icon", {
                        "cart-none": t.faDisableAddCart || !(null != (a = l.role) && a.canAddToCart) || l.priceInfoMap && -3 === (null == (a = l.priceInfoMap[t.proSkuNo]) ? void 0 : a.price) || -3 === t.price
                    }),
                    onClick: function(e) {
                        return function() {
                            return (n = n || v()(M().mark(function e(t, a) {
                                var r, n, o, c, i = arguments;
                                return M().wrap(function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (n = 2 < i.length && void 0 !== i[2] ? i[2] : {},
                                            l.isLogin) {
                                                e.next = 4;
                                                break
                                            }
                                            return s({
                                                type: "common/updateTodo",
                                                payload: {
                                                    quickLoginShow: !0
                                                }
                                            }),
                                            e.abrupt("return");
                                        case 4:
                                            if (-3 === a.price)
                                                return e.abrupt("return");
                                            e.next = 6;
                                            break;
                                        case 6:
                                            if (3 == (null == n ? void 0 : n.tagType))
                                                return L.a.toast({
                                                    container: "商品补货中，暂时无法下单采买"
                                                }),
                                                e.abrupt("return");
                                            e.next = 9;
                                            break;
                                        case 9:
                                            if (null != n && n.offShelfStatus)
                                                return L.a.toast({
                                                    container: "商品已下架!"
                                                }),
                                                e.abrupt("return");
                                            e.next = 12;
                                            break;
                                        case 12:
                                            if (a.faDisableAddCart)
                                                return L.a.toast({
                                                    container: "请进入商品详情页选型后加入购物车!"
                                                }),
                                                e.abrupt("return");
                                            e.next = 15;
                                            break;
                                        case 15:
                                            if ([3, 4].includes(null == n ? void 0 : n.tagType))
                                                return L.a.toast({
                                                    container: "商品补货中，暂时无法下单采买"
                                                }),
                                                e.abrupt("return");
                                            e.next = 18;
                                            break;
                                        case 18:
                                            if (o = l.role || {},
                                            c = !o.canSeePrice || o.canSeePrice && -1 < a.price ? "cart" : "inquiry",
                                            o.canAddToCart || "cart" !== c) {
                                                e.next = 23;
                                                break
                                            }
                                            return L.a.toast({
                                                container: "当前账号不可加购，请联系集团管理员"
                                            }),
                                            e.abrupt("return");
                                        case 23:
                                            if (o.canInquiry || "inquiry" !== c) {
                                                e.next = 26;
                                                break
                                            }
                                            return L.a.toast({
                                                container: "当前账号不可".concat(o.canSeePrice ? "询价" : "加购", "，请联系集团管理员")
                                            }),
                                            e.abrupt("return");
                                        case 26:
                                            if (null != (r = d[a.proSkuNo]) && r.proSkuQty) {
                                                e.next = 29;
                                                break
                                            }
                                            return L.a.toast({
                                                container: "请选择加购数量"
                                            }),
                                            e.abrupt("return");
                                        case 29:
                                            x.a.init({
                                                src: a.proImgPath_Z1[0] || h.d,
                                                start: {
                                                    left: t.clientX,
                                                    top: t.clientY
                                                },
                                                end: {
                                                    left: document.querySelector(".my-shopcart-btn").getBoundingClientRect().left,
                                                    top: 0 < a.price ? 330 : 380,
                                                    width: 20,
                                                    height: 20
                                                },
                                                speed: 1,
                                                vertex_Rtop: 100
                                            }),
                                            Object(I.a)({
                                                proSkuNo: a.proSkuNo,
                                                proSkuQty: (null == (r = d[a.proSkuNo]) ? void 0 : r.proSkuQty) || 1,
                                                cartType: -1 < a.price ? 1 : 0
                                            }).then(function(e) {
                                                var t;
                                                e && "0000" === e.code ? (s({
                                                    type: "common/updateShopData"
                                                }),
                                                t = l.requestId ? {
                                                    request_id: l.requestId
                                                } : {},
                                                u && (t.key_word = u),
                                                -1 < a.price ? Object(T.ab)(D({
                                                    product_code_list: [a.proSkuNo],
                                                    product_quantity: a.proSkuMinOrderNum || 1,
                                                    category_num: 1
                                                }, t)) : Object(T.j)(D({
                                                    product_code: a.proSkuNo
                                                }, t))) : L.a.toast({
                                                    container: e.message || "加购异常"
                                                })
                                            }).catch(function(e) {
                                                L.a.toast({
                                                    container: e && e.data || "服务异常"
                                                })
                                            });
                                        case 31:
                                        case "end":
                                            return e.stop()
                                        }
                                }, e)
                            }))).apply(this, arguments)
                        }(e, t, c[t.proSkuNo])
                    },
                    "data-v-f3b2c702": ""
                }, "")))
            }))) : null)
        });
        a(245),
        t.a = function(r) {
            var e;
            return m.a.createElement("div", {
                className: "new-goods-list-wrap",
                "data-v-a94276a5": ""
            }, null != (e = r.content) && e.length ? r.content.map(function(e, t) {
                var a = ((null != (a = e.searchResSpuItemList) && a.length ? e.searchResSpuItemList[0] : e).proImgPath_Z1 || [])[0] || h.d;
                return m.a.createElement("div", {
                    className: "new-goods-item",
                    key: "".concat(t),
                    "data-v-a94276a5": ""
                }, m.a.createElement("a", {
                    className: "sku-info",
                    target: "_blank",
                    href: "/item/".concat(e.proSkuNo, ".html").concat(r.keyword ? "?keywords=".concat(Object(h.B)({
                        keyword: r.keyword
                    })) : ""),
                    "data-v-a94276a5": ""
                }, m.a.createElement(c.a, {
                    className: "sku-img-wrap",
                    placeholder: m.a.createElement("img", {
                        src: h.d,
                        "data-v-a94276a5": ""
                    }),
                    "data-v-a94276a5": ""
                }, m.a.createElement(o.a, {
                    src: Object(n.a)(a),
                    alt: e.proSkuProductName && e.proSkuProductName.replace(/\<[\/]?em\>/g, ""),
                    title: e.proSkuProductName && e.proSkuProductName.replace(/\<[\/]?em\>/g, ""),
                    "data-v-a94276a5": ""
                })), m.a.createElement("div", {
                    className: "sku-desc-wrap",
                    "data-v-a94276a5": ""
                }, m.a.createElement("div", {
                    className: "sku-name",
                    dangerouslySetInnerHTML: {
                        __html: e.spuDesc
                    },
                    "data-v-a94276a5": ""
                }), m.a.createElement("div", {
                    className: "hit-num",
                    "data-v-a94276a5": ""
                }, "共", e.innerTotalHits, "种规格"))), m.a.createElement(u, {
                    data: e,
                    skuIndex: t,
                    isLogin: r.isLogin,
                    ifHidePrice: r.ifHidePrice,
                    isPriceReady: r.isPriceReady,
                    priceInfoMap: r.priceInfoMap,
                    stockInfoMap: r.stockInfoMap,
                    requestId: r.requestId,
                    onShow: r.onShow,
                    onClick: r.onClick,
                    "data-v-a94276a5": ""
                }), 8 < e.innerTotalHits ? m.a.createElement("a", {
                    className: "show-more",
                    href: "/item/".concat(e.proSkuNo, ".html"),
                    target: "_blank",
                    "data-v-a94276a5": ""
                }, "查看更多") : null)
            }) : null)
        }
    },
    1300: function(e, t, a) {
        a(19),
        e.exports = a(1301)
    },
    1301: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = a(431)
          , n = a(41)
          , o = a(221)
          , a = a.n(o);
        t.default = Object(n.a)(a.a, [r.a])
    },
    133: function(e, t, a) {
        "use strict";
        var r = a(1)
          , u = a.n(r)
          , d = a(0)
          , p = a.n(d)
          , f = a(45)
          , m = (a(316),
        a(37))
          , r = a(657)
          , h = a(3)
          , v = a(11);
        t.a = Object(r.a)(function(t) {
            function a() {
                return "".concat((new Date).getMonth() + 1, "-").concat((new Date).getDate())
            }
            function r() {
                var e = {
                    dateTag: a(),
                    isShow: !0
                };
                h.vb.setStorageItem("searchAd_config", e)
            }
            var e = t.adType
              , n = void 0 === e ? 1 : e
              , e = t.keyWord
              , o = void 0 === e ? "" : e
              , e = Object(d.useState)(null)
              , e = u()(e, 2)
              , c = e[0]
              , i = e[1]
              , e = Object(d.useState)(!1)
              , e = u()(e, 2)
              , l = e[0]
              , s = e[1];
            return Object(d.useEffect)(function() {
                var e, t;
                e = h.vb.getStorageItem("searchAd_config"),
                t = a(),
                e ? t === e.dateTag ? s(e.isShow) : (r(),
                s(!0)) : r()
            }, []),
            Object(d.useEffect)(function() {
                l && Object(m.c)({
                    adType: n,
                    keyWord: o
                }).then(function(e) {
                    "0000" === e.code && i(e.result)
                })
            }, [l]),
            p.a.createElement(p.a.Fragment, null, c && l ? p.a.createElement("div", null, p.a.createElement(f.InView, {
                as: "div",
                threshold: .7,
                triggerOnce: !0,
                onChange: function(e) {
                    var t;
                    t = c,
                    e && Object(v.c)({
                        banner_module: 1 === n ? "指定搜索词展示运营位" : "搜索腰部运营位",
                        banner_id: 1,
                        banner_name: t.name || "",
                        banner_rank: 1,
                        banner_type: "",
                        banner_content: t.redirectUrl || ""
                    })
                },
                className: "insert-ads-wrap"
            }, p.a.createElement("i", {
                className: "iconfont close",
                onClick: function() {
                    i(null);
                    var e = {
                        dateTag: a(),
                        isShow: !1
                    };
                    h.vb.setStorageItem("searchAd_config", e)
                }
            }, ""), p.a.createElement("a", {
                href: c.redirectUrl,
                target: "_blank",
                onClick: function() {
                    var e = c;
                    Object(v.b)({
                        banner_module: 1 === n ? "指定搜索词展示运营位" : "搜索腰部运营位",
                        operation_type: "点击",
                        mk_id: 1,
                        banner_name: e.name || "",
                        banner_rank: 1,
                        banner_type: "",
                        banner_content: e.redirectUrl || ""
                    }),
                    t.onClick && t.onClick(c)
                }
            }, p.a.createElement("img", {
                src: c.picTypeImgUrl
            })))) : null)
        })
    },
    136: function(e, t, a) {
        "use strict";
        var r = a(1)
          , k = a.n(r)
          , S = a(0)
          , _ = a.n(S)
          , O = (a(309),
        a(111))
          , r = a(2)
          , N = a.n(r)
          , j = a(63);
        t.a = function(o) {
            var c = o.title
              , e = o.isShowMultiple
              , e = void 0 === e || e
              , t = o.selectorList
              , i = void 0 === t ? [] : t
              , l = o.singleSelect
              , a = o.multipleSelect
              , t = (o.type,
            o.query)
              , r = void 0 === t ? {} : t
              , s = o.isSeo
              , u = o.getUrl
              , n = o.curTitle
              , d = o.updateCurTitle
              , t = o.isSearchPage
              , p = Object(S.useState)(!1)
              , p = k()(p, 2)
              , f = p[0]
              , m = p[1]
              , p = Object(S.useState)(!1)
              , p = k()(p, 2)
              , h = p[0]
              , v = p[1]
              , p = Object(S.useState)("down")
              , p = k()(p, 2)
              , g = p[0]
              , y = p[1]
              , p = Object(S.useState)([])
              , p = k()(p, 2)
              , b = p[0]
              , w = p[1]
              , E = Object(S.useRef)();
            return Object(S.useEffect)(function() {
                n && n !== c && (m(!1),
                y("down"))
            }, [n]),
            Object(S.useEffect)(function() {
                var e;
                o.selectorList.length && E && E.current && (e = E.current.clientHeight,
                v(50 < e))
            }, [o.selectorList]),
            _.a.createElement("div", {
                className: "selector-row-wrap-new clearfix"
            }, _.a.createElement("div", {
                className: N()("selector-title")
            }, t && "目录" === c ? "分类" : c, "："), f ? _.a.createElement(_.a.Fragment, null, _.a.createElement("div", {
                className: N()("selector-single-wrap", {
                    "selector-single-wrap-ih": f
                })
            }, _.a.createElement("div", {
                className: "selector-single-box"
            }, _.a.createElement(O.a, {
                checks: i,
                onChangeGrop: function(e) {
                    w(e)
                }
            })), _.a.createElement("div", {
                className: "selector-multiple-btn"
            }, _.a.createElement("button", {
                className: N()({
                    active: b.length
                }),
                onClick: function() {
                    b.length && (a(b.map(function(e) {
                        return {
                            label: e.children,
                            value: e.value
                        }
                    }), c),
                    m(!1))
                }
            }, "确定"), _.a.createElement("button", {
                onClick: function() {
                    return m(!1)
                }
            }, "取消")))) : _.a.createElement("div", {
                className: N()("selector-single-wrap", {
                    "selector-single-wrap-auto": "up" === g
                })
            }, _.a.createElement("ul", {
                className: "selector-single clearfix",
                ref: E
            }, _.a.createElement("li", null, _.a.createElement("a", {
                href: "javascript:;",
                className: "on"
            }, "不限")), i && i.map(function(n, e) {
                return _.a.createElement("li", {
                    key: "selectorRow-".concat(n.label, "-").concat(e)
                }, "目录" === c && u ? s ? _.a.createElement(j.a, {
                    url: u && u({
                        query: r,
                        proCatalogId: n.value,
                        listShowStyle: n.listShowStyle
                    }),
                    text: n.label
                }) : _.a.createElement("a", {
                    href: u && u({
                        query: r,
                        proCatalogId: n.value,
                        listShowStyle: n.listShowStyle
                    })
                }, n.label) : _.a.createElement("a", {
                    onClick: function() {
                        var a, r, e, t;
                        a = n,
                        r = c,
                        1 < i.length ? l(a, r) : 1 == i.length && (t = [],
                        (t = null != (e = o.headerSelect) && e.length ? o.headerSelect.filter(function(e) {
                            var t = e.value.split(" ");
                            return e.title == r && t.includes(a.label)
                        }) : t).length || l(a, r))
                    },
                    href: "javascript:;"
                }, n.label))
            }))), _.a.createElement("div", {
                className: "selector-btn-wrap"
            }, h && !f ? "down" === g ? _.a.createElement("div", {
                onClick: function() {
                    y("up"),
                    d(c)
                },
                className: "selector-more"
            }, "更多", _.a.createElement("i", {
                className: "iconfont icon-more"
            }, "")) : _.a.createElement("div", {
                onClick: function() {
                    return y("down")
                },
                className: "selector-more"
            }, "收起", _.a.createElement("i", {
                className: "iconfont icon-more"
            }, "")) : null, e && !f && 1 < i.length ? _.a.createElement("span", {
                className: "selector-multiple",
                onClick: function() {
                    m(!0),
                    d(c)
                }
            }, _.a.createElement("span", null, "多选"), _.a.createElement("i", {
                className: "iconfont icon-add"
            }, "")) : null))
        }
    },
    15: function(e, t) {
        e.exports = _
    },
    167: function(e, t, a) {
        "use strict";
        var r = a(5)
          , n = a.n(r)
          , r = a(0)
          , o = a.n(r)
          , r = a(7)
          , c = a(4)
          , i = a(10)
          , l = a(11)
          , s = a(107)
          , u = a.n(s);
        function d(t, e) {
            var a, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)),
            r
        }
        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? d(Object(a), !0).forEach(function(e) {
                    n()(t, e, a[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return t
        }
        a(307),
        t.a = Object(r.connect)(function(e) {
            return {
                injectConst: e.common.injectConst,
                catalogId: e.catalog.catalogId,
                brandIds: e.catalog.brandIds,
                from: e.catalog.from,
                requestId: e.catalog.requestId,
                clp: e.catalog.clp,
                sort: e.catalog.sort,
                rangeFilter: e.catalog.rangeFilter,
                extraFilter: e.catalog.extraFilter,
                properties: e.catalog.properties,
                keyword: e.catalog.keyword
            }
        })(function(t) {
            return o.a.createElement("div", {
                className: "share-btn",
                onClick: function() {
                    var e = Object(i.v)(p(p({}, t), {}, {
                        originPath: "".concat(location.origin).concat(location.pathname)
                    }), !1);
                    u()(e),
                    c.a.toast({
                        container: "复制链接成功！"
                    }),
                    Object(l.Z)({
                        share_link: e,
                        key_word: t.keyword,
                        request_id: t.requestId
                    })
                },
                "data-v-cb0ac43e": ""
            }, "分享选型结果")
        })
    },
    168: function(e, t, a) {
        "use strict";
        var r = a(5)
          , n = a.n(r)
          , r = a(1)
          , W = a.n(r)
          , G = a(0)
          , A = a.n(G)
          , U = (a(314),
        a(79))
          , Q = a(3)
          , r = a(7)
          , o = a(2)
          , z = a.n(o)
          , K = a(15)
          , V = a(16);
        function c(t, e) {
            var a, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)),
            r
        }
        function Y(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(a), !0).forEach(function(e) {
                    n()(t, e, a[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return t
        }
        t.a = Object(r.connect)(function(e) {
            return {
                user: e.common.user
            }
        })(function(a) {
            function e(e) {
                _(e),
                n({
                    sort: e
                })
            }
            function n(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                "catalogList" == i && s({
                    type: "catalog/getListInfo",
                    payload: Y({
                        from: 0,
                        sort: S,
                        rangeFilter: T,
                        extraFilter: {
                            showIndustryFeatured: O,
                            inStock: L,
                            showAgreementProduct: j
                        }
                    }, e)
                }),
                a.onChange && a.onChange(Y({
                    actionType: "filter",
                    sort: S,
                    rangeFilter: T,
                    extraFilter: {
                        showIndustryFeatured: O,
                        inStock: L,
                        showAgreementProduct: j
                    },
                    viewType: l,
                    operationType: null == t ? void 0 : t.operationType
                }, e)),
                "fixedFilter" === a.type && Object(Q.pb)(document.querySelector(".list-inner"))
            }
            function t() {
                var e = "";
                switch (l) {
                case "pic":
                    e = "list";
                    break;
                case "list":
                    e = "pic";
                    break;
                case "sidePic":
                    e = "sideList";
                    break;
                case "sideList":
                    e = "sidePic"
                }
                "catalogList" == i && s({
                    type: "catalog/updateTodoViewType",
                    payload: {
                        viewType: e
                    }
                }),
                a.onChange && a.onChange({
                    actionType: "view",
                    sort: S,
                    rangeFilter: T,
                    showIndustryFeatured: O,
                    inStock: L,
                    showAgreementProduct: j,
                    viewType: e
                })
            }
            function r(e, t) {
                H(e ? t : "")
            }
            function o(e, t) {
                var a, e = {
                    min: e[0],
                    max: e[1],
                    rangeType: t
                }, r = Object(K.cloneDeep)(T);
                r.length ? (a = r.findIndex(function(e) {
                    return e.rangeType == t
                })) < 0 ? r.push(e) : r[a] = e : r = [e],
                P(r),
                n({
                    rangeFilter: r
                }, {
                    operationType: t
                })
            }
            var c = a.modelType
              , i = void 0 === c ? "catalogList" : c
              , c = a.skuTotalHits
              , l = a.viewType
              , s = a.dispatch
              , u = a.initSort
              , d = void 0 === u ? "" : u
              , u = a.initExtraFilter
              , u = void 0 === u ? {
                showIndustryFeatured: !1,
                inStock: !1,
                showAgreementProduct: !1
            } : u
              , p = a.initRangeFilter
              , f = void 0 === p ? [{
                min: "",
                max: "",
                rangeType: "price"
            }] : p
              , p = a.hideFeatureSelected
              , m = a.hideAgreementSelected
              , h = a.hideInstock
              , v = a.hideDefaultSort
              , D = a.hideSaleSort
              , q = a.hidePriceSort
              , g = a.user
              , g = void 0 === g ? {} : g
              , y = (a.type,
            f.filter(function(e) {
                return "price" == e.rangeType
            }))
              , b = (null == (b = y[0]) ? void 0 : b.min) || ""
              , y = (null == (y = y[0]) ? void 0 : y.max) || ""
              , w = null == u ? void 0 : u.showIndustryFeatured
              , E = null == u ? void 0 : u.inStock
              , k = null == u ? void 0 : u.showAgreementProduct
              , u = Object(G.useState)(d)
              , u = W()(u, 2)
              , S = u[0]
              , _ = u[1]
              , u = Object(G.useState)(b)
              , b = W()(u, 2)
              , u = b[0]
              , R = b[1]
              , b = Object(G.useState)(y)
              , y = W()(b, 2)
              , b = y[0]
              , B = y[1]
              , y = Object(G.useState)(w)
              , y = W()(y, 2)
              , O = y[0]
              , N = y[1]
              , y = Object(G.useState)(k)
              , y = W()(y, 2)
              , j = y[0]
              , x = y[1]
              , y = Object(G.useState)(E)
              , y = W()(y, 2)
              , L = y[0]
              , I = y[1]
              , y = Object(G.useState)(f)
              , y = W()(y, 2)
              , T = y[0]
              , P = y[1]
              , y = f.filter(function(e) {
                return "moq" == e.rangeType
            })
              , C = (null == (C = y[0]) ? void 0 : C.min) || ""
              , y = (null == (y = y[0]) ? void 0 : y.max) || ""
              , F = (Object(G.useEffect)(function() {
                _(d)
            }, [d]),
            Object(G.useEffect)(function() {
                P(f),
                R(f && f[0] && f[0].min || ""),
                B(f && f[0] && f[0].max || "")
            }, [f]),
            Object(G.useEffect)(function() {
                I(E)
            }, [E]),
            Object(G.useEffect)(function() {
                N(w)
            }, [w]),
            Object(G.useEffect)(function() {
                x(k)
            }, [k]),
            Object(G.useState)(""))
              , F = W()(F, 2)
              , M = F[0]
              , H = F[1];
            return A.a.createElement("div", {
                className: "screen-filter-wrap",
                id: "screenFilter"
            }, A.a.createElement("ul", {
                className: "filter-sort"
            }, v ? "" : A.a.createElement("li", {
                className: z()({
                    active: 0 === S
                }),
                onClick: function() {
                    return e(0)
                }
            }, A.a.createElement("a", {
                href: "javascript:void(0)"
            }, "默认")), D ? "" : A.a.createElement("li", {
                className: z()({
                    active: 3 === S
                }),
                onClick: function() {
                    return e(3)
                }
            }, A.a.createElement("a", {
                href: "javascript:void(0)"
            }, "销量"), A.a.createElement("i", {
                className: "iconfont i-arrow-down"
            }, "")), q ? "" : A.a.createElement("li", {
                className: z()({
                    active: 2 === S || 1 === S
                }),
                onClick: function() {
                    e(2 === S ? 1 : 2)
                }
            }, A.a.createElement("a", {
                href: "javascript:void(0)"
            }, "价格"), A.a.createElement("span", {
                className: z()("i-arrow-price", {
                    up: 2 === S,
                    down: 1 === S
                })
            }, A.a.createElement("b", {
                className: "iconfont"
            }, ""), A.a.createElement("i", {
                className: "iconfont"
            }, "")))), A.a.createElement(V.ZKHRangeFilter, {
                className: "floatLeft search-range-filter-wrap",
                type: "price",
                range: [u, b],
                isActive: "price" == M,
                onActive: function(e) {
                    return r(e, "price")
                },
                onSubmit: function(e) {
                    return o(e, "price")
                }
            }), a.hideMoqSearch ? null : A.a.createElement(V.ZKHRangeFilter, {
                className: "floatLeft search-range-filter-wrap",
                type: "moq",
                range: [C, y],
                isActive: "moq" == M,
                onActive: function(e) {
                    return r(e, "moq")
                },
                onSubmit: function(e) {
                    return o(e, "moq")
                }
            }), A.a.createElement("div", {
                className: "filter-checkbox-wrap"
            }, p ? "" : A.a.createElement(U.a, {
                change: function(e) {
                    e = e.target.checked;
                    N(e),
                    n({
                        extraFilter: {
                            inStock: L,
                            showAgreementProduct: j,
                            showIndustryFeatured: e
                        }
                    })
                },
                value: "showIndustryFeatured",
                checked: w
            }, "行家精选"), !m && null != g && g.hasAgreementProduct ? A.a.createElement(U.a, {
                change: function(e) {
                    e = e.target.checked;
                    x(e),
                    n({
                        extraFilter: {
                            inStock: L,
                            showAgreementProduct: e,
                            showIndustryFeatured: O
                        }
                    })
                },
                value: "inAgreement",
                checked: k
            }, "协议商品") : "", h ? "" : A.a.createElement(U.a, {
                change: function(e) {
                    e = e.target.checked;
                    I(e),
                    n({
                        extraFilter: {
                            inStock: e,
                            showAgreementProduct: j,
                            showIndustryFeatured: O
                        }
                    })
                },
                value: "inStock",
                checked: E
            }, "库存充足")), A.a.createElement("span", {
                className: "filter-total"
            }, A.a.createElement("b", null, c), "种"), A.a.createElement("ul", {
                className: "filter-list-type"
            }, A.a.createElement("li", {
                className: z()({
                    active: "pic" === l || "sidePic" === l
                }),
                onClick: t
            }, A.a.createElement("i", {
                className: "iconfont"
            }, ""), "大图"), A.a.createElement("li", {
                className: z()({
                    active: "list" === l || "sideList" === l
                }),
                onClick: t
            }, A.a.createElement("i", {
                className: "iconfont icon-list"
            }, ""), "列表")))
        })
    },
    169: function(e, t, a) {
        "use strict";
        function O(e) {
            var t = e.data
              , a = e.onChangeKeyIndex
              , e = Object(x.useState)(0)
              , r = (e = j()(e, 2))[0]
              , n = e[1];
            return L.a.createElement("ul", {
                className: "key-list clearfix",
                "data-v-9626c23c": ""
            }, t && t.length ? t.map(function(e, t) {
                return L.a.createElement("li", {
                    className: T()({
                        "key-item": !0,
                        active: r === t
                    }),
                    key: e.label,
                    onClick: function() {
                        var e;
                        n(e = t),
                        a(e)
                    },
                    "data-v-9626c23c": ""
                }, e.label)
            }) : null)
        }
        var r = a(35)
          , N = a.n(r)
          , r = a(1)
          , j = a.n(r)
          , x = a(0)
          , L = a.n(x)
          , I = (a(310),
        a(111))
          , r = a(2)
          , T = a.n(r)
          , P = a(63)
          , C = (a(311),
        a(15));
        t.a = function(o) {
            var c = o.title
              , e = o.isShowMultiple
              , e = void 0 === e || e
              , t = o.selectorList
              , i = void 0 === t ? [] : t
              , t = o.classifiedSelectorList
              , a = void 0 === t ? [] : t
              , l = o.singleSelect
              , r = o.multipleSelect
              , t = (o.type,
            o.query)
              , s = void 0 === t ? {} : t
              , u = (o.params,
            o.isSeo)
              , d = o.getUrl
              , n = o.curTitle
              , p = o.updateCurTitle
              , t = Object(x.useState)(!1)
              , t = j()(t, 2)
              , f = t[0]
              , m = t[1]
              , t = Object(x.useState)(!1)
              , t = j()(t, 2)
              , h = t[0]
              , v = t[1]
              , t = Object(x.useState)("down")
              , t = j()(t, 2)
              , g = t[0]
              , y = t[1]
              , t = Object(x.useState)([])
              , t = j()(t, 2)
              , b = t[0]
              , w = t[1]
              , t = Object(x.useState)(i)
              , t = j()(t, 2)
              , E = t[0]
              , k = t[1]
              , S = Object(x.useRef)()
              , _ = (Object(x.useEffect)(function() {
                n && n !== c && (m(!1),
                y("down"),
                w([]),
                _(0))
            }, [n]),
            Object(x.useEffect)(function() {
                k(o.selectorList),
                o.selectorList.length && S && S.current && setTimeout(function() {
                    var e = S.current.clientHeight;
                    v(50 < e)
                }, 20)
            }, [o.selectorList]),
            function(e) {
                k(a[e] && a[e].brandList || [])
            }
            );
            return L.a.createElement("div", {
                className: "selector-row-wrap-new clearfix",
                "data-v-b90321e7": ""
            }, L.a.createElement("div", {
                className: T()("selector-title"),
                "data-v-b90321e7": ""
            }, c, "："), f ? L.a.createElement(L.a.Fragment, null, L.a.createElement("div", {
                className: T()("selector-single-wrap", {
                    "selector-single-wrap-ih": f
                }),
                "data-v-b90321e7": ""
            }, L.a.createElement(O, {
                data: a,
                onChangeKeyIndex: _,
                "data-v-b90321e7": ""
            }), L.a.createElement("div", {
                className: "selector-single-box",
                "data-v-b90321e7": ""
            }, L.a.createElement(I.a, {
                checks: E,
                onChangeGrop: function(e, t, a) {
                    "add" === t ? w([].concat(N()(b), [a])) : "del" === t && (t = b.concat([]),
                    t = Object(C.remove)(t, function(e) {
                        return e.label !== a.label
                    }),
                    w(t))
                },
                initChecked: b,
                isReserveExtendData: !0,
                "data-v-b90321e7": ""
            })), L.a.createElement("div", {
                className: "selector-multiple-result",
                "data-v-b90321e7": ""
            }, b && b.length ? L.a.createElement(L.a.Fragment, null, L.a.createElement("span", {
                "data-v-b90321e7": ""
            }, "已选条件："), L.a.createElement(I.a, {
                checks: b,
                onChangeGrop: function(e) {
                    w(e)
                },
                initChecked: b,
                "data-v-b90321e7": ""
            })) : null), L.a.createElement("div", {
                className: "selector-multiple-btn",
                "data-v-b90321e7": ""
            }, L.a.createElement("button", {
                className: T()({
                    active: b.length
                }),
                onClick: function() {
                    b.length && (r(b.map(function(e) {
                        return {
                            label: e.children,
                            value: e.value
                        }
                    }), c),
                    m(!1),
                    w([]))
                },
                "data-v-b90321e7": ""
            }, "确定"), L.a.createElement("button", {
                onClick: function() {
                    m(!1),
                    w([]),
                    _(0)
                },
                "data-v-b90321e7": ""
            }, "取消")))) : L.a.createElement("div", {
                className: T()("selector-single-wrap", {
                    "selector-single-wrap-auto": "up" === g
                }),
                "data-v-b90321e7": ""
            }, "up" === g ? L.a.createElement(O, {
                data: a,
                onChangeKeyIndex: _,
                "data-v-b90321e7": ""
            }) : null, L.a.createElement("ul", {
                className: "selector-single clearfix",
                ref: S,
                "data-v-b90321e7": ""
            }, L.a.createElement("li", {
                "data-v-b90321e7": ""
            }, L.a.createElement("a", {
                href: "javascript:;",
                className: "on",
                "data-v-b90321e7": ""
            }, "不限")), E && E.map(function(n, e) {
                return L.a.createElement("li", {
                    key: "selectorRow-".concat(n.label, "-").concat(e),
                    "data-v-b90321e7": ""
                }, "目录" === c ? u ? L.a.createElement(P.a, {
                    url: d && d({
                        query: s,
                        proCatalogId: n.value
                    }),
                    text: n.label,
                    "data-v-b90321e7": ""
                }) : L.a.createElement("a", {
                    href: d && d({
                        query: s,
                        proCatalogId: n.value
                    }),
                    "data-v-b90321e7": ""
                }, n.label) : L.a.createElement("a", {
                    onClick: function() {
                        return a = n,
                        r = c,
                        1 < i.length ? l(a, r) : 1 == i.length && (t = [],
                        (t = null != (e = o.headerSelect) && e.length ? o.headerSelect.filter(function(e) {
                            var t = Object(C.isArray)(e.id) ? e.id : [e.id];
                            return e.title == r && t.includes(a.value)
                        }) : t).length || l(a, r)),
                        void y("down");
                        var a, r, e, t
                    },
                    href: "javascript:;",
                    "data-v-b90321e7": ""
                }, n.label, n.isRecommend ? L.a.createElement("span", {
                    className: "recommend-icon-wrap",
                    "data-v-b90321e7": ""
                }, L.a.createElement("span", {
                    className: "recommend-icon",
                    "data-v-b90321e7": ""
                }, L.a.createElement("i", {
                    className: "iconfont",
                    "data-v-b90321e7": ""
                }, ""))) : null))
            }))), L.a.createElement("div", {
                className: "selector-btn-wrap",
                "data-v-b90321e7": ""
            }, h && !f ? "down" === g ? L.a.createElement("div", {
                onClick: function() {
                    y("up"),
                    _(0),
                    p(c)
                },
                className: "selector-more",
                "data-v-b90321e7": ""
            }, "更多", L.a.createElement("i", {
                className: "iconfont icon-more",
                "data-v-b90321e7": ""
            }, "")) : L.a.createElement("div", {
                onClick: function() {
                    y("down"),
                    _(0)
                },
                className: "selector-more",
                "data-v-b90321e7": ""
            }, "收起", L.a.createElement("i", {
                className: "iconfont icon-more",
                "data-v-b90321e7": ""
            }, "")) : null, e && !f && 1 < i.length ? L.a.createElement("span", {
                className: "selector-multiple",
                onClick: function() {
                    m(!0),
                    _(0),
                    p(c)
                },
                "data-v-b90321e7": ""
            }, L.a.createElement("span", {
                "data-v-b90321e7": ""
            }, "多选"), L.a.createElement("i", {
                className: "iconfont icon-add",
                "data-v-b90321e7": ""
            }, "")) : null))
        }
    } ,
    170: function(e, t, a) {
        "use strict";
        function n(e) {
            var a = e.title
              , t = e.index
              , r = void 0 === (r = e.selectorList) ? [] : r
              , n = e.singleSelect
              , o = e.multipleSelect
              , e = Object(h.useState)(!1)
              , c = (e = g()(e, 2))[0]
              , i = e[1]
              , e = Object(h.useState)(null)
              , l = (e = g()(e, 2))[0]
              , s = e[1]
              , e = Object(h.useState)([])
              , u = (e = g()(e, 2))[0]
              , d = e[1]
              , e = Object(h.useState)(32)
              , p = (e = g()(e, 2))[0]
              , f = e[1]
              , m = Object(h.useRef)(null);
            return v.a.createElement("li", {
                className: b()("senior-selector-tag", {
                    active: l === t
                }),
                onMouseEnter: function() {
                    var e = m.current.offsetTop;
                    f(e + 24),
                    s(t)
                },
                onMouseLeave: function() {
                    s(null)
                },
                ref: m,
                "data-v-3712d222": ""
            }, v.a.createElement("span", {
                className: "tag-text",
                "data-v-3712d222": ""
            }, a, l === t ? v.a.createElement("i", {
                className: "iconfont icon-more",
                "data-v-3712d222": ""
            }, "") : v.a.createElement("i", {
                className: "iconfont icon-more",
                "data-v-3712d222": ""
            }, "")), l === t ? v.a.createElement("div", {
                className: "senior-selector-filters-wrap",
                style: {
                    top: "".concat(p, "px")
                },
                "data-v-3712d222": ""
            }, v.a.createElement("div", {
                className: "senior-selector-filters-content",
                "data-v-3712d222": ""
            }, c ? v.a.createElement(y.a, {
                checks: r,
                onChangeGrop: function(e) {
                    d(e)
                },
                "data-v-3712d222": ""
            }) : v.a.createElement(v.a.Fragment, null, r && r.map(function(e, t) {
                return v.a.createElement("a", {
                    key: "selectorRow-".concat(e.label, "-").concat(t),
                    className: "senior-selector-filters-single",
                    onClick: function() {
                        return n(e, a)
                    },
                    href: "javascript:;",
                    "data-v-3712d222": ""
                }, e.label)
            }))), c ? v.a.createElement("div", {
                className: "senior-selector-multiple-btn",
                "data-v-3712d222": ""
            }, v.a.createElement("button", {
                className: b()({
                    active: u.length
                }),
                onClick: function() {
                    u.length && (o(u.map(function(e) {
                        return {
                            label: e.children,
                            value: e.value
                        }
                    }), a),
                    i(!1))
                },
                "data-v-3712d222": ""
            }, "确定"), v.a.createElement("button", {
                onClick: function() {
                    return i(!1)
                },
                "data-v-3712d222": ""
            }, "取消")) : null, c ? null : v.a.createElement("span", {
                className: "selector-multiple-tab",
                onClick: function() {
                    return i(!0)
                },
                "data-v-3712d222": ""
            }, v.a.createElement("span", {
                "data-v-3712d222": ""
            }, "多选"), v.a.createElement("i", {
                className: "iconfont",
                "data-v-3712d222": ""
            }, ""))) : null)
        }
        var h = a(0)
          , v = a.n(h)
          , r = a(1)
          , g = a.n(r)
          , y = (a(312),
        a(111))
          , r = a(2)
          , b = a.n(r);
        a(313),
        t.a = function(e) {
            var t = e.list
              , t = void 0 === t ? [] : t
              , a = e.singleSelect
              , r = e.multipleSelect;
            return v.a.createElement("div", {
                className: "selector-row-wrap-new clearfix",
                "data-v-010f7c03": ""
            }, v.a.createElement("div", {
                className: b()("selector-title"),
                "data-v-010f7c03": ""
            }, "高级选项："), v.a.createElement("div", {
                className: "senior-selector-wrap",
                "data-v-010f7c03": ""
            }, v.a.createElement("ul", {
                className: "senior-selector-tags-wrap clearfix",
                "data-v-010f7c03": ""
            }, t ? t.map(function(e, t) {
                return v.a.createElement(n, {
                    key: "senior-selector-".concat(t),
                    title: e.title,
                    selectorList: e.list,
                    data: e,
                    index: t,
                    singleSelect: a,
                    multipleSelect: r,
                    "data-v-010f7c03": ""
                })
            }) : null)))
        }
    },
    19: function(e, t) {
        e.exports = _babelPolyfill
    },
    221: function(e, t, a) {
        e.exports = [{
            path: "/list/c-:id.html",
            exact: !0,
            Component: function() {
                return a(304).default
            },
            controller: "page",
            handler: "index",
            entry: "catalogNew"
        }, {
            path: "/search.html",
            exact: !0,
            Component: function() {
                return a(381).default
            },
            controller: "page",
            handler: "index",
            entry: "catalogNew"
        }, {
            path: "/list/b-:bid.html",
            exact: !0,
            Component: function() {
                return a(382).default
            },
            controller: "page",
            handler: "index",
            entry: "catalogNew"
        }, {
            path: "/specificSearch-:searchSceneNo.html",
            exact: !0,
            Component: function() {
                return a(383).default
            },
            controller: "page",
            handler: "index",
            entry: "catalogNew"
        }, {
            path: "/list/catalogList-:id.html",
            exact: !0,
            Component: function() {
                return a(328).default
            },
            controller: "page",
            handler: "index",
            entry: "catalogNew"
        }, {
            path: "/list/agreementProduct.html",
            exact: !0,
            Component: function() {
                return a(384).default
            },
            controller: "page",
            handler: "index",
            entry: "agreementNew"
        }, {
            path: "/list/purchasedProduct.html",
            exact: !0,
            Component: function() {
                return a(333).default
            },
            controller: "page",
            handler: "index",
            entry: "purchasedNew"
        }]
    },
    242: function(e, t, a) {},
    243: function(e, t, a) {},
    244: function(e, t, a) {},
    245: function(e, t, a) {},
    246: function(e, t, a) {},
    247: function(e, t, a) {},
    248: function(e, t, a) {},
    304: function(c, e, t) {
        "use strict";
        t.r(e);
        var a, r = t(13), n = t.n(r), r = t(6), I = t.n(r), r = t(1), T = t.n(r), P = (t(19),
        t(0)), C = t.n(P), r = t(7), F = t(40), M = t(30), D = t(28), q = t(29), R = t(27), B = t(38), H = t(17), W = t(117), G = t(96), A = t(118), U = t(97), Q = t(133), z = t(108), K = t(71), V = t(72), Y = t(123), J = t(62), Z = t(98), X = t(106), $ = t(3), ee = t(43), te = t(77), oe = t(104), ae = t(11), re = t(26), ne = t(10);
        function j() {
            j = function() {
                return c
            }
            ;
            var l, c = {}, e = Object.prototype, s = e.hasOwnProperty, u = Object.defineProperty || function(e, t, a) {
                e[t] = a.value
            }
            , t = "function" == typeof Symbol ? Symbol : {}, r = t.iterator || "@@iterator", a = t.asyncIterator || "@@asyncIterator", n = t.toStringTag || "@@toStringTag";
            function o(e, t, a) {
                return Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                o({}, "")
            } catch (l) {
                o = function(e, t, a) {
                    return e[t] = a
                }
            }
            function i(e, t, a, r) {
                var n, o, c, i, t = t && t.prototype instanceof v ? t : v, t = Object.create(t.prototype), r = new O(r || []);
                return u(t, "_invoke", {
                    value: (n = e,
                    o = a,
                    c = r,
                    i = p,
                    function(e, t) {
                        if (i === f)
                            throw new Error("Generator is already running");
                        if (i === m) {
                            if ("throw" === e)
                                throw t;
                            return {
                                value: l,
                                done: !0
                            }
                        }
                        for (c.method = e,
                        c.arg = t; ; ) {
                            var a = c.delegate;
                            if (a) {
                                a = function e(t, a) {
                                    var r = a.method
                                      , n = t.iterator[r];
                                    if (n === l)
                                        return a.delegate = null,
                                        "throw" === r && t.iterator.return && (a.method = "return",
                                        a.arg = l,
                                        e(t, a),
                                        "throw" === a.method) || "return" !== r && (a.method = "throw",
                                        a.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                                        h;
                                    r = d(n, t.iterator, a.arg);
                                    if ("throw" === r.type)
                                        return a.method = "throw",
                                        a.arg = r.arg,
                                        a.delegate = null,
                                        h;
                                    n = r.arg;
                                    return n ? n.done ? (a[t.resultName] = n.value,
                                    a.next = t.nextLoc,
                                    "return" !== a.method && (a.method = "next",
                                    a.arg = l),
                                    a.delegate = null,
                                    h) : n : (a.method = "throw",
                                    a.arg = new TypeError("iterator result is not an object"),
                                    a.delegate = null,
                                    h)
                                }(a, c);
                                if (a) {
                                    if (a === h)
                                        continue;
                                    return a
                                }
                            }
                            if ("next" === c.method)
                                c.sent = c._sent = c.arg;
                            else if ("throw" === c.method) {
                                if (i === p)
                                    throw i = m,
                                    c.arg;
                                c.dispatchException(c.arg)
                            } else
                                "return" === c.method && c.abrupt("return", c.arg);
                            i = f;
                            a = d(n, o, c);
                            if ("normal" === a.type) {
                                if (i = c.done ? m : "suspendedYield",
                                a.arg === h)
                                    continue;
                                return {
                                    value: a.arg,
                                    done: c.done
                                }
                            }
                            "throw" === a.type && (i = m,
                            c.method = "throw",
                            c.arg = a.arg)
                        }
                    }
                    )
                }),
                t
            }
            function d(e, t, a) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, a)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            c.wrap = i;
            var p = "suspendedStart"
              , f = "executing"
              , m = "completed"
              , h = {};
            function v() {}
            function g() {}
            function y() {}
            var t = {}
              , b = (o(t, r, function() {
                return this
            }),
            Object.getPrototypeOf)
              , b = b && b(b(N([])))
              , w = (b && b !== e && s.call(b, r) && (t = b),
            y.prototype = v.prototype = Object.create(t));
            function E(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    o(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function k(c, i) {
                var t;
                u(this, "_invoke", {
                    value: function(a, r) {
                        function e() {
                            return new i(function(e, t) {
                                !function t(e, a, r, n) {
                                    var o, e = d(c[e], c, a);
                                    if ("throw" !== e.type)
                                        return (a = (o = e.arg).value) && "object" == I()(a) && s.call(a, "__await") ? i.resolve(a.__await).then(function(e) {
                                            t("next", e, r, n)
                                        }, function(e) {
                                            t("throw", e, r, n)
                                        }) : i.resolve(a).then(function(e) {
                                            o.value = e,
                                            r(o)
                                        }, function(e) {
                                            return t("throw", e, r, n)
                                        });
                                    n(e.arg)
                                }(a, r, e, t)
                            }
                            )
                        }
                        return t = t ? t.then(e, e) : e()
                    }
                })
            }
            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function _(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function O(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(S, this),
                this.reset(!0)
            }
            function N(t) {
                if (t || "" === t) {
                    var a, e = t[r];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length))
                        return a = -1,
                        (e = function e() {
                            for (; ++a < t.length; )
                                if (s.call(t, a))
                                    return e.value = t[a],
                                    e.done = !1,
                                    e;
                            return e.value = l,
                            e.done = !0,
                            e
                        }
                        ).next = e
                }
                throw new TypeError(I()(t) + " is not iterable")
            }
            return u(w, "constructor", {
                value: g.prototype = y,
                configurable: !0
            }),
            u(y, "constructor", {
                value: g,
                configurable: !0
            }),
            g.displayName = o(y, n, "GeneratorFunction"),
            c.isGeneratorFunction = function(e) {
                e = "function" == typeof e && e.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            c.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                o(e, n, "GeneratorFunction")),
                e.prototype = Object.create(w),
                e
            }
            ,
            c.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            E(k.prototype),
            o(k.prototype, a, function() {
                return this
            }),
            c.AsyncIterator = k,
            c.async = function(e, t, a, r, n) {
                void 0 === n && (n = Promise);
                var o = new k(i(e, t, a, r),n);
                return c.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }
            ,
            E(w),
            o(w, n, "Generator"),
            o(w, r, function() {
                return this
            }),
            o(w, "toString", function() {
                return "[object Generator]"
            }),
            c.keys = function(e) {
                var t, a = Object(e), r = [];
                for (t in a)
                    r.push(t);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var t = r.pop();
                        if (t in a)
                            return e.value = t,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            c.values = N,
            O.prototype = {
                constructor: O,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = l,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = l,
                    this.tryEntries.forEach(_),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = l)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(a) {
                    if (this.done)
                        throw a;
                    var r = this;
                    function e(e, t) {
                        return o.type = "throw",
                        o.arg = a,
                        r.next = e,
                        t && (r.method = "next",
                        r.arg = l),
                        !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t]
                          , o = n.completion;
                        if ("root" === n.tryLoc)
                            return e("end");
                        if (n.tryLoc <= this.prev) {
                            var c = s.call(n, "catchLoc")
                              , i = s.call(n, "finallyLoc");
                            if (c && i) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            } else if (c) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0)
                            } else {
                                if (!i)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                        var r = this.tryEntries[a];
                        if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var n = r;
                            break
                        }
                    }
                    var o = (n = n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc ? null : n) ? n.completion : {};
                    return o.type = e,
                    o.arg = t,
                    n ? (this.method = "next",
                    this.next = n.finallyLoc,
                    h) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    h
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a = this.tryEntries[t];
                        if (a.finallyLoc === e)
                            return this.complete(a.completion, a.afterLoc),
                            _(a),
                            h
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a, r, n = this.tryEntries[t];
                        if (n.tryLoc === e)
                            return "throw" === (a = n.completion).type && (r = a.arg,
                            _(n)),
                            r
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, a) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: t,
                        nextLoc: a
                    },
                    "next" === this.method && (this.arg = l),
                    h
                }
            },
            c
        }
        function o(o) {
            function e(e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                Object(ae.I)({
                    search_type: "目录列表",
                    page: u + 1,
                    rank_type: re.e[m],
                    is_price_order_asc: 2 === m,
                    is_selection: h && h.showIndustryFeatured,
                    is_inventory_sufficient: h && h.inStock,
                    display_type: ["list", "sideList"].includes(i) ? "列表" : "大图",
                    search_result_rank_out: t + 1,
                    directory: e.level4CatalogueName,
                    brand_name_list: [e.proBrandName],
                    search_result_rank_inner: a + 1,
                    product_code: e.proSkuNo,
                    product_exhibition_type: re.d[e.priceType] || "",
                    product_exhibition_value: e.sellingPrice,
                    product_preferential_key: e.tagList && (null == (t = e.tagList[0]) ? void 0 : t.tagText) || "",
                    consignment_date: e.skuStock && e.skuStock.skuDeliveryDateText || ""
                }, {
                    rangeFilter: v
                })
            }
            function t(e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0
                  , r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1;
                Object(ae.N)({
                    recommend_module: "方案未定义",
                    operation_type: "方案未定义",
                    recommend_id: "方案未定义",
                    recommend_rank: t + 1,
                    search_type: "目录列表",
                    search_result_match_type: o.searchTypeText,
                    key_word_result_num: c,
                    screen_view_num: r || 1,
                    page: u + 1,
                    rank_type: re.e[m],
                    is_price_order_asc: 2 === m,
                    is_inventory_sufficient: h && h.inStock,
                    display_type: ["list", "sideList"].includes(i) ? "列表" : "大图",
                    search_result_rank_out: 20 * (r - 1) + (t + 1),
                    directory: e.level4CatalogueName || "",
                    brand_name_list: [e.proBrandName],
                    search_result_rank_inner: a + 1,
                    product_code: e.proSkuNo,
                    product_exhibition_type: re.d[e.priceType] || "",
                    product_exhibition_value: e.sellingPrice,
                    product_preferential_key: e.tagList && (null == (r = e.tagList[0]) ? void 0 : r.tagText) || "",
                    consignment_date: e.skuStock && e.skuStock.skuDeliveryDateText || "未获取到数据",
                    match_type: e.matchType
                }, {
                    rangeFilter: v
                })
            }
            var a = o.dispatch
              , r = o.injectConst
              , n = o.breadcrumbs
              , c = o.total
              , i = o.viewType
              , l = o.isLoading
              , s = o.isLogin
              , u = o.from
              , d = o.noData
              , p = o.content
              , f = o.citycode
              , m = o.sort
              , h = (o.listInfo,
            o.extraFilter)
              , v = o.rangeFilter
              , g = o.urlWithQuery
              , y = o.catalogId
              , b = o.url
              , w = r.wwwOrigin
              , E = r.query
              , E = void 0 === E ? {} : E
              , b = Object(P.useState)(b)
              , b = T()(b, 2)
              , k = b[0]
              , S = b[1]
              , b = Object(P.useState)("")
              , b = T()(b, 2)
              , _ = b[0]
              , b = b[1]
              , O = Object(P.useState)(!1)
              , O = T()(O, 2)
              , N = O[0]
              , j = O[1]
              , O = Object(P.useState)(!1)
              , O = T()(O, 2)
              , x = O[0]
              , L = O[1];
            Object(ee.a)(r, o.user),
            Object(P.useEffect)(function() {
                S(g),
                j(!0)
            }, []),
            Object(P.useEffect)(function() {
                o.ifHidePrice && a({
                    type: "catalog/getSellingPrice",
                    payload: {}
                }),
                a({
                    type: "catalog/getDeliverTime",
                    payload: {}
                }),
                document.addEventListener("DOMContentLoaded", function() {
                    L(!0)
                }),
                o.ifHideSpu && a({
                    type: "catalog/getSpuThumbInfo"
                })
            }, []);
            return C.a.createElement("div", {
                className: "catalog-wrap",
                "data-v-6476b070": ""
            }, C.a.createElement(D.a, {
                "data-v-6476b070": ""
            }), C.a.createElement(M.a, {
                catalogs: o.catalogs,
                user: o.user,
                navs: o.navs,
                injectConst: r,
                origin: r.origin,
                query: E,
                channel: "catalog",
                type: "2",
                "data-v-6476b070": ""
            }), C.a.createElement(F.a, {
                commonKeyword: _,
                setCurKeyword: b,
                "data-v-6476b070": ""
            }), C.a.createElement(q.a, {
                "data-v-6476b070": ""
            }), C.a.createElement("div", {
                className: "list-inner",
                "data-v-6476b070": ""
            }, C.a.createElement(H.a, {
                isShow: l,
                "data-v-6476b070": ""
            }, C.a.createElement("div", {
                className: "loading-wrap",
                "data-v-6476b070": ""
            }, C.a.createElement("div", {
                className: "loading-box",
                "data-v-6476b070": ""
            }))), C.a.createElement(W.a, {
                breadcrumbs: n,
                prePath: {
                    path: w,
                    name: "首页"
                },
                getUrl: ne.n,
                isSeo: !0,
                "data-v-6476b070": ""
            }), C.a.createElement(G.a, {
                headerSelect: o.headerSelect,
                deleteSelectCallBack: function(e, t) {
                    Object(te.a)(e, t),
                    Object(ae.q)({
                        search_type: "目录列表",
                        key_word: "",
                        key_word_type: "",
                        fliter_operation_type: "减少",
                        fliter_title: t.title,
                        fliter_content: t ? [t.value] : []
                    }, {
                        catalogs: n,
                        rangeFilter: v
                    })
                },
                "data-v-6476b070": ""
            }), C.a.createElement(A.a, {
                selectCallBack: function(e, t, a) {
                    Object(te.b)(e, t, a),
                    Object(ae.q)({
                        search_type: "目录列表",
                        key_word: "",
                        key_word_type: "",
                        fliter_operation_type: "增加",
                        fliter_title: t.title,
                        fliter_content: t ? [t.label] : []
                    }, {
                        catalogs: n,
                        rangeFilter: v
                    })
                },
                getUrl: function(e) {
                    var t = e.proCatalogId
                      , a = e.listShowStyle
                      , e = e.query
                      , r = ""
                      , n = (!["sideList", "sidePic"].includes(i) && o.headerSelect && o.headerSelect.length && (n = o.headerSelect.find(function(e) {
                        return "品牌" === e.title
                    })) && n.id && (n = "object" === I()(n.id) ? n.id.join("||") : n.id,
                    r += "&brandIds=".concat(n)),
                    Object(ne.n)({
                        proCatalogId: t,
                        listShowStyle: a,
                        query: e
                    }));
                    return "".concat(n).concat(r)
                },
                isSeo: !0,
                "data-v-6476b070": ""
            }), C.a.createElement(Q.a, {
                isLogin: s,
                adType: 2,
                keyWord: y,
                "data-v-6476b070": ""
            }), C.a.createElement(J.a, {
                "data-v-6476b070": ""
            }), C.a.createElement(U.a, {
                hideTitle: o.ifShowNewListModel,
                skuTotalHits: o.skuTotalHits,
                viewType: o.viewType,
                sort: m,
                extraFilter: h,
                rangeFilter: v,
                handleFilterChange: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(ae.Q)({
                        rank_scenario: "分类页",
                        search_type: "垂直搜索",
                        key_word: "",
                        key_word_type: ""
                    }, e)
                },
                isLogin: s,
                cartList: o.cartList,
                "data-v-6476b070": ""
            }), C.a.createElement(H.a, {
                isShow: !d,
                "data-v-6476b070": ""
            }, "pic" === i || "sidePic" === i ? C.a.createElement(C.a.Fragment, null, C.a.createElement("div", {
                className: "goods-wrap",
                "data-v-6476b070": ""
            }, "sidePic" === i ? C.a.createElement(z.a, {
                "data-v-6476b070": ""
            }) : null, C.a.createElement(K.a, {
                isLogin: s,
                from: u,
                cityCode: f.cityCode,
                content: p,
                ifHidePrice: o.ifHidePrice,
                priceInfoMap: o.priceInfoMap,
                stockInfoMap: o.stockInfoMap,
                spuThumbInfo: o.spuThumbInfo,
                isPriceReady: !0,
                viewType: i,
                onClick: e,
                onShow: t,
                "data-v-6476b070": ""
            }))) : C.a.createElement(C.a.Fragment, null, C.a.createElement("div", {
                className: "list-item-wrap clearfix",
                "data-v-6476b070": ""
            }, "sideList" === i ? C.a.createElement(z.a, {
                "data-v-6476b070": ""
            }) : null, o.ifShowNewListModel ? C.a.createElement(Y.a, {
                isLogin: s,
                content: p,
                ifHidePrice: o.ifHidePrice,
                isPriceReady: !0,
                priceInfoMap: o.priceInfoMap,
                stockInfoMap: o.stockInfoMap,
                viewType: i,
                cartList: o.cartList,
                onClick: e,
                onShow: t,
                "data-v-6476b070": ""
            }) : C.a.createElement(V.a, {
                isLogin: s,
                content: p,
                ifHidePrice: o.ifHidePrice,
                priceInfoMap: o.priceInfoMap,
                stockInfoMap: o.stockInfoMap,
                isPriceReady: !0,
                viewType: i,
                cartList: o.cartList,
                onClick: e,
                onShow: t,
                "data-v-6476b070": ""
            }))), x ? C.a.createElement(oe.a, {
                viewType: i,
                from: u,
                section: o.section,
                ifShowNewListModel: o.ifShowNewListModel,
                cartList: o.cartList,
                hasNextSection: o.hasNextSection,
                listQueryParams: o.listQueryParams,
                onClick: e,
                onShow: t,
                "data-v-6476b070": ""
            }) : null), C.a.createElement("div", {
                style: {
                    height: "20px"
                },
                "data-v-6476b070": ""
            }), C.a.createElement(H.a, {
                isShow: 60 < c,
                "data-v-6476b070": ""
            }, C.a.createElement("div", {
                className: "pagination-wrap",
                "data-v-6476b070": ""
            }, C.a.createElement(B.a, {
                pageSize: "60",
                current: u + 1,
                total: c,
                onChange: function(e, t) {
                    a({
                        type: "catalog/getListInfo",
                        payload: {
                            from: t - 1
                        }
                    }),
                    Object($.pb)("staticFilter")
                },
                urlPrefix: k,
                isClientSide: N,
                "data-v-6476b070": ""
            }))), C.a.createElement(H.a, {
                isShow: d,
                "data-v-6476b070": ""
            }, o.listInfo && 1 == o.listInfo.codeForBlank ? C.a.createElement(Z.a, {
                text: o.listInfo.msgForBlank,
                "data-v-6476b070": ""
            }) : C.a.createElement(Z.a, {
                "data-v-6476b070": ""
            }))), x ? C.a.createElement(X.a, {
                listInfo: o.listInfo,
                "data-v-6476b070": ""
            }) : null, C.a.createElement(R.a, {
                "data-v-6476b070": ""
            }))
        }
        t(318),
        t(51),
        o.getInitialProps = function(e) {
            return (a = a || n()(j().mark(function e(t) {
                return j().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.all([t.store.dispatch({
                                type: "common/updateTodo",
                                payload: {
                                    injectConst: t.app.config.injectConst
                                }
                            }), t.store.dispatch({
                                type: "common/getBaseData",
                                payload: {
                                    ctx: t,
                                    classIds: "3"
                                }
                            }), t.store.dispatch({
                                type: "common/getUserCityData",
                                payload: {
                                    ctx: t
                                }
                            })]);
                        case 2:
                            return e.next = 4,
                            Promise.all([t.store.dispatch({
                                type: "catalog/getPageData",
                                payload: {
                                    ctx: t
                                }
                            }), t.store.dispatch({
                                type: "catalog/setUrlWithQuery",
                                payload: {
                                    ctx: t
                                }
                            })]);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        ,
        e.default = Object(r.connect)(function(e) {
            return {
                navs: e.common.navs,
                catalogs: e.common.catalogs,
                injectConst: e.common.injectConst,
                citycode: e.common.citycode,
                listInfo: e.catalog.listInfo,
                breadcrumbs: e.catalog.breadcrumbs,
                catalogId: e.catalog.catalogId,
                brandId: e.catalog.brandId,
                total: e.catalog.total,
                viewType: e.catalog.viewType,
                isLoading: e.catalog.isLoading,
                isLogin: e.common.injectConst.isLogin,
                noData: e.catalog.noData,
                content: e.catalog.content,
                ifShowNewListModel: e.catalog.ifShowNewListModel,
                priceInfoMap: e.catalog.priceInfoMap,
                stockInfoMap: e.catalog.stockInfoMap,
                ifHidePrice: e.catalog.ifHidePrice,
                from: e.catalog.from,
                skuTotalHits: e.catalog.skuTotalHits,
                headerSelect: e.catalog.headerSelect,
                sort: e.catalog.sort,
                ifHideSpu: e.catalog.ifHideSpu,
                spuThumbInfo: e.catalog.spuThumbInfo,
                extraFilter: e.catalog.extraFilter,
                rangeFilter: e.catalog.rangeFilter,
                urlWithQuery: e.catalog.urlWithQuery,
                url: e.catalog.url,
                user: e.common.user,
                cartList: e.catalog.cartList,
                section: e.catalog.section,
                hasNextSection: e.catalog.hasNextSection,
                listQueryParams: e.catalog.listQueryParams,
                searchTypeText: e.catalog.searchTypeText
            }
        })(o)
    },
    305: function(e, t, a) {},
    306: function(e, t, a) {},
    307: function(e, t, a) {},
    308: function(e, t, a) {},
    309: function(e, t, a) {},
    310: function(e, t, a) {},
    311: function(e, t, a) {},
    312: function(e, t, a) {},
    313: function(e, t, a) {},
    314: function(e, t, a) {},
    315: function(e, t, a) {},
    316: function(e, t, a) {},
    317: function(e, t, a) {},
    318: function(e, t, a) {},
    319: function(e, t, a) {},
    320: function(e, t, a) {},
    321: function(e, t, a) {},
    322: function(e, t, a) {},
    323: function(e, t, a) {},
    324: function(e, t, a) {},
    325: function(e, t, a) {},
    326: function(e, t, a) {},
    327: function(e, t, a) {},
    328: function(e, t, a) {
        "use strict";
        a.r(t);
        var r, n = a(6), j = a.n(n), n = a(13), o = a.n(n), n = a(5), v = a.n(n), n = a(1), g = a.n(n), y = (a(19),
        a(0)), b = a.n(y), n = a(7), c = a(2), w = a.n(c), E = a(40), k = a(30), S = a(28), _ = a(147), O = a(29), N = a(27), x = a(3), L = a(43), I = a(37), T = a(4), P = a(11);
        function C() {
            C = function() {
                return c
            }
            ;
            var l, c = {}, e = Object.prototype, s = e.hasOwnProperty, u = Object.defineProperty || function(e, t, a) {
                e[t] = a.value
            }
            , t = "function" == typeof Symbol ? Symbol : {}, r = t.iterator || "@@iterator", a = t.asyncIterator || "@@asyncIterator", n = t.toStringTag || "@@toStringTag";
            function o(e, t, a) {
                return Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                o({}, "")
            } catch (l) {
                o = function(e, t, a) {
                    return e[t] = a
                }
            }
            function i(e, t, a, r) {
                var n, o, c, i, t = t && t.prototype instanceof v ? t : v, t = Object.create(t.prototype), r = new O(r || []);
                return u(t, "_invoke", {
                    value: (n = e,
                    o = a,
                    c = r,
                    i = p,
                    function(e, t) {
                        if (i === f)
                            throw new Error("Generator is already running");
                        if (i === m) {
                            if ("throw" === e)
                                throw t;
                            return {
                                value: l,
                                done: !0
                            }
                        }
                        for (c.method = e,
                        c.arg = t; ; ) {
                            var a = c.delegate;
                            if (a) {
                                a = function e(t, a) {
                                    var r = a.method
                                      , n = t.iterator[r];
                                    if (n === l)
                                        return a.delegate = null,
                                        "throw" === r && t.iterator.return && (a.method = "return",
                                        a.arg = l,
                                        e(t, a),
                                        "throw" === a.method) || "return" !== r && (a.method = "throw",
                                        a.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                                        h;
                                    r = d(n, t.iterator, a.arg);
                                    if ("throw" === r.type)
                                        return a.method = "throw",
                                        a.arg = r.arg,
                                        a.delegate = null,
                                        h;
                                    n = r.arg;
                                    return n ? n.done ? (a[t.resultName] = n.value,
                                    a.next = t.nextLoc,
                                    "return" !== a.method && (a.method = "next",
                                    a.arg = l),
                                    a.delegate = null,
                                    h) : n : (a.method = "throw",
                                    a.arg = new TypeError("iterator result is not an object"),
                                    a.delegate = null,
                                    h)
                                }(a, c);
                                if (a) {
                                    if (a === h)
                                        continue;
                                    return a
                                }
                            }
                            if ("next" === c.method)
                                c.sent = c._sent = c.arg;
                            else if ("throw" === c.method) {
                                if (i === p)
                                    throw i = m,
                                    c.arg;
                                c.dispatchException(c.arg)
                            } else
                                "return" === c.method && c.abrupt("return", c.arg);
                            i = f;
                            a = d(n, o, c);
                            if ("normal" === a.type) {
                                if (i = c.done ? m : "suspendedYield",
                                a.arg === h)
                                    continue;
                                return {
                                    value: a.arg,
                                    done: c.done
                                }
                            }
                            "throw" === a.type && (i = m,
                            c.method = "throw",
                            c.arg = a.arg)
                        }
                    }
                    )
                }),
                t
            }
            function d(e, t, a) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, a)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            c.wrap = i;
            var p = "suspendedStart"
              , f = "executing"
              , m = "completed"
              , h = {};
            function v() {}
            function g() {}
            function y() {}
            var t = {}
              , b = (o(t, r, function() {
                return this
            }),
            Object.getPrototypeOf)
              , b = b && b(b(N([])))
              , w = (b && b !== e && s.call(b, r) && (t = b),
            y.prototype = v.prototype = Object.create(t));
            function E(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    o(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function k(c, i) {
                var t;
                u(this, "_invoke", {
                    value: function(a, r) {
                        function e() {
                            return new i(function(e, t) {
                                !function t(e, a, r, n) {
                                    var o, e = d(c[e], c, a);
                                    if ("throw" !== e.type)
                                        return (a = (o = e.arg).value) && "object" == j()(a) && s.call(a, "__await") ? i.resolve(a.__await).then(function(e) {
                                            t("next", e, r, n)
                                        }, function(e) {
                                            t("throw", e, r, n)
                                        }) : i.resolve(a).then(function(e) {
                                            o.value = e,
                                            r(o)
                                        }, function(e) {
                                            return t("throw", e, r, n)
                                        });
                                    n(e.arg)
                                }(a, r, e, t)
                            }
                            )
                        }
                        return t = t ? t.then(e, e) : e()
                    }
                })
            }
            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function _(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function O(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(S, this),
                this.reset(!0)
            }
            function N(t) {
                if (t || "" === t) {
                    var a, e = t[r];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length))
                        return a = -1,
                        (e = function e() {
                            for (; ++a < t.length; )
                                if (s.call(t, a))
                                    return e.value = t[a],
                                    e.done = !1,
                                    e;
                            return e.value = l,
                            e.done = !0,
                            e
                        }
                        ).next = e
                }
                throw new TypeError(j()(t) + " is not iterable")
            }
            return u(w, "constructor", {
                value: g.prototype = y,
                configurable: !0
            }),
            u(y, "constructor", {
                value: g,
                configurable: !0
            }),
            g.displayName = o(y, n, "GeneratorFunction"),
            c.isGeneratorFunction = function(e) {
                e = "function" == typeof e && e.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            c.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                o(e, n, "GeneratorFunction")),
                e.prototype = Object.create(w),
                e
            }
            ,
            c.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            E(k.prototype),
            o(k.prototype, a, function() {
                return this
            }),
            c.AsyncIterator = k,
            c.async = function(e, t, a, r, n) {
                void 0 === n && (n = Promise);
                var o = new k(i(e, t, a, r),n);
                return c.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }
            ,
            E(w),
            o(w, n, "Generator"),
            o(w, r, function() {
                return this
            }),
            o(w, "toString", function() {
                return "[object Generator]"
            }),
            c.keys = function(e) {
                var t, a = Object(e), r = [];
                for (t in a)
                    r.push(t);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var t = r.pop();
                        if (t in a)
                            return e.value = t,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            c.values = N,
            O.prototype = {
                constructor: O,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = l,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = l,
                    this.tryEntries.forEach(_),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = l)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(a) {
                    if (this.done)
                        throw a;
                    var r = this;
                    function e(e, t) {
                        return o.type = "throw",
                        o.arg = a,
                        r.next = e,
                        t && (r.method = "next",
                        r.arg = l),
                        !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t]
                          , o = n.completion;
                        if ("root" === n.tryLoc)
                            return e("end");
                        if (n.tryLoc <= this.prev) {
                            var c = s.call(n, "catchLoc")
                              , i = s.call(n, "finallyLoc");
                            if (c && i) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            } else if (c) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0)
                            } else {
                                if (!i)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                        var r = this.tryEntries[a];
                        if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var n = r;
                            break
                        }
                    }
                    var o = (n = n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc ? null : n) ? n.completion : {};
                    return o.type = e,
                    o.arg = t,
                    n ? (this.method = "next",
                    this.next = n.finallyLoc,
                    h) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    h
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a = this.tryEntries[t];
                        if (a.finallyLoc === e)
                            return this.complete(a.completion, a.afterLoc),
                            _(a),
                            h
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a, r, n = this.tryEntries[t];
                        if (n.tryLoc === e)
                            return "throw" === (a = n.completion).type && (r = a.arg,
                            _(n)),
                            r
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, a) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: t,
                        nextLoc: a
                    },
                    "next" === this.method && (this.arg = l),
                    h
                }
            },
            c
        }
        function i(e) {
            function c(e) {
                var t = e.id
                  , a = e.levels
                  , r = e.catalogName
                  , e = e.type;
                t && (u(parseInt(t)),
                Object(x.pb)("catalog-floor-".concat(t))),
                "click" === e && (t = {
                    directory_level: a,
                    directory: r
                },
                Object(P.B)(t))
            }
            function t(o) {
                Object(I.o)(o).then(function(e) {
                    return "0000" === e.code ? (p(e.result),
                    c({
                        id: o
                    }),
                    m((r = e.result,
                    n = 0,
                    r && r.children && r.children.map(function(e) {
                        e = 2 * e.catalogName.length - (e.catalogName.match(/\//g) || []).length;
                        n = n < e ? e : n
                    }),
                    (240 - 7 * n) / 2)),
                    r = e.result,
                    t = "",
                    (a = parseInt(l)) === r.proCatalogId ? t = r.catalogName : r.children.map(function(e) {
                        a === e.proCatalogId && (t = e.catalogName)
                    }),
                    r = {
                        is_source_product_category: !(!i.query || "navBox" !== i.query.source),
                        directory_level: a === r.proCatalogId ? "1" : "2",
                        directory: t
                    },
                    Object(P.C)(r)) : T.a.toast({
                        container: e.message
                    }),
                    !0;
                    var t, a, r, n
                }).catch(function(e) {
                    T.a.toast({
                        container: e || ""
                    })
                })
            }
            var i = e.injectConst
              , l = e.catalogId
              , a = Object(y.useState)("")
              , a = g()(a, 2)
              , r = a[0]
              , a = a[1]
              , n = i.query
              , n = void 0 === n ? {} : n
              , o = Object(y.useState)(parseInt(l) || 0)
              , o = g()(o, 2)
              , s = o[0]
              , u = o[1]
              , o = Object(y.useState)({})
              , o = g()(o, 2)
              , d = o[0]
              , p = o[1]
              , o = Object(y.useState)(0)
              , o = g()(o, 2)
              , f = o[0]
              , m = o[1]
              , h = "https://static.zkh360.com/image/2022-05-06/moren-1651825575540.png";
            return Object(y.useEffect)(function() {
                t(l)
            }, []),
            Object(L.a)(i, e.user),
            b.a.createElement("div", {
                className: "catalog-list-wrap",
                "data-v-d89857ed": ""
            }, b.a.createElement(S.a, {
                "data-v-d89857ed": ""
            }), b.a.createElement(k.a, {
                catalogs: e.catalogs,
                navs: e.navs,
                injectConst: i,
                origin: i.origin,
                query: n,
                channel: "catalog",
                type: "2",
                "data-v-d89857ed": ""
            }), b.a.createElement(E.a, {
                commonKeyword: r,
                setCurKeyword: a,
                "data-v-d89857ed": ""
            }), b.a.createElement(O.a, {
                "data-v-d89857ed": ""
            }), b.a.createElement("div", {
                className: "catalog-list-box",
                "data-v-d89857ed": ""
            }, b.a.createElement("span", {
                className: "catalog-list-left",
                style: {
                    height: (d.children && d.children.length ? 36 * d.children.length + 44 : 44) + "px"
                },
                "data-v-d89857ed": ""
            }, b.a.createElement("div", {
                className: "head-catalog-1",
                "data-v-d89857ed": ""
            }, b.a.createElement("h1", {
                "data-v-d89857ed": ""
            }, b.a.createElement("span", {
                className: "catalog-1-name",
                "data-v-d89857ed": ""
            }, d.catalogName))), b.a.createElement("ul", {
                className: "list-catalog-2",
                "data-v-d89857ed": ""
            }, d.children && d.children.map(function(e) {
                return b.a.createElement("li", {
                    className: w()({
                        selected: e.proCatalogId === s
                    }),
                    onClick: function() {
                        return c({
                            id: e.proCatalogId,
                            levels: e.levels,
                            catalogName: e.catalogName,
                            type: "click"
                        })
                    },
                    key: e.proCatalogId,
                    style: {
                        paddingLeft: f + "px"
                    },
                    "data-v-d89857ed": ""
                }, e.catalogName, b.a.createElement("i", {
                    className: "iconfont youjiantou",
                    "data-v-d89857ed": ""
                }, ""))
            }))), b.a.createElement("span", {
                className: "catalog-list-right",
                "data-v-d89857ed": ""
            }, d.children && d.children.map(function(e) {
                var t;
                return b.a.createElement("div", {
                    key: e.proCatalogId,
                    "data-v-d89857ed": ""
                }, b.a.createElement("div", {
                    id: "catalog-floor-".concat(e.proCatalogId),
                    className: w()((t = {},
                    v()(t, "right-head-".concat(e.proCatalogId), !0),
                    v()(t, "catalog-list-right-head", !0),
                    t)),
                    "data-v-d89857ed": ""
                }, b.a.createElement("i", {
                    className: "square",
                    "data-v-d89857ed": ""
                }), b.a.createElement("h2", {
                    "data-v-d89857ed": ""
                }, b.a.createElement("span", {
                    className: "head-title",
                    "data-v-d89857ed": ""
                }, e.catalogName))), b.a.createElement("div", {
                    className: "catalog-detail-list",
                    "data-v-d89857ed": ""
                }, e.children && e.children.map(function(a) {
                    return b.a.createElement("span", {
                        className: "catalog-detail-item",
                        key: a.proCatalogId,
                        onClick: function() {
                            var e, t;
                            (e = a).proCatalogId && (t = {
                                directory_level: e.levels,
                                directory: e.catalogName
                            },
                            Object(P.B)(t),
                            window.open("/list/c-".concat(e.proCatalogId, ".html")))
                        },
                        "data-v-d89857ed": ""
                    }, b.a.createElement("span", {
                        className: "detail-item-img",
                        "data-v-d89857ed": ""
                    }, b.a.createElement(_.a, {
                        src: a.imagePath || h,
                        errorImage: h,
                        alt: a.catalogName,
                        "data-v-d89857ed": ""
                    })), b.a.createElement("span", {
                        className: "detail-item-name",
                        "data-v-d89857ed": ""
                    }, b.a.createElement("span", {
                        "data-v-d89857ed": ""
                    }, a.catalogName)))
                })))
            }))), b.a.createElement(N.a, {
                "data-v-d89857ed": ""
            }))
        }
        a(329),
        a(330),
        i.getInitialProps = function(e) {
            return (r = r || o()(C().mark(function e(t) {
                return C().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.all([t.store.dispatch({
                                type: "common/updateTodo",
                                payload: {
                                    injectConst: t.app.config.injectConst
                                }
                            }), t.store.dispatch({
                                type: "common/getUserCityData",
                                payload: {
                                    ctx: t
                                }
                            }), t.store.dispatch({
                                type: "common/getBaseData",
                                payload: {
                                    ctx: t,
                                    classIds: "3"
                                }
                            })]);
                        case 2:
                            return e.next = 4,
                            Promise.all([t.store.dispatch({
                                type: "catalog/getPageData",
                                payload: {
                                    ctx: t
                                }
                            }), t.store.dispatch({
                                type: "catalog/getPageTdk",
                                payload: {
                                    ctx: t,
                                    pageType: "catalog"
                                }
                            })]);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        ,
        t.default = Object(n.connect)(function(e) {
            return {
                navs: e.common.navs,
                catalogs: e.common.catalogs,
                injectConst: e.common.injectConst,
                scrollTop: e.common.scrollTop,
                catalogId: e.catalog.catalogId,
                viewType: -1 !== e.catalog.viewType.indexOf("side") ? "pic" : e.catalog.viewType,
                keyword: e.catalog.keyword,
                urlWithQuery: e.catalog.urlWithQuery,
                url: e.catalog.url,
                user: e.common.user
            }
        })(i)
    },
    329: function(e, t, a) {},
    330: function(e, t, a) {},
    331: function(e, t, a) {},
    332: function(e, t, a) {},
    333: function(e, t, a) {
        "use strict";
        a.r(t);
        var r, n = a(6), j = a.n(n), n = a(8), w = a.n(n), n = a(35), E = a.n(n), n = a(13), k = a.n(n), n = a(1), S = a.n(n), _ = (a(19),
        a(0)), O = a.n(_), n = a(7), N = a(40), x = a(124), L = a(186), I = a(30), T = a(28), P = a(29), C = a(27), F = a(38), M = a(17), D = a(168), q = a(71), R = a(72), B = a(62), H = a(98), W = a(43), G = a(3);
        function A() {
            A = function() {
                return c
            }
            ;
            var l, c = {}, e = Object.prototype, s = e.hasOwnProperty, u = Object.defineProperty || function(e, t, a) {
                e[t] = a.value
            }
            , t = "function" == typeof Symbol ? Symbol : {}, r = t.iterator || "@@iterator", a = t.asyncIterator || "@@asyncIterator", n = t.toStringTag || "@@toStringTag";
            function o(e, t, a) {
                return Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                o({}, "")
            } catch (l) {
                o = function(e, t, a) {
                    return e[t] = a
                }
            }
            function i(e, t, a, r) {
                var n, o, c, i, t = t && t.prototype instanceof v ? t : v, t = Object.create(t.prototype), r = new O(r || []);
                return u(t, "_invoke", {
                    value: (n = e,
                    o = a,
                    c = r,
                    i = p,
                    function(e, t) {
                        if (i === f)
                            throw new Error("Generator is already running");
                        if (i === m) {
                            if ("throw" === e)
                                throw t;
                            return {
                                value: l,
                                done: !0
                            }
                        }
                        for (c.method = e,
                        c.arg = t; ; ) {
                            var a = c.delegate;
                            if (a) {
                                a = function e(t, a) {
                                    var r = a.method
                                      , n = t.iterator[r];
                                    if (n === l)
                                        return a.delegate = null,
                                        "throw" === r && t.iterator.return && (a.method = "return",
                                        a.arg = l,
                                        e(t, a),
                                        "throw" === a.method) || "return" !== r && (a.method = "throw",
                                        a.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                                        h;
                                    r = d(n, t.iterator, a.arg);
                                    if ("throw" === r.type)
                                        return a.method = "throw",
                                        a.arg = r.arg,
                                        a.delegate = null,
                                        h;
                                    n = r.arg;
                                    return n ? n.done ? (a[t.resultName] = n.value,
                                    a.next = t.nextLoc,
                                    "return" !== a.method && (a.method = "next",
                                    a.arg = l),
                                    a.delegate = null,
                                    h) : n : (a.method = "throw",
                                    a.arg = new TypeError("iterator result is not an object"),
                                    a.delegate = null,
                                    h)
                                }(a, c);
                                if (a) {
                                    if (a === h)
                                        continue;
                                    return a
                                }
                            }
                            if ("next" === c.method)
                                c.sent = c._sent = c.arg;
                            else if ("throw" === c.method) {
                                if (i === p)
                                    throw i = m,
                                    c.arg;
                                c.dispatchException(c.arg)
                            } else
                                "return" === c.method && c.abrupt("return", c.arg);
                            i = f;
                            a = d(n, o, c);
                            if ("normal" === a.type) {
                                if (i = c.done ? m : "suspendedYield",
                                a.arg === h)
                                    continue;
                                return {
                                    value: a.arg,
                                    done: c.done
                                }
                            }
                            "throw" === a.type && (i = m,
                            c.method = "throw",
                            c.arg = a.arg)
                        }
                    }
                    )
                }),
                t
            }
            function d(e, t, a) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, a)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            c.wrap = i;
            var p = "suspendedStart"
              , f = "executing"
              , m = "completed"
              , h = {};
            function v() {}
            function g() {}
            function y() {}
            var t = {}
              , b = (o(t, r, function() {
                return this
            }),
            Object.getPrototypeOf)
              , b = b && b(b(N([])))
              , w = (b && b !== e && s.call(b, r) && (t = b),
            y.prototype = v.prototype = Object.create(t));
            function E(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    o(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function k(c, i) {
                var t;
                u(this, "_invoke", {
                    value: function(a, r) {
                        function e() {
                            return new i(function(e, t) {
                                !function t(e, a, r, n) {
                                    var o, e = d(c[e], c, a);
                                    if ("throw" !== e.type)
                                        return (a = (o = e.arg).value) && "object" == j()(a) && s.call(a, "__await") ? i.resolve(a.__await).then(function(e) {
                                            t("next", e, r, n)
                                        }, function(e) {
                                            t("throw", e, r, n)
                                        }) : i.resolve(a).then(function(e) {
                                            o.value = e,
                                            r(o)
                                        }, function(e) {
                                            return t("throw", e, r, n)
                                        });
                                    n(e.arg)
                                }(a, r, e, t)
                            }
                            )
                        }
                        return t = t ? t.then(e, e) : e()
                    }
                })
            }
            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function _(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function O(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(S, this),
                this.reset(!0)
            }
            function N(t) {
                if (t || "" === t) {
                    var a, e = t[r];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length))
                        return a = -1,
                        (e = function e() {
                            for (; ++a < t.length; )
                                if (s.call(t, a))
                                    return e.value = t[a],
                                    e.done = !1,
                                    e;
                            return e.value = l,
                            e.done = !0,
                            e
                        }
                        ).next = e
                }
                throw new TypeError(j()(t) + " is not iterable")
            }
            return u(w, "constructor", {
                value: g.prototype = y,
                configurable: !0
            }),
            u(y, "constructor", {
                value: g,
                configurable: !0
            }),
            g.displayName = o(y, n, "GeneratorFunction"),
            c.isGeneratorFunction = function(e) {
                e = "function" == typeof e && e.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            c.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                o(e, n, "GeneratorFunction")),
                e.prototype = Object.create(w),
                e
            }
            ,
            c.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            E(k.prototype),
            o(k.prototype, a, function() {
                return this
            }),
            c.AsyncIterator = k,
            c.async = function(e, t, a, r, n) {
                void 0 === n && (n = Promise);
                var o = new k(i(e, t, a, r),n);
                return c.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }
            ,
            E(w),
            o(w, n, "Generator"),
            o(w, r, function() {
                return this
            }),
            o(w, "toString", function() {
                return "[object Generator]"
            }),
            c.keys = function(e) {
                var t, a = Object(e), r = [];
                for (t in a)
                    r.push(t);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var t = r.pop();
                        if (t in a)
                            return e.value = t,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            c.values = N,
            O.prototype = {
                constructor: O,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = l,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = l,
                    this.tryEntries.forEach(_),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = l)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(a) {
                    if (this.done)
                        throw a;
                    var r = this;
                    function e(e, t) {
                        return o.type = "throw",
                        o.arg = a,
                        r.next = e,
                        t && (r.method = "next",
                        r.arg = l),
                        !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t]
                          , o = n.completion;
                        if ("root" === n.tryLoc)
                            return e("end");
                        if (n.tryLoc <= this.prev) {
                            var c = s.call(n, "catchLoc")
                              , i = s.call(n, "finallyLoc");
                            if (c && i) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            } else if (c) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0)
                            } else {
                                if (!i)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                        var r = this.tryEntries[a];
                        if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var n = r;
                            break
                        }
                    }
                    var o = (n = n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc ? null : n) ? n.completion : {};
                    return o.type = e,
                    o.arg = t,
                    n ? (this.method = "next",
                    this.next = n.finallyLoc,
                    h) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    h
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a = this.tryEntries[t];
                        if (a.finallyLoc === e)
                            return this.complete(a.completion, a.afterLoc),
                            _(a),
                            h
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a, r, n = this.tryEntries[t];
                        if (n.tryLoc === e)
                            return "throw" === (a = n.completion).type && (r = a.arg,
                            _(n)),
                            r
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, a) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: t,
                        nextLoc: a
                    },
                    "next" === this.method && (this.arg = l),
                    h
                }
            },
            c
        }
        function o(e) {
            function t(e) {
                return (n = n || k()(A().mark(function e(t) {
                    var a;
                    return A().wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return a = Object(G.l)(t),
                                g(a),
                                e.next = 4,
                                o({
                                    type: "purchased/getPurchasedData",
                                    payload: {
                                        params: {
                                            page: 0,
                                            size: 20,
                                            keywords: a,
                                            sortByPrice: "",
                                            minPrice: "",
                                            maxPrice: ""
                                        }
                                    }
                                });
                            case 4:
                                return e.next = 6,
                                o({
                                    type: "purchased/getDeliverTime"
                                });
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                }))).apply(this, arguments)
            }
            var a, r, n, o = e.dispatch, c = e.injectConst, i = (e.user,
            e.keywords), l = e.total, s = e.viewType, u = e.isLoading, d = e.page, p = e.citycode, f = Object(_.useState)(!1), f = S()(f, 2), m = f[0], h = f[1], f = Object(_.useState)(""), f = S()(f, 2), v = f[0], g = f[1], f = Object(_.useState)(e.content), f = S()(f, 2), y = f[0], b = f[1];
            Object(_.useEffect)(function() {
                h(c.isLogin)
            }, []),
            Object(_.useEffect)(function() {
                b(e.content)
            }, [e.content]),
            Object(W.a)(c, e.user),
            Object(_.useEffect)(function() {
                o({
                    type: "purchased/getDeliverTime"
                })
            }, []);
            return O.a.createElement("div", {
                className: "catalog-wrap",
                "data-v-04dbc498": ""
            }, O.a.createElement(T.a, {
                "data-v-04dbc498": ""
            }), O.a.createElement(I.a, {
                catalogs: e.catalogs,
                user: e.user,
                navs: e.navs,
                injectConst: c,
                origin: c.origin,
                query: c.query,
                channel: "catalog",
                type: "2",
                "data-v-04dbc498": ""
            }), O.a.createElement(N.a, {
                searchTitleText: "购买过的商品",
                hideSearchType: !0,
                isSpecialSearch: !0,
                commonKeyword: v,
                stopUtmKeyword: !0,
                searchCb: t,
                "data-v-04dbc498": ""
            }), O.a.createElement(P.a, {
                "data-v-04dbc498": ""
            }), O.a.createElement("div", {
                className: "list-inner",
                "data-v-04dbc498": ""
            }, O.a.createElement(M.a, {
                isShow: u,
                "data-v-04dbc498": ""
            }, O.a.createElement("div", {
                className: "loading-wrap",
                "data-v-04dbc498": ""
            }, O.a.createElement("div", {
                className: "loading-box",
                "data-v-04dbc498": ""
            }))), O.a.createElement(B.a, {
                "data-v-04dbc498": ""
            }), O.a.createElement("div", {
                className: "top-banner",
                "data-v-04dbc498": ""
            }, O.a.createElement("img", {
                src: "https://webuat-list.zkh.com/images/agreement_banner.png",
                "data-v-04dbc498": ""
            })), O.a.createElement("div", {
                className: "tab-menu-list",
                "data-v-04dbc498": ""
            }, O.a.createElement("a", {
                href: "/list/agreementProduct.html",
                className: "tab-menu-item",
                "data-v-04dbc498": ""
            }, "协议商品"), O.a.createElement("a", {
                href: "/list/purchasedProduct.html",
                className: "tab-menu-item active",
                "data-v-04dbc498": ""
            }, "购买过的")), O.a.createElement(D.a, w()({
                modelType: "specialList",
                skuTotalHits: e.total,
                viewType: e.viewType,
                onChange: function() {
                    return (r = r || k()(A().mark(function e() {
                        var t, a = arguments;
                        return A().wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    "view" != (t = 0 < a.length && void 0 !== a[0] ? a[0] : {}).actionType ? e.next = 5 : (o({
                                        type: "purchased/updateTodo",
                                        payload: {
                                            viewType: t.viewType
                                        }
                                    }),
                                    e.next = 9);
                                    break;
                                case 5:
                                    return e.next = 7,
                                    o({
                                        type: "purchased/getPurchasedData",
                                        payload: {
                                            params: {
                                                page: 0,
                                                sortByPrice: 2 == t.sort ? 1 : 1 == t.sort ? 2 : null,
                                                minPrice: t.rangeFilter && t.rangeFilter[0] && t.rangeFilter[0].min || "",
                                                maxPrice: t.rangeFilter && t.rangeFilter[0] && t.rangeFilter[0].max || ""
                                            }
                                        }
                                    });
                                case 7:
                                    return e.next = 9,
                                    o({
                                        type: "purchased/getDeliverTime"
                                    });
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }))).apply(this, arguments)
                }
            }, {
                hideFeatureSelected: !0,
                hideInstock: !0,
                hideArea: !0,
                hideDefaultSort: !0,
                hidePopSort: !0,
                hideSaleSort: !0,
                hideMoqSearch: !0
            }, {
                hideAgreementSelected: !0,
                "data-v-04dbc498": ""
            })), O.a.createElement(M.a, {
                isShow: y.length,
                "data-v-04dbc498": ""
            }, "pic" === s || "sidePic" === s ? O.a.createElement("div", {
                className: "goods-wrap",
                "data-v-04dbc498": ""
            }, O.a.createElement(q.a, {
                from: d,
                isLogin: m,
                cityCode: p.cityCode,
                content: y,
                priceInfoMap: e.priceInfoMap,
                stockInfoMap: e.stockInfoMap,
                isPriceReady: !0,
                viewType: s,
                keyword: i,
                collectCallBack: function(e, t) {
                    var a = E()(y);
                    a[e].isCollect = t,
                    b(a),
                    console.log("list-index, isCollect", e, t, a)
                },
                "data-v-04dbc498": ""
            })) : O.a.createElement("div", {
                className: "list-item-wrap clearfix",
                "data-v-04dbc498": ""
            }, O.a.createElement(R.a, {
                modelType: "purchased",
                isLogin: m,
                content: y,
                priceInfoMap: e.priceInfoMap,
                stockInfoMap: e.stockInfoMap,
                isPriceReady: !0,
                viewType: s,
                keyword: i,
                pushCartCallback: function() {
                    o({
                        type: "purchased/updateTodo",
                        payload: {
                            cartList: (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).list
                        }
                    })
                },
                cartList: e.cartList,
                "data-v-04dbc498": ""
            }))), O.a.createElement("div", {
                style: {
                    height: "20px"
                },
                "data-v-04dbc498": ""
            }), O.a.createElement(M.a, {
                isShow: 20 < l,
                "data-v-04dbc498": ""
            }, O.a.createElement("div", {
                className: "pagination-wrap",
                "data-v-04dbc498": ""
            }, O.a.createElement(F.a, {
                pageSize: "20",
                current: d + 1,
                total: l,
                onChange: function(e, t) {
                    return (a = a || k()(A().mark(function e(t, a) {
                        return A().wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o({
                                        type: "purchased/getPurchasedData",
                                        payload: {
                                            params: {
                                                page: a - 1
                                            }
                                        }
                                    });
                                case 2:
                                    return e.next = 4,
                                    o({
                                        type: "purchased/getDeliverTime"
                                    });
                                case 4:
                                    Object(G.pb)("screenFilter");
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }))).apply(this, arguments)
                },
                "data-v-04dbc498": ""
            }))), O.a.createElement(M.a, {
                isShow: !y.length,
                "data-v-04dbc498": ""
            }, O.a.createElement(H.a, {
                "data-v-04dbc498": ""
            }))), O.a.createElement(x.a, {
                "data-v-04dbc498": ""
            }, O.a.createElement(L.a, {
                searchTitleText: "购买过的商品",
                hideSearchType: !0,
                shownLimit: 588,
                commonKeyword: v,
                setCurKeyword: g,
                isSpecialSearch: !0,
                searchCb: t,
                stopUtmKeyword: !0,
                "data-v-04dbc498": ""
            })), O.a.createElement(C.a, {
                "data-v-04dbc498": ""
            }), O.a.createElement("img", {
                className: "left-side-service find-service-btn",
                src: "//static.zkh360.com/image/2022-08-26/consult-gif-1661504423657.gif",
                "data-v-04dbc498": ""
            }))
        }
        a(334),
        a(51),
        o.getInitialProps = function(e) {
            return (r = r || k()(A().mark(function e(t) {
                return A().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.all([t.store.dispatch({
                                type: "common/updateTodo",
                                payload: {
                                    injectConst: t.app.config.injectConst
                                }
                            }), t.store.dispatch({
                                type: "common/getUserCityData",
                                payload: {
                                    ctx: t
                                }
                            }), t.store.dispatch({
                                type: "common/getBaseData",
                                payload: {
                                    ctx: t,
                                    classIds: "3"
                                }
                            })]);
                        case 2:
                            return e.next = 4,
                            t.store.dispatch({
                                type: "purchased/getPurchasedData",
                                payload: {
                                    ctx: t,
                                    params: {
                                        page: 0,
                                        size: 20
                                    }
                                }
                            });
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        ,
        t.default = Object(n.connect)(function(e) {
            return {
                navs: e.common.navs,
                catalogs: e.common.catalogs,
                injectConst: e.common.injectConst,
                user: e.common.user,
                citycode: e.common.citycode,
                cartList: e.purchased.cartList,
                viewType: e.purchased.viewType,
                isLoading: e.purchased.isLoading,
                keywords: e.purchased.keywords,
                content: e.purchased.content,
                priceInfoMap: e.purchased.priceInfoMap,
                stockInfoMap: e.purchased.stockInfoMap,
                total: e.purchased.total,
                page: e.purchased.page,
                sortByPrice: e.purchased.sortByPrice,
                minPrice: e.purchased.minPrice,
                maxPrice: e.purchased.maxPrice
            }
        })(o)
    },
    334: function(e, t, a) {},
    34: function(e, t) {
        e.exports = ReactDOM
    },
    381: function(l, e, t) {
        "use strict";
        t.r(e);
        var a = t(13)
          , r = t.n(a)
          , a = t(5)
          , E = t.n(a)
          , a = t(6)
          , R = t.n(a)
          , a = t(1)
          , B = t.n(a)
          , H = (t(19),
        t(0))
          , W = t.n(H)
          , a = t(7)
          , G = t(40)
          , J = t(30)
          , Z = t(28)
          , X = t(29)
          , $ = t(27)
          , ee = t(38)
          , A = t(17)
          , te = t(117)
          , ae = t(96)
          , re = t(118)
          , ne = t(97)
          , n = t(35)
          , g = t.n(n)
          , U = t(3)
          , n = (t(319),
        t(657))
          , Q = t(11)
          , C = t(37)
          , y = t(66)
          , F = t(15);
        function b(t, e) {
            var a, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)),
            r
        }
        function M(e) {
            var r = e.searchRes.searchWord;
            if (null != r && null != (e = r.recommendWords) && e.length) {
                for (var t = [], a = 0, n = 0; n < r.recommendWords.length; n++) {
                    var o = r.recommendWords[n];
                    if (o) {
                        if (50 <= (a += o.length))
                            break;
                        t.push(o)
                    }
                }
                r.newRecommendArr = t
            }
            return W.a.createElement(W.a.Fragment, null, W.a.createElement("div", {
                className: "search-info-wrap recommend-info-wrap",
                "data-v-549e8ea8": ""
            }, W.a.createElement("i", {
                className: "empty-icon",
                "data-v-549e8ea8": ""
            }), W.a.createElement("div", {
                className: "info-text-wrap",
                "data-v-549e8ea8": ""
            }, W.a.createElement("div", {
                className: "info-text-inner",
                "data-v-549e8ea8": ""
            }, W.a.createElement("span", {
                "data-v-549e8ea8": ""
            }, "为您找到“"), W.a.createElement("span", {
                className: "textRed searchKeyWord",
                "data-v-549e8ea8": ""
            }, r.coreWord), W.a.createElement("span", {
                "data-v-549e8ea8": ""
            }, "”的相关商品。"), r.recommendWords && r.recommendWords.length ? W.a.createElement(W.a.Fragment, null, W.a.createElement("span", {
                "data-v-549e8ea8": ""
            }, "您可能想找："), r.newRecommendArr.map(function(e, t) {
                var a = g()(r.recommendWords)
                  , a = (a.splice(t, 1),
                encodeURIComponent(a.join(",")));
                return W.a.createElement("span", {
                    key: "rcmd_".concat(t),
                    "data-v-549e8ea8": ""
                }, W.a.createElement("a", {
                    href: "?keywords=".concat(encodeURIComponent(e), "&rcmdSearch=1&linkcorrect=").concat(r.correctWord, "&linkrecommend=").concat(a),
                    className: "textBlue",
                    "data-v-549e8ea8": ""
                }, e), t < r.newRecommendArr.length - 1 ? "、" : "")
            })) : null))))
        }
        function D(e) {
            var t = e.keyword
              , e = e.searchRes
              , e = (void 0 === e ? {} : e).searchWord;
            return W.a.createElement("div", {
                className: "search-info-wrap",
                "data-v-549e8ea8": ""
            }, "我们为你提供“", W.a.createElement("span", {
                className: "textRed searchKeyWord",
                "data-v-549e8ea8": ""
            }, e.correctWord), "”相关搜索。仍然搜索“", W.a.createElement("a", {
                className: "textBlue searchKeyWord",
                href: "?keywords=".concat(encodeURIComponent(t), "&notNeedCorrect=1"),
                "data-v-549e8ea8": ""
            }, t), "”")
        }
        function w(e) {
            return W.a.createElement("div", {
                className: "search-info-wrap nodata-info",
                style: {
                    width: e.infoWidth
                },
                "data-v-549e8ea8": ""
            }, W.a.createElement("i", {
                className: "warning-icon",
                "data-v-549e8ea8": ""
            }), e.text || W.a.createElement(W.a.Fragment, null, "抱歉，没有找到符合条件的产品，别沮丧，快去联系", W.a.createElement("span", {
                className: "find-service",
                "data-v-549e8ea8": ""
            }, "专属在线客服"), "试试吧~  "), W.a.createElement("span", {
                className: "find-service-btn",
                "data-v-549e8ea8": ""
            }, W.a.createElement("i", {
                className: "iconfont",
                "data-v-549e8ea8": ""
            }, ""), "咨询客服"))
        }
        function q(e) {
            e = e.keyword;
            return W.a.createElement("div", {
                className: "search-info-wrap fuzzy-data-wrap",
                "data-v-549e8ea8": ""
            }, W.a.createElement("i", {
                className: "empty-icon",
                "data-v-549e8ea8": ""
            }), W.a.createElement("div", {
                className: "info-text-wrap",
                "data-v-549e8ea8": ""
            }, W.a.createElement("span", {
                className: "inline-block",
                "data-v-549e8ea8": ""
            }, "抱歉，没有找到“"), W.a.createElement("span", {
                className: "textRed searchKeyWord",
                "data-v-549e8ea8": ""
            }, Object(U.l)(e)), W.a.createElement("span", {
                className: "inline-block",
                "data-v-549e8ea8": ""
            }, "”的商品，我们为您推荐以下相关商品。")))
        }
        function oe(e) {
            return e.hasKnowledge ? null : W.a.createElement("div", {
                className: "search-info-wrap exactInfo",
                style: {
                    width: e.infoWidth
                },
                "data-v-549e8ea8": ""
            }, "对搜索结果不满意？试试专属客服~   ", W.a.createElement("span", {
                className: "textRed find-service-btn",
                onClick: function() {
                    Object(Q.g)({
                        operation_type: "搜索结果页"
                    })
                },
                "data-v-549e8ea8": ""
            }, W.a.createElement("i", {
                className: "iconfont",
                "data-v-549e8ea8": ""
            }, ""), "咨询专属客服"))
        }
        function ce(e) {
            return W.a.createElement("div", {
                className: "search-info-wrap nodata-info",
                style: {
                    width: e.infoWidth
                },
                "data-v-549e8ea8": ""
            }, W.a.createElement("i", {
                className: "warning-icon",
                "data-v-549e8ea8": ""
            }), e.text)
        }
        function ie(e) {
            return e = e.data,
            W.a.createElement("div", {
                className: "clearfix brand-card-wrap"
            }, W.a.createElement("img", {
                className: "floatLeft brand-img",
                src: e.proBrandSmallLogo,
                alt: e.proBrandName
            }), W.a.createElement("span", {
                className: "floatLeft brand-name"
            }, e.proBrandName, "品牌专区"), W.a.createElement("a", {
                href: e.brandUrl || "/list/b-".concat(e.proBrandId, ".html"),
                className: "floatLeft brand-btn",
                target: "_blank"
            }, "进入品牌专区"))
        }
        var le = Object(n.a)(Object(a.connect)(function(e) {
            return {
                keyword: e.catalog.keyword,
                listInfo: e.catalog.listInfo,
                requestId: e.catalog.requestId
            }
        })(function(n) {
            function a(e) {
                Object(Q.u)({
                    request_id: n.requestId,
                    key_word: n.keyword,
                    article_id: null == e ? void 0 : e.id
                })
            }
            function t(e) {
                var t, r = void 0 === (e = e.page) ? 0 : e;
                o && (e = (e = (o.categoryLevel4 || []).filter(function(e) {
                    return e.ifRelevant
                })).map(function(e) {
                    return e.proCatalogId
                }),
                t = 1 == (null == (t = o.brands) ? void 0 : t.length) ? o.brands[0].proBrandId : null,
                e.length ? h.current || (h.current = !0,
                Object(C.p)({
                    catalogIds: e,
                    brandId: t
                }, {
                    page: r
                }).then(function(e) {
                    var t, a;
                    h.current = !1,
                    e.success && e.result && (a = 0 < r ? Object(F.cloneDeep)(d) : [],
                    t = e.result.content || [],
                    p([].concat(g()(a), g()(t))),
                    m.current = e.result.number,
                    m.current + 1 >= e.result.totalPages && (v.current = !0),
                    t.length) && (a = t.map(function(e) {
                        return e.id
                    }),
                    Object(Q.l)({
                        request_id: n.requestId,
                        article_num: null == e || null == (t = e.result) ? void 0 : t.totalElements,
                        article_id_list: a
                    })),
                    0 == r && u(0 < (null == e || null == (t = e.result) || null == (a = t.content) ? void 0 : a.length))
                }).catch(function() {
                    h.current = !1
                })) : (u(!1),
                p([])))
            }
            var e = n.keyword
              , r = n.listInfo
              , o = void 0 === r ? {} : r
              , r = Object(H.useState)(function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? b(Object(a), !0).forEach(function(e) {
                        E()(t, e, a[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : b(Object(a)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return t
            }({}, o))
              , r = B()(r, 2)
              , c = r[0]
              , i = r[1]
              , l = Object(H.useRef)()
              , r = Object(H.useState)(!0)
              , r = B()(r, 2)
              , s = r[0]
              , u = r[1]
              , r = Object(H.useState)([])
              , r = B()(r, 2)
              , d = r[0]
              , p = r[1]
              , f = Object(H.useRef)()
              , m = Object(H.useRef)(0)
              , h = Object(H.useRef)(!1)
              , v = Object(H.useRef)(!1);
            return Object(H.useEffect)(function() {
                n.isDOMLoaded && o && (p([]),
                m.current = 0,
                u(!0),
                v.current = !1,
                h.current = !1,
                t({
                    page: 0
                }))
            }, [n.isDOMLoaded, o]),
            Object(H.useEffect)(function() {
                l.current ? i(o) : l.current = !0
            }, [o]),
            W.a.createElement(W.a.Fragment, null, d.length ? W.a.createElement("div", {
                className: "knowledge-info",
                style: {
                    width: n.infoWidth
                },
                "data-v-549e8ea8": ""
            }, W.a.createElement("div", {
                className: "knowledge-item",
                onClick: function() {
                    return a(d[0])
                },
                "data-v-549e8ea8": ""
            }, W.a.createElement("img", {
                src: "//static.zkh360.com/image/2023-09-06/knowledge-1693982355468.png",
                "data-v-549e8ea8": ""
            }), W.a.createElement("a", {
                href: null == (r = d[0]) ? void 0 : r.url,
                target: "_blank",
                "data-v-549e8ea8": ""
            }, null == (r = d[0]) ? void 0 : r.title)), 2 <= d.length && 700 < n.infoWidth ? W.a.createElement("div", {
                className: "knowledge-item",
                onClick: function() {
                    return a(d[1])
                },
                "data-v-549e8ea8": ""
            }, W.a.createElement("img", {
                src: "//static.zkh360.com/image/2023-09-06/knowledge-1693982355468.png",
                "data-v-549e8ea8": ""
            }), W.a.createElement("a", {
                href: null == (r = d[1]) ? void 0 : r.url,
                target: "_blank",
                "data-v-549e8ea8": ""
            }, null == (r = d[1]) ? void 0 : r.title)) : "", 2 < d.length || 2 == d.length && n.infoWidth <= 700 ? W.a.createElement("div", {
                className: "show-more",
                "data-v-549e8ea8": ""
            }, "查看更多", W.a.createElement("div", {
                className: "show-more-content",
                "data-v-549e8ea8": ""
            }, W.a.createElement("div", {
                className: "show-more-inner",
                onScroll: function() {
                    var e;
                    v.current || ((e = f.current).scrollHeight - e.scrollTop >= e.clientHeight && t({
                        page: m.current + 1
                    }),
                    document.body.style.overflow = "hidden")
                },
                ref: f,
                onMouseLeave: function() {
                    document.body.style.overflow = ""
                },
                "data-v-549e8ea8": ""
            }, d.map(function(e, t) {
                return W.a.createElement("div", {
                    className: "knowledge-item",
                    key: "item-".concat(t),
                    onClick: function() {
                        return a(e)
                    },
                    "data-v-549e8ea8": ""
                }, W.a.createElement("img", {
                    src: "//static.zkh360.com/image/2023-09-06/knowledge-1693982355468.png",
                    "data-v-549e8ea8": ""
                }), W.a.createElement("a", {
                    href: e.url,
                    target: "_blank",
                    "data-v-549e8ea8": ""
                }, e.title))
            }), h.current ? W.a.createElement("div", {
                className: "spin-loading",
                "data-v-549e8ea8": ""
            }, W.a.createElement(y.a, {
                "data-v-549e8ea8": ""
            }), W.a.createElement(y.a, {
                "data-v-549e8ea8": ""
            }), W.a.createElement(y.a, {
                "data-v-549e8ea8": ""
            })) : ""))) : "") : "", 1 == c.codeForBlank ? W.a.createElement(ce, {
                text: c.msgForBlank,
                infoWidth: n.infoWidth,
                "data-v-549e8ea8": ""
            }) : W.a.createElement(W.a.Fragment, null, 18 != (null == c ? void 0 : c.searchType) || null != c && null != (r = c.page) && null != (r = r.content) && r.length || null != c && null != (r = c.searchWord) && r.coreWord ? W.a.createElement(W.a.Fragment, null, 18 == (null == c ? void 0 : c.searchType) && null != c && null != (r = c.page) && null != (r = r.content) && r.length && null != c && null != (r = c.searchWord) && r.coreWord ? W.a.createElement("div", {
                className: "search-info-wrap",
                "data-v-549e8ea8": ""
            }, "您所搜索的关键词包含敏感词，为您展示", W.a.createElement("span", {
                className: "textRed",
                "data-v-549e8ea8": ""
            }, c.searchWord.coreWord), "的搜索结果") : W.a.createElement(W.a.Fragment, null, null != c && c.isFuzzySearch ? W.a.createElement(q, {
                keyword: e,
                "data-v-549e8ea8": ""
            }) : W.a.createElement(W.a.Fragment, null, null != c && null != (r = c.page) && r.content.length ? W.a.createElement(W.a.Fragment, null, null != c && null != (r = c.searchWord) && r.coreWord ? W.a.createElement(M, {
                keyword: e,
                searchRes: c,
                "data-v-549e8ea8": ""
            }) : W.a.createElement(W.a.Fragment, null, null != c && null != (r = c.searchWord) && r.correctWord ? W.a.createElement(D, {
                keyword: e,
                searchRes: c,
                "data-v-549e8ea8": ""
            }) : W.a.createElement(oe, {
                hasKnowledge: s,
                infoWidth: n.infoWidth,
                "data-v-549e8ea8": ""
            }))) : W.a.createElement(w, {
                infoWidth: n.infoWidth,
                "data-v-549e8ea8": ""
            })))) : W.a.createElement(w, {
                text: "您所搜索的关键词为敏感词，建议尝试其他关键词  ",
                infoWidth: n.infoWidth,
                "data-v-549e8ea8": ""
            })))
        }))
          , se = (t(320),
        t(133))
          , ue = t(123)
          , de = t(71)
          , pe = t(72)
          , fe = t(104)
          , me = t(62)
          , n = t(8)
          , k = t.n(n)
          , he = t(33)
          , S = t(36)
          , _ = (t(95),
        t(32))
          , O = (t(84),
        t(31))
          , N = (t(80),
        t(4))
          , j = t(46)
          , x = (t(143),
        t(57))
          , ve = t(73)
          , ge = t(42);
        function L(t, e) {
            var a, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)),
            r
        }
        t(321);
        var o, I = {
            labelCol: {
                span: 5
            },
            wrapperCol: {
                span: 19
            }
        }, T = S.a.Item, ye = j.a.Group, s = S.a.create()(function(r) {
            function e(e) {
                var t, a;
                l(""),
                r.form.getFieldError(e) && (t = r.form.getFieldValue(e),
                (a = {})[e] = {
                    value: t,
                    error: ""
                },
                r.form.setFields(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? L(Object(a), !0).forEach(function(e) {
                            E()(t, e, a[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : L(Object(a)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        })
                    }
                    return t
                }({}, a)))
            }
            function t() {
                r.form.resetFields(),
                u(0),
                l(""),
                r.onCancel && r.onCancel()
            }
            function a() {
                var e = r.form.getFieldValue("content") || "";
                u(e.length || 0)
            }
            var n = Object(H.useState)(!1)
              , n = B()(n, 2)
              , o = n[0]
              , c = n[1]
              , n = Object(H.useState)("")
              , n = B()(n, 2)
              , i = n[0]
              , l = n[1]
              , n = Object(H.useState)(0)
              , n = B()(n, 2)
              , s = n[0]
              , u = n[1]
              , n = Object(H.useState)(1)
              , n = B()(n, 2)
              , d = n[0]
              , p = n[1]
              , n = Object(H.useState)(0)
              , n = B()(n, 2)
              , f = n[0]
              , m = n[1]
              , n = Object(H.useState)(!1)
              , n = B()(n, 2)
              , h = n[0]
              , v = n[1]
              , n = Object(H.useState)(!1)
              , n = B()(n, 2)
              , g = n[0]
              , y = n[1]
              , n = r.form.getFieldProps
              , b = (Object(H.useEffect)(function() {
                v(r.injectConst.isLogin)
            }, [r.injectConst]),
            n("mobile", {
                validate: x.h,
                initialValue: r.user ? r.user.userInfoMobile : ""
            }))
              , w = n("content", {
                validate: x.j
            });
            return W.a.createElement(he.a, {
                title: "问题反馈",
                width: 500,
                footer: [],
                style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    marginLeft: "-220px",
                    marginTop: "-160px"
                },
                maskClosable: !1,
                onCancel: t,
                wrapClassName: "cta-suggest-wrap",
                visible: r.show,
                "data-v-079b3455": ""
            }, W.a.createElement("div", {
                className: "cta-suggest-inner",
                "data-v-079b3455": ""
            }, g ? W.a.createElement("div", {
                className: "answer-ok-wrap",
                "data-v-079b3455": ""
            }, W.a.createElement("div", {
                className: "answer-ok-left",
                "data-v-079b3455": ""
            }, W.a.createElement("img", {
                src: "//static.zkh360.com/image/2021-12-16/doc-1639647621580.png",
                className: "answer-ok-img",
                "data-v-079b3455": ""
            })), W.a.createElement("div", {
                className: "answer-ok-right",
                "data-v-079b3455": ""
            }, W.a.createElement("span", {
                className: "answer-ok-desc",
                "data-v-079b3455": ""
            }, "提问成功"), h ? W.a.createElement(W.a.Fragment, null, W.a.createElement("p", {
                "data-v-079b3455": ""
            }, "您的反馈我们已经收到，工作人员将在1个工作日内回复您或电话联系您。"), W.a.createElement("p", {
                "data-v-079b3455": ""
            }, "您可以到  ", W.a.createElement("a", {
                className: "blue",
                href: "/user/qaList.html",
                target: "_blank",
                "data-v-079b3455": ""
            }, "“我的震坤行-问答列表”"), "  查看回复结果，请您耐心等待！")) : W.a.createElement("p", {
                "data-v-079b3455": ""
            }, "您的反馈我们已经收到，工作人员将在1个工作日内联系到您解决问题，请您耐心等待！")), W.a.createElement(_.a, {
                type: "primary",
                onClick: function() {
                    y(!1),
                    r.onCancel && r.onCancel()
                },
                "data-v-079b3455": ""
            }, "确定")) : W.a.createElement(S.a, {
                horizontal: !0,
                className: "cta-suggest-form",
                "data-v-079b3455": ""
            }, W.a.createElement(T, k()({}, I, {
                label: "问题类型",
                className: "note-form-item",
                "data-v-079b3455": ""
            }), W.a.createElement(ye, {
                onChange: function(e) {
                    return e = e.target.value,
                    l(""),
                    void p(e)
                },
                value: d,
                "data-v-079b3455": ""
            }, W.a.createElement(j.a, {
                value: 1,
                "data-v-079b3455": ""
            }, "商品找货"), W.a.createElement(j.a, {
                value: 2,
                "data-v-079b3455": ""
            }, "操作问题"), W.a.createElement(j.a, {
                value: 3,
                "data-v-079b3455": ""
            }, "订单售后"), W.a.createElement(j.a, {
                value: 4,
                "data-v-079b3455": ""
            }, "其他"))), 3 !== d ? W.a.createElement(W.a.Fragment, null, W.a.createElement(T, k()({}, I, {
                label: "问题反馈",
                className: "note-form-item",
                "data-v-079b3455": ""
            }), W.a.createElement(O.a, k()({}, w, {
                type: "textarea",
                maxLength: "200",
                onKeyUp: a,
                autosize: {
                    minRows: 2,
                    maxRows: 6
                },
                placeholder: "请输入反馈内容，我们将尽快为您提供帮助",
                onFocus: function() {
                    return e("content")
                },
                "data-v-079b3455": ""
            })), W.a.createElement("span", {
                className: "num-count",
                "data-v-079b3455": ""
            }, s, "/200")), W.a.createElement(T, k()({}, I, {
                label: "手机号",
                "data-v-079b3455": ""
            }), W.a.createElement(O.a, k()({
                disabled: h
            }, b, {
                addonBefore: "",
                placeholder: "请输入手机号",
                onFocus: function() {
                    return e("mobile")
                },
                "data-v-079b3455": ""
            }))), h ? null : W.a.createElement(T, k()({}, I, {
                label: "验证码",
                className: "code-form-item",
                "data-v-079b3455": ""
            }), W.a.createElement(O.a, k()({}, n("smsCode", {
                validate: x.i
            }), {
                placeholder: "",
                onFocus: function() {
                    return e("smsCode")
                },
                "data-v-079b3455": ""
            })), W.a.createElement("span", {
                className: "textRed get-code-btn",
                onClick: function() {
                    var e;
                    (e = r.form.getFieldValue("mobile")) && /^1\d{10}$/.test(e) ? 0 < f || Object(ve.d)(e).then(function(e) {
                        var t, a;
                        "0000" === e.code ? (t = 60,
                        a = setInterval(function() {
                            0 == --t ? (m(0),
                            clearInterval(a),
                            a = void 0) : m(t)
                        }, 1e3)) : N.a.toast({
                            container: e.message
                        })
                    }) : N.a.toast({
                        container: "请输入正确的手机号码！"
                    })
                },
                "data-v-079b3455": ""
            }, 0 < f ? "".concat(f, "秒后重新获取") : "获取短信验证码"))) : W.a.createElement(W.a.Fragment, null, h ? W.a.createElement(W.a.Fragment, null, W.a.createElement(T, k()({}, I, {
                label: "订单号",
                "data-v-079b3455": ""
            }), W.a.createElement(O.a, k()({}, n("orderNo", {
                validate: x.k
            }), {
                placeholder: "请输入订单号",
                onFocus: function() {
                    return e("orderNo")
                },
                "data-v-079b3455": ""
            }))), W.a.createElement(T, k()({}, I, {
                label: "问题反馈",
                className: "note-form-item",
                "data-v-079b3455": ""
            }), W.a.createElement(O.a, k()({}, w, {
                type: "textarea",
                maxLength: "200",
                onKeyUp: a,
                autosize: {
                    minRows: 2,
                    maxRows: 6
                },
                placeholder: "请输入反馈内容，我们将尽快为您提供帮助",
                onFocus: function() {
                    return e("content")
                },
                "data-v-079b3455": ""
            })), W.a.createElement("span", {
                className: "num-count",
                "data-v-079b3455": ""
            }, s, "/200"))) : W.a.createElement(T, {
                "data-v-079b3455": ""
            }, W.a.createElement("div", {
                className: "order-form-item",
                "data-v-079b3455": ""
            }, W.a.createElement(_.a, {
                type: "primary",
                onClick: function() {
                    r.onCancel && r.onCancel(),
                    r.dispatch({
                        type: "common/updateTodo",
                        payload: {
                            quickLoginShow: !0
                        }
                    })
                },
                "data-v-079b3455": ""
            }, "登录"), W.a.createElement("span", {
                "data-v-079b3455": ""
            }, "请用下单的手机号登录后，反馈售后问题"), W.a.createElement("span", {
                "data-v-079b3455": ""
            }, W.a.createElement("a", {
                className: "textRed find-service-btn",
                href: "javascript:;",
                "data-v-079b3455": ""
            }, "在线客服"), W.a.createElement("em", {
                style: {
                    marginLeft: "12px"
                },
                "data-v-079b3455": ""
            }, "电话：400-680-9696"))))), 3 !== d || h ? W.a.createElement(T, {
                className: "btn-item",
                style: {
                    paddingTop: 10,
                    marginBottom: 0,
                    textAlign: "center"
                },
                "data-v-079b3455": ""
            }, W.a.createElement("div", {
                className: "textRed",
                "data-v-079b3455": ""
            }, i), W.a.createElement("div", {
                className: "btn-list",
                "data-v-079b3455": ""
            }, W.a.createElement(_.a, {
                type: "primary",
                loading: o,
                onClick: function() {
                    r.form.validateFields(function(e, t) {
                        e || o || (c(!0),
                        t = {
                            content: void 0 === (e = t.content) ? "" : e,
                            mobile: void 0 === (e = t.mobile) ? "" : e,
                            orderNo: void 0 === (e = t.orderNo) ? "" : e,
                            smsCode: void 0 === (e = t.smsCode) ? "" : e,
                            type: d
                        },
                        Object(ge.d)(t).then(function(e) {
                            "0000" === e.code ? (r.form.resetFields(),
                            u(0),
                            y(!0)) : l(e.message)
                        }).finally(function() {
                            c(!1)
                        }))
                    })
                },
                "data-v-079b3455": ""
            }, "提交"), W.a.createElement(_.a, {
                type: "default",
                onClick: t,
                "data-v-079b3455": ""
            }, "取消"))) : null)))
        }), u = (t(322),
        [{
            type: "udesk",
            text: "在线客服"
        }, {
            type: "link",
            text: "人工帮找",
            link: "https://www.zkh.com/list/market-467.html"
        }, {
            type: "suggest",
            text: "我要吐槽"
        }]), be = Object(a.connect)(function(e) {
            return {
                scrollTop: e.common.scrollTop,
                user: e.common.user,
                injectConst: e.common.injectConst
            }
        })(function(e) {
            function a() {
                Object(Q.g)({
                    operation_type: "搜索结果页底部"
                })
            }
            var t = e.btns
              , t = void 0 === t ? u : t
              , r = Object(H.useState)(!1)
              , r = B()(r, 2)
              , n = r[0]
              , o = r[1]
              , r = Object(H.useState)(!1)
              , r = B()(r, 2)
              , c = r[0]
              , i = r[1]
              , l = W.a.createRef();
            return Object(H.useEffect)(function() {
                !c && Object(U.Z)(l, e.scrollTop) && i(!0)
            }, [e.scrollTop]),
            W.a.createElement("div", {
                className: "cta-info-content flex-c",
                ref: l,
                "data-v-7f54b372": ""
            }, W.a.createElement("span", {
                className: "cta-tip flex-c",
                "data-v-7f54b372": ""
            }, "您是想要？"), W.a.createElement("div", {
                className: "cta-btn-list",
                "data-v-7f54b372": ""
            }, t && t.map(function(t, e) {
                return W.a.createElement("div", {
                    className: "cta-btn-item",
                    key: "cta_udesk_".concat(e),
                    onClick: function() {
                        var e;
                        e = t,
                        Object(Q.t)({
                            click_content: e.text
                        })
                    },
                    "data-v-7f54b372": ""
                }, "udesk" === t.type ? W.a.createElement("div", {
                    className: "cta-btn find-service-btn",
                    onClick: a,
                    "data-v-7f54b372": ""
                }, W.a.createElement("i", {
                    className: "iconfont",
                    "data-v-7f54b372": ""
                }, ""), t.text) : null, "link" === t.type ? W.a.createElement("a", {
                    className: "cta-btn",
                    href: t.link,
                    target: "_blank",
                    "data-v-7f54b372": ""
                }, W.a.createElement("i", {
                    className: "iconfont",
                    "data-v-7f54b372": ""
                }, ""), t.text) : null, "suggest" === t.type ? W.a.createElement("div", {
                    className: "cta-btn",
                    onClick: function() {
                        return o(!0)
                    },
                    "data-v-7f54b372": ""
                }, W.a.createElement("i", {
                    className: "iconfont",
                    "data-v-7f54b372": ""
                }, ""), t.text) : null)
            }), W.a.createElement(s, {
                show: n,
                user: e.user,
                injectConst: e.injectConst,
                dispatch: e.dispatch,
                onCancel: function() {
                    return o(!1)
                },
                "data-v-7f54b372": ""
            })))
        }), we = t(106), z = t(77), K = t(10), V = t(26), Ee = t(43), ke = t(9), Se = t(167);
        function P() {
            P = function() {
                return c
            }
            ;
            var l, c = {}, e = Object.prototype, s = e.hasOwnProperty, u = Object.defineProperty || function(e, t, a) {
                e[t] = a.value
            }
            , t = "function" == typeof Symbol ? Symbol : {}, r = t.iterator || "@@iterator", a = t.asyncIterator || "@@asyncIterator", n = t.toStringTag || "@@toStringTag";
            function o(e, t, a) {
                return Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                o({}, "")
            } catch (l) {
                o = function(e, t, a) {
                    return e[t] = a
                }
            }
            function i(e, t, a, r) {
                var n, o, c, i, t = t && t.prototype instanceof v ? t : v, t = Object.create(t.prototype), r = new O(r || []);
                return u(t, "_invoke", {
                    value: (n = e,
                    o = a,
                    c = r,
                    i = p,
                    function(e, t) {
                        if (i === f)
                            throw new Error("Generator is already running");
                        if (i === m) {
                            if ("throw" === e)
                                throw t;
                            return {
                                value: l,
                                done: !0
                            }
                        }
                        for (c.method = e,
                        c.arg = t; ; ) {
                            var a = c.delegate;
                            if (a) {
                                a = function e(t, a) {
                                    var r = a.method
                                      , n = t.iterator[r];
                                    if (n === l)
                                        return a.delegate = null,
                                        "throw" === r && t.iterator.return && (a.method = "return",
                                        a.arg = l,
                                        e(t, a),
                                        "throw" === a.method) || "return" !== r && (a.method = "throw",
                                        a.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                                        h;
                                    r = d(n, t.iterator, a.arg);
                                    if ("throw" === r.type)
                                        return a.method = "throw",
                                        a.arg = r.arg,
                                        a.delegate = null,
                                        h;
                                    n = r.arg;
                                    return n ? n.done ? (a[t.resultName] = n.value,
                                    a.next = t.nextLoc,
                                    "return" !== a.method && (a.method = "next",
                                    a.arg = l),
                                    a.delegate = null,
                                    h) : n : (a.method = "throw",
                                    a.arg = new TypeError("iterator result is not an object"),
                                    a.delegate = null,
                                    h)
                                }(a, c);
                                if (a) {
                                    if (a === h)
                                        continue;
                                    return a
                                }
                            }
                            if ("next" === c.method)
                                c.sent = c._sent = c.arg;
                            else if ("throw" === c.method) {
                                if (i === p)
                                    throw i = m,
                                    c.arg;
                                c.dispatchException(c.arg)
                            } else
                                "return" === c.method && c.abrupt("return", c.arg);
                            i = f;
                            a = d(n, o, c);
                            if ("normal" === a.type) {
                                if (i = c.done ? m : "suspendedYield",
                                a.arg === h)
                                    continue;
                                return {
                                    value: a.arg,
                                    done: c.done
                                }
                            }
                            "throw" === a.type && (i = m,
                            c.method = "throw",
                            c.arg = a.arg)
                        }
                    }
                    )
                }),
                t
            }
            function d(e, t, a) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, a)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            c.wrap = i;
            var p = "suspendedStart"
              , f = "executing"
              , m = "completed"
              , h = {};
            function v() {}
            function g() {}
            function y() {}
            var t = {}
              , b = (o(t, r, function() {
                return this
            }),
            Object.getPrototypeOf)
              , b = b && b(b(N([])))
              , w = (b && b !== e && s.call(b, r) && (t = b),
            y.prototype = v.prototype = Object.create(t));
            function E(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    o(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function k(c, i) {
                var t;
                u(this, "_invoke", {
                    value: function(a, r) {
                        function e() {
                            return new i(function(e, t) {
                                !function t(e, a, r, n) {
                                    var o, e = d(c[e], c, a);
                                    if ("throw" !== e.type)
                                        return (a = (o = e.arg).value) && "object" == R()(a) && s.call(a, "__await") ? i.resolve(a.__await).then(function(e) {
                                            t("next", e, r, n)
                                        }, function(e) {
                                            t("throw", e, r, n)
                                        }) : i.resolve(a).then(function(e) {
                                            o.value = e,
                                            r(o)
                                        }, function(e) {
                                            return t("throw", e, r, n)
                                        });
                                    n(e.arg)
                                }(a, r, e, t)
                            }
                            )
                        }
                        return t = t ? t.then(e, e) : e()
                    }
                })
            }
            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function _(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function O(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(S, this),
                this.reset(!0)
            }
            function N(t) {
                if (t || "" === t) {
                    var a, e = t[r];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length))
                        return a = -1,
                        (e = function e() {
                            for (; ++a < t.length; )
                                if (s.call(t, a))
                                    return e.value = t[a],
                                    e.done = !1,
                                    e;
                            return e.value = l,
                            e.done = !0,
                            e
                        }
                        ).next = e
                }
                throw new TypeError(R()(t) + " is not iterable")
            }
            return u(w, "constructor", {
                value: g.prototype = y,
                configurable: !0
            }),
            u(y, "constructor", {
                value: g,
                configurable: !0
            }),
            g.displayName = o(y, n, "GeneratorFunction"),
            c.isGeneratorFunction = function(e) {
                e = "function" == typeof e && e.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            c.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                o(e, n, "GeneratorFunction")),
                e.prototype = Object.create(w),
                e
            }
            ,
            c.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            E(k.prototype),
            o(k.prototype, a, function() {
                return this
            }),
            c.AsyncIterator = k,
            c.async = function(e, t, a, r, n) {
                void 0 === n && (n = Promise);
                var o = new k(i(e, t, a, r),n);
                return c.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }
            ,
            E(w),
            o(w, n, "Generator"),
            o(w, r, function() {
                return this
            }),
            o(w, "toString", function() {
                return "[object Generator]"
            }),
            c.keys = function(e) {
                var t, a = Object(e), r = [];
                for (t in a)
                    r.push(t);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var t = r.pop();
                        if (t in a)
                            return e.value = t,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            c.values = N,
            O.prototype = {
                constructor: O,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = l,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = l,
                    this.tryEntries.forEach(_),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = l)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(a) {
                    if (this.done)
                        throw a;
                    var r = this;
                    function e(e, t) {
                        return o.type = "throw",
                        o.arg = a,
                        r.next = e,
                        t && (r.method = "next",
                        r.arg = l),
                        !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t]
                          , o = n.completion;
                        if ("root" === n.tryLoc)
                            return e("end");
                        if (n.tryLoc <= this.prev) {
                            var c = s.call(n, "catchLoc")
                              , i = s.call(n, "finallyLoc");
                            if (c && i) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            } else if (c) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0)
                            } else {
                                if (!i)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                        var r = this.tryEntries[a];
                        if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var n = r;
                            break
                        }
                    }
                    var o = (n = n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc ? null : n) ? n.completion : {};
                    return o.type = e,
                    o.arg = t,
                    n ? (this.method = "next",
                    this.next = n.finallyLoc,
                    h) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    h
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a = this.tryEntries[t];
                        if (a.finallyLoc === e)
                            return this.complete(a.completion, a.afterLoc),
                            _(a),
                            h
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a, r, n = this.tryEntries[t];
                        if (n.tryLoc === e)
                            return "throw" === (a = n.completion).type && (r = a.arg,
                            _(n)),
                            r
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, a) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: t,
                        nextLoc: a
                    },
                    "next" === this.method && (this.arg = l),
                    h
                }
            },
            c
        }
        function c(t, e) {
            var a, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)),
            r
        }
        function Y(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(a), !0).forEach(function(e) {
                    E()(t, e, a[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return t
        }
        function i(u) {
            function e(e, t) {
                var a, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1, o = Object(U.H)(u.headerSelect, "品牌"), c = p.searchWord || {}, i = (l = Object(U.C)({
                    rangeFilter: g
                })).priceRange, l = l.moqRange, s = (null == (s = e.productTags) ? void 0 : s.length) && e.productTags.map(function(e) {
                    return e.boldText + e.normalText
                });
                Object(Q.Y)({
                    order_minimum: "".concat(e.proSkuMinOrderNum || 1),
                    order_minimum_unit: e.unitOfMeasureCode,
                    search_method: "文字",
                    search_type: "全局搜索",
                    view_type: Object(U.O)(f, u.ifShowNewListModel),
                    key_word: _,
                    key_word_type: N,
                    key_word_result_num: (null == (a = u.content) ? void 0 : a.length) || 0,
                    page: m + 1,
                    rank_type: V.e[h],
                    is_price_order_asc: 2 === h,
                    price_lowest: i.min,
                    price_hignest: i.max,
                    moq_min: l.min,
                    moq_max: l.max,
                    product_tags: s || [],
                    is_selection: v && v.showIndustryFeatured,
                    is_inventory_sufficient: v && v.inStock,
                    display_type: ["list", "sideList"].includes(f) ? "列表" : "大图",
                    search_result_rank_out: 20 * (n - 1) + (t + 1),
                    directory: e.level4CatalogueName,
                    brand_name_list: o,
                    search_result_rank_inner: r + 1,
                    product_code: e.proSkuNo,
                    product_exhibition_type: V.d[e.priceType] || "",
                    product_exhibition_value: e.sellingPrice,
                    product_preferential_key: e.tagList && (null == (a = e.tagList[0]) ? void 0 : a.tagText) || "",
                    consignment_date: e.skuStock && e.skuStock.skuDeliveryDateText || "",
                    search_result_match_type: p.searchTypeText,
                    Coreword: c.coreWord || "",
                    is_sku_search: !!String(d).toUpperCase() === e.skuNo,
                    recommend_hot_word_origin_word: O || null,
                    origin_word_type: (O ? "搜索推荐热词" : k && "自定义热词") || null,
                    request_id: u.requestId || "未返回",
                    rank_extend_info: e.extendInfo,
                    match_type: e.matchType
                })
            }
            function t() {
                var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, a = 1 < arguments.length ? arguments[1] : void 0, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1, o = Object(U.H)(u.headerSelect, "品牌"), c = null != (c = t.productTags) && c.length ? t.productTags.map(function(e) {
                    return e.boldText + e.normalText
                }) : [];
                Object(Q.N)({
                    recommend_module: "方案未定义",
                    operation_type: "方案未定义",
                    recommend_id: "方案未定义",
                    recommend_rank: a + 1,
                    search_type: "全局搜索",
                    search_result_match_type: u.searchTypeText,
                    key_word: _,
                    key_word_type: N,
                    key_word_result_num: (null == (e = u.content) ? void 0 : e.length) || 0,
                    screen_view_num: n || 1,
                    page: m + 1,
                    product_tags: c,
                    rank_type: V.e[h],
                    is_price_order_asc: 2 === h,
                    is_inventory_sufficient: v && v.inStock,
                    display_type: ["list", "sideList"].includes(f) ? "列表" : "大图",
                    search_result_rank_out: 20 * (n - 1) + (a + 1),
                    directory: t.level4CatalogueName || "",
                    brand_name_list: o,
                    search_result_rank_inner: r + 1,
                    product_code: t.proSkuNo,
                    product_exhibition_type: V.d[t.priceType] || "",
                    product_exhibition_value: t.sellingPrice,
                    product_preferential_key: t.tagList && (null == (e = t.tagList[0]) ? void 0 : e.tagText) || "",
                    consignment_date: t.skuStock && t.skuStock.skuDeliveryDateText || "未获取到数据",
                    request_id: u.requestId || "未返回",
                    rank_extend_info: t.extendInfo,
                    match_type: t.matchType,
                    order_minimum: t.proSkuMinOrderNum,
                    order_minimum_unit: t.unitOfMeasureCode,
                    is_sku_search: !1,
                    Coreword: (null == p || null == (c = p.searchWord) ? void 0 : c.coreWord) || "",
                    is_selection: 1 == t.productPositioning
                }, {
                    rangeFilter: g
                })
            }
            function a(e) {
                var t, a = e.proCatalogId, r = void 0 === (n = e.query) ? {} : n, n = e.allFilter, o = "", c = ["type", "hotSearch", "linkSearch", "hasLinkWord", "inputWord", "suggestModal"];
                for (t in r)
                    c.includes(t) && (o += "&".concat(t, "=").concat(r[t]));
                return n && u.headerSelect && u.headerSelect.length && (e = u.headerSelect.find(function(e) {
                    return "品牌" === e.title
                })) && e.id && (n = "object" === R()(e.id) ? e.id.join("||") : e.id,
                o += "&brandIds=".concat(n)),
                "/search.html?keywords=".concat(Object(K.B)({
                    keyword: r.keyword
                }), "&catalogId=").concat(a).concat(o)
            }
            var r = u.dispatch
              , n = u.injectConst
              , d = u.keyword
              , p = u.listInfo
              , o = u.breadcrumbs
              , c = u.total
              , f = u.viewType
              , i = u.isLoading
              , m = u.from
              , l = u.noData
              , s = u.citycode
              , h = u.sort
              , v = u.extraFilter
              , g = u.rangeFilter
              , y = u.urlWithQuery
              , b = u.url
              , w = n.query
              , E = w.linkSearch
              , k = w.hotSearch
              , S = w.isHistory
              , w = w.keyFrom
              , _ = Object(U.l)(d)
              , O = Object(U.l)(w)
              , N = (S ? "历史搜索" : p.searchWord && p.searchWord.correctWord && "纠错词") || (E ? "联想词搜索" : k && "热门搜索") || "自由搜索"
              , w = Object(H.useState)(!1)
              , S = B()(w, 2)
              , E = S[0]
              , j = S[1]
              , w = Object(H.useState)("")
              , S = B()(w, 2)
              , w = S[0]
              , S = S[1]
              , b = Object(H.useState)(b)
              , b = B()(b, 2)
              , x = b[0]
              , L = b[1]
              , b = Object(H.useState)(!1)
              , b = B()(b, 2)
              , I = b[0]
              , T = b[1]
              , P = W.a.createRef()
              , b = Object(H.useState)(!1)
              , b = B()(b, 2)
              , C = b[0]
              , F = b[1]
              , b = null != o && o.length ? o.filter(function(e) {
                return 2 < e.levels
            }) : []
              , M = Object(H.useState)("auto")
              , M = B()(M, 2)
              , D = M[0]
              , q = M[1];
            Object(H.useEffect)(function() {
                var e = P.current.offsetWidth;
                q(1168 - e)
            }, []),
            Object(H.useEffect)(function() {
                j(n.isLogin)
            }, []),
            Object(H.useEffect)(function() {
                L(y),
                T(!0)
            }, []),
            Object(H.useEffect)(function() {
                var e, t, c, i, l, s;
                u.ifHidePrice && r({
                    type: "catalog/getSellingPrice"
                }),
                r({
                    type: "catalog/getDeliverTime"
                }),
                u.ifHideSpu && r({
                    type: "catalog/getSpuThumbInfo"
                }),
                e = {
                    scene: 1,
                    traceId: u.traceId,
                    listLoadTime: u.listLoadTime
                },
                t = e.channel,
                c = void 0 === t ? 1 : t,
                t = e.scene,
                i = void 0 === t ? 1 : t,
                t = e.traceId,
                l = void 0 === t ? "" : t,
                s = e.listLoadTime,
                window.addEventListener("load", function() {
                    var e = (null == (e = window) || null == (e = e.performance) ? void 0 : e.timing) || {}
                      , t = e.connectEnd
                      , a = e.navigationStart
                      , r = e.requestStart
                      , n = e.responseEnd
                      , o = e.domLoading
                      , e = e.domContentLoadedEventEnd
                      , o = e - o
                      , t = [{
                        businessType: "链接网络",
                        elapsed: t - a
                    }, {
                        businessType: "资源请求",
                        elapsed: n - r
                    }, {
                        businessType: "DOM加载",
                        elapsed: o
                    }, {
                        businessType: "搜索接口耗时",
                        elapsed: s
                    }, {
                        businessType: "页面总耗时",
                        elapsed: e - a
                    }]
                      , n = Object(U.t)("_znt");
                    n && (t = t.concat({
                        businessType: "node端耗时",
                        elapsed: r = +n
                    }, {
                        businessType: "前端计算总耗时",
                        elapsed: r + o
                    }),
                    Object(U.ob)("_znt")),
                    e = {
                        channel: c,
                        traceId: l,
                        items: t,
                        scene: i,
                        type: 1
                    },
                    Object(ke.a)({
                        url: "/servezkhApi/log/search",
                        method: "post",
                        data: e
                    })
                }),
                document.addEventListener("DOMContentLoaded", function() {
                    var e;
                    F(!0),
                    e = p.searchWord || {},
                    Object(Q.W)({
                        is_sku_search: !1,
                        search_method: "文字",
                        search_type: "全局搜索",
                        key_word: _,
                        view_type: Object(U.O)(f, u.ifShowNewListModel),
                        error_correction_word: e.correctWord || "",
                        key_word_type: N,
                        search_result_match_type: p.searchTypeText,
                        search_result_match_num: p.skuTotalHits,
                        Coreword: e.coreWord || "",
                        request_id: u.requestId || "未返回",
                        recommend_hot_word_origin_word: O || null,
                        origin_word_type: (O ? "搜索推荐热词" : k && "自定义热词") || null
                    })
                })
            }, []),
            Object(Ee.a)(n, u.user);
            return W.a.createElement("div", {
                className: "catalog-wrap",
                "data-v-8d5610c9": ""
            }, W.a.createElement(Z.a, {
                "data-v-8d5610c9": ""
            }), W.a.createElement(J.a, {
                navs: u.navs,
                query: n.query,
                "data-v-8d5610c9": ""
            }), W.a.createElement(G.a, {
                keywords: _,
                commonKeyword: w,
                setCurKeyword: S,
                stopUtmKeyword: !0,
                "data-v-8d5610c9": ""
            }), W.a.createElement("div", {
                className: "list-inner",
                "data-v-8d5610c9": ""
            }, W.a.createElement(A.a, {
                isShow: i,
                "data-v-8d5610c9": ""
            }, W.a.createElement("div", {
                className: "loading-wrap",
                "data-v-8d5610c9": ""
            }, W.a.createElement("div", {
                className: "loading-box",
                "data-v-8d5610c9": ""
            }))), W.a.createElement("div", {
                className: "clearfix crumbs-info-box",
                "data-v-8d5610c9": ""
            }, W.a.createElement("div", {
                className: "search-crumbs-wrap",
                ref: P,
                "data-v-8d5610c9": ""
            }, W.a.createElement("a", {
                href: "/search.html?keywords=".concat(Object(K.B)({
                    keyword: d
                })),
                className: "search-crumbs-item",
                "data-v-8d5610c9": ""
            }, "全部结果"), b.length ? W.a.createElement("div", {
                className: "search-crumbs-item",
                "data-v-8d5610c9": ""
            }, W.a.createElement(te.a, {
                breadcrumbs: b,
                getUrl: a,
                query: Y(Y({}, n.query), {}, {
                    keyword: d
                }),
                isSeo: !1,
                "data-v-8d5610c9": ""
            })) : "", W.a.createElement("span", {
                className: "search-crumbs-item keyword",
                "data-v-8d5610c9": ""
            }, '"', _, '"')), W.a.createElement(le, {
                infoWidth: D,
                isDOMLoaded: C,
                "data-v-8d5610c9": ""
            }), !(null != (M = u.headerSelect) && M.length) && W.a.createElement(Se.a, {
                "data-v-8d5610c9": ""
            })), p.brand ? W.a.createElement(ie, {
                data: p.brand,
                "data-v-8d5610c9": ""
            }) : "", W.a.createElement(me.a, {
                "data-v-8d5610c9": ""
            }), W.a.createElement(ae.a, {
                hasShare: !0,
                headerSelect: u.headerSelect,
                deleteSelectCallBack: function(e, t) {
                    Object(z.a)(e, t),
                    Object(Q.q)({
                        search_type: "搜索列表",
                        key_word: _,
                        key_word_type: N,
                        request_id: u.requestId || "未返回",
                        rank_content: V.e[h],
                        fliter_operation_type: "减少",
                        fliter_title: t.title,
                        fliter_content: t ? [t.value] : []
                    }, {
                        catalogs: o,
                        rangeFilter: g
                    })
                },
                "data-v-8d5610c9": ""
            }), W.a.createElement(A.a, {
                isShow: !l,
                "data-v-8d5610c9": ""
            }, W.a.createElement(re.a, {
                selectCallBack: function(e, t, a) {
                    Object(z.b)(e, t, a),
                    Object(Q.q)({
                        search_type: "搜索列表",
                        key_word: _,
                        key_word_type: N,
                        request_id: u.requestId || "未返回",
                        rank_content: V.e[h],
                        fliter_operation_type: "增加",
                        fliter_title: t.title,
                        fliter_content: t ? [t.label] : []
                    }, {
                        catalogs: o,
                        rangeFilter: g
                    })
                },
                getUrl: function(e) {
                    return a(Y(Y({}, e), {}, {
                        allFilter: !0
                    }))
                },
                isSeo: !1,
                isSearchPage: !0,
                "data-v-8d5610c9": ""
            })), W.a.createElement(se.a, {
                onClick: function(e) {
                    Object(Q.b)({
                        banner_module: "搜索悬浮运营位",
                        operation_type: "点击",
                        mk_id: 1,
                        banner_name: "",
                        banner_rank: 1,
                        banner_type: "",
                        banner_content: (null == e ? void 0 : e.redirectUrl) || "无链接"
                    })
                },
                adType: 1,
                keyWord: d,
                "data-v-8d5610c9": ""
            }), W.a.createElement(ne.a, {
                hideTitle: u.ifShowNewListModel,
                skuTotalHits: u.skuTotalHits,
                viewType: u.viewType,
                sort: h,
                extraFilter: v,
                rangeFilter: g,
                handleFilterChange: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(Q.Q)({
                        rank_scenario: "搜索结果页",
                        search_type: "全局搜索",
                        key_word: _ || "",
                        key_word_type: N,
                        request_id: u.requestId
                    }, e)
                },
                isLogin: E,
                cartList: u.cartList,
                requestId: u.requestId,
                "data-v-8d5610c9": ""
            }), W.a.createElement(A.a, {
                isShow: !l,
                "data-v-8d5610c9": ""
            }, "pic" === f || "sidePic" === f ? W.a.createElement(de.a, {
                from: m,
                isLogin: E,
                cityCode: s.cityCode,
                content: u.content,
                spuThumbInfo: u.spuThumbInfo,
                ifHidePrice: u.ifHidePrice,
                priceInfoMap: u.priceInfoMap,
                stockInfoMap: u.stockInfoMap,
                isPriceReady: !0,
                viewType: f,
                keyword: d,
                requestId: u.requestId,
                copyReord: !0,
                onClick: e,
                onShow: t,
                collectCallBack: function(e, t) {
                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    ("1" == t ? Object(Q.L) : Object(Q.K))({
                        key_word: _,
                        request_id: u.requestId,
                        product_code: null == a ? void 0 : a.proSkuNo,
                        product_exhibition_type: V.d[null == a ? void 0 : a.priceType] || "",
                        product_exhibition_value: null == a ? void 0 : a.sellingPrice
                    })
                },
                "data-v-8d5610c9": ""
            }) : W.a.createElement(W.a.Fragment, null, u.ifShowNewListModel ? W.a.createElement(ue.a, {
                isLogin: E,
                content: u.content,
                ifHidePrice: u.ifHidePrice,
                isPriceReady: !0,
                priceInfoMap: u.priceInfoMap,
                stockInfoMap: u.stockInfoMap,
                viewType: f,
                keyword: d,
                cartList: u.cartList,
                requestId: u.requestId,
                onClick: e,
                onShow: t,
                "data-v-8d5610c9": ""
            }) : W.a.createElement(pe.a, {
                isLogin: E,
                content: u.content,
                ifHidePrice: u.ifHidePrice,
                priceInfoMap: u.priceInfoMap,
                stockInfoMap: u.stockInfoMap,
                isPriceReady: !0,
                viewType: f,
                copyReord: !0,
                keyword: d,
                cartList: u.cartList,
                requestId: u.requestId,
                onClick: e,
                onShow: t,
                "data-v-8d5610c9": ""
            })), C ? W.a.createElement(fe.a, {
                viewType: f,
                keyword: d,
                requestId: u.requestId,
                cartList: u.cartList,
                from: m,
                section: u.section,
                ifShowNewListModel: u.ifShowNewListModel,
                hasNextSection: u.hasNextSection,
                listQueryParams: u.listQueryParams,
                onClick: e,
                onShow: t,
                "data-v-8d5610c9": ""
            }) : null), W.a.createElement(A.a, {
                isShow: 60 < c,
                "data-v-8d5610c9": ""
            }, W.a.createElement("div", {
                className: "pagination-wrap",
                "data-v-8d5610c9": ""
            }, W.a.createElement(ee.a, {
                pageSize: "60",
                current: m + 1,
                total: c,
                onChange: function(e, t) {
                    r({
                        type: "catalog/getListInfo",
                        payload: {
                            from: t - 1,
                            section: 1
                        }
                    }),
                    Object(U.pb)("staticFilter"),
                    Object(Q.D)({
                        module: "搜索结果",
                        operation_type: V.c[e],
                        page: t,
                        jump_page: "jump" == e ? t : "",
                        category_first: Object(K.j)(o, 1),
                        category_second: Object(K.j)(o, 2),
                        category_third: Object(K.j)(o, 3),
                        category_fourth: Object(K.j)(o, 4),
                        search_type: "全局搜索",
                        request_id: u.requestId,
                        key_word: _ || "",
                        key_word_type: N
                    })
                },
                urlPrefix: x,
                isClientSide: I,
                "data-v-8d5610c9": ""
            }))), C ? W.a.createElement(be, {
                "data-v-8d5610c9": ""
            }) : null), C ? W.a.createElement(W.a.Fragment, null, W.a.createElement(X.a, {
                "data-v-8d5610c9": ""
            }), W.a.createElement(we.a, {
                listInfo: u.listInfo,
                "data-v-8d5610c9": ""
            })) : null, W.a.createElement($.a, {
                "data-v-8d5610c9": ""
            }))
        }
        t(323),
        t(51),
        i.getInitialProps = function(e, t) {
            return (o = o || r()(P().mark(function e(t, a) {
                return P().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.all([t.store.dispatch({
                                type: "common/updateTodo",
                                payload: {
                                    injectConst: t.app.config.injectConst
                                }
                            }), t.store.dispatch({
                                type: "common/getUserCityData",
                                payload: {
                                    ctx: t
                                }
                            })]);
                        case 2:
                            return e.t0 = Promise,
                            e.t1 = t.store.dispatch({
                                type: "common/getBaseData",
                                payload: {
                                    ctx: t,
                                    classIds: "3"
                                }
                            }),
                            e.next = 6,
                            t.store.dispatch({
                                type: "catalog/getPageData",
                                payload: {
                                    ctx: t
                                }
                            });
                        case 6:
                            return e.t2 = e.sent,
                            e.next = 9,
                            t.store.dispatch({
                                type: "catalog/setUrlWithQuery",
                                payload: {
                                    ctx: t
                                }
                            });
                        case 9:
                            return e.t3 = e.sent,
                            e.t4 = [e.t1, e.t2, e.t3],
                            e.next = 13,
                            e.t0.all.call(e.t0, e.t4);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        ,
        e.default = Object(a.connect)(function(e) {
            return {
                navs: e.common.navs,
                injectConst: e.common.injectConst,
                user: e.common.user,
                citycode: e.common.citycode,
                scrollTop: e.common.scrollTop,
                traceId: e.catalog.traceId,
                listLoadTime: e.catalog.listLoadTime,
                listInfo: e.catalog.listInfo,
                breadcrumbs: e.catalog.breadcrumbs,
                catalogId: e.catalog.catalogId,
                brandId: e.catalog.brandId,
                total: e.catalog.total,
                viewType: -1 !== e.catalog.viewType.indexOf("side") ? "pic" : e.catalog.viewType,
                isLoading: e.catalog.isLoading,
                keyword: e.catalog.keyword,
                noData: e.catalog.noData,
                content: e.catalog.content,
                priceInfoMap: e.catalog.priceInfoMap,
                stockInfoMap: e.catalog.stockInfoMap,
                ifHidePrice: e.catalog.ifHidePrice,
                ifShowNewListModel: e.catalog.ifShowNewListModel,
                from: e.catalog.from,
                requestId: e.catalog.requestId,
                skuTotalHits: e.catalog.skuTotalHits,
                headerSelect: e.catalog.headerSelect,
                ifHideSpu: e.catalog.ifHideSpu,
                spuThumbInfo: e.catalog.spuThumbInfo,
                sort: e.catalog.sort,
                extraFilter: e.catalog.extraFilter,
                rangeFilter: e.catalog.rangeFilter,
                cartList: e.catalog.cartList,
                section: e.catalog.section,
                hasNextSection: e.catalog.hasNextSection,
                listQueryParams: e.catalog.listQueryParams,
                urlWithQuery: e.catalog.urlWithQuery,
                url: e.catalog.url,
                searchTypeText: e.catalog.searchTypeText
            }
        })(i)
    },
    382: function(i, e, t) {
        "use strict";
        t.r(e);
        var a = t(6)
          , j = t.n(a)
          , a = t(13)
          , r = t.n(a)
          , a = t(1)
          , F = t.n(a)
          , M = (t(19),
        t(0))
          , D = t.n(M)
          , a = t(7)
          , q = t(40)
          , R = t(30)
          , B = t(28)
          , H = t(29)
          , W = t(27)
          , G = t(38)
          , A = t(17)
          , n = t(10);
        t(324);
        function U(e) {
            var t = e.info;
            return D.a.createElement("div", {
                className: "brand-intro",
                "data-v-88b6ad34": ""
            }, D.a.createElement("div", {
                "data-v-88b6ad34": ""
            }, D.a.createElement("div", {
                className: "brand-title",
                "data-v-88b6ad34": ""
            }, (t = t || {}).proBrandSmallLogo ? D.a.createElement("img", {
                className: "brand-logo",
                src: t.proBrandSmallLogo,
                onError: function(e) {
                    Object(n.D)(e, t.proBrandSmallLogo)
                },
                "data-v-88b6ad34": ""
            }) : D.a.createElement("div", {
                className: "brand-name",
                "data-v-88b6ad34": ""
            }, D.a.createElement("span", {
                "data-v-88b6ad34": ""
            }, t.proBrandName))), D.a.createElement("div", {
                "data-v-88b6ad34": ""
            }, D.a.createElement("span", {
                className: "brand-description",
                "data-v-88b6ad34": ""
            }, t.proBrandDesc))))
        }
        var o, Q = t(117), z = t(96), K = t(118), V = t(97), Y = t(133), J = t(108), Z = t(71), X = t(72), $ = t(62), ee = t(104), te = t(106), ae = t(3), re = t(77), ne = t(26), oe = t(43), ce = t(11);
        function x() {
            x = function() {
                return c
            }
            ;
            var l, c = {}, e = Object.prototype, s = e.hasOwnProperty, u = Object.defineProperty || function(e, t, a) {
                e[t] = a.value
            }
            , t = "function" == typeof Symbol ? Symbol : {}, r = t.iterator || "@@iterator", a = t.asyncIterator || "@@asyncIterator", n = t.toStringTag || "@@toStringTag";
            function o(e, t, a) {
                return Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                o({}, "")
            } catch (l) {
                o = function(e, t, a) {
                    return e[t] = a
                }
            }
            function i(e, t, a, r) {
                var n, o, c, i, t = t && t.prototype instanceof v ? t : v, t = Object.create(t.prototype), r = new O(r || []);
                return u(t, "_invoke", {
                    value: (n = e,
                    o = a,
                    c = r,
                    i = p,
                    function(e, t) {
                        if (i === f)
                            throw new Error("Generator is already running");
                        if (i === m) {
                            if ("throw" === e)
                                throw t;
                            return {
                                value: l,
                                done: !0
                            }
                        }
                        for (c.method = e,
                        c.arg = t; ; ) {
                            var a = c.delegate;
                            if (a) {
                                a = function e(t, a) {
                                    var r = a.method
                                      , n = t.iterator[r];
                                    if (n === l)
                                        return a.delegate = null,
                                        "throw" === r && t.iterator.return && (a.method = "return",
                                        a.arg = l,
                                        e(t, a),
                                        "throw" === a.method) || "return" !== r && (a.method = "throw",
                                        a.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                                        h;
                                    r = d(n, t.iterator, a.arg);
                                    if ("throw" === r.type)
                                        return a.method = "throw",
                                        a.arg = r.arg,
                                        a.delegate = null,
                                        h;
                                    n = r.arg;
                                    return n ? n.done ? (a[t.resultName] = n.value,
                                    a.next = t.nextLoc,
                                    "return" !== a.method && (a.method = "next",
                                    a.arg = l),
                                    a.delegate = null,
                                    h) : n : (a.method = "throw",
                                    a.arg = new TypeError("iterator result is not an object"),
                                    a.delegate = null,
                                    h)
                                }(a, c);
                                if (a) {
                                    if (a === h)
                                        continue;
                                    return a
                                }
                            }
                            if ("next" === c.method)
                                c.sent = c._sent = c.arg;
                            else if ("throw" === c.method) {
                                if (i === p)
                                    throw i = m,
                                    c.arg;
                                c.dispatchException(c.arg)
                            } else
                                "return" === c.method && c.abrupt("return", c.arg);
                            i = f;
                            a = d(n, o, c);
                            if ("normal" === a.type) {
                                if (i = c.done ? m : "suspendedYield",
                                a.arg === h)
                                    continue;
                                return {
                                    value: a.arg,
                                    done: c.done
                                }
                            }
                            "throw" === a.type && (i = m,
                            c.method = "throw",
                            c.arg = a.arg)
                        }
                    }
                    )
                }),
                t
            }
            function d(e, t, a) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, a)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            c.wrap = i;
            var p = "suspendedStart"
              , f = "executing"
              , m = "completed"
              , h = {};
            function v() {}
            function g() {}
            function y() {}
            var t = {}
              , b = (o(t, r, function() {
                return this
            }),
            Object.getPrototypeOf)
              , b = b && b(b(N([])))
              , w = (b && b !== e && s.call(b, r) && (t = b),
            y.prototype = v.prototype = Object.create(t));
            function E(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    o(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function k(c, i) {
                var t;
                u(this, "_invoke", {
                    value: function(a, r) {
                        function e() {
                            return new i(function(e, t) {
                                !function t(e, a, r, n) {
                                    var o, e = d(c[e], c, a);
                                    if ("throw" !== e.type)
                                        return (a = (o = e.arg).value) && "object" == j()(a) && s.call(a, "__await") ? i.resolve(a.__await).then(function(e) {
                                            t("next", e, r, n)
                                        }, function(e) {
                                            t("throw", e, r, n)
                                        }) : i.resolve(a).then(function(e) {
                                            o.value = e,
                                            r(o)
                                        }, function(e) {
                                            return t("throw", e, r, n)
                                        });
                                    n(e.arg)
                                }(a, r, e, t)
                            }
                            )
                        }
                        return t = t ? t.then(e, e) : e()
                    }
                })
            }
            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function _(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function O(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(S, this),
                this.reset(!0)
            }
            function N(t) {
                if (t || "" === t) {
                    var a, e = t[r];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length))
                        return a = -1,
                        (e = function e() {
                            for (; ++a < t.length; )
                                if (s.call(t, a))
                                    return e.value = t[a],
                                    e.done = !1,
                                    e;
                            return e.value = l,
                            e.done = !0,
                            e
                        }
                        ).next = e
                }
                throw new TypeError(j()(t) + " is not iterable")
            }
            return u(w, "constructor", {
                value: g.prototype = y,
                configurable: !0
            }),
            u(y, "constructor", {
                value: g,
                configurable: !0
            }),
            g.displayName = o(y, n, "GeneratorFunction"),
            c.isGeneratorFunction = function(e) {
                e = "function" == typeof e && e.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            c.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                o(e, n, "GeneratorFunction")),
                e.prototype = Object.create(w),
                e
            }
            ,
            c.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            E(k.prototype),
            o(k.prototype, a, function() {
                return this
            }),
            c.AsyncIterator = k,
            c.async = function(e, t, a, r, n) {
                void 0 === n && (n = Promise);
                var o = new k(i(e, t, a, r),n);
                return c.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }
            ,
            E(w),
            o(w, n, "Generator"),
            o(w, r, function() {
                return this
            }),
            o(w, "toString", function() {
                return "[object Generator]"
            }),
            c.keys = function(e) {
                var t, a = Object(e), r = [];
                for (t in a)
                    r.push(t);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var t = r.pop();
                        if (t in a)
                            return e.value = t,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            c.values = N,
            O.prototype = {
                constructor: O,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = l,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = l,
                    this.tryEntries.forEach(_),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = l)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(a) {
                    if (this.done)
                        throw a;
                    var r = this;
                    function e(e, t) {
                        return o.type = "throw",
                        o.arg = a,
                        r.next = e,
                        t && (r.method = "next",
                        r.arg = l),
                        !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t]
                          , o = n.completion;
                        if ("root" === n.tryLoc)
                            return e("end");
                        if (n.tryLoc <= this.prev) {
                            var c = s.call(n, "catchLoc")
                              , i = s.call(n, "finallyLoc");
                            if (c && i) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            } else if (c) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0)
                            } else {
                                if (!i)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                        var r = this.tryEntries[a];
                        if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var n = r;
                            break
                        }
                    }
                    var o = (n = n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc ? null : n) ? n.completion : {};
                    return o.type = e,
                    o.arg = t,
                    n ? (this.method = "next",
                    this.next = n.finallyLoc,
                    h) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    h
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a = this.tryEntries[t];
                        if (a.finallyLoc === e)
                            return this.complete(a.completion, a.afterLoc),
                            _(a),
                            h
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a, r, n = this.tryEntries[t];
                        if (n.tryLoc === e)
                            return "throw" === (a = n.completion).type && (r = a.arg,
                            _(n)),
                            r
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, a) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: t,
                        nextLoc: a
                    },
                    "next" === this.method && (this.arg = l),
                    h
                }
            },
            c
        }
        function c(o) {
            function e(e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0
                  , r = Object(ae.H)(o.headerSelect, "品牌");
                Object(ce.I)({
                    search_type: "品牌列表",
                    page: d + 1,
                    rank_type: ne.e[h],
                    is_price_order_asc: 2 === h,
                    is_selection: v && v.showIndustryFeatured,
                    is_inventory_sufficient: v && v.inStock,
                    display_type: ["list", "sideList"].includes(l) ? "列表" : "大图",
                    search_result_rank_out: t + 1,
                    directory: e.level4CatalogueName,
                    brand_name_list: r,
                    search_result_rank_inner: a + 1,
                    product_code: e.proSkuNo,
                    product_exhibition_type: ne.d[e.priceType] || "",
                    product_exhibition_value: e.sellingPrice,
                    product_preferential_key: e.tagList && (null == (t = e.tagList[0]) ? void 0 : t.tagText) || "",
                    consignment_date: e.skuStock && e.skuStock.skuDeliveryDateText || ""
                }, {
                    rangeFilter: g
                })
            }
            function t(e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0
                  , r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1
                  , n = Object(ae.H)(o.headerSelect, "品牌");
                Object(ce.N)({
                    recommend_module: "方案未定义",
                    operation_type: "方案未定义",
                    recommend_id: "方案未定义",
                    recommend_rank: t + 1,
                    search_type: "品牌列表",
                    search_result_match_type: o.searchTypeText,
                    key_word_result_num: i,
                    screen_view_num: r || 1,
                    page: d + 1,
                    rank_type: ne.e[h],
                    is_price_order_asc: 2 === h,
                    is_inventory_sufficient: v && v.inStock,
                    display_type: ["list", "sideList"].includes(l) ? "列表" : "大图",
                    search_result_rank_out: 20 * (r - 1) + (t + 1),
                    directory: e.level4CatalogueName || "",
                    brand_name_list: n,
                    search_result_rank_inner: a + 1,
                    product_code: e.proSkuNo,
                    product_exhibition_type: ne.d[e.priceType] || "",
                    product_exhibition_value: e.sellingPrice,
                    product_preferential_key: e.tagList && (null == (r = e.tagList[0]) ? void 0 : r.tagText) || "",
                    consignment_date: e.skuStock && e.skuStock.skuDeliveryDateText || "未获取到数据",
                    match_type: e.matchType
                }, {
                    rangeFilter: g
                })
            }
            function a(e) {
                return (e = e.proCatalogId) ? "/list/b-".concat(C, ".html?catalogId=").concat(e) : "/list/b-".concat(C, ".html")
            }
            var r = o.dispatch
              , n = o.injectConst
              , c = o.breadcrumbs
              , i = o.total
              , l = o.viewType
              , s = o.isLoading
              , u = o.isLogin
              , d = o.from
              , p = o.noData
              , f = o.content
              , m = o.citycode
              , h = o.sort
              , v = (o.listInfo,
            o.extraFilter)
              , g = o.rangeFilter
              , y = o.urlWithQuery
              , b = o.url
              , w = o.brand
              , E = o.brandIds
              , k = o.catalogId
              , S = n.wwwOrigin
              , _ = n.query
              , _ = void 0 === _ ? {} : _
              , b = Object(M.useState)(b)
              , b = F()(b, 2)
              , O = b[0]
              , N = b[1]
              , b = Object(M.useState)("")
              , b = F()(b, 2)
              , j = b[0]
              , b = b[1]
              , x = Object(M.useState)(!1)
              , x = F()(x, 2)
              , L = x[0]
              , I = x[1]
              , x = Object(M.useState)(!1)
              , x = F()(x, 2)
              , T = x[0]
              , P = x[1]
              , C = E && E[0];
            Object(oe.a)(n, o.user),
            Object(M.useEffect)(function() {
                N(y),
                P(!0)
            }, []),
            Object(M.useEffect)(function() {
                o.ifHidePrice && r({
                    type: "catalog/getSellingPrice",
                    payload: {}
                }),
                r({
                    type: "catalog/getDeliverTime",
                    payload: {}
                }),
                document.addEventListener("DOMContentLoaded", function() {
                    I(!0)
                }),
                o.ifHideSpu && r({
                    type: "catalog/getSpuThumbInfo"
                })
            }, []);
            return D.a.createElement("div", {
                className: "catalog-wrap",
                "data-v-8a0d96f9": ""
            }, D.a.createElement(B.a, {
                "data-v-8a0d96f9": ""
            }), D.a.createElement(R.a, {
                catalogs: o.catalogs,
                navs: o.navs,
                injectConst: n,
                origin: n.origin,
                query: _,
                channel: "catalog",
                type: "2",
                "data-v-8a0d96f9": ""
            }), D.a.createElement(q.a, {
                commonKeyword: j,
                setCurKeyword: b,
                "data-v-8a0d96f9": ""
            }), D.a.createElement(H.a, {
                "data-v-8a0d96f9": ""
            }), D.a.createElement("div", {
                className: "list-inner",
                "data-v-8a0d96f9": ""
            }, D.a.createElement(A.a, {
                isShow: s,
                "data-v-8a0d96f9": ""
            }, D.a.createElement("div", {
                className: "loading-wrap",
                "data-v-8a0d96f9": ""
            }, D.a.createElement("div", {
                className: "loading-box",
                "data-v-8a0d96f9": ""
            }))), D.a.createElement(U, {
                info: w,
                "data-v-8a0d96f9": ""
            }), D.a.createElement(Q.a, {
                breadcrumbs: c,
                prePath: {
                    path: S,
                    name: "首页"
                },
                prePathSec: {
                    path: "/brand.html",
                    name: "品牌专区"
                },
                postPath: {
                    path: a({
                        proCatalogId: k
                    }),
                    name: w && w.proBrandName
                },
                getUrl: a,
                isSeo: !0,
                "data-v-8a0d96f9": ""
            }), D.a.createElement(z.a, {
                headerSelect: o.headerSelect,
                deleteSelectCallBack: function(e, t) {
                    Object(re.a)(e, t),
                    Object(ce.q)({
                        search_type: "品牌列表",
                        key_word: "",
                        key_word_type: "",
                        fliter_operation_type: "减少",
                        fliter_title: t.title,
                        fliter_content: t ? [t.value] : []
                    }, {
                        catalogs: c,
                        rangeFilter: g
                    })
                },
                "data-v-8a0d96f9": ""
            }), D.a.createElement(K.a, {
                selectCallBack: function(e, t, a) {
                    Object(re.b)(e, t, a),
                    Object(ce.q)({
                        search_type: "品牌列表",
                        key_word: "",
                        key_word_type: "",
                        fliter_operation_type: "增加",
                        fliter_title: t.title,
                        fliter_content: t ? [t.label] : []
                    }, {
                        catalogs: c,
                        rangeFilter: g
                    })
                },
                getUrl: a,
                isSeo: !0,
                isWithoutBrand: !0,
                "data-v-8a0d96f9": ""
            }), D.a.createElement(Y.a, {
                isLogin: u,
                adType: 3,
                keyWord: C,
                "data-v-8a0d96f9": ""
            }), D.a.createElement($.a, {
                "data-v-8a0d96f9": ""
            }), D.a.createElement(A.a, {
                isShow: p,
                "data-v-8a0d96f9": ""
            }, D.a.createElement("div", {
                className: "no-result-wrap",
                "data-v-8a0d96f9": ""
            }, o.listInfo && 1 == o.listInfo.codeForBlank ? D.a.createElement("div", {
                className: "tips",
                "data-v-8a0d96f9": ""
            }, o.listInfo.msgForBlank) : D.a.createElement("div", {
                className: "tips",
                "data-v-8a0d96f9": ""
            }, "抱歉，没有找到符合条件的产品，别沮丧，快去联系", D.a.createElement("span", {
                className: "find-service",
                "data-v-8a0d96f9": ""
            }, "专属在线客服"), "试试吧~", D.a.createElement("span", {
                className: "find-service-btn",
                "data-v-8a0d96f9": ""
            }, "咨询客服")))), D.a.createElement(V.a, {
                skuTotalHits: o.skuTotalHits,
                viewType: o.viewType,
                sort: h,
                extraFilter: v,
                rangeFilter: g,
                handleFilterChange: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(ce.Q)({
                        rank_scenario: "品牌列表",
                        search_type: "垂直搜索",
                        key_word: "",
                        key_word_type: ""
                    }, e)
                },
                isLogin: u,
                cartList: o.cartList,
                "data-v-8a0d96f9": ""
            }), D.a.createElement(A.a, {
                isShow: !p,
                "data-v-8a0d96f9": ""
            }, "pic" === l || "sidePic" === l ? D.a.createElement(D.a.Fragment, null, D.a.createElement("div", {
                className: "goods-wrap",
                "data-v-8a0d96f9": ""
            }, "sidePic" === l ? D.a.createElement(J.a, {
                "data-v-8a0d96f9": ""
            }) : null, D.a.createElement(Z.a, {
                isLogin: u,
                cityCode: m.cityCode,
                from: d,
                content: f,
                priceInfoMap: o.priceInfoMap,
                stockInfoMap: o.stockInfoMap,
                spuThumbInfo: o.spuThumbInfo,
                isPriceReady: !0,
                viewType: l,
                onClick: e,
                onShow: t,
                "data-v-8a0d96f9": ""
            }))) : D.a.createElement(D.a.Fragment, null, D.a.createElement("div", {
                className: "list-item-wrap clearfix",
                "data-v-8a0d96f9": ""
            }, "sideList" === l ? D.a.createElement(J.a, {
                "data-v-8a0d96f9": ""
            }) : null, D.a.createElement(X.a, {
                isLogin: u,
                content: f,
                priceInfoMap: o.priceInfoMap,
                stockInfoMap: o.stockInfoMap,
                isPriceReady: !0,
                viewType: l,
                cartList: o.cartList,
                onClick: e,
                onShow: t,
                "data-v-8a0d96f9": ""
            }))), L ? D.a.createElement(ee.a, {
                viewType: l,
                from: d,
                cartList: o.cartList,
                section: o.section,
                hasNextSection: o.hasNextSection,
                listQueryParams: o.listQueryParams,
                onClick: e,
                onShow: t,
                "data-v-8a0d96f9": ""
            }) : null), D.a.createElement("div", {
                style: {
                    height: "20px"
                },
                "data-v-8a0d96f9": ""
            }), D.a.createElement(A.a, {
                isShow: 60 < i,
                "data-v-8a0d96f9": ""
            }, D.a.createElement("div", {
                className: "pagination-wrap",
                "data-v-8a0d96f9": ""
            }, D.a.createElement(G.a, {
                pageSize: "60",
                current: d + 1,
                total: i,
                onChange: function(e, t) {
                    r({
                        type: "catalog/getListInfo",
                        payload: {
                            from: t - 1
                        }
                    }),
                    Object(ae.pb)("staticFilter")
                },
                urlPrefix: O,
                isClientSide: T,
                "data-v-8a0d96f9": ""
            })))), L ? D.a.createElement(te.a, {
                listInfo: o.listInfo,
                "data-v-8a0d96f9": ""
            }) : null, D.a.createElement(W.a, {
                "data-v-8a0d96f9": ""
            }))
        }
        t(325),
        t(51),
        c.getInitialProps = function(e) {
            return (o = o || r()(x().mark(function e(t) {
                return x().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.all([t.store.dispatch({
                                type: "common/updateTodo",
                                payload: {
                                    injectConst: t.app.config.injectConst
                                }
                            }), t.store.dispatch({
                                type: "common/getBaseData",
                                payload: {
                                    ctx: t,
                                    classIds: "3"
                                }
                            }), t.store.dispatch({
                                type: "common/getUserCityData",
                                payload: {
                                    ctx: t
                                }
                            })]);
                        case 2:
                            return e.next = 4,
                            Promise.all([t.store.dispatch({
                                type: "catalog/getPageData",
                                payload: {
                                    ctx: t
                                }
                            }), t.store.dispatch({
                                type: "catalog/setUrlWithQuery",
                                payload: {
                                    ctx: t
                                }
                            }), t.store.dispatch({
                                type: "catalog/getPageTdk",
                                payload: {
                                    ctx: t,
                                    pageType: "brand"
                                }
                            })]);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        ,
        e.default = Object(a.connect)(function(e) {
            return {
                navs: e.common.navs,
                catalogs: e.common.catalogs,
                injectConst: e.common.injectConst,
                citycode: e.common.citycode,
                scrollTop: e.common.scrollTop,
                breadcrumbs: e.catalog.breadcrumbs,
                catalogId: e.catalog.catalogId,
                listInfo: e.catalog.listInfo,
                brandId: e.catalog.brandId,
                brand: e.catalog.brand,
                brandIds: e.catalog.brandIds,
                total: e.catalog.total,
                viewType: e.catalog.viewType,
                isLoading: e.catalog.isLoading,
                isLogin: e.common.injectConst.isLogin,
                noData: e.catalog.noData,
                content: e.catalog.content,
                ifHidePrice: e.catalog.ifHidePrice,
                priceInfoMap: e.catalog.priceInfoMap,
                stockInfoMap: e.catalog.stockInfoMap,
                from: e.catalog.from,
                skuTotalHits: e.catalog.skuTotalHits,
                headerSelect: e.catalog.headerSelect,
                ifHideSpu: e.catalog.ifHideSpu,
                spuThumbInfo: e.catalog.spuThumbInfo,
                sort: e.catalog.sort,
                extraFilter: e.catalog.extraFilter,
                rangeFilter: e.catalog.rangeFilter,
                urlWithQuery: e.catalog.urlWithQuery,
                url: e.catalog.url,
                cartList: e.catalog.cartList,
                section: e.catalog.section,
                searchTypeText: e.catalog.searchTypeText,
                hasNextSection: e.catalog.hasNextSection,
                listQueryParams: e.catalog.listQueryParams,
                user: e.common.user
            }
        })(c)
    },
    383: function(g, e, t) {
        "use strict";
        t.r(e);
        var a = t(5)
          , r = t.n(a)
          , a = t(8)
          , G = t.n(a)
          , a = t(6)
          , A = t.n(a)
          , a = t(13)
          , U = t.n(a)
          , a = t(1)
          , Q = t.n(a)
          , z = (t(19),
        t(0))
          , K = t.n(z)
          , a = t(7)
          , V = t(40)
          , n = t(21)
          , o = t.n(n)
          , n = t(23)
          , c = t.n(n)
          , n = t(22)
          , i = t.n(n)
          , n = t(24)
          , l = t.n(n)
          , n = t(18)
          , s = t.n(n)
          , u = t(45)
          , n = t(48)
          , d = t.n(n)
          , Y = (t(326),
        t(11))
          , J = t(74);
        function p(e) {
            e = e.onClick;
            return K.a.createElement("a", {
                className: "banner-arrow banner-right-arrow",
                href: "javascript:void(0);",
                onClick: e,
                "data-v-6967d70b": ""
            }, K.a.createElement("i", {
                className: "iconfont bg-right-arrow",
                "data-v-6967d70b": ""
            }, ""))
        }
        function f(e) {
            e = e.onClick;
            return K.a.createElement("a", {
                className: "banner-arrow banner-left-arrow",
                href: "javascript:void(0);",
                onClick: e,
                "data-v-6967d70b": ""
            }, K.a.createElement("i", {
                className: "iconfont bg-left-arrow",
                "data-v-6967d70b": ""
            }, ""))
        }
        var m, Z = function(e) {
            i()(n, e);
            a = n,
            r = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            var a, r, t = function() {
                var e, t = s()(a);
                return e = r ? (e = s()(this).constructor,
                Reflect.construct(t, arguments, e)) : t.apply(this, arguments),
                l()(this, e)
            };
            function n() {
                return o()(this, n),
                t.apply(this, arguments)
            }
            return c()(n, [{
                key: "handleBannerClick",
                value: function(e, t) {
                    Object(Y.b)({
                        banner_module: this.props.searchSceneName,
                        operation_type: "点击",
                        mk_id: t + 1,
                        banner_name: e.name,
                        banner_rank: t + 1,
                        banner_type: "",
                        banner_content: e.linkUrl
                    })
                }
            }, {
                key: "bannerShow",
                value: function(e) {
                    var t = this.props.banners || [];
                    e && t.length && Object(Y.c)({
                        banner_module: this.props.searchSceneName,
                        banner_id: 1,
                        banner_name: t[0].name,
                        banner_rank: 1,
                        banner_type: "",
                        banner_content: t[0].linkUrl
                    })
                }
            }, {
                key: "listItems",
                value: function() {
                    var a = this;
                    return (this.props.banners || []).map(function(e, t) {
                        return K.a.createElement("div", {
                            className: "banner-item",
                            key: "banner_" + t,
                            onClick: a.handleBannerClick.bind(a, e, t),
                            "data-v-6967d70b": ""
                        }, K.a.createElement(J.a, {
                            src: e.imageUrl,
                            alt: e.name,
                            "data-v-6967d70b": ""
                        }), e.linkUrl && K.a.createElement("div", {
                            className: "banner-con-link",
                            "data-v-6967d70b": ""
                        }, K.a.createElement("a", {
                            href: e.linkUrl,
                            target: "javascript:void(null);" === e.linkUrl ? "" : "_blank",
                            "data-content": e.name,
                            "data-v-6967d70b": ""
                        })))
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = {
                        dots: !0,
                        infinite: !0,
                        autoplay: !0,
                        fade: !0,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        nextArrow: K.a.createElement(p, {
                            onClick: function() {
                                var e = t.props.searchSceneName;
                                Object(Y.b)({
                                    banner_module: e,
                                    operation_type: "左滑",
                                    mk_id: "",
                                    banner_name: "",
                                    banner_rank: "",
                                    banner_type: "",
                                    banner_content: ""
                                })
                            },
                            "data-v-6967d70b": ""
                        }),
                        prevArrow: K.a.createElement(f, {
                            onClick: function() {
                                var e = t.props.searchSceneName;
                                Object(Y.b)({
                                    banner_module: e,
                                    operation_type: "右滑",
                                    mk_id: "",
                                    banner_name: "",
                                    banner_rank: "",
                                    banner_type: "",
                                    banner_content: ""
                                })
                            },
                            "data-v-6967d70b": ""
                        }),
                        appendDots: function(e) {
                            return K.a.createElement("ul", {
                                "data-v-6967d70b": ""
                            }, e)
                        },
                        customPaging: function(e) {
                            return K.a.createElement("div", {
                                className: "banner-point",
                                key: e,
                                "data-v-6967d70b": ""
                            })
                        }
                    };
                    return K.a.createElement(u.InView, {
                        as: "div",
                        threshold: .7,
                        triggerOnce: !0,
                        onChange: function(e) {
                            return t.bannerShow(e)
                        },
                        className: "banner-box-wrap banner-container",
                        "data-v-6967d70b": ""
                    }, K.a.createElement(d.a, G()({}, e, {
                        className: "banner-list-con",
                        "data-v-6967d70b": ""
                    }), this.listItems()))
                }
            }]),
            n
        }(K.a.Component), ie = t(30), le = t(28), se = t(29), ue = t(27), de = t(38), X = t(17), pe = t(117), fe = t(96), me = t(118), he = t(97), $ = t(108), ve = t(71), ge = t(72), ye = t(62), ee = t(98), te = t(70), ae = t(3), be = t(43), re = t(77), we = t(104), ne = t(26), Ee = t(10), ke = t(106), n = t(148), Se = t.n(n);
        function h(t, e) {
            var a, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)),
            r
        }
        function oe(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? h(Object(a), !0).forEach(function(e) {
                    r()(t, e, a[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : h(Object(a)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return t
        }
        function ce() {
            ce = function() {
                return c
            }
            ;
            var l, c = {}, e = Object.prototype, s = e.hasOwnProperty, u = Object.defineProperty || function(e, t, a) {
                e[t] = a.value
            }
            , t = "function" == typeof Symbol ? Symbol : {}, r = t.iterator || "@@iterator", a = t.asyncIterator || "@@asyncIterator", n = t.toStringTag || "@@toStringTag";
            function o(e, t, a) {
                return Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                o({}, "")
            } catch (l) {
                o = function(e, t, a) {
                    return e[t] = a
                }
            }
            function i(e, t, a, r) {
                var n, o, c, i, t = t && t.prototype instanceof v ? t : v, t = Object.create(t.prototype), r = new O(r || []);
                return u(t, "_invoke", {
                    value: (n = e,
                    o = a,
                    c = r,
                    i = p,
                    function(e, t) {
                        if (i === f)
                            throw new Error("Generator is already running");
                        if (i === m) {
                            if ("throw" === e)
                                throw t;
                            return {
                                value: l,
                                done: !0
                            }
                        }
                        for (c.method = e,
                        c.arg = t; ; ) {
                            var a = c.delegate;
                            if (a) {
                                a = function e(t, a) {
                                    var r = a.method
                                      , n = t.iterator[r];
                                    if (n === l)
                                        return a.delegate = null,
                                        "throw" === r && t.iterator.return && (a.method = "return",
                                        a.arg = l,
                                        e(t, a),
                                        "throw" === a.method) || "return" !== r && (a.method = "throw",
                                        a.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                                        h;
                                    r = d(n, t.iterator, a.arg);
                                    if ("throw" === r.type)
                                        return a.method = "throw",
                                        a.arg = r.arg,
                                        a.delegate = null,
                                        h;
                                    n = r.arg;
                                    return n ? n.done ? (a[t.resultName] = n.value,
                                    a.next = t.nextLoc,
                                    "return" !== a.method && (a.method = "next",
                                    a.arg = l),
                                    a.delegate = null,
                                    h) : n : (a.method = "throw",
                                    a.arg = new TypeError("iterator result is not an object"),
                                    a.delegate = null,
                                    h)
                                }(a, c);
                                if (a) {
                                    if (a === h)
                                        continue;
                                    return a
                                }
                            }
                            if ("next" === c.method)
                                c.sent = c._sent = c.arg;
                            else if ("throw" === c.method) {
                                if (i === p)
                                    throw i = m,
                                    c.arg;
                                c.dispatchException(c.arg)
                            } else
                                "return" === c.method && c.abrupt("return", c.arg);
                            i = f;
                            a = d(n, o, c);
                            if ("normal" === a.type) {
                                if (i = c.done ? m : "suspendedYield",
                                a.arg === h)
                                    continue;
                                return {
                                    value: a.arg,
                                    done: c.done
                                }
                            }
                            "throw" === a.type && (i = m,
                            c.method = "throw",
                            c.arg = a.arg)
                        }
                    }
                    )
                }),
                t
            }
            function d(e, t, a) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, a)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            c.wrap = i;
            var p = "suspendedStart"
              , f = "executing"
              , m = "completed"
              , h = {};
            function v() {}
            function g() {}
            function y() {}
            var t = {}
              , b = (o(t, r, function() {
                return this
            }),
            Object.getPrototypeOf)
              , b = b && b(b(N([])))
              , w = (b && b !== e && s.call(b, r) && (t = b),
            y.prototype = v.prototype = Object.create(t));
            function E(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    o(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function k(c, i) {
                var t;
                u(this, "_invoke", {
                    value: function(a, r) {
                        function e() {
                            return new i(function(e, t) {
                                !function t(e, a, r, n) {
                                    var o, e = d(c[e], c, a);
                                    if ("throw" !== e.type)
                                        return (a = (o = e.arg).value) && "object" == A()(a) && s.call(a, "__await") ? i.resolve(a.__await).then(function(e) {
                                            t("next", e, r, n)
                                        }, function(e) {
                                            t("throw", e, r, n)
                                        }) : i.resolve(a).then(function(e) {
                                            o.value = e,
                                            r(o)
                                        }, function(e) {
                                            return t("throw", e, r, n)
                                        });
                                    n(e.arg)
                                }(a, r, e, t)
                            }
                            )
                        }
                        return t = t ? t.then(e, e) : e()
                    }
                })
            }
            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function _(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function O(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(S, this),
                this.reset(!0)
            }
            function N(t) {
                if (t || "" === t) {
                    var a, e = t[r];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length))
                        return a = -1,
                        (e = function e() {
                            for (; ++a < t.length; )
                                if (s.call(t, a))
                                    return e.value = t[a],
                                    e.done = !1,
                                    e;
                            return e.value = l,
                            e.done = !0,
                            e
                        }
                        ).next = e
                }
                throw new TypeError(A()(t) + " is not iterable")
            }
            return u(w, "constructor", {
                value: g.prototype = y,
                configurable: !0
            }),
            u(y, "constructor", {
                value: g,
                configurable: !0
            }),
            g.displayName = o(y, n, "GeneratorFunction"),
            c.isGeneratorFunction = function(e) {
                e = "function" == typeof e && e.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            c.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                o(e, n, "GeneratorFunction")),
                e.prototype = Object.create(w),
                e
            }
            ,
            c.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            E(k.prototype),
            o(k.prototype, a, function() {
                return this
            }),
            c.AsyncIterator = k,
            c.async = function(e, t, a, r, n) {
                void 0 === n && (n = Promise);
                var o = new k(i(e, t, a, r),n);
                return c.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }
            ,
            E(w),
            o(w, n, "Generator"),
            o(w, r, function() {
                return this
            }),
            o(w, "toString", function() {
                return "[object Generator]"
            }),
            c.keys = function(e) {
                var t, a = Object(e), r = [];
                for (t in a)
                    r.push(t);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var t = r.pop();
                        if (t in a)
                            return e.value = t,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            c.values = N,
            O.prototype = {
                constructor: O,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = l,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = l,
                    this.tryEntries.forEach(_),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = l)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(a) {
                    if (this.done)
                        throw a;
                    var r = this;
                    function e(e, t) {
                        return o.type = "throw",
                        o.arg = a,
                        r.next = e,
                        t && (r.method = "next",
                        r.arg = l),
                        !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t]
                          , o = n.completion;
                        if ("root" === n.tryLoc)
                            return e("end");
                        if (n.tryLoc <= this.prev) {
                            var c = s.call(n, "catchLoc")
                              , i = s.call(n, "finallyLoc");
                            if (c && i) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            } else if (c) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0)
                            } else {
                                if (!i)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                        var r = this.tryEntries[a];
                        if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var n = r;
                            break
                        }
                    }
                    var o = (n = n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc ? null : n) ? n.completion : {};
                    return o.type = e,
                    o.arg = t,
                    n ? (this.method = "next",
                    this.next = n.finallyLoc,
                    h) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    h
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a = this.tryEntries[t];
                        if (a.finallyLoc === e)
                            return this.complete(a.completion, a.afterLoc),
                            _(a),
                            h
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a, r, n = this.tryEntries[t];
                        if (n.tryLoc === e)
                            return "throw" === (a = n.completion).type && (r = a.arg,
                            _(n)),
                            r
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, a) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: t,
                        nextLoc: a
                    },
                    "next" === this.method && (this.arg = l),
                    h
                }
            },
            c
        }
        function v(i) {
            function e(e, t) {
                var a, r, n, o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, c = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1;
                j ? (a = Object(ae.H)(i.headerSelect, "品牌"),
                r = (n = getRangeFilterMap({
                    rangeFilter: b
                })).priceRange,
                n = n.moqRange,
                Object(Y.Y)({
                    order_minimum: "".concat(e.proSkuMinOrderNum || 1),
                    order_minimum_unit: e.unitOfMeasureCode,
                    search_method: "文字",
                    search_type: "垂直搜索",
                    key_word: l,
                    key_word_type: T ? "历史搜索" : "自由搜索",
                    key_word_result_num: h ? h.length : 0,
                    page: f + 1,
                    rank_type: ne.e[g],
                    is_price_order_asc: 2 === g,
                    price_lowest: r.min,
                    price_hignest: r.max,
                    moq_min: n.min,
                    moq_max: n.max,
                    is_selection: y && y.showIndustryFeatured,
                    is_inventory_sufficient: y && y.inStock,
                    display_type: ["list", "sideList"].includes(u) ? "列表" : "大图",
                    search_result_rank_out: 20 * (c - 1) + (t + 1),
                    directory: e.level4CatalogueName,
                    brand_name_list: a,
                    search_result_rank_inner: o + 1,
                    product_code: e.proSkuNo,
                    product_exhibition_type: ne.d[e.priceType] || "",
                    product_exhibition_value: e.sellingPrice,
                    product_preferential_key: e.tagList && (null == (r = e.tagList[0]) ? void 0 : r.tagText) || "",
                    consignment_date: e.skuStock && e.skuStock.skuDeliveryDateText || "",
                    search_result_match_type: i.searchTypeText,
                    Coreword: j || "",
                    is_sku_search: !!String(l).toUpperCase() === e.skuNo,
                    match_type: e.matchType
                })) : Object(Y.I)({
                    search_type: "目录列表",
                    page: f + 1,
                    rank_type: ne.e[g],
                    is_price_order_asc: 2 === g,
                    is_selection: y && y.showIndustryFeatured,
                    is_inventory_sufficient: y && y.inStock,
                    display_type: ["list", "sideList"].includes(u) ? "列表" : "大图",
                    search_result_rank_out: t + 1,
                    directory: e.level4CatalogueName,
                    brand_name_list: [e.proBrandName],
                    search_result_rank_inner: o + 1,
                    product_code: e.proSkuNo,
                    product_exhibition_type: ne.d[e.priceType] || "",
                    product_exhibition_value: e.sellingPrice,
                    product_preferential_key: e.tagList && (null == (n = e.tagList[0]) ? void 0 : n.tagText) || "",
                    consignment_date: e.skuStock && e.skuStock.skuDeliveryDateText || ""
                }, {
                    rangeFilter: b
                })
            }
            function t(e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0
                  , r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1;
                Object(Y.N)({
                    recommend_module: "方案未定义",
                    operation_type: "方案未定义",
                    recommend_id: "方案未定义",
                    recommend_rank: t + 1,
                    search_type: "目录列表",
                    search_result_match_type: i.searchTypeText,
                    key_word_result_num: s,
                    screen_view_num: r || 1,
                    page: f + 1,
                    rank_type: ne.e[g],
                    is_price_order_asc: 2 === g,
                    is_inventory_sufficient: y && y.inStock,
                    display_type: ["list", "sideList"].includes(u) ? "列表" : "大图",
                    search_result_rank_out: 20 * (r - 1) + (t + 1),
                    directory: e.level4CatalogueName || "",
                    brand_name_list: [e.proBrandName],
                    search_result_rank_inner: a + 1,
                    product_code: e.proSkuNo,
                    product_exhibition_type: ne.d[e.priceType] || "",
                    product_exhibition_value: e.sellingPrice,
                    product_preferential_key: e.tagList && (null == (r = e.tagList[0]) ? void 0 : r.tagText) || "",
                    consignment_date: e.skuStock && e.skuStock.skuDeliveryDateText || "未获取到数据",
                    match_type: e.matchType
                }, {
                    rangeFilter: b
                })
            }
            function a() {
                var e = (a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).proCatalogId
                  , t = void 0 === (t = a.query) ? {} : t
                  , a = a.allFilter
                  , r = []
                  , n = ""
                  , o = t.keyword
                  , t = void 0 === (t = t.clp) ? 0 : t;
                return o && r.push("keywords=".concat(Object(Ee.B)({
                    keyword: o
                }))),
                e && r.push("catalogId=".concat(e)),
                a && i.headerSelect && i.headerSelect.length && (o = i.headerSelect.find(function(e) {
                    return "品牌" === e.title
                })) && o.id && (e = "object" === A()(o.id) ? o.id.join("||") : o.id,
                r.push("brandIds=".concat(e))),
                r.push("clp=".concat(t)),
                n = (n = r.join("&")) && "?" + n,
                "/specificSearch-".concat(S, ".html").concat(n)
            }
            var r, n = i.dispatch, o = i.injectConst, l = i.keyword, c = i.breadcrumbs, s = i.total, u = i.viewType, d = i.isLoading, p = i.isLogin, f = i.from, m = i.noData, h = i.content, v = i.citycode, g = i.sort, y = (i.listInfo,
            i.extraFilter), b = i.rangeFilter, w = i.urlWithQuery, E = (i.catalogId,
            i.url), k = i.searchConfig, k = void 0 === k ? {} : k, S = i.searchSceneNo, _ = i.searchSceneName, O = o.query, O = void 0 === O ? {} : O, N = o.mHost, j = Object(ae.l)(l), E = Object(z.useState)(E), E = Q()(E, 2), x = E[0], L = E[1], E = Object(z.useState)(""), E = Q()(E, 2), I = E[0], D = E[1], E = Object(z.useState)(!1), E = Q()(E, 2), q = E[0], R = E[1], E = Object(z.useState)(!1), E = Q()(E, 2), T = E[0], B = E[1], E = Object(z.useState)(!1), E = Q()(E, 2), P = E[0], H = E[1], E = Object(z.useState)({}), E = Q()(E, 2), W = E[0], C = E[1], E = k.topSearch, F = k.banners, F = void 0 === F ? {} : F, M = k.filterColumn, M = void 0 === M ? {} : M, k = k.topContent, k = void 0 === k ? "" : k, E = {
                placeholder: (void 0 === E ? {} : E).text
            }, M = {
                hideFeatureSelected: !1 === M.showFeatureSelected,
                hideInstock: !1 === M.showInstock
            };
            Object(be.a)(o, i.user),
            Object(z.useEffect)(function() {
                L(w),
                R(!0)
            }, []),
            Object(z.useEffect)(function() {
                switch (S) {
                case "SS001":
                    C({
                        curSearchType: 4
                    });
                    break;
                case "SS002":
                    C({
                        curSearchType: 2
                    });
                    break;
                case "SS003":
                    C({
                        hideSearchType: !0,
                        searchTitleText: "现货商品"
                    });
                    break;
                case "SS004":
                    C({
                        hideSearchType: !0,
                        searchTitleText: "自有品牌"
                    });
                    break;
                case "SS005":
                    C({
                        hideSearchType: !0,
                        searchTitleText: "低价现货"
                    });
                    break;
                case "SS006":
                    C({
                        hideSearchType: !0,
                        searchTitleText: "防疫商品"
                    });
                    break;
                default:
                    C({
                        hideSearchType: !0
                    })
                }
            }, [S]),
            Object(z.useEffect)(function() {
                i.ifHidePrice && n({
                    type: "catalog/getSellingPrice",
                    payload: {}
                }),
                n({
                    type: "catalog/getDeliverTime",
                    payload: {}
                }),
                document.addEventListener("DOMContentLoaded", function() {
                    H(!0)
                }),
                i.ifHideSpu && n({
                    type: "catalog/getSpuThumbInfo"
                })
            }, []);
            return K.a.createElement("div", {
                className: "specific-search-wrap",
                "data-v-3b3af76d": ""
            }, K.a.createElement(le.a, {
                "data-v-3b3af76d": ""
            }), K.a.createElement(ie.a, {
                catalogs: i.catalogs,
                user: i.user,
                navs: i.navs,
                injectConst: o,
                origin: o.origin,
                query: O,
                channel: "catalog",
                type: "2",
                "data-v-3b3af76d": ""
            }), K.a.createElement(V.a, G()({
                keywords: j,
                commonKeyword: I,
                isSpecialSearch: !0,
                searchCb: function(e, t) {
                    return (r = r || U()(ce().mark(function e(t, a) {
                        var r;
                        return ce().wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    r = Object(ae.l)(t),
                                    B(a),
                                    D(r),
                                    n({
                                        type: "catalog/getListInfo",
                                        payload: {
                                            from: 0,
                                            keyword: r
                                        },
                                        callback: function(e) {
                                            Object(Y.W)({
                                                is_sku_search: !1,
                                                search_method: "文字",
                                                search_type: "垂直搜索",
                                                key_word: r || "",
                                                error_correction_word: "",
                                                key_word_type: a ? "历史搜索" : "自由搜索",
                                                search_result_match_type: "精准匹配",
                                                search_result_match_num: e.total
                                            })
                                        }
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }))).apply(this, arguments)
                },
                searchAdConfig: E
            }, W, {
                "data-v-3b3af76d": ""
            })), K.a.createElement(se.a, {
                "data-v-3b3af76d": ""
            }), k ? K.a.createElement("div", {
                className: "page-title",
                "data-v-3b3af76d": ""
            }, K.a.createElement(te.a, {
                "data-v-3b3af76d": ""
            }, K.a.createElement(J.a, {
                src: "https://static.zkh360.com/image/2023-10-17/title-bg-1697532372824.jpg",
                "data-v-3b3af76d": ""
            })), K.a.createElement("div", {
                className: "text",
                "data-v-3b3af76d": ""
            }, k)) : null, F && F.length ? K.a.createElement("div", {
                className: "banner-wrap",
                "data-v-3b3af76d": ""
            }, K.a.createElement(te.a, {
                "data-v-3b3af76d": ""
            }, K.a.createElement(Z, {
                banners: F,
                searchSceneName: _,
                "data-v-3b3af76d": ""
            }))) : "", K.a.createElement("div", {
                className: "list-inner",
                "data-v-3b3af76d": ""
            }, K.a.createElement(X.a, {
                isShow: d,
                "data-v-3b3af76d": ""
            }, K.a.createElement("div", {
                className: "loading-wrap",
                "data-v-3b3af76d": ""
            }, K.a.createElement("div", {
                className: "loading-box",
                "data-v-3b3af76d": ""
            }))), c.length || j ? K.a.createElement(pe.a, {
                breadcrumbs: c,
                prePath: {
                    path: a(),
                    name: "全部"
                },
                postPath: j ? {
                    path: "#",
                    name: '"'.concat(j, '"')
                } : null,
                query: oe(oe({}, o.query), {}, {
                    keyword: l
                }),
                getUrl: function(e) {
                    return a(e)
                },
                isSeo: !0,
                "data-v-3b3af76d": ""
            }) : "", K.a.createElement(fe.a, {
                headerSelect: i.headerSelect,
                deleteSelectCallBack: function(e, t) {
                    Object(re.a)(e, t),
                    Object(Y.q)({
                        search_type: "目录列表",
                        key_word: "",
                        key_word_type: "",
                        rank_content: ne.e[g],
                        fliter_operation_type: "减少",
                        fliter_title: t.title,
                        fliter_content: t ? [t.value] : []
                    }, {
                        catalogs: c,
                        rangeFilter: b
                    })
                },
                "data-v-3b3af76d": ""
            }), K.a.createElement(me.a, {
                selectCallBack: function(e, t, a) {
                    Object(re.b)(e, t, a),
                    Object(Y.q)({
                        search_type: "目录列表",
                        key_word: j || "",
                        key_word_type: T ? "历史搜索" : "自由搜索",
                        rank_content: ne.e[g],
                        fliter_operation_type: "增加",
                        fliter_title: t.title,
                        fliter_content: t ? [t.label] : []
                    }, {
                        catalogs: c,
                        rangeFilter: b
                    })
                },
                getUrl: a,
                isSeo: !0,
                noMarginTop: c.length || j || i.headerSelect.length,
                "data-v-3b3af76d": ""
            }), K.a.createElement(ye.a, {
                "data-v-3b3af76d": ""
            }), K.a.createElement(he.a, G()({
                skuTotalHits: i.skuTotalHits,
                viewType: i.viewType,
                sort: g,
                extraFilter: y,
                rangeFilter: b,
                handleFilterChange: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(Y.Q)({
                        rank_scenario: "分类页",
                        search_type: "垂直搜索",
                        key_word: j || "",
                        key_word_type: T ? "历史搜索" : "自由搜索"
                    }, e)
                },
                isLogin: p,
                cartList: i.cartList
            }, M, {
                "data-v-3b3af76d": ""
            })), K.a.createElement(X.a, {
                isShow: !m,
                "data-v-3b3af76d": ""
            }, "pic" === u || "sidePic" === u ? K.a.createElement(K.a.Fragment, null, K.a.createElement("div", {
                className: "goods-wrap",
                "data-v-3b3af76d": ""
            }, "sidePic" === u ? K.a.createElement($.a, {
                "data-v-3b3af76d": ""
            }) : null, K.a.createElement(ve.a, {
                isLogin: p,
                from: f,
                cityCode: v.cityCode,
                content: h,
                priceInfoMap: i.priceInfoMap,
                stockInfoMap: i.stockInfoMap,
                spuThumbInfo: i.spuThumbInfo,
                isPriceReady: !0,
                viewType: u,
                onClick: e,
                onShow: t,
                "data-v-3b3af76d": ""
            }))) : K.a.createElement(K.a.Fragment, null, K.a.createElement("div", {
                className: "list-item-wrap clearfix",
                "data-v-3b3af76d": ""
            }, "sideList" === u ? K.a.createElement($.a, {
                "data-v-3b3af76d": ""
            }) : null, K.a.createElement(ge.a, {
                lessProp: "sideList" === u,
                isLogin: p,
                content: h,
                priceInfoMap: i.priceInfoMap,
                stockInfoMap: i.stockInfoMap,
                isPriceReady: !0,
                viewType: u,
                cartList: i.cartList,
                onClick: e,
                onShow: t,
                "data-v-3b3af76d": ""
            }))), P ? K.a.createElement(we.a, {
                viewType: u,
                from: f,
                section: i.section,
                cartList: i.cartList,
                hasNextSection: i.hasNextSection,
                listQueryParams: i.listQueryParams,
                onClick: e,
                onShow: t,
                "data-v-3b3af76d": ""
            }) : null), K.a.createElement("div", {
                style: {
                    height: "20px"
                },
                "data-v-3b3af76d": ""
            }), K.a.createElement(X.a, {
                isShow: 60 < s,
                "data-v-3b3af76d": ""
            }, K.a.createElement("div", {
                className: "pagination-wrap",
                "data-v-3b3af76d": ""
            }, K.a.createElement(de.a, {
                pageSize: "60",
                current: f + 1,
                total: s,
                onChange: function(e, t) {
                    n({
                        type: "catalog/getListInfo",
                        payload: {
                            from: t - 1
                        }
                    }),
                    Object(ae.pb)("staticFilter")
                },
                urlPrefix: x,
                isClientSide: q,
                "data-v-3b3af76d": ""
            }))), K.a.createElement(X.a, {
                isShow: m,
                "data-v-3b3af76d": ""
            }, i.listInfo && 1 == i.listInfo.codeForBlank ? K.a.createElement(ee.a, {
                text: i.listInfo.msgForBlank,
                "data-v-3b3af76d": ""
            }) : K.a.createElement(ee.a, {
                "data-v-3b3af76d": ""
            }))), P ? K.a.createElement(K.a.Fragment, null, K.a.createElement(ke.a, {
                listInfo: i.listInfo,
                "data-v-3b3af76d": ""
            }), K.a.createElement("div", {
                className: "qrcode-box",
                "data-v-3b3af76d": ""
            }, K.a.createElement("div", {
                className: "qrcode-img",
                "data-v-3b3af76d": ""
            }, K.a.createElement(Se.a, {
                size: 84,
                value: "".concat(N, "/specificSearch-").concat(S),
                bgColor: "#ffffff",
                fgColor: "#000000",
                level: "L",
                includeMargin: !1,
                "data-v-3b3af76d": ""
            })), K.a.createElement("div", {
                className: "text",
                "data-v-3b3af76d": ""
            }, "扫码分享"))) : null, K.a.createElement(ue.a, {
                "data-v-3b3af76d": ""
            }))
        }
        t(327),
        t(51),
        v.getInitialProps = function(e) {
            return (m = m || U()(ce().mark(function e(t) {
                return ce().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.all([t.store.dispatch({
                                type: "common/updateTodo",
                                payload: {
                                    injectConst: t.app.config.injectConst
                                }
                            }), t.store.dispatch({
                                type: "common/getBaseData",
                                payload: {
                                    ctx: t,
                                    classIds: "3"
                                }
                            }), t.store.dispatch({
                                type: "common/getUserCityData",
                                payload: {
                                    ctx: t
                                }
                            }), t.store.dispatch({
                                type: "catalog/getSearchScene",
                                payload: {
                                    ctx: t
                                }
                            }), t.store.dispatch({
                                type: "common/setDefaultTdk",
                                payload: {
                                    ctx: t
                                }
                            })]);
                        case 2:
                            return e.next = 4,
                            Promise.all([t.store.dispatch({
                                type: "catalog/getPageData",
                                payload: {
                                    ctx: t
                                }
                            }), t.store.dispatch({
                                type: "catalog/setUrlWithQuery",
                                payload: {
                                    ctx: t
                                }
                            })]);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        ,
        e.default = Object(a.connect)(function(e) {
            return r()({
                navs: e.common.navs,
                catalogs: e.common.catalogs,
                injectConst: e.common.injectConst,
                citycode: e.common.citycode,
                listInfo: e.catalog.listInfo,
                breadcrumbs: e.catalog.breadcrumbs,
                catalogId: e.catalog.catalogId,
                brandId: e.catalog.brandId,
                total: e.catalog.total,
                viewType: e.catalog.viewType,
                isLoading: e.catalog.isLoading,
                keyword: e.catalog.keyword,
                isLogin: e.common.injectConst.isLogin,
                noData: e.catalog.noData,
                content: e.catalog.content,
                ifHidePrice: e.catalog.ifHidePrice,
                priceInfoMap: e.catalog.priceInfoMap,
                stockInfoMap: e.catalog.stockInfoMap,
                from: e.catalog.from,
                skuTotalHits: e.catalog.skuTotalHits,
                headerSelect: e.catalog.headerSelect,
                sort: e.catalog.sort,
                ifHideSpu: e.catalog.ifHideSpu,
                spuThumbInfo: e.catalog.spuThumbInfo,
                extraFilter: e.catalog.extraFilter,
                rangeFilter: e.catalog.rangeFilter,
                urlWithQuery: e.catalog.urlWithQuery,
                url: e.catalog.url,
                user: e.common.user,
                cartList: e.catalog.cartList,
                section: e.catalog.section,
                hasNextSection: e.catalog.hasNextSection,
                listQueryParams: e.catalog.listQueryParams,
                searchConfig: e.catalog.searchConfig,
                searchSceneNo: e.catalog.searchSceneNo,
                searchSceneName: e.catalog.searchSceneName,
                searchTypeText: e.catalog.searchTypeText
            }, "searchTypeText", e.catalog.searchTypeText)
        })(v)
    },
    384: function(i, e, t) {
        "use strict";
        t.r(e);
        function S(e) {
            var t;
            return e.selectorLen ? null != (t = e.customerSkuTags) && t.length ? e.customerSkuTags.map(function(e) {
                return {
                    label: e.name,
                    value: e.code
                }
            }) : e.proCatalog.map(function(e) {
                return {
                    label: e.catalogName,
                    value: e.proCatalogId,
                    listShowStyle: e.listShowStyle
                }
            }) : []
        }
        var a, r = t(6), j = t.n(r), r = t(13), n = t.n(r), r = t(35), E = t.n(r), r = t(1), _ = t.n(r), O = (t(19),
        t(0)), N = t.n(O), r = t(7), k = t(40), x = t(30), L = t(28), I = t(29), T = t(27), P = t(38), C = t(17), F = t(96), M = (t(331),
        t(136)), D = t(169), q = t(170), o = t(2), R = t.n(o), B = Object(r.connect)(function(e) {
            return {
                injectConst: e.common.injectConst,
                proCatalog: e.agreement.proCatalog,
                customerSkuTags: e.agreement.customerSkuTags,
                keyword: e.agreement.keyword,
                pros: e.agreement.pros,
                brands: e.agreement.brands,
                classifiedBrands: e.agreement.classifiedBrands,
                selectorLen: e.agreement.selectorLen,
                brandIds: e.agreement.brandIds,
                headerSelect: e.agreement.headerSelect,
                viewType: e.agreement.viewType,
                showMoreProps: e.agreement.showMoreProps
            }
        })(function(t) {
            function a(e, t) {
                var a, r, n, o;
                "品牌" === t ? (a = [],
                r = [],
                e.forEach(function(e) {
                    a.push(e.value),
                    r.push(e.label)
                }),
                c({
                    value: a,
                    label: r
                }, t)) : (o = [],
                e.forEach(function(e) {
                    n = e.value,
                    o.push(e.label)
                }),
                c({
                    value: n,
                    label: o
                }, t))
            }
            function c(e, t) {
                n && n(l, e, t)
            }
            function r(e) {
                return e && e.map(function(e) {
                    return {
                        label: e.proBrandName,
                        value: e.proBrandId,
                        isRecommend: e.ifMainBrand || e.ifPrivateBrand
                    }
                }) || []
            }
            var e = t.viewType
              , n = t.selectCallBack
              , o = t.type
              , i = t.keyword
              , l = t.dispatch
              , s = (t.isSeo,
            t.getUrl,
            t.isWithoutBrand)
              , u = Object(O.useState)(S(t))
              , u = _()(u, 2)
              , d = u[0]
              , p = u[1]
              , u = Object(O.useState)([])
              , u = _()(u, 2)
              , f = u[0]
              , m = u[1]
              , u = Object(O.useState)([])
              , u = _()(u, 2)
              , h = u[0]
              , v = u[1]
              , u = Object(O.useState)(!1)
              , u = _()(u, 2)
              , g = u[0]
              , y = u[1]
              , u = Object(O.useState)([])
              , u = _()(u, 2)
              , b = u[0]
              , w = u[1]
              , u = Object(O.useState)("")
              , u = _()(u, 2)
              , E = u[0]
              , k = u[1];
            return Object(O.useEffect)(function() {
                var e, a;
                t.selectorLen && (p(S(t)),
                v(r(t.brands)),
                w(function(e) {
                    e = e && e.map(function(e) {
                        return {
                            label: e.firstLetter,
                            value: e.firstLetter,
                            brandList: r(e.brandList)
                        }
                    });
                    return (e = e || []).unshift({
                        label: "全部品牌",
                        value: null,
                        brandList: r(t.brands)
                    }),
                    e
                }(t.classifiedBrands)),
                t.showMoreProps ? m((e = t.pros,
                a = [],
                e.map(function(t) {
                    t.specificationValueList && t.specificationValueList.length && a.push({
                        title: t.proSpecName,
                        proSpecId: t.proSpecId,
                        list: t.specificationValueList.map(function(e) {
                            return {
                                label: e,
                                value: t.proSpecId,
                                proSpecId: t.proSpecId
                            }
                        })
                    })
                }),
                a)) : m([]))
            }, [t.proCatalog, t.customerSkuTags, t.brands, t.pros, t.classifiedBrands]),
            Object(O.useEffect)(function() {
                y("sidePic" === e || "sideList" === e)
            }, [e]),
            N.a.createElement("div", {
                className: R()("selector-box-wrap", {
                    "selector-box-mb": g,
                    "empty-filter": !(d && d.length) || !(!s && h.length) || !f || f.length < 1,
                    "no-margin-top": t.noMarginTop
                })
            }, N.a.createElement("ul", {
                className: "selector-tag"
            }, N.a.createElement("li", null, d && d.length ? N.a.createElement(M.a, {
                title: "目录",
                key: "catalogs",
                type: o,
                query: {
                    keyword: i
                },
                isShowMultiple: !1,
                selectorList: d,
                singleSelect: c,
                curTitle: E,
                updateCurTitle: k
            }) : null, !s && h.length ? N.a.createElement(D.a, {
                title: "品牌",
                key: "brands",
                selectorList: h,
                classifiedSelectorList: b,
                singleSelect: c,
                multipleSelect: a,
                curTitle: E,
                updateCurTitle: k,
                headerSelect: t.headerSelect
            }) : null, !g && f.length ? f.slice(0, 3).map(function(e) {
                return N.a.createElement(M.a, {
                    title: e.title,
                    key: "pros_".concat(e.proSpecId),
                    selectorList: e.list,
                    multipleSelect: a,
                    singleSelect: c,
                    curTitle: E,
                    updateCurTitle: k,
                    headerSelect: t.headerSelect
                })
            }) : null, !g && 3 < f.length ? N.a.createElement(q.a, {
                list: f.slice(3),
                singleSelect: c,
                multipleSelect: a
            }) : null)))
        }), H = t(97), W = t(71), G = t(72), A = t(62), U = t(98), Q = t(43), z = t(77), K = t(3);
        function V() {
            V = function() {
                return c
            }
            ;
            var l, c = {}, e = Object.prototype, s = e.hasOwnProperty, u = Object.defineProperty || function(e, t, a) {
                e[t] = a.value
            }
            , t = "function" == typeof Symbol ? Symbol : {}, r = t.iterator || "@@iterator", a = t.asyncIterator || "@@asyncIterator", n = t.toStringTag || "@@toStringTag";
            function o(e, t, a) {
                return Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                o({}, "")
            } catch (l) {
                o = function(e, t, a) {
                    return e[t] = a
                }
            }
            function i(e, t, a, r) {
                var n, o, c, i, t = t && t.prototype instanceof v ? t : v, t = Object.create(t.prototype), r = new O(r || []);
                return u(t, "_invoke", {
                    value: (n = e,
                    o = a,
                    c = r,
                    i = p,
                    function(e, t) {
                        if (i === f)
                            throw new Error("Generator is already running");
                        if (i === m) {
                            if ("throw" === e)
                                throw t;
                            return {
                                value: l,
                                done: !0
                            }
                        }
                        for (c.method = e,
                        c.arg = t; ; ) {
                            var a = c.delegate;
                            if (a) {
                                a = function e(t, a) {
                                    var r = a.method
                                      , n = t.iterator[r];
                                    if (n === l)
                                        return a.delegate = null,
                                        "throw" === r && t.iterator.return && (a.method = "return",
                                        a.arg = l,
                                        e(t, a),
                                        "throw" === a.method) || "return" !== r && (a.method = "throw",
                                        a.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                                        h;
                                    r = d(n, t.iterator, a.arg);
                                    if ("throw" === r.type)
                                        return a.method = "throw",
                                        a.arg = r.arg,
                                        a.delegate = null,
                                        h;
                                    n = r.arg;
                                    return n ? n.done ? (a[t.resultName] = n.value,
                                    a.next = t.nextLoc,
                                    "return" !== a.method && (a.method = "next",
                                    a.arg = l),
                                    a.delegate = null,
                                    h) : n : (a.method = "throw",
                                    a.arg = new TypeError("iterator result is not an object"),
                                    a.delegate = null,
                                    h)
                                }(a, c);
                                if (a) {
                                    if (a === h)
                                        continue;
                                    return a
                                }
                            }
                            if ("next" === c.method)
                                c.sent = c._sent = c.arg;
                            else if ("throw" === c.method) {
                                if (i === p)
                                    throw i = m,
                                    c.arg;
                                c.dispatchException(c.arg)
                            } else
                                "return" === c.method && c.abrupt("return", c.arg);
                            i = f;
                            a = d(n, o, c);
                            if ("normal" === a.type) {
                                if (i = c.done ? m : "suspendedYield",
                                a.arg === h)
                                    continue;
                                return {
                                    value: a.arg,
                                    done: c.done
                                }
                            }
                            "throw" === a.type && (i = m,
                            c.method = "throw",
                            c.arg = a.arg)
                        }
                    }
                    )
                }),
                t
            }
            function d(e, t, a) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, a)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            c.wrap = i;
            var p = "suspendedStart"
              , f = "executing"
              , m = "completed"
              , h = {};
            function v() {}
            function g() {}
            function y() {}
            var t = {}
              , b = (o(t, r, function() {
                return this
            }),
            Object.getPrototypeOf)
              , b = b && b(b(N([])))
              , w = (b && b !== e && s.call(b, r) && (t = b),
            y.prototype = v.prototype = Object.create(t));
            function E(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    o(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function k(c, i) {
                var t;
                u(this, "_invoke", {
                    value: function(a, r) {
                        function e() {
                            return new i(function(e, t) {
                                !function t(e, a, r, n) {
                                    var o, e = d(c[e], c, a);
                                    if ("throw" !== e.type)
                                        return (a = (o = e.arg).value) && "object" == j()(a) && s.call(a, "__await") ? i.resolve(a.__await).then(function(e) {
                                            t("next", e, r, n)
                                        }, function(e) {
                                            t("throw", e, r, n)
                                        }) : i.resolve(a).then(function(e) {
                                            o.value = e,
                                            r(o)
                                        }, function(e) {
                                            return t("throw", e, r, n)
                                        });
                                    n(e.arg)
                                }(a, r, e, t)
                            }
                            )
                        }
                        return t = t ? t.then(e, e) : e()
                    }
                })
            }
            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function _(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function O(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(S, this),
                this.reset(!0)
            }
            function N(t) {
                if (t || "" === t) {
                    var a, e = t[r];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length))
                        return a = -1,
                        (e = function e() {
                            for (; ++a < t.length; )
                                if (s.call(t, a))
                                    return e.value = t[a],
                                    e.done = !1,
                                    e;
                            return e.value = l,
                            e.done = !0,
                            e
                        }
                        ).next = e
                }
                throw new TypeError(j()(t) + " is not iterable")
            }
            return u(w, "constructor", {
                value: g.prototype = y,
                configurable: !0
            }),
            u(y, "constructor", {
                value: g,
                configurable: !0
            }),
            g.displayName = o(y, n, "GeneratorFunction"),
            c.isGeneratorFunction = function(e) {
                e = "function" == typeof e && e.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            c.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                o(e, n, "GeneratorFunction")),
                e.prototype = Object.create(w),
                e
            }
            ,
            c.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            E(k.prototype),
            o(k.prototype, a, function() {
                return this
            }),
            c.AsyncIterator = k,
            c.async = function(e, t, a, r, n) {
                void 0 === n && (n = Promise);
                var o = new k(i(e, t, a, r),n);
                return c.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }
            ,
            E(w),
            o(w, n, "Generator"),
            o(w, r, function() {
                return this
            }),
            o(w, "toString", function() {
                return "[object Generator]"
            }),
            c.keys = function(e) {
                var t, a = Object(e), r = [];
                for (t in a)
                    r.push(t);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var t = r.pop();
                        if (t in a)
                            return e.value = t,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            c.values = N,
            O.prototype = {
                constructor: O,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = l,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = l,
                    this.tryEntries.forEach(_),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = l)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(a) {
                    if (this.done)
                        throw a;
                    var r = this;
                    function e(e, t) {
                        return o.type = "throw",
                        o.arg = a,
                        r.next = e,
                        t && (r.method = "next",
                        r.arg = l),
                        !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t]
                          , o = n.completion;
                        if ("root" === n.tryLoc)
                            return e("end");
                        if (n.tryLoc <= this.prev) {
                            var c = s.call(n, "catchLoc")
                              , i = s.call(n, "finallyLoc");
                            if (c && i) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            } else if (c) {
                                if (this.prev < n.catchLoc)
                                    return e(n.catchLoc, !0)
                            } else {
                                if (!i)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc)
                                    return e(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                        var r = this.tryEntries[a];
                        if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var n = r;
                            break
                        }
                    }
                    var o = (n = n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc ? null : n) ? n.completion : {};
                    return o.type = e,
                    o.arg = t,
                    n ? (this.method = "next",
                    this.next = n.finallyLoc,
                    h) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    h
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a = this.tryEntries[t];
                        if (a.finallyLoc === e)
                            return this.complete(a.completion, a.afterLoc),
                            _(a),
                            h
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a, r, n = this.tryEntries[t];
                        if (n.tryLoc === e)
                            return "throw" === (a = n.completion).type && (r = a.arg,
                            _(n)),
                            r
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, a) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: t,
                        nextLoc: a
                    },
                    "next" === this.method && (this.arg = l),
                    h
                }
            },
            c
        }
        function c(e) {
            var a = e.dispatch
              , t = e.injectConst
              , r = (e.user,
            e.keyword)
              , n = e.total
              , o = e.viewType
              , c = e.isLoading
              , i = e.from
              , l = e.noData
              , s = e.citycode
              , u = e.sort
              , d = (e.listInfo,
            e.extraFilter)
              , p = e.rangeFilter
              , f = e.customerSkuTags
              , m = Object(O.useState)(!1)
              , m = _()(m, 2)
              , h = m[0]
              , v = m[1]
              , m = Object(O.useState)(r)
              , m = _()(m, 2)
              , g = m[0]
              , y = m[1]
              , m = Object(O.useState)(e.content)
              , m = _()(m, 2)
              , b = m[0]
              , w = m[1];
            return Object(O.useEffect)(function() {
                v(t.isLogin)
            }, []),
            Object(O.useEffect)(function() {
                w(e.content)
            }, [e.content]),
            Object(Q.a)(t, e.user),
            Object(O.useEffect)(function() {
                a({
                    type: "agreement/getDeliverTime",
                    payload: {}
                })
            }, []),
            N.a.createElement("div", {
                className: "catalog-wrap",
                "data-v-970af757": ""
            }, N.a.createElement(L.a, {
                "data-v-970af757": ""
            }), N.a.createElement(x.a, {
                catalogs: e.catalogs,
                user: e.user,
                navs: e.navs,
                injectConst: t,
                origin: t.origin,
                query: t.query,
                channel: "catalog",
                type: "2",
                "data-v-970af757": ""
            }), N.a.createElement(k.a, {
                curSearchType: 1,
                isSpecialSearch: !0,
                commonKeyword: g,
                stopUtmKeyword: !0,
                searchCb: function(e) {
                    e = Object(K.l)(e);
                    y(e),
                    a({
                        type: "agreement/getListInfo",
                        payload: {
                            from: 0,
                            size: 20,
                            sort: "",
                            keyword: e,
                            catalogueId: "",
                            extraFilter: {
                                showIndustryFeatured: !1,
                                inStock: !1,
                                includeCompanyTags: d.includeCompanyTags
                            },
                            productFilter: {
                                brandIds: [],
                                properties: {}
                            },
                            rangeFilter: [{
                                min: "",
                                max: "",
                                rangeType: "price"
                            }]
                        }
                    })
                },
                "data-v-970af757": ""
            }), N.a.createElement(I.a, {
                "data-v-970af757": ""
            }), N.a.createElement("div", {
                className: "list-inner",
                "data-v-970af757": ""
            }, N.a.createElement(C.a, {
                isShow: c,
                "data-v-970af757": ""
            }, N.a.createElement("div", {
                className: "loading-wrap",
                "data-v-970af757": ""
            }, N.a.createElement("div", {
                className: "loading-box",
                "data-v-970af757": ""
            }))), N.a.createElement(A.a, {
                "data-v-970af757": ""
            }), N.a.createElement("div", {
                className: "top-banner",
                "data-v-970af757": ""
            }, N.a.createElement("img", {
                src: "https://webuat-list.zkh.com/images/agreement_banner.png",
                "data-v-970af757": ""
            })), N.a.createElement("div", {
                className: "tab-menu-list",
                "data-v-970af757": ""
            }, N.a.createElement("a", {
                href: "/list/agreementProduct.html",
                className: "tab-menu-item active",
                "data-v-970af757": ""
            }, "协议商品"), N.a.createElement("a", {
                href: "/list/purchasedProduct.html",
                className: "tab-menu-item",
                "data-v-970af757": ""
            }, "购买过的")), N.a.createElement(F.a, {
                headerSelect: e.headerSelect,
                deleteSelectCallBack: function(e, t) {
                    Object(z.a)(e, t, "agreement", null != f && f.length ? "tag" : "catalog")
                },
                "data-v-970af757": ""
            }), N.a.createElement(C.a, {
                isShow: !l,
                "data-v-970af757": ""
            }, N.a.createElement(B, {
                selectCallBack: function(e, t, a) {
                    Object(z.b)(e, t, a, "agreement", null != f && f.length ? "tag" : "catalog")
                },
                "data-v-970af757": ""
            })), N.a.createElement(H.a, {
                skuTotalHits: e.skuTotalHits,
                viewType: e.viewType,
                sort: u,
                extraFilter: d,
                rangeFilter: p,
                modelType: "specialList",
                handleFilterChange: function() {
                    var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    "view" == t.actionType ? a({
                        type: "agreement/updateTodo",
                        payload: {
                            viewType: t.viewType
                        }
                    }) : a({
                        type: "agreement/getListInfo",
                        payload: {
                            from: 0,
                            sort: t.sort,
                            rangeFilter: t.rangeFilter,
                            extraFilter: {
                                showIndustryFeatured: null == t || null == (e = t.extraFilter) ? void 0 : e.showIndustryFeatured,
                                inStock: null == t || null == (e = t.extraFilter) ? void 0 : e.inStock,
                                includeCompanyTags: d.includeCompanyTags
                            }
                        }
                    })
                },
                isLogin: h,
                cartList: e.cartList,
                hideAgreementSelected: !0,
                "data-v-970af757": ""
            }), N.a.createElement(C.a, {
                isShow: !l,
                "data-v-970af757": ""
            }, "pic" === o || "sidePic" === o ? N.a.createElement("div", {
                className: "goods-wrap",
                "data-v-970af757": ""
            }, N.a.createElement(W.a, {
                from: i,
                isLogin: h,
                cityCode: s.cityCode,
                content: b,
                priceInfoMap: e.priceInfoMap,
                stockInfoMap: e.stockInfoMap,
                isPriceReady: !0,
                viewType: o,
                keyword: r,
                collectCallBack: function(e, t) {
                    var a = E()(b);
                    a[e].isCollect = t,
                    w(a)
                },
                "data-v-970af757": ""
            })) : N.a.createElement("div", {
                className: "list-item-wrap clearfix",
                "data-v-970af757": ""
            }, N.a.createElement(G.a, {
                modelType: "agreement",
                isLogin: h,
                content: b,
                priceInfoMap: e.priceInfoMap,
                stockInfoMap: e.stockInfoMap,
                isPriceReady: !0,
                viewType: o,
                keyword: r,
                cartList: e.cartList,
                pushCartCallback: function() {
                    a({
                        type: "agreement/updateTodo",
                        payload: {
                            cartList: (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).list
                        }
                    })
                },
                "data-v-970af757": ""
            }))), N.a.createElement("div", {
                style: {
                    height: "20px"
                },
                "data-v-970af757": ""
            }), N.a.createElement(C.a, {
                isShow: 20 < n,
                "data-v-970af757": ""
            }, N.a.createElement("div", {
                className: "pagination-wrap",
                "data-v-970af757": ""
            }, N.a.createElement(P.a, {
                pageSize: "20",
                current: i + 1,
                total: n,
                onChange: function(e, t) {
                    a({
                        type: "agreement/getListInfo",
                        payload: {
                            from: t - 1
                        }
                    }),
                    Object(K.pb)("staticFilter")
                },
                "data-v-970af757": ""
            }))), N.a.createElement(C.a, {
                isShow: l,
                "data-v-970af757": ""
            }, N.a.createElement(U.a, {
                "data-v-970af757": ""
            }))), N.a.createElement(T.a, {
                "data-v-970af757": ""
            }), N.a.createElement("img", {
                className: "left-side-service find-service-btn",
                src: "//static.zkh360.com/image/2022-08-26/consult-gif-1661504423657.gif",
                "data-v-970af757": ""
            }))
        }
        t(332),
        t(51),
        c.getInitialProps = function(e) {
            return (a = a || n()(V().mark(function e(t) {
                return V().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.all([t.store.dispatch({
                                type: "common/updateTodo",
                                payload: {
                                    injectConst: t.app.config.injectConst
                                }
                            }), t.store.dispatch({
                                type: "common/getUserCityData",
                                payload: {
                                    ctx: t
                                }
                            }), t.store.dispatch({
                                type: "common/getBaseData",
                                payload: {
                                    ctx: t,
                                    classIds: "3"
                                }
                            })]);
                        case 2:
                            return e.t0 = Promise,
                            e.next = 5,
                            t.store.dispatch({
                                type: "agreement/getPageData",
                                payload: {
                                    ctx: t
                                }
                            });
                        case 5:
                            return e.t1 = e.sent,
                            e.t2 = [e.t1],
                            e.next = 9,
                            e.t0.all.call(e.t0, e.t2);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        ,
        e.default = Object(r.connect)(function(e) {
            return {
                navs: e.common.navs,
                catalogs: e.common.catalogs,
                injectConst: e.common.injectConst,
                user: e.common.user,
                citycode: e.common.citycode,
                catalogId: e.agreement.catalogId,
                customerSkuTags: e.agreement.customerSkuTags,
                total: e.agreement.total,
                viewType: e.agreement.viewType,
                listInfo: e.agreement.listInfo,
                isLoading: e.agreement.isLoading,
                keyword: e.agreement.keyword,
                noData: e.agreement.noData,
                content: e.agreement.content,
                priceInfoMap: e.agreement.priceInfoMap,
                stockInfoMap: e.agreement.stockInfoMap,
                from: e.agreement.from,
                skuTotalHits: e.agreement.skuTotalHits,
                headerSelect: e.agreement.headerSelect,
                sort: e.agreement.sort,
                extraFilter: e.agreement.extraFilter,
                rangeFilter: e.agreement.rangeFilter,
                cartList: e.agreement.cartList,
                url: e.agreement.url
            }
        })(c)
    },
    48: function(e, t) {
        e.exports = Slider
    },
    58: function(e, t) {
        e.exports = CryptoJS
    },
    59: function(e, t) {
        e.exports = ReactRouterDOM
    },
    64: function(e, t) {
        e.exports = ReactRouter
    },
    65: function(e, t) {
        e.exports = axios
    },
    68: function(e, t) {
        e.exports = ReactRedux
    },
    71: function(e, t, a) {
        "use strict";
        var r = a(5)
          , n = a.n(r)
          , r = a(0)
          , d = a.n(r)
          , p = a(189)
          , r = a(2)
          , f = a.n(r);
        function o(t, e) {
            var a, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)),
            r
        }
        function m(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(a), !0).forEach(function(e) {
                    n()(t, e, a[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return t
        }
        a(242),
        t.a = function(r) {
            function a(e, t, a) {
                r.onClick && r.onClick(e, t, a)
            }
            function n(e, t, a) {
                r.onShow && r.onShow(e, t, a)
            }
            var e = r.content
              , o = r.isLogin
              , c = r.cityCode
              , t = r.keyword
              , i = void 0 === t ? "" : t
              , l = r.viewType
              , t = r.from
              , s = void 0 === t ? 0 : t
              , u = r.collectCallBack;
            return d.a.createElement("div", {
                className: f()(r.className)
            }, d.a.createElement("div", {
                className: f()("goods-item-box-new clearfix", {
                    "goods-item-side": "sidePic" === l
                })
            }, e && e.length ? e.map(function(e, t) {
                return d.a.createElement(p.a, {
                    index: t,
                    key: e.proSkuNo,
                    keyword: i,
                    requestId: r.requestId,
                    isLogin: o,
                    cityCode: c,
                    data: m(m(m(m({}, e), r.priceInfoMap[e.proSkuNo]), r.stockInfoMap[e.proSkuNo]), {}, {
                        ifHidePrice: r.ifHidePrice && null == r.priceInfoMap[e.proSkuNo]
                    }),
                    spuThumbList: r.spuThumbInfo && r.spuThumbInfo[e.proSkuNo],
                    copyReord: r.copyReord,
                    isPriceReady: r.isPriceReady,
                    isStockReady: null != r.stockInfoMap[e.proSkuNo],
                    loginModal: !0,
                    from: s,
                    viewType: l,
                    collectCallBack: u,
                    onClick: a,
                    onShow: n
                })
            }) : null))
        }
    },
    72: function(e, t, a) {
        "use strict";
        function w(e) {
            return !e.lessProp && "list" === e.viewType ? e.children : null
        }
        var r = a(1)
          , E = a.n(r)
          , k = a(0)
          , S = a.n(k)
          , _ = a(45)
          , r = a(7)
          , O = (a(243),
        a(102))
          , N = a(134)
          , j = a(122)
          , x = a(90)
          , L = a(4)
          , I = a(70)
          , T = a(63)
          , P = a(53)
          , C = a(10)
          , n = a(2)
          , F = a.n(n)
          , M = a(74)
          , D = a(91)
          , q = a(3)
          , R = a(15)
          , n = a(107)
          , B = a.n(n)
          , H = a(11)
          , W = a(26);
        t.a = Object(r.connect)(function(e) {
            return {
                rolePermission: e.common.rolePermission
            }
        })(function(n) {
            function o(t) {
                var e;
                t.proSkuNo && (e = Object(R.cloneDeep)(n.cartList),
                e = Object(R.remove)(e, function(e) {
                    return e.proSkuNo !== t.proSkuNo
                }),
                t.proSkuNo && t.proSkuQty && e.push(t),
                s && a({
                    type: "".concat(s, "/updateTodo"),
                    payload: {
                        cartList: e
                    }
                }),
                h) && h({
                    list: e,
                    item: t
                })
            }
            function c(t) {
                return Object(q.kb)(t.proSkuNo, t.proSkuQty, t.index).then(function(e) {
                    return e && v[t.proSkuNo] && (v[t.proSkuNo].skuStock = e,
                    g(Object(R.cloneDeep)(v))),
                    e
                })
            }
            function i(e, t) {
                n.onClick && n.onClick(e, t)
            }
            function l(e, t, a, r) {
                e.preventDefault(),
                e.stopPropagation(),
                B()(t),
                L.a.toast({
                    container: "复制成功"
                }),
                Object(H.J)({
                    key_word: m,
                    request_id: n.requestId,
                    product_code: a.proSkuNo,
                    product_exhibition_type: W.d[a.priceType] || "",
                    product_exhibition_value: a.sellingPrice
                }),
                n.copyReord && i(a, r)
            }
            var a = n.dispatch
              , e = n.hideHeader
              , e = void 0 !== e && e
              , t = n.cartList
              , r = n.modelType
              , s = void 0 === r ? "catalog" : r
              , r = n.content
              , u = n.isLogin
              , d = n.viewType
              , p = n.lessProp
              , f = void 0 !== p && p
              , p = n.keyword
              , m = void 0 === p ? "" : p
              , h = n.pushCartCallback
              , p = Object(k.useState)(n.stockInfoMap || {})
              , p = E()(p, 2)
              , v = p[0]
              , g = p[1]
              , y = n.rolePermission || {}
              , b = Object(k.useRef)();
            b.current = r;
            return Object(k.useEffect)(function() {
                g(n.stockInfoMap || {})
            }, [n.stockInfoMap]),
            Object(k.useEffect)(function() {
                s && a({
                    type: "".concat(s, "/updateTodo"),
                    payload: {
                        cartList: []
                    }
                })
            }, []),
            S.a.createElement("div", {
                className: F()("list-props-wrap", d, s),
                "data-v-2948b33c": ""
            }, e ? null : S.a.createElement("ul", {
                className: F()("list-item-header clearfix", {
                    "list-item-side": "sideList" === d
                }),
                "data-v-2948b33c": ""
            }, S.a.createElement("li", {
                className: "tw1",
                "data-v-2948b33c": ""
            }, "图例"), S.a.createElement("li", {
                className: "tw2",
                "data-v-2948b33c": ""
            }, "商品信息"), S.a.createElement(w, {
                viewType: d,
                lessProp: f,
                "data-v-2948b33c": ""
            }, S.a.createElement("li", {
                className: "tw3",
                "data-v-2948b33c": ""
            }, "品牌")), S.a.createElement(w, {
                viewType: d,
                lessProp: f,
                "data-v-2948b33c": ""
            }, S.a.createElement("li", {
                className: "tw4",
                "data-v-2948b33c": ""
            }, "制造商型号")), S.a.createElement("li", {
                className: "tw5",
                "data-v-2948b33c": ""
            }, "产品规格"), S.a.createElement("li", {
                className: "tw7",
                "data-v-2948b33c": ""
            }, "发货日"), S.a.createElement("li", {
                className: "tw8",
                "data-v-2948b33c": ""
            }, y.canSeePrice ? "含税单价" : ""), S.a.createElement("li", {
                className: y.canAddToCart ? "tw9 add-shop-cart flex-cc" : "tw9 add-shop-cart flex-cc disabled",
                onClick: function() {
                    u ? y.canAddToCart ? t && 0 === t.length ? L.a.toast({
                        container: "没有选择加入!"
                    }) : P.a.batch({
                        sensorData: {
                            key_word: m,
                            request_id: n.requestId
                        },
                        skuList: t,
                        hideCommonInfo: !0,
                        successFun: function() {
                            a({
                                type: "common/updateShopData"
                            }),
                            L.a.dialog({
                                container: function() {
                                    return S.a.createElement("div", {
                                        className: "pass-info",
                                        "data-v-2948b33c": ""
                                    }, "恭喜，所有商品成功加入购物车!")
                                },
                                onSuccess: function() {
                                    window.open("/shoppingCart/cart.html")
                                },
                                successText: "去购物车结算",
                                cancelText: "继续购物"
                            })
                        }
                    }) : L.a.toast({
                        container: "当前账号不可加购，请联系集团管理员"
                    }) : a({
                        type: "common/updateTodo",
                        payload: {
                            quickLoginShow: !0
                        }
                    })
                },
                "data-v-2948b33c": ""
            }, S.a.createElement("i", {
                className: "iconfont",
                "data-v-2948b33c": ""
            }, ""), "加入购物车")), S.a.createElement("ul", {
                className: F()({
                    "list-item-side": "sideList" === d
                }),
                "data-v-2948b33c": ""
            }, r.length ? r.map(function(t, a) {
                var e, r = n.priceInfoMap && null != (r = n.priceInfoMap[t.proSkuNo]) && null != (r = r.asyncProductTags) && r.length ? n.priceInfoMap[t.proSkuNo].asyncProductTags : t.productTags;
                return S.a.createElement(_.InView, {
                    as: "li",
                    threshold: .7,
                    triggerOnce: !0,
                    onChange: function(e) {
                        var t;
                        t = a,
                        e && setTimeout(function() {
                            n.onShow && n.onShow(b.current[t], t)
                        }, 2e3)
                    },
                    key: "list-".concat(t.proSkuNo, "-").concat(a),
                    className: "goods-list clearfix",
                    onClick: function() {
                        return i(t, a)
                    },
                    "data-v-2948b33c": ""
                }, S.a.createElement("div", {
                    className: "goods-img tw1",
                    "data-v-2948b33c": ""
                }, S.a.createElement(T.a, {
                    url: "/item/".concat(t.proSkuNo, ".html").concat(m ? "?keywords=".concat(Object(C.B)({
                        keyword: m
                    })).concat(n.requestId && "&r_id=" + n.requestId) : ""),
                    target: "_blank",
                    "data-v-2948b33c": ""
                }, S.a.createElement(I.a, {
                    className: "sku-img-wrap",
                    placeholder: S.a.createElement("img", {
                        src: C.d,
                        "data-v-2948b33c": ""
                    }),
                    "data-v-2948b33c": ""
                }, S.a.createElement(M.a, {
                    src: t.proImgPath_Z1[0] || C.d,
                    alt: t.proSkuProductName && t.proSkuProductName.replace(/\<[\/]?em\>/g, ""),
                    title: t.proSkuProductName && t.proSkuProductName.replace(/\<[\/]?em\>/g, ""),
                    "data-v-2948b33c": ""
                })), v[t.proSkuNo] && Object(q.J)(null == (e = v[t.proSkuNo]) || null == (e = e.skuStock) ? void 0 : e.tagType) ? S.a.createElement("div", {
                    className: "tag-icon",
                    "data-v-2948b33c": ""
                }, Object(q.J)(null == (e = v[t.proSkuNo]) || null == (e = e.skuStock) ? void 0 : e.tagType)) : null)), S.a.createElement("div", {
                    className: "tw2 goods-info",
                    "data-v-2948b33c": ""
                }, S.a.createElement(T.a, {
                    url: "/item/".concat(t.proSkuNo, ".html").concat(m ? "?keywords=".concat(Object(C.B)({
                        keyword: m
                    })) : ""),
                    target: "_blank",
                    "data-v-2948b33c": ""
                }, S.a.createElement("div", {
                    className: "name clamp3",
                    dangerouslySetInnerHTML: {
                        __html: t.proSkuProductName
                    },
                    "data-v-2948b33c": ""
                })), S.a.createElement("div", {
                    className: "clearfix sku-number",
                    "data-v-2948b33c": ""
                }, t.customerMaterialNo ? S.a.createElement(S.a.Fragment, null, S.a.createElement("span", {
                    "data-v-2948b33c": ""
                }, "客户物料号：", t.customerMaterialNo), S.a.createElement("i", {
                    className: "iconfont copy-icon",
                    onClick: function(e) {
                        return l(e, t.customerMaterialNo, t, a)
                    },
                    "data-v-2948b33c": ""
                }, "")) : S.a.createElement(S.a.Fragment, null, S.a.createElement("span", {
                    "data-v-2948b33c": ""
                }, "订货编码：", t.proSkuNo), S.a.createElement("i", {
                    className: "iconfont copy-icon",
                    onClick: function(e) {
                        return l(e, t.proSkuNo, t, a)
                    },
                    "data-v-2948b33c": ""
                }, ""))), "sideList" === d ? S.a.createElement("div", {
                    className: "clearfix sku-number material-no",
                    "data-v-2948b33c": ""
                }, S.a.createElement("span", {
                    "data-v-2948b33c": ""
                }, "制造商型号：", t.proMaterialNo)) : "", S.a.createElement("div", {
                    className: "clearfix goods-tagcont",
                    "data-v-2948b33c": ""
                }, r && r.map(function(e, t) {
                    return S.a.createElement(D.a, {
                        key: t + "_" + e.type,
                        tagItem: e,
                        "data-v-2948b33c": ""
                    })
                }))), S.a.createElement(w, {
                    viewType: d,
                    lessProp: f,
                    "data-v-2948b33c": ""
                }, S.a.createElement("div", {
                    className: "tw3 brand-name",
                    "data-v-2948b33c": ""
                }, t.proBrandName)), S.a.createElement(w, {
                    viewType: d,
                    lessProp: f,
                    "data-v-2948b33c": ""
                }, S.a.createElement("div", {
                    className: "tw4 material-number",
                    "data-v-2948b33c": ""
                }, t.proMaterialNo)), S.a.createElement("div", {
                    className: "tw5 feature",
                    "data-v-2948b33c": ""
                }, null != (e = t.specificationList) && e.length ? t.specificationList.map(function(e, t) {
                    return S.a.createElement("span", {
                        key: "spec_item_".concat(t),
                        "data-v-2948b33c": ""
                    }, e.proSpecName, "：", e.specificationValue)
                }) : null), S.a.createElement("div", {
                    className: F()("tw7 deliver-leadTime", {
                        "deliver-leadTime-none": !1 === t.ifRelease
                    }),
                    "data-v-2948b33c": ""
                }, v[t.proSkuNo] ? S.a.createElement(O.a, {
                    data: v[t.proSkuNo],
                    "data-v-2948b33c": ""
                }) : ""), S.a.createElement("div", {
                    className: "tw8 goods-price",
                    "data-v-2948b33c": ""
                }, y.canSeePrice ? S.a.createElement(S.a.Fragment, null, S.a.createElement(N.a, {
                    role: y,
                    price: n.priceInfoMap && (null == (r = n.priceInfoMap[t.proSkuNo]) ? void 0 : r.price) || t.price,
                    originPrice: n.priceInfoMap && (null == (e = n.priceInfoMap[t.proSkuNo]) ? void 0 : e.originPrice) || t.originPrice,
                    priceType: n.priceInfoMap && (null == (r = n.priceInfoMap[t.proSkuNo]) ? void 0 : r.priceType) || t.priceType,
                    isPriceReady: n.isPriceReady,
                    isWrap: !0,
                    ifHidePrice: n.ifHidePrice && null == n.priceInfoMap[t.proSkuNo],
                    unit: t.unitOfMeasureCode,
                    "data-v-2948b33c": ""
                }), S.a.createElement("div", {
                    style: {
                        display: "block",
                        paddingTop: "6px"
                    },
                    "data-v-2948b33c": ""
                }, S.a.createElement("div", {
                    style: {
                        display: "inline-block"
                    },
                    "data-v-2948b33c": ""
                }, S.a.createElement(T.a, {
                    url: "/item/".concat(t.proSkuNo, ".html").concat(m ? "?keywords=".concat(Object(C.B)({
                        keyword: m
                    })) : ""),
                    target: "_blank",
                    "data-v-2948b33c": ""
                }, S.a.createElement(j.a, {
                    data: n.priceInfoMap && n.priceInfoMap[t.proSkuNo] || t,
                    memberText: "企业享会员价",
                    "data-v-2948b33c": ""
                }))))) : ""), S.a.createElement("div", {
                    className: "tw9 add-shop-cart",
                    "data-v-2948b33c": ""
                }, 0 != t.ifInProductPool ? S.a.createElement(x.a, {
                    mpq: t.mpq,
                    proSkuNo: t.proSkuNo,
                    price: n.priceInfoMap && (null == (e = n.priceInfoMap[t.proSkuNo]) ? void 0 : e.price) || t.price,
                    minOrderNum: t.proSkuMinOrderNum,
                    isSoldOutStop: t.isSoldOutStop,
                    proSkuLeadTime: t.proSkuLeadTime,
                    skuStock: (null == (r = v[t.proSkuNo]) ? void 0 : r.skuStock) || null,
                    onChange: o,
                    onFreshStock: c,
                    isDisabled: (null == (e = v[t.proSkuNo]) ? void 0 : e.isDisabledSku) || !(!n.priceInfoMap || null == (r = n.priceInfoMap[t.proSkuNo]) || !r.price) && n.priceInfoMap && -3 === (null == (e = n.priceInfoMap[t.proSkuNo]) ? void 0 : e.price) || -3 === t.price,
                    defaultValue: 0,
                    allowUnderMinOrder: !0,
                    isAddBuyCheck: u,
                    index: a,
                    "data-v-2948b33c": ""
                }) : S.a.createElement("span", {
                    className: "grey-tag",
                    "data-v-2948b33c": ""
                }, "商品不在商品池中")))
            }) : null))
        })
    },
    77: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return i
        }),
        a.d(t, "b", function() {
            return l
        });
        var t = a(5)
          , r = a.n(t)
          , o = a(15);
        function n(t, e) {
            var a, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t),
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, a)),
            r
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? n(Object(a), !0).forEach(function(e) {
                    r()(t, e, a[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return t
        }
        function i(e, t) {
            var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "catalog"
              , r = 3 < arguments.length ? arguments[3] : void 0;
            "品牌" === t.title ? e({
                type: "".concat(a, "/updateTodoBrandIds"),
                payload: c({
                    type: "delete"
                }, t)
            }) : "agreement" == a && "目录" == t.title ? e("catalog" === r ? {
                type: "".concat(a, "/updateTodoCatalogId"),
                payload: c({
                    type: "delete"
                }, t)
            } : {
                type: "".concat(a, "/updateTodoTags"),
                payload: c({
                    type: "delete"
                }, t)
            }) : e({
                type: "".concat(a, "/updateTodoProperties"),
                payload: c({
                    type: "delete"
                }, t)
            }),
            e({
                type: "".concat(a, "/updateTodoHeaderSelect"),
                payload: c({
                    type: "delete"
                }, t)
            }),
            e({
                type: "".concat(a, "/getListInfo")
            })
        }
        function l(e, t, a) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "catalog"
              , n = 4 < arguments.length ? arguments[4] : void 0;
            e("品牌" === a ? {
                type: "".concat(r, "/updateTodoBrandIds"),
                payload: {
                    type: "add",
                    id: t.value
                }
            } : "agreement" == r && "目录" == a ? "catalog" === n ? {
                type: "".concat(r, "/updateTodoCatalogId"),
                payload: {
                    type: "add",
                    id: t.value
                }
            } : {
                type: "".concat(r, "/updateTodoTags"),
                payload: {
                    type: "add",
                    value: t.value
                }
            } : {
                type: "".concat(r, "/updateTodoProperties"),
                payload: {
                    type: "add",
                    id: t.value,
                    value: Object(o.isArray)(t.label) ? t.label : [t.label]
                }
            }),
            e({
                type: "".concat(r, "/updateTodoHeaderSelect"),
                payload: {
                    type: "add",
                    id: t.value,
                    value: {
                        title: a,
                        id: t.value,
                        value: Object(o.isArray)(t.label) ? t.label.join(" ") : t.label
                    }
                }
            }),
            e({
                type: "".concat(r, "/getListInfo")
            })
        }
    },
    96: function(e, t, a) {
        "use strict";
        var r = a(0)
          , n = a.n(r)
          , r = (a(306),
        a(7))
          , o = a(167);
        t.a = Object(r.connect)(function(e) {
            return {}
        })(function(e) {
            var t = e.dispatch
              , a = e.headerSelect
              , r = e.deleteSelectCallBack;
            return n.a.createElement("div", {
                className: "header-selected-wrap clearfix"
            }, a.length ? n.a.createElement(n.a.Fragment, null, a.map(function(e) {
                return n.a.createElement("div", {
                    className: "selected-item",
                    key: e.id
                }, e.title, "： ", e.value, n.a.createElement("a", {
                    href: "javascript:void(0);",
                    onClick: function() {
                        r(t, e)
                    },
                    className: "delect"
                }, n.a.createElement("i", {
                    className: "iconfont delete-icon"
                }, "")))
            }), e.hasShare && n.a.createElement(o.a, null)) : null)
        })
    },
    97: function(e, t, a) {
        "use strict";
        var r = a(1)
          , y = a.n(r)
          , b = a(0)
          , w = a.n(b)
          , E = a(3)
          , r = a(7)
          , n = a(2)
          , k = a.n(n)
          , S = a(168)
          , _ = a(53)
          , O = a(4)
          , N = (a(315),
        a(175));
        t.a = Object(r.connect)(function(e) {
            return {
                scrollTop: e.common.scrollTop,
                scrollLeft: e.common.scrollLeft,
                rolePermission: e.common.rolePermission
            }
        })(function(e) {
            function t(e) {
                return !e.lessProp && "list" === e.viewType ? e.children : null
            }
            var a = e.dispatch
              , r = e.viewType
              , n = e.isLogin
              , o = e.cartList
              , c = e.scrollTop
              , i = e.scrollLeft
              , l = e.sort
              , s = e.extraFilter
              , u = e.rangeFilter
              , d = e.handleFilterChange
              , p = e.lessProp
              , p = void 0 !== p && p
              , f = e.className
              , m = Object(b.useState)(-1)
              , m = y()(m, 2)
              , h = m[0]
              , v = m[1]
              , g = e.rolePermission || {};
            Object(b.useEffect)(function() {
                var e;
                "undefined" != typeof document && (e = Object(E.Q)(document.getElementsByClassName("static-filter-wrap")[0]).top,
                e = c - e,
                0 <= h || 0 <= e) && h !== e && v(e)
            }, [c]);
            return w.a.createElement("div", {
                className: "static-filter-wrap",
                id: "staticFilter",
                "data-v-31ac907e": ""
            }, w.a.createElement("div", {
                className: k()({
                    "fixed-top-wrap": 0 <= h
                }),
                style: {
                    left: -i
                },
                "data-v-31ac907e": ""
            }, w.a.createElement("div", {
                className: "fix-top-innter clearfix",
                "data-v-31ac907e": ""
            }, w.a.createElement(S.a, {
                skuTotalHits: e.skuTotalHits,
                viewType: e.viewType,
                initSort: l,
                initExtraFilter: s,
                initRangeFilter: u,
                onChange: d,
                hideFeatureSelected: e.hideFeatureSelected,
                hideInstock: e.hideInstock,
                hideAgreementSelected: e.hideAgreementSelected,
                modelType: e.modelType,
                type: "fixedFilter",
                "data-v-31ac907e": ""
            }), 0 < h ? w.a.createElement(w.a.Fragment, null, "sideList" === r ? w.a.createElement("div", {
                className: k()("side-select-wrap-new", f),
                "data-v-31ac907e": ""
            }, w.a.createElement("div", {
                className: "left-header",
                "data-v-31ac907e": ""
            }, w.a.createElement("span", {
                "data-v-31ac907e": ""
            }, "产品选项"), w.a.createElement("a", {
                className: "reset-btn",
                href: "javascript:void(0)",
                onClick: function() {
                    N.a.emit("clearSelected")
                },
                "data-v-31ac907e": ""
            }, "清空筛选"))) : "", e.hideTitle || "list" !== r && "sideList" !== r ? "" : w.a.createElement("div", {
                className: k()("list-props-wrap", r, "catalog"),
                "data-v-31ac907e": ""
            }, w.a.createElement("ul", {
                className: k()("list-item-header clearfix", {
                    "list-item-side": "sideList" === r
                }),
                "data-v-31ac907e": ""
            }, w.a.createElement("li", {
                className: "tw1",
                "data-v-31ac907e": ""
            }, "图例"), w.a.createElement("li", {
                className: "tw2",
                "data-v-31ac907e": ""
            }, "商品信息"), w.a.createElement(t, {
                viewType: r,
                lessProp: p,
                "data-v-31ac907e": ""
            }, w.a.createElement("li", {
                className: "tw3",
                "data-v-31ac907e": ""
            }, "品牌")), w.a.createElement(t, {
                viewType: r,
                lessProp: p,
                "data-v-31ac907e": ""
            }, w.a.createElement("li", {
                className: "tw4",
                "data-v-31ac907e": ""
            }, "制造商型号")), w.a.createElement("li", {
                className: "tw5",
                "data-v-31ac907e": ""
            }, "产品规格"), w.a.createElement("li", {
                className: "tw7",
                "data-v-31ac907e": ""
            }, "发货日"), w.a.createElement("li", {
                className: "tw8",
                "data-v-31ac907e": ""
            }, g.canSeePrice ? "含税单价" : ""), w.a.createElement("li", {
                className: g.canAddToCart ? "tw9 add-shop-cart flex-cc" : "tw9 add-shop-cart flex-cc disabled",
                onClick: function() {
                    n ? g.canAddToCart ? o && 0 === o.length ? O.a.toast({
                        container: "没有选择加入!"
                    }) : _.a.batch({
                        sensorData: {
                            request_id: e.requestId
                        },
                        skuList: o,
                        hideCommonInfo: !0,
                        successFun: function() {
                            a({
                                type: "common/updateShopData"
                            }),
                            O.a.dialog({
                                container: function() {
                                    return w.a.createElement("div", {
                                        className: "pass-info",
                                        "data-v-31ac907e": ""
                                    }, "恭喜，所有商品成功加入购物车!")
                                },
                                onSuccess: function() {
                                    window.open("/shoppingCart/cart.html")
                                },
                                successText: "去购物车结算",
                                cancelText: "继续购物"
                            })
                        }
                    }) : O.a.toast({
                        container: "当前账号不可加购，请联系集团管理员"
                    }) : a({
                        type: "common/updateTodo",
                        payload: {
                            quickLoginShow: !0
                        }
                    })
                },
                "data-v-31ac907e": ""
            }, w.a.createElement("i", {
                className: "iconfont",
                "data-v-31ac907e": ""
            }, ""), "加入购物车")))) : null)))
        })
    },
    98: function(e, t, a) {
        "use strict";
        var r = a(0)
          , n = a.n(r)
          , r = (a(317),
        a(657));
        t.a = Object(r.a)(function(e) {
            return n.a.createElement("div", {
                className: "no-data-info-wrap",
                "data-v-6f0ef1de": ""
            }, n.a.createElement("div", {
                className: "clearfix no-data-info",
                "data-v-6f0ef1de": ""
            }, n.a.createElement("div", {
                className: "left-empty-icon",
                "data-v-6f0ef1de": ""
            }, n.a.createElement("img", {
                src: "//static.zkh360.com/image/2021-06-04/empty_box-1622792680624.png",
                "data-v-6f0ef1de": ""
            })), e.text ? n.a.createElement("div", {
                className: "right-content-text-info",
                "data-v-6f0ef1de": ""
            }, e.text) : n.a.createElement("div", {
                className: "right-content",
                "data-v-6f0ef1de": ""
            }, n.a.createElement("h3", {
                "data-v-6f0ef1de": ""
            }, "抱歉，没有找到相关商品"), n.a.createElement("div", {
                className: "right-content-text",
                "data-v-6f0ef1de": ""
            }, "建议您："), n.a.createElement("div", {
                className: "clearfix right-content-text",
                "data-v-6f0ef1de": ""
            }, n.a.createElement("span", {
                className: "floatLeft",
                "data-v-6f0ef1de": ""
            }, "1.联系在线客服，协助找货。"), n.a.createElement("a", {
                className: "floatRight find-service-btn",
                href: "javascript:;",
                "data-v-6f0ef1de": ""
            }, "在线客服")), n.a.createElement("div", {
                className: "clearfix right-content-text",
                "data-v-6f0ef1de": ""
            }, n.a.createElement("span", {
                className: "floatLeft",
                "data-v-6f0ef1de": ""
            }, "2.留下采购意向，人工帮忙找货。"), n.a.createElement("a", {
                className: "floatRight",
                href: "https://www.zkh.com/list/market-467.html",
                target: "_blank",
                "data-v-6f0ef1de": ""
            }, "人工帮找")))))
        })
    }
}, [[1300, 70, 1, 3, 2, 0]]]);
