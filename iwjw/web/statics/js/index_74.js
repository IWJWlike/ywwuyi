webpackJsonp([30], {
    0: function (t, e, i) {
        (function (t, e, $, n, s) {
            'use strict';

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            var a = i(1137), r = o(a), l = t, h = i(534), c = (e.Dialog, navigator.appVersion.match('MSIE 8.0'));
            i(1142), i(1156), '2' === pageConfig.provinceId && (0, r["default"])($('.index-housetopic')[0]), i(611), i(1158), i(1159);
            var d = {
                init: function () {
                    var t = this;
                    $('.banner-search').removeClass('original'), $('.form-mask ').addClass('mask-input'), $('.mod-search').each(function () {
                        $(this);
                        new h($(this), {hintSubmit: 'link'})
                    }), $('.kw-input').focus(), function () {
                        var e = $('.search-form'), i = $('.search-tab.active').index() + 1,
                            n = {1: 13, 2: 76, 3: 132, 4: 204, 5: 285};
                        e.find('.triangle-search').css({left: n[i]}), t.resetInput(pageConfig.ht)
                    }()
                }, resetInput: function (t) {
                    var e = $('.search-form');
                    '3' === t ? (e.find('.btn-map').html('搜索'), e.find('.kw-input').attr('placeholder', '请输入楼盘、地铁、区域板块…'), e.find('.mod-search').attr('action', $('.search-tab.active').data('action')), c && e.find('.placeholder-inp-label').html('请输入楼盘、地铁、区域板块…')) : e.find('.mod-search').attr('action', $('.search-tab.active').data('actionmap'))
                }
            };
            d.init(), $('.search-tab').click(function () {
                var t = $(this), e = t.index() + 1, i = $('.search-form'), n = t.data('housetype');
                if (!t.hasClass('active')) {
                    var s = {1: 13, 2: 76, 3: 132, 4: 204, 5: 285};
                    i.find('.triangle-search').css({left: s[e]}), i.find('.banner-describe').addClass('hide'), i.find('.ht' + n).removeClass('hide'), t.addClass('active').siblings().removeClass('active');
                    var o = function (e) {
                        var s = e.placeholder, o = e.actionName;
                        i.find('.btn-map').html('搜索'), i.find('.kw-input').attr('placeholder', s), c && i.find('.placeholder-inp-label').html(s), i.find('.mod-search').attr('action', t.data(o)).data('housetype', n)
                    };
                    o(3 == n ? {
                        placeholder: '请输入楼盘、地铁、区域板块…',
                        actionName: 'action'
                    } : 4 == n ? {
                        placeholder: '请输入小区、地铁、区域板块…',
                        actionName: 'action'
                    } : 'price' == n ? {
                        placeholder: '请输入小区或区域板块查询房价…',
                        actionName: 'action'
                    } : {placeholder: '请输入小区、地铁、区域板块…', actionName: 'actionmap'})
                }
            });
            var p = {date: [], data: {g: [], c: [], l: []}};
            if (window.pageConfig.index.data) for (var u = JSON.parse(window.pageConfig.index.data).reverse(), f = 0; f < u.length; f++) {
                var g = u[f];
                p.date.push(g.quotationDate), p.data.g.push(g.listingFold), p.data.c.push(g.turnoverFold), p.data.l.push(g.turnoverQuantity)
            }
            var v = p.data, y = 0, x = 0, b = [];
            if (v.g.length) {
                for (var k = 0, f = 0; f < v.g.length; f++) k += v.g[f];
                var w = v.g.slice();
                w = w.sort(function (t, e) {
                    return t - e
                }), y = w[0], x = w[w.length - 1], !x && y && (x = y), k > 0 ? ($('#mean').html(l.formatPrice(parseInt(k / 6))), $('#volume').parent().addClass('title-border'), b.push({
                    name: '挂牌价',
                    animation: !1,
                    data: v.g,
                    fillColor: 'rgba(255,255,255,0)',
                    color: '#e84a01',
                    lineColor: '#e9bea8',
                    marker: {lineWidth: 2, fillColor: '#fff', lineColor: '#e84a01', symbol: 'circle'}
                })) : $('#mean').parent().hide()
            }
            if (v.c.length) {
                for (var M = 0, f = 0; f < v.c.length; f++) M += v.c[f];
                var S = v.c.slice();
                S = S.sort(function (t, e) {
                    return t - e
                });
                var C = S[0], T = S[S.length - 1];
                C < y && (y = C), T > x && (x = T), $('#volume').html(l.formatPrice(parseInt(M / 6))), b.push({
                    name: '成交价',
                    animation: !1,
                    data: v.c,
                    connectNulls: !0,
                    fillColor: 'rgba(255,255,255,0)',
                    lineColor: '#90d6c8',
                    color: '#00a282',
                    marker: {lineWidth: 2, fillColor: '#fff', lineColor: '#00a282', symbol: 'circle'}
                })
            }
            if (l.highChartConfig.xAxis.categories = p.date, y -= 2e3, v.g.length) {
                var A = $.extend(!0, {}, t.highChartConfig);
                A.series = b, A.yAxis.max = x, A.yAxis.min = y, $('#leftChart').highcharts(A)
            }
            if (v.c.length) {
                var P = $.extend(!0, {}, t.highChartConfig);
                P.series = [{
                    name: '成交量',
                    data: v.l,
                    fillColor: 'rgba(255,255,255,0)',
                    lineColor: '#90d6c8',
                    color: '#00a282',
                    marker: {lineWidth: 2, fillColor: '#fff', lineColor: '#00a282', symbol: 'circle'}
                }], $('#rightChart').highcharts(P)
            }
            var L = pageConfig.map && pageConfig.map.province, O = pageConfig.provinceId, I = '';
            n.map(L, function (t, e) {
                t.pid == O && (I = t.pinyin)
            }), $('.reg-send-card').on('click', function (t) {
                var e = $(this);
                s.verifyLogin(function () {
                    e.attr('href', '/activity/' + I + '/').attr('target', '_blank')
                }, !0)
            }), $('.index-sell-btn,.index-rent-btn').on('click', function () {
                return !1
            }), $('.l-caichan-img').mouseenter(function () {
                var t = $(this);
                t.find('img.l-icon-play').prop('src', pageConfig.staticUrl + i(677))
            }).mouseleave(function () {
                var e = $(this);
                e.find('img.l-icon-play').prop('src', t.videoBtnImg)
            }), $('.r-caichan-img,.r-img-title').mouseenter(function () {
                var t = $(this);
                t.find('.r-tiny-icon').prop('src', pageConfig.staticUrl + i(677))
            }).mouseleave(function () {
                var e = $(this);
                e.find('.r-tiny-icon').prop('src', t.videoBtnImg)
            })
        }).call(e, i(225), i(229), i(1), i(227), i(321))
    }, 534: function (t, e, i) {
        (function ($) {
            'use strict';

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var o = function () {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(), a = i(535), r = n(a), l = i(536), h = n(l), c = i(538), d = n(c), p = i(539), u = n(p), f = i(540),
                g = n(f), v = i(541), y = n(v);
            i(542);
            var x = function () {
                function t(e, i) {
                    s(this, t), this.options = $.extend(t.basicOptions, i), this.initNodes = {
                        $container: e,
                        $input: e.find('input[name="' + this.options.inputName + '"]')
                    }, this.initUiController(), this.nodes = $.extend(this.UiController.genNodes, this.initNodes), delete this.initNodes, this.initFuncController(), this.bindEvents()
                }

                return o(t, [{
                    key: 'initUiController', value: function () {
                        this.UiController = (0, h["default"])(this.initNodes, this.options)
                    }
                }, {
                    key: 'initFuncController', value: function () {
                        var t = this.options;
                        this.DataFactory = (0, d["default"])(this.nodes, t), this.FuncController = (0, r["default"])(this.nodes, t), this.Callback = (0, u["default"])(this.nodes, t), this.Store = (0, g["default"])(this.nodes, t, this.UiController)
                    }
                }, {
                    key: 'setOptions', value: function (t) {
                        $.extend(this.options, t)
                    }
                }, {
                    key: 'bindEvents', value: function () {
                        var t = this.options, e = t.hintSubmit, i = t.exactMatch,
                            n = (t.hintClickCallback, this.UiController), s = this.FuncController, o = this.DataFactory,
                            a = this.Callback, r = this.Store, l = this.nodes, h = l.$container, c = l.$input,
                            d = l.$hintPanel, p = l.$cancelBtn, u = 0;
                        c.on("focus", function () {
                            if (u > 0) {
                                var t = o.getData();
                                n.dealCancelBtn(), t.panelType == t.houseType && d.find('.hint-item').size() && '' != $.trim(t.value) ? n.dealHintPanel() : '' == $.trim(t.value) ? (r.__loadSearchStore(), o.setData({panelType: t.houseType})) : s.changePanelData(o, n), o.setData({selectedItem: null})
                            }
                            u++
                        }).click(function () {
                            return 1 == u && (u++, c.trigger('focus'), !1)
                        }).keyup(function (t) {
                            var e = t.keyCode;
                            if (38 != e && 40 != e) {
                                n.dealCancelBtn();
                                var i = o.getData(), a = i.value;
                                d.scrollTop(0), '' == a ? r.__loadSearchStore() : s.changePanelData(o, n)
                            }
                        }).keydown(function (t) {
                            var i = t.keyCode, s = o.getData(), r = (s.selectedItem, s.value);
                            if (a.inputWorldCallback(c, t), d.is(':visible')) switch (i) {
                                case 27:
                                case 13:
                                    if (0 == d.find('.active').length && r == d.children().first().find('.key-txt').text() && r.trim() && o.setData({selectedItem: d.children().first()}), d.hide(), a.inputWorldCallback(r, t), 'nosubmit' === e) return !1;
                                    h.find('button[type="submit"], input[type="submit"]').size() || h.submit();
                                    break;
                                case 38:
                                case 40:
                                    n.dealKeyHintPanel(i), o.setData({selectedItem: d.find('.hint-item.active')})
                            }
                        }).blur(function () {
                            var t = 1e3, e = Date.now();
                            return function () {
                                var n = Date.now();
                                i && n - e > t && (e = n, 1 == d.children().length && d.children().trigger('click'))
                            }
                        }()), p.on('click', function () {
                            n.dealCancelBtn('click')
                        }), h.on('click', '.hint-item', function (t) {
                            var i = $(this);
                            o.setData({selectedItem: i});
                            var l = o.getData();
                            (0, y["default"])('click', l, d.data('inputWord')), n.itemToInput(i);
                            var h = o.getData(), c = h.selectedItem, p = (h.$input, h.value), u = c ? c : p.trim();
                            u && r.__storeSearchKey(u);
                            var f = a.hintClickCallback(i);
                            if (f) return !1;
                            switch (e) {
                                case'nosubmit':
                                    return !1;
                                case'form':
                                    a.submitCallback(h);
                                    break;
                                case"link":
                                    s.jumpLink(h)
                            }
                        }), h.submit(function (t) {
                            0 == d.find('.active').length && c.val() == d.children().first().find('.key-txt').text() && c.val().trim() && o.setData({selectedItem: d.children().first()}), d.hide();
                            var i = o.getData(), n = i.selectedItem, l = i.value, h = n ? n : l.trim();
                            switch (h && r.__storeSearchKey(h), (0, y["default"])('enter', i), e) {
                                case'nosubmit':
                                    return !1;
                                case'form':
                                    a.submitCallback && a.submitCallback(i);
                                    break;
                                case"link":
                                    s.jumpLink(i)
                            }
                            return !1
                        })
                    }
                }]), t
            }();
            x.basicOptions = {
                provinceId: '',
                showClose: !0,
                showHintHistory: !0,
                exactMatch: !1,
                inputName: 'kw',
                itemKeyName: 'text',
                appendEstateName: !0,
                hintSubmit: 'form',
                autoSubmit: !0,
                hintUrl: '/getSuggestions.action',
                hintUrlAuthMethodName: !1,
                inputWorldCallback: $.noop,
                hintRequestCallback: $.noop,
                hintClickCallback: $.noop,
                submitCallback: $.noop,
                currentHouseType: 1,
                $submitBtn: '',
                __tipsTitle: {2: '板块', 5: '地铁'}
            }, e["default"] = x, t.exports = e['default']
        }).call(e, i(1))
    }, 535: function (t, e, i) {
        (function ($, i, n) {
            'use strict';
            Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e) {
                var s = t.$hintPanel, o = e.hintUrl, a = e.hintRequestCallback, r = e.hintUrlAuthMethodName, l = null,
                    h = function (t, e) {
                        var n = t.getData(), h = n.provinceId, c = n.value, d = n.houseType, p = n.mapType;
                        if (!c || '' == $.trim(c)) return !1;
                        l && l.abort();
                        var u = {p: h, kw: c, ht: d, mapType: p};
                        return l = r ? i.authAjax(o, u, r) : $.get(o, u), (r ? l : new Promise(function (t, e) {
                            return l.then(t).fail(e)
                        })).then(function (i) {
                            1 == i.status && (e.renderHintPanel(i, c), a && a(i.data, s), t.setData({panelType: d}))
                        })["catch"](function (t) {
                            return 'abort' !== (t || {}).statusText && void s.hide()
                        }), !0
                    }, c = function (t) {
                        var e = t.action, i = t.queryType, n = t.name, s = t.value, o = t.selectedItem,
                            a = (t.houseType, ''), r = '';
                        if ($.trim(s) && (a += n + '=' + encodeURIComponent(s) + '&t=' + i), o) {
                            var l = o.data('grade'), h = o.data('id'), c = (o.data('code'), o.data('lon')),
                                d = o.data('lat');
                            l && h && ('/sale/map/' === e || '/chuzu/map/' === e ? 3 == l || 9 == l ? (r += 'grade' + l, r += 'areaId' + h, r += 'lon' + c, r += 'lat' + d) : (r += 'rg' + l, r += 'rid' + h) : (r += 'g' + l, r += 'id' + h))
                        }
                        var p = e + r + (a ? '?' + a : '');
                        window.location.href = p
                    };
                return {changePanelData: n.debounce(h, 200), jumpLink: c}
            }, t.exports = e['default']
        }).call(e, i(1), i(225), i(227))
    }, 536: function (t, e, i) {
        (function ($, n, s, o) {
            'use strict';
            Object.defineProperty(e, "__esModule", {value: !0});
            var a = i(537);
            e["default"] = function (t, e) {
                var i = e.exactMatch, r = e.appendEstateName, l = e.__tipsTitle, h = t.$container, c = t.$input;
                !function () {
                    $(a.hintWrapTpl).appendTo(e.hintContainer || h), $(a.cancelBtnTpl).insertAfter(c), h.find('input[name="t"]').size() || $(a.hiddenInputTpl).appendTo(h)
                }();
                var d = h.find('.hint-wrap'), p = h.find('.search-close'), u = h.find('input[name="t"]'),
                    f = function (t) {
                        'click' == t || '' == c.val() ? (p.hide(), c.val('')) : p.show()
                    }, g = function (t) {
                        var e = d.find('.hint-item.active');
                        e.removeClass('active');
                        var i = d.find('.hint-item');
                        if (38 == t) if (e.size()) {
                            var n = e.prev();
                            n.size() ? n.addClass('active') : i.last().addClass('active')
                        } else i.last().addClass('active'); else if (e.size()) {
                            var s = e.next();
                            s.size() ? s.addClass('active') : i.first().addClass('active')
                        } else i.first().addClass('active');
                        var o = d.find('.hint-item.active');
                        c.val(o.data('key')), o.index() >= 6 ? d.scrollTop(o.index() * o.height()) : d.scrollTop(0)
                    }, v = function (t) {
                        c.val(t.data('key')), d.find('.hint-item').removeClass('active'), t.addClass('active'), $.fn.placeholderClean && c.placeholderClean(), u.val(t.data('querytype')), d.hide()
                    }, y = function () {
                        d.find('.active').removeClass('active'), d.children() && d.show(), $(document).one('click', function () {
                            i && 1 !== d.children().length && d.is(':visible') && d.find('.active').trigger('click'), d.hide()
                        })
                    }, x = function (t, h) {
                        if (t.data && 0 == t.data.length) d.empty().hide(); else if (t.data) {
                            d.empty();
                            var p = new RegExp('(' + h + ')', 'gi');
                            n.each(t.data, function (t) {
                                var i = t[e.itemKeyName] || t.key || t.text;
                                if (!i) return !0;
                                t.key = i, i.length > 50 && (t.title = i), i = i.substr(0, 50), t.uikey = i.replace(p, function (t, e) {
                                    return '<span class="bold">' + s.escapeHtml(e) + '</span>'
                                });
                                var n = t.tip;
                                n = n ? n.substr(0, 48 - i.length) : '', t.tip = n, t.queryType = 3, t.tipsTitle = l[t.grade]
                            });
                            var u = o.draw(a.hintItemTpl, {hints: t.data, isAppendEstateName: r});
                            d.html(u), d.data('inputWord', h), y()
                        }
                        i && 1 == d.children().length && c.val() == d.find('.key-txt').text() && d.children().trigger('click')
                    };
                return {
                    genNodes: {$hintPanel: d, $cancelBtn: p, $typeInput: u},
                    dealCancelBtn: f,
                    itemToInput: v,
                    dealHintPanel: y,
                    dealKeyHintPanel: g,
                    renderHintPanel: x
                }
            }, t.exports = e['default']
        }).call(e, i(1), i(227), i(225), i(226))
    }, 537: function (t, e, i) {
        (function (i) {
            'use strict';
            Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
                hintItemTpl: "{{each hints}}<a class=\"hint-item\" title=\"{{$value.title}}\" data-grade=\"{{$value.g}}\" data-id=\"{{$value.id}}\" data-querytype=\"{{$value.queryType}}\" data-key=\"{{$value.key}}\" data-kw=\"{{$value.kw}}\" data-lon=\"{{$value.lon}}\" data-lat=\"{{$value.lat}}\" data-code=\"{{$value.code}}\">    <em class=\"iconfont\">        {{if $value.isHistory}}            &#xd64a;        {{else}}            {{if $value.g == 5 || $value.g == 4}} &#xd62d; {{else if $value.g == 2 || $value.g == 1}} &#xd605; {{else if $value.g == 7 || $value.g == 8}} &#xd655; {{else}} &#xd610; {{/if}}        {{/if}}    </em>    <span class=\"txt-wrap\">        <span class=\"key-txt\">{{#$value.uikey}}</span>        {{if (isAppendEstateName && $value.name)}}            <span class=\"key-estate\">[ {{$value.name }} ]</span>        {{/if}}        {{if $value.tip}}            <span class=\"tip-txt\">{{$value.tip}}</span>        {{/if}}        {{if $value.kw}}            <span class=\"kw-txt\">{{$value.kw}}</span>        {{/if}}    </span>    {{if $value.houseNum}}       <span class=\"key-housenum\">{{$value.houseNum}}套</span>    {{/if}}</a>{{/each}}",
                loadingTpl: "<div class=\"search-load\">   <img src=\"" + i.loadingSvg + "\" width=\"24\" height=\"24\" />   <span>正在搜索&nbsp;&nbsp;“{{value}}”</span></div>",
                hintWrapTpl: '<p class="hint-wrap"></p>',
                cancelBtnTpl: '<i class="iconfont search-close" title="清除内容">&#xd648;</i>',
                hiddenInputTpl: '<input name="t" type="hidden" value="1" />'
            }, t.exports = e['default']
        }).call(e, i(225))
    }, 538: function (t, e, i) {
        (function ($) {
            'use strict';
            Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e) {
                var i = t.$typeInput, n = t.$container, s = t.$input,
                    o = {selectedItem: null, $input: s, panelType: n.data('housetype')}, a = function (t) {
                        var a = e.provinceId, r = {
                            action: n.attr('action') || '',
                            queryType: i.val() || '',
                            houseType: n.data('housetype'),
                            name: s.attr('name') || '',
                            provinceId: n.data('provinceid') || a,
                            value: s.val().replace(/<|>|&lt;|&gt/g, '').replace(/\\/g, '').trim()
                        };
                        'price' == r.houseType && (r.houseType = 2, r.mapType = 2), 1 == r.houseType && (r.houseType = 5);
                        var l = $.extend(r, o);
                        return t ? l[t] : l
                    }, r = function (t) {
                        $.extend(o, t)
                    };
                return {getData: a, setData: r}
            }, t.exports = e['default']
        }).call(e, i(1))
    }, 539: function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e) {
            var i = t.$input, n = e.inputWorldCallback, s = e.submitCallback, o = e.hintClickCallback;
            return {
                submitCallback: function (t) {
                    var e = t.$input, i = t.selectedItem;
                    if (s) return s(e, i)
                }, hintClickCallback: function (t) {
                    if (i.blur(), o) return o(t)
                }, inputWorldCallback: n
            }
        }, t.exports = e["default"]
    }, 540: function (t, e, i) {
        (function (n, $, s, o) {
            'use strict';
            Object.defineProperty(e, "__esModule", {value: !0});
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, r = i(537);
            e["default"] = function (t, e, i) {
                var l = t.$container, h = t.$hintPanel, c = (e.provinceId, e.showHintHistory), d = e.__tipsTitle,
                    p = function () {
                        var t = l.data('housetype'), e = l.data('provinceid') || e,
                            i = n.getLocalStore('searchkey' + t + e) || '';
                        return i && i.split(',')
                    }, u = function (t) {
                        var e = this;
                        if (!t) return !1;
                        if ('string' == typeof t && !t.replace(/\\/g, '')) return !1;
                        var i = l.data('housetype'), o = l.data('provinceid') || o, r = '';
                        if (!c) return !1;
                        if ('object' == ('undefined' == typeof t ? 'undefined' : a(t))) {
                            var h = $(t);
                            r = h.data('key'), h.length && (t = r + '/' + h.data('grade') + '/' + h.data('id') + '/' + h.data('code'))
                        } else r = t;
                        var d = e.__getSearchKey() || [], p = [];
                        s.map(d, function (t, e) {
                            t.split('/')[0] != r && t != r && (/object/i.test(t) && '///' == t || p.push(t))
                        }), p.length >= 10 && p.pop(), p.unshift(t), n.setLocalStore('searchkey' + i + o, p.join(','))
                    }, f = function () {
                        var t = this, e = t.__getSearchKey();
                        if (h.empty(), !c) return !1;
                        if (e) {
                            e = s.filter(e, function (t) {
                                return !/object/i.test(t) && '' != t && '/' !== t
                            });
                            var a = s.map(e, function (t) {
                                var e = t.split('/');
                                return e.length > 1 && (t = e[0]), {
                                    isHistory: !0,
                                    uikey: n.escapeHtml(t),
                                    key: t,
                                    g: e[1],
                                    id: e[2],
                                    code: e[3],
                                    tipsTitle: d[e[1]],
                                    queryType: 2
                                }
                            });
                            if (a && a.length) {
                                var l = o.draw(r.hintItemTpl, {hints: a});
                                h.html(l), i.dealHintPanel()
                            } else h.hide()
                        } else h.hide()
                    };
                return {__getSearchKey: p, __storeSearchKey: u, __loadSearchStore: f}
            }, t.exports = e['default']
        }).call(e, i(225), i(1), i(227), i(226))
    }, 541: function (t, e, i) {
        (function ($) {
            'use strict';
            Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e, i) {
                var n = {}, s = e.selectedItem, o = e.value, a = e.houseType, r = s && s.data('querytype'),
                    l = s && s.data('key'),
                    h = (s && s.data('code'), s && (s.data('areaid') ? s.data('areaid') : s.data('id'))),
                    c = s && s.index(), d = s && s.data('grade'),
                    p = {queryType: 2 == r ? 0 : d, key: l, inputVal: i || o, cid: 2 == r ? 0 : h, tips: c + 1, ht: a},
                    u = {inputVal: o, ht: a};
                switch (t) {
                    case'click':
                        n = p;
                        break;
                    case'enter':
                        n = u;
                        break;
                    default:
                        n = u
                }
                $.jps.trigger('log', $.extend({type: 'search'}, n))
            }, t.exports = e['default']
        }).call(e, i(1))
    }, 542: 230, 611: function (t, e) {
        !function (e, i) {
            "object" == typeof t && t.exports ? t.exports = e.document ? i(e) : i : e.Highcharts = i(e)
        }("undefined" != typeof window ? window : this, function (t) {
            t = function () {
                var t = window, e = t.document, i = t.navigator && t.navigator.userAgent || "",
                    n = e && e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                    s = /(edge|msie|trident)/i.test(i) && !window.opera, m = !n, o = /Firefox/.test(i),
                    a = o && 4 > parseInt(i.split("Firefox/")[1], 10);
                return t.Highcharts ? t.Highcharts.error(16, !0) : {
                    product: "Highcharts",
                    version: "5.0.14",
                    deg2rad: 2 * Math.PI / 360,
                    doc: e,
                    hasBidiBug: a,
                    hasTouch: e && void 0 !== e.documentElement.ontouchstart,
                    isMS: s,
                    isWebKit: /AppleWebKit/.test(i),
                    isFirefox: o,
                    isTouchDevice: /(Mobile|Android|Windows Phone)/.test(i),
                    SVG_NS: "http://www.w3.org/2000/svg",
                    chartCount: 0,
                    seriesTypes: {},
                    symbolSizes: {},
                    svg: n,
                    vml: m,
                    win: t,
                    marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
                    noop: function () {
                    },
                    charts: []
                }
            }(), function (t) {
                var e = [], i = t.charts, n = t.doc, s = t.win;
                t.error = function (m, e) {
                    if (m = t.isNumber(m) ? "Highcharts error #" + m + ": www.highcharts.com/errors/" + m : m, e) throw Error(m);
                    s.console && console.log(m)
                }, t.Fx = function (t, e, i) {
                    this.options = e, this.elem = t, this.prop = i
                }, t.Fx.prototype = {
                    dSetter: function () {
                        var t, e = this.paths[0], i = this.paths[1], n = [], s = this.now, o = e.length;
                        if (1 === s) n = this.toD; else if (o === i.length && 1 > s) for (; o--;) t = parseFloat(e[o]), n[o] = isNaN(t) ? e[o] : s * parseFloat(i[o] - t) + t; else n = i;
                        this.elem.attr("d", n, null, !0)
                    }, update: function () {
                        var t = this.elem, e = this.prop, i = this.now, n = this.options.step;
                        this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, n && n.call(t, i, this)
                    }, run: function (t, i, n) {
                        var s, o = this, m = function (t) {
                            return !m.stopped && o.step(t)
                        };
                        this.startTime = +new Date, this.start = t, this.end = i, this.unit = n, this.now = this.start, this.pos = 0, m.elem = this.elem, m.prop = this.prop, m() && 1 === e.push(m) && (m.timerId = setInterval(function () {
                            for (s = 0; s < e.length; s++) e[s]() || e.splice(s--, 1);
                            e.length || clearInterval(m.timerId)
                        }, 13))
                    }, step: function (m) {
                        var e, i = +new Date, n = this.options, s = this.elem, o = n.complete, a = n.duration,
                            r = n.curAnim;
                        return s.attr && !s.element ? m = !1 : m || i >= a + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), e = r[this.prop] = !0, t.objectEach(r, function (t) {
                            !0 !== t && (e = !1)
                        }), e && o && o.call(s), m = !1) : (this.pos = n.easing((i - this.startTime) / a), this.now = this.start + (this.end - this.start) * this.pos, this.update(), m = !0), m
                    }, initPath: function (m, e, i) {
                        function n(t) {
                            var e, i;
                            for (h = t.length; h--;) e = "M" === t[h] || "L" === t[h], i = /[a-zA-Z]/.test(t[h + 3]), e && i && t.splice(h + 1, 0, t[h + 1], t[h + 2], t[h + 1], t[h + 2])
                        }

                        function s(t, e) {
                            for (; t.length < r;) {
                                t[0] = e[r - t.length];
                                var i = t.slice(0, u);
                                [].splice.apply(t, [0, 0].concat(i)), g && (i = t.slice(t.length - u), [].splice.apply(t, [t.length, 0].concat(i)), h--)
                            }
                            t[0] = "M"
                        }

                        function o(t, e) {
                            for (var i = (r - t.length) / u; 0 < i && i--;) l = t.slice().splice(t.length / v - u, u * v), l[0] = e[r - u - i * u], p && (l[u - 6] = l[u - 2], l[u - 5] = l[u - 1]), [].splice.apply(t, [t.length / v, 0].concat(l)), g && i--
                        }

                        e = e || "";
                        var a, r, l, h, c = m.startX, d = m.endX, p = -1 < e.indexOf("C"), u = p ? 7 : 3;
                        e = e.split(" "), i = i.slice();
                        var f, g = m.isArea, v = g ? 2 : 1;
                        if (p && (n(e), n(i)), c && d) {
                            for (h = 0; h < c.length; h++) {
                                if (c[h] === d[0]) {
                                    a = h;
                                    break
                                }
                                if (c[0] === d[d.length - c.length + h]) {
                                    a = h, f = !0;
                                    break
                                }
                            }
                            void 0 === a && (e = [])
                        }
                        return e.length && t.isNumber(a) && (r = i.length + a * v * u, f ? (s(e, i), o(i, e)) : (s(i, e), o(e, i))), [e, i]
                    }
                }, t.Fx.prototype.fillSetter = t.Fx.prototype.strokeSetter = function () {
                    this.elem.attr(this.prop, t.color(this.start).tweenTo(t.color(this.end), this.pos), null, !0)
                }, t.extend = function (t, e) {
                    var m;
                    t || (t = {});
                    for (m in e) t[m] = e[m];
                    return t
                }, t.merge = function () {
                    var m, e, i = arguments, n = {}, s = function (e, i) {
                        return "object" != typeof e && (e = {}), t.objectEach(i, function (n, o) {
                            !t.isObject(n, !0) || t.isClass(n) || t.isDOMElement(n) ? e[o] = i[o] : e[o] = s(e[o] || {}, n)
                        }), e
                    };
                    for (!0 === i[0] && (n = i[1], i = Array.prototype.slice.call(i, 2)), e = i.length, m = 0; m < e; m++) n = s(n, i[m]);
                    return n
                }, t.pInt = function (t, e) {
                    return parseInt(t, e || 10)
                }, t.isString = function (t) {
                    return "string" == typeof t
                }, t.isArray = function (t) {
                    return t = Object.prototype.toString.call(t), "[object Array]" === t || "[object Array Iterator]" === t
                }, t.isObject = function (m, e) {
                    return !(!m || "object" != typeof m || e && t.isArray(m))
                }, t.isDOMElement = function (m) {
                    return t.isObject(m) && "number" == typeof m.nodeType
                }, t.isClass = function (m) {
                    var e = m && m.constructor;
                    return !(!t.isObject(m, !0) || t.isDOMElement(m) || !e || !e.name || "Object" === e.name)
                }, t.isNumber = function (t) {
                    return "number" == typeof t && !isNaN(t)
                }, t.erase = function (t, e) {
                    for (var m = t.length; m--;) if (t[m] === e) {
                        t.splice(m, 1);
                        break
                    }
                }, t.defined = function (t) {
                    return void 0 !== t && null !== t
                }, t.attr = function (m, e, i) {
                    var n;
                    return t.isString(e) ? t.defined(i) ? m.setAttribute(e, i) : m && m.getAttribute && (n = m.getAttribute(e)) : t.defined(e) && t.isObject(e) && t.objectEach(e, function (t, e) {
                        m.setAttribute(e, t)
                    }), n
                }, t.splat = function (m) {
                    return t.isArray(m) ? m : [m]
                }, t.syncTimeout = function (t, e, i) {
                    return e ? setTimeout(t, e, i) : void t.call(0, i)
                }, t.pick = function () {
                    var t, e, i = arguments, n = i.length;
                    for (t = 0; t < n; t++) if (e = i[t], void 0 !== e && null !== e) return e
                }, t.css = function (m, e) {
                    t.isMS && !t.svg && e && void 0 !== e.opacity && (e.filter = "alpha(opacity=" + 100 * e.opacity + ")"), t.extend(m.style, e)
                }, t.createElement = function (m, e, i, s, o) {
                    m = n.createElement(m);
                    var a = t.css;
                    return e && t.extend(m, e), o && a(m, {
                        padding: 0,
                        border: "none",
                        margin: 0
                    }), i && a(m, i), s && s.appendChild(m), m
                }, t.extendClass = function (m, e) {
                    var i = function () {
                    };
                    return i.prototype = new m, t.extend(i.prototype, e), i
                }, t.pad = function (t, e, i) {
                    return Array((e || 2) + 1 - String(t).length).join(i || 0) + t
                }, t.relativeLength = function (t, e, i) {
                    return /%$/.test(t) ? e * parseFloat(t) / 100 + (i || 0) : parseFloat(t)
                }, t.wrap = function (t, e, i) {
                    var n = t[e];
                    t[e] = function () {
                        var t = Array.prototype.slice.call(arguments), e = arguments, s = this;
                        return s.proceed = function () {
                            n.apply(s, arguments.length ? arguments : e)
                        }, t.unshift(n), t = i.apply(this, t), s.proceed = null, t
                    }
                }, t.getTZOffset = function (m) {
                    var e = t.Date;
                    return 6e4 * (e.hcGetTimezoneOffset && e.hcGetTimezoneOffset(m) || e.hcTimezoneOffset || 0)
                }, t.dateFormat = function (m, e, i) {
                    if (!t.defined(e) || isNaN(e)) return t.defaultOptions.lang.invalidDate || "";
                    m = t.pick(m, "%Y-%m-%d %H:%M:%S");
                    var n = t.Date, s = new n(e - t.getTZOffset(e)), o = s[n.hcGetHours](), a = s[n.hcGetDay](),
                        r = s[n.hcGetDate](), l = s[n.hcGetMonth](), h = s[n.hcGetFullYear](),
                        c = t.defaultOptions.lang, d = c.weekdays, p = c.shortWeekdays, u = t.pad, n = t.extend({
                            a: p ? p[a] : d[a].substr(0, 3),
                            A: d[a],
                            d: u(r),
                            e: u(r, 2, " "),
                            w: a,
                            b: c.shortMonths[l],
                            B: c.months[l],
                            m: u(l + 1),
                            y: h.toString().substr(2, 2),
                            Y: h,
                            H: u(o),
                            k: o,
                            I: u(o % 12 || 12),
                            l: o % 12 || 12,
                            M: u(s[n.hcGetMinutes]()),
                            p: 12 > o ? "AM" : "PM",
                            P: 12 > o ? "am" : "pm",
                            S: u(s.getSeconds()),
                            L: u(Math.round(e % 1e3), 3)
                        }, t.dateFormats);
                    return t.objectEach(n, function (t, i) {
                        for (; -1 !== m.indexOf("%" + i);) m = m.replace("%" + i, "function" == typeof t ? t(e) : t)
                    }), i ? m.substr(0, 1).toUpperCase() + m.substr(1) : m
                }, t.formatSingle = function (m, e) {
                    var i = /\.([0-9])/, n = t.defaultOptions.lang;
                    return /f$/.test(m) ? (i = (i = m.match(i)) ? i[1] : -1, null !== e && (e = t.numberFormat(e, i, n.decimalPoint, -1 < m.indexOf(",") ? n.thousandsSep : ""))) : e = t.dateFormat(m, e), e
                }, t.format = function (m, e) {
                    for (var i, n, s, o, a, r = "{", l = !1, h = []; m && (r = m.indexOf(r), -1 !== r);) {
                        if (i = m.slice(0, r), l) {
                            for (i = i.split(":"), n = i.shift().split("."), o = n.length, a = e, s = 0; s < o; s++) a = a[n[s]];
                            i.length && (a = t.formatSingle(i.join(":"), a)), h.push(a)
                        } else h.push(i);
                        m = m.slice(r + 1), r = (l = !l) ? "}" : "{"
                    }
                    return h.push(m), h.join("")
                }, t.getMagnitude = function (t) {
                    return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
                }, t.normalizeTickInterval = function (m, e, i, n, s) {
                    var o, a = m;
                    for (i = t.pick(i, 1), o = m / i, e || (e = s ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === n && (1 === i ? e = t.grep(e, function (t) {
                        return 0 === t % 1
                    }) : .1 >= i && (e = [1 / i]))), n = 0; n < e.length && (a = e[n], !(s && a * i >= m || !s && o <= (e[n] + (e[n + 1] || e[n])) / 2)); n++) ;
                    return a = t.correctFloat(a * i, -Math.round(Math.log(.001) / Math.LN10))
                }, t.stableSort = function (t, e) {
                    var i, m, n = t.length;
                    for (m = 0; m < n; m++) t[m].safeI = m;
                    for (t.sort(function (t, n) {
                        return i = e(t, n), 0 === i ? t.safeI - n.safeI : i
                    }), m = 0; m < n; m++) delete t[m].safeI
                }, t.arrayMin = function (t) {
                    for (var e = t.length, i = t[0]; e--;) t[e] < i && (i = t[e]);
                    return i
                }, t.arrayMax = function (t) {
                    for (var e = t.length, i = t[0]; e--;) t[e] > i && (i = t[e]);
                    return i
                }, t.destroyObjectProperties = function (m, e) {
                    t.objectEach(m, function (t, i) {
                        t && t !== e && t.destroy && t.destroy(), delete m[i]
                    })
                }, t.discardElement = function (m) {
                    var e = t.garbageBin;
                    e || (e = t.createElement("div")), m && e.appendChild(m), e.innerHTML = ""
                }, t.correctFloat = function (t, e) {
                    return parseFloat(t.toPrecision(e || 14))
                }, t.setAnimation = function (m, e) {
                    e.renderer.globalAnimation = t.pick(m, e.options.chart.animation, !0)
                }, t.animObject = function (m) {
                    return t.isObject(m) ? t.merge(m) : {duration: m ? 500 : 0}
                }, t.timeUnits = {
                    millisecond: 1,
                    second: 1e3,
                    minute: 6e4,
                    hour: 36e5,
                    day: 864e5,
                    week: 6048e5,
                    month: 24192e5,
                    year: 314496e5
                }, t.numberFormat = function (m, e, i, n) {
                    m = +m || 0, e = +e;
                    var s, o, a = t.defaultOptions.lang, r = (m.toString().split(".")[1] || "").split("e")[0].length,
                        l = m.toString().split("e");
                    return -1 === e ? e = Math.min(r, 20) : t.isNumber(e) || (e = 2), o = (Math.abs(l[1] ? l[0] : m) + Math.pow(10, -Math.max(e, r) - 1)).toFixed(e), r = String(t.pInt(o)), s = 3 < r.length ? r.length % 3 : 0, i = t.pick(i, a.decimalPoint), n = t.pick(n, a.thousandsSep), m = (0 > m ? "-" : "") + (s ? r.substr(0, s) + n : ""), m += r.substr(s).replace(/(\d{3})(?=\d)/g, "$1" + n), e && (m += i + o.slice(-e)), l[1] && (m += "e" + l[1]), m
                }, Math.easeInOutSine = function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                }, t.getStyle = function (m, e, i) {
                    return "width" === e ? Math.min(m.offsetWidth, m.scrollWidth) - t.getStyle(m, "padding-left") - t.getStyle(m, "padding-right") : "height" === e ? Math.min(m.offsetHeight, m.scrollHeight) - t.getStyle(m, "padding-top") - t.getStyle(m, "padding-bottom") : ((m = s.getComputedStyle(m, void 0)) && (m = m.getPropertyValue(e), t.pick(i, !0) && (m = t.pInt(m))), m)
                }, t.inArray = function (t, e) {
                    return e.indexOf ? e.indexOf(t) : [].indexOf.call(e, t)
                }, t.grep = function (t, e) {
                    return [].filter.call(t, e)
                }, t.find = function (t, e) {
                    return [].find.call(t, e)
                }, t.map = function (t, e) {
                    for (var i = [], n = 0, m = t.length; n < m; n++) i[n] = e.call(t[n], t[n], n, t);
                    return i
                }, t.offset = function (t) {
                    var e = n.documentElement;
                    return t = t.getBoundingClientRect(), {
                        top: t.top + (s.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: t.left + (s.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }
                }, t.stop = function (t, i) {
                    for (var n = e.length; n--;) e[n].elem !== t || i && i !== e[n].prop || (e[n].stopped = !0)
                }, t.each = function (t, e, i) {
                    return Array.prototype.forEach.call(t, e, i)
                }, t.objectEach = function (t, e, i) {
                    for (var n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
                }, t.addEvent = function (m, e, i) {
                    function n(t) {
                        t.target = t.srcElement || s, i.call(m, t)
                    }

                    var o = m.hcEvents = m.hcEvents || {};
                    return m.addEventListener ? m.addEventListener(e, i, !1) : m.attachEvent && (m.hcEventsIE || (m.hcEventsIE = {}), i.hcGetKey || (i.hcGetKey = t.uniqueKey()), m.hcEventsIE[i.hcGetKey] = n, m.attachEvent("on" + e, n)), o[e] || (o[e] = []), o[e].push(i), function () {
                        t.removeEvent(m, e, i)
                    }
                }, t.removeEvent = function (m, e, i) {
                    function n(t, e) {
                        m.removeEventListener ? m.removeEventListener(t, e, !1) : m.attachEvent && (e = m.hcEventsIE[e.hcGetKey], m.detachEvent("on" + t, e))
                    }

                    function s() {
                        var i, s;
                        m.nodeName && (e ? (i = {}, i[e] = !0) : i = r, t.objectEach(i, function (t, e) {
                            if (r[e]) for (s = r[e].length; s--;) n(e, r[e][s])
                        }))
                    }

                    var o, a, r = m.hcEvents;
                    r && (e ? (o = r[e] || [], i ? (a = t.inArray(i, o), -1 < a && (o.splice(a, 1), r[e] = o), n(e, i)) : (s(), r[e] = [])) : (s(), m.hcEvents = {}))
                }, t.fireEvent = function (m, e, i, s) {
                    var o;
                    o = m.hcEvents;
                    var a, r;
                    if (i = i || {}, n.createEvent && (m.dispatchEvent || m.fireEvent)) o = n.createEvent("Events"), o.initEvent(e, !0, !0), t.extend(o, i), m.dispatchEvent ? m.dispatchEvent(o) : m.fireEvent(e, o); else if (o) for (o = o[e] || [], a = o.length, i.target || t.extend(i, {
                        preventDefault: function () {
                            i.defaultPrevented = !0
                        }, target: m, type: e
                    }), e = 0; e < a; e++) (r = o[e]) && !1 === r.call(m, i) && i.preventDefault();
                    s && !i.defaultPrevented && s(i)
                }, t.animate = function (m, e, i) {
                    var n, s, o, a, r = "";
                    t.isObject(i) || (a = arguments, i = {
                        duration: a[2],
                        easing: a[3],
                        complete: a[4]
                    }), t.isNumber(i.duration) || (i.duration = 400), i.easing = "function" == typeof i.easing ? i.easing : Math[i.easing] || Math.easeInOutSine, i.curAnim = t.merge(e), t.objectEach(e, function (a, l) {
                        t.stop(m, l), o = new t.Fx(m, i, l), s = null, "d" === l ? (o.paths = o.initPath(m, m.d, e.d), o.toD = e.d, n = 0, s = 1) : m.attr ? n = m.attr(l) : (n = parseFloat(t.getStyle(m, l)) || 0, "opacity" !== l && (r = "px")), s || (s = a), s && s.match && s.match("px") && (s = s.replace(/px/g, "")), o.run(n, s, r)
                    })
                }, t.seriesType = function (m, e, i, n, s) {
                    var o = t.getOptions(), a = t.seriesTypes;
                    return o.plotOptions[m] = t.merge(o.plotOptions[e], i), a[m] = t.extendClass(a[e] || function () {
                    }, n), a[m].prototype.type = m, s && (a[m].prototype.pointClass = t.extendClass(t.Point, s)), a[m]
                }, t.uniqueKey = function () {
                    var t = Math.random().toString(36).substring(2, 9), e = 0;
                    return function () {
                        return "highcharts-" + t + "-" + e++
                    }
                }(), s.jQuery && (s.jQuery.fn.highcharts = function () {
                    var m = [].slice.call(arguments);
                    if (this[0]) return m[0] ? (new (t[t.isString(m[0]) ? m.shift() : "Chart"])(this[0], m[0], m[1]), this) : i[t.attr(this[0], "data-highcharts-chart")]
                }), n && !n.defaultView && (t.getStyle = function (m, e) {
                    var i = {width: "clientWidth", height: "clientHeight"}[e];
                    return m.style[e] ? t.pInt(m.style[e]) : ("opacity" === e && (e = "filter"), i ? (m.style.zoom = 1, Math.max(m[i] - 2 * t.getStyle(m, "padding"), 0)) : (m = m.currentStyle[e.replace(/\-(\w)/g, function (t, e) {
                        return e.toUpperCase()
                    })], "filter" === e && (m = m.replace(/alpha\(opacity=([0-9]+)\)/, function (t, e) {
                        return e / 100
                    })), "" === m ? 1 : t.pInt(m)))
                }), Array.prototype.forEach || (t.each = function (t, e, i) {
                    for (var n = 0, m = t.length; n < m; n++) if (!1 === e.call(i, t[n], n, t)) return n
                }), Array.prototype.indexOf || (t.inArray = function (t, e) {
                    var i, n = 0;
                    if (e) for (i = e.length; n < i; n++) if (e[n] === t) return n;
                    return -1
                }), Array.prototype.filter || (t.grep = function (t, e) {
                    for (var i = [], n = 0, m = t.length; n < m; n++) e(t[n], n) && i.push(t[n]);
                    return i
                }), Array.prototype.find || (t.find = function (t, e) {
                    var i, n = t.length;
                    for (i = 0; i < n; i++) if (e(t[i], i)) return t[i]
                })
            }(t), function (t) {
                var e = t.each, i = t.isNumber, n = t.map, s = t.merge, m = t.pInt;
                t.Color = function (e) {
                    return this instanceof t.Color ? void this.init(e) : new t.Color(e)
                }, t.Color.prototype = {
                    parsers: [{
                        regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                        parse: function (t) {
                            return [m(t[1]), m(t[2]), m(t[3]), parseFloat(t[4], 10)]
                        }
                    }, {
                        regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (t) {
                            return [m(t[1]), m(t[2]), m(t[3]), 1]
                        }
                    }], names: {none: "rgba(255,255,255,0)", white: "#ffffff", black: "#000000"}, init: function (e) {
                        var i, s, m, o;
                        if ((this.input = e = this.names[e && e.toLowerCase ? e.toLowerCase() : ""] || e) && e.stops) this.stops = n(e.stops, function (e) {
                            return new t.Color(e[1])
                        }); else if (e && "#" === e.charAt() && (i = e.length, e = parseInt(e.substr(1), 16), 7 === i ? s = [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 1] : 4 === i && (s = [(3840 & e) >> 4 | (3840 & e) >> 8, (240 & e) >> 4 | 240 & e, (15 & e) << 4 | 15 & e, 1])), !s) for (m = this.parsers.length; m-- && !s;) o = this.parsers[m], (i = o.regex.exec(e)) && (s = o.parse(i));
                        this.rgba = s || []
                    }, get: function (t) {
                        var m, n = this.input, o = this.rgba;
                        return this.stops ? (m = s(n), m.stops = [].concat(m.stops), e(this.stops, function (e, i) {
                            m.stops[i] = [m.stops[i][0], e.get(t)]
                        })) : m = o && i(o[0]) ? "rgb" === t || !t && 1 === o[3] ? "rgb(" + o[0] + "," + o[1] + "," + o[2] + ")" : "a" === t ? o[3] : "rgba(" + o.join(",") + ")" : n, m
                    }, brighten: function (t) {
                        var n, s = this.rgba;
                        if (this.stops) e(this.stops, function (e) {
                            e.brighten(t)
                        }); else if (i(t) && 0 !== t) for (n = 0; 3 > n; n++) s[n] += m(255 * t), 0 > s[n] && (s[n] = 0), 255 < s[n] && (s[n] = 255);
                        return this
                    }, setOpacity: function (t) {
                        return this.rgba[3] = t, this
                    }, tweenTo: function (t, e) {
                        var i, m;
                        return t.rgba.length ? (i = this.rgba, t = t.rgba, m = 1 !== t[3] || 1 !== i[3], t = (m ? "rgba(" : "rgb(") + Math.round(t[0] + (i[0] - t[0]) * (1 - e)) + "," + Math.round(t[1] + (i[1] - t[1]) * (1 - e)) + "," + Math.round(t[2] + (i[2] - t[2]) * (1 - e)) + (m ? "," + (t[3] + (i[3] - t[3]) * (1 - e)) : "") + ")") : t = t.input || "none",
                            t
                    }
                }, t.color = function (e) {
                    return new t.Color(e)
                }
            }(t), function (t) {
                var e, i, n = t.addEvent, s = t.animate, m = t.attr, o = t.charts, a = t.color, r = t.css,
                    l = t.createElement, h = t.defined, c = t.deg2rad, d = t.destroyObjectProperties, p = t.doc,
                    u = t.each, f = t.extend, g = t.erase, v = t.grep, y = t.hasTouch, x = t.inArray, b = t.isArray,
                    k = t.isFirefox, w = t.isMS, M = t.isObject, S = t.isString, C = t.isWebKit, T = t.merge,
                    A = t.noop, P = t.objectEach, L = t.pick, O = t.pInt, I = t.removeEvent, D = t.stop, E = t.svg,
                    z = t.SVG_NS, N = t.symbolSizes, B = t.win;
                e = t.SVGElement = function () {
                    return this
                }, f(e.prototype, {
                    opacity: 1,
                    SVG_NS: z,
                    textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
                    init: function (t, e) {
                        this.element = "span" === e ? l(e) : p.createElementNS(this.SVG_NS, e), this.renderer = t
                    },
                    animate: function (e, i, n) {
                        return i = t.animObject(L(i, this.renderer.globalAnimation, !0)), 0 !== i.duration ? (n && (i.complete = n), s(this, e, i)) : (this.attr(e, null, n), i.step && i.step.call(this)), this
                    },
                    colorGradient: function (e, i, n) {
                        var s, o, a, r, l, c, d, p, f, g, v, y = this.renderer, x = [];
                        e.radialGradient ? o = "radialGradient" : e.linearGradient && (o = "linearGradient"), o && (a = e[o], l = y.gradients, d = e.stops, g = n.radialReference, b(a) && (e[o] = a = {
                            x1: a[0],
                            y1: a[1],
                            x2: a[2],
                            y2: a[3],
                            gradientUnits: "userSpaceOnUse"
                        }), "radialGradient" === o && g && !h(a.gradientUnits) && (r = a, a = T(a, y.getRadialAttr(g, r), {gradientUnits: "userSpaceOnUse"})), P(a, function (t, e) {
                            "id" !== e && x.push(e, t)
                        }), P(d, function (t) {
                            x.push(t)
                        }), x = x.join(","), l[x] ? g = l[x].attr("id") : (a.id = g = t.uniqueKey(), l[x] = c = y.createElement(o).attr(a).add(y.defs), c.radAttr = r, c.stops = [], u(d, function (e) {
                            0 === e[1].indexOf("rgba") ? (s = t.color(e[1]), p = s.get("rgb"), f = s.get("a")) : (p = e[1], f = 1), e = y.createElement("stop").attr({
                                offset: e[0],
                                "stop-color": p,
                                "stop-opacity": f
                            }).add(c), c.stops.push(e)
                        })), v = "url(" + y.url + "#" + g + ")", n.setAttribute(i, v), n.gradient = x, e.toString = function () {
                            return v
                        })
                    },
                    applyTextOutline: function (e) {
                        var i, n, s, o, a, r = this.element;
                        if (-1 !== e.indexOf("contrast") && (e = e.replace(/contrast/g, this.renderer.getContrast(r.style.fill))), e = e.split(" "), n = e[e.length - 1], (s = e[0]) && "none" !== s && t.svg) {
                            for (this.fakeTS = !0, e = [].slice.call(r.getElementsByTagName("tspan")), this.ySetter = this.xSetter, s = s.replace(/(^[\d\.]+)(.*?)$/g, function (t, e, i) {
                                return 2 * e + i
                            }), a = e.length; a--;) i = e[a], "highcharts-text-outline" === i.getAttribute("class") && g(e, r.removeChild(i));
                            o = r.firstChild, u(e, function (t, e) {
                                0 === e && (t.setAttribute("x", r.getAttribute("x")), e = r.getAttribute("y"), t.setAttribute("y", e || 0), null === e && r.setAttribute("y", 0)), t = t.cloneNode(1), m(t, {
                                    "class": "highcharts-text-outline",
                                    fill: n,
                                    stroke: n,
                                    "stroke-width": s,
                                    "stroke-linejoin": "round"
                                }), r.insertBefore(t, o)
                            })
                        }
                    },
                    attr: function (t, e, i, n) {
                        var s, o, a, r, l = this.element, h = this;
                        return "string" == typeof t && void 0 !== e && (s = t, t = {}, t[s] = e), "string" == typeof t ? h = (this[t + "Getter"] || this._defaultGetter).call(this, t, l) : (P(t, function (e, i) {
                            a = !1, n || D(this, i), this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(i) && (o || (this.symbolAttr(t), o = !0), a = !0), !this.rotation || "x" !== i && "y" !== i || (this.doTransform = !0), a || (r = this[i + "Setter"] || this._defaultSetter, r.call(this, e, i, l), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(i) && this.updateShadows(i, e, r))
                        }, this), this.afterSetters()), i && i(), h
                    },
                    afterSetters: function () {
                        this.doTransform && (this.updateTransform(), this.doTransform = !1)
                    },
                    updateShadows: function (t, e, i) {
                        for (var n = this.shadows, s = n.length; s--;) i.call(n[s], "height" === t ? Math.max(e - (n[s].cutHeight || 0), 0) : "d" === t ? this.d : e, t, n[s])
                    },
                    addClass: function (t, e) {
                        var i = this.attr("class") || "";
                        return -1 === i.indexOf(t) && (e || (t = (i + (i ? " " : "") + t).replace("  ", " ")), this.attr("class", t)), this
                    },
                    hasClass: function (t) {
                        return -1 !== x(t, (this.attr("class") || "").split(" "))
                    },
                    removeClass: function (t) {
                        return this.attr("class", (this.attr("class") || "").replace(t, ""))
                    },
                    symbolAttr: function (t) {
                        var e = this;
                        u("x y r start end width height innerR anchorX anchorY".split(" "), function (i) {
                            e[i] = L(t[i], e[i])
                        }), e.attr({d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)})
                    },
                    clip: function (t) {
                        return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none")
                    },
                    crisp: function (t, e) {
                        var i, n = this, s = {};
                        return e = e || t.strokeWidth || 0, i = Math.round(e) % 2 / 2, t.x = Math.floor(t.x || n.x || 0) + i, t.y = Math.floor(t.y || n.y || 0) + i, t.width = Math.floor((t.width || n.width || 0) - 2 * i), t.height = Math.floor((t.height || n.height || 0) - 2 * i), h(t.strokeWidth) && (t.strokeWidth = e), P(t, function (t, e) {
                            n[e] !== t && (n[e] = s[e] = t)
                        }), s
                    },
                    css: function (t) {
                        var e, i, n = this.styles, s = {}, o = this.element, a = "", l = !n,
                            h = ["textOutline", "textOverflow", "width"];
                        return t && t.color && (t.fill = t.color), n && P(t, function (t, e) {
                            t !== n[e] && (s[e] = t, l = !0)
                        }), l && (n && (t = f(n, s)), e = this.textWidth = t && t.width && "auto" !== t.width && "text" === o.nodeName.toLowerCase() && O(t.width), this.styles = t, e && !E && this.renderer.forExport && delete t.width, w && !E ? r(this.element, t) : (i = function (t, e) {
                            return "-" + e.toLowerCase()
                        }, P(t, function (t, e) {
                            -1 === x(e, h) && (a += e.replace(/([A-Z])/g, i) + ":" + t + ";")
                        }), a && m(o, "style", a)), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t && t.textOutline && this.applyTextOutline(t.textOutline))), this
                    },
                    strokeWidth: function () {
                        return this["stroke-width"] || 0
                    },
                    on: function (t, e) {
                        var i = this, n = i.element;
                        return y && "click" === t ? (n.ontouchstart = function (t) {
                            i.touchEventFired = Date.now(), t.preventDefault(), e.call(n, t)
                        }, n.onclick = function (t) {
                            (-1 === B.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (i.touchEventFired || 0)) && e.call(n, t)
                        }) : n["on" + t] = e, this
                    },
                    setRadialReference: function (t) {
                        var e = this.renderer.gradients[this.element.gradient];
                        return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
                    },
                    translate: function (t, e) {
                        return this.attr({translateX: t, translateY: e})
                    },
                    invert: function (t) {
                        return this.inverted = t, this.updateTransform(), this
                    },
                    updateTransform: function () {
                        var t = this.translateX || 0, e = this.translateY || 0, i = this.scaleX, n = this.scaleY,
                            s = this.inverted, o = this.rotation, a = this.element;
                        s && (t += this.width, e += this.height), t = ["translate(" + t + "," + e + ")"], s ? t.push("rotate(90) scale(-1,1)") : o && t.push("rotate(" + o + " " + (a.getAttribute("x") || 0) + " " + (a.getAttribute("y") || 0) + ")"), (h(i) || h(n)) && t.push("scale(" + L(i, 1) + " " + L(n, 1) + ")"), t.length && a.setAttribute("transform", t.join(" "))
                    },
                    toFront: function () {
                        var t = this.element;
                        return t.parentNode.appendChild(t), this
                    },
                    align: function (t, e, i) {
                        var n, s, o, a, r = {};
                        s = this.renderer, o = s.alignedObjects;
                        var l, h;
                        return t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || S(i)) && (this.alignTo = n = i || "renderer", g(o, this), o.push(this), i = null)) : (t = this.alignOptions, e = this.alignByTranslate, n = this.alignTo), i = L(i, s[n], s), n = t.align, s = t.verticalAlign, o = (i.x || 0) + (t.x || 0), a = (i.y || 0) + (t.y || 0), "right" === n ? l = 1 : "center" === n && (l = 2), l && (o += (i.width - (t.width || 0)) / l), r[e ? "translateX" : "x"] = Math.round(o), "bottom" === s ? h = 1 : "middle" === s && (h = 2), h && (a += (i.height - (t.height || 0)) / h), r[e ? "translateY" : "y"] = Math.round(a), this[this.placed ? "animate" : "attr"](r), this.placed = !0, this.alignAttr = r, this
                    },
                    getBBox: function (t, e) {
                        var i, n, s, o, a, r = this.renderer, l = this.element, h = this.styles, d = this.textStr,
                            p = r.cache, g = r.cacheKeys;
                        if (e = L(e, this.rotation), n = e * c, s = h && h.fontSize, void 0 !== d && (a = d.toString(), -1 === a.indexOf("<") && (a = a.replace(/[0-9]/g, "0")), a += ["", e || 0, s, h && h.width, h && h.textOverflow].join()), a && !t && (i = p[a]), !i) {
                            if (l.namespaceURI === this.SVG_NS || r.forExport) {
                                try {
                                    (o = this.fakeTS && function (t) {
                                        u(l.querySelectorAll(".highcharts-text-outline"), function (e) {
                                            e.style.display = t
                                        })
                                    }) && o("none"), i = l.getBBox ? f({}, l.getBBox()) : {
                                        width: l.offsetWidth,
                                        height: l.offsetHeight
                                    }, o && o("")
                                } catch (v) {
                                }
                                (!i || 0 > i.width) && (i = {width: 0, height: 0})
                            } else i = this.htmlGetBBox();
                            if (r.isSVG && (t = i.width, r = i.height, h && "11px" === h.fontSize && 17 === Math.round(r) && (i.height = r = 14), e && (i.width = Math.abs(r * Math.sin(n)) + Math.abs(t * Math.cos(n)), i.height = Math.abs(r * Math.cos(n)) + Math.abs(t * Math.sin(n)))), a && 0 < i.height) {
                                for (; 250 < g.length;) delete p[g.shift()];
                                p[a] || g.push(a), p[a] = i
                            }
                        }
                        return i
                    },
                    show: function (t) {
                        return this.attr({visibility: t ? "inherit" : "visible"})
                    },
                    hide: function () {
                        return this.attr({visibility: "hidden"})
                    },
                    fadeOut: function (t) {
                        var e = this;
                        e.animate({opacity: 0}, {
                            duration: t || 150, complete: function () {
                                e.attr({y: -9999})
                            }
                        })
                    },
                    add: function (t) {
                        var e, i = this.renderer, n = this.element;
                        return t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(n), this.onAdd && this.onAdd(), this
                    },
                    safeRemoveChild: function (t) {
                        var e = t.parentNode;
                        e && e.removeChild(t)
                    },
                    destroy: function () {
                        var t = this, e = t.element || {},
                            i = t.renderer.isSVG && "SPAN" === e.nodeName && t.parentGroup, n = e.ownerSVGElement;
                        if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, D(t), t.clipPath && n && (u(n.querySelectorAll("[clip-path]"), function (e) {
                                -1 < e.getAttribute("clip-path").indexOf(t.clipPath.element.id + ")") && e.removeAttribute("clip-path")
                            }), t.clipPath = t.clipPath.destroy()), t.stops) {
                            for (n = 0; n < t.stops.length; n++) t.stops[n] = t.stops[n].destroy();
                            t.stops = null
                        }
                        for (t.safeRemoveChild(e), t.destroyShadows(); i && i.div && 0 === i.div.childNodes.length;) e = i.parentGroup, t.safeRemoveChild(i.div), delete i.div, i = e;
                        return t.alignTo && g(t.renderer.alignedObjects, t), P(t, function (e, i) {
                            delete t[i]
                        }), null
                    },
                    shadow: function (t, e, i) {
                        var n, s, o, a, r, l, h = [], c = this.element;
                        if (t) {
                            if (!this.shadows) {
                                for (a = L(t.width, 3), r = (t.opacity || .15) / a, l = this.parentInverted ? "(-1,-1)" : "(" + L(t.offsetX, 1) + ", " + L(t.offsetY, 1) + ")", n = 1; n <= a; n++) s = c.cloneNode(0), o = 2 * a + 1 - 2 * n, m(s, {
                                    isShadow: "true",
                                    stroke: t.color || "#000000",
                                    "stroke-opacity": r * n,
                                    "stroke-width": o,
                                    transform: "translate" + l,
                                    fill: "none"
                                }), i && (m(s, "height", Math.max(m(s, "height") - o, 0)), s.cutHeight = o), e ? e.element.appendChild(s) : c.parentNode.insertBefore(s, c), h.push(s);
                                this.shadows = h
                            }
                        } else this.destroyShadows();
                        return this
                    },
                    destroyShadows: function () {
                        u(this.shadows || [], function (t) {
                            this.safeRemoveChild(t)
                        }, this), this.shadows = void 0
                    },
                    xGetter: function (t) {
                        return "circle" === this.element.nodeName && ("x" === t ? t = "cx" : "y" === t && (t = "cy")), this._defaultGetter(t)
                    },
                    _defaultGetter: function (t) {
                        return t = L(this[t], this.element ? this.element.getAttribute(t) : null, 0), /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)), t
                    },
                    dSetter: function (t, e, i) {
                        t && t.join && (t = t.join(" ")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t)
                    },
                    dashstyleSetter: function (t) {
                        var e, i = this["stroke-width"];
                        if ("inherit" === i && (i = 1), t = t && t.toLowerCase()) {
                            for (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), e = t.length; e--;) t[e] = O(t[e]) * i;
                            t = t.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
                        }
                    },
                    alignSetter: function (t) {
                        this.element.setAttribute("text-anchor", {left: "start", center: "middle", right: "end"}[t])
                    },
                    opacitySetter: function (t, e, i) {
                        this[e] = t, i.setAttribute(e, t)
                    },
                    titleSetter: function (t) {
                        var e = this.element.getElementsByTagName("title")[0];
                        e || (e = p.createElementNS(this.SVG_NS, "title"), this.element.appendChild(e)), e.firstChild && e.removeChild(e.firstChild), e.appendChild(p.createTextNode(String(L(t), "").replace(/<[^>]*>/g, "")))
                    },
                    textSetter: function (t) {
                        t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
                    },
                    fillSetter: function (t, e, i) {
                        "string" == typeof t ? i.setAttribute(e, t) : t && this.colorGradient(t, e, i)
                    },
                    visibilitySetter: function (t, e, i) {
                        "inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t
                    },
                    zIndexSetter: function (t, e) {
                        var i, n, s = this.renderer, o = this.parentGroup, a = (o || s).element || s.box,
                            r = this.element;
                        i = this.added;
                        var l;
                        if (h(t) && (r.zIndex = t, t = +t, this[e] === t && (i = !1), this[e] = t), i) {
                            for ((t = this.zIndex) && o && (o.handleZ = !0), e = a.childNodes, l = 0; l < e.length && !n; l++) o = e[l], i = o.zIndex, o !== r && (O(i) > t || !h(t) && h(i) || 0 > t && !h(i) && a !== s.box) && (a.insertBefore(r, o), n = !0);
                            n || a.appendChild(r)
                        }
                        return n
                    },
                    _defaultSetter: function (t, e, i) {
                        i.setAttribute(e, t)
                    }
                }), e.prototype.yGetter = e.prototype.xGetter, e.prototype.translateXSetter = e.prototype.translateYSetter = e.prototype.rotationSetter = e.prototype.verticalAlignSetter = e.prototype.scaleXSetter = e.prototype.scaleYSetter = function (t, e) {
                    this[e] = t, this.doTransform = !0
                }, e.prototype["stroke-widthSetter"] = e.prototype.strokeSetter = function (t, i, n) {
                    this[i] = t, this.stroke && this["stroke-width"] ? (e.prototype.fillSetter.call(this, this.stroke, "stroke", n), n.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === i && 0 === t && this.hasStroke && (n.removeAttribute("stroke"), this.hasStroke = !1)
                }, i = t.SVGRenderer = function () {
                    this.init.apply(this, arguments)
                }, f(i.prototype, {
                    Element: e, SVG_NS: z, init: function (t, e, i, s, o, a) {
                        var l;
                        s = this.createElement("svg").attr({
                            version: "1.1",
                            "class": "highcharts-root"
                        }).css(this.getStyle(s)), l = s.element, t.appendChild(l), -1 === t.innerHTML.indexOf("xmlns") && m(l, "xmlns", this.SVG_NS), this.isSVG = !0, this.box = l, this.boxWrapper = s, this.alignedObjects = [], this.url = (k || C) && p.getElementsByTagName("base").length ? B.location.href.replace(/#.*?$/, "").replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highcharts 5.0.14")), this.defs = this.createElement("defs").add(), this.allowHTML = a, this.forExport = o, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1);
                        var h;
                        k && t.getBoundingClientRect && (e = function () {
                            r(t, {
                                left: 0,
                                top: 0
                            }), h = t.getBoundingClientRect(), r(t, {
                                left: Math.ceil(h.left) - h.left + "px",
                                top: Math.ceil(h.top) - h.top + "px"
                            })
                        }, e(), this.unSubPixelFix = n(B, "resize", e))
                    }, getStyle: function (t) {
                        return this.style = f({
                            fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                            fontSize: "12px"
                        }, t)
                    }, setStyle: function (t) {
                        this.boxWrapper.css(this.getStyle(t))
                    }, isHidden: function () {
                        return !this.boxWrapper.getBBox().width
                    }, destroy: function () {
                        var t = this.defs;
                        return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), d(this.gradients || {}), this.gradients = null, t && (this.defs = t.destroy()), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null
                    }, createElement: function (t) {
                        var e = new this.Element;
                        return e.init(this, t), e
                    }, draw: A, getRadialAttr: function (t, e) {
                        return {cx: t[0] - t[2] / 2 + e.cx * t[2], cy: t[1] - t[2] / 2 + e.cy * t[2], r: e.r * t[2]}
                    }, getSpanWidth: function (t, e) {
                        var i = t.getBBox(!0).width;
                        return !E && this.forExport && (i = this.measureSpanWidth(e.firstChild.data, t.styles)), i
                    }, applyEllipsis: function (t, e, i, n) {
                        var s, o, a = t.rotation, r = i, l = 0, h = i.length, c = function (t) {
                            e.removeChild(e.firstChild), t && e.appendChild(p.createTextNode(t))
                        };
                        if (t.rotation = 0, r = this.getSpanWidth(t, e), o = r > n) {
                            for (; l <= h;) s = Math.ceil((l + h) / 2), r = i.substring(0, s) + "…", c(r), r = this.getSpanWidth(t, e), l === h ? l = h + 1 : r > n ? h = s - 1 : l = s;
                            0 === h && c("")
                        }
                        return t.rotation = a, o
                    }, buildText: function (t) {
                        var e, i, n, s, o, a, l = t.element, h = this, c = h.forExport, d = L(t.textStr, "").toString(),
                            f = -1 !== d.indexOf("<"), g = l.childNodes, y = m(l, "x"), x = t.styles, b = t.textWidth,
                            k = x && x.lineHeight, w = x && x.textOutline, M = x && "ellipsis" === x.textOverflow,
                            S = x && "nowrap" === x.whiteSpace, C = x && x.fontSize, T = g.length,
                            x = b && !t.added && this.box, A = function (t) {
                                var e;
                                return e = /(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : C || h.style.fontSize || 12, k ? O(k) : h.fontMetrics(e, t.getAttribute("style") ? t : l).h
                            };
                        if (o = [d, M, S, k, w, C, b].join(), o !== t.textCache) {
                            for (t.textCache = o; T--;) l.removeChild(g[T]);
                            f || w || M || b || -1 !== d.indexOf(" ") ? (e = /<.*class="([^"]+)".*>/, i = /<.*style="([^"]+)".*>/, n = /<.*href="([^"]+)".*>/, x && x.appendChild(l), d = f ? d.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [d], d = v(d, function (t) {
                                return "" !== t
                            }), u(d, function (o, d) {
                                var f, g = 0;
                                o = o.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"), f = o.split("|||"), u(f, function (o) {
                                    if ("" !== o || 1 === f.length) {
                                        var u, v, x = {}, k = p.createElementNS(h.SVG_NS, "tspan");
                                        if (e.test(o) && (u = o.match(e)[1], m(k, "class", u)), i.test(o) && (v = o.match(i)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), m(k, "style", v)), n.test(o) && !c && (m(k, "onclick", 'location.href="' + o.match(n)[1] + '"'), r(k, {cursor: "pointer"})), o = (o.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"), " " !== o) {
                                            if (k.appendChild(p.createTextNode(o)), g ? x.dx = 0 : d && null !== y && (x.x = y), m(k, x), l.appendChild(k), !g && a && (!E && c && r(k, {display: "block"}), m(k, "dy", A(k))), b) {
                                                x = o.replace(/([^\^])-/g, "$1- ").split(" "), u = 1 < f.length || d || 1 < x.length && !S;
                                                var w, C = [], T = A(k), P = t.rotation;
                                                for (M && (s = h.applyEllipsis(t, k, o, b)); !M && u && (x.length || C.length);) t.rotation = 0, w = h.getSpanWidth(t, k), o = w > b, void 0 === s && (s = o), o && 1 !== x.length ? (k.removeChild(k.firstChild), C.unshift(x.pop())) : (x = C, C = [], x.length && !S && (k = p.createElementNS(z, "tspan"), m(k, {
                                                    dy: T,
                                                    x: y
                                                }), v && m(k, "style", v), l.appendChild(k)), w > b && (b = w)), x.length && k.appendChild(p.createTextNode(x.join(" ").replace(/- /g, "-")));
                                                t.rotation = P
                                            }
                                            g++
                                        }
                                    }
                                }), a = a || l.childNodes.length
                            }), s && t.attr("title", t.textStr), x && x.removeChild(l), w && t.applyTextOutline && t.applyTextOutline(w)) : l.appendChild(p.createTextNode(d.replace(/&lt;/g, "<").replace(/&gt;/g, ">")))
                        }
                    }, getContrast: function (t) {
                        return t = a(t).rgba, 510 < t[0] + t[1] + t[2] ? "#000000" : "#FFFFFF"
                    }, button: function (t, e, i, s, o, a, r, l, h) {
                        var c = this.label(t, e, i, h, null, null, null, null, "button"), d = 0;
                        c.attr(T({padding: 8, r: 2}, o));
                        var p, u, g, v;
                        return o = T({
                            fill: "#f7f7f7",
                            stroke: "#cccccc",
                            "stroke-width": 1,
                            style: {color: "#333333", cursor: "pointer", fontWeight: "normal"}
                        }, o), p = o.style, delete o.style, a = T(o, {fill: "#e6e6e6"}, a), u = a.style, delete a.style, r = T(o, {
                            fill: "#e6ebf5",
                            style: {color: "#000000", fontWeight: "bold"}
                        }, r), g = r.style, delete r.style, l = T(o, {style: {color: "#cccccc"}}, l), v = l.style, delete l.style, n(c.element, w ? "mouseover" : "mouseenter", function () {
                            3 !== d && c.setState(1)
                        }), n(c.element, w ? "mouseout" : "mouseleave", function () {
                            3 !== d && c.setState(d)
                        }), c.setState = function (t) {
                            1 !== t && (c.state = d = t), c.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t || 0]), c.attr([o, a, r, l][t || 0]).css([p, u, g, v][t || 0])
                        }, c.attr(o).css(f({cursor: "default"}, p)), c.on("click", function (t) {
                            3 !== d && s.call(c, t)
                        })
                    }, crispLine: function (t, e) {
                        return t[1] === t[4] && (t[1] = t[4] = Math.round(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = Math.round(t[2]) + e % 2 / 2), t
                    }, path: function (t) {
                        var e = {fill: "none"};
                        return b(t) ? e.d = t : M(t) && f(e, t), this.createElement("path").attr(e)
                    }, circle: function (t, e, i) {
                        return t = M(t) ? t : {
                            x: t,
                            y: e,
                            r: i
                        }, e = this.createElement("circle"), e.xSetter = e.ySetter = function (t, e, i) {
                            i.setAttribute("c" + e, t)
                        }, e.attr(t)
                    }, arc: function (t, e, i, n, s, o) {
                        return M(t) ? (n = t, e = n.y, i = n.r, t = n.x) : n = {
                            innerR: n,
                            start: s,
                            end: o
                        }, t = this.symbol("arc", t, e, i, i, n), t.r = i, t
                    }, rect: function (t, e, i, n, s, o) {
                        s = M(t) ? t.r : s;
                        var a = this.createElement("rect");
                        return t = M(t) ? t : void 0 === t ? {} : {
                            x: t,
                            y: e,
                            width: Math.max(i, 0),
                            height: Math.max(n, 0)
                        }, void 0 !== o && (t.strokeWidth = o, t = a.crisp(t)), t.fill = "none", s && (t.r = s), a.rSetter = function (t, e, i) {
                            m(i, {rx: t, ry: t})
                        }, a.attr(t)
                    }, setSize: function (t, e, i) {
                        var n = this.alignedObjects, s = n.length;
                        for (this.width = t, this.height = e, this.boxWrapper.animate({
                            width: t,
                            height: e
                        }, {
                            step: function () {
                                this.attr({viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")})
                            }, duration: L(i, !0) ? void 0 : 0
                        }); s--;) n[s].align()
                    }, g: function (t) {
                        var e = this.createElement("g");
                        return t ? e.attr({"class": "highcharts-" + t}) : e
                    }, image: function (t, e, i, n, s) {
                        var o = {preserveAspectRatio: "none"};
                        return 1 < arguments.length && f(o, {
                            x: e,
                            y: i,
                            width: n,
                            height: s
                        }), o = this.createElement("image").attr(o), o.element.setAttributeNS ? o.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", t) : o.element.setAttribute("hc-svg-href", t), o
                    }, symbol: function (t, e, i, n, s, a) {
                        var c, d, g, v = this, y = /^url\((.*?)\)$/, x = y.test(t),
                            b = !x && (this.symbols[t] ? t : "circle"), k = b && this.symbols[b],
                            w = h(e) && k && k.call(this.symbols, Math.round(e), Math.round(i), n, s, a);
                        return k ? (c = this.path(w), c.attr("fill", "none"), f(c, {
                            symbolName: b,
                            x: e,
                            y: i,
                            width: n,
                            height: s
                        }), a && f(c, a)) : x && (d = t.match(y)[1], c = this.image(d), c.imgwidth = L(N[d] && N[d].width, a && a.width), c.imgheight = L(N[d] && N[d].height, a && a.height), g = function () {
                            c.attr({width: c.width, height: c.height})
                        }, u(["width", "height"], function (t) {
                            c[t + "Setter"] = function (t, e) {
                                var i = {}, n = this["img" + e], s = "width" === e ? "translateX" : "translateY";
                                this[e] = t, h(n) && (this.element && this.element.setAttribute(e, n), this.alignByTranslate || (i[s] = ((this[e] || 0) - n) / 2, this.attr(i)))
                            }
                        }), h(e) && c.attr({
                            x: e,
                            y: i
                        }), c.isImg = !0, h(c.imgwidth) && h(c.imgheight) ? g() : (c.attr({
                            width: 0,
                            height: 0
                        }), l("img", {
                            onload: function () {
                                var t = o[v.chartIndex];
                                0 === this.width && (r(this, {
                                    position: "absolute",
                                    top: "-999em"
                                }), p.body.appendChild(this)), N[d] = {
                                    width: this.width,
                                    height: this.height
                                }, c.imgwidth = this.width, c.imgheight = this.height, c.element && g(), this.parentNode && this.parentNode.removeChild(this), v.imgCount--, !v.imgCount && t && t.onload && t.onload()
                            }, src: d
                        }), this.imgCount++)), c
                    }, symbols: {
                        circle: function (t, e, i, n) {
                            return this.arc(t + i / 2, e + n / 2, i / 2, n / 2, {start: 0, end: 2 * Math.PI, open: !1})
                        }, square: function (t, e, i, n) {
                            return ["M", t, e, "L", t + i, e, t + i, e + n, t, e + n, "Z"]
                        }, triangle: function (t, e, i, n) {
                            return ["M", t + i / 2, e, "L", t + i, e + n, t, e + n, "Z"]
                        }, "triangle-down": function (t, e, i, n) {
                            return ["M", t, e, "L", t + i, e, t + i / 2, e + n, "Z"]
                        }, diamond: function (t, e, i, n) {
                            return ["M", t + i / 2, e, "L", t + i, e + n / 2, t + i / 2, e + n, t, e + n / 2, "Z"]
                        }, arc: function (t, e, i, n, s) {
                            var o = s.start, a = s.r || i, r = s.r || n || i, l = s.end - .001;
                            i = s.innerR, n = L(s.open, .001 > Math.abs(s.end - s.start - 2 * Math.PI));
                            var c = Math.cos(o), d = Math.sin(o), p = Math.cos(l), l = Math.sin(l);
                            return s = .001 > s.end - o - Math.PI ? 0 : 1, a = ["M", t + a * c, e + r * d, "A", a, r, 0, s, 1, t + a * p, e + r * l], h(i) && a.push(n ? "M" : "L", t + i * p, e + i * l, "A", i, i, 0, s, 0, t + i * c, e + i * d), a.push(n ? "" : "Z"), a
                        }, callout: function (t, e, i, n, s) {
                            var o = Math.min(s && s.r || 0, i, n), a = o + 6, r = s && s.anchorX;
                            s = s && s.anchorY;
                            var l;
                            return l = ["M", t + o, e, "L", t + i - o, e, "C", t + i, e, t + i, e, t + i, e + o, "L", t + i, e + n - o, "C", t + i, e + n, t + i, e + n, t + i - o, e + n, "L", t + o, e + n, "C", t, e + n, t, e + n, t, e + n - o, "L", t, e + o, "C", t, e, t, e, t + o, e], r && r > i ? s > e + a && s < e + n - a ? l.splice(13, 3, "L", t + i, s - 6, t + i + 6, s, t + i, s + 6, t + i, e + n - o) : l.splice(13, 3, "L", t + i, n / 2, r, s, t + i, n / 2, t + i, e + n - o) : r && 0 > r ? s > e + a && s < e + n - a ? l.splice(33, 3, "L", t, s + 6, t - 6, s, t, s - 6, t, e + o) : l.splice(33, 3, "L", t, n / 2, r, s, t, n / 2, t, e + o) : s && s > n && r > t + a && r < t + i - a ? l.splice(23, 3, "L", r + 6, e + n, r, e + n + 6, r - 6, e + n, t + o, e + n) : s && 0 > s && r > t + a && r < t + i - a && l.splice(3, 3, "L", r - 6, e, r, e - 6, r + 6, e, i - o, e), l
                        }
                    }, clipRect: function (e, i, n, s) {
                        var o = t.uniqueKey(), a = this.createElement("clipPath").attr({id: o}).add(this.defs);
                        return e = this.rect(e, i, n, s, 0).add(a), e.id = o, e.clipPath = a, e.count = 0, e
                    }, text: function (t, e, i, n) {
                        var s = !E && this.forExport, o = {};
                        return !n || !this.allowHTML && this.forExport ? (o.x = Math.round(e || 0), i && (o.y = Math.round(i)), (t || 0 === t) && (o.text = t), t = this.createElement("text").attr(o), s && t.css({position: "absolute"}), n || (t.xSetter = function (t, e, i) {
                            var n, s, o = i.getElementsByTagName("tspan"), a = i.getAttribute(e);
                            for (s = 0; s < o.length; s++) n = o[s], n.getAttribute(e) === a && n.setAttribute(e, t);
                            i.setAttribute(e, t)
                        }), t) : this.html(t, e, i)
                    }, fontMetrics: function (t, e) {
                        return t = t || e && e.style && e.style.fontSize || this.style && this.style.fontSize, t = /px/.test(t) ? O(t) : /em/.test(t) ? parseFloat(t) * (e ? this.fontMetrics(null, e.parentNode).f : 16) : 12, e = 24 > t ? t + 3 : Math.round(1.2 * t), {
                            h: e,
                            b: Math.round(.8 * e),
                            f: t
                        }
                    }, rotCorr: function (t, e, i) {
                        var n = t;
                        return e && i && (n = Math.max(n * Math.cos(e * c), 4)), {x: -t / 3 * Math.sin(e * c), y: n}
                    }, label: function (i, n, s, o, a, r, l, c, d) {
                        var p, g, v, y, x, m, b, k, w, M, S, C, A, P = this, L = P.g("button" !== d && "label"),
                            O = L.text = P.text("", 0, 0, l).attr({zIndex: 1}), D = 0, E = 3, z = 0, N = {},
                            B = /^url\((.*?)\)$/.test(o), _ = B;
                        d && L.addClass("highcharts-" + d), _ = B, M = function () {
                            return (k || 0) % 2 / 2
                        }, S = function () {
                            var t = O.element.style, e = {};
                            g = (void 0 === v || void 0 === y || b) && h(O.textStr) && O.getBBox(), L.width = (v || g.width || 0) + 2 * E + z, L.height = (y || g.height || 0) + 2 * E, w = E + P.fontMetrics(t && t.fontSize, O).b, _ && (p || (L.box = p = P.symbols[o] || B ? P.symbol(o) : P.rect(), p.addClass(("button" === d ? "" : "highcharts-label-box") + (d ? " highcharts-" + d + "-box" : "")), p.add(L), t = M(), e.x = t, e.y = (c ? -w : 0) + t), e.width = Math.round(L.width), e.height = Math.round(L.height), p.attr(f(e, N)), N = {})
                        }, C = function () {
                            var t, e = z + E;
                            t = c ? 0 : w, h(v) && g && ("center" === b || "right" === b) && (e += {
                                center: .5,
                                right: 1
                            }[b] * (v - g.width)), e === O.x && t === O.y || (O.attr("x", e), void 0 !== t && O.attr("y", t)), O.x = e, O.y = t
                        }, A = function (t, e) {
                            p ? p.attr(t, e) : N[t] = e
                        }, L.onAdd = function () {
                            O.add(L), L.attr({
                                text: i || 0 === i ? i : "",
                                x: n,
                                y: s
                            }), p && h(a) && L.attr({anchorX: a, anchorY: r})
                        }, L.widthSetter = function (e) {
                            v = t.isNumber(e) ? e : null
                        }, L.heightSetter = function (t) {
                            y = t
                        }, L["text-alignSetter"] = function (t) {
                            b = t
                        }, L.paddingSetter = function (t) {
                            h(t) && t !== E && (E = L.padding = t, C())
                        }, L.paddingLeftSetter = function (t) {
                            h(t) && t !== z && (z = t, C())
                        }, L.alignSetter = function (t) {
                            t = {left: 0, center: .5, right: 1}[t], t !== D && (D = t, g && L.attr({x: x}))
                        }, L.textSetter = function (t) {
                            void 0 !== t && O.textSetter(t), S(), C()
                        }, L["stroke-widthSetter"] = function (t, e) {
                            t && (_ = !0), k = this["stroke-width"] = t, A(e, t)
                        }, L.strokeSetter = L.fillSetter = L.rSetter = function (t, e) {
                            "r" !== e && ("fill" === e && t && (_ = !0), L[e] = t), A(e, t)
                        }, L.anchorXSetter = function (t, e) {
                            a = L.anchorX = t, A(e, Math.round(t) - M() - x)
                        }, L.anchorYSetter = function (t, e) {
                            r = L.anchorY = t, A(e, t - m)
                        }, L.xSetter = function (t) {
                            L.x = t, D && (t -= D * ((v || g.width) + 2 * E)), x = Math.round(t), L.attr("translateX", x)
                        }, L.ySetter = function (t) {
                            m = L.y = Math.round(t), L.attr("translateY", m)
                        };
                        var R = L.css;
                        return f(L, {
                            css: function (t) {
                                if (t) {
                                    var e = {};
                                    t = T(t), u(L.textProps, function (i) {
                                        void 0 !== t[i] && (e[i] = t[i], delete t[i])
                                    }), O.css(e)
                                }
                                return R.call(L, t)
                            }, getBBox: function () {
                                return {width: g.width + 2 * E, height: g.height + 2 * E, x: g.x - E, y: g.y - E}
                            }, shadow: function (t) {
                                return t && (S(), p && p.shadow(t)), L
                            }, destroy: function () {
                                I(L.element, "mouseenter"), I(L.element, "mouseleave"), O && (O = O.destroy()), p && (p = p.destroy()), e.prototype.destroy.call(L), L = P = S = C = A = null
                            }
                        })
                    }
                }), t.Renderer = i
            }(t), function (t) {
                var e = t.attr, i = t.createElement, n = t.css, s = t.defined, m = t.each, o = t.extend,
                    a = t.isFirefox, r = t.isMS, l = t.isWebKit, h = t.pInt, c = t.SVGRenderer, d = t.win, p = t.wrap;
                o(t.SVGElement.prototype, {
                    htmlCss: function (t) {
                        var e = this.element;
                        return (e = t && "SPAN" === e.tagName && t.width) && (delete t.width, this.textWidth = e, this.updateTransform()), t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap", t.overflow = "hidden"), this.styles = o(this.styles, t), n(this.element, t), this
                    }, htmlGetBBox: function () {
                        var t = this.element;
                        return "text" === t.nodeName && (t.style.position = "absolute"), {
                            x: t.offsetLeft,
                            y: t.offsetTop,
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        }
                    }, htmlUpdateTransform: function () {
                        if (this.added) {
                            var t = this.renderer, e = this.element, i = this.translateX || 0, o = this.translateY || 0,
                                a = this.x || 0, r = this.y || 0, c = this.textAlign || "left",
                                d = {left: 0, center: .5, right: 1}[c], p = this.styles;
                            if (n(e, {marginLeft: i, marginTop: o}), this.shadows && m(this.shadows, function (t) {
                                    n(t, {marginLeft: i + 1, marginTop: o + 1})
                                }), this.inverted && m(e.childNodes, function (i) {
                                    t.invertChild(i, e)
                                }), "SPAN" === e.tagName) {
                                var u = this.rotation, f = h(this.textWidth), g = p && p.whiteSpace,
                                    v = [u, c, e.innerHTML, this.textWidth, this.textAlign].join();
                                v !== this.cTT && (p = t.fontMetrics(e.style.fontSize).b, s(u) && this.setSpanRotation(u, d, p), n(e, {
                                    width: "",
                                    whiteSpace: g || "nowrap"
                                }), e.offsetWidth > f && /[ \-]/.test(e.textContent || e.innerText) && n(e, {
                                    width: f + "px",
                                    display: "block",
                                    whiteSpace: g || "normal"
                                }), this.getSpanCorrection(e.offsetWidth, p, d, u, c)), n(e, {
                                    left: a + (this.xCorr || 0) + "px",
                                    top: r + (this.yCorr || 0) + "px"
                                }), l && (p = e.offsetHeight), this.cTT = v
                            }
                        } else this.alignOnAdd = !0
                    }, setSpanRotation: function (t, e, i) {
                        var s = {},
                            o = r ? "-ms-transform" : l ? "-webkit-transform" : a ? "MozTransform" : d.opera ? "-o-transform" : "";
                        s[o] = s.transform = "rotate(" + t + "deg)", s[o + (a ? "Origin" : "-origin")] = s.transformOrigin = 100 * e + "% " + i + "px", n(this.element, s)
                    }, getSpanCorrection: function (t, e, i) {
                        this.xCorr = -t * i, this.yCorr = -e
                    }
                }), o(c.prototype, {
                    html: function (t, n, s) {
                        var a = this.createElement("span"), r = a.element, l = a.renderer, h = l.isSVG,
                            c = function (t, e) {
                                m(["opacity", "visibility"], function (i) {
                                    p(t, i + "Setter", function (t, i, n, s) {
                                        t.call(this, i, n, s), e[n] = i
                                    })
                                })
                            };
                        return a.textSetter = function (t) {
                            t !== r.innerHTML && delete this.bBox, r.innerHTML = this.textStr = t, a.htmlUpdateTransform()
                        }, h && c(a, a.element.style), a.xSetter = a.ySetter = a.alignSetter = a.rotationSetter = function (t, e) {
                            "align" === e && (e = "textAlign"), a[e] = t, a.htmlUpdateTransform()
                        }, a.attr({text: t, x: Math.round(n), y: Math.round(s)}).css({
                            fontFamily: this.style.fontFamily,
                            fontSize: this.style.fontSize,
                            position: "absolute"
                        }), r.style.whiteSpace = "nowrap", a.css = a.htmlCss, h && (a.add = function (t) {
                            var n, s = l.box.parentNode, h = [];
                            if (this.parentGroup = t) {
                                if (n = t.div, !n) {
                                    for (; t;) h.push(t), t = t.parentGroup;
                                    m(h.reverse(), function (t) {
                                        var r, l = e(t.element, "class");
                                        l && (l = {className: l}), n = t.div = t.div || i("div", l, {
                                            position: "absolute",
                                            left: (t.translateX || 0) + "px",
                                            top: (t.translateY || 0) + "px",
                                            display: t.display,
                                            opacity: t.opacity,
                                            pointerEvents: t.styles && t.styles.pointerEvents
                                        }, n || s), r = n.style, o(t, {
                                            classSetter: function (t) {
                                                this.element.setAttribute("class", t), n.className = t
                                            }, on: function () {
                                                return h[0].div && a.on.apply({element: h[0].div}, arguments), t
                                            }, translateXSetter: function (e, i) {
                                                r.left = e + "px", t[i] = e, t.doTransform = !0
                                            }, translateYSetter: function (e, i) {
                                                r.top = e + "px", t[i] = e, t.doTransform = !0
                                            }
                                        }), c(t, r)
                                    })
                                }
                            } else n = s;
                            return n.appendChild(r), a.added = !0, a.alignOnAdd && a.htmlUpdateTransform(), a
                        }), a
                    }
                })
            }(t), function (t) {
                var e, i, n = t.createElement, s = t.css, m = t.defined, o = t.deg2rad, a = t.discardElement, r = t.doc,
                    l = t.each, h = t.erase, c = t.extend;
                e = t.extendClass;
                var d = t.isArray, p = t.isNumber, u = t.isObject, f = t.merge;
                i = t.noop;
                var g = t.pick, v = t.pInt, y = t.SVGElement, x = t.SVGRenderer, b = t.win;
                t.svg || (i = {
                    docMode8: r && 8 === r.documentMode, init: function (t, e) {
                        var i = ["<", e, ' filled="f" stroked="f"'], s = ["position: ", "absolute", ";"],
                            o = "div" === e;
                        ("shape" === e || o) && s.push("left:0;top:0;width:1px;height:1px;"), s.push("visibility: ", o ? "hidden" : "visible"), i.push(' style="', s.join(""), '"/>'), e && (i = o || "span" === e || "img" === e ? i.join("") : t.prepVML(i), this.element = n(i)), this.renderer = t
                    }, add: function (t) {
                        var e = this.renderer, i = this.element, n = e.box, s = t && t.inverted,
                            n = t ? t.element || t : n;
                        return t && (this.parentGroup = t), s && e.invertChild(i, n), n.appendChild(i), this.added = !0, this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform(), this.onAdd && this.onAdd(), this.className && this.attr("class", this.className), this
                    }, updateTransform: y.prototype.htmlUpdateTransform, setSpanRotation: function () {
                        var t = this.rotation, e = Math.cos(t * o), i = Math.sin(t * o);
                        s(this.element, {filter: t ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", e, ", M12=", -i, ", M21=", i, ", M22=", e, ", sizingMethod='auto expand')"].join("") : "none"})
                    }, getSpanCorrection: function (t, e, i, n, a) {
                        var r, l = n ? Math.cos(n * o) : 1, h = n ? Math.sin(n * o) : 0,
                            c = g(this.elemHeight, this.element.offsetHeight);
                        this.xCorr = 0 > l && -t, this.yCorr = 0 > h && -c, r = 0 > l * h, this.xCorr += h * e * (r ? 1 - i : i), this.yCorr -= l * e * (n ? r ? i : 1 - i : 1), a && "left" !== a && (this.xCorr -= t * i * (0 > l ? -1 : 1), n && (this.yCorr -= c * i * (0 > h ? -1 : 1)), s(this.element, {textAlign: a}))
                    }, pathToVML: function (t) {
                        for (var e = t.length, i = []; e--;) p(t[e]) ? i[e] = Math.round(10 * t[e]) - 5 : "Z" === t[e] ? i[e] = "x" : (i[e] = t[e], !t.isArc || "wa" !== t[e] && "at" !== t[e] || (i[e + 5] === i[e + 7] && (i[e + 7] += t[e + 7] > t[e + 5] ? 1 : -1), i[e + 6] === i[e + 8] && (i[e + 8] += t[e + 8] > t[e + 6] ? 1 : -1)));
                        return i.join(" ") || "x"
                    }, clip: function (t) {
                        var e, i = this;
                        return t ? (e = t.members, h(e, i), e.push(i), i.destroyClip = function () {
                            h(e, i)
                        }, t = t.getCSS(i)) : (i.destroyClip && i.destroyClip(), t = {clip: i.docMode8 ? "inherit" : "rect(auto)"}), i.css(t)
                    }, css: y.prototype.htmlCss, safeRemoveChild: function (t) {
                        t.parentNode && a(t)
                    }, destroy: function () {
                        return this.destroyClip && this.destroyClip(), y.prototype.destroy.apply(this)
                    }, on: function (t, e) {
                        return this.element["on" + t] = function () {
                            var t = b.event;
                            t.target = t.srcElement, e(t)
                        }, this
                    }, cutOffPath: function (t, e) {
                        var i;
                        return t = t.split(/[ ,]/), i = t.length, 9 !== i && 11 !== i || (t[i - 4] = t[i - 2] = v(t[i - 2]) - 10 * e), t.join(" ")
                    }, shadow: function (t, e, i) {
                        var s, o, a, r, l, h, c, d = [], p = this.element, u = this.renderer, f = p.style, y = p.path;
                        if (y && "string" != typeof y.value && (y = "x"), l = y, t) {
                            for (h = g(t.width, 3), c = (t.opacity || .15) / h, s = 1; 3 >= s; s++) r = 2 * h + 1 - 2 * s, i && (l = this.cutOffPath(y.value, r + .5)), a = ['<shape isShadow="true" strokeweight="', r, '" filled="false" path="', l, '" coordsize="10 10" style="', p.style.cssText, '" />'], o = n(u.prepVML(a), null, {
                                left: v(f.left) + g(t.offsetX, 1),
                                top: v(f.top) + g(t.offsetY, 1)
                            }), i && (o.cutOff = r + 1), a = ['<stroke color="', t.color || "#000000", '" opacity="', c * s, '"/>'], n(u.prepVML(a), null, null, o), e ? e.element.appendChild(o) : p.parentNode.insertBefore(o, p), d.push(o);
                            this.shadows = d
                        }
                        return this
                    }, updateShadows: i, setAttr: function (t, e) {
                        this.docMode8 ? this.element[t] = e : this.element.setAttribute(t, e);
                    }, classSetter: function (t) {
                        (this.added ? this.element : this).className = t
                    }, dashstyleSetter: function (t, e, i) {
                        (i.getElementsByTagName("stroke")[0] || n(this.renderer.prepVML(["<stroke/>"]), null, null, i))[e] = t || "solid", this[e] = t
                    }, dSetter: function (t, e, i) {
                        var n = this.shadows;
                        if (t = t || [], this.d = t.join && t.join(" "), i.path = t = this.pathToVML(t), n) for (i = n.length; i--;) n[i].path = n[i].cutOff ? this.cutOffPath(t, n[i].cutOff) : t;
                        this.setAttr(e, t)
                    }, fillSetter: function (t, e, i) {
                        var n = i.nodeName;
                        "SPAN" === n ? i.style.color = t : "IMG" !== n && (i.filled = "none" !== t, this.setAttr("fillcolor", this.renderer.color(t, i, e, this)))
                    }, "fill-opacitySetter": function (t, e, i) {
                        n(this.renderer.prepVML(["<", e.split("-")[0], ' opacity="', t, '"/>']), null, null, i)
                    }, opacitySetter: i, rotationSetter: function (t, e, i) {
                        i = i.style, this[e] = i[e] = t, i.left = -Math.round(Math.sin(t * o) + 1) + "px", i.top = Math.round(Math.cos(t * o)) + "px"
                    }, strokeSetter: function (t, e, i) {
                        this.setAttr("strokecolor", this.renderer.color(t, i, e, this))
                    }, "stroke-widthSetter": function (t, e, i) {
                        i.stroked = !!t, this[e] = t, p(t) && (t += "px"), this.setAttr("strokeweight", t)
                    }, titleSetter: function (t, e) {
                        this.setAttr(e, t)
                    }, visibilitySetter: function (t, e, i) {
                        "inherit" === t && (t = "visible"), this.shadows && l(this.shadows, function (i) {
                            i.style[e] = t
                        }), "DIV" === i.nodeName && (t = "hidden" === t ? "-999em" : 0, this.docMode8 || (i.style[e] = t ? "visible" : "hidden"), e = "top"), i.style[e] = t
                    }, xSetter: function (t, e, i) {
                        this[e] = t, "x" === e ? e = "left" : "y" === e && (e = "top"), this.updateClipping ? (this[e] = t, this.updateClipping()) : i.style[e] = t
                    }, zIndexSetter: function (t, e, i) {
                        i.style[e] = t
                    }
                }, i["stroke-opacitySetter"] = i["fill-opacitySetter"], t.VMLElement = i = e(y, i), i.prototype.ySetter = i.prototype.widthSetter = i.prototype.heightSetter = i.prototype.xSetter, i = {
                    Element: i,
                    isIE8: -1 < b.navigator.userAgent.indexOf("MSIE 8.0"),
                    init: function (t, e, i) {
                        var n, s;
                        if (this.alignedObjects = [], n = this.createElement("div").css({position: "relative"}), s = n.element, t.appendChild(n.element), this.isVML = !0, this.box = s, this.boxWrapper = n, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1), !r.namespaces.hcv) {
                            r.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                            try {
                                r.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                            } catch (o) {
                                r.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                            }
                        }
                    },
                    isHidden: function () {
                        return !this.box.offsetWidth
                    },
                    clipRect: function (t, e, i, n) {
                        var s = this.createElement(), o = u(t);
                        return c(s, {
                            members: [],
                            count: 0,
                            left: (o ? t.x : t) + 1,
                            top: (o ? t.y : e) + 1,
                            width: (o ? t.width : i) - 1,
                            height: (o ? t.height : n) - 1,
                            getCSS: function (t) {
                                var e = t.element, i = e.nodeName, n = t.inverted,
                                    s = this.top - ("shape" === i ? e.offsetTop : 0), o = this.left, e = o + this.width,
                                    a = s + this.height,
                                    s = {clip: "rect(" + Math.round(n ? o : s) + "px," + Math.round(n ? a : e) + "px," + Math.round(n ? e : a) + "px," + Math.round(n ? s : o) + "px)"};
                                return !n && t.docMode8 && "DIV" === i && c(s, {width: e + "px", height: a + "px"}), s
                            },
                            updateClipping: function () {
                                l(s.members, function (t) {
                                    t.element && t.css(s.getCSS(t))
                                })
                            }
                        })
                    },
                    color: function (e, i, s, o) {
                        var a, r, h, c = this, d = /^rgba/, p = "none";
                        if (e && e.linearGradient ? h = "gradient" : e && e.radialGradient && (h = "pattern"), h) {
                            var u, f, g, v, y, x, b, k = e.linearGradient || e.radialGradient, w = "";
                            e = e.stops;
                            var M, S = [], m = function () {
                                r = ['<fill colors="' + S.join(",") + '" opacity="', y, '" o:opacity2="', v, '" type="', h, '" ', w, 'focus="100%" method="any" />'], n(c.prepVML(r), null, null, i)
                            };
                            if (g = e[0], M = e[e.length - 1], 0 < g[0] && e.unshift([0, g[1]]), 1 > M[0] && e.push([1, M[1]]), l(e, function (e, i) {
                                    d.test(e[1]) ? (a = t.color(e[1]), u = a.get("rgb"), f = a.get("a")) : (u = e[1], f = 1), S.push(100 * e[0] + "% " + u), i ? (y = f, x = u) : (v = f, b = u)
                                }), "fill" === s) if ("gradient" === h) s = k.x1 || k[0] || 0, e = k.y1 || k[1] || 0, g = k.x2 || k[2] || 0, k = k.y2 || k[3] || 0, w = 'angle="' + (90 - 180 * Math.atan((k - e) / (g - s)) / Math.PI) + '"', m(); else {
                                var C, p = k.r, T = 2 * p, A = 2 * p, P = k.cx, L = k.cy, O = i.radialReference,
                                    p = function () {
                                        O && (C = o.getBBox(), P += (O[0] - C.x) / C.width - .5, L += (O[1] - C.y) / C.height - .5, T *= O[2] / C.width, A *= O[2] / C.height), w = 'src="' + t.getOptions().global.VMLRadialGradientURL + '" size="' + T + "," + A + '" origin="0.5,0.5" position="' + P + "," + L + '" color2="' + b + '" ', m()
                                    };
                                o.added ? p() : o.onAdd = p, p = x
                            } else p = u
                        } else d.test(e) && "IMG" !== i.tagName ? (a = t.color(e), o[s + "-opacitySetter"](a.get("a"), s, i), p = a.get("rgb")) : (p = i.getElementsByTagName(s), p.length && (p[0].opacity = 1, p[0].type = "solid"), p = e);
                        return p
                    },
                    prepVML: function (t) {
                        var e = this.isIE8;
                        return t = t.join(""), e ? (t = t.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), t = -1 === t.indexOf('style="') ? t.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : t.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : t = t.replace("<", "<hcv:"), t
                    },
                    text: x.prototype.html,
                    path: function (t) {
                        var e = {coordsize: "10 10"};
                        return d(t) ? e.d = t : u(t) && c(e, t), this.createElement("shape").attr(e)
                    },
                    circle: function (t, e, i) {
                        var n = this.symbol("circle");
                        return u(t) && (i = t.r, e = t.y, t = t.x), n.isCircle = !0, n.r = i, n.attr({x: t, y: e})
                    },
                    g: function (t) {
                        var e;
                        return t && (e = {
                            className: "highcharts-" + t,
                            "class": "highcharts-" + t
                        }), this.createElement("div").attr(e)
                    },
                    image: function (t, e, i, n, s) {
                        var o = this.createElement("img").attr({src: t});
                        return 1 < arguments.length && o.attr({x: e, y: i, width: n, height: s}), o
                    },
                    createElement: function (t) {
                        return "rect" === t ? this.symbol(t) : x.prototype.createElement.call(this, t)
                    },
                    invertChild: function (t, e) {
                        var i = this;
                        e = e.style;
                        var n = "IMG" === t.tagName && t.style;
                        s(t, {
                            flip: "x",
                            left: v(e.width) - (n ? v(n.top) : 1),
                            top: v(e.height) - (n ? v(n.left) : 1),
                            rotation: -90
                        }), l(t.childNodes, function (e) {
                            i.invertChild(e, t)
                        })
                    },
                    symbols: {
                        arc: function (t, e, i, n, s) {
                            var o = s.start, a = s.end, r = s.r || i || n;
                            i = s.innerR, n = Math.cos(o);
                            var l = Math.sin(o), h = Math.cos(a), c = Math.sin(a);
                            return 0 === a - o ? ["x"] : (o = ["wa", t - r, e - r, t + r, e + r, t + r * n, e + r * l, t + r * h, e + r * c], s.open && !i && o.push("e", "M", t, e), o.push("at", t - i, e - i, t + i, e + i, t + i * h, e + i * c, t + i * n, e + i * l, "x", "e"), o.isArc = !0, o)
                        }, circle: function (t, e, i, n, s) {
                            return s && m(s.r) && (i = n = 2 * s.r), s && s.isCircle && (t -= i / 2, e -= n / 2), ["wa", t, e, t + i, e + n, t + i, e + n / 2, t + i, e + n / 2, "e"]
                        }, rect: function (t, e, i, n, s) {
                            return x.prototype.symbols[m(s) && s.r ? "callout" : "square"].call(0, t, e, i, n, s)
                        }
                    }
                }, t.VMLRenderer = e = function () {
                    this.init.apply(this, arguments)
                }, e.prototype = f(x.prototype, i), t.Renderer = e), x.prototype.measureSpanWidth = function (t, e) {
                    var i = r.createElement("span");
                    return t = r.createTextNode(t), i.appendChild(t), s(i, e), this.box.appendChild(i), e = i.offsetWidth, a(i), e
                }
            }(t), function (t) {
                function e() {
                    var e = t.defaultOptions.global, i = r.moment;
                    if (e.timezone) {
                        if (i) return function (t) {
                            return -i.tz(t, e.timezone).utcOffset()
                        };
                        t.error(25)
                    }
                    return e.useUTC && e.getTimezoneOffset
                }

                function i() {
                    var i, n = t.defaultOptions.global, o = n.useUTC, l = o ? "getUTC" : "get",
                        h = o ? "setUTC" : "set";
                    t.Date = i = n.Date || r.Date, i.hcTimezoneOffset = o && n.timezoneOffset, i.hcGetTimezoneOffset = e(), i.hcMakeTime = function (t, e, n, s, r, l) {
                        var h;
                        return o ? (h = i.UTC.apply(0, arguments), h += m(h)) : h = new i(t, e, a(n, 1), a(s, 0), a(r, 0), a(l, 0)).getTime(), h
                    }, s("Minutes Hours Day Date Month FullYear".split(" "), function (t) {
                        i["hcGet" + t] = l + t
                    }), s("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "), function (t) {
                        i["hcSet" + t] = h + t
                    })
                }

                var n = t.color, s = t.each, m = t.getTZOffset, o = t.merge, a = t.pick, r = t.win;
                t.defaultOptions = {
                    colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
                    symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                    lang: {
                        loading: "Loading...",
                        months: "January February March April May June July August September October November December".split(" "),
                        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                        decimalPoint: ".",
                        numericSymbols: "kMGTPE".split(""),
                        resetZoom: "Reset zoom",
                        resetZoomTitle: "Reset zoom level 1:1",
                        thousandsSep: " "
                    },
                    global: {
                        useUTC: !0,
                        VMLRadialGradientURL: "http://code.highcharts.com/5.0.14/gfx/vml-radial-gradient.png"
                    },
                    chart: {
                        borderRadius: 0,
                        defaultSeriesType: "line",
                        ignoreHiddenSeries: !0,
                        spacing: [10, 10, 15, 10],
                        resetZoomButton: {theme: {zIndex: 20}, position: {align: "right", x: -10, y: 10}},
                        width: null,
                        height: null,
                        borderColor: "#335cad",
                        backgroundColor: "#ffffff",
                        plotBorderColor: "#cccccc"
                    },
                    title: {text: "Chart title", align: "center", margin: 15, widthAdjust: -44},
                    subtitle: {text: "", align: "center", widthAdjust: -44},
                    plotOptions: {},
                    labels: {style: {position: "absolute", color: "#333333"}},
                    legend: {
                        enabled: !0,
                        align: "center",
                        layout: "horizontal",
                        labelFormatter: function () {
                            return this.name
                        },
                        borderColor: "#999999",
                        borderRadius: 0,
                        navigation: {activeColor: "#003399", inactiveColor: "#cccccc"},
                        itemStyle: {color: "#333333", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis"},
                        itemHoverStyle: {color: "#000000"},
                        itemHiddenStyle: {color: "#cccccc"},
                        shadow: !1,
                        itemCheckboxStyle: {position: "absolute", width: "13px", height: "13px"},
                        squareSymbol: !0,
                        symbolPadding: 5,
                        verticalAlign: "bottom",
                        x: 0,
                        y: 0,
                        title: {style: {fontWeight: "bold"}}
                    },
                    loading: {
                        labelStyle: {fontWeight: "bold", position: "relative", top: "45%"},
                        style: {position: "absolute", backgroundColor: "#ffffff", opacity: .5, textAlign: "center"}
                    },
                    tooltip: {
                        enabled: !0,
                        animation: t.svg,
                        borderRadius: 3,
                        dateTimeLabelFormats: {
                            millisecond: "%A, %b %e, %H:%M:%S.%L",
                            second: "%A, %b %e, %H:%M:%S",
                            minute: "%A, %b %e, %H:%M",
                            hour: "%A, %b %e, %H:%M",
                            day: "%A, %b %e, %Y",
                            week: "Week from %A, %b %e, %Y",
                            month: "%B %Y",
                            year: "%Y"
                        },
                        footerFormat: "",
                        padding: 8,
                        snap: t.isTouchDevice ? 25 : 10,
                        backgroundColor: n("#f7f7f7").setOpacity(.85).get(),
                        borderWidth: 1,
                        headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                        pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                        shadow: !0,
                        style: {
                            color: "#333333",
                            cursor: "default",
                            fontSize: "12px",
                            pointerEvents: "none",
                            whiteSpace: "nowrap"
                        }
                    },
                    credits: {
                        enabled: !0,
                        href: "http://www.highcharts.com",
                        position: {align: "right", x: -10, verticalAlign: "bottom", y: -5},
                        style: {cursor: "pointer", color: "#999999", fontSize: "9px"},
                        text: "Highcharts.com"
                    }
                }, t.setOptions = function (e) {
                    return t.defaultOptions = o(!0, t.defaultOptions, e), i(), t.defaultOptions
                }, t.getOptions = function () {
                    return t.defaultOptions
                }, t.defaultPlotOptions = t.defaultOptions.plotOptions, i()
            }(t), function (t) {
                var e = t.correctFloat, i = t.defined, n = t.destroyObjectProperties, s = t.isNumber, m = t.merge,
                    o = t.pick, a = t.deg2rad;
                t.Tick = function (t, e, i, n) {
                    this.axis = t, this.pos = e, this.type = i || "", this.isNewLabel = this.isNew = !0, i || n || this.addLabel()
                }, t.Tick.prototype = {
                    addLabel: function () {
                        var t, n = this.axis, s = n.options, a = n.chart, r = n.categories, l = n.names, h = this.pos,
                            c = s.labels, d = n.tickPositions, p = h === d[0], u = h === d[d.length - 1],
                            l = r ? o(r[h], l[h], h) : h, r = this.label, d = d.info;
                        n.isDatetimeAxis && d && (t = s.dateTimeLabelFormats[d.higherRanks[h] || d.unitName]), this.isFirst = p, this.isLast = u, s = n.labelFormatter.call({
                            axis: n,
                            chart: a,
                            isFirst: p,
                            isLast: u,
                            dateTimeLabelFormat: t,
                            value: n.isLog ? e(n.lin2log(l)) : l,
                            pos: h
                        }), i(r) ? r && r.attr({text: s}) : (this.labelLength = (this.label = r = i(s) && c.enabled ? a.renderer.text(s, 0, 0, c.useHTML).css(m(c.style)).add(n.labelGroup) : null) && r.getBBox().width, this.rotation = 0)
                    }, getLabelSize: function () {
                        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
                    }, handleOverflow: function (t) {
                        var e, i = this.axis, m = t.x, n = i.chart.chartWidth, s = i.chart.spacing,
                            r = o(i.labelLeft, Math.min(i.pos, s[3])),
                            s = o(i.labelRight, Math.max(i.pos + i.len, n - s[1])), l = this.label, h = this.rotation,
                            c = {left: 0, center: .5, right: 1}[i.labelAlign], d = l.getBBox().width,
                            p = i.getSlotWidth(), u = p, f = 1, g = {};
                        h ? 0 > h && m - c * d < r ? e = Math.round(m / Math.cos(h * a) - r) : 0 < h && m + c * d > s && (e = Math.round((n - m) / Math.cos(h * a))) : (n = m + (1 - c) * d, m - c * d < r ? u = t.x + u * (1 - c) - r : n > s && (u = s - t.x + u * c, f = -1), u = Math.min(p, u), u < p && "center" === i.labelAlign && (t.x += f * (p - u - c * (p - Math.min(d, u)))), (d > u || i.autoRotation && (l.styles || {}).width) && (e = u)), e && (g.width = e, (i.options.labels.style || {}).textOverflow || (g.textOverflow = "ellipsis"), l.css(g))
                    }, getPosition: function (t, e, i, n) {
                        var s = this.axis, o = s.chart, a = n && o.oldChartHeight || o.chartHeight;
                        return {
                            x: t ? s.translate(e + i, null, null, n) + s.transB : s.left + s.offset + (s.opposite ? (n && o.oldChartWidth || o.chartWidth) - s.right - s.left : 0),
                            y: t ? a - s.bottom + s.offset - (s.opposite ? s.height : 0) : a - s.translate(e + i, null, null, n) - s.transB
                        }
                    }, getLabelPosition: function (t, e, m, n, s, o, r, l) {
                        var h = this.axis, c = h.transA, d = h.reversed, p = h.staggerLines,
                            u = h.tickRotCorr || {x: 0, y: 0}, f = s.y;
                        return i(f) || (f = 0 === h.side ? m.rotation ? -8 : -m.getBBox().height : 2 === h.side ? u.y + 8 : Math.cos(m.rotation * a) * (u.y - m.getBBox(!1, 0).height / 2)), t = t + s.x + u.x - (o && n ? o * c * (d ? -1 : 1) : 0), e = e + f - (o && !n ? o * c * (d ? 1 : -1) : 0), p && (m = r / (l || 1) % p, h.opposite && (m = p - m - 1), e += h.labelOffset / p * m), {
                            x: t,
                            y: Math.round(e)
                        }
                    }, getMarkPath: function (t, e, i, n, s, o) {
                        return o.crispLine(["M", t, e, "L", t + (s ? 0 : -i), e + (s ? i : 0)], n)
                    }, renderGridLine: function (t, e, i) {
                        var n = this.axis, s = n.options, o = this.gridLine, a = {}, r = this.pos, l = this.type,
                            h = n.tickmarkOffset, c = n.chart.renderer, d = l ? l + "Grid" : "grid",
                            p = s[d + "LineWidth"], u = s[d + "LineColor"], s = s[d + "LineDashStyle"];
                        o || (a.stroke = u, a["stroke-width"] = p, s && (a.dashstyle = s), l || (a.zIndex = 1), t && (a.opacity = 0), this.gridLine = o = c.path().attr(a).addClass("highcharts-" + (l ? l + "-" : "") + "grid-line").add(n.gridGroup)), !t && o && (t = n.getPlotLinePath(r + h, o.strokeWidth() * i, t, !0)) && o[this.isNew ? "attr" : "animate"]({
                            d: t,
                            opacity: e
                        })
                    }, renderMark: function (t, e, m) {
                        var i = this.axis, n = i.options, s = i.chart.renderer, a = this.type,
                            r = a ? a + "Tick" : "tick", l = i.tickSize(r), h = this.mark, c = !h, d = t.x;
                        t = t.y;
                        var p = o(n[r + "Width"], !a && i.isXAxis ? 1 : 0), n = n[r + "Color"];
                        l && (i.opposite && (l[0] = -l[0]), c && (this.mark = h = s.path().addClass("highcharts-" + (a ? a + "-" : "") + "tick").add(i.axisGroup), h.attr({
                            stroke: n,
                            "stroke-width": p
                        })), h[c ? "attr" : "animate"]({
                            d: this.getMarkPath(d, t, l[0], h.strokeWidth() * m, i.horiz, s),
                            opacity: e
                        }))
                    }, renderLabel: function (t, e, m, i) {
                        var n = this.axis, a = n.horiz, r = n.options, l = this.label, h = r.labels, c = h.step,
                            d = n.tickmarkOffset, p = !0, u = t.x;
                        t = t.y, l && s(u) && (l.xy = t = this.getLabelPosition(u, t, l, a, h, d, i, c), this.isFirst && !this.isLast && !o(r.showFirstLabel, 1) || this.isLast && !this.isFirst && !o(r.showLastLabel, 1) ? p = !1 : !a || n.isRadial || h.step || h.rotation || e || 0 === m || this.handleOverflow(t), c && i % c && (p = !1), p && s(t.y) ? (t.opacity = m, l[this.isNewLabel ? "attr" : "animate"](t), this.isNewLabel = !1) : (l.attr("y", -9999), this.isNewLabel = !0), this.isNew = !1)
                    }, render: function (t, e, m) {
                        var i = this.axis, n = i.horiz, s = this.getPosition(n, this.pos, i.tickmarkOffset, e), a = s.x,
                            r = s.y, i = n && a === i.pos + i.len || !n && r === i.pos ? -1 : 1;
                        m = o(m, 1), this.isActive = !0, this.renderGridLine(e, m, i), this.renderMark(s, m, i), this.renderLabel(s, e, m, t)
                    }, destroy: function () {
                        n(this, this.axis)
                    }
                }
            }(t);
            var e = function (t) {
                var e = t.addEvent, i = t.animObject, n = t.arrayMax, s = t.arrayMin, m = t.color, o = t.correctFloat,
                    a = t.defaultOptions, r = t.defined, l = t.deg2rad, h = t.destroyObjectProperties, c = t.each,
                    d = t.extend, p = t.fireEvent, u = t.format, f = t.getMagnitude, g = t.grep, v = t.inArray,
                    y = t.isArray, x = t.isNumber, b = t.isString, k = t.merge, w = t.normalizeTickInterval,
                    M = t.objectEach, S = t.pick, C = t.removeEvent, T = t.splat, A = t.syncTimeout, P = t.Tick,
                    L = function () {
                        this.init.apply(this, arguments)
                    };
                return t.extend(L.prototype, {
                    defaultOptions: {
                        dateTimeLabelFormats: {
                            millisecond: "%H:%M:%S.%L",
                            second: "%H:%M:%S",
                            minute: "%H:%M",
                            hour: "%H:%M",
                            day: "%e. %b",
                            week: "%e. %b",
                            month: "%b '%y",
                            year: "%Y"
                        },
                        endOnTick: !1,
                        labels: {enabled: !0, style: {color: "#666666", cursor: "default", fontSize: "11px"}, x: 0},
                        minPadding: .01,
                        maxPadding: .01,
                        minorTickLength: 2,
                        minorTickPosition: "outside",
                        startOfWeek: 1,
                        startOnTick: !1,
                        tickLength: 10,
                        tickmarkPlacement: "between",
                        tickPixelInterval: 100,
                        tickPosition: "outside",
                        title: {align: "middle", style: {color: "#666666"}},
                        type: "linear",
                        minorGridLineColor: "#f2f2f2",
                        minorGridLineWidth: 1,
                        minorTickColor: "#999999",
                        lineColor: "#ccd6eb",
                        lineWidth: 1,
                        gridLineColor: "#e6e6e6",
                        tickColor: "#ccd6eb"
                    },
                    defaultYAxisOptions: {
                        endOnTick: !0,
                        tickPixelInterval: 72,
                        showLastLabel: !0,
                        labels: {x: -8},
                        maxPadding: .05,
                        minPadding: .05,
                        startOnTick: !0,
                        title: {rotation: 270, text: "Values"},
                        stackLabels: {
                            allowOverlap: !1,
                            enabled: !1,
                            formatter: function () {
                                return t.numberFormat(this.total, -1)
                            },
                            style: {fontSize: "11px", fontWeight: "bold", color: "#000000", textOutline: "1px contrast"}
                        },
                        gridLineWidth: 1,
                        lineWidth: 0
                    },
                    defaultLeftAxisOptions: {labels: {x: -15}, title: {rotation: 270}},
                    defaultRightAxisOptions: {labels: {x: 15}, title: {rotation: 90}},
                    defaultBottomAxisOptions: {labels: {autoRotation: [-45], x: 0}, title: {rotation: 0}},
                    defaultTopAxisOptions: {labels: {autoRotation: [-45], x: 0}, title: {rotation: 0}},
                    init: function (t, i) {
                        var n = i.isX, s = this;
                        s.chart = t, s.horiz = t.inverted && !s.isZAxis ? !n : n, s.isXAxis = n, s.coll = s.coll || (n ? "xAxis" : "yAxis"), s.opposite = i.opposite, s.side = i.side || (s.horiz ? s.opposite ? 0 : 2 : s.opposite ? 1 : 3), s.setOptions(i);
                        var o = this.options, a = o.type;
                        s.labelFormatter = o.labels.formatter || s.defaultLabelFormatter, s.userOptions = i, s.minPixelPadding = 0, s.reversed = o.reversed, s.visible = !1 !== o.visible, s.zoomEnabled = !1 !== o.zoomEnabled, s.hasNames = "category" === a || !0 === o.categories, s.categories = o.categories || s.hasNames, s.names = s.names || [], s.plotLinesAndBandsGroups = {}, s.isLog = "logarithmic" === a, s.isDatetimeAxis = "datetime" === a, s.positiveValuesOnly = s.isLog && !s.allowNegativeLog, s.isLinked = r(o.linkedTo), s.ticks = {}, s.labelEdge = [], s.minorTicks = {}, s.plotLinesAndBands = [], s.alternateBands = {}, s.len = 0, s.minRange = s.userMinRange = o.minRange || o.maxZoom, s.range = o.range, s.offset = o.offset || 0, s.stacks = {}, s.oldStacks = {}, s.stacksTouched = 0, s.max = null, s.min = null, s.crosshair = S(o.crosshair, T(t.options.tooltip.crosshairs)[n ? 0 : 1], !1), i = s.options.events, -1 === v(s, t.axes) && (n ? t.axes.splice(t.xAxis.length, 0, s) : t.axes.push(s), t[s.coll].push(s)), s.series = s.series || [], t.inverted && !s.isZAxis && n && void 0 === s.reversed && (s.reversed = !0), M(i, function (t, i) {
                            e(s, i, t)
                        }), s.lin2log = o.linearToLogConverter || s.lin2log, s.isLog && (s.val2lin = s.log2lin, s.lin2val = s.lin2log)
                    },
                    setOptions: function (t) {
                        this.options = k(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], k(a[this.coll], t))
                    },
                    defaultLabelFormatter: function () {
                        var e, i = this.axis, n = this.value, s = i.categories, o = this.dateTimeLabelFormat,
                            r = a.lang, l = r.numericSymbols, r = r.numericSymbolMagnitude || 1e3, h = l && l.length,
                            c = i.options.labels.format, i = i.isLog ? Math.abs(n) : i.tickInterval;
                        if (c) e = u(c, this); else if (s) e = n; else if (o) e = t.dateFormat(o, n); else if (h && 1e3 <= i) for (; h-- && void 0 === e;) s = Math.pow(r, h + 1), i >= s && 0 === 10 * n % s && null !== l[h] && 0 !== n && (e = t.numberFormat(n / s, -1) + l[h]);
                        return void 0 === e && (e = 1e4 <= Math.abs(n) ? t.numberFormat(n, -1) : t.numberFormat(n, -1, void 0, "")), e
                    },
                    getSeriesExtremes: function () {
                        var t = this, e = t.chart;
                        t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.threshold = null, t.softThreshold = !t.isXAxis, t.buildStacks && t.buildStacks(), c(t.series, function (i) {
                            if (i.visible || !e.options.chart.ignoreHiddenSeries) {
                                var o, a = i.options, l = a.threshold;
                                t.hasVisibleSeries = !0, t.positiveValuesOnly && 0 >= l && (l = null), t.isXAxis ? (a = i.xData, a.length && (i = s(a), x(i) || i instanceof Date || (a = g(a, function (t) {
                                    return x(t)
                                }), i = s(a)), t.dataMin = Math.min(S(t.dataMin, a[0]), i), t.dataMax = Math.max(S(t.dataMax, a[0]), n(a)))) : (i.getExtremes(), o = i.dataMax, i = i.dataMin, r(i) && r(o) && (t.dataMin = Math.min(S(t.dataMin, i), i), t.dataMax = Math.max(S(t.dataMax, o), o)), r(l) && (t.threshold = l), (!a.softThreshold || t.positiveValuesOnly) && (t.softThreshold = !1))
                            }
                        })
                    },
                    translate: function (t, e, i, n, s, o) {
                        var a = this.linkedParent || this, r = 1, l = 0, h = n ? a.oldTransA : a.transA;
                        n = n ? a.oldMin : a.min;
                        var c = a.minPixelPadding;
                        return s = (a.isOrdinal || a.isBroken || a.isLog && s) && a.lin2val, h || (h = a.transA), i && (r *= -1, l = a.len), a.reversed && (r *= -1, l -= r * (a.sector || a.len)), e ? (t = (t * r + l - c) / h + n, s && (t = a.lin2val(t))) : (s && (t = a.val2lin(t)), t = r * (t - n) * h + l + r * c + (x(o) ? h * o : 0)), t
                    },
                    toPixels: function (t, e) {
                        return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
                    },
                    toValue: function (t, e) {
                        return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
                    },
                    getPlotLinePath: function (t, e, i, n, s) {
                        var o, a, r, l = this.chart, h = this.left, c = this.top,
                            d = i && l.oldChartHeight || l.chartHeight, p = i && l.oldChartWidth || l.chartWidth;
                        o = this.transB;
                        var u = function (t, e, i) {
                            return (t < e || t > i) && (n ? t = Math.min(Math.max(e, t), i) : r = !0), t
                        };
                        return s = S(s, this.translate(t, null, null, i)), t = i = Math.round(s + o), o = a = Math.round(d - s - o), x(s) ? this.horiz ? (o = c, a = d - this.bottom, t = i = u(t, h, h + this.width)) : (t = h, i = p - this.right, o = a = u(o, c, c + this.height)) : r = !0, r && !n ? null : l.renderer.crispLine(["M", t, o, "L", i, a], e || 1)
                    },
                    getLinearTickPositions: function (t, e, i) {
                        var n, s = o(Math.floor(e / t) * t);
                        i = o(Math.ceil(i / t) * t);
                        var a = [];
                        if (this.single) return [e];
                        for (e = s; e <= i && (a.push(e), e = o(e + t), e !== n);) n = e;
                        return a
                    },
                    getMinorTickPositions: function () {
                        var t = this, e = t.options, i = t.tickPositions, n = t.minorTickInterval, s = [],
                            o = t.pointRangePadding || 0, a = t.min - o, o = t.max + o, r = o - a;
                        if (r && r / n < t.len / 3) if (t.isLog) c(this.paddedTicks, function (e, i, o) {
                            i && s.push.apply(s, t.getLogTickPositions(n, o[i - 1], o[i], !0))
                        }); else if (t.isDatetimeAxis && "auto" === e.minorTickInterval) s = s.concat(t.getTimeTicks(t.normalizeTimeTickInterval(n), a, o, e.startOfWeek)); else for (e = a + (i[0] - a) % n; e <= o && e !== s[0]; e += n) s.push(e);
                        return 0 !== s.length && t.trimTicks(s), s
                    },
                    adjustForMinRange: function () {
                        var t, e, i, o, a, l, h, d, p = this.options, u = this.min, f = this.max;
                        this.isXAxis && void 0 === this.minRange && !this.isLog && (r(p.min) || r(p.max) ? this.minRange = null : (c(this.series, function (t) {
                            for (l = t.xData, o = h = t.xIncrement ? 1 : l.length - 1; 0 < o; o--) a = l[o] - l[o - 1], (void 0 === i || a < i) && (i = a)
                        }), this.minRange = Math.min(5 * i, this.dataMax - this.dataMin))), f - u < this.minRange && (e = this.dataMax - this.dataMin >= this.minRange, d = this.minRange, t = (d - f + u) / 2, t = [u - t, S(p.min, u - t)], e && (t[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), u = n(t), f = [u + d, S(p.max, u + d)], e && (f[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), f = s(f), f - u < d && (t[0] = f - d, t[1] = S(p.min, f - d), u = n(t))), this.min = u, this.max = f
                    },
                    getClosest: function () {
                        var t;
                        return this.categories ? t = 1 : c(this.series, function (e) {
                            var i = e.closestPointRange, n = e.visible || !e.chart.options.chart.ignoreHiddenSeries;
                            !e.noSharedTooltip && r(i) && n && (t = r(t) ? Math.min(t, i) : i)
                        }), t
                    },
                    nameToX: function (t) {
                        var e, i = y(this.categories), n = i ? this.categories : this.names, s = t.options.x;
                        return t.series.requireSorting = !1, r(s) || (s = !1 === this.options.uniqueNames ? t.series.autoIncrement() : v(t.name, n)), -1 === s ? i || (e = n.length) : e = s, void 0 !== e && (this.names[e] = t.name), e
                    },
                    updateNames: function () {
                        var t = this;
                        0 < this.names.length && (this.names.length = 0, this.minRange = this.userMinRange, c(this.series || [], function (e) {
                            e.xIncrement = null, e.points && !e.isDirtyData || (e.processData(), e.generatePoints()), c(e.points, function (i, n) {
                                var s;
                                i.options && (s = t.nameToX(i), void 0 !== s && s !== i.x && (i.x = s, e.xData[n] = s))
                            })
                        }))
                    },
                    setAxisTranslation: function (t) {
                        var e, i = this, n = i.max - i.min, s = i.axisPointRange || 0, o = 0, a = 0, r = i.linkedParent,
                            l = !!i.categories, h = i.transA, d = i.isXAxis;
                        (d || l || s) && (e = i.getClosest(), r ? (o = r.minPointOffset, a = r.pointRangePadding) : c(i.series, function (t) {
                            var n = l ? 1 : d ? S(t.options.pointRange, e, 0) : i.axisPointRange || 0;
                            t = t.options.pointPlacement, s = Math.max(s, n), i.single || (o = Math.max(o, b(t) ? 0 : n / 2), a = Math.max(a, "on" === t ? 0 : n))
                        }), r = i.ordinalSlope && e ? i.ordinalSlope / e : 1, i.minPointOffset = o *= r, i.pointRangePadding = a *= r, i.pointRange = Math.min(s, n), d && (i.closestPointRange = e)), t && (i.oldTransA = h), i.translationSlope = i.transA = h = i.options.staticScale || i.len / (n + a || 1), i.transB = i.horiz ? i.left : i.bottom, i.minPixelPadding = h * o
                    },
                    minFromRange: function () {
                        return this.max - this.range
                    },
                    setTickInterval: function (e) {
                        var i, n, s, a, l = this, h = l.chart, d = l.options, u = l.isLog, g = l.log2lin,
                            v = l.isDatetimeAxis, y = l.isXAxis, b = l.isLinked, k = d.maxPadding, M = d.minPadding,
                            C = d.tickInterval, T = d.tickPixelInterval, m = l.categories, A = l.threshold,
                            P = l.softThreshold;
                        v || m || b || this.getTickAmount(), s = S(l.userMin, d.min), a = S(l.userMax, d.max), b ? (l.linkedParent = h[l.coll][d.linkedTo], h = l.linkedParent.getExtremes(), l.min = S(h.min, h.dataMin), l.max = S(h.max, h.dataMax), d.type !== l.linkedParent.options.type && t.error(11, 1)) : (!P && r(A) && (l.dataMin >= A ? (i = A, M = 0) : l.dataMax <= A && (n = A, k = 0)), l.min = S(s, i, l.dataMin), l.max = S(a, n, l.dataMax)), u && (l.positiveValuesOnly && !e && 0 >= Math.min(l.min, S(l.dataMin, l.min)) && t.error(10, 1), l.min = o(g(l.min), 15), l.max = o(g(l.max), 15)), l.range && r(l.max) && (l.userMin = l.min = s = Math.max(l.dataMin, l.minFromRange()), l.userMax = a = l.max, l.range = null), p(l, "foundExtremes"), l.beforePadding && l.beforePadding(), l.adjustForMinRange(), !(m || l.axisPointRange || l.usePercentage || b) && r(l.min) && r(l.max) && (g = l.max - l.min) && (!r(s) && M && (l.min -= g * M), !r(a) && k && (l.max += g * k)), x(d.softMin) && (l.min = Math.min(l.min, d.softMin)), x(d.softMax) && (l.max = Math.max(l.max, d.softMax)), x(d.floor) && (l.min = Math.max(l.min, d.floor)), x(d.ceiling) && (l.max = Math.min(l.max, d.ceiling)), P && r(l.dataMin) && (A = A || 0, !r(s) && l.min < A && l.dataMin >= A ? l.min = A : !r(a) && l.max > A && l.dataMax <= A && (l.max = A)), l.tickInterval = l.min === l.max || void 0 === l.min || void 0 === l.max ? 1 : b && !C && T === l.linkedParent.options.tickPixelInterval ? C = l.linkedParent.tickInterval : S(C, this.tickAmount ? (l.max - l.min) / Math.max(this.tickAmount - 1, 1) : void 0, m ? 1 : (l.max - l.min) * T / Math.max(l.len, T)), y && !e && c(l.series, function (t) {
                            t.processData(l.min !== l.oldMin || l.max !== l.oldMax)
                        }), l.setAxisTranslation(!0), l.beforeSetTickPositions && l.beforeSetTickPositions(), l.postProcessTickInterval && (l.tickInterval = l.postProcessTickInterval(l.tickInterval)), l.pointRange && !C && (l.tickInterval = Math.max(l.pointRange, l.tickInterval)), e = S(d.minTickInterval, l.isDatetimeAxis && l.closestPointRange), !C && l.tickInterval < e && (l.tickInterval = e), v || u || C || (l.tickInterval = w(l.tickInterval, null, f(l.tickInterval), S(d.allowDecimals, !(.5 < l.tickInterval && 5 > l.tickInterval && 1e3 < l.max && 9999 > l.max)), !!this.tickAmount)), this.tickAmount || (l.tickInterval = l.unsquish()), this.setTickPositions()
                    },
                    setTickPositions: function () {
                        var t, e = this.options, i = e.tickPositions, n = e.tickPositioner, s = e.startOnTick,
                            o = e.endOnTick;
                        this.tickmarkOffset = this.categories && "between" === e.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === e.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : e.minorTickInterval, this.single = this.min === this.max && r(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== e.allowDecimals), this.tickPositions = t = i && i.slice(), !t && (t = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, e.units), this.min, this.max, e.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), t.length > this.len && (t = [t[0], t.pop()]), this.tickPositions = t, n && (n = n.apply(this, [this.min, this.max]))) && (this.tickPositions = t = n), this.paddedTicks = t.slice(0), this.trimTicks(t, s, o), this.isLinked || (this.single && 2 > t.length && (this.min -= .5, this.max += .5), i || n || this.adjustTickAmount())
                    },
                    trimTicks: function (t, e, i) {
                        var n = t[0], s = t[t.length - 1], o = this.minPointOffset || 0;
                        if (!this.isLinked) {
                            if (e && -(1 / 0) !== n) this.min = n; else for (; this.min - o > t[0];) t.shift();
                            if (i) this.max = s; else for (; this.max + o < t[t.length - 1];) t.pop();
                            0 === t.length && r(n) && t.push((s + n) / 2)
                        }
                    },
                    alignToOthers: function () {
                        var t, e = {}, i = this.options;
                        return !1 === this.chart.options.chart.alignTicks || !1 === i.alignTicks || this.isLog || c(this.chart[this.coll], function (i) {
                            var n = i.options, n = [i.horiz ? n.left : n.top, n.width, n.height, n.pane].join();
                            i.series.length && (e[n] ? t = !0 : e[n] = 1)
                        }), t
                    },
                    getTickAmount: function () {
                        var t = this.options, e = t.tickAmount, i = t.tickPixelInterval;
                        !r(t.tickInterval) && this.len < i && !this.isRadial && !this.isLog && t.startOnTick && t.endOnTick && (e = 2), !e && this.alignToOthers() && (e = Math.ceil(this.len / i) + 1), 4 > e && (this.finalTickAmt = e, e = 5), this.tickAmount = e
                    },
                    adjustTickAmount: function () {
                        var t = this.tickInterval, e = this.tickPositions, i = this.tickAmount, n = this.finalTickAmt,
                            s = e && e.length;
                        if (s < i) {
                            for (; e.length < i;) e.push(o(e[e.length - 1] + t));
                            this.transA *= (s - 1) / (i - 1), this.max = e[e.length - 1]
                        } else s > i && (this.tickInterval *= 2, this.setTickPositions());
                        if (r(n)) {
                            for (t = i = e.length; t--;) (3 === n && 1 === t % 2 || 2 >= n && 0 < t && t < i - 1) && e.splice(t, 1);
                            this.finalTickAmt = void 0
                        }
                    },
                    setScale: function () {
                        var t, e;
                        this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), e = this.len !== this.oldAxisLength, c(this.series, function (e) {
                            (e.isDirtyData || e.isDirty || e.xAxis.isDirty) && (t = !0)
                        }), e || t || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
                    },
                    setExtremes: function (t, e, i, n, s) {
                        var o = this, a = o.chart;
                        i = S(i, !0), c(o.series, function (t) {
                            delete t.kdTree
                        }), s = d(s, {min: t, max: e}), p(o, "setExtremes", s, function () {
                            o.userMin = t, o.userMax = e, o.eventArgs = s, i && a.redraw(n)
                        })
                    },
                    zoom: function (t, e) {
                        var i = this.dataMin, n = this.dataMax, s = this.options, o = Math.min(i, S(s.min, i)),
                            s = Math.max(n, S(s.max, n));
                        return t === this.min && e === this.max || (this.allowZoomOutside || (r(i) && (t < o && (t = o), t > s && (t = s)), r(n) && (e < o && (e = o), e > s && (e = s))), this.displayBtn = void 0 !== t || void 0 !== e, this.setExtremes(t, e, !1, void 0, {trigger: "zoom"})), !0
                    },
                    setAxisSize: function () {
                        var e = this.chart, i = this.options, n = i.offsets || [0, 0, 0, 0], s = this.horiz,
                            o = this.width = Math.round(t.relativeLength(S(i.width, e.plotWidth - n[3] + n[1]), e.plotWidth)),
                            a = this.height = Math.round(t.relativeLength(S(i.height, e.plotHeight - n[0] + n[2]), e.plotHeight)),
                            r = this.top = Math.round(t.relativeLength(S(i.top, e.plotTop + n[0]), e.plotHeight, e.plotTop)),
                            i = this.left = Math.round(t.relativeLength(S(i.left, e.plotLeft + n[3]), e.plotWidth, e.plotLeft));
                        this.bottom = e.chartHeight - a - r, this.right = e.chartWidth - o - i, this.len = Math.max(s ? o : a, 0), this.pos = s ? i : r
                    },
                    getExtremes: function () {
                        var t = this.isLog, e = this.lin2log;
                        return {
                            min: t ? o(e(this.min)) : this.min,
                            max: t ? o(e(this.max)) : this.max,
                            dataMin: this.dataMin,
                            dataMax: this.dataMax,
                            userMin: this.userMin,
                            userMax: this.userMax
                        }
                    },
                    getThreshold: function (t) {
                        var e = this.isLog, i = this.lin2log, n = e ? i(this.min) : this.min,
                            e = e ? i(this.max) : this.max;
                        return null === t ? t = n : n > t ? t = n : e < t && (t = e), this.translate(t, 0, 1, 0, 1)
                    },
                    autoLabelAlign: function (t) {
                        return t = (S(t, 0) - 90 * this.side + 720) % 360, 15 < t && 165 > t ? "right" : 195 < t && 345 > t ? "left" : "center"
                    },
                    tickSize: function (t) {
                        var e = this.options, i = e[t + "Length"],
                            n = S(e[t + "Width"], "tick" === t && this.isXAxis ? 1 : 0);
                        if (n && i) return "inside" === e[t + "Position"] && (i = -i), [i, n]
                    },
                    labelMetrics: function () {
                        var t = this.tickPositions && this.tickPositions[0] || 0;
                        return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[t] && this.ticks[t].label)
                    },
                    unsquish: function () {
                        var t, e, i, n = this.options.labels, s = this.horiz, o = this.tickInterval, a = o,
                            h = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / o), d = n.rotation,
                            p = this.labelMetrics(), u = Number.MAX_VALUE, f = function (t) {
                                return t /= h || 1, t = 1 < t ? Math.ceil(t) : 1, t * o
                            };
                        return s ? (i = !n.staggerLines && !n.step && (r(d) ? [d] : h < S(n.autoRotationLimit, 80) && n.autoRotation)) && c(i, function (i) {
                            var n;
                            (i === d || i && -90 <= i && 90 >= i) && (e = f(Math.abs(p.h / Math.sin(l * i))), n = e + Math.abs(i / 360), n < u && (u = n, t = i, a = e))
                        }) : n.step || (a = f(p.h)), this.autoRotation = i, this.labelRotation = S(t, d), a
                    },
                    getSlotWidth: function () {
                        var t = this.chart, e = this.horiz, i = this.options.labels,
                            n = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), s = t.margin[3];
                        return e && 2 > (i.step || 0) && !i.rotation && (this.staggerLines || 1) * this.len / n || !e && (s && s - t.spacing[3] || .33 * t.chartWidth)
                    },
                    renderUnsquish: function () {
                        var t, e, i, n = this.chart, s = n.renderer, o = this.tickPositions, a = this.ticks,
                            r = this.options.labels, l = this.horiz, h = this.getSlotWidth(),
                            d = Math.max(1, Math.round(h - 2 * (r.padding || 5))), p = {}, u = this.labelMetrics(),
                            f = r.style && r.style.textOverflow, g = 0;
                        if (b(r.rotation) || (p.rotation = r.rotation || 0), c(o, function (t) {
                                (t = a[t]) && t.labelLength > g && (g = t.labelLength)
                            }), this.maxLabelLength = g, this.autoRotation) g > d && g > u.h ? p.rotation = this.labelRotation : this.labelRotation = 0; else if (h && (t = {width: d + "px"}, !f)) for (t.textOverflow = "clip", e = o.length; !l && e--;) i = o[e], (d = a[i].label) && (d.styles && "ellipsis" === d.styles.textOverflow ? d.css({textOverflow: "clip"}) : a[i].labelLength > h && d.css({width: h + "px"}), d.getBBox().height > this.len / o.length - (u.h - u.f) && (d.specCss = {textOverflow: "ellipsis"}));
                        p.rotation && (t = {width: (g > .5 * n.chartHeight ? .33 * n.chartHeight : n.chartHeight) + "px"}, f || (t.textOverflow = "ellipsis")), (this.labelAlign = r.align || this.autoLabelAlign(this.labelRotation)) && (p.align = this.labelAlign), c(o, function (e) {
                            var i = (e = a[e]) && e.label;
                            i && (i.attr(p), t && i.css(k(t, i.specCss)), delete i.specCss, e.rotation = p.rotation)
                        }), this.tickRotCorr = s.rotCorr(u.b, this.labelRotation || 0, 0 !== this.side)
                    },
                    hasData: function () {
                        return this.hasVisibleSeries || r(this.min) && r(this.max) && !!this.tickPositions;
                    },
                    addTitle: function (t) {
                        var e, i = this.chart.renderer, n = this.horiz, s = this.opposite, o = this.options.title;
                        this.axisTitle || ((e = o.textAlign) || (e = (n ? {
                            low: "left",
                            middle: "center",
                            high: "right"
                        } : {
                            low: s ? "right" : "left",
                            middle: "center",
                            high: s ? "left" : "right"
                        })[o.align]), this.axisTitle = i.text(o.text, 0, 0, o.useHTML).attr({
                            zIndex: 7,
                            rotation: o.rotation || 0,
                            align: e
                        }).addClass("highcharts-axis-title").css(o.style).add(this.axisGroup), this.axisTitle.isNew = !0), o.style.width || this.isRadial || this.axisTitle.css({width: this.len}), this.axisTitle[t ? "show" : "hide"](!0)
                    },
                    generateTick: function (t) {
                        var e = this.ticks;
                        e[t] ? e[t].addLabel() : e[t] = new P(this, t)
                    },
                    getOffset: function () {
                        var t, e, i, n = this, s = n.chart, o = s.renderer, a = n.options, l = n.tickPositions,
                            h = n.ticks, d = n.horiz, p = n.side, u = s.inverted && !n.isZAxis ? [1, 0, 3, 2][p] : p,
                            f = 0, g = 0, v = a.title, m = a.labels, y = 0, x = s.axisOffset, s = s.clipOffset,
                            b = [-1, 1, 1, -1][p], k = a.className, w = n.axisParent, C = this.tickSize("tick");
                        t = n.hasData(), n.showAxis = e = t || S(a.showEmpty, !0), n.staggerLines = n.horiz && m.staggerLines, n.axisGroup || (n.gridGroup = o.g("grid").attr({zIndex: a.gridZIndex || 1}).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (k || "")).add(w), n.axisGroup = o.g("axis").attr({zIndex: a.zIndex || 2}).addClass("highcharts-" + this.coll.toLowerCase() + " " + (k || "")).add(w), n.labelGroup = o.g("axis-labels").attr({zIndex: m.zIndex || 7}).addClass("highcharts-" + n.coll.toLowerCase() + "-labels " + (k || "")).add(w)), t || n.isLinked ? (c(l, function (t, e) {
                            n.generateTick(t, e)
                        }), n.renderUnsquish(), !1 === m.reserveSpace || 0 !== p && 2 !== p && {
                            1: "left",
                            3: "right"
                        }[p] !== n.labelAlign && "center" !== n.labelAlign || c(l, function (t) {
                            y = Math.max(h[t].getLabelSize(), y)
                        }), n.staggerLines && (y *= n.staggerLines, n.labelOffset = y * (n.opposite ? -1 : 1))) : M(h, function (t, e) {
                            t.destroy(), delete h[e]
                        }), v && v.text && !1 !== v.enabled && (n.addTitle(e), e && !1 !== v.reserveSpace && (n.titleOffset = f = n.axisTitle.getBBox()[d ? "height" : "width"], i = v.offset, g = r(i) ? 0 : S(v.margin, d ? 5 : 10))), n.renderLine(), n.offset = b * S(a.offset, x[p]), n.tickRotCorr = n.tickRotCorr || {
                            x: 0,
                            y: 0
                        }, o = 0 === p ? -n.labelMetrics().h : 2 === p ? n.tickRotCorr.y : 0, g = Math.abs(y) + g, y && (g = g - o + b * (d ? S(m.y, n.tickRotCorr.y + 8 * b) : m.x)), n.axisTitleMargin = S(i, g), x[p] = Math.max(x[p], n.axisTitleMargin + f + b * n.offset, g, t && l.length && C ? C[0] + b * n.offset : 0), l = 2 * Math.floor(n.axisLine.strokeWidth() / 2), 0 < a.offset && (l -= 2 * a.offset), s[u] = Math.max(s[u] || l, l)
                    },
                    getLinePath: function (t) {
                        var e = this.chart, i = this.opposite, n = this.offset, s = this.horiz,
                            o = this.left + (i ? this.width : 0) + n,
                            n = e.chartHeight - this.bottom - (i ? this.height : 0) + n;
                        return i && (t *= -1), e.renderer.crispLine(["M", s ? this.left : o, s ? n : this.top, "L", s ? e.chartWidth - this.right : o, s ? n : e.chartHeight - this.bottom], t)
                    },
                    renderLine: function () {
                        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.axisLine.attr({
                            stroke: this.options.lineColor,
                            "stroke-width": this.options.lineWidth,
                            zIndex: 7
                        }))
                    },
                    getTitlePosition: function () {
                        var t = this.horiz, e = this.left, i = this.top, n = this.len, s = this.options.title,
                            o = t ? e : i, a = this.opposite, r = this.offset, l = s.x || 0, h = s.y || 0,
                            c = this.axisTitle, d = this.chart.renderer.fontMetrics(s.style && s.style.fontSize, c),
                            c = Math.max(c.getBBox(null, 0).height - d.h - 1, 0),
                            n = {low: o + (t ? 0 : n), middle: o + n / 2, high: o + (t ? n : 0)}[s.align],
                            e = (t ? i + this.height : e) + (t ? 1 : -1) * (a ? -1 : 1) * this.axisTitleMargin + [-c, c, d.f, -c][this.side];
                        return {
                            x: t ? n + l : e + (a ? this.width : 0) + r + l,
                            y: t ? e + h - (a ? this.height : 0) + r : n + h
                        }
                    },
                    renderMinorTick: function (t) {
                        var e = this.chart.hasRendered && x(this.oldMin), i = this.minorTicks;
                        i[t] || (i[t] = new P(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1)
                    },
                    renderTick: function (t, e) {
                        var i = this.isLinked, n = this.ticks, s = this.chart.hasRendered && x(this.oldMin);
                        (!i || t >= this.min && t <= this.max) && (n[t] || (n[t] = new P(this, t)), s && n[t].isNew && n[t].render(e, !0, .1), n[t].render(e))
                    },
                    render: function () {
                        var e, n, s = this, o = s.chart, a = s.options, r = s.isLog, l = s.lin2log, h = s.isLinked,
                            d = s.tickPositions, p = s.axisTitle, u = s.ticks, f = s.minorTicks, g = s.alternateBands,
                            m = a.stackLabels, v = a.alternateGridColor, y = s.tickmarkOffset, b = s.axisLine,
                            k = s.showAxis, w = i(o.renderer.globalAnimation);
                        s.labelEdge.length = 0, s.overlap = !1, c([u, f, g], function (t) {
                            M(t, function (t) {
                                t.isActive = !1
                            })
                        }), (s.hasData() || h) && (s.minorTickInterval && !s.categories && c(s.getMinorTickPositions(), function (t) {
                            s.renderMinorTick(t)
                        }), d.length && (c(d, function (t, e) {
                            s.renderTick(t, e)
                        }), y && (0 === s.min || s.single) && (u[-1] || (u[-1] = new P(s, -1, null, !0)), u[-1].render(-1))), v && c(d, function (i, a) {
                            n = void 0 !== d[a + 1] ? d[a + 1] + y : s.max - y, 0 === a % 2 && i < s.max && n <= s.max + (o.polar ? -y : y) && (g[i] || (g[i] = new t.PlotLineOrBand(s)), e = i + y, g[i].options = {
                                from: r ? l(e) : e,
                                to: r ? l(n) : n,
                                color: v
                            }, g[i].render(), g[i].isActive = !0)
                        }), s._addedPlotLB || (c((a.plotLines || []).concat(a.plotBands || []), function (t) {
                            s.addPlotBandOrLine(t)
                        }), s._addedPlotLB = !0)), c([u, f, g], function (t) {
                            var e, i = [], n = w.duration;
                            M(t, function (t, e) {
                                t.isActive || (t.render(e, !1, 0), t.isActive = !1, i.push(e))
                            }), A(function () {
                                for (e = i.length; e--;) t[i[e]] && !t[i[e]].isActive && (t[i[e]].destroy(), delete t[i[e]])
                            }, t !== g && o.hasRendered && n ? n : 0)
                        }), b && (b[b.isPlaced ? "animate" : "attr"]({d: this.getLinePath(b.strokeWidth())}), b.isPlaced = !0, b[k ? "show" : "hide"](!0)), p && k && (a = s.getTitlePosition(), x(a.y) ? (p[p.isNew ? "attr" : "animate"](a), p.isNew = !1) : (p.attr("y", -9999), p.isNew = !0)), m && m.enabled && s.renderStackTotals(), s.isDirty = !1
                    },
                    redraw: function () {
                        this.visible && (this.render(), c(this.plotLinesAndBands, function (t) {
                            t.render()
                        })), c(this.series, function (t) {
                            t.isDirty = !0
                        })
                    },
                    keepProps: "extKey hcEvents names series userMax userMin".split(" "),
                    destroy: function (t) {
                        var e, i = this, n = i.stacks, s = i.plotLinesAndBands;
                        if (t || C(i), M(n, function (t, e) {
                                h(t), n[e] = null
                            }), c([i.ticks, i.minorTicks, i.alternateBands], function (t) {
                                h(t)
                            }), s) for (t = s.length; t--;) s[t].destroy();
                        c("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function (t) {
                            i[t] && (i[t] = i[t].destroy())
                        });
                        for (e in i.plotLinesAndBandsGroups) i.plotLinesAndBandsGroups[e] = i.plotLinesAndBandsGroups[e].destroy();
                        M(i, function (t, e) {
                            -1 === v(e, i.keepProps) && delete i[e]
                        })
                    },
                    drawCrosshair: function (t, e) {
                        var i, n, s = this.crosshair, o = S(s.snap, !0), a = this.cross;
                        t || (t = this.cross && this.cross.e), this.crosshair && !1 !== (r(e) || !o) ? (o ? r(e) && (n = this.isXAxis ? e.plotX : this.len - e.plotY) : n = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), r(n) && (i = this.getPlotLinePath(e && (this.isXAxis ? e.x : S(e.stackY, e.y)), null, null, null, n) || null), r(i) ? (e = this.categories && !this.isRadial, a || (this.cross = a = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (e ? "category " : "thin ") + s.className).attr({zIndex: S(s.zIndex, 2)}).add(), a.attr({
                            stroke: s.color || (e ? m("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                            "stroke-width": S(s.width, 1)
                        }), s.dashStyle && a.attr({dashstyle: s.dashStyle})), a.show().attr({d: i}), e && !s.width && a.attr({"stroke-width": this.transA}), this.cross.e = t) : this.hideCrosshair()) : this.hideCrosshair()
                    },
                    hideCrosshair: function () {
                        this.cross && this.cross.hide()
                    }
                }), t.Axis = L
            }(t);
            return function (t) {
                var e = t.Axis, i = t.Date, n = t.dateFormat, s = t.defaultOptions, m = t.defined, o = t.each,
                    a = t.extend, r = t.getMagnitude, l = t.getTZOffset, h = t.normalizeTickInterval, c = t.pick,
                    d = t.timeUnits;
                e.prototype.getTimeTicks = function (t, e, r, h) {
                    var p, u, f, g = [], v = {}, y = s.global.useUTC, x = new i(e - Math.max(l(e), l(r))),
                        b = i.hcMakeTime, k = t.unitRange, w = t.count;
                    if (m(e)) {
                        x[i.hcSetMilliseconds](k >= d.second ? 0 : w * Math.floor(x.getMilliseconds() / w)), k >= d.second && x[i.hcSetSeconds](k >= d.minute ? 0 : w * Math.floor(x.getSeconds() / w)), k >= d.minute && x[i.hcSetMinutes](k >= d.hour ? 0 : w * Math.floor(x[i.hcGetMinutes]() / w)), k >= d.hour && x[i.hcSetHours](k >= d.day ? 0 : w * Math.floor(x[i.hcGetHours]() / w)), k >= d.day && x[i.hcSetDate](k >= d.month ? 1 : w * Math.floor(x[i.hcGetDate]() / w)), k >= d.month && (x[i.hcSetMonth](k >= d.year ? 0 : w * Math.floor(x[i.hcGetMonth]() / w)), p = x[i.hcGetFullYear]()), k >= d.year && x[i.hcSetFullYear](p - p % w), k === d.week && x[i.hcSetDate](x[i.hcGetDate]() - x[i.hcGetDay]() + c(h, 1)), p = x[i.hcGetFullYear](), h = x[i.hcGetMonth]();
                        var M = x[i.hcGetDate](), S = x[i.hcGetHours]();
                        for ((i.hcTimezoneOffset || i.hcGetTimezoneOffset) && (f = (!y || !!i.hcGetTimezoneOffset) && (r - e > 4 * d.month || l(e) !== l(r)), x = x.getTime(), u = l(x), x = new i(x + u)), y = x.getTime(), e = 1; y < r;) g.push(y), y = k === d.year ? b(p + e * w, 0) : k === d.month ? b(p, h + e * w) : !f || k !== d.day && k !== d.week ? f && k === d.hour ? b(p, h, M, S + e * w, 0, 0, u) - u : y + k * w : b(p, h, M + e * w * (k === d.day ? 1 : 7)), e++;
                        g.push(y), k <= d.hour && 1e4 > g.length && o(g, function (t) {
                            0 === t % 18e5 && "000000000" === n("%H%M%S%L", t) && (v[t] = "day")
                        })
                    }
                    return g.info = a(t, {higherRanks: v, totalRange: k * w}), g
                }, e.prototype.normalizeTimeTickInterval = function (t, e) {
                    var i = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
                    e = i[i.length - 1];
                    var n, s = d[e[0]], o = e[1];
                    for (n = 0; n < i.length && (e = i[n], s = d[e[0]], o = e[1], !(i[n + 1] && t <= (s * o[o.length - 1] + d[i[n + 1][0]]) / 2)); n++) ;
                    return s === d.year && t < 5 * s && (o = [1, 2, 5]), t = h(t / s, o, "year" === e[0] ? Math.max(r(t / s), 1) : 1), {
                        unitRange: s,
                        count: t,
                        unitName: e[0]
                    }
                }
            }(t), function (t) {
                var e = t.Axis, i = t.getMagnitude, n = t.map, s = t.normalizeTickInterval, m = t.pick;
                e.prototype.getLogTickPositions = function (t, e, o, a) {
                    var r = this.options, l = this.len, h = this.lin2log, c = this.log2lin, d = [];
                    if (a || (this._minorAutoInterval = null), .5 <= t) t = Math.round(t), d = this.getLinearTickPositions(t, e, o); else if (.08 <= t) for (var p, u, f, g, v, l = Math.floor(e), r = .3 < t ? [1, 2, 4] : .15 < t ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; l < o + 1 && !v; l++) for (u = r.length, p = 0; p < u && !v; p++) f = c(h(l) * r[p]), f > e && (!a || g <= o) && void 0 !== g && d.push(g), g > o && (v = !0), g = f; else e = h(e), o = h(o), t = r[a ? "minorTickInterval" : "tickInterval"], t = m("auto" === t ? null : t, this._minorAutoInterval, r.tickPixelInterval / (a ? 5 : 1) * (o - e) / ((a ? l / this.tickPositions.length : l) || 1)), t = s(t, null, i(t)), d = n(this.getLinearTickPositions(t, e, o), c), a || (this._minorAutoInterval = t / 5);
                    return a || (this.tickInterval = t), d
                }, e.prototype.log2lin = function (t) {
                    return Math.log(t) / Math.LN10
                }, e.prototype.lin2log = function (t) {
                    return Math.pow(10, t)
                }
            }(t), function (t, e) {
                var i = t.arrayMax, n = t.arrayMin, s = t.defined, m = t.destroyObjectProperties, o = t.each,
                    a = t.erase, r = t.merge, l = t.pick;
                t.PlotLineOrBand = function (t, e) {
                    this.axis = t, e && (this.options = e, this.id = e.id)
                }, t.PlotLineOrBand.prototype = {
                    render: function () {
                        var e = this, i = e.axis, n = i.horiz, o = e.options, a = o.label, h = e.label, c = o.to,
                            d = o.from, p = o.value, u = s(d) && s(c), m = s(p), f = e.svgElem, g = !f, v = [],
                            y = o.color, x = l(o.zIndex, 0), b = o.events,
                            v = {"class": "highcharts-plot-" + (u ? "band " : "line ") + (o.className || "")}, k = {},
                            w = i.chart.renderer, M = u ? "bands" : "lines", S = i.log2lin;
                        if (i.isLog && (d = S(d), c = S(c), p = S(p)), m ? (v = {
                                stroke: y,
                                "stroke-width": o.width
                            }, o.dashStyle && (v.dashstyle = o.dashStyle)) : u && (y && (v.fill = y), o.borderWidth && (v.stroke = o.borderColor, v["stroke-width"] = o.borderWidth)), k.zIndex = x, M += "-" + x, (y = i.plotLinesAndBandsGroups[M]) || (i.plotLinesAndBandsGroups[M] = y = w.g("plot-" + M).attr(k).add()), g && (e.svgElem = f = w.path().attr(v).add(y)), m) v = i.getPlotLinePath(p, f.strokeWidth()); else {
                            if (!u) return;
                            v = i.getPlotBandPath(d, c, o)
                        }
                        return g && v && v.length ? (f.attr({d: v}), b && t.objectEach(b, function (t, i) {
                            f.on(i, function (t) {
                                b[i].apply(e, [t])
                            })
                        })) : f && (v ? (f.show(), f.animate({d: v})) : (f.hide(), h && (e.label = h = h.destroy()))), a && s(a.text) && v && v.length && 0 < i.width && 0 < i.height && !v.flat ? (a = r({
                            align: n && u && "center",
                            x: n ? !u && 4 : 10,
                            verticalAlign: !n && u && "middle",
                            y: n ? u ? 16 : 10 : u ? 6 : -4,
                            rotation: n && !u && 90
                        }, a), this.renderLabel(a, v, u, x)) : h && h.hide(), e
                    }, renderLabel: function (t, e, s, o) {
                        var a = this.label, r = this.axis.chart.renderer;
                        a || (a = {
                            align: t.textAlign || t.align,
                            rotation: t.rotation,
                            "class": "highcharts-plot-" + (s ? "band" : "line") + "-label " + (t.className || "")
                        }, a.zIndex = o, this.label = a = r.text(t.text, 0, 0, t.useHTML).attr(a).add(), a.css(t.style)), o = [e[1], e[4], s ? e[6] : e[1]], e = [e[2], e[5], s ? e[7] : e[2]], s = n(o), r = n(e), a.align(t, !1, {
                            x: s,
                            y: r,
                            width: i(o) - s,
                            height: i(e) - r
                        }), a.show()
                    }, destroy: function () {
                        a(this.axis.plotLinesAndBands, this), delete this.axis, m(this)
                    }
                }, t.extend(e.prototype, {
                    getPlotBandPath: function (t, e) {
                        var i = this.getPlotLinePath(e, null, null, !0), n = this.getPlotLinePath(t, null, null, !0),
                            s = this.horiz, o = 1;
                        return t = t < this.min && e < this.min || t > this.max && e > this.max, n && i ? (t && (n.flat = n.toString() === i.toString(), o = 0), n.push(s && i[4] === n[4] ? i[4] + o : i[4], s || i[5] !== n[5] ? i[5] : i[5] + o, s && i[1] === n[1] ? i[1] + o : i[1], s || i[2] !== n[2] ? i[2] : i[2] + o)) : n = null, n
                    }, addPlotBand: function (t) {
                        return this.addPlotBandOrLine(t, "plotBands")
                    }, addPlotLine: function (t) {
                        return this.addPlotBandOrLine(t, "plotLines")
                    }, addPlotBandOrLine: function (e, i) {
                        var n = new t.PlotLineOrBand(this, e).render(), s = this.userOptions;
                        return n && (i && (s[i] = s[i] || [], s[i].push(e)), this.plotLinesAndBands.push(n)), n
                    }, removePlotBandOrLine: function (t) {
                        for (var e = this.plotLinesAndBands, i = this.options, n = this.userOptions, s = e.length; s--;) e[s].id === t && e[s].destroy();
                        o([i.plotLines || [], n.plotLines || [], i.plotBands || [], n.plotBands || []], function (e) {
                            for (s = e.length; s--;) e[s].id === t && a(e, e[s])
                        })
                    }, removePlotBand: function (t) {
                        this.removePlotBandOrLine(t)
                    }, removePlotLine: function (t) {
                        this.removePlotBandOrLine(t)
                    }
                })
            }(t, e), function (t) {
                var e = t.dateFormat, i = t.each, n = t.extend, s = t.format, m = t.isNumber, o = t.map, a = t.merge,
                    r = t.pick, l = t.splat, h = t.syncTimeout, c = t.timeUnits;
                t.Tooltip = function () {
                    this.init.apply(this, arguments)
                }, t.Tooltip.prototype = {
                    init: function (t, e) {
                        this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                            x: 0,
                            y: 0
                        }, this.isHidden = !0, this.split = e.split && !t.inverted, this.shared = e.shared || this.split
                    }, cleanSplit: function (t) {
                        i(this.chart.series, function (e) {
                            var i = e && e.tt;
                            i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1)
                        })
                    }, getLabel: function () {
                        var t = this.chart.renderer, e = this.options;
                        return this.label || (this.split ? this.label = t.g("tooltip") : (this.label = t.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
                            padding: e.padding,
                            r: e.borderRadius
                        }), this.label.attr({
                            fill: e.backgroundColor,
                            "stroke-width": e.borderWidth
                        }).css(e.style).shadow(e.shadow)), this.label.attr({zIndex: 8}).add()), this.label
                    }, update: function (t) {
                        this.destroy(), a(!0, this.chart.options.tooltip.userOptions, t), this.init(this.chart, a(!0, this.options, t))
                    }, destroy: function () {
                        this.label && (this.label = this.label.destroy()), this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()), clearTimeout(this.hideTimer), clearTimeout(this.tooltipTimeout)
                    }, move: function (t, e, i, s) {
                        var o = this, a = o.now,
                            r = !1 !== o.options.animation && !o.isHidden && (1 < Math.abs(t - a.x) || 1 < Math.abs(e - a.y)),
                            l = o.followPointer || 1 < o.len;
                        n(a, {
                            x: r ? (2 * a.x + t) / 3 : t,
                            y: r ? (a.y + e) / 2 : e,
                            anchorX: l ? void 0 : r ? (2 * a.anchorX + i) / 3 : i,
                            anchorY: l ? void 0 : r ? (a.anchorY + s) / 2 : s
                        }), o.getLabel().attr(a), r && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                            o && o.move(t, e, i, s)
                        }, 32))
                    }, hide: function (t) {
                        var e = this;
                        clearTimeout(this.hideTimer), t = r(t, this.options.hideDelay, 500), this.isHidden || (this.hideTimer = h(function () {
                            e.getLabel()[t ? "fadeOut" : "hide"](), e.isHidden = !0
                        }, t))
                    }, getAnchor: function (t, e) {
                        var n, s, a, r = this.chart, h = r.inverted, c = r.plotTop, d = r.plotLeft, p = 0, m = 0;
                        return t = l(t), n = t[0].tooltipPos, this.followPointer && e && (void 0 === e.chartX && (e = r.pointer.normalize(e)), n = [e.chartX - r.plotLeft, e.chartY - c]), n || (i(t, function (t) {
                            s = t.series.yAxis, a = t.series.xAxis, p += t.plotX + (!h && a ? a.left - d : 0), m += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!h && s ? s.top - c : 0)
                        }), p /= t.length, m /= t.length, n = [h ? r.plotWidth - m : p, this.shared && !h && 1 < t.length && e ? e.chartY - c : h ? r.plotHeight - p : m]), o(n, Math.round)
                    }, getPosition: function (t, e, i) {
                        var n, s = this.chart, o = this.distance, a = {}, l = i.h || 0,
                            h = ["y", s.chartHeight, e, i.plotY + s.plotTop, s.plotTop, s.plotTop + s.plotHeight],
                            c = ["x", s.chartWidth, t, i.plotX + s.plotLeft, s.plotLeft, s.plotLeft + s.plotWidth],
                            m = !this.followPointer && r(i.ttBelow, !s.inverted == !!i.negative),
                            d = function (t, e, i, n, s, r) {
                                var h = i < n - o, c = n + o + i < e, d = n - o - i;
                                if (n += o, m && c) a[t] = n; else if (!m && h) a[t] = d; else if (h) a[t] = Math.min(r - i, 0 > d - l ? d : d - l); else {
                                    if (!c) return !1;
                                    a[t] = Math.max(s, n + l + i > e ? n : n + l)
                                }
                            }, p = function (t, e, i, n) {
                                var s;
                                return n < o || n > e - o ? s = !1 : a[t] = n < i / 2 ? 1 : n > e - i / 2 ? e - i - 2 : n - i / 2, s
                            }, u = function (t) {
                                var e = h;
                                h = c, c = e, n = t
                            }, f = function () {
                                !1 !== d.apply(0, h) ? !1 !== p.apply(0, c) || n || (u(!0), f()) : n ? a.x = a.y = 0 : (u(!0), f())
                            };
                        return (s.inverted || 1 < this.len) && u(), f(), a
                    }, defaultFormatter: function (t) {
                        var e, i = this.points || l(this);
                        return e = [t.tooltipFooterHeaderFormatter(i[0])], e = e.concat(t.bodyFormatter(i)), e.push(t.tooltipFooterHeaderFormatter(i[0], !0)), e
                    }, refresh: function (t, e) {
                        var n, s, o, a = this.options, h = t, c = {}, d = [];
                        n = a.formatter || this.defaultFormatter;
                        var p, c = this.shared;
                        a.enabled && (clearTimeout(this.hideTimer), this.followPointer = l(h)[0].series.tooltipOptions.followPointer, o = this.getAnchor(h, e), e = o[0], s = o[1], !c || h.series && h.series.noSharedTooltip ? c = h.getLabelConfig() : (i(h, function (t) {
                            t.setState("hover"), d.push(t.getLabelConfig())
                        }), c = {
                            x: h[0].category,
                            y: h[0].y
                        }, c.points = d, h = h[0]), this.len = d.length, c = n.call(c, this), p = h.series, this.distance = r(p.tooltipOptions.distance, 16), !1 === c ? this.hide() : (n = this.getLabel(), this.isHidden && n.attr({opacity: 1}).show(), this.split ? this.renderSplit(c, t) : (a.style.width || n.css({width: this.chart.spacingBox.width}), n.attr({text: c && c.join ? c.join("") : c}), n.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + r(h.colorIndex, p.colorIndex)), n.attr({stroke: a.borderColor || h.color || p.color || "#666666"}), this.updatePosition({
                            plotX: e,
                            plotY: s,
                            negative: h.negative,
                            ttBelow: h.ttBelow,
                            h: o[2] || 0
                        })), this.isHidden = !1))
                    }, renderSplit: function (e, n) {
                        var s = this, o = [], a = this.chart, l = a.renderer, h = !0, c = this.options, m = 0,
                            d = this.getLabel();
                        i(e.slice(0, n.length + 1), function (t, e) {
                            if (!1 !== t) {
                                e = n[e - 1] || {isHeader: !0, plotX: n[0].plotX};
                                var i = e.series || s, p = i.tt, u = e.series || {},
                                    f = "highcharts-color-" + r(e.colorIndex, u.colorIndex, "none");
                                p || (i.tt = p = l.label(null, null, null, "callout").addClass("highcharts-tooltip-box " + f).attr({
                                    padding: c.padding,
                                    r: c.borderRadius,
                                    fill: c.backgroundColor,
                                    stroke: c.borderColor || e.color || u.color || "#333333",
                                    "stroke-width": c.borderWidth
                                }).add(d)), p.isActive = !0, p.attr({text: t}), p.css(c.style).shadow(c.shadow), t = p.getBBox(), u = t.width + p.strokeWidth(), e.isHeader ? (m = t.height, u = Math.max(0, Math.min(e.plotX + a.plotLeft - u / 2, a.chartWidth - u))) : u = e.plotX + a.plotLeft - r(c.distance, 16) - u, 0 > u && (h = !1), t = (e.series && e.series.yAxis && e.series.yAxis.pos) + (e.plotY || 0), t -= a.plotTop, o.push({
                                    target: e.isHeader ? a.plotHeight + m : t,
                                    rank: e.isHeader ? 1 : 0,
                                    size: i.tt.getBBox().height + 1,
                                    point: e,
                                    x: u,
                                    tt: p
                                })
                            }
                        }), this.cleanSplit(), t.distribute(o, a.plotHeight + m), i(o, function (t) {
                            var e = t.point, i = e.series;
                            t.tt.attr({
                                visibility: void 0 === t.pos ? "hidden" : "inherit",
                                x: h || e.isHeader ? t.x : e.plotX + a.plotLeft + r(c.distance, 16),
                                y: t.pos + a.plotTop,
                                anchorX: e.isHeader ? e.plotX + a.plotLeft : e.plotX + i.xAxis.pos,
                                anchorY: e.isHeader ? t.pos + a.plotTop - 15 : e.plotY + i.yAxis.pos
                            })
                        })
                    }, updatePosition: function (t) {
                        var e = this.chart, i = this.getLabel(),
                            i = (this.options.positioner || this.getPosition).call(this, i.width, i.height, t);
                        this.move(Math.round(i.x), Math.round(i.y || 0), t.plotX + e.plotLeft, t.plotY + e.plotTop)
                    }, getDateFormat: function (t, i, n, s) {
                        var o, a, r = e("%m-%d %H:%M:%S.%L", i),
                            l = {millisecond: 15, second: 12, minute: 9, hour: 6, day: 3}, m = "millisecond";
                        for (a in c) {
                            if (t === c.week && +e("%w", i) === n && "00:00:00.000" === r.substr(6)) {
                                a = "week";
                                break
                            }
                            if (c[a] > t) {
                                a = m;
                                break
                            }
                            if (l[a] && r.substr(l[a]) !== "01-01 00:00:00.000".substr(l[a])) break;
                            "week" !== a && (m = a)
                        }
                        return a && (o = s[a]), o
                    }, getXDateFormat: function (t, e, i) {
                        e = e.dateTimeLabelFormats;
                        var n = i && i.closestPointRange;
                        return (n ? this.getDateFormat(n, t.x, i.options.startOfWeek, e) : e.day) || e.year
                    }, tooltipFooterHeaderFormatter: function (t, e) {
                        var i = e ? "footer" : "header";
                        e = t.series;
                        var n = e.tooltipOptions, o = n.xDateFormat, a = e.xAxis,
                            r = a && "datetime" === a.options.type && m(t.key), i = n[i + "Format"];
                        return r && !o && (o = this.getXDateFormat(t, n, a)), r && o && (i = i.replace("{point.key}", "{point.key:" + o + "}")), s(i, {
                            point: t,
                            series: e
                        })
                    }, bodyFormatter: function (t) {
                        return o(t, function (t) {
                            var e = t.series.tooltipOptions;
                            return (e.pointFormatter || t.point.tooltipFormatter).call(t.point, e.pointFormat)
                        })
                    }
                }
            }(t), function (t) {
                var e = t.addEvent, i = t.attr, n = t.charts, s = t.color, m = t.css, o = t.defined, a = t.each,
                    r = t.extend, l = t.find, h = t.fireEvent, c = t.isObject, d = t.offset, p = t.pick,
                    u = t.removeEvent, f = t.splat, g = t.Tooltip, v = t.win;
                t.Pointer = function (t, e) {
                    this.init(t, e)
                }, t.Pointer.prototype = {
                    init: function (t, e) {
                        this.options = e, this.chart = t, this.runChartClick = e.chart.events && !!e.chart.events.click, this.pinchDown = [], this.lastValidTouch = {}, g && (t.tooltip = new g(t, e.tooltip), this.followTouchMove = p(e.tooltip.followTouchMove, !0)), this.setDOMEvents()
                    }, zoomOption: function (t) {
                        var e = this.chart, i = e.options.chart, n = i.zoomType || "", e = e.inverted;
                        /touch/.test(t.type) && (n = p(i.pinchType, n)), this.zoomX = t = /x/.test(n), this.zoomY = n = /y/.test(n), this.zoomHor = t && !e || n && e, this.zoomVert = n && !e || t && e, this.hasZoom = t || n
                    }, normalize: function (t, e) {
                        var i, n;
                        return t = t || v.event, t.target || (t.target = t.srcElement), n = t.touches ? t.touches.length ? t.touches.item(0) : t.changedTouches[0] : t, e || (this.chartPosition = e = d(this.chart.container)), void 0 === n.pageX ? (i = Math.max(t.x, t.clientX - e.left), e = t.y) : (i = n.pageX - e.left, e = n.pageY - e.top), r(t, {
                            chartX: Math.round(i),
                            chartY: Math.round(e)
                        })
                    }, getCoordinates: function (t) {
                        var e = {xAxis: [], yAxis: []};
                        return a(this.chart.axes, function (i) {
                            e[i.isXAxis ? "xAxis" : "yAxis"].push({
                                axis: i,
                                value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                            })
                        }), e
                    }, findNearestKDPoint: function (t, e, i) {
                        var n;
                        return a(t, function (t) {
                            var s = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf("y");
                            if (t = t.searchPoint(i, s), (s = c(t, !0)) && !(s = !c(n, !0))) var s = n.distX - t.distX,
                                o = n.dist - t.dist,
                                a = (t.series.group && t.series.group.zIndex) - (n.series.group && n.series.group.zIndex),
                                s = 0 < (0 !== s && e ? s : 0 !== o ? o : 0 !== a ? a : n.series.index > t.series.index ? -1 : 1);
                            s && (n = t)
                        }), n
                    }, getPointFromEvent: function (t) {
                        t = t.target;
                        for (var e; t && !e;) e = t.point, t = t.parentNode;
                        return e
                    }, getChartCoordinatesFromPoint: function (t, e) {
                        var i = t.series, n = i.xAxis, i = i.yAxis;
                        if (n && i) return e ? {
                            chartX: n.len + n.pos - t.clientX,
                            chartY: i.len + i.pos - t.plotY
                        } : {chartX: t.clientX + n.pos, chartY: t.plotY + i.pos}
                    }, getHoverData: function (e, i, n, s, o, r) {
                        var h, d = [];
                        s = !(!s || !e);
                        var u = i && !i.stickyTracking ? [i] : t.grep(n, function (t) {
                            return t.visible && !(!o && t.directTouch) && p(t.options.enableMouseTracking, !0) && t.stickyTracking
                        });
                        return i = (h = s ? e : this.findNearestKDPoint(u, o, r)) && h.series, h && (o && !i.noSharedTooltip ? (u = t.grep(n, function (t) {
                            return t.visible && !(!o && t.directTouch) && p(t.options.enableMouseTracking, !0) && !t.noSharedTooltip
                        }), a(u, function (t) {
                            t = l(t.points, function (t) {
                                return t.x === h.x
                            }), c(t) && !t.isNull && d.push(t)
                        })) : d.push(h)), {hoverPoint: h, hoverSeries: i, hoverPoints: d}
                    }, runPointActions: function (i, s) {
                        var o, r = this.chart, l = r.tooltip, h = !!l && l.shared, c = s || r.hoverPoint,
                            d = c && c.series || r.hoverSeries,
                            d = this.getHoverData(c, d, r.series, !!s || d && d.directTouch && this.isDirectTouch, h, i),
                            c = d.hoverPoint;
                        o = d.hoverPoints, s = (d = d.hoverSeries) && d.tooltipOptions.followPointer, h = h && d && !d.noSharedTooltip, c && (c !== r.hoverPoint || l && l.isHidden) ? (a(r.hoverPoints || [], function (e) {
                            -1 === t.inArray(e, o) && e.setState()
                        }), a(o || [], function (t) {
                            t.setState("hover")
                        }), r.hoverSeries !== d && d.onMouseOver(), r.hoverPoint && r.hoverPoint.firePointEvent("mouseOut"), c.firePointEvent("mouseOver"), r.hoverPoints = o, r.hoverPoint = c, l && l.refresh(h ? o : c, i)) : s && l && !l.isHidden && (c = l.getAnchor([{}], i), l.updatePosition({
                            plotX: c[0],
                            plotY: c[1]
                        })), this.unDocMouseMove || (this.unDocMouseMove = e(r.container.ownerDocument, "mousemove", function (e) {
                            var i = n[t.hoverChartIndex];
                            i && i.pointer.onDocumentMouseMove(e)
                        })), a(r.axes, function (e) {
                            var n = p(e.crosshair.snap, !0), s = n ? t.find(o, function (t) {
                                return t.series[e.coll] === e
                            }) : void 0;
                            s || !n ? e.drawCrosshair(i, s) : e.hideCrosshair()
                        })
                    }, reset: function (t, e) {
                        var i = this.chart, n = i.hoverSeries, s = i.hoverPoint, o = i.hoverPoints, r = i.tooltip,
                            l = r && r.shared ? o : s;
                        t && l && a(f(l), function (e) {
                            e.series.isCartesian && void 0 === e.plotX && (t = !1)
                        }), t ? r && l && (r.refresh(l), s && (s.setState(s.state, !0), a(i.axes, function (t) {
                            t.crosshair && t.drawCrosshair(null, s)
                        }))) : (s && s.onMouseOut(), o && a(o, function (t) {
                            t.setState()
                        }), n && n.onMouseOut(), r && r.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), a(i.axes, function (t) {
                            t.hideCrosshair()
                        }), this.hoverX = i.hoverPoints = i.hoverPoint = null)
                    }, scaleGroups: function (t, e) {
                        var i, n = this.chart;
                        a(n.series, function (s) {
                            i = t || s.getPlotBox(), s.xAxis && s.xAxis.zoomEnabled && s.group && (s.group.attr(i), s.markerGroup && (s.markerGroup.attr(i), s.markerGroup.clip(e ? n.clipRect : null)), s.dataLabelsGroup && s.dataLabelsGroup.attr(i))
                        }), n.clipRect.attr(e || n.clipBox)
                    }, dragStart: function (t) {
                        var e = this.chart;
                        e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
                    }, drag: function (t) {
                        var e, i = this.chart, n = i.options.chart, o = t.chartX, a = t.chartY, r = this.zoomHor,
                            l = this.zoomVert, h = i.plotLeft, c = i.plotTop, d = i.plotWidth, p = i.plotHeight,
                            u = this.selectionMarker, f = this.mouseDownX, m = this.mouseDownY,
                            g = n.panKey && t[n.panKey + "Key"];
                        u && u.touch || (o < h ? o = h : o > h + d && (o = h + d), a < c ? a = c : a > c + p && (a = c + p), this.hasDragged = Math.sqrt(Math.pow(f - o, 2) + Math.pow(m - a, 2)), 10 < this.hasDragged && (e = i.isInsidePlot(f - h, m - c), i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !g && !u && (this.selectionMarker = u = i.renderer.rect(h, c, r ? 1 : d, l ? 1 : p, 0).attr({
                            fill: n.selectionMarkerFill || s("#335cad").setOpacity(.25).get(),
                            "class": "highcharts-selection-marker",
                            zIndex: 7
                        }).add()), u && r && (o -= f, u.attr({
                            width: Math.abs(o),
                            x: (0 < o ? 0 : o) + f
                        })), u && l && (o = a - m, u.attr({
                            height: Math.abs(o),
                            y: (0 < o ? 0 : o) + m
                        })), e && !u && n.panning && i.pan(t, n.panning)))
                    }, drop: function (t) {
                        var e = this, i = this.chart, n = this.hasPinched;
                        if (this.selectionMarker) {
                            var s, l = {originalEvent: t, xAxis: [], yAxis: []}, c = this.selectionMarker,
                                d = c.attr ? c.attr("x") : c.x, p = c.attr ? c.attr("y") : c.y,
                                u = c.attr ? c.attr("width") : c.width, f = c.attr ? c.attr("height") : c.height;
                            (this.hasDragged || n) && (a(i.axes, function (i) {
                                if (i.zoomEnabled && o(i.min) && (n || e[{xAxis: "zoomX", yAxis: "zoomY"}[i.coll]])) {
                                    var a = i.horiz, r = "touchend" === t.type ? i.minPixelPadding : 0,
                                        h = i.toValue((a ? d : p) + r), a = i.toValue((a ? d + u : p + f) - r);
                                    l[i.coll].push({axis: i, min: Math.min(h, a), max: Math.max(h, a)}), s = !0
                                }
                            }), s && h(i, "selection", l, function (t) {
                                i.zoom(r(t, n ? {animation: !1} : null))
                            })), this.selectionMarker = this.selectionMarker.destroy(), n && this.scaleGroups()
                        }
                        i && (m(i.container, {cursor: i._cursor}), i.cancelClick = 10 < this.hasDragged, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                    }, onContainerMouseDown: function (t) {
                        t = this.normalize(t), this.zoomOption(t), t.preventDefault && t.preventDefault(), this.dragStart(t)
                    }, onDocumentMouseUp: function (e) {
                        n[t.hoverChartIndex] && n[t.hoverChartIndex].pointer.drop(e)
                    }, onDocumentMouseMove: function (t) {
                        var e = this.chart, i = this.chartPosition;
                        t = this.normalize(t, i), !i || this.inClass(t.target, "highcharts-tracker") || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || this.reset()
                    }, onContainerMouseLeave: function (e) {
                        var i = n[t.hoverChartIndex];
                        i && (e.relatedTarget || e.toElement) && (i.pointer.reset(), i.pointer.chartPosition = null)
                    }, onContainerMouseMove: function (e) {
                        var i = this.chart;
                        o(t.hoverChartIndex) && n[t.hoverChartIndex] && n[t.hoverChartIndex].mouseIsDown || (t.hoverChartIndex = i.index), e = this.normalize(e), e.returnValue = !1, "mousedown" === i.mouseIsDown && this.drag(e), !this.inClass(e.target, "highcharts-tracker") && !i.isInsidePlot(e.chartX - i.plotLeft, e.chartY - i.plotTop) || i.openMenu || this.runPointActions(e)
                    }, inClass: function (t, e) {
                        for (var n; t;) {
                            if (n = i(t, "class")) {
                                if (-1 !== n.indexOf(e)) return !0;
                                if (-1 !== n.indexOf("highcharts-container")) return !1
                            }
                            t = t.parentNode
                        }
                    }, onTrackerMouseOut: function (t) {
                        var e = this.chart.hoverSeries;
                        t = t.relatedTarget || t.toElement, this.isDirectTouch = !1, !e || !t || e.stickyTracking || this.inClass(t, "highcharts-tooltip") || this.inClass(t, "highcharts-series-" + e.index) && this.inClass(t, "highcharts-tracker") || e.onMouseOut()
                    }, onContainerClick: function (t) {
                        var e = this.chart, i = e.hoverPoint, n = e.plotLeft, s = e.plotTop;
                        t = this.normalize(t), e.cancelClick || (i && this.inClass(t.target, "highcharts-tracker") ? (h(i.series, "click", r(t, {point: i})), e.hoverPoint && i.firePointEvent("click", t)) : (r(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - n, t.chartY - s) && h(e, "click", t)))
                    }, setDOMEvents: function () {
                        var i = this, n = i.chart.container, s = n.ownerDocument;
                        n.onmousedown = function (t) {
                            i.onContainerMouseDown(t)
                        }, n.onmousemove = function (t) {
                            i.onContainerMouseMove(t)
                        }, n.onclick = function (t) {
                            i.onContainerClick(t)
                        }, e(n, "mouseleave", i.onContainerMouseLeave), 1 === t.chartCount && e(s, "mouseup", i.onDocumentMouseUp), t.hasTouch && (n.ontouchstart = function (t) {
                            i.onContainerTouchStart(t)
                        }, n.ontouchmove = function (t) {
                            i.onContainerTouchMove(t)
                        }, 1 === t.chartCount && e(s, "touchend", i.onDocumentTouchEnd))
                    }, destroy: function () {
                        var e = this, i = this.chart.container.ownerDocument;
                        e.unDocMouseMove && e.unDocMouseMove(), u(e.chart.container, "mouseleave", e.onContainerMouseLeave), t.chartCount || (u(i, "mouseup", e.onDocumentMouseUp), t.hasTouch && u(i, "touchend", e.onDocumentTouchEnd)), clearInterval(e.tooltipTimeout), t.objectEach(e, function (t, i) {
                            e[i] = null
                        })
                    }
                }
            }(t), function (t) {
                var e = t.charts, i = t.each, n = t.extend, s = t.map, m = t.noop, o = t.pick;
                n(t.Pointer.prototype, {
                    pinchTranslate: function (t, e, m, i, n, s) {
                        this.zoomHor && this.pinchTranslateDirection(!0, t, e, m, i, n, s), this.zoomVert && this.pinchTranslateDirection(!1, t, e, m, i, n, s)
                    }, pinchTranslateDirection: function (t, e, m, i, n, s, o, a) {
                        var r, l, h, c = this.chart, d = t ? "x" : "y", p = t ? "X" : "Y", u = "chart" + p,
                            f = t ? "width" : "height", g = c["plot" + (t ? "Left" : "Top")], v = a || 1,
                            y = c.inverted, x = c.bounds[t ? "h" : "v"], b = 1 === e.length, k = e[0][u], w = m[0][u],
                            M = !b && e[1][u], S = !b && m[1][u];
                        m = function () {
                            !b && 20 < Math.abs(k - M) && (v = a || Math.abs(w - S) / Math.abs(k - M)), l = (g - w) / v + k, r = c["plot" + (t ? "Width" : "Height")] / v
                        }, m(), e = l, e < x.min ? (e = x.min, h = !0) : e + r > x.max && (e = x.max - r, h = !0), h ? (w -= .8 * (w - o[d][0]), b || (S -= .8 * (S - o[d][1])), m()) : o[d] = [w, S], y || (s[d] = l - g, s[f] = r), s = y ? 1 / v : v, n[f] = r, n[d] = e, i[y ? t ? "scaleY" : "scaleX" : "scale" + p] = v, i["translate" + p] = s * g + (w - s * k)
                    }, pinch: function (t) {
                        var e = this, a = e.chart, r = e.pinchDown, l = t.touches, h = l.length, c = e.lastValidTouch,
                            d = e.hasZoom, p = e.selectionMarker, u = {},
                            f = 1 === h && (e.inClass(t.target, "highcharts-tracker") && a.runTrackerClick || e.runChartClick),
                            g = {};
                        1 < h && (e.initiated = !0), d && e.initiated && !f && t.preventDefault(), s(l, function (t) {
                            return e.normalize(t)
                        }), "touchstart" === t.type ? (i(l, function (t, e) {
                            r[e] = {chartX: t.chartX, chartY: t.chartY}
                        }), c.x = [r[0].chartX, r[1] && r[1].chartX], c.y = [r[0].chartY, r[1] && r[1].chartY], i(a.axes, function (t) {
                            if (t.zoomEnabled) {
                                var e = a.bounds[t.horiz ? "h" : "v"], i = t.minPixelPadding,
                                    n = t.toPixels(o(t.options.min, t.dataMin)),
                                    s = t.toPixels(o(t.options.max, t.dataMax)), r = Math.max(n, s);
                                e.min = Math.min(t.pos, Math.min(n, s) - i), e.max = Math.max(t.pos + t.len, r + i)
                            }
                        }), e.res = !0) : e.followTouchMove && 1 === h ? this.runPointActions(e.normalize(t)) : r.length && (p || (e.selectionMarker = p = n({
                            destroy: m,
                            touch: !0
                        }, a.plotBox)), e.pinchTranslate(r, l, u, p, g, c), e.hasPinched = d, e.scaleGroups(u, g), e.res && (e.res = !1, this.reset(!1, 0)))
                    }, touch: function (e, m) {
                        var i, n, s = this.chart;
                        s.index !== t.hoverChartIndex && this.onContainerMouseLeave({relatedTarget: !0}), t.hoverChartIndex = s.index, 1 === e.touches.length ? (e = this.normalize(e), (n = s.isInsidePlot(e.chartX - s.plotLeft, e.chartY - s.plotTop)) && !s.openMenu ? (m && this.runPointActions(e), "touchmove" === e.type && (m = this.pinchDown, i = !!m[0] && 4 <= Math.sqrt(Math.pow(m[0].chartX - e.chartX, 2) + Math.pow(m[0].chartY - e.chartY, 2))), o(i, !0) && this.pinch(e)) : m && this.reset()) : 2 === e.touches.length && this.pinch(e)
                    }, onContainerTouchStart: function (t) {
                        this.zoomOption(t), this.touch(t, !0)
                    }, onContainerTouchMove: function (t) {
                        this.touch(t)
                    }, onDocumentTouchEnd: function (i) {
                        e[t.hoverChartIndex] && e[t.hoverChartIndex].pointer.drop(i)
                    }
                })
            }(t), function (t) {
                var e = t.addEvent, i = t.charts, n = t.css, s = t.doc, m = t.extend, o = t.noop, a = t.Pointer,
                    r = t.removeEvent, l = t.win, h = t.wrap;
                if (!t.hasTouch && (l.PointerEvent || l.MSPointerEvent)) {
                    var c = {}, d = !!l.PointerEvent, p = function () {
                        var e = [];
                        return e.item = function (t) {
                            return this[t]
                        }, t.objectEach(c, function (t) {
                            e.push({pageX: t.pageX, pageY: t.pageY, target: t.target})
                        }), e
                    }, u = function (e, n, s, a) {
                        "touch" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_TOUCH || !i[t.hoverChartIndex] || (a(e), a = i[t.hoverChartIndex].pointer, a[n]({
                            type: s,
                            target: e.currentTarget,
                            preventDefault: o,
                            touches: p()
                        }))
                    };
                    m(a.prototype, {
                        onContainerPointerDown: function (t) {
                            u(t, "onContainerTouchStart", "touchstart", function (t) {
                                c[t.pointerId] = {pageX: t.pageX, pageY: t.pageY, target: t.currentTarget}
                            })
                        }, onContainerPointerMove: function (t) {
                            u(t, "onContainerTouchMove", "touchmove", function (t) {
                                c[t.pointerId] = {
                                    pageX: t.pageX,
                                    pageY: t.pageY
                                }, c[t.pointerId].target || (c[t.pointerId].target = t.currentTarget)
                            })
                        }, onDocumentPointerUp: function (t) {
                            u(t, "onDocumentTouchEnd", "touchend", function (t) {
                                delete c[t.pointerId]
                            })
                        }, batchMSEvents: function (t) {
                            t(this.chart.container, d ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown),
                                t(this.chart.container, d ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(s, d ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                        }
                    }), h(a.prototype, "init", function (t, e, i) {
                        t.call(this, e, i), this.hasZoom && n(e.container, {
                            "-ms-touch-action": "none",
                            "touch-action": "none"
                        })
                    }), h(a.prototype, "setDOMEvents", function (t) {
                        t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(e)
                    }), h(a.prototype, "destroy", function (t) {
                        this.batchMSEvents(r), t.call(this)
                    })
                }
            }(t), function (t) {
                var e = t.addEvent, i = t.css, n = t.discardElement, s = t.defined, m = t.each, o = t.isFirefox,
                    a = t.marginNames, r = t.merge, l = t.pick, h = t.setAnimation, c = t.stableSort, d = t.win,
                    p = t.wrap;
                t.Legend = function (t, e) {
                    this.init(t, e)
                }, t.Legend.prototype = {
                    init: function (t, i) {
                        this.chart = t, this.setOptions(i), i.enabled && (this.render(), e(this.chart, "endResize", function () {
                            this.legend.positionCheckboxes()
                        }))
                    }, setOptions: function (t) {
                        var e = l(t.padding, 8);
                        this.options = t, this.itemStyle = t.itemStyle, this.itemHiddenStyle = r(this.itemStyle, t.itemHiddenStyle), this.itemMarginTop = t.itemMarginTop || 0, this.padding = e, this.initialItemY = e - 5, this.itemHeight = this.maxItemWidth = 0, this.symbolWidth = l(t.symbolWidth, 16), this.pages = []
                    }, update: function (t, e) {
                        var i = this.chart;
                        this.setOptions(r(!0, this.options, t)), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, l(e, !0) && i.redraw()
                    }, colorizeItem: function (t, e) {
                        t.legendGroup[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                        var i = this.options, n = t.legendItem, s = t.legendLine, o = t.legendSymbol,
                            a = this.itemHiddenStyle.color, i = e ? i.itemStyle.color : a, r = e ? t.color || a : a,
                            l = t.options && t.options.marker, h = {fill: r};
                        n && n.css({
                            fill: i,
                            color: i
                        }), s && s.attr({stroke: r}), o && (l && o.isMarker && (h = t.pointAttribs(), e || (h.stroke = h.fill = a)), o.attr(h))
                    }, positionItem: function (t) {
                        var e = this.options, i = e.symbolPadding, e = !e.rtl, n = t._legendItemPos, s = n[0], n = n[1],
                            o = t.checkbox;
                        (t = t.legendGroup) && t.element && t.translate(e ? s : this.legendWidth - s - 2 * i - 4, n), o && (o.x = s, o.y = n)
                    }, destroyItem: function (t) {
                        var e = t.checkbox;
                        m(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (e) {
                            t[e] && (t[e] = t[e].destroy())
                        }), e && n(t.checkbox)
                    }, destroy: function () {
                        function t(t) {
                            this[t] && (this[t] = this[t].destroy())
                        }

                        m(this.getAllItems(), function (e) {
                            m(["legendItem", "legendGroup"], t, e)
                        }), m("clipRect up down pager nav box title group".split(" "), t, this), this.display = null
                    }, positionCheckboxes: function (t) {
                        var e, n = this.group && this.group.alignAttr, s = this.clipHeight || this.legendHeight,
                            o = this.titleHeight;
                        n && (e = n.translateY, m(this.allItems, function (a) {
                            var r, l = a.checkbox;
                            l && (r = e + o + l.y + (t || 0) + 3, i(l, {
                                left: n.translateX + a.checkboxOffset + l.x - 20 + "px",
                                top: r + "px",
                                display: r > e - 6 && r < e + s - 6 ? "" : "none"
                            }))
                        }))
                    }, renderTitle: function () {
                        var t = this.options, e = this.padding, i = t.title, n = 0;
                        i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, null, null, null, t.useHTML, null, "legend-title").attr({zIndex: 1}).css(i.style).add(this.group)), t = this.title.getBBox(), n = t.height, this.offsetWidth = t.width, this.contentGroup.attr({translateY: n})), this.titleHeight = n
                    }, setText: function (e) {
                        var i = this.options;
                        e.legendItem.attr({text: i.labelFormat ? t.format(i.labelFormat, e) : i.labelFormatter.call(e)})
                    }, renderItem: function (t) {
                        var e = this.chart, i = e.renderer, n = this.options, s = "horizontal" === n.layout,
                            o = this.symbolWidth, a = n.symbolPadding, h = this.itemStyle, m = this.itemHiddenStyle,
                            c = this.padding, d = s ? l(n.itemDistance, 20) : 0, p = !n.rtl, u = n.width,
                            f = n.itemMarginBottom || 0, g = this.itemMarginTop, v = t.legendItem, y = !t.series,
                            x = !y && t.series.drawLegendSymbol ? t.series : t, b = x.options,
                            k = this.createCheckboxForItem && b && b.showCheckbox, b = o + a + d + (k ? 20 : 0),
                            w = n.useHTML, M = t.options.className;
                        v || (t.legendGroup = i.g("legend-item").addClass("highcharts-" + x.type + "-series highcharts-color-" + t.colorIndex + (M ? " " + M : "") + (y ? " highcharts-series-" + t.index : "")).attr({zIndex: 1}).add(this.scrollGroup), t.legendItem = v = i.text("", p ? o + a : -a, this.baseline || 0, w).css(r(t.visible ? h : m)).attr({
                            align: p ? "left" : "right",
                            zIndex: 2
                        }).add(t.legendGroup), this.baseline || (o = h.fontSize, this.fontMetrics = i.fontMetrics(o, v), this.baseline = this.fontMetrics.f + 3 + g, v.attr("y", this.baseline)), this.symbolHeight = n.symbolHeight || this.fontMetrics.f, x.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, v, w), k && this.createCheckboxForItem(t)), this.colorizeItem(t, t.visible), h.width || v.css({width: (n.itemWidth || n.width || e.spacingBox.width) - b}), this.setText(t), i = v.getBBox(), h = t.checkboxOffset = n.itemWidth || t.legendItemWidth || i.width + b, this.itemHeight = i = Math.round(t.legendItemHeight || i.height || this.symbolHeight), s && this.itemX - c + h > (u || e.spacingBox.width - 2 * c - n.x) && (this.itemX = c, this.itemY += g + this.lastLineHeight + f, this.lastLineHeight = 0), this.maxItemWidth = Math.max(this.maxItemWidth, h), this.lastItemY = g + this.itemY + f, this.lastLineHeight = Math.max(i, this.lastLineHeight), t._legendItemPos = [this.itemX, this.itemY], s ? this.itemX += h : (this.itemY += g + i + f, this.lastLineHeight = i), this.offsetWidth = u || Math.max((s ? this.itemX - c - (t.checkbox ? 0 : d) : h) + c, this.offsetWidth)
                    }, getAllItems: function () {
                        var t = [];
                        return m(this.chart.series, function (e) {
                            var i = e && e.options;
                            e && l(i.showInLegend, !s(i.linkedTo) && void 0, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)))
                        }), t
                    }, adjustMargins: function (t, e) {
                        var i = this.chart, n = this.options,
                            o = n.align.charAt(0) + n.verticalAlign.charAt(0) + n.layout.charAt(0);
                        n.floating || m([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (r, h) {
                            r.test(o) && !s(t[h]) && (i[a[h]] = Math.max(i[a[h]], i.legend[(h + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][h] * n[h % 2 ? "x" : "y"] + l(n.margin, 12) + e[h]))
                        })
                    }, render: function () {
                        var t, e, i, n, s = this, o = s.chart, a = o.renderer, l = s.group, h = s.box, d = s.options,
                            p = s.padding;
                        s.itemX = p, s.itemY = s.initialItemY, s.offsetWidth = 0, s.lastItemY = 0, l || (s.group = l = a.g("legend").attr({zIndex: 7}).add(), s.contentGroup = a.g().attr({zIndex: 1}).add(l), s.scrollGroup = a.g().add(s.contentGroup)), s.renderTitle(), t = s.getAllItems(), c(t, function (t, e) {
                            return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
                        }), d.reversed && t.reverse(), s.allItems = t, s.display = e = !!t.length, s.lastLineHeight = 0, m(t, function (t) {
                            s.renderItem(t)
                        }), i = (d.width || s.offsetWidth) + p, n = s.lastItemY + s.lastLineHeight + s.titleHeight, n = s.handleOverflow(n), n += p, h || (s.box = h = a.rect().addClass("highcharts-legend-box").attr({r: d.borderRadius}).add(l), h.isNew = !0), h.attr({
                            stroke: d.borderColor,
                            "stroke-width": d.borderWidth || 0,
                            fill: d.backgroundColor || "none"
                        }).shadow(d.shadow), 0 < i && 0 < n && (h[h.isNew ? "attr" : "animate"](h.crisp({
                            x: 0,
                            y: 0,
                            width: i,
                            height: n
                        }, h.strokeWidth())), h.isNew = !1), h[e ? "show" : "hide"](), s.legendWidth = i, s.legendHeight = n, m(t, function (t) {
                            s.positionItem(t)
                        }), e && l.align(r(d, {
                            width: i,
                            height: n
                        }), !0, "spacingBox"), o.isResizing || this.positionCheckboxes()
                    }, handleOverflow: function (t) {
                        var e, i, n = this, s = this.chart, o = s.renderer, a = this.options, r = a.y, h = this.padding,
                            s = s.spacingBox.height + ("top" === a.verticalAlign ? -r : r) - h, r = a.maxHeight,
                            c = this.clipRect, d = a.navigation, p = l(d.animation, !0), u = d.arrowSize || 12,
                            f = this.nav, g = this.pages, v = this.allItems, y = function (t) {
                                "number" == typeof t ? c.attr({height: t}) : c && (n.clipRect = c.destroy(), n.contentGroup.clip()), n.contentGroup.div && (n.contentGroup.div.style.clip = t ? "rect(" + h + "px,9999px," + (h + t) + "px,0)" : "auto")
                            };
                        return "horizontal" !== a.layout || "middle" === a.verticalAlign || a.floating || (s /= 2), r && (s = Math.min(s, r)), g.length = 0, t > s && !1 !== d.enabled ? (this.clipHeight = e = Math.max(s - 20 - this.titleHeight - h, 0), this.currentPage = l(this.currentPage, 1), this.fullHeight = t, m(v, function (t, n) {
                            var s = t._legendItemPos[1];
                            t = Math.round(t.legendItem.getBBox().height);
                            var o = g.length;
                            (!o || s - g[o - 1] > e && (i || s) !== g[o - 1]) && (g.push(i || s), o++), n === v.length - 1 && s + t - g[o - 1] > e && g.push(s), s !== i && (i = s)
                        }), c || (c = n.clipRect = o.clipRect(0, h, 9999, 0), n.contentGroup.clip(c)), y(e), f || (this.nav = f = o.g().attr({zIndex: 1}).add(this.group), this.up = o.symbol("triangle", 0, 0, u, u).on("click", function () {
                            n.scroll(-1, p)
                        }).add(f), this.pager = o.text("", 15, 10).addClass("highcharts-legend-navigation").css(d.style).add(f), this.down = o.symbol("triangle-down", 0, 0, u, u).on("click", function () {
                            n.scroll(1, p)
                        }).add(f)), n.scroll(0), t = s) : f && (y(), this.nav = f.destroy(), this.scrollGroup.attr({translateY: 1}), this.clipHeight = 0), t
                    }, scroll: function (t, e) {
                        var i = this.pages, n = i.length;
                        t = this.currentPage + t;
                        var s = this.clipHeight, o = this.options.navigation, a = this.pager, r = this.padding;
                        t > n && (t = n), 0 < t && (void 0 !== e && h(e, this.chart), this.nav.attr({
                            translateX: r,
                            translateY: s + this.padding + 7 + this.titleHeight,
                            visibility: "visible"
                        }), this.up.attr({"class": 1 === t ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"}), a.attr({text: t + "/" + n}), this.down.attr({
                            x: 18 + this.pager.getBBox().width,
                            "class": t === n ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                        }), this.up.attr({fill: 1 === t ? o.inactiveColor : o.activeColor}).css({cursor: 1 === t ? "default" : "pointer"}), this.down.attr({fill: t === n ? o.inactiveColor : o.activeColor}).css({cursor: t === n ? "default" : "pointer"}), e = -i[t - 1] + this.initialItemY, this.scrollGroup.animate({translateY: e}), this.currentPage = t, this.positionCheckboxes(e))
                    }
                }, t.LegendSymbolMixin = {
                    drawRectangle: function (t, e) {
                        var i = t.symbolHeight, n = t.options.squareSymbol;
                        e.legendSymbol = this.chart.renderer.rect(n ? (t.symbolWidth - i) / 2 : 0, t.baseline - i + 1, n ? i : t.symbolWidth, i, l(t.options.symbolRadius, i / 2)).addClass("highcharts-point").attr({zIndex: 3}).add(e.legendGroup)
                    }, drawLineMarker: function (t) {
                        var e = this.options, i = e.marker, n = t.symbolWidth, s = t.symbolHeight, o = s / 2,
                            a = this.chart.renderer, h = this.legendGroup;
                        t = t.baseline - Math.round(.3 * t.fontMetrics.b);
                        var m;
                        m = {"stroke-width": e.lineWidth || 0}, e.dashStyle && (m.dashstyle = e.dashStyle), this.legendLine = a.path(["M", 0, t, "L", n, t]).addClass("highcharts-graph").attr(m).add(h), i && !1 !== i.enabled && (e = Math.min(l(i.radius, o), o), 0 === this.symbol.indexOf("url") && (i = r(i, {
                            width: s,
                            height: s
                        }), e = 0), this.legendSymbol = i = a.symbol(this.symbol, n / 2 - e, t - e, 2 * e, 2 * e, i).addClass("highcharts-point").add(h), i.isMarker = !0)
                    }
                }, (/Trident\/7\.0/.test(d.navigator.userAgent) || o) && p(t.Legend.prototype, "positionItem", function (t, e) {
                    var i = this, n = function () {
                        e._legendItemPos && t.call(i, e)
                    };
                    n(), setTimeout(n)
                })
            }(t), function (t) {
                var e = t.addEvent, i = t.animate, n = t.animObject, s = t.attr, m = t.doc, o = t.Axis,
                    a = t.createElement, r = t.defaultOptions, l = t.discardElement, h = t.charts, c = t.css,
                    d = t.defined, p = t.each, u = t.extend, f = t.find, g = t.fireEvent, v = t.getStyle, y = t.grep,
                    x = t.isNumber, b = t.isObject, k = t.isString, w = t.Legend, M = t.marginNames, S = t.merge,
                    C = t.objectEach, T = t.Pointer, A = t.pick, P = t.pInt, L = t.removeEvent, O = t.seriesTypes,
                    I = t.splat, D = t.svg, E = t.syncTimeout, z = t.win, N = t.Renderer, B = t.Chart = function () {
                        this.getArgs.apply(this, arguments)
                    };
                t.chart = function (t, e, i) {
                    return new B(t, e, i)
                }, u(B.prototype, {
                    callbacks: [], getArgs: function () {
                        var t = [].slice.call(arguments);
                        (k(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()), this.init(t[0], t[1])
                    }, init: function (i, n) {
                        var s, o, a = i.series, l = i.plotOptions || {};
                        i.series = null, s = S(r, i);
                        for (o in s.plotOptions) s.plotOptions[o].tooltip = l[o] && S(l[o].tooltip) || void 0;
                        s.tooltip.userOptions = i.chart && i.chart.forExport && i.tooltip.userOptions || i.tooltip, s.series = i.series = a, this.userOptions = i, i = s.chart, o = i.events, this.margin = [], this.spacing = [], this.bounds = {
                            h: {},
                            v: {}
                        }, this.callback = n, this.isResizing = 0, this.options = s, this.axes = [], this.series = [], this.hasCartesianSeries = i.showAxes;
                        var c = this;
                        c.index = h.length, h.push(c), t.chartCount++, o && C(o, function (t, i) {
                            e(c, i, t)
                        }), c.xAxis = [], c.yAxis = [], c.pointCount = c.colorCounter = c.symbolCounter = 0, c.firstRender()
                    }, initSeries: function (e) {
                        var i = this.options.chart;
                        return (i = O[e.type || i.type || i.defaultSeriesType]) || t.error(17, !0), i = new i, i.init(this, e), i
                    }, orderSeries: function (t) {
                        var e = this.series;
                        for (t = t || 0; t < e.length; t++) e[t] && (e[t].index = t, e[t].name = e[t].name || "Series " + (e[t].index + 1))
                    }, isInsidePlot: function (t, e, i) {
                        var n = i ? e : t;
                        return t = i ? t : e, 0 <= n && n <= this.plotWidth && 0 <= t && t <= this.plotHeight
                    }, redraw: function (e) {
                        var i, n, s, o = this.axes, a = this.series, r = this.pointer, l = this.legend,
                            h = this.isDirtyLegend, c = this.hasCartesianSeries, d = this.isDirtyBox, m = this.renderer,
                            f = m.isHidden(), v = [];
                        for (this.setResponsive && this.setResponsive(!1), t.setAnimation(e, this), f && this.temporaryDisplay(), this.layOutTitles(), e = a.length; e--;) if (s = a[e], s.options.stacking && (i = !0, s.isDirty)) {
                            n = !0;
                            break
                        }
                        if (n) for (e = a.length; e--;) s = a[e], s.options.stacking && (s.isDirty = !0);
                        p(a, function (t) {
                            t.isDirty && "point" === t.options.legendType && (t.updateTotals && t.updateTotals(), h = !0), t.isDirtyData && g(t, "updatedData")
                        }), h && l.options.enabled && (l.render(), this.isDirtyLegend = !1), i && this.getStacks(), c && p(o, function (t) {
                            t.updateNames(), t.setScale()
                        }), this.getMargins(), c && (p(o, function (t) {
                            t.isDirty && (d = !0)
                        }), p(o, function (t) {
                            var e = t.min + "," + t.max;
                            t.extKey !== e && (t.extKey = e, v.push(function () {
                                g(t, "afterSetExtremes", u(t.eventArgs, t.getExtremes())), delete t.eventArgs
                            })), (d || i) && t.redraw()
                        })), d && this.drawChartBox(), g(this, "predraw"), p(a, function (t) {
                            (d || t.isDirty) && t.visible && t.redraw(), t.isDirtyData = !1
                        }), r && r.reset(!0), m.draw(), g(this, "redraw"), g(this, "render"), f && this.temporaryDisplay(!0), p(v, function (t) {
                            t.call()
                        })
                    }, get: function (t) {
                        function e(e) {
                            return e.id === t || e.options && e.options.id === t
                        }

                        var i, n, s = this.series;
                        for (i = f(this.axes, e) || f(this.series, e), n = 0; !i && n < s.length; n++) i = f(s[n].points || [], e);
                        return i
                    }, getAxes: function () {
                        var t = this, e = this.options, i = e.xAxis = I(e.xAxis || {}), e = e.yAxis = I(e.yAxis || {});
                        p(i, function (t, e) {
                            t.index = e, t.isX = !0
                        }), p(e, function (t, e) {
                            t.index = e
                        }), i = i.concat(e), p(i, function (e) {
                            new o(t, e)
                        })
                    }, getSelectedPoints: function () {
                        var t = [];
                        return p(this.series, function (e) {
                            t = t.concat(y(e.data || [], function (t) {
                                return t.selected
                            }))
                        }), t
                    }, getSelectedSeries: function () {
                        return y(this.series, function (t) {
                            return t.selected
                        })
                    }, setTitle: function (t, e, i) {
                        var n, s = this, o = s.options;
                        n = o.title = S({
                            style: {
                                color: "#333333",
                                fontSize: o.isStock ? "16px" : "18px"
                            }
                        }, o.title, t), o = o.subtitle = S({style: {color: "#666666"}}, o.subtitle, e), p([["title", t, n], ["subtitle", e, o]], function (t, e) {
                            var i = t[0], n = s[i], o = t[1];
                            t = t[2], n && o && (s[i] = n = n.destroy()), t && t.text && !n && (s[i] = s.renderer.text(t.text, 0, 0, t.useHTML).attr({
                                align: t.align,
                                "class": "highcharts-" + i,
                                zIndex: t.zIndex || 4
                            }).add(), s[i].update = function (t) {
                                s.setTitle(!e && t, e && t)
                            }, s[i].css(t.style))
                        }), s.layOutTitles(i)
                    }, layOutTitles: function (t) {
                        var e, i = 0, n = this.renderer, s = this.spacingBox;
                        p(["title", "subtitle"], function (t) {
                            var e = this[t], o = this.options[t];
                            t = "title" === t ? -3 : o.verticalAlign ? 0 : i + 2;
                            var a;
                            e && (a = o.style.fontSize, a = n.fontMetrics(a, e).b, e.css({width: (o.width || s.width + o.widthAdjust) + "px"}).align(u({y: t + a}, o), !1, "spacingBox"), o.floating || o.verticalAlign || (i = Math.ceil(i + e.getBBox(o.useHTML).height)))
                        }, this), e = this.titleOffset !== i, this.titleOffset = i, !this.isDirtyBox && e && (this.isDirtyBox = e, this.hasRendered && A(t, !0) && this.isDirtyBox && this.redraw())
                    }, getChartSize: function () {
                        var e = this.options.chart, i = e.width, e = e.height, n = this.renderTo;
                        d(i) || (this.containerWidth = v(n, "width")), d(e) || (this.containerHeight = v(n, "height")), this.chartWidth = Math.max(0, i || this.containerWidth || 600), this.chartHeight = Math.max(0, t.relativeLength(e, this.chartWidth) || this.containerHeight || 400)
                    }, temporaryDisplay: function (e) {
                        var i = this.renderTo;
                        if (e) for (; i && i.style;) i.hcOrigStyle && (t.css(i, i.hcOrigStyle), delete i.hcOrigStyle), i.hcOrigDetached && (m.body.removeChild(i), i.hcOrigDetached = !1), i = i.parentNode; else for (; i && i.style && (m.body.contains(i) || (i.hcOrigDetached = !0, m.body.appendChild(i)), ("none" === v(i, "display", !1) || i.hcOricDetached) && (i.hcOrigStyle = {
                            display: i.style.display,
                            height: i.style.height,
                            overflow: i.style.overflow
                        }, e = {
                            display: "block",
                            overflow: "hidden"
                        }, i !== this.renderTo && (e.height = 0), t.css(i, e), i.offsetWidth || i.style.setProperty("display", "block", "important")), i = i.parentNode, i !== m.body);) ;
                    }, setClassName: function (t) {
                        this.container.className = "highcharts-container " + (t || "")
                    }, getContainer: function () {
                        var e, i, n, o = this.options, r = o.chart;
                        e = this.renderTo;
                        var l, c = t.uniqueKey();
                        e || (this.renderTo = e = r.renderTo), k(e) && (this.renderTo = e = m.getElementById(e)), e || t.error(13, !0), i = P(s(e, "data-highcharts-chart")), x(i) && h[i] && h[i].hasRendered && h[i].destroy(), s(e, "data-highcharts-chart", this.index), e.innerHTML = "", r.skipClone || e.offsetWidth || this.temporaryDisplay(), this.getChartSize(), i = this.chartWidth, n = this.chartHeight, l = u({
                            position: "relative",
                            overflow: "hidden",
                            width: i + "px",
                            height: n + "px",
                            textAlign: "left",
                            lineHeight: "normal",
                            zIndex: 0,
                            "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                        }, r.style), this.container = e = a("div", {id: c}, l, e), this._cursor = e.style.cursor, this.renderer = new (t[r.renderer] || N)(e, i, n, null, r.forExport, o.exporting && o.exporting.allowHTML), this.setClassName(r.className), this.renderer.setStyle(r.style), this.renderer.chartIndex = this.index
                    }, getMargins: function (t) {
                        var e = this.spacing, i = this.margin, n = this.titleOffset;
                        this.resetMargins(), n && !d(i[0]) && (this.plotTop = Math.max(this.plotTop, n + this.options.title.margin + e[0])), this.legend.display && this.legend.adjustMargins(i, e), this.extraMargin && (this[this.extraMargin.type] = (this[this.extraMargin.type] || 0) + this.extraMargin.value), this.extraTopMargin && (this.plotTop += this.extraTopMargin), t || this.getAxisMargins()
                    }, getAxisMargins: function () {
                        var t = this, e = t.axisOffset = [0, 0, 0, 0], i = t.margin;
                        t.hasCartesianSeries && p(t.axes, function (t) {
                            t.visible && t.getOffset()
                        }), p(M, function (n, s) {
                            d(i[s]) || (t[n] += e[s])
                        }), t.setChartSize()
                    }, reflow: function (t) {
                        var e = this, i = e.options.chart, n = e.renderTo, s = d(i.width) && d(i.height),
                            o = i.width || v(n, "width"), i = i.height || v(n, "height"), n = t ? t.target : z;
                        s || e.isPrinting || !o || !i || n !== z && n !== m || (o === e.containerWidth && i === e.containerHeight || (clearTimeout(e.reflowTimeout), e.reflowTimeout = E(function () {
                            e.container && e.setSize(void 0, void 0, !1)
                        }, t ? 100 : 0)), e.containerWidth = o, e.containerHeight = i)
                    }, initReflow: function () {
                        var t, i = this;
                        t = e(z, "resize", function (t) {
                            i.reflow(t)
                        }), e(i, "destroy", t)
                    }, setSize: function (e, s, o) {
                        var a = this, r = a.renderer;
                        a.isResizing += 1, t.setAnimation(o, a), a.oldChartHeight = a.chartHeight, a.oldChartWidth = a.chartWidth, void 0 !== e && (a.options.chart.width = e), void 0 !== s && (a.options.chart.height = s), a.getChartSize(), e = r.globalAnimation, (e ? i : c)(a.container, {
                            width: a.chartWidth + "px",
                            height: a.chartHeight + "px"
                        }, e), a.setChartSize(!0), r.setSize(a.chartWidth, a.chartHeight, o), p(a.axes, function (t) {
                            t.isDirty = !0, t.setScale()
                        }), a.isDirtyLegend = !0, a.isDirtyBox = !0, a.layOutTitles(), a.getMargins(), a.redraw(o), a.oldChartHeight = null, g(a, "resize"), E(function () {
                            a && g(a, "endResize", null, function () {
                                --a.isResizing
                            })
                        }, n(e).duration)
                    }, setChartSize: function (t) {
                        function e(t) {
                            return t = u[t] || 0, Math.max(m || t, t) / 2
                        }

                        var i, n, s, o, m, a = this.inverted, r = this.renderer, l = this.chartWidth,
                            h = this.chartHeight, c = this.options.chart, d = this.spacing, u = this.clipOffset;
                        this.plotLeft = i = Math.round(this.plotLeft), this.plotTop = n = Math.round(this.plotTop), this.plotWidth = s = Math.max(0, Math.round(l - i - this.marginRight)), this.plotHeight = o = Math.max(0, Math.round(h - n - this.marginBottom)), this.plotSizeX = a ? o : s, this.plotSizeY = a ? s : o, this.plotBorderWidth = c.plotBorderWidth || 0, this.spacingBox = r.spacingBox = {
                            x: d[3],
                            y: d[0],
                            width: l - d[3] - d[1],
                            height: h - d[0] - d[2]
                        }, this.plotBox = r.plotBox = {
                            x: i,
                            y: n,
                            width: s,
                            height: o
                        }, m = 2 * Math.floor(this.plotBorderWidth / 2), a = Math.ceil(e(3)), r = Math.ceil(e(0)), this.clipBox = {
                            x: a,
                            y: r,
                            width: Math.floor(this.plotSizeX - e(1) - a),
                            height: Math.max(0, Math.floor(this.plotSizeY - e(2) - r))
                        }, t || p(this.axes, function (t) {
                            t.setAxisSize(), t.setAxisTranslation()
                        })
                    }, resetMargins: function () {
                        var t = this, e = t.options.chart;
                        p(["margin", "spacing"], function (i) {
                            var n = e[i], s = b(n) ? n : [n, n, n, n];
                            p(["Top", "Right", "Bottom", "Left"], function (n, o) {
                                t[i][o] = A(e[i + n], s[o])
                            })
                        }), p(M, function (e, i) {
                            t[e] = A(t.margin[i], t.spacing[i])
                        }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = []
                    }, drawChartBox: function () {
                        var t, e, i = this.options.chart, n = this.renderer, s = this.chartWidth, o = this.chartHeight,
                            a = this.chartBackground, r = this.plotBackground, l = this.plotBorder,
                            h = this.plotBGImage, c = i.backgroundColor, d = i.plotBackgroundColor,
                            p = i.plotBackgroundImage, u = this.plotLeft, m = this.plotTop, f = this.plotWidth,
                            g = this.plotHeight, v = this.plotBox, y = this.clipRect, x = this.clipBox, b = "animate";
                        a || (this.chartBackground = a = n.rect().addClass("highcharts-background").add(), b = "attr"), t = i.borderWidth || 0, e = t + (i.shadow ? 8 : 0), c = {fill: c || "none"}, (t || a["stroke-width"]) && (c.stroke = i.borderColor, c["stroke-width"] = t), a.attr(c).shadow(i.shadow), a[b]({
                            x: e / 2,
                            y: e / 2,
                            width: s - e - t % 2,
                            height: o - e - t % 2,
                            r: i.borderRadius
                        }), b = "animate", r || (b = "attr", this.plotBackground = r = n.rect().addClass("highcharts-plot-background").add()), r[b](v), r.attr({fill: d || "none"}).shadow(i.plotShadow), p && (h ? h.animate(v) : this.plotBGImage = n.image(p, u, m, f, g).add()), y ? y.animate({
                            width: x.width,
                            height: x.height
                        }) : this.clipRect = n.clipRect(x), b = "animate", l || (b = "attr", this.plotBorder = l = n.rect().addClass("highcharts-plot-border").attr({zIndex: 1}).add()), l.attr({
                            stroke: i.plotBorderColor,
                            "stroke-width": i.plotBorderWidth || 0,
                            fill: "none"
                        }), l[b](l.crisp({x: u, y: m, width: f, height: g}, -l.strokeWidth())), this.isDirtyBox = !1
                    }, propFromSeries: function () {
                        var t, e, i, n = this, s = n.options.chart, o = n.options.series;
                        p(["inverted", "angular", "polar"], function (a) {
                            for (t = O[s.type || s.defaultSeriesType], i = s[a] || t && t.prototype[a], e = o && o.length; !i && e--;) (t = O[o[e].type]) && t.prototype[a] && (i = !0);
                            n[a] = i
                        })
                    }, linkSeries: function () {
                        var t = this, e = t.series;
                        p(e, function (t) {
                            t.linkedSeries.length = 0
                        }), p(e, function (e) {
                            var i = e.options.linkedTo;
                            k(i) && (i = ":previous" === i ? t.series[e.index - 1] : t.get(i)) && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = A(e.options.visible, i.options.visible, e.visible))
                        })
                    }, renderSeries: function () {
                        p(this.series, function (t) {
                            t.translate(), t.render()
                        })
                    }, renderLabels: function () {
                        var t = this, e = t.options.labels;
                        e.items && p(e.items, function (i) {
                            var n = u(e.style, i.style), s = P(n.left) + t.plotLeft, o = P(n.top) + t.plotTop + 12;
                            delete n.left, delete n.top, t.renderer.text(i.html, s, o).attr({zIndex: 2}).css(n).add()
                        })
                    }, render: function () {
                        var t, e, i, n = this.axes, s = this.renderer, o = this.options;
                        this.setTitle(), this.legend = new w(this, o.legend), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize(), o = this.plotWidth, t = this.plotHeight -= 21, p(n, function (t) {
                            t.setScale()
                        }), this.getAxisMargins(), e = 1.1 < o / this.plotWidth, i = 1.05 < t / this.plotHeight, (e || i) && (p(n, function (t) {
                            (t.horiz && e || !t.horiz && i) && t.setTickInterval(!0)
                        }), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries && p(n, function (t) {
                            t.visible && t.render()
                        }), this.seriesGroup || (this.seriesGroup = s.g("series-group").attr({zIndex: 3}).add()), this.renderSeries(), this.renderLabels(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0
                    }, addCredits: function (t) {
                        var e = this;
                        t = S(!0, this.options.credits, t), t.enabled && !this.credits && (this.credits = this.renderer.text(t.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
                            t.href && (z.location.href = t.href)
                        }).attr({
                            align: t.position.align,
                            zIndex: 8
                        }).css(t.style).add().align(t.position), this.credits.update = function (t) {
                            e.credits = e.credits.destroy(), e.addCredits(t)
                        })
                    }, destroy: function () {
                        var e, i = this, n = i.axes, s = i.series, o = i.container, a = o && o.parentNode;
                        for (g(i, "destroy"), i.renderer.forExport ? t.erase(h, i) : h[i.index] = void 0, t.chartCount--, i.renderTo.removeAttribute("data-highcharts-chart"), L(i), e = n.length; e--;) n[e] = n[e].destroy();
                        for (this.scroller && this.scroller.destroy && this.scroller.destroy(), e = s.length; e--;) s[e] = s[e].destroy();
                        p("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function (t) {
                            var e = i[t];
                            e && e.destroy && (i[t] = e.destroy())
                        }), o && (o.innerHTML = "", L(o), a && l(o)), C(i, function (t, e) {
                            delete i[e]
                        })
                    }, isReadyToRender: function () {
                        var t = this;
                        return !(!D && z == z.top && "complete" !== m.readyState) || (m.attachEvent("onreadystatechange", function () {
                            m.detachEvent("onreadystatechange", t.firstRender), "complete" === m.readyState && t.firstRender()
                        }), !1)
                    }, firstRender: function () {
                        var t = this, e = t.options;
                        t.isReadyToRender() && (t.getContainer(), g(t, "init"), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), p(e.series || [], function (e) {
                            t.initSeries(e)
                        }), t.linkSeries(), g(t, "beforeRender"), T && (t.pointer = new T(t, e)), t.render(), !t.renderer.imgCount && t.onload && t.onload(), t.temporaryDisplay(!0))
                    }, onload: function () {
                        p([this.callback].concat(this.callbacks), function (t) {
                            t && void 0 !== this.index && t.apply(this, [this])
                        }, this), g(this, "load"), g(this, "render"), d(this.index) && !1 !== this.options.chart.reflow && this.initReflow(), this.onload = null
                    }
                })
            }(t), function (t) {
                var e, i = t.each, n = t.extend, s = t.erase, m = t.fireEvent, o = t.format, a = t.isArray,
                    r = t.isNumber, l = t.pick, h = t.removeEvent;
                t.Point = e = function () {
                }, t.Point.prototype = {
                    init: function (t, e, i) {
                        return this.series = t, this.color = t.color, this.applyOptions(e, i), t.options.colorByPoint ? (e = t.options.colors || t.chart.options.colors, this.color = this.color || e[t.colorCounter], e = e.length, i = t.colorCounter, t.colorCounter++, t.colorCounter === e && (t.colorCounter = 0)) : i = t.colorIndex, this.colorIndex = l(this.colorIndex, i), t.chart.pointCount++, this
                    }, applyOptions: function (t, i) {
                        var s = this.series, o = s.options.pointValKey || s.pointValKey;
                        return t = e.prototype.optionsToObject.call(this, t), n(this, t), this.options = this.options ? n(this.options, t) : t, t.group && delete this.group, o && (this.y = this[o]), this.isNull = l(this.isValid && !this.isValid(), null === this.x || !r(this.y, !0)), this.selected && (this.state = "select"), "name" in this && void 0 === i && s.xAxis && s.xAxis.hasNames && (this.x = s.xAxis.nameToX(this)), void 0 === this.x && s && (this.x = void 0 === i ? s.autoIncrement(this) : i), this
                    }, optionsToObject: function (t) {
                        var e = {}, i = this.series, n = i.options.keys, s = n || i.pointArrayMap || ["y"],
                            o = s.length, m = 0, l = 0;
                        if (r(t) || null === t) e[s[0]] = t; else if (a(t)) for (!n && t.length > o && (i = typeof t[0], "string" === i ? e.name = t[0] : "number" === i && (e.x = t[0]), m++); l < o;) n && void 0 === t[m] || (e[s[l]] = t[m]), m++, l++; else "object" == typeof t && (e = t, t.dataLabels && (i._hasPointLabels = !0), t.marker && (i._hasPointMarkers = !0));
                        return e
                    }, getClassName: function () {
                        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                    }, getZone: function () {
                        var t, e = this.series, i = e.zones, e = e.zoneAxis || "y", n = 0;
                        for (t = i[n]; this[e] >= t.value;) t = i[++n];
                        return t && t.color && !this.options.color && (this.color = t.color), t
                    }, destroy: function () {
                        var t, e = this.series.chart, i = e.hoverPoints;
                        e.pointCount--, i && (this.setState(), s(i, this), i.length || (e.hoverPoints = null)), this === e.hoverPoint && this.onMouseOut(), (this.graphic || this.dataLabel) && (h(this), this.destroyElements()), this.legendItem && e.legend.destroyItem(this);
                        for (t in this) this[t] = null
                    }, destroyElements: function () {
                        for (var t, e = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], i = 6; i--;) t = e[i], this[t] && (this[t] = this[t].destroy())
                    }, getLabelConfig: function () {
                        return {
                            x: this.category,
                            y: this.y,
                            color: this.color,
                            colorIndex: this.colorIndex,
                            key: this.name || this.category,
                            series: this.series,
                            point: this,
                            percentage: this.percentage,
                            total: this.total || this.stackTotal
                        }
                    }, tooltipFormatter: function (t) {
                        var e = this.series, n = e.tooltipOptions, s = l(n.valueDecimals, ""), a = n.valuePrefix || "",
                            r = n.valueSuffix || "";
                        return i(e.pointArrayMap || ["y"], function (e) {
                            e = "{point." + e, (a || r) && (t = t.replace(e + "}", a + e + "}" + r)), t = t.replace(e + "}", e + ":,." + s + "f}")
                        }), o(t, {point: this, series: this.series})
                    }, firePointEvent: function (t, e, i) {
                        var n = this, s = this.series.options;
                        (s.point.events[t] || n.options && n.options.events && n.options.events[t]) && this.importEvents(), "click" === t && s.allowPointSelect && (i = function (t) {
                            n.select && n.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                        }), m(this, t, e, i)
                    }, visible: !0
                }
            }(t), function (t) {
                var e = t.addEvent, i = t.animObject, n = t.arrayMax, s = t.arrayMin, m = t.correctFloat, o = t.Date,
                    a = t.defaultOptions, r = t.defaultPlotOptions, l = t.defined, h = t.each, c = t.erase,
                    d = t.extend, p = t.fireEvent, u = t.grep, f = t.isArray, g = t.isNumber, v = t.isString,
                    y = t.merge, x = t.objectEach, b = t.pick, k = t.removeEvent, w = t.splat, M = t.SVGElement,
                    S = t.syncTimeout, C = t.win;
                t.Series = t.seriesType("line", null, {
                    lineWidth: 2,
                    allowPointSelect: !1,
                    showCheckbox: !1,
                    animation: {duration: 1e3},
                    events: {},
                    marker: {
                        lineWidth: 0,
                        lineColor: "#ffffff",
                        radius: 4,
                        states: {
                            hover: {animation: {duration: 50}, enabled: !0, radiusPlus: 2, lineWidthPlus: 1},
                            select: {fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2}
                        }
                    },
                    point: {events: {}},
                    dataLabels: {
                        align: "center",
                        formatter: function () {
                            return null === this.y ? "" : t.numberFormat(this.y, -1)
                        },
                        style: {fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast"},
                        verticalAlign: "bottom",
                        x: 0,
                        y: 0,
                        padding: 5
                    },
                    cropThreshold: 300,
                    pointRange: 0,
                    softThreshold: !0,
                    states: {
                        hover: {
                            animation: {duration: 50},
                            lineWidthPlus: 1,
                            marker: {},
                            halo: {size: 10, opacity: .25}
                        }, select: {marker: {}}
                    },
                    stickyTracking: !0,
                    turboThreshold: 1e3,
                    findNearestPointBy: "x"
                }, {
                    isCartesian: !0,
                    pointClass: t.Point,
                    sorted: !0,
                    requireSorting: !0,
                    directTouch: !1,
                    axisTypes: ["xAxis", "yAxis"],
                    colorCounter: 0,
                    parallelArrays: ["x", "y"],
                    coll: "series",
                    init: function (t, i) {
                        var n, s, o = this, a = t.series;
                        o.chart = t, o.options = i = o.setOptions(i), o.linkedSeries = [], o.bindAxes(), d(o, {
                            name: i.name,
                            state: "",
                            visible: !1 !== i.visible,
                            selected: !0 === i.selected
                        }), n = i.events, x(n, function (t, i) {
                            e(o, i, t)
                        }), (n && n.click || i.point && i.point.events && i.point.events.click || i.allowPointSelect) && (t.runTrackerClick = !0), o.getColor(), o.getSymbol(), h(o.parallelArrays, function (t) {
                            o[t + "Data"] = []
                        }), o.setData(i.data, !1), o.isCartesian && (t.hasCartesianSeries = !0), a.length && (s = a[a.length - 1]), o._i = b(s && s._i, -1) + 1, t.orderSeries(this.insert(a))
                    },
                    insert: function (t) {
                        var e, i = this.options.index;
                        if (g(i)) {
                            for (e = t.length; e--;) if (i >= b(t[e].options.index, t[e]._i)) {
                                t.splice(e + 1, 0, this);
                                break
                            }
                            -1 === e && t.unshift(this), e += 1
                        } else t.push(this);
                        return b(e, t.length - 1)
                    },
                    bindAxes: function () {
                        var e, i = this, n = i.options, s = i.chart;
                        h(i.axisTypes || [], function (o) {
                            h(s[o], function (t) {
                                e = t.options, (n[o] === e.index || void 0 !== n[o] && n[o] === e.id || void 0 === n[o] && 0 === e.index) && (i.insert(t.series), i[o] = t, t.isDirty = !0)
                            }), i[o] || i.optionalAxis === o || t.error(18, !0)
                        })
                    },
                    updateParallelArrays: function (t, e) {
                        var i = t.series, n = arguments, s = g(e) ? function (n) {
                            var s = "y" === n && i.toYData ? i.toYData(t) : t[n];
                            i[n + "Data"][e] = s
                        } : function (t) {
                            Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(n, 2))
                        };
                        h(i.parallelArrays, s)
                    },
                    autoIncrement: function () {
                        var t, e = this.options, i = this.xIncrement, n = e.pointIntervalUnit,
                            i = b(i, e.pointStart, 0);
                        return this.pointInterval = t = b(this.pointInterval, e.pointInterval, 1), n && (e = new o(i), "day" === n ? e = +e[o.hcSetDate](e[o.hcGetDate]() + t) : "month" === n ? e = +e[o.hcSetMonth](e[o.hcGetMonth]() + t) : "year" === n && (e = +e[o.hcSetFullYear](e[o.hcGetFullYear]() + t)), t = e - i), this.xIncrement = i + t, i
                    },
                    setOptions: function (t) {
                        var e = this.chart, i = e.options, n = i.plotOptions,
                            s = (e.userOptions || {}).plotOptions || {}, o = n[this.type];
                        return this.userOptions = t, e = y(o, n.series, t), this.tooltipOptions = y(a.tooltip, a.plotOptions.series && a.plotOptions.series.tooltip, a.plotOptions[this.type].tooltip, i.tooltip.userOptions, n.series && n.series.tooltip, n[this.type].tooltip, t.tooltip), this.stickyTracking = b(t.stickyTracking, s[this.type] && s[this.type].stickyTracking, s.series && s.series.stickyTracking, !(!this.tooltipOptions.shared || this.noSharedTooltip) || e.stickyTracking), null === o.marker && delete e.marker, this.zoneAxis = e.zoneAxis, t = this.zones = (e.zones || []).slice(), !e.negativeColor && !e.negativeFillColor || e.zones || t.push({
                            value: e[this.zoneAxis + "Threshold"] || e.threshold || 0,
                            className: "highcharts-negative",
                            color: e.negativeColor,
                            fillColor: e.negativeFillColor
                        }), t.length && l(t[t.length - 1].value) && t.push({
                            color: this.color,
                            fillColor: this.fillColor
                        }), e
                    },
                    getCyclic: function (t, e, i) {
                        var n, s = this.chart, o = this.userOptions, a = t + "Index", r = t + "Counter",
                            h = i ? i.length : b(s.options.chart[t + "Count"], s[t + "Count"]);
                        e || (n = b(o[a], o["_" + a]), l(n) || (s.series.length || (s[r] = 0), o["_" + a] = n = s[r] % h, s[r] += 1), i && (e = i[n])), void 0 !== n && (this[a] = n), this[t] = e
                    },
                    getColor: function () {
                        this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || r[this.type].color, this.chart.options.colors)
                    },
                    getSymbol: function () {
                        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
                    },
                    drawLegendSymbol: t.LegendSymbolMixin.drawLineMarker,
                    setData: function (e, i, n, s) {
                        var o, a = this, r = a.points, l = r && r.length || 0, c = a.options, d = a.chart, p = null,
                            m = a.xAxis, u = c.turboThreshold, y = this.xData, x = this.yData,
                            k = (o = a.pointArrayMap) && o.length;
                        if (e = e || [], o = e.length,
                                i = b(i, !0), !1 !== s && o && l === o && !a.cropped && !a.hasGroupedData && a.visible) h(e, function (t, e) {
                            r[e].update && t !== c.data[e] && r[e].update(t, !1, null, !1)
                        }); else {
                            if (a.xIncrement = null, a.colorCounter = 0, h(this.parallelArrays, function (t) {
                                    a[t + "Data"].length = 0
                                }), u && o > u) {
                                for (n = 0; null === p && n < o;) p = e[n], n++;
                                if (g(p)) for (n = 0; n < o; n++) y[n] = this.autoIncrement(), x[n] = e[n]; else if (f(p)) if (k) for (n = 0; n < o; n++) p = e[n], y[n] = p[0], x[n] = p.slice(1, k + 1); else for (n = 0; n < o; n++) p = e[n], y[n] = p[0], x[n] = p[1]; else t.error(12)
                            } else for (n = 0; n < o; n++) void 0 !== e[n] && (p = {series: a}, a.pointClass.prototype.applyOptions.apply(p, [e[n]]), a.updateParallelArrays(p, n));
                            for (v(x[0]) && t.error(14, !0), a.data = [], a.options.data = a.userOptions.data = e, n = l; n--;) r[n] && r[n].destroy && r[n].destroy();
                            m && (m.minRange = m.userMinRange), a.isDirty = d.isDirtyBox = !0, a.isDirtyData = !!r, n = !1
                        }
                        "point" === c.legendType && (this.processData(), this.generatePoints()), i && d.redraw(n)
                    },
                    processData: function (e) {
                        var i, n = this.xData, s = this.yData, o = n.length;
                        i = 0;
                        var a, r, l, h = this.xAxis, c = this.options;
                        l = c.cropThreshold;
                        var d, p, u = this.getExtremesFromAll || c.getExtremesFromAll, f = this.isCartesian,
                            c = h && h.val2lin, m = h && h.isLog;
                        if (f && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !e) return !1;
                        for (h && (e = h.getExtremes(), d = e.min, p = e.max), f && this.sorted && !u && (!l || o > l || this.forceCrop) && (n[o - 1] < d || n[0] > p ? (n = [], s = []) : (n[0] < d || n[o - 1] > p) && (i = this.cropData(this.xData, this.yData, d, p), n = i.xData, s = i.yData, i = i.start, a = !0)), l = n.length || 1; --l;) o = m ? c(n[l]) - c(n[l - 1]) : n[l] - n[l - 1], 0 < o && (void 0 === r || o < r) ? r = o : 0 > o && this.requireSorting && t.error(15);
                        this.cropped = a, this.cropStart = i, this.processedXData = n, this.processedYData = s, this.closestPointRange = r
                    },
                    cropData: function (t, e, i, n) {
                        var s, o = t.length, a = 0, r = o, l = b(this.cropShoulder, 1);
                        for (s = 0; s < o; s++) if (t[s] >= i) {
                            a = Math.max(0, s - l);
                            break
                        }
                        for (i = s; i < o; i++) if (t[i] > n) {
                            r = i + l;
                            break
                        }
                        return {xData: t.slice(a, r), yData: e.slice(a, r), start: a, end: r}
                    },
                    generatePoints: function () {
                        var t, e, m, i, n = this.options, s = n.data, o = this.data, a = this.processedXData,
                            r = this.processedYData, l = this.pointClass, h = a.length, c = this.cropStart || 0,
                            d = this.hasGroupedData, n = n.keys, p = [];
                        for (o || d || (o = [], o.length = s.length, o = this.data = o), n && d && (this.options.keys = !1), i = 0; i < h; i++) e = c + i, d ? (m = (new l).init(this, [a[i]].concat(w(r[i]))), m.dataGroup = this.groupMap[i]) : (m = o[e]) || void 0 === s[e] || (o[e] = m = (new l).init(this, s[e], a[i])), m && (m.index = e, p[i] = m);
                        if (this.options.keys = n, o && (h !== (t = o.length) || d)) for (i = 0; i < t; i++) i !== c || d || (i += h), o[i] && (o[i].destroyElements(), o[i].plotX = void 0);
                        this.data = o, this.points = p
                    },
                    getExtremes: function (t) {
                        var e, i = this.yAxis, o = this.processedXData, a = [], r = 0;
                        e = this.xAxis.getExtremes();
                        var l, h, c, d, p = e.min, u = e.max;
                        for (t = t || this.stackedYData || this.processedYData || [], e = t.length, d = 0; d < e; d++) if (h = o[d], c = t[d], l = (g(c, !0) || f(c)) && (!i.positiveValuesOnly || c.length || 0 < c), h = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (o[d] || h) >= p && (o[d] || h) <= u, l && h) if (l = c.length) for (; l--;) null !== c[l] && (a[r++] = c[l]); else a[r++] = c;
                        this.dataMin = s(a), this.dataMax = n(a)
                    },
                    translate: function () {
                        this.processedXData || this.processData(), this.generatePoints();
                        var t, e, i, n, s = this.options, o = s.stacking, a = this.xAxis, r = a.categories,
                            h = this.yAxis, c = this.points, d = c.length, p = !!this.modifyValue, u = s.pointPlacement,
                            f = "between" === u || g(u), v = s.threshold, y = s.startFromThreshold ? v : 0,
                            x = Number.MAX_VALUE;
                        for ("between" === u && (u = .5), g(u) && (u *= b(s.pointRange || a.pointRange)), s = 0; s < d; s++) {
                            var k = c[s], w = k.x, M = k.y;
                            e = k.low;
                            var S, C = o && h.stacks[(this.negStacks && M < (y ? 0 : v) ? "-" : "") + this.stackKey];
                            h.positiveValuesOnly && null !== M && 0 >= M && (k.isNull = !0), k.plotX = t = m(Math.min(Math.max(-1e5, a.translate(w, 0, 0, 0, 1, u, "flags" === this.type)), 1e5)), o && this.visible && !k.isNull && C && C[w] && (n = this.getStackIndicator(n, w, this.index), S = C[w], M = S.points[n.key], e = M[0], M = M[1], e === y && n.key === C[w].base && (e = b(v, h.min)), h.positiveValuesOnly && 0 >= e && (e = null), k.total = k.stackTotal = S.total, k.percentage = S.total && k.y / S.total * 100, k.stackY = M, S.setOffset(this.pointXOffset || 0, this.barW || 0)), k.yBottom = l(e) ? h.translate(e, 0, 1, 0, 1) : null, p && (M = this.modifyValue(M, k)), k.plotY = e = "number" == typeof M && 1 / 0 !== M ? Math.min(Math.max(-1e5, h.translate(M, 0, 1, 0, 1)), 1e5) : void 0, k.isInside = void 0 !== e && 0 <= e && e <= h.len && 0 <= t && t <= a.len, k.clientX = f ? m(a.translate(w, 0, 0, 0, 1, u)) : t, k.negative = k.y < (v || 0), k.category = r && void 0 !== r[k.x] ? r[k.x] : k.x, k.isNull || (void 0 !== i && (x = Math.min(x, Math.abs(t - i))), i = t), k.zone = this.zones.length && k.getZone()
                        }
                        this.closestPointRangePx = x
                    },
                    getValidPoints: function (t, e) {
                        var i = this.chart;
                        return u(t || this.points || [], function (t) {
                            return !(e && !i.isInsidePlot(t.plotX, t.plotY, i.inverted)) && !t.isNull
                        })
                    },
                    setClip: function (t) {
                        var e = this.chart, i = this.options, n = e.renderer, s = e.inverted, o = this.clipBox,
                            a = o || e.clipBox,
                            r = this.sharedClipKey || ["_sharedClip", t && t.duration, t && t.easing, a.height, i.xAxis, i.yAxis].join(),
                            l = e[r], h = e[r + "m"];
                        l || (t && (a.width = 0, e[r + "m"] = h = n.clipRect(-99, s ? -e.plotLeft : -e.plotTop, 99, s ? e.chartWidth : e.chartHeight)), e[r] = l = n.clipRect(a), l.count = {length: 0}), t && !l.count[this.index] && (l.count[this.index] = !0, l.count.length += 1), !1 !== i.clip && (this.group.clip(t || o ? l : e.clipRect), this.markerGroup.clip(h), this.sharedClipKey = r), t || (l.count[this.index] && (delete l.count[this.index], --l.count.length), 0 === l.count.length && r && e[r] && (o || (e[r] = e[r].destroy()), e[r + "m"] && (e[r + "m"] = e[r + "m"].destroy())))
                    },
                    animate: function (t) {
                        var e, n = this.chart, s = i(this.options.animation);
                        t ? this.setClip(s) : (e = this.sharedClipKey, (t = n[e]) && t.animate({width: n.plotSizeX}, s), n[e + "m"] && n[e + "m"].animate({width: n.plotSizeX + 99}, s), this.animate = null)
                    },
                    afterAnimate: function () {
                        this.setClip(), p(this, "afterAnimate"), this.finishedAnimating = !0
                    },
                    drawPoints: function () {
                        var t, e, i, n, s, o, a, r, l = this.points, h = this.chart, c = this.options.marker,
                            m = this[this.specialGroup] || this.markerGroup,
                            d = b(c.enabled, !!this.xAxis.isRadial || null, this.closestPointRangePx >= 2 * c.radius);
                        if (!1 !== c.enabled || this._hasPointMarkers) for (e = 0; e < l.length; e++) i = l[e], t = i.plotY, n = i.graphic, s = i.marker || {}, o = !!i.marker, a = d && void 0 === s.enabled || s.enabled, r = i.isInside, a && g(t) && null !== i.y ? (t = b(s.symbol, this.symbol), i.hasImage = 0 === t.indexOf("url"), a = this.markerAttribs(i, i.selected && "select"), n ? n[r ? "show" : "hide"](!0).animate(a) : r && (0 < a.width || i.hasImage) && (i.graphic = n = h.renderer.symbol(t, a.x, a.y, a.width, a.height, o ? s : c).add(m)), n && n.attr(this.pointAttribs(i, i.selected && "select")), n && n.addClass(i.getClassName(), !0)) : n && (i.graphic = n.destroy())
                    },
                    markerAttribs: function (t, e) {
                        var i = this.options.marker, n = t.marker || {}, s = b(n.radius, i.radius);
                        return e && (i = i.states[e], e = n.states && n.states[e], s = b(e && e.radius, i && i.radius, s + (i && i.radiusPlus || 0))), t.hasImage && (s = 0), t = {
                            x: Math.floor(t.plotX) - s,
                            y: t.plotY - s
                        }, s && (t.width = t.height = 2 * s), t
                    },
                    pointAttribs: function (t, e) {
                        var i = this.options.marker, n = t && t.options, s = n && n.marker || {}, o = this.color,
                            a = n && n.color, r = t && t.color, n = b(s.lineWidth, i.lineWidth);
                        return t = t && t.zone && t.zone.color, o = a || t || r || o, t = s.fillColor || i.fillColor || o, o = s.lineColor || i.lineColor || o, e && (i = i.states[e], e = s.states && s.states[e] || {}, n = b(e.lineWidth, i.lineWidth, n + b(e.lineWidthPlus, i.lineWidthPlus, 0)), t = e.fillColor || i.fillColor || t, o = e.lineColor || i.lineColor || o), {
                            stroke: o,
                            "stroke-width": n,
                            fill: t
                        }
                    },
                    destroy: function () {
                        var t, e, i, n, s = this, o = s.chart, a = /AppleWebKit\/533/.test(C.navigator.userAgent),
                            r = s.data || [];
                        for (p(s, "destroy"), k(s), h(s.axisTypes || [], function (t) {
                            (n = s[t]) && n.series && (c(n.series, s), n.isDirty = n.forceRedraw = !0)
                        }), s.legendItem && s.chart.legend.destroyItem(s), e = r.length; e--;) (i = r[e]) && i.destroy && i.destroy();
                        s.points = null, clearTimeout(s.animationTimeout), x(s, function (e, i) {
                            e instanceof M && !e.survive && (t = a && "group" === i ? "hide" : "destroy", e[t]())
                        }), o.hoverSeries === s && (o.hoverSeries = null), c(o.series, s), o.orderSeries(), x(s, function (t, e) {
                            delete s[e]
                        })
                    },
                    getGraphPath: function (t, e, i) {
                        var n, s, o = this, a = o.options, r = a.step, c = [], d = [];
                        return t = t || o.points, (n = t.reversed) && t.reverse(), (r = {
                            right: 1,
                            center: 2
                        }[r] || r && 3) && n && (r = 4 - r), !a.connectNulls || e || i || (t = this.getValidPoints(t)), h(t, function (n, h) {
                            var p = n.plotX, u = n.plotY, m = t[h - 1];
                            (n.leftCliff || m && m.rightCliff) && !i && (s = !0), n.isNull && !l(e) && 0 < h ? s = !a.connectNulls : n.isNull && !e ? s = !0 : (0 === h || s ? h = ["M", n.plotX, n.plotY] : o.getPointSpline ? h = o.getPointSpline(t, n, h) : r ? (h = 1 === r ? ["L", m.plotX, u] : 2 === r ? ["L", (m.plotX + p) / 2, m.plotY, "L", (m.plotX + p) / 2, u] : ["L", p, m.plotY], h.push("L", p, u)) : h = ["L", p, u], d.push(n.x), r && d.push(n.x), c.push.apply(c, h), s = !1)
                        }), c.xMap = d, o.graphPath = c
                    },
                    drawGraph: function () {
                        var t = this, e = this.options, i = (this.gappedPath || this.getGraphPath).call(this),
                            n = [["graph", "highcharts-graph", e.lineColor || this.color, e.dashStyle]];
                        h(this.zones, function (i, s) {
                            n.push(["zone-graph-" + s, "highcharts-graph highcharts-zone-graph-" + s + " " + (i.className || ""), i.color || t.color, i.dashStyle || e.dashStyle])
                        }), h(n, function (n, s) {
                            var o = n[0], a = t[o];
                            a ? (a.endX = i.xMap, a.animate({d: i})) : i.length && (t[o] = t.chart.renderer.path(i).addClass(n[1]).attr({zIndex: 1}).add(t.group), a = {
                                stroke: n[2],
                                "stroke-width": e.lineWidth,
                                fill: t.fillGraph && t.color || "none"
                            }, n[3] ? a.dashstyle = n[3] : "square" !== e.linecap && (a["stroke-linecap"] = a["stroke-linejoin"] = "round"), a = t[o].attr(a).shadow(2 > s && e.shadow)), a && (a.startX = i.xMap, a.isArea = i.isArea)
                        })
                    },
                    applyZones: function () {
                        var t, e, i, n, s, o, a, r, l, c = this, d = this.chart, p = d.renderer, u = this.zones,
                            f = this.clips || [], g = this.graph, v = this.area,
                            y = Math.max(d.chartWidth, d.chartHeight), m = this[(this.zoneAxis || "y") + "Axis"],
                            x = d.inverted, k = !1;
                        u.length && (g || v) && m && void 0 !== m.min && (s = m.reversed, o = m.horiz, g && g.hide(), v && v.hide(), n = m.getExtremes(), h(u, function (h, u) {
                            t = s ? o ? d.plotWidth : 0 : o ? 0 : m.toPixels(n.min), t = Math.min(Math.max(b(e, t), 0), y), e = Math.min(Math.max(Math.round(m.toPixels(b(h.value, n.max), !0)), 0), y), k && (t = e = m.toPixels(n.max)), a = Math.abs(t - e), r = Math.min(t, e), l = Math.max(t, e), m.isXAxis ? (i = {
                                x: x ? l : r,
                                y: 0,
                                width: a,
                                height: y
                            }, o || (i.x = d.plotHeight - i.x)) : (i = {
                                x: 0,
                                y: x ? l : r,
                                width: y,
                                height: a
                            }, o && (i.y = d.plotWidth - i.y)), x && p.isVML && (i = m.isXAxis ? {
                                x: 0,
                                y: s ? r : l,
                                height: i.width,
                                width: d.chartWidth
                            } : {
                                x: i.y - d.plotLeft - d.spacingBox.x,
                                y: 0,
                                width: i.height,
                                height: d.chartHeight
                            }), f[u] ? f[u].animate(i) : (f[u] = p.clipRect(i), g && c["zone-graph-" + u].clip(f[u]), v && c["zone-area-" + u].clip(f[u])), k = h.value > n.max
                        }), this.clips = f)
                    },
                    invertGroups: function (t) {
                        function i() {
                            h(["group", "markerGroup"], function (e) {
                                s[e] && (o.renderer.isVML && s[e].attr({
                                    width: s.yAxis.len,
                                    height: s.xAxis.len
                                }), s[e].width = s.yAxis.len, s[e].height = s.xAxis.len, s[e].invert(t))
                            })
                        }

                        var n, s = this, o = s.chart;
                        s.xAxis && (n = e(o, "resize", i), e(s, "destroy", n), i(t), s.invertGroups = i)
                    },
                    plotGroup: function (t, e, i, n, s) {
                        var o = this[t], a = !o;
                        return a && (this[t] = o = this.chart.renderer.g().attr({zIndex: n || .1}).add(s)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series highcharts-color-" + this.colorIndex + " " + (this.options.className || ""), !0), o.attr({visibility: i})[a ? "attr" : "animate"](this.getPlotBox()), o
                    },
                    getPlotBox: function () {
                        var t = this.chart, e = this.xAxis, i = this.yAxis;
                        return t.inverted && (e = i, i = this.xAxis), {
                            translateX: e ? e.left : t.plotLeft,
                            translateY: i ? i.top : t.plotTop,
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    render: function () {
                        var t, e = this, n = e.chart, s = e.options,
                            o = !!e.animate && n.renderer.isSVG && i(s.animation).duration,
                            a = e.visible ? "inherit" : "hidden", r = s.zIndex, l = e.hasRendered, h = n.seriesGroup,
                            c = n.inverted;
                        t = e.plotGroup("group", "series", a, r, h), e.markerGroup = e.plotGroup("markerGroup", "markers", a, r, h), o && e.animate(!0), t.inverted = !!e.isCartesian && c, e.drawGraph && (e.drawGraph(), e.applyZones()), e.drawDataLabels && e.drawDataLabels(), e.visible && e.drawPoints(), e.drawTracker && !1 !== e.options.enableMouseTracking && e.drawTracker(), e.invertGroups(c), !1 === s.clip || e.sharedClipKey || l || t.clip(n.clipRect), o && e.animate(), l || (e.animationTimeout = S(function () {
                            e.afterAnimate()
                        }, o)), e.isDirty = !1, e.hasRendered = !0
                    },
                    redraw: function () {
                        var t = this.chart, e = this.isDirty || this.isDirtyData, i = this.group, n = this.xAxis,
                            s = this.yAxis;
                        i && (t.inverted && i.attr({
                            width: t.plotWidth,
                            height: t.plotHeight
                        }), i.animate({
                            translateX: b(n && n.left, t.plotLeft),
                            translateY: b(s && s.top, t.plotTop)
                        })), this.translate(), this.render(), e && delete this.kdTree
                    },
                    kdAxisArray: ["clientX", "plotY"],
                    searchPoint: function (t, e) {
                        var i = this.xAxis, n = this.yAxis, s = this.chart.inverted;
                        return this.searchKDTree({
                            clientX: s ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                            plotY: s ? n.len - t.chartX + n.pos : t.chartY - n.pos
                        }, e)
                    },
                    buildKDTree: function () {
                        function t(i, n, s) {
                            var o, a;
                            if (a = i && i.length) return o = e.kdAxisArray[n % s], i.sort(function (t, e) {
                                return t[o] - e[o]
                            }), a = Math.floor(a / 2), {
                                point: i[a],
                                left: t(i.slice(0, a), n + 1, s),
                                right: t(i.slice(a + 1), n + 1, s)
                            }
                        }

                        this.buildingKdTree = !0;
                        var e = this, i = -1 < e.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                        delete e.kdTree, S(function () {
                            e.kdTree = t(e.getValidPoints(null, !e.directTouch), i, i), e.buildingKdTree = !1
                        }, e.options.kdNow ? 0 : 1)
                    },
                    searchKDTree: function (t, e) {
                        function i(t, e, r, h) {
                            var c, d, p = e.point, u = n.kdAxisArray[r % h], m = p;
                            return d = l(t[s]) && l(p[s]) ? Math.pow(t[s] - p[s], 2) : null, c = l(t[o]) && l(p[o]) ? Math.pow(t[o] - p[o], 2) : null, c = (d || 0) + (c || 0), p.dist = l(c) ? Math.sqrt(c) : Number.MAX_VALUE, p.distX = l(d) ? Math.sqrt(d) : Number.MAX_VALUE, u = t[u] - p[u], c = 0 > u ? "left" : "right", d = 0 > u ? "right" : "left", e[c] && (c = i(t, e[c], r + 1, h), m = c[a] < m[a] ? c : p), e[d] && Math.sqrt(u * u) < m[a] && (t = i(t, e[d], r + 1, h), m = t[a] < m[a] ? t : m), m
                        }

                        var n = this, s = this.kdAxisArray[0], o = this.kdAxisArray[1], a = e ? "distX" : "dist";
                        if (e = -1 < n.options.findNearestPointBy.indexOf("y") ? 2 : 1, this.kdTree || this.buildingKdTree || this.buildKDTree(), this.kdTree) return i(t, this.kdTree, e, e)
                    }
                })
            }(t), function (t) {
                var e = t.Axis, i = t.Chart, n = t.correctFloat, s = t.defined, m = t.destroyObjectProperties,
                    o = t.each, a = t.format, r = t.objectEach, l = t.pick, h = t.Series;
                t.StackItem = function (t, e, i, n, s) {
                    var o = t.chart.inverted;
                    this.axis = t, this.isNegative = i, this.options = e, this.x = n, this.total = null, this.points = {}, this.stack = s, this.rightCliff = this.leftCliff = 0, this.alignOptions = {
                        align: e.align || (o ? i ? "left" : "right" : "center"),
                        verticalAlign: e.verticalAlign || (o ? "middle" : i ? "bottom" : "top"),
                        y: l(e.y, o ? 4 : i ? 14 : -6),
                        x: l(e.x, o ? i ? -6 : 6 : 0)
                    }, this.textAlign = e.textAlign || (o ? i ? "right" : "left" : "center")
                }, t.StackItem.prototype = {
                    destroy: function () {
                        m(this, this.axis)
                    }, render: function (t) {
                        var e = this.options, i = e.format, i = i ? a(i, this) : e.formatter.call(this);
                        this.label ? this.label.attr({
                            text: i,
                            visibility: "hidden"
                        }) : this.label = this.axis.chart.renderer.text(i, null, null, e.useHTML).css(e.style).attr({
                            align: this.textAlign,
                            rotation: e.rotation,
                            visibility: "hidden"
                        }).add(t)
                    }, setOffset: function (t, e) {
                        var i = this.axis, n = i.chart, s = i.translate(i.usePercentage ? 100 : this.total, 0, 0, 0, 1),
                            i = i.translate(0), i = Math.abs(s - i);
                        t = n.xAxis[0].translate(this.x) + t, s = this.getStackBox(n, this, t, s, e, i), (e = this.label) && (e.align(this.alignOptions, null, s), s = e.alignAttr, e[!1 === this.options.crop || n.isInsidePlot(s.x, s.y) ? "show" : "hide"](!0))
                    }, getStackBox: function (t, e, i, n, s, o) {
                        var a = e.axis.reversed, r = t.inverted;
                        return t = t.plotHeight, e = e.isNegative && !a || !e.isNegative && a, {
                            x: r ? e ? n : n - o : i,
                            y: r ? t - i - s : e ? t - n - o : t - n,
                            width: r ? o : s,
                            height: r ? s : o
                        }
                    }
                }, i.prototype.getStacks = function () {
                    var t = this;
                    o(t.yAxis, function (t) {
                        t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
                    }), o(t.series, function (e) {
                        !e.options.stacking || !0 !== e.visible && !1 !== t.options.chart.ignoreHiddenSeries || (e.stackKey = e.type + l(e.options.stack, ""))
                    })
                }, e.prototype.buildStacks = function () {
                    var t, e = this.series, i = l(this.options.reversedStacks, !0), n = e.length;
                    if (!this.isXAxis) {
                        for (this.usePercentage = !1, t = n; t--;) e[i ? t : n - t - 1].setStackedPoints();
                        if (this.usePercentage) for (t = 0; t < n; t++) e[t].setPercentStacks()
                    }
                }, e.prototype.renderStackTotals = function () {
                    var t = this.chart, e = t.renderer, i = this.stacks, n = this.stackTotalGroup;
                    n || (this.stackTotalGroup = n = e.g("stack-labels").attr({
                        visibility: "visible",
                        zIndex: 6
                    }).add()), n.translate(t.plotLeft, t.plotTop), r(i, function (t) {
                        r(t, function (t) {
                            t.render(n)
                        })
                    })
                }, e.prototype.resetStacks = function () {
                    var t = this, e = t.stacks;
                    t.isXAxis || r(e, function (e) {
                        r(e, function (i, n) {
                            i.touched < t.stacksTouched ? (i.destroy(), delete e[n]) : (i.total = null, i.cum = null)
                        })
                    })
                }, e.prototype.cleanStacks = function () {
                    var t;
                    this.isXAxis || (this.oldStacks && (t = this.stacks = this.oldStacks), r(t, function (t) {
                        r(t, function (t) {
                            t.cum = t.total
                        })
                    }))
                }, h.prototype.setStackedPoints = function () {
                    if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                        var e, i, o, a, r, h, c, d = this.processedXData, p = this.processedYData, u = [], f = p.length,
                            g = this.options, v = g.threshold, m = g.startFromThreshold ? v : 0, y = g.stack,
                            g = g.stacking, x = this.stackKey, b = "-" + x, k = this.negStacks, w = this.yAxis,
                            M = w.stacks, S = w.oldStacks;
                        for (w.stacksTouched += 1, r = 0; r < f; r++) h = d[r], c = p[r], e = this.getStackIndicator(e, h, this.index), a = e.key, o = (i = k && c < (m ? 0 : v)) ? b : x, M[o] || (M[o] = {}), M[o][h] || (S[o] && S[o][h] ? (M[o][h] = S[o][h], M[o][h].total = null) : M[o][h] = new t.StackItem(w, w.options.stackLabels, i, h, y)), o = M[o][h], null !== c && (o.points[a] = o.points[this.index] = [l(o.cum, m)], s(o.cum) || (o.base = a), o.touched = w.stacksTouched, 0 < e.index && !1 === this.singleStacks && (o.points[a][0] = o.points[this.index + "," + h + ",0"][0])), "percent" === g ? (i = i ? x : b, k && M[i] && M[i][h] ? (i = M[i][h], o.total = i.total = Math.max(i.total, o.total) + Math.abs(c) || 0) : o.total = n(o.total + (Math.abs(c) || 0))) : o.total = n(o.total + (c || 0)), o.cum = l(o.cum, m) + (c || 0), null !== c && (o.points[a].push(o.cum), u[r] = o.cum);
                        "percent" === g && (w.usePercentage = !0), this.stackedYData = u, w.oldStacks = {}
                    }
                }, h.prototype.setPercentStacks = function () {
                    var t, e = this, i = e.stackKey, s = e.yAxis.stacks, a = e.processedXData;
                    o([i, "-" + i], function (i) {
                        for (var o, r, l = a.length; l--;) o = a[l], t = e.getStackIndicator(t, o, e.index, i), (o = (r = s[i] && s[i][o]) && r.points[t.key]) && (r = r.total ? 100 / r.total : 0, o[0] = n(o[0] * r), o[1] = n(o[1] * r), e.stackedYData[l] = o[1])
                    })
                }, h.prototype.getStackIndicator = function (t, e, i, n) {
                    return !s(t) || t.x !== e || n && t.key !== n ? t = {
                        x: e,
                        index: 0,
                        key: n
                    } : t.index++, t.key = [i, e, t.index].join(), t
                }
            }(t), function (t) {
                var e = t.addEvent, i = t.animate, n = t.Axis, s = t.createElement, m = t.css, o = t.defined,
                    a = t.each, r = t.erase, l = t.extend, h = t.fireEvent, c = t.inArray, d = t.isNumber,
                    p = t.isObject, u = t.isArray, f = t.merge, g = t.objectEach, v = t.pick, y = t.Point, x = t.Series,
                    b = t.seriesTypes, k = t.setAnimation, w = t.splat;
                l(t.Chart.prototype, {
                    addSeries: function (t, e, i) {
                        var n, s = this;
                        return t && (e = v(e, !0), h(s, "addSeries", {options: t}, function () {
                            n = s.initSeries(t), s.isDirtyLegend = !0, s.linkSeries(), e && s.redraw(i)
                        })), n
                    },
                    addAxis: function (t, e, i, s) {
                        var o = e ? "xAxis" : "yAxis", a = this.options;
                        return t = f(t, {
                            index: this[o].length,
                            isX: e
                        }), e = new n(this, t), a[o] = w(a[o] || {}), a[o].push(t), v(i, !0) && this.redraw(s), e
                    },
                    showLoading: function (t) {
                        var n = this, o = n.options, a = n.loadingDiv, r = o.loading, h = function () {
                            a && m(a, {
                                left: n.plotLeft + "px",
                                top: n.plotTop + "px",
                                width: n.plotWidth + "px",
                                height: n.plotHeight + "px"
                            })
                        };
                        a || (n.loadingDiv = a = s("div", {className: "highcharts-loading highcharts-loading-hidden"}, null, n.container), n.loadingSpan = s("span", {className: "highcharts-loading-inner"}, null, a), e(n, "redraw", h)), a.className = "highcharts-loading", n.loadingSpan.innerHTML = t || o.lang.loading, m(a, l(r.style, {zIndex: 10})), m(n.loadingSpan, r.labelStyle), n.loadingShown || (m(a, {
                            opacity: 0,
                            display: ""
                        }), i(a, {opacity: r.style.opacity || .5}, {duration: r.showDuration || 0})), n.loadingShown = !0, h()
                    },
                    hideLoading: function () {
                        var t = this.options, e = this.loadingDiv;
                        e && (e.className = "highcharts-loading highcharts-loading-hidden", i(e, {opacity: 0}, {
                            duration: t.loading.hideDuration || 100,
                            complete: function () {
                                m(e, {display: "none"})
                            }
                        })), this.loadingShown = !1
                    },
                    propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
                    propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),
                    update: function (t, e, i) {
                        var m, n, s = this, r = {credits: "addCredits", title: "setTitle", subtitle: "setSubtitle"},
                            l = t.chart, h = [];
                        l && (f(!0, s.options.chart, l), "className" in l && s.setClassName(l.className), ("inverted" in l || "polar" in l) && (s.propFromSeries(), m = !0), "alignTicks" in l && (m = !0), g(l, function (t, e) {
                            -1 !== c("chart." + e, s.propsRequireUpdateSeries) && (n = !0), -1 !== c(e, s.propsRequireDirtyBox) && (s.isDirtyBox = !0)
                        }), "style" in l && s.renderer.setStyle(l.style)), t.colors && (this.options.colors = t.colors), t.plotOptions && f(!0, this.options.plotOptions, t.plotOptions), g(t, function (t, e) {
                            s[e] && "function" == typeof s[e].update ? s[e].update(t, !1) : "function" == typeof s[r[e]] && s[r[e]](t), "chart" !== e && -1 !== c(e, s.propsRequireUpdateSeries) && (n = !0)
                        }), a("xAxis yAxis zAxis series colorAxis pane".split(" "), function (e) {
                            t[e] && (a(w(t[e]), function (t, n) {
                                (n = o(t.id) && s.get(t.id) || s[e][n]) && n.coll === e && (n.update(t, !1), i && (n.touched = !0)), !n && i && ("series" === e ? s.addSeries(t, !1).touched = !0 : "xAxis" !== e && "yAxis" !== e || (s.addAxis(t, "xAxis" === e, !1).touched = !0))
                            }), i && a(s[e], function (t) {
                                t.touched ? delete t.touched : h.push(t)
                            }))
                        }), a(h, function (t) {
                            t.remove(!1)
                        }), m && a(s.axes, function (t) {
                            t.update({}, !1)
                        }), n && a(s.series, function (t) {
                            t.update({}, !1)
                        }), t.loading && f(!0, s.options.loading, t.loading), m = l && l.width, l = l && l.height, d(m) && m !== s.chartWidth || d(l) && l !== s.chartHeight ? s.setSize(m, l) : v(e, !0) && s.redraw()
                    },
                    setSubtitle: function (t) {
                        this.setTitle(void 0, t)
                    }
                }), l(y.prototype, {
                    update: function (t, e, i, n) {
                        function s() {
                            a.applyOptions(t), null === a.y && l && (a.graphic = l.destroy()), p(t, !0) && (l && l.element && t && t.marker && void 0 !== t.marker.symbol && (a.graphic = l.destroy()), t && t.dataLabels && a.dataLabel && (a.dataLabel = a.dataLabel.destroy())), o = a.index, r.updateParallelArrays(a, o), c.data[o] = p(c.data[o], !0) || p(t, !0) ? a.options : t, r.isDirty = r.isDirtyData = !0, !r.fixedBox && r.hasCartesianSeries && (h.isDirtyBox = !0), "point" === c.legendType && (h.isDirtyLegend = !0), e && h.redraw(i)
                        }

                        var o, a = this, r = a.series, l = a.graphic, h = r.chart, c = r.options;
                        e = v(e, !0), !1 === n ? s() : a.firePointEvent("update", {options: t}, s)
                    }, remove: function (t, e) {
                        this.series.removePoint(c(this, this.series.data), t, e)
                    }
                }), l(x.prototype, {
                    addPoint: function (t, e, i, n) {
                        var s, o, a, m, r = this.options, l = this.data, h = this.chart, c = this.xAxis,
                            c = c && c.hasNames && c.names, d = r.data, p = this.xData;
                        if (e = v(e, !0), s = {series: this}, this.pointClass.prototype.applyOptions.apply(s, [t]), m = s.x, a = p.length, this.requireSorting && m < p[a - 1]) for (o = !0; a && p[a - 1] > m;) a--;
                        this.updateParallelArrays(s, "splice", a, 0, 0), this.updateParallelArrays(s, a), c && s.name && (c[m] = s.name), d.splice(a, 0, t), o && (this.data.splice(a, 0, null), this.processData()), "point" === r.legendType && this.generatePoints(), i && (l[0] && l[0].remove ? l[0].remove(!1) : (l.shift(), this.updateParallelArrays(s, "shift"), d.shift())), this.isDirtyData = this.isDirty = !0, e && h.redraw(n)
                    }, removePoint: function (t, e, i) {
                        var n = this, s = n.data, o = s[t], a = n.points, r = n.chart, l = function () {
                            a && a.length === s.length && a.splice(t, 1), s.splice(t, 1), n.options.data.splice(t, 1), n.updateParallelArrays(o || {series: n}, "splice", t, 1), o && o.destroy(), n.isDirty = !0, n.isDirtyData = !0, e && r.redraw()
                        };
                        k(i, r), e = v(e, !0), o ? o.firePointEvent("remove", null, l) : l()
                    }, remove: function (t, e, i) {
                        function n() {
                            s.destroy(), o.isDirtyLegend = o.isDirtyBox = !0, o.linkSeries(), v(t, !0) && o.redraw(e)
                        }

                        var s = this, o = s.chart;
                        !1 !== i ? h(s, "remove", null, n) : n()
                    }, update: function (t, e) {
                        var i, n = this, s = n.chart, o = n.userOptions, r = n.oldType || n.type,
                            h = t.type || o.type || s.options.chart.type, c = b[r].prototype,
                            d = ["group", "markerGroup", "dataLabelsGroup", "navigatorSeries", "baseSeries"],
                            m = n.finishedAnimating && {animation: !1};
                        if (Object.keys && "data" === Object.keys(t).toString()) return this.setData(t.data, e);
                        (h && h !== r || void 0 !== t.zIndex) && (d.length = 0), a(d, function (t) {
                            d[t] = n[t], delete n[t]
                        }), t = f(o, m, {
                            index: n.index,
                            pointStart: n.xData[0]
                        }, {data: n.options.data}, t), n.remove(!1, null, !1);
                        for (i in c) n[i] = void 0;
                        l(n, b[h || r].prototype), a(d, function (t) {
                            n[t] = d[t]
                        }), n.init(s, t), n.oldType = r, s.linkSeries(), v(e, !0) && s.redraw(!1)
                    }
                }), l(n.prototype, {
                    update: function (t, e) {
                        var i = this.chart;
                        t = i.options[this.coll][this.options.index] = f(this.userOptions, t), this.destroy(!0), this.init(i, l(t, {events: void 0})), i.isDirtyBox = !0, v(e, !0) && i.redraw()
                    }, remove: function (t) {
                        for (var e = this.chart, i = this.coll, n = this.series, s = n.length; s--;) n[s] && n[s].remove(!1);
                        r(e.axes, this), r(e[i], this), u(e.options[i]) ? e.options[i].splice(this.options.index, 1) : delete e.options[i], a(e[i], function (t, e) {
                            t.options.index = e
                        }), this.destroy(), e.isDirtyBox = !0, v(t, !0) && e.redraw()
                    }, setTitle: function (t, e) {
                        this.update({title: t}, e)
                    }, setCategories: function (t, e) {
                        this.update({categories: t}, e)
                    }
                })
            }(t), function (t) {
                var e = t.color, i = t.each, n = t.map, s = t.pick, m = t.Series, o = t.seriesType;
                o("area", "line", {softThreshold: !1, threshold: 0}, {
                    singleStacks: !1, getStackPoints: function (e) {
                        var o, a, r = [], m = [], l = this.xAxis, h = this.yAxis, c = h.stacks[this.stackKey], d = {},
                            p = this.index, u = h.series, f = u.length, g = s(h.options.reversedStacks, !0) ? 1 : -1;
                        if (e = e || this.points, this.options.stacking) {
                            for (a = 0; a < e.length; a++) d[e[a].x] = e[a];
                            t.objectEach(c, function (t, e) {
                                null !== t.total && m.push(e)
                            }), m.sort(function (t, e) {
                                return t - e
                            }), o = n(u, function () {
                                return this.visible
                            }), i(m, function (t, e) {
                                var n, s, u = 0;
                                if (d[t] && !d[t].isNull) r.push(d[t]), i([-1, 1], function (i) {
                                    var r = 1 === i ? "rightNull" : "leftNull", l = 0, h = c[m[e + i]];
                                    if (h) for (a = p; 0 <= a && a < f;) n = h.points[a], n || (a === p ? d[t][r] = !0 : o[a] && (s = c[t].points[a]) && (l -= s[1] - s[0])), a += g;
                                    d[t][1 === i ? "rightCliff" : "leftCliff"] = l
                                }); else {
                                    for (a = p; 0 <= a && a < f;) {
                                        if (n = c[t].points[a]) {
                                            u = n[1];
                                            break
                                        }
                                        a += g
                                    }
                                    u = h.translate(u, 0, 1, 0, 1), r.push({
                                        isNull: !0,
                                        plotX: l.translate(t, 0, 0, 0, 1),
                                        x: t,
                                        plotY: u,
                                        yBottom: u
                                    })
                                }
                            })
                        }
                        return r
                    }, getGraphPath: function (t) {
                        var e, i, n, o, a = m.prototype.getGraphPath, r = this.options, l = r.stacking, h = this.yAxis,
                            c = [], d = [], p = this.index, u = h.stacks[this.stackKey], f = r.threshold,
                            g = h.getThreshold(r.threshold), r = r.connectNulls || "percent" === l,
                            v = function (e, i, s) {
                                var o = t[e];
                                e = l && u[o.x].points[p];
                                var a = o[s + "Null"] || 0;
                                s = o[s + "Cliff"] || 0;
                                var r, m, o = !0;
                                s || a ? (r = (a ? e[0] : e[1]) + s, m = e[0] + s, o = !!a) : !l && t[i] && t[i].isNull && (r = m = f), void 0 !== r && (d.push({
                                    plotX: n,
                                    plotY: null === r ? g : h.getThreshold(r),
                                    isNull: o,
                                    isCliff: !0
                                }), c.push({plotX: n, plotY: null === m ? g : h.getThreshold(m), doCurve: !1}))
                            };
                        for (t = t || this.points, l && (t = this.getStackPoints(t)), e = 0; e < t.length; e++) i = t[e].isNull, n = s(t[e].rectPlotX, t[e].plotX), o = s(t[e].yBottom, g), (!i || r) && (r || v(e, e - 1, "left"), i && !l && r || (d.push(t[e]), c.push({
                            x: e,
                            plotX: n,
                            plotY: o
                        })), r || v(e, e + 1, "right"));
                        return e = a.call(this, d, !0, !0), c.reversed = !0, i = a.call(this, c, !0, !0), i.length && (i[0] = "L"), i = e.concat(i), a = a.call(this, d, !1, r), i.xMap = e.xMap, this.areaPath = i, a
                    }, drawGraph: function () {
                        this.areaPath = [], m.prototype.drawGraph.apply(this);
                        var t = this, n = this.areaPath, o = this.options,
                            a = [["area", "highcharts-area", this.color, o.fillColor]];
                        i(this.zones, function (e, i) {
                            a.push(["zone-area-" + i, "highcharts-area highcharts-zone-area-" + i + " " + e.className, e.color || t.color, e.fillColor || o.fillColor])
                        }), i(a, function (i) {
                            var a = i[0], r = t[a];
                            r ? (r.endX = n.xMap, r.animate({d: n})) : (r = t[a] = t.chart.renderer.path(n).addClass(i[1]).attr({
                                fill: s(i[3], e(i[2]).setOpacity(s(o.fillOpacity, .75)).get()),
                                zIndex: 0
                            }).add(t.group), r.isArea = !0), r.startX = n.xMap, r.shiftUnit = o.step ? 2 : 1
                        })
                    }, drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
                })
            }(t), function (t) {
                var e = t.pick;
                (t = t.seriesType)("spline", "line", {}, {
                    getPointSpline: function (t, i, n) {
                        var m = i.plotX, s = i.plotY, o = t[n - 1];
                        n = t[n + 1];
                        var a, r, l, h;
                        if (o && !o.isNull && !1 !== o.doCurve && !i.isCliff && n && !n.isNull && !1 !== n.doCurve && !i.isCliff) {
                            t = o.plotY, l = n.plotX, n = n.plotY;
                            var c = 0;
                            a = (1.5 * m + o.plotX) / 2.5, r = (1.5 * s + t) / 2.5, l = (1.5 * m + l) / 2.5, h = (1.5 * s + n) / 2.5, l !== a && (c = (h - r) * (l - m) / (l - a) + s - h), r += c, h += c, r > t && r > s ? (r = Math.max(t, s), h = 2 * s - r) : r < t && r < s && (r = Math.min(t, s), h = 2 * s - r), h > n && h > s ? (h = Math.max(n, s), r = 2 * s - h) : h < n && h < s && (h = Math.min(n, s), r = 2 * s - h), i.rightContX = l, i.rightContY = h
                        }
                        return i = ["C", e(o.rightContX, o.plotX), e(o.rightContY, o.plotY), e(a, m), e(r, s), m, s], o.rightContX = o.rightContY = null, i
                    }
                })
            }(t), function (t) {
                var e = t.seriesTypes.area.prototype, i = t.seriesType;
                i("areaspline", "spline", t.defaultPlotOptions.area, {
                    getStackPoints: e.getStackPoints,
                    getGraphPath: e.getGraphPath,
                    drawGraph: e.drawGraph,
                    drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
                })
            }(t), function (t) {
                var e = t.animObject, i = t.color, n = t.each, s = t.extend, m = t.isNumber, o = t.merge, a = t.pick,
                    r = t.Series, l = t.seriesType, h = t.svg;
                l("column", "line", {
                    borderRadius: 0,
                    crisp: !0,
                    groupPadding: .2,
                    marker: null,
                    pointPadding: .1,
                    minPointLength: 0,
                    cropThreshold: 50,
                    pointRange: null,
                    states: {
                        hover: {halo: !1, brightness: .1, shadow: !1},
                        select: {color: "#cccccc", borderColor: "#000000", shadow: !1}
                    },
                    dataLabels: {align: null, verticalAlign: null, y: null},
                    softThreshold: !1,
                    startFromThreshold: !0,
                    stickyTracking: !1,
                    tooltip: {distance: 6},
                    threshold: 0,
                    borderColor: "#ffffff"
                }, {
                    cropShoulder: 0,
                    directTouch: !0,
                    trackerGroups: ["group", "dataLabelsGroup"],
                    negStacks: !0,
                    init: function () {
                        r.prototype.init.apply(this, arguments);
                        var t = this, e = t.chart;
                        e.hasRendered && n(e.series, function (e) {
                            e.type === t.type && (e.isDirty = !0)
                        })
                    },
                    getColumnMetrics: function () {
                        var m, t = this, e = t.options, i = t.xAxis, s = t.yAxis, o = i.reversed, r = {}, l = 0;
                        !1 === e.grouping ? l = 1 : n(t.chart.series, function (e) {
                            var i, n = e.options, o = e.yAxis;
                            e.type !== t.type || !e.visible && t.chart.options.chart.ignoreHiddenSeries || s.len !== o.len || s.pos !== o.pos || (n.stacking ? (m = e.stackKey, void 0 === r[m] && (r[m] = l++), i = r[m]) : !1 !== n.grouping && (i = l++), e.columnIndex = i)
                        });
                        var h = Math.min(Math.abs(i.transA) * (i.ordinalSlope || e.pointRange || i.closestPointRange || i.tickInterval || 1), i.len),
                            c = h * e.groupPadding, d = (h - 2 * c) / (l || 1),
                            e = Math.min(e.maxPointWidth || i.len, a(e.pointWidth, d * (1 - 2 * e.pointPadding)));
                        return t.columnMetrics = {
                            width: e,
                            offset: (d - e) / 2 + (c + ((t.columnIndex || 0) + (o ? 1 : 0)) * d - h / 2) * (o ? -1 : 1)
                        }, t.columnMetrics
                    },
                    crispCol: function (t, e, i, n) {
                        var s = this.chart, o = this.borderWidth, a = -(o % 2 ? .5 : 0), o = o % 2 ? .5 : 1;
                        return s.inverted && s.renderer.isVML && (o += 1), this.options.crisp && (i = Math.round(t + i) + a, t = Math.round(t) + a, i -= t), n = Math.round(e + n) + o, a = .5 >= Math.abs(e) && .5 < n, e = Math.round(e) + o, n -= e, a && n && (--e, n += 1), {
                            x: t,
                            y: e,
                            width: i,
                            height: n
                        }
                    },
                    translate: function () {
                        var t = this, e = t.chart, i = t.options,
                            s = t.dense = 2 > t.closestPointRange * t.xAxis.transA,
                            s = t.borderWidth = a(i.borderWidth, s ? 0 : 1), o = t.yAxis,
                            m = t.translatedThreshold = o.getThreshold(i.threshold), l = a(i.minPointLength, 5),
                            h = t.getColumnMetrics(), c = h.width, d = t.barW = Math.max(c, 1 + 2 * s),
                            p = t.pointXOffset = h.offset;
                        e.inverted && (m -= .5), i.pointPadding && (d = Math.ceil(d)), r.prototype.translate.apply(t), n(t.points, function (i) {
                            var n, s = a(i.yBottom, m), r = 999 + Math.abs(s),
                                r = Math.min(Math.max(-r, i.plotY), o.len + r), h = i.plotX + p, u = d,
                                f = Math.min(r, s), g = Math.max(r, s) - f;
                            Math.abs(g) < l && l && (g = l, n = !o.reversed && !i.negative || o.reversed && i.negative, f = Math.abs(f - m) > l ? s - l : m - (n ? l : 0)), i.barX = h, i.pointWidth = c, i.tooltipPos = e.inverted ? [o.len + o.pos - e.plotLeft - r, t.xAxis.len - h - u / 2, g] : [h + u / 2, r + o.pos - e.plotTop, g], i.shapeType = "rect", i.shapeArgs = t.crispCol.apply(t, i.isNull ? [h, m, u, 0] : [h, f, u, g])
                        })
                    },
                    getSymbol: t.noop,
                    drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
                    drawGraph: function () {
                        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
                    },
                    pointAttribs: function (t, e) {
                        var n, s = this.options, a = this.pointAttrToOptions || {};
                        n = a.stroke || "borderColor";
                        var r = a["stroke-width"] || "borderWidth", m = t && t.color || this.color,
                            l = t[n] || s[n] || this.color || m, h = t[r] || s[r] || this[r] || 0, a = s.dashStyle;
                        return t && this.zones.length && (m = t.getZone(), m = t.options.color || m && m.color || this.color), e && (t = o(s.states[e], t.options.states && t.options.states[e] || {}), e = t.brightness, m = t.color || void 0 !== e && i(m).brighten(t.brightness).get() || m, l = t[n] || l, h = t[r] || h, a = t.dashStyle || a), n = {
                            fill: m,
                            stroke: l,
                            "stroke-width": h
                        }, a && (n.dashstyle = a), n
                    },
                    drawPoints: function () {
                        var t, e = this, i = this.chart, s = e.options, a = i.renderer, r = s.animationLimit || 250;
                        n(e.points, function (n) {
                            var l = n.graphic;
                            m(n.plotY) && null !== n.y ? (t = n.shapeArgs, l ? l[i.pointCount < r ? "animate" : "attr"](o(t)) : n.graphic = l = a[n.shapeType](t).add(n.group || e.group), s.borderRadius && l.attr({r: s.borderRadius}), l.attr(e.pointAttribs(n, n.selected && "select")).shadow(s.shadow, null, s.stacking && !s.borderRadius), l.addClass(n.getClassName(), !0)) : l && (n.graphic = l.destroy())
                        })
                    },
                    animate: function (t) {
                        var i = this, n = this.yAxis, o = i.options, a = this.chart.inverted, r = {};
                        h && (t ? (r.scaleY = .001, t = Math.min(n.pos + n.len, Math.max(n.pos, n.toPixels(o.threshold))), a ? r.translateX = t - n.len : r.translateY = t, i.group.attr(r)) : (r[a ? "translateX" : "translateY"] = n.pos, i.group.animate(r, s(e(i.options.animation), {
                            step: function (t, e) {
                                i.group.attr({scaleY: Math.max(.001, e.pos)})
                            }
                        })), i.animate = null))
                    },
                    remove: function () {
                        var t = this, e = t.chart;
                        e.hasRendered && n(e.series, function (e) {
                            e.type === t.type && (e.isDirty = !0)
                        }), r.prototype.remove.apply(t, arguments)
                    }
                })
            }(t), function (t) {
                (t = t.seriesType)("bar", "column", null, {inverted: !0})
            }(t), function (t) {
                var e = t.Series;
                (t = t.seriesType)("scatter", "line", {
                    lineWidth: 0, findNearestPointBy: "xy", marker: {enabled: !0}, tooltip: {
                        headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.85em"> {series.name}</span><br/>',
                        pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                    }
                }, {
                    sorted: !1,
                    requireSorting: !1,
                    noSharedTooltip: !0,
                    trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
                    takeOrdinalPosition: !1,
                    drawGraph: function () {
                        this.options.lineWidth && e.prototype.drawGraph.call(this)
                    }
                })
            }(t), function (t) {
                var e = t.pick, i = t.relativeLength;
                t.CenteredSeriesMixin = {
                    getCenter: function () {
                        var t, n, s = this.options, o = this.chart, m = 2 * (s.slicedOffset || 0),
                            a = o.plotWidth - 2 * m, o = o.plotHeight - 2 * m, r = s.center,
                            r = [e(r[0], "50%"), e(r[1], "50%"), s.size || "100%", s.innerSize || 0],
                            l = Math.min(a, o);
                        for (t = 0; 4 > t; ++t) n = r[t], s = 2 > t || 2 === t && /%$/.test(n), r[t] = i(n, [a, o, l, r[2]][t]) + (s ? m : 0);
                        return r[3] > r[2] && (r[3] = r[2]), r
                    }
                }
            }(t), function (t) {
                var e = t.addEvent, i = t.defined, n = t.each, s = t.extend, m = t.inArray, o = t.noop, a = t.pick,
                    r = t.Point, l = t.Series, h = t.seriesType, c = t.setAnimation;
                h("pie", "line", {
                    center: [null, null],
                    clip: !1,
                    colorByPoint: !0,
                    dataLabels: {
                        distance: 30, enabled: !0, formatter: function () {
                            return this.point.isNull ? void 0 : this.point.name
                        }, x: 0
                    },
                    ignoreHiddenPoint: !0,
                    legendType: "point",
                    marker: null,
                    size: null,
                    showInLegend: !1,
                    slicedOffset: 10,
                    stickyTracking: !1,
                    tooltip: {followPointer: !0},
                    borderColor: "#ffffff",
                    borderWidth: 1,
                    states: {hover: {brightness: .1, shadow: !1}}
                }, {
                    isCartesian: !1,
                    requireSorting: !1,
                    directTouch: !0,
                    noSharedTooltip: !0,
                    trackerGroups: ["group", "dataLabelsGroup"],
                    axisTypes: [],
                    pointAttribs: t.seriesTypes.column.prototype.pointAttribs,
                    animate: function (t) {
                        var e = this, i = e.points, s = e.startAngleRad;
                        t || (n(i, function (t) {
                            var i = t.graphic, n = t.shapeArgs;
                            i && (i.attr({r: t.startR || e.center[3] / 2, start: s, end: s}), i.animate({
                                r: n.r,
                                start: n.start,
                                end: n.end
                            }, e.options.animation))
                        }), e.animate = null)
                    },
                    updateTotals: function () {
                        var t, e, i = 0, n = this.points, s = n.length, o = this.options.ignoreHiddenPoint;
                        for (t = 0; t < s; t++) e = n[t], i += o && !e.visible ? 0 : e.isNull ? 0 : e.y;
                        for (this.total = i, t = 0; t < s; t++) e = n[t], e.percentage = 0 < i && (e.visible || !o) ? e.y / i * 100 : 0, e.total = i
                    },
                    generatePoints: function () {
                        l.prototype.generatePoints.call(this), this.updateTotals()
                    },
                    translate: function (t) {
                        this.generatePoints();
                        var e, i, m, n, s, o, r = 0, l = this.options, h = l.slicedOffset, c = h + (l.borderWidth || 0),
                            d = l.startAngle || 0, p = this.startAngleRad = Math.PI / 180 * (d - 90),
                            d = (this.endAngleRad = Math.PI / 180 * (a(l.endAngle, d + 360) - 90)) - p, u = this.points,
                            f = l.dataLabels.distance, l = l.ignoreHiddenPoint, g = u.length;
                        for (t || (this.center = t = this.getCenter()), this.getX = function (e, i, n) {
                            return m = Math.asin(Math.min((e - t[1]) / (t[2] / 2 + n.labelDistance), 1)), t[0] + (i ? -1 : 1) * Math.cos(m) * (t[2] / 2 + n.labelDistance)
                        }, s = 0; s < g; s++) o = u[s], o.labelDistance = a(o.options.dataLabels && o.options.dataLabels.distance, f), this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, o.labelDistance), e = p + r * d, l && !o.visible || (r += o.percentage / 100), i = p + r * d, o.shapeType = "arc", o.shapeArgs = {
                            x: t[0],
                            y: t[1],
                            r: t[2] / 2,
                            innerR: t[3] / 2,
                            start: Math.round(1e3 * e) / 1e3,
                            end: Math.round(1e3 * i) / 1e3
                        }, m = (i + e) / 2, m > 1.5 * Math.PI ? m -= 2 * Math.PI : m < -Math.PI / 2 && (m += 2 * Math.PI), o.slicedTranslation = {
                            translateX: Math.round(Math.cos(m) * h),
                            translateY: Math.round(Math.sin(m) * h)
                        }, i = Math.cos(m) * t[2] / 2, n = Math.sin(m) * t[2] / 2, o.tooltipPos = [t[0] + .7 * i, t[1] + .7 * n], o.half = m < -Math.PI / 2 || m > Math.PI / 2 ? 1 : 0, o.angle = m, e = Math.min(c, o.labelDistance / 5), o.labelPos = [t[0] + i + Math.cos(m) * o.labelDistance, t[1] + n + Math.sin(m) * o.labelDistance, t[0] + i + Math.cos(m) * e, t[1] + n + Math.sin(m) * e, t[0] + i, t[1] + n, 0 > o.labelDistance ? "center" : o.half ? "right" : "left", m]
                    },
                    drawGraph: null,
                    drawPoints: function () {
                        var t, e, i, o, a = this, r = a.chart.renderer, l = a.options.shadow;
                        l && !a.shadowGroup && (a.shadowGroup = r.g("shadow").add(a.group)), n(a.points, function (n) {
                            if (!n.isNull) {
                                e = n.graphic, o = n.shapeArgs, t = n.getTranslate();
                                var h = n.shadowGroup;
                                l && !h && (h = n.shadowGroup = r.g("shadow").add(a.shadowGroup)), h && h.attr(t), i = a.pointAttribs(n, n.selected && "select"), e ? e.setRadialReference(a.center).attr(i).animate(s(o, t)) : (n.graphic = e = r[n.shapeType](o).setRadialReference(a.center).attr(t).add(a.group), n.visible || e.attr({visibility: "hidden"}), e.attr(i).attr({"stroke-linejoin": "round"}).shadow(l, h)), e.addClass(n.getClassName())
                            }
                        })
                    },
                    searchPoint: o,
                    sortByAngle: function (t, e) {
                        t.sort(function (t, i) {
                            return void 0 !== t.angle && (i.angle - t.angle) * e
                        })
                    },
                    drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
                    getCenter: t.CenteredSeriesMixin.getCenter,
                    getSymbol: o
                }, {
                    init: function () {
                        r.prototype.init.apply(this, arguments);
                        var t, i = this;
                        return i.name = a(i.name, "Slice"), t = function (t) {
                            i.slice("select" === t.type)
                        }, e(i, "select", t), e(i, "unselect", t), i
                    }, isValid: function () {
                        return t.isNumber(this.y, !0) && 0 <= this.y
                    }, setVisible: function (t, e) {
                        var i = this, s = i.series, o = s.chart, r = s.options.ignoreHiddenPoint;
                        e = a(e, r), t !== i.visible && (i.visible = i.options.visible = t = void 0 === t ? !i.visible : t, s.options.data[m(i, s.data)] = i.options, n(["graphic", "dataLabel", "connector", "shadowGroup"], function (e) {
                            i[e] && i[e][t ? "show" : "hide"](!0)
                        }), i.legendItem && o.legend.colorizeItem(i, t), t || "hover" !== i.state || i.setState(""), r && (s.isDirty = !0), e && o.redraw())
                    }, slice: function (t, e, n) {
                        var s = this.series;
                        c(n, s.chart), a(e, !0), this.sliced = this.options.sliced = i(t) ? t : !this.sliced, s.options.data[m(this, s.data)] = this.options, this.graphic.animate(this.getTranslate()), this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
                    }, getTranslate: function () {
                        return this.sliced ? this.slicedTranslation : {translateX: 0, translateY: 0}
                    }, haloPath: function (t) {
                        var e = this.shapeArgs;
                        return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                            innerR: this.shapeArgs.r,
                            start: e.start,
                            end: e.end
                        })
                    }
                })
            }(t), function (t) {
                var e = t.addEvent, i = t.arrayMax, n = t.defined, s = t.each, m = t.extend, o = t.format, a = t.map,
                    r = t.merge, l = t.noop, h = t.pick, c = t.relativeLength, d = t.Series, p = t.seriesTypes,
                    u = t.stableSort;
                t.distribute = function (t, e) {
                    function i(t, e) {
                        return t.target - e.target
                    }

                    var n, m, o = !0, r = t, l = [];
                    for (m = 0, n = t.length; n--;) m += t[n].size;
                    if (m > e) {
                        for (u(t, function (t, e) {
                            return (e.rank || 0) - (t.rank || 0)
                        }), m = n = 0; m <= e;) m += t[n].size, n++;
                        l = t.splice(n - 1, t.length)
                    }
                    for (u(t, i), t = a(t, function (t) {
                        return {size: t.size, targets: [t.target]}
                    }); o;) {
                        for (n = t.length; n--;) o = t[n], m = (Math.min.apply(0, o.targets) + Math.max.apply(0, o.targets)) / 2, o.pos = Math.min(Math.max(0, m - o.size / 2), e - o.size);
                        for (n = t.length, o = !1; n--;) 0 < n && t[n - 1].pos + t[n - 1].size > t[n].pos && (t[n - 1].size += t[n].size, t[n - 1].targets = t[n - 1].targets.concat(t[n].targets), t[n - 1].pos + t[n - 1].size > e && (t[n - 1].pos = e - t[n - 1].size), t.splice(n, 1), o = !0)
                    }
                    n = 0, s(t, function (t) {
                        var e = 0;
                        s(t.targets, function () {
                            r[n].pos = t.pos + e, e += r[n].size, n++
                        })
                    }), r.push.apply(r, l), u(r, i)
                }, d.prototype.drawDataLabels = function () {
                    var i, m, a, l, c = this, d = c.options, p = d.dataLabels, u = c.points, f = c.hasRendered || 0,
                        g = h(p.defer, !!d.animation), v = c.chart.renderer;
                    (p.enabled || c._hasPointLabels) && (c.dlProcessOptions && c.dlProcessOptions(p), l = c.plotGroup("dataLabelsGroup", "data-labels", g && !f ? "hidden" : "visible", p.zIndex || 6), g && (l.attr({opacity: +f}), f || e(c, "afterAnimate", function () {
                        c.visible && l.show(!0), l[d.animation ? "animate" : "attr"]({opacity: 1}, {duration: 200})
                    })), m = p, s(u, function (e) {
                        var s, u, f, g, y = e.dataLabel, x = e.connector, b = !y;
                        i = e.dlOptions || e.options && e.options.dataLabels, (s = h(i && i.enabled, m.enabled) && null !== e.y) && (p = r(m, i), u = e.getLabelConfig(), a = p.format ? o(p.format, u) : p.formatter.call(u, p), g = p.style, u = p.rotation, g.color = h(p.color, g.color, c.color, "#000000"), "contrast" === g.color && (e.contrastColor = v.getContrast(e.color || c.color), g.color = p.inside || 0 > h(e.labelDistance, p.distance) || d.stacking ? e.contrastColor : "#000000"), d.cursor && (g.cursor = d.cursor), f = {
                            fill: p.backgroundColor,
                            stroke: p.borderColor,
                            "stroke-width": p.borderWidth,
                            r: p.borderRadius || 0,
                            rotation: u,
                            padding: p.padding,
                            zIndex: 1
                        }, t.objectEach(f, function (t, e) {
                            void 0 === t && delete f[e]
                        })), !y || s && n(a) ? s && n(a) && (y ? f.text = a : (y = e.dataLabel = v[u ? "text" : "label"](a, 0, -9999, p.shape, null, null, p.useHTML, null, "data-label"), y.addClass("highcharts-data-label-color-" + e.colorIndex + " " + (p.className || "") + (p.useHTML ? "highcharts-tracker" : ""))), y.attr(f), y.css(g).shadow(p.shadow), y.added || y.add(l), c.alignDataLabel(e, y, p, null, b)) : (e.dataLabel = y = y.destroy(), x && (e.connector = x.destroy()))
                    }))
                }, d.prototype.alignDataLabel = function (t, e, i, n, s) {
                    var o, a = this.chart, r = a.inverted, l = h(t.plotX, -9999), c = h(t.plotY, -9999),
                        d = e.getBBox(), p = i.rotation, u = i.align,
                        f = this.visible && (t.series.forceDL || a.isInsidePlot(l, Math.round(c), r) || n && a.isInsidePlot(l, r ? n.x + 1 : n.y + n.height - 1, r)),
                        g = "justify" === h(i.overflow, "justify");
                    f && (o = i.style.fontSize, o = a.renderer.fontMetrics(o, e).b, n = m({
                        x: r ? this.yAxis.len - c : l,
                        y: Math.round(r ? this.xAxis.len - l : c),
                        width: 0,
                        height: 0
                    }, n), m(i, {
                        width: d.width,
                        height: d.height
                    }), p ? (g = !1, l = a.renderer.rotCorr(o, p), l = {
                        x: n.x + i.x + n.width / 2 + l.x,
                        y: n.y + i.y + {top: 0, middle: .5, bottom: 1}[i.verticalAlign] * n.height
                    }, e[s ? "attr" : "animate"](l).attr({align: u}), c = (p + 720) % 360, c = 180 < c && 360 > c, "left" === u ? l.y -= c ? d.height : 0 : "center" === u ? (l.x -= d.width / 2, l.y -= d.height / 2) : "right" === u && (l.x -= d.width, l.y -= c ? 0 : d.height)) : (e.align(i, null, n), l = e.alignAttr), g ? t.isLabelJustified = this.justifyDataLabel(e, i, l, d, n, s) : h(i.crop, !0) && (f = a.isInsidePlot(l.x, l.y) && a.isInsidePlot(l.x + d.width, l.y + d.height)), i.shape && !p) && e[s ? "attr" : "animate"]({
                        anchorX: r ? a.plotWidth - t.plotY : t.plotX,
                        anchorY: r ? a.plotHeight - t.plotX : t.plotY
                    }), f || (e.attr({y: -9999}), e.placed = !1)
                }, d.prototype.justifyDataLabel = function (t, e, i, n, s, o) {
                    var m, a, r = this.chart, l = e.align, h = e.verticalAlign, c = t.box ? 0 : t.padding || 0;
                    return m = i.x + c, 0 > m && ("right" === l ? e.align = "left" : e.x = -m, a = !0), m = i.x + n.width - c, m > r.plotWidth && ("left" === l ? e.align = "right" : e.x = r.plotWidth - m, a = !0), m = i.y + c, 0 > m && ("bottom" === h ? e.verticalAlign = "top" : e.y = -m, a = !0), m = i.y + n.height - c, m > r.plotHeight && ("top" === h ? e.verticalAlign = "bottom" : e.y = r.plotHeight - m, a = !0), a && (t.placed = !o, t.align(e, null, s)), a
                }, p.pie && (p.pie.prototype.drawDataLabels = function () {
                    var e, o, a, r, l, c, p, u, f, g, v = this, y = v.data, x = v.chart, b = v.options.dataLabels,
                        m = h(b.connectorPadding, 10), k = h(b.connectorWidth, 1), w = x.plotWidth, M = x.plotHeight,
                        S = v.center, C = S[2] / 2, T = S[1], A = [[], []], P = [0, 0, 0, 0];
                    v.visible && (b.enabled || v._hasPointLabels) && (s(y, function (t) {
                        t.dataLabel && t.visible && t.dataLabel.shortened && (t.dataLabel.attr({width: "auto"}).css({
                            width: "auto",
                            textOverflow: "clip"
                        }), t.dataLabel.shortened = !1)
                    }), d.prototype.drawDataLabels.apply(v), s(y, function (t) {
                        t.dataLabel && t.visible && (A[t.half].push(t), t.dataLabel._pos = null)
                    }), s(A, function (i, o) {
                        var d, y, k, A = i.length, L = [];
                        if (A) for (v.sortByAngle(i, o - .5), 0 < v.maxLabelDistance && (d = Math.max(0, T - C - v.maxLabelDistance), y = Math.min(T + C + v.maxLabelDistance, x.plotHeight), s(i, function (t) {
                            0 < t.labelDistance && t.dataLabel && (t.top = Math.max(0, T - C - t.labelDistance), t.bottom = Math.min(T + C + t.labelDistance, x.plotHeight), k = t.dataLabel.getBBox().height || 21, t.positionsIndex = L.push({
                                target: t.labelPos[1] - t.top + k / 2,
                                size: k,
                                rank: t.y
                            }) - 1)
                        }), t.distribute(L, y + k - d)), g = 0; g < A; g++) e = i[g], y = e.positionsIndex, l = e.labelPos, a = e.dataLabel, f = !1 === e.visible ? "hidden" : "inherit", d = l[1], L && n(L[y]) ? void 0 === L[y].pos ? f = "hidden" : (c = L[y].size, u = e.top + L[y].pos) : u = d, delete e.positionIndex, p = b.justify ? S[0] + (o ? -1 : 1) * (C + e.labelDistance) : v.getX(u < e.top + 2 || u > e.bottom - 2 ? d : u, o, e), a._attr = {
                            visibility: f,
                            align: l[6]
                        }, a._pos = {
                            x: p + b.x + ({left: m, right: -m}[l[6]] || 0),
                            y: u + b.y - 10
                        }, l.x = p, l.y = u, h(b.crop, !0) && (r = a.getBBox().width, d = null, p - r < m ? (d = Math.round(r - p + m), P[3] = Math.max(d, P[3])) : p + r > w - m && (d = Math.round(p + r - w + m), P[1] = Math.max(d, P[1])), 0 > u - c / 2 ? P[0] = Math.max(Math.round(-u + c / 2), P[0]) : u + c / 2 > M && (P[2] = Math.max(Math.round(u + c / 2 - M), P[2])), a.sideOverflow = d)
                    }), 0 === i(P) || this.verifyDataLabelOverflow(P)) && (this.placeDataLabels(), k && s(this.points, function (t) {
                        var e;
                        o = t.connector, (a = t.dataLabel) && a._pos && t.visible && 0 < t.labelDistance ? (f = a._attr.visibility, (e = !o) && (t.connector = o = x.renderer.path().addClass("highcharts-data-label-connector highcharts-color-" + t.colorIndex).add(v.dataLabelsGroup), o.attr({
                            "stroke-width": k,
                            stroke: b.connectorColor || t.color || "#666666"
                        })), o[e ? "attr" : "animate"]({d: v.connectorPath(t.labelPos)}), o.attr("visibility", f)) : o && (t.connector = o.destroy())
                    }))
                }, p.pie.prototype.connectorPath = function (t) {
                    var e = t.x, i = t.y;
                    return h(this.options.dataLabels.softConnector, !0) ? ["M", e + ("left" === t[6] ? 5 : -5), i, "C", e, i, 2 * t[2] - t[4], 2 * t[3] - t[5], t[2], t[3], "L", t[4], t[5]] : ["M", e + ("left" === t[6] ? 5 : -5), i, "L", t[2], t[3], "L", t[4], t[5]]
                }, p.pie.prototype.placeDataLabels = function () {
                    s(this.points, function (t) {
                        var e = t.dataLabel;
                        e && t.visible && ((t = e._pos) ? (e.sideOverflow && (e._attr.width = e.getBBox().width - e.sideOverflow, e.css({
                            width: e._attr.width + "px",
                            textOverflow: "ellipsis"
                        }), e.shortened = !0), e.attr(e._attr), e[e.moved ? "animate" : "attr"](t), e.moved = !0) : e && e.attr({y: -9999}))
                    }, this)
                }, p.pie.prototype.alignDataLabel = l, p.pie.prototype.verifyDataLabelOverflow = function (t) {
                    var e, i = this.center, n = this.options, s = n.center, o = n.minSize || 80, a = null !== n.size;
                    return a || (null !== s[0] ? e = Math.max(i[2] - Math.max(t[1], t[3]), o) : (e = Math.max(i[2] - t[1] - t[3], o), i[0] += (t[3] - t[1]) / 2), null !== s[1] ? e = Math.max(Math.min(e, i[2] - Math.max(t[0], t[2])), o) : (e = Math.max(Math.min(e, i[2] - t[0] - t[2]), o), i[1] += (t[0] - t[2]) / 2), e < i[2] ? (i[2] = e, i[3] = Math.min(c(n.innerSize || 0, e), e), this.translate(i), this.drawDataLabels && this.drawDataLabels()) : a = !0), a
                }), p.column && (p.column.prototype.alignDataLabel = function (t, e, i, n, s) {
                    var o = this.chart.inverted, a = t.series, l = t.dlBox || t.shapeArgs,
                        m = h(t.below, t.plotY > h(this.translatedThreshold, a.yAxis.len)),
                        c = h(i.inside, !!this.options.stacking);
                    l && (n = r(l), 0 > n.y && (n.height += n.y, n.y = 0), l = n.y + n.height - a.yAxis.len, 0 < l && (n.height -= l), o && (n = {
                        x: a.yAxis.len - n.y - n.height,
                        y: a.xAxis.len - n.x - n.width,
                        width: n.height,
                        height: n.width
                    }), c || (o ? (n.x += m ? 0 : n.width, n.width = 0) : (n.y += m ? n.height : 0, n.height = 0))), i.align = h(i.align, !o || c ? "center" : m ? "right" : "left"), i.verticalAlign = h(i.verticalAlign, o || c ? "middle" : m ? "top" : "bottom"), d.prototype.alignDataLabel.call(this, t, e, i, n, s), t.isLabelJustified && t.contrastColor && t.dataLabel.css({color: t.contrastColor})
                })
            }(t), function (t) {
                var e = t.Chart, i = t.each, n = t.objectEach, s = t.pick, m = t.addEvent;
                e.prototype.callbacks.push(function (t) {
                    function e() {
                        var e = [];
                        i(t.yAxis || [], function (t) {
                            t.options.stackLabels && !t.options.stackLabels.allowOverlap && n(t.stacks, function (t) {
                                n(t, function (t) {
                                    e.push(t.label)
                                })
                            })
                        }), i(t.series || [], function (t) {
                            var n = t.options.dataLabels, o = t.dataLabelCollections || ["dataLabel"];
                            (n.enabled || t._hasPointLabels) && !n.allowOverlap && t.visible && i(o, function (n) {
                                i(t.points, function (t) {
                                    t[n] && (t[n].labelrank = s(t.labelrank, t.shapeArgs && t.shapeArgs.height), e.push(t[n]))
                                })
                            })
                        }), t.hideOverlappingLabels(e)
                    }

                    e(), m(t, "redraw", e)
                }), e.prototype.hideOverlappingLabels = function (t) {
                    var m, e, n, s, o, a, r, l, h, c = t.length, d = function (t, e, i, n, s, o, a, r) {
                        return !(s > t + i || s + a < t || o > e + n || o + r < e)
                    };
                    for (e = 0; e < c; e++) (m = t[e]) && (m.oldOpacity = m.opacity, m.newOpacity = 1, m.width || (n = m.getBBox(), m.width = n.width, m.height = n.height));
                    for (t.sort(function (t, e) {
                        return (e.labelrank || 0) - (t.labelrank || 0)
                    }), e = 0; e < c; e++) for (n = t[e], m = e + 1; m < c; ++m) s = t[m], n && s && n !== s && n.placed && s.placed && 0 !== n.newOpacity && 0 !== s.newOpacity && (o = n.alignAttr, a = s.alignAttr, r = n.parentGroup, l = s.parentGroup, h = 2 * (n.box ? 0 : n.padding || 0), o = d(o.x + r.translateX, o.y + r.translateY, n.width - h, n.height - h, a.x + l.translateX, a.y + l.translateY, s.width - h, s.height - h)) && ((n.labelrank < s.labelrank ? n : s).newOpacity = 0);
                    i(t, function (t) {
                        var e, i;
                        t && (i = t.newOpacity, t.oldOpacity !== i && t.placed && (i ? t.show(!0) : e = function () {
                            t.hide()
                        }, t.alignAttr.opacity = i, t[t.isOld ? "animate" : "attr"](t.alignAttr, null, e)), t.isOld = !0)
                    })
                }
            }(t), function (t) {
                var e, i = t.addEvent, n = t.Chart, s = t.createElement, o = t.css, m = t.defaultOptions,
                    a = t.defaultPlotOptions, r = t.each, l = t.extend, h = t.fireEvent, c = t.hasTouch, d = t.inArray,
                    p = t.isObject, u = t.Legend, f = t.merge, g = t.pick, v = t.Point, y = t.Series, x = t.seriesTypes,
                    b = t.svg;
                e = t.TrackerMixin = {
                    drawTrackerPoint: function () {
                        var t = this, e = t.chart.pointer, i = function (t) {
                            var i = e.getPointFromEvent(t);
                            void 0 !== i && (e.isDirectTouch = !0, i.onMouseOver(t))
                        };
                        r(t.points, function (t) {
                            t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.div ? t.dataLabel.div.point = t : t.dataLabel.element.point = t)
                        }), t._hasTracking || (r(t.trackerGroups, function (n) {
                            t[n] && (t[n].addClass("highcharts-tracker").on("mouseover", i).on("mouseout", function (t) {
                                e.onTrackerMouseOut(t)
                            }), c && t[n].on("touchstart", i), t.options.cursor && t[n].css(o).css({cursor: t.options.cursor}))
                        }), t._hasTracking = !0)
                    }, drawTrackerGraph: function () {
                        var t, e = this, i = e.options, n = i.trackByArea, s = [].concat(n ? e.areaPath : e.graphPath),
                            o = s.length, a = e.chart, l = a.pointer, m = a.renderer, h = a.options.tooltip.snap,
                            d = e.tracker, p = function () {
                                a.hoverSeries !== e && e.onMouseOver()
                            }, u = "rgba(192,192,192," + (b ? 1e-4 : .002) + ")";
                        if (o && !n) for (t = o + 1; t--;) "M" === s[t] && s.splice(t + 1, 0, s[t + 1] - h, s[t + 2], "L"), (t && "M" === s[t] || t === o) && s.splice(t, 0, "L", s[t - 2] + h, s[t - 1]);
                        d ? d.attr({d: s}) : e.graph && (e.tracker = m.path(s).attr({
                            "stroke-linejoin": "round",
                            visibility: e.visible ? "visible" : "hidden",
                            stroke: u,
                            fill: n ? u : "none",
                            "stroke-width": e.graph.strokeWidth() + (n ? 0 : 2 * h),
                            zIndex: 2
                        }).add(e.group), r([e.tracker, e.markerGroup], function (t) {
                            t.addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function (t) {
                                l.onTrackerMouseOut(t)
                            }), i.cursor && t.css({cursor: i.cursor}), c && t.on("touchstart", p)
                        }))
                    }
                }, x.column && (x.column.prototype.drawTracker = e.drawTrackerPoint), x.pie && (x.pie.prototype.drawTracker = e.drawTrackerPoint), x.scatter && (x.scatter.prototype.drawTracker = e.drawTrackerPoint), l(u.prototype, {
                    setItemEvents: function (t, e, i) {
                        var n = this, s = n.chart.renderer.boxWrapper,
                            o = "highcharts-legend-" + (t.series ? "point" : "series") + "-active";
                        (i ? e : t.legendGroup).on("mouseover", function () {
                            t.setState("hover"), s.addClass(o), e.css(n.options.itemHoverStyle)
                        }).on("mouseout", function () {
                            e.css(f(t.visible ? n.itemStyle : n.itemHiddenStyle)), s.removeClass(o), t.setState()
                        }).on("click", function (e) {
                            var i = function () {
                                t.setVisible && t.setVisible()
                            };
                            e = {browserEvent: e}, t.firePointEvent ? t.firePointEvent("legendItemClick", e, i) : h(t, "legendItemClick", e, i)
                        })
                    }, createCheckboxForItem: function (t) {
                        t.checkbox = s("input", {
                            type: "checkbox",
                            checked: t.selected,
                            defaultChecked: t.selected
                        }, this.options.itemCheckboxStyle, this.chart.container), i(t.checkbox, "click", function (e) {
                            h(t.series || t, "checkboxClick", {checked: e.target.checked, item: t}, function () {
                                t.select()
                            })
                        })
                    }
                }), m.legend.itemStyle.cursor = "pointer", l(n.prototype, {
                    showResetZoom: function () {
                        var t = this, e = m.lang, i = t.options.chart.resetZoomButton, n = i.theme, s = n.states,
                            o = "chart" === i.relativeTo ? null : "plotBox";
                        this.resetZoomButton = t.renderer.button(e.resetZoom, null, null, function () {
                            t.zoomOut()
                        }, n, s && s.hover).attr({
                            align: i.position.align,
                            title: e.resetZoomTitle
                        }).addClass("highcharts-reset-zoom").add().align(i.position, !1, o)
                    }, zoomOut: function () {
                        var t = this;
                        h(t, "selection", {resetSelection: !0}, function () {
                            t.zoom()
                        })
                    }, zoom: function (t) {
                        var e, i, n = this.pointer, s = !1;
                        !t || t.resetSelection ? (r(this.axes, function (t) {
                            e = t.zoom()
                        }), n.initiated = !1) : r(t.xAxis.concat(t.yAxis), function (t) {
                            var i = t.axis;
                            n[i.isXAxis ? "zoomX" : "zoomY"] && (e = i.zoom(t.min, t.max), i.displayBtn && (s = !0))
                        }), i = this.resetZoomButton, s && !i ? this.showResetZoom() : !s && p(i) && (this.resetZoomButton = i.destroy()), e && this.redraw(g(this.options.chart.animation, t && t.animation, 100 > this.pointCount))
                    }, pan: function (t, e) {
                        var i, n = this, s = n.hoverPoints;
                        s && r(s, function (t) {
                            t.setState()
                        }), r("xy" === e ? [1, 0] : [1], function (e) {
                            e = n[e ? "xAxis" : "yAxis"][0];
                            var s, o = e.horiz, a = t[o ? "chartX" : "chartY"], o = o ? "mouseDownX" : "mouseDownY",
                                r = n[o], l = (e.pointRange || 0) / 2, h = e.getExtremes(),
                                c = e.toValue(r - a, !0) + l, l = e.toValue(r + e.len - a, !0) - l, m = l < c,
                                r = m ? l : c, c = m ? c : l,
                                l = Math.min(h.dataMin, e.toValue(e.toPixels(h.min) - e.minPixelPadding)),
                                m = Math.max(h.dataMax, e.toValue(e.toPixels(h.max) + e.minPixelPadding));
                            s = l - r, 0 < s && (c += s, r = l), s = c - m, 0 < s && (c = m, r -= s), e.series.length && r !== h.min && c !== h.max && (e.setExtremes(r, c, !1, !1, {trigger: "pan"}), i = !0), n[o] = a
                        }), i && n.redraw(!1), o(n.container, {cursor: "move"})
                    }
                }), l(v.prototype, {
                    select: function (t, e) {
                        var i = this, n = i.series, s = n.chart;
                        t = g(t, !i.selected), i.firePointEvent(t ? "select" : "unselect", {accumulate: e}, function () {
                            i.selected = i.options.selected = t, n.options.data[d(i, n.data)] = i.options, i.setState(t && "select"), e || r(s.getSelectedPoints(), function (t) {
                                t.selected && t !== i && (t.selected = t.options.selected = !1, n.options.data[d(t, n.data)] = t.options, t.setState(""), t.firePointEvent("unselect"))
                            })
                        })
                    }, onMouseOver: function (t) {
                        var e = this.series.chart, i = e.pointer;
                        t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e.inverted), i.runPointActions(t, this)
                    }, onMouseOut: function () {
                        var t = this.series.chart;
                        this.firePointEvent("mouseOut"), r(t.hoverPoints || [], function (t) {
                            t.setState()
                        }), t.hoverPoints = t.hoverPoint = null
                    }, importEvents: function () {
                        if (!this.hasImportedEvents) {
                            var e = this, n = f(e.series.options.point, e.options).events;
                            e.events = n, t.objectEach(n, function (t, n) {
                                i(e, n, t)
                            }), this.hasImportedEvents = !0
                        }
                    }, setState: function (t, e) {
                        var i, n = Math.floor(this.plotX), s = this.plotY, o = this.series,
                            r = o.options.states[t] || {}, h = a[o.type].marker && o.options.marker,
                            m = h && !1 === h.enabled, c = h && h.states && h.states[t] || {}, d = !1 === c.enabled,
                            p = o.stateMarkerGraphic, u = this.marker || {}, f = o.chart, v = o.halo,
                            y = h && o.markerAttribs;
                        t = t || "", t === this.state && !e || this.selected && "select" !== t || !1 === r.enabled || t && (d || m && !1 === c.enabled) || t && u.states && u.states[t] && !1 === u.states[t].enabled || (y && (i = o.markerAttribs(this, t)), this.graphic ? (this.state && this.graphic.removeClass("highcharts-point-" + this.state), t && this.graphic.addClass("highcharts-point-" + t), this.graphic.animate(o.pointAttribs(this, t), g(f.options.chart.animation, r.animation)), i && this.graphic.animate(i, g(f.options.chart.animation, c.animation, h.animation)), p && p.hide()) : (t && c && (h = u.symbol || o.symbol, p && p.currentSymbol !== h && (p = p.destroy()), p ? p[e ? "animate" : "attr"]({
                            x: i.x,
                            y: i.y
                        }) : h && (o.stateMarkerGraphic = p = f.renderer.symbol(h, i.x, i.y, i.width, i.height).add(o.markerGroup), p.currentSymbol = h), p && p.attr(o.pointAttribs(this, t))), p && (p[t && f.isInsidePlot(n, s, f.inverted) ? "show" : "hide"](), p.element.point = this)), (n = r.halo) && n.size ? (v || (o.halo = v = f.renderer.path().add((this.graphic || p).parentGroup)), v[e ? "animate" : "attr"]({d: this.haloPath(n.size)}), v.attr({"class": "highcharts-halo highcharts-color-" + g(this.colorIndex, o.colorIndex)}), v.point = this, v.attr(l({
                            fill: this.color || o.color,
                            "fill-opacity": n.opacity,
                            zIndex: -1
                        }, n.attributes))) : v && v.point && v.point.haloPath && v.animate({d: v.point.haloPath(0)}), this.state = t)
                    }, haloPath: function (t) {
                        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - t, this.plotY - t, 2 * t, 2 * t)
                    }
                }), l(y.prototype, {
                    onMouseOver: function () {
                        var t = this.chart, e = t.hoverSeries;
                        e && e !== this && e.onMouseOut(), this.options.events.mouseOver && h(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
                    }, onMouseOut: function () {
                        var t = this.options, e = this.chart, i = e.tooltip, n = e.hoverPoint;
                        e.hoverSeries = null, n && n.onMouseOut(), this && t.events.mouseOut && h(this, "mouseOut"), !i || this.stickyTracking || i.shared && !this.noSharedTooltip || i.hide(), this.setState()
                    }, setState: function (t) {
                        var e = this, i = e.options, n = e.graph, s = i.states, o = i.lineWidth, i = 0;
                        if (t = t || "", e.state !== t && (r([e.group, e.markerGroup, e.dataLabelsGroup], function (i) {
                                i && (e.state && i.removeClass("highcharts-series-" + e.state), t && i.addClass("highcharts-series-" + t))
                            }), e.state = t, !s[t] || !1 !== s[t].enabled) && (t && (o = s[t].lineWidth || o + (s[t].lineWidthPlus || 0)), n && !n.dashstyle)) for (o = {"stroke-width": o}, n.animate(o, g(e.chart.options.chart.animation, s[t] && s[t].animation)); e["zone-graph-" + i];) e["zone-graph-" + i].attr(o), i += 1
                    }, setVisible: function (t, e) {
                        var i, n = this, s = n.chart, o = n.legendItem, a = s.options.chart.ignoreHiddenSeries,
                            l = n.visible;
                        i = (n.visible = t = n.options.visible = n.userOptions.visible = void 0 === t ? !l : t) ? "show" : "hide", r(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function (t) {
                            n[t] && n[t][i]()
                        }), s.hoverSeries !== n && (s.hoverPoint && s.hoverPoint.series) !== n || n.onMouseOut(), o && s.legend.colorizeItem(n, t), n.isDirty = !0, n.options.stacking && r(s.series, function (t) {
                            t.options.stacking && t.visible && (t.isDirty = !0)
                        }), r(n.linkedSeries, function (e) {
                            e.setVisible(t, !1)
                        }), a && (s.isDirtyBox = !0), !1 !== e && s.redraw(), h(n, i)
                    }, show: function () {
                        this.setVisible(!0)
                    }, hide: function () {
                        this.setVisible(!1)
                    }, select: function (t) {
                        this.selected = t = void 0 === t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), h(this, t ? "select" : "unselect")
                    }, drawTracker: e.drawTrackerGraph
                })
            }(t), function (t) {
                var e = t.Chart, i = t.each, n = t.inArray, s = t.isArray, m = t.isObject, o = t.pick, a = t.splat;
                e.prototype.setResponsive = function (e) {
                    var n = this.options.responsive, m = [], s = this.currentResponsive;
                    n && n.rules && i(n.rules, function (i) {
                        void 0 === i._id && (i._id = t.uniqueKey()), this.matchResponsiveRule(i, m, e)
                    }, this);
                    var o = t.merge.apply(0, t.map(m, function (e) {
                        return t.find(n.rules, function (t) {
                            return t._id === e
                        }).chartOptions
                    })), m = m.toString() || void 0;
                    m !== (s && s.ruleIds) && (s && this.update(s.undoOptions, e), m ? (this.currentResponsive = {
                        ruleIds: m,
                        mergedOptions: o,
                        undoOptions: this.currentOptions(o)
                    }, this.update(o, e)) : this.currentResponsive = void 0)
                }, e.prototype.matchResponsiveRule = function (t, e) {
                    var m = t.condition;
                    (m.callback || function () {
                        return this.chartWidth <= o(m.maxWidth, Number.MAX_VALUE) && this.chartHeight <= o(m.maxHeight, Number.MAX_VALUE) && this.chartWidth >= o(m.minWidth, 0) && this.chartHeight >= o(m.minHeight, 0)
                    }).call(this) && e.push(t._id)
                }, e.prototype.currentOptions = function (e) {
                    function i(e, o, r, l) {
                        var h;
                        t.objectEach(e, function (t, c) {
                            if (!l && -1 < n(c, ["series", "xAxis", "yAxis"])) for (e[c] = a(e[c]), r[c] = [], h = 0; h < e[c].length; h++) o[c][h] && (r[c][h] = {}, i(t[h], o[c][h], r[c][h], l + 1)); else m(t) ? (r[c] = s(t) ? [] : {}, i(t, o[c] || {}, r[c], l + 1)) : r[c] = o[c] || null
                        })
                    }

                    var o = {};
                    return i(e, this.options, o, 0), o
                }
            }(t), t
        })
    }, 677: function (t, e, i) {
        t.exports = i.p + "play-icon-red_vjua6eU.png"
    }, 951: 230, 1007: function (t, e, i) {
        (function (e, $, n) {
            'use strict';
            i(951);
            var s = window.pageConfig, o = (s.staticUrl, e.videoBtnImg), a = e.videoPanaromaBtnImg, r = !0,
                l = function (t, e) {
                    var i = this;
                    i.__container = t;
                    var n = {
                        imgCss: '.house-img',
                        showCount: 1,
                        isLoop: !1,
                        sumCount: 0,
                        items: null,
                        index: 0,
                        showVideo: !1,
                        showBtn: !1,
                        showPageTag: !1,
                        itemTpl: '',
                        successCallback: $.noop,
                        errorCallback: $.noop,
                        clickCallback: $.noop
                    };
                    i.__options = $.extend({}, n, e), this.__base = {
                        baseWidth: null,
                        marginLeft: null,
                        total: null,
                        totalPage: null,
                        visWidth: null
                    }, i.__init(t, e)
                };
            l.prototype = {
                __container: null, __options: null, __init: function (t, e) {
                    return this.__events(), this.__options.items && this.__render(this.__options.items), this
                }, __events: function () {
                    var t = this, e = t.__container, i = t.__options, n = i.showCount, s = i.showVideo, o = t.__base;
                    e.on('click', '.pic-left', function () {
                        var a = $(this);
                        t.cntMoveVal(a);
                        var l = a.parent().find('.pic-slide'), h = parseInt(l.css('left').split('px')[0], 10);
                        if (!(i.sumCount <= n || !i.isLoop && 0 == h) && (i.sumCount > n && e.find('.pic-right').removeClass('hide'), r)) {
                            r = !1, $('#youkuPlayer').hide();
                            var c = o.visWidth;
                            0 == h && (h = -c * (o.totalPage - 1), l.css('left', h + 'px'));
                            var d = Math.floor(-h / c) + 1;
                            l.animate({left: h + c > 0 ? 0 : h + c + 'px'}, "normal", function () {
                                h + c == 0 && s && '' != $('#youkuPlayer').html() && $('#youkuPlayer').show(), i.showPageTag && e.find('.page-tag').find('.slide-cur-page').html(d - 1), r = !0
                            })
                        }
                    }), e.on('click', '.pic-right', function () {
                        var s = $(this);
                        t.cntMoveVal(s);
                        var a = s.parent().find('.pic-slide');
                        $('#youkuPlayer').hide();
                        var l = parseInt(a.css('left').split('px')[0], 10), h = o.visWidth, c = i.sumCount,
                            d = Math.floor(-l / h) + 1;
                        if (d >= o.totalPage - 1 ? e.find('.pic-right').addClass('hide') : e.find('.pic-right').removeClass('hide'), !(c <= n || !i.isLoop && d == o.totalPage) && r) {
                            r = !1;
                            var p = a.width(), u = d === o.totalPage - 1 ? h - p : l - h;
                            a.animate({left: u + 'px'}, "normal", function () {
                                i.isLoop && d == o.totalPage - 1 ? (a.css('left', 0), i.showPageTag && e.find('.page-tag').find('.slide-cur-page').html(1)) : i.showPageTag && e.find('.page-tag').find('.slide-cur-page').html(d + 1), r = !0
                            })
                        }
                    }), e.on('click', '.house-a', function () {
                        var e = i.clickCallback;
                        e && e(), $(this).find('.videoBtn').length && t.showPlayer()
                    })
                }, __render: function (t) {
                    var i = this, s = i.__options, r = i.__container, l = i.__base, u = s.showCount, f = s.index;
                    s.sumCount = t.length, s.itemTpl && (p = s.itemTpl);
                    var g = n.draw(p, {data: t, defaulfHouseImg: e.loadingImg, videoBtnImg: o, paraVideoBtn: a});
                    r.html(c);
                    var v = r.find('.pic-slide');
                    v.html(g);
                    var y = v.find('.slide-item');
                    if (t.length <= u && !s.showBtn && (r.find('.pic-left').addClass('hide'), r.find('.pic-right').addClass('hide')), s.isLoop && t.length > u) {
                        var x = t.length % u;
                        if (0 != x) {
                            for (var b = '', k = 0; k < u - x; k++) b += '<li class="slide-item"></li>';
                            v.append(b)
                        }
                        y.filter(':lt(' + u + ')').clone().appendTo(v)
                    }
                    var w = y.first(), M = w.outerWidth(),
                        S = l.marginLeft = w && w.css('margin-left') ? parseInt(w.css('margin-left').split('px')[0], 10) : 0,
                        C = l.total = v.find('.slide-item').length;
                    l.baseWidth = M += S, l.visWidth = M * u;
                    var T = C / u;
                    l.totalPage = T == Math.ceil(T) ? T : Math.ceil(T), w.addClass('ml0'), v.width(M * C - S + 2 * C);
                    var A = Math.floor(f / u) + 1;
                    v.css('left', -(A - 1) * l.visWidth);
                    if (r.find(s.imgCss).each(function () {
                            e.changeSrc($(this))
                        }), s.showPageTag) {
                        r.append(d);
                        var P = r.find('.page-tag'), L = s.sumCount / u;
                        L = L == Math.ceil(L) ? L : Math.ceil(L), P.find('.slide-cur-page').html(A), P.find('.slide-total-page').html(L), P.removeClass('hide')
                    }
                    s.showVideo && (r.prepend(h), 0 == f && i.showPlayer())
                }, showPlayer: function () {
                    var t = this, i = t.__options, n = t.__container, s = n.find('.videoBtn');
                    if (i.showVideo && s.length) {
                        var o = 'youkuPlayer';
                        $('#' + o).show(), e.addYoukuPlayer(o, s.data('code'))
                    }
                }, cntMoveVal: function (t) {
                    var e = this, i = e.__options, n = i.showCount, s = e.__base,
                        o = t.closest('.pic-slide-wrap').find('.pic-wrap');
                    if (o.width() < 960) {
                        640 == o.width() ? (s.visWidth = 640, s.marginLeft = 0) : (s.visWidth = 835, s.marginLeft = 7), s.total = o.find('li').length;
                        var a = s.total / n;
                        s.totalPage = a == Math.ceil(a) ? a : Math.ceil(a)
                    }
                }, getHtml: function () {
                    return this.__container.html()
                }
            };
            var h = '<div id="youkuPlayer"></div>',
                c = "<div class=\"pic-slide-wrap\">   <em class=\"pic-left unselectable iconfont\">&#xd620;</em>   <em class=\"pic-right unselectable iconfont\">&#xd628;</em>   <div class=\"pic-wrap\">       <ul class=\"pic-slide clearfix\"></ul>   </div></div>",
                d = '<div class="page-tag hide"><i class="slide-cur-page"></i>/<i class="slide-total-page"></i></div>',
                p = "{{each data as item i}}   <li class=\"slide-item\">       <a {{if item.houseDetailUrl}}href=\"/{{item.houseDetailUrl}}\"{{/if}} data-code=\"{{item.houseCode}}\" data-title=\"{{data.title}}\" target=\"_blank\" class=\"house-a\">           <img src=\"" + e.loadingImg + "\"               data-src=\"{{item.defaultPic}}\" alt=\"{{item.estateName}}\" class=\"house-img\" data-has-webp= \"1\" data-need-resize = \"auto\">           {{if item.houseVideo && item.houseVideo.videoType == 0}}               <i class=\"videoBtn\">                   <img src=\"" + o + "\"></i>           {{/if}}           {{if item.houseVideo && item.houseVideo.videoType == 1}}               <i class=\"videoBtn para-video-btn\">                   <img src=\"" + a + "\"></i>           {{/if}}       </a>   </li>{{/each}}";
            t.exports = l
        }).call(e, i(225), i(1), i(226))
    }, 1137: function (t, e, i) {
        (function (n, s, $, o, a) {
            'use strict';

            function r(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function l(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function c(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function d(t) {
                n.render(s.createElement(k, null), t)
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var p = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }();
            e["default"] = d;
            var u = i(11), f = i(251), g = r(f), v = i(1138), y = r(v), x = i(1139), b = i(1007);
            i(1140);
            var k = function (t) {
                function e(t) {
                    l(this, e);
                    var i = h(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return i.type = 'default', 0 !== pageConfig.cookieUserId && (i.type = 'personal'), i
                }

                return c(e, t), p(e, [{
                    key: 'componentDidMount', value: function () {
                        this.loadData()
                    }
                }, {
                    key: 'loadData', value: function () {
                        var t = this;
                        $.ajax({
                            url: '/getRecommendHouseList.action',
                            data: {},
                            dataType: 'json',
                            success: function (e) {
                                e && e.data.length > 0 ? (new b($(t.refBox), {
                                    showCount: 4,
                                    items: e.data,
                                    isLoop: !0,
                                    itemTpl: y["default"]
                                }), x()) : t.renderError()
                            },
                            error: function () {
                                t.renderError()
                            }
                        })
                    }
                }, {
                    key: 'renderError', value: function () {
                        $('.index-housetopic').remove()
                    }
                }, {
                    key: 'render', value: function () {
                        var t = this, e = this.type;
                        return s.createElement('div', {
                            id: 'house-topic',
                            className: 'house-topic index-inner',
                            'data-type': e
                        }, s.createElement('div', {className: 'index-like-t clearfix'}, s.createElement('h5', {
                            className: 'index-like-h5'
                        }, 'default' === e ? '热门好房' : '我的专属房源'), s.createElement('p', {className: 'index-like-tr'}, 'default' === e ? '热门好房随你挑' : '精选好房，适合你的才是最好的')), s.createElement('div', {className: 'index-like-con'}, s.createElement('div', {
                            className: 'index-like-box',
                            ref: function (e) {
                                t.refBox = e
                            }
                        }, s.createElement('div', {className: 'pic-slide-wrap'}, s.createElement('div', {className: 'pic-wrap'}, s.createElement('ul', {className: 'pic-slide clearfix'}, o.range(4).map(function (t) {
                            return s.createElement('li', {
                                className: (0, g["default"])('slide-item', {'ml0': 0 === t}),
                                key: t
                            }, s.createElement('a', {
                                href: 'javascript:void(0);',
                                className: 'house-a'
                            }, s.createElement('div', {className: 'imgbox'}, s.createElement('img', {
                                src: a.loadingImg,
                                alt: ''
                            }))))
                        })))))))
                    }
                }]), e
            }(u.Component);
            t.exports = e['default']
        }).call(e, i(163), i(11), i(1), i(227), i(225))
    }, 1138: function (t, e) {
        t.exports = "{{each data as item i}}\n<li class=\"slide-item\">\n    <a href=\"/{{item.houseDetailUrl}}\" class=\"house-a\" data-code=\"{{item.houseCode}}\" data-remid=\"{{item.remId}}\" data-houseid=\"{{item.houseId}}\" alt=\"{{item.estateName}}\"  target=\"_blank\">\n        <div class=\"imgbox\">\n            <img src=\"{{defaulfHouseImg}}\" data-src=\"{{item.defaultPic}}\" alt=\"{{item.estateName}}\" class=\"house-img\" data-need-resize = \"auto\" data-has-webp= \"1\">\n            {{if item.houseVideo}}\n                {{if item.houseVideo.videoType == 0}}\n                <i class=\"video-btn\">\n                    <img src=\"{{videoBtnImg}}\">\n                </i>\n                {{/if}}\n                {{if item.houseVideo.videoType == 1}}\n                <i class=\"panaroma-play-icon-lg\"></i>\n                {{/if}}\n            {{/if}}\n            {{#item | houseDJLabel}}\n        </div>\n        <div class=\"title-wrap clearfix\">\n            <p class=\"title fs-nowrap\" title=\"{{item.estateName}}\">{{item.estateName}}</p>\n            <span class=\"money\"><strong>{{item.price}}</strong>{{if item.houseType==1}}元/月{{else}}万{{/if}}</span>\n        </div>\n        <div class=\"des clearfix\">\n            <p class=\"des-l\">{{item.floorTypeOnTitle}} {{item.bedroomSum}}室 {{item.area}}平 {{item.orientationStr && ('朝' + item.orientationStr)}}</p>\n            {{if item.houseType==1}}\n            <p class=\"des-r\">{{item.decorateTypeStr}}</p>\n            {{else}}\n            <p class=\"des-r\">{{item.townName}}</p>\n            {{/if}}\n        </div>\n        <div class=\"des-b\">{{item.tagList && item.tagList.join('　')}}</div>\n    </a>\n</li>\n{{/each}}\n"
    }, 1139: function (t, e, i) {
        (function ($) {
            'use strict';
            var e = !1, i = function n() {
                if (e) return void $(window).off('scroll', n);
                var t = $(window), i = $('#house-topic');
                if (0 !== i.length) {
                    var s = t.scrollTop();
                    i.offset().top - t.height() - s <= -400 && ($.jps.trigger('log', {
                        type: 'clickEvent',
                        act_k: 20170417001,
                        act_v: {type: i.data('type')}
                    }), e = !0)
                }
            };
            t.exports = function () {
                $(window).on('scroll', i), i();
                var t = $('#house-topic');
                t.on('click', '.house-a', function () {
                    var e = $(this);
                    $.jps.trigger('log', {
                        type: 'clickEvent',
                        act_k: 20170417002,
                        act_v: {type: t.data('type'), hos: e.data('houseid')}
                    })
                }), t.on('click', '.pic-slide-wrap em', function () {
                    var t = $(this);
                    $.jps.trigger('log', {
                        type: 'clickEvent',
                        act_k: 20170417003,
                        act_v: {type: t.hasClass('pic-left') ? 'left' : 'right'}
                    })
                })
            }
        }).call(e, i(1))
    }, 1140: 230, 1142: 230, 1156: function (t, e, i) {
        (function ($) {
            'use strict';

            function e(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            var n = i(1157), s = e(n), o = i(299), a = e(o), r = i(640), l = (e(r), window.pageConfig),
                h = (l.staticUrl, i(1007)), c = function (t, e) {
                    var i = this;
                    i.__init(t, e)
                };
            c.prototype = {
                __container: null, __options: null, API: '/web/homepage.action', __init: function (t, e) {
                    var i = this;
                    i.__container = t;
                    var n = {imgCss: '', sum: '', successCallback: $.noop, errorCallback: $.noop, log: {}};
                    i.__options = $.extend({}, n, e), i.__getData(t.find('.index-like-tab.active').data('housetype')), i.__events()
                }, __events: function () {
                    var t = this, e = t.__container;
                    e.on('click', '.index-like-tab', function () {
                        var i = $(this), n = i.data('housetype'), s = null;
                        1 == n ? s = e.find('.index-like-box-chuzu') : 2 == n ? s = e.find('.index-like-box-sale') : 4 == n && (s = e.find('.index-like-box-brandrent')), i.hasClass('active') || (e.find('.index-like-tab').removeClass('active'), i.addClass('active'), s.data('size') ? (t.hideLodeWrp(), s.show()) : t.__getData(n))
                    })
                }, hideLodeWrp: function () {
                    var t = this, e = t.__container;
                    e.find('.index-like-box-load').remove(), e.find('.index-like-box').hide()
                }, renderError: function () {
                    this.__container.remove()
                }, __getData: function (t) {
                    var e = this, i = e.__container;
                    if (4 == t) return void $.ajax({
                        url: '/brandRent/recommend.action',
                        data: {type: 1, pageSize: 20},
                        success: function (i) {
                            1 == i.status && i.data && i.data.houseList ? e.__render(i.data.houseList, t) : e.renderError()
                        },
                        error: function () {
                            e.renderError()
                        }
                    });
                    var n = '';
                    try {
                        n = l.visitor.user.uuid
                    } catch (s) {
                    }
                    var o = {"houseCode": "", "houseState": t, "size": 20, "pf": "pc-web"};
                    o.provinceId = i.data('provinceid'), o.uuid = n || '';
                    var a = 0;
                    try {
                        a = l.visitor.user.userId
                    } catch (s) {
                    }
                    o.userid = a || 0, $.ajax({
                        url: l.recommendUrl + e.API,
                        data: {"param": JSON.stringify(o)},
                        dataType: 'jsonp',
                        jsonp: 'jsoncallback',
                        success: function (i) {
                            i && i.result ? ($('.index-like-tab[data-housetype="' + t + '"]').data('id', i.id), i.result.title = i.title, l.recommendId = i.id, e.__render(i.result, t)) : e.renderError()
                        },
                        error: function () {
                            e.renderError()
                        }
                    })
                }, __render: function (t, e) {
                    var i = this, n = i.__container, o = null;
                    1 == e ? o = n.find('.index-like-box-chuzu') : 2 == e ? o = n.find('.index-like-box-sale') : 4 == e && (o = n.find('.index-like-box-brandrent')), o.data('size', t.length), t.type = e, t.length && new h(o, {
                        showCount: 4,
                        items: t,
                        isLoop: !0,
                        itemTpl: s["default"]
                    }), o.data('size') > 19 ? (i.hideLodeWrp(), o.show()) : i.renderError()
                }
            };
            var d = !1, p = function () {
                d || (new c($('.index-like'), {
                    imgCss: '.house-img', sum: '4', successCallback: function (t) {
                        t.siblings(".dj").show()
                    }
                }), d = !0)
            };
            a["default"].onReady(p), t.exports = c
        }).call(e, i(1))
    }, 1157: function (t, e) {
        t.exports = "{{if data.type != 4}}\n    {{each data as item i}}\n    <li class=\"slide-item\">\n        <a href=\"/{{item.houseDetailUrl}}\" class=\"house-a\" data-code=\"{{item.houseCode}}\" data-remid=\"{{item.remid}}\" alt=\"{{item.estateName}}\" target=\"_blank\">\n            <div class=\"imgbox\">\n                <img src=\"{{defaulfHouseImg}}\" data-src=\"{{item.picUrl}}\" alt=\"{{item.estateName}}\" class=\"house-img\" data-need-resize=\"auto\" data-has-webp=\"1\">\n                {{if item.houseVideo}}\n                    {{if item.houseVideo.videoType == 0}}\n                    <i class=\"video-btn\">\n                                <img src=\"{{videoBtnImg}}\">\n                    </i>\n                    {{/if}}\n                    {{if item.houseVideo.videoType == 1}}\n                    <i class=\"panaroma-play-icon-lg\"></i>\n                    {{/if}}\n                {{/if}}\n                <div class=\"remDeclare\">\n                    <div class=\"remDeclare-text\">{{item.remDeclare}}</div>\n                    <div class=\"remDeclare-bg\"></div>\n                </div>\n                {{#item | houseDJLabel}}\n            </div>\n            <div class=\"title-wrap clearfix\">\n                <p class=\"title fs-nowrap\" title=\"{{item.estateName}}\">{{item.estateName}}</p>\n                <span class=\"money\"><strong>{{item.price}}</strong>{{if item.houseType==1}}元/月{{else}}万{{/if}}</span>\n            </div>\n            <div class=\"des clearfix\">\n                <p class=\"des-l\">{{item.bedroomSum}}室{{item.livingRoomSum}}厅{{item.wcSum}}卫 · {{item.area}} m²</p>\n                {{if item.houseType==1}}\n                <p class=\"des-r\">{{item.decorateTypeStr}}</p>\n                {{else}}\n                <p class=\"des-r\">{{item.unitPrice}}</p>\n                {{/if}}\n            </div>\n        </a>\n    </li>\n    {{/each}}\n{{else}}\n\n    {{each data as item i}}\n    <li class=\"slide-item recommend-item\" key={{item.houseCode}}>\n        <a href=\"{{item.houseDetailUrl}}\" data-houseid={{item.houseId}} target=\"_blank\" class=\"wrap-a\">\n            <div class=\"imgbox\">\n                <img src=\"{{defaulfHouseImg}}\" data-src=\"{{item.defaultPic}}\" alt=\"{{item.estateName}}\" class=\"house-img\" data-need-resize=\"auto\" data-has-webp=\"1\">\n                <!--<Img loadImg={global.loadingImg} realSrc={house.defaultPic} class=\"recommend-img\" needResize={true} />-->\n                <div class=\"mask-tag-w\">\n                    {{if item.rentType == 0}}\n                    <i class=\"mask-tag blue\">\n                    {{else}}\n                    <i class=\"mask-tag green\">\n                    {{/if}}\n\n                        品牌\n                        {{if item.rentType == 0}}\n                        整租\n                        {{else}}\n                        合租\n                        {{/if}}\n                    </i>\n                </div>\n            </div>\n            <div class=\"title-wrap clearfix\">\n                <p class=\"title fs-nowrap\">{{item.estateName}}</p>\n                <span class=\"money\"><strong>{{item.rentPrice}}</strong>元/月</span>\n            </div>\n            <div class=\"des clearfix\">\n                {{if item.rentType==0 }}\n                <p class=\"des-l\">{{item.bedroomSum}}室{{item.livingRoomSum}}厅{{item.wcSum}}卫 · {{item.spaceAreaStr}} m²</p>\n                {{else}}\n                <p class=\"des-l\">{{item.bedroomSum}}居室 · {{item.roomNo}} · {{item.spaceAreaStr}} m²</p>\n                {{/if}}\n                <span class=\"des-r\">\n                        {{item.cityName}}\n                    <!-- - ${{item.townName}}-->\n                    </span>\n            </div>\n        </a>\n    </li>\n    {{/each}}\n\n{{/if}}"
    }, 1158: function (t, e, i) {
        (function ($) {
            'use strict';
            $('.kw-input').blur(function () {
                var t = $(this), e = t.val();
                '' != e && $.jps.trigger('log', {
                    type: 'clickEvent',
                    act_k: 241,
                    act_v: e,
                    ht: $('form.mod-search').data('housetype')
                })
            }), $('.header-left .nav-item[data-log="newhouse"]').click(function () {
                $.jps.trigger('log', {type: 'clickEvent', act_k: 151, act_v: 'newhouse'})
            }), $('.js-sale-all').click(function () {
                $.jps.trigger('log', {type: 'clickEvent', act_k: 690, act_v: 'homepage'})
            }), $(".search-tab").on('click', function () {
                var t = $(this).data('housetype');
                3 == t && $.jps.trigger('log', {type: 'clickEvent', act_k: 720, act_v: 2})
            }), $('.js-newhouse-item a').click(function () {
                $.jps.trigger('log', {type: 'clickEvent', act_k: 722, vtp: 3, act_v: $(this).data('code')})
            }), $('.js-newhouse-more').click(function () {
                $.jps.trigger('log', {type: 'clickEvent', act_k: 723, act_v: 'moreNewHouse'})
            }), $(".search-tab.newhouse").click(function () {
                $.jps.trigger('log', {type: 'clickEvent', act_k: 721, act_v: 'homepage', vtp: 3})
            }), $(".commission-a,.promise-detail").click(function () {
                $.jps.trigger('log', {type: 'clickEvent', act_k: 831, act_v: 'sxyzc_homepage'})
            }), $(".hot-house-link").click(function () {
                $.jps.trigger('log', {type: 'clickEvent', act_k: 832, act_v: $(this).data('housecode')})
            }), $('.index-like').on('click', '.house-a', function () {
                var t = $(this);
                $.jps.trigger('log', {
                    type: 'clickEvent',
                    act_k: 22,
                    act_v: JSON.stringify({id: pageConfig.recommendId, cid: t.data('remid')})
                })
            });
            var t = !0, e = !0;
            $(window).on('scroll', function () {
                var i = $(this).scrollTop(), n = $(this).height();
                if ($('.index-rec').length > 0 && $('.index-rec').offset().top - n - i <= -400 && t) {
                    var s = [];
                    $('.js-newhouse-item .wrap-a').each(function () {
                        s.push($(this).data('code'))
                    }), $.jps.trigger('log', {type: 'clickEvent', act_k: 721, vtp: 3, act_v: s.join(',')}), t = !1
                }
                if ($('.index-like').length && $('.index-like').offset().top - n - i <= -400 && e) {
                    e = !1;
                    var o = setInterval(function () {
                        var t = $('.index-like-tab[data-housetype="2"]').data('id');
                        t && ($.jps.trigger('log', {type: 'clickEvent', act_k: 20, act_v: t}), clearInterval(o))
                    }, 1e3)
                }
            }), $('.index-like-tab[data-housetype="1"]').on('click', function () {
                var t = setInterval(function () {
                    var e = $('.index-like-tab[data-housetype="1"]').data('id');
                    e && ($.jps.trigger('log', {type: 'clickEvent', act_k: 20, act_v: e}), clearInterval(t))
                }, 1e3)
            }), $(".point-link-cc").on('click', function () {
                var t = $(this).data("cid"), e = $(this).data("pos"), i = {wid: t, index: e};
                $.jps.trigger('log', {type: 'clickEvent', act_k: 201611141, act_v: i})
            }), $(".point-link-gf").on("click", function () {
                var t = $(this).data("cid"), e = $(this).data("pos"), i = {wid: t, index: e};
                $.jps.trigger('log', {type: 'clickEvent', act_k: 201611142, act_v: i})
            })
        }).call(e, i(1))
    }, 1159: function (t, e, i) {
        (function ($, t) {
            'use strict';

            function e(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            var n = i(299), s = e(n);
            i(1160);
            var o = !0;
            s["default"].onReady(function () {
                $('.saleBtn,.rentBtn,.rentOnlyBtn,.sellOnlyBtn,.index-sell-btn,.index-rent-btn').on('click', function () {
                    if (o) {
                        var e = $(this).data('url'), i = $(this).data('ht');
                        2 == i ? $.jps.trigger('log', {
                            type: 'clickEvent',
                            act_k: 210,
                            act_v: 'sale'
                        }) : 1 == i && $.jps.trigger('log', {
                            type: 'clickEvent',
                            act_k: 210,
                            act_v: 'rent'
                        }), pageConfig.visitor && pageConfig.visitor.user && pageConfig.visitor.user.userId > 0 ? (o = !1, $.ajax({
                            url: '/delegate/checkMobile.action',
                            cache: !1,
                            type: 'get',
                            dataType: 'json',
                            data: {mobile: pageConfig.visitor.user.fulluname, houseType: i},
                            success: function (i) {
                                1 == i.code ? location.href = e : t.alert(i.message), o = !0
                            }
                        })) : location.href = e
                    }
                })
            })
        }).call(e, i(1), i(229))
    }, 1160: 230
});