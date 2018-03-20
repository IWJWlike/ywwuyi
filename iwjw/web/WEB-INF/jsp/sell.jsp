<%--
  Created by IntelliJ IDEA.
  User: kgc
  Date: 2018/3/16
  Time: 13:55
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/jquery-2.1.1.min.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>爱屋吉屋-买房先看视频，「真实省力」的房产中介!</title>
    <meta name="keywords" content="爱屋吉屋,二手房,租房,房屋买卖,房产中介">
    <meta name="description" content="爱屋吉屋，互联网房产中介!找二手房、新房、租房，透明中介、不加价、不独家、过户专业。四险一支持交易保障，马上约、实地看、快成交！">
    <link rel="apple-touch-icon-precomposed" href="${pageContext.request.contextPath}/statics/images/logo_wx.png">
    <link rel="shortcut icon" href="https://files.iwjw.com/icon/favicon.ico">
    <meta name="baidu-site-verification" content="rO1Bqg66kn">
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/statics/js/jquery.easydrag.handler.beta2.js"></script>
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/Scroll.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/jquery.slider.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/common_72.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/index_74.css">

    <link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/index_css1/index_shuffling.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/index_css1/bootstrap.min.css">

    <link rel="canonical" href="https://www.iwjw.com/">

    <script src="${pageContext.request.contextPath}/statics/js/hm.js" async=""></script>
    <script type="text/javascript" async="" src="${pageContext.request.contextPath}/statics/js/vds.js"></script>

    <%--<script src="http://libs.useso.com/js/jquery/2.1.1/jquery.min.js" type="text/javascript"></script>--%>
    <script src="${pageContext.request.contextPath}/statics/bootstrap-3.3.7-dist/js/bootstrap.min.js"/>
    <%--<script src="../../statics/js/index_js/index_shuffling.js"></script>--%>


    <script>
        window.location = "${pageContext.request.contextPath}/indexController/goHomePage";
    </script>
    <script>
        ;(function () {
            if (location.hostname.indexOf('iwjw.com') != -1 && location.hostname.indexOf('pcbeta') == -1 && location.protocol == 'http:') {
                location.href = location.href.replace('http://', 'https://')
            }
        })()
        window.pageConfig = {
            siteUrl: "//www.iwjw.com",
            mobileSiteUrl: '//m.iwjw.com',
            mobileSiteUrlHasProtocol: 'https://m.iwjw.com',
            selectCity: false,
            map: {
                province: [{"pname": "上海", "pid": 2, "pinyin": "shanghai"}, {
                    "pname": "北京",
                    "pid": 12438,
                    "pinyin": "beijing"
                }, {"pname": "广州", "pid": 40000, "pinyin": "guangzhou"}, {
                    "pname": "深圳",
                    "pid": 56000,
                    "pinyin": "shenzhen"
                }, {"pname": "杭州", "pid": 71049, "pinyin": "hangzhou"}, {
                    "pname": "天津",
                    "pid": 71099,
                    "pinyin": "tianjin"
                }, {"pname": "南京", "pid": 86724, "pinyin": "nanjing"}, {
                    "pname": "武汉",
                    "pid": 86725,
                    "pinyin": "wuhan"
                }, {"pname": "成都", "pid": 98289, "pinyin": "chengdu"}, {
                    "pname": "重庆",
                    "pid": 98290,
                    "pinyin": "chongqing"
                }]
            },
            datacollectUrl: '//plog.iwjw.com/dataCollect/',
            staticUrl: '' || '//resource.iwjw.com/iwjw-pc/',
            staticTag: 'index',
            recommendUrl: '//recommend.iwjw.com',
            videoSerUrl: '//video.iwjw.com/prev/pc/play.html',
            flag: '1',
            provinceId: '40000',
            ht: '2',
            cookieUserId: 0,
            signin: '',
            //全局增加是否采用极验验证标志，1-采用，0-不采用
            geetestFlag: '1',
            timestamp: '1520660278623',
            canSellShow: 'true',
            canRentShow: 'true'
        };
        var _hmt = _hmt || [];
    </script>


    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="Cache-Control" content="no-transform"/>
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <meta http-equiv="Content-language" content="zh-CN"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="applicable-device" content="pc">
    <link rel="alternate" media="only screen and (max-width: 640px)" href="javascript:void(0)">
    <meta name="mobile-agent" content="format=html5;url=https://m.lianjia.com/gz/yezhu/maifang/">
    <script>
        ljConf = {
            city_id: '440100',
            city_abbr: 'gz',
            city_name: '广州',
            channel: 'yezhu',
            page: 'yezhu_maifang',
            pageConfig: {
                "ajaxroot": "\/\/ajax.api.lianjia.com\/",
                "imAppid": "LIANJIA_WEB_20160624",
                "imAppkey": "6dfdcee27d78b1107fceeca55d80b7bd"
            },
            feroot: '//s1.ljcdn.com/feroot/',
            ucid: '',
            cdn: '0',
        };
    </script>

    <!-- 2017.11.8 市场需求加上新的统计 -->
    <!-- 2017.7.18 开放全国 -->
    <script>
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?9152f8221cb6243a53c83b956842be8a";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
    <title>我要卖房|广州业主个人委托卖房（广州爱屋吉屋网）</title>
    <meta name="description"
          content="广州爱屋吉屋网卖房频道,接受业主委托卖房,提供个人卖房的快捷渠道,利用爱屋吉屋网的线下资源,为您提供卖房速销承诺,同时利用爱屋吉屋交易托管平台,卖房更加安全,放心.卖房就上爱屋吉屋网."/>
    <meta name="keywords" content="广州业主卖房,广州个人卖房,我要卖房,广州委托卖房"/>
    <link href="/favicon.ico" type="image/x-icon" rel=icon>
    <link href="/favicon.ico" type="image/x-icon" rel="shortcut icon">
    <link rel="stylesheet" href="../../statics/css/common.css">
    <link rel="stylesheet" href="../../statics/css/index.css">
    <!--[if lt IE 9]>
    <script type="text/javascript" src="../../statics/js/Sell_js/html5.js"></script><![endif]-->
    <script>
        function RESIZEIMG(b, k, l, m) {
            var c = b.parentNode;
            var d = parseInt(c.offsetWidth) || k;
            var e = parseInt(c.offsetHeight) || l;
            var f = d / e;
            var g = b.naturalWidth || b.width;
            var h = b.naturalHeight || b.height;
            var i = g / h;
            var j = "width";
            if (f < i) {
                j = "height";
                try {
                    b.style["left"] = "-" + parseInt(Math.abs((d - (g * e / h)) / 2)) + "px"
                } catch (e) {
                }
            } else if (m) {
                try {
                    b.style["top"] = "-" + parseInt(Math.abs((e - (h * d / g)) / 2)) + "px"
                } catch (e) {
                }
            }
            ;
            b.style[j] = "100%";
        };
    </script>
    <script>
        var _czc = _czc || [];
        _czc.push(["_setAccount", "1254525948"]);
    </script>

    <script type="text/javascript">
        var _smq = _smq || [];
        _smq.push(['_setAccount', '41331c2', new Date()]);
        _smq.push(['_setDomainName', 'lianjia.com']);
        _smq.push(['pageview']);
        (function () {
            var sm = document.createElement('script');
            sm.type = 'text/javascript';
            sm.async = true;
            sm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdnmaster.com/sitemaster/collect.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(sm, s);
        })();
    </script>
</head>
<body>
<script>
    __STAT_LJ_CONF = {
        params: {
            ljweb_group: ['SEARCH', 'BIGDATA_PC'],
            ljweb_id: '',
            ljweb_mod: '',
            ljweb_bl: '',
            ljweb_el: '',
            ljweb_sl: '',
            ljweb_index: '',
            ljweb_value: '',
            ljweb_url: '',
            ljweb_ljref: (document.cookie.match(/(?:^| )ljref=([^;]*)(?:;|$)/) || ['', ''])[1],
            ljweb_sample: (document.cookie.match(/(?:^| )sample_traffic_test=([^;]*)(?:;|$)/) || ['', ''])[1],
            ljweb_ref: document.referrer,
            ljweb_cid: '440100',
            ljweb_channel: 'yezhu',
            ljweb_page: 'yezhu_maifang',
            ljweb_source: '',
            ljweb_stat_id: ''
        }
    };


    var UT = {
        send: function () {

        }
    };
    var LjUserTrack = {
        log: [],
        initInterval: false,
        intervalLog: function () {
            setTimeout(function () {
                if (window.$ULOG && $ULOG.send) {
                    for (var i = 0, l = LjUserTrack.log.length; i < l; i++) {
                        LjUserTrack.__send(LjUserTrack.log[i]);
                    }

                    for (var m = 0, n = LjUserTrack.logIds.length; m < n; m++) {
                        LjUserTrack.__sendId(LjUserTrack.logIds[m]);
                    }
                    for (var j = 0, k = LjUserTrack.logDatas.length; j < k; j++) {
                        LjUserTrack.__sendData(LjUserTrack.logDatas[j].id, LjUserTrack.logDatas[j].data);
                    }
                } else {
                    LjUserTrack.intervalLog();
                }
            }, 16.7);
        },
        _start_time: +new Date,
        logDatas: [],
        __sendData: function (id, data) {
            if (id && (typeof(data) == 'object')) {
                data.pid = (window.__UDL_CONFIG && window.__UDL_CONFIG.pid && window.__UDL_CONFIG.pid) || "lianjiaweb";
                data.key = window.location.href;
                window.$ULOG && $ULOG.send(id, data);
            }
        },
        sendData: function (id, data) {
            if (window.$ULOG && $ULOG.send) {
                LjUserTrack.__sendData(id, data);
            } else {
                LjUserTrack.logDatas.push({id: id, data: data});

                LjUserTrack.initInterval || (LjUserTrack.initInterval = true, LjUserTrack.intervalLog());

            }
        },
        __send: function (data) {
            var evt_id = data.evt_id || '10043';
            if ('evt_id' in data) {
                delete data.evt_id;
            }

            window.$ULOG && $ULOG.send(evt_id, {
                "pid": (window.__UDL_CONFIG && window.__UDL_CONFIG.pid && window.__UDL_CONFIG.pid) || "lianjiaweb",
                "key": window.location.href,
                "action": data
            });
        },
        logIds: [],
        __sendId: function (id) {
            id && window.$ULOG && window.$ULOG && $ULOG.send(id, {
                "pid": (window.__UDL_CONFIG && window.__UDL_CONFIG.pid && window.__UDL_CONFIG.pid) || "lianjiaweb",
                "key": window.location.href
            });
        },
        sendId: function (id) {
            if (window.$ULOG && $ULOG.send) {
                LjUserTrack.__sendId(id);
            } else {
                LjUserTrack.logIds.push(id);

                LjUserTrack.initInterval || (LjUserTrack.initInterval = true, LjUserTrack.intervalLog());

            }
        },
        send: function (data, el, config) {

            var utConf = __STAT_LJ_CONF;
            var params = config || utConf.params,
                win = window,
                j;

            data.groupIndex = data.ljweb_group || 0;

            if (params) {
                for (var d in params) {
                    if (params[d] !== j && data[d] === j) {
                        data[d] = params[d];
                    }
                }
            }

            if (el) {
                this.checkClick(el, data);
            }

            data.ljweb_group = params['ljweb_group'][data.groupIndex || 0];

            delete data.groupIndex;

            if (data.typ) {
                data.ljweb_bl = (data.ljweb_bl || '') + '_' + data.typ;
                delete data.typ;
            }

            if (window.$ULOG && $ULOG.send) {
                LjUserTrack.__send(data);
            } else {
                LjUserTrack.log.push(data);

                LjUserTrack.initInterval || (LjUserTrack.initInterval = true, LjUserTrack.intervalLog());

            }

        },
        checkClick: function (el, data) {

            var TAG_LINK = 'A';
            var href = '';
            var elParent = null;

            href = (el.tagName.toUpperCase() === TAG_LINK ? el.getAttribute("href", 2) : '');
            if (!href && (elParent = el.parentNode) && elParent.nodeType === 1) {
                href = (elParent.tagName.toUpperCase() === TAG_LINK ? elParent.getAttribute("href", 2) : '');
            }

            if (href) {
                data.ljweb_url = href;
            } else {
                data.ljweb_url = data.ljweb_url
                    || el.getAttribute("data-log_url")
                    || (elParent = el.parentNode || el).getAttribute("data-log_url")
                    || (
                        (elParent = elParent.parentNode || elParent)
                        && (elParent.nodeType === 1)
                        && elParent.getAttribute("data-log_url")
                    )
                    || "";
            }

            this.attr(el, data);

        },
        path: function () {

        },
        attr: function (el, data) {
            var modId = el.getAttribute("log-mod");
            var blAttr = el.getAttribute("data-bl");
            var elAttr = el.getAttribute("data-el");
            var slAttr = el.getAttribute("data-sl");
            var InAttr = el.getAttribute("data-log_index");
            var valAttr = el.getAttribute("data-log_value");
            var idAttr = el.getAttribute("data-log_id");
            var groupAttr = el.getAttribute("data-log_group");
            var sourceAttr = el.getAttribute("data-log_source");
            var statIdAttr = el.getAttribute("data-log_statId");
            var evtId = el.getAttribute("data-log_evtid");

            data.ljweb_bl = data.ljweb_bl || blAttr || '';
            data.ljweb_el = data.ljweb_el || elAttr || '';
            data.ljweb_sl = data.ljweb_sl || slAttr || '';
            data.ljweb_index = data.ljweb_index || InAttr || '';
            data.ljweb_value = data.ljweb_value || valAttr || '';
            data.ljweb_id = data.ljweb_id || idAttr || '';
            data.ljweb_source = data.ljweb_source || sourceAttr || '';
            data.ljweb_stat_id = data.ljweb_stat_id || statIdAttr || 0;
            data.groupIndex = data.groupIndex || groupAttr || 0;
            data.evt_id = data.evt_id || evtId || '';

            if (!modId) {
                if (el.parentNode && el.parentNode.nodeType === 1 && el.parentNode.tagName.toUpperCase() !== 'BODY') {
                    this.attr(el.parentNode, data);
                }
            } else {
                data.ljweb_mod = modId;
            }
        }
    };

    ;
    ;(function () {
        var isW3c = !!document.addEventListener;

        LjUserTrack.send({
            ljweb_mod: 'pv',
            ljweb_group: 1
        });

        /*window[isW3c ? 'addEventListener' : 'attachEvent'](
         (isW3c ? '': 'on') + 'beforeunload',
         function(e) {
         var _end_time = +new Date;
         UT.send({type: 'show', subtype: 'stay', time: (_end_time-UT._start_time)/1000});
         },
         false);*/
    })();


</script>

<%--<div class="banner">
    <div class="container">
        <ul class="channelList">
            <li><a href="javascript:void(0)">首页</a></li>
            <li class=""><a href="javascript:void(0)">二手房</a></li>
            <li class=""><a href="javascript:void(0)">新房</a></li>
            <li class=""><a href="javascript:void(0)">租房</a></li>
            <li rel="nofollow" class=""><a href="javascript:void(0)">旅居</a></li>
            <li class=""><a href="javascript:void(0)">海外</a></li>
            <li class=""><a href="javascript:void(0)">小区</a></li>
            <li class=""><a href="javascript:void(0)">经纪人</a></li>
            <li class=""><a href="javascript:void(0)">指南</a>
                <div class="childList"><a href="javascript:void(0)">问答</a><a
                        href="javascript:void(0)">百科</a></div>
            </li>
            <li class=""><a href="javascript:void(0)" target="_blank">工具</a></li>
            <li class=""><a href="javascript:void(0)" target="_blank">发布房源</a></li>
        </ul>
        <div class="banner-right">
            <div class="login" id="userInfoContainer"><i></i><a
                    href="javascript:void(0)"
                    id="loginBtn" rel="nofollow">登录</a>/<a
                    href="javascript:void(0)"
                    id="registerBtn" rel="nofollow">注册</a></div>
            <div class="phone"><i></i><span>热线电话1010-9666</span></div>
        </div>
    </div>
</div>--%>


<%--<script type="text/template" id="userInfoTpl">
    <i></i>
    <%if(isAgent){%>
    <a id="userNameContainer" href="<%=$.env.fixedUrl('//agent.lianjia.com/')%>"><%=username%></a>
    <%}else{%>
    <a id="userNameContainer" href="<%=$.env.fixedUrl('//user.lianjia.com/')%>" rel="nofollow"><%=username%></a>
    <%}
    <span id="tipContainer"></span>
    &nbsp;&nbsp;<a href="<%=logoutUrl%>">退出</a>
    <span id="pushNewsListContainer"></span>
</script>--%>
<%--<script type="text/template" id="pushNewsListTpl">
    <div class="pushNewsList">
        <%for(var i in group_by_type){%>
        <%if(group_by_type[i].unread !== 0 && pushMsgMap.hasOwnProperty(i)){%>
        <a href="<%=pushMsgMap[i].url%>"><%=$.replaceTpl(pushMsgMap[i].text, {unread:group_by_type[i].unread})%></a>
        <%}%>
        <%}%>
    </div>
</script>&ndash;%&gt;--%>
<div class="mod-header " id="Top">
    <dl class="header-wrap clearfix">
        <dt class="header-left clearfix">
            <a class="logo" href="#"><img src="../../statics/images/iwjwlog.png" alt="爱屋吉屋"
                                          class="logo-img"></a>
            <div class="city nav-item">
                <a class="province" provinceid="40000" provincepy="guangzhou">广州<i class="iconfont">혟</i></a>
            </div>
            <div class="nav-item" data-log="homepage"><a href="${pageContext.request.contextPath}/main/home"
                                                         class="nav-item-a active">首页</a>
            </div>
            <div class="nav-item" data-log="secondhouse">
                <a href="${pageContext.request.contextPath}/map/goMap" class="nav-item-a ">二手房</a></div>
            <div class="nav-item" data-log="rent">
                <a href="${pageContext.request.contextPath}/map/goMap" class="nav-item-a ">租房</a></div>


<div class="header">
    <div class="wrap"><a href="/yezhu" class="logo"></a>
        <div class="nav">
            <ul>
                <li><a href="javascropt:scroll(0,0)" class="active">我要卖房</a></li>
                <li><a href="${pageContext.request.contextPath}/lease/test">我要出租</a></li>
            </ul>
        </div>
        <a href="javascript:void(0)" target="_blank" class="app"><span
                class="icon-app"></span><span>下载爱屋吉屋APP</span></a></div>
</div>

<div class="g-main" style="padding-bottom:0;margin-bottom:-45px;">
    <div class="m-jumbotron">
        <div class="tit">发布出售房源</div>
        <div class="sub-tit">8000+全国爱屋吉屋门店·10万+全国经纪人·爱屋吉屋倾情服务15年+</div>
    </div>
    <div class="m-form">
        <div class="box-l m-entry">
            <dl class="compact">
                <dt>小区所在城市</dt>
                <dd>
                    <div>广州</div>
                </dd>
            </dl>
            <dl>
                <dt>小区</dt>
                <dd class="wrap-sug">
                    <div class="u-sug" id="u-sug">
                        <input class="sugInput" name="resblock" type="text" autocomplete="off" placeholder="请输入小区名"/>
                        <ul></ul>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>房屋地址</dt>
                <dd class="address-select">
                    <div class="u-select u-select-build" name="building">
                        <input class="ldh" placeholder="楼栋号" class="u-select-selected" type="text" value="">
                        <ul class="u-select-options hide"></ul>
                    </div>
                    <div class="u-select u-select-build" name="unit">
                        <input class="dyh" placeholder="单元号" class="u-select-selected" type="text" value="">
                        <ul class="u-select-options hide"></ul>
                    </div>
                    <div class="u-select u-select-build" name="house">
                        <input class="mph" placeholder="门牌号" class="u-select-selected" type="text" value="">
                        <ul class="u-select-options hide"></ul>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>期望售价</dt>
                <dd>
                    <input name="expect_price" value="" type="text" placeholder="请输入您期望卖出的价格" autoComplete="off"
                           style="width: 210px;"/>
                    <div class="unit">万元</div>
                    <a href="javascript:void(0)" target="_blank" class="link-gujia">不太清楚如何定价? 先估个价</a>
                </dd>
            </dl>
            <dl>
                <dt>称呼</dt>
                <dd>
                    <input name="owner_name" value="" type="text" placeholder="我们应该如何称呼您" autoComplete="off"
                           style="width: 250px;"/>
                </dd>
            </dl>
            <dl>
                <dt>手机号码</dt>
                <dd>
                    <input name="owner_mobile" value="" type="text" placeholder="您的联系方式，方便我们及时与您联系" autoComplete="off"
                           maxlength="11" style="width: 250px;"/>
                </dd>
            </dl>
            <dl>
                <dt>图形验证码</dt>
                <dd>
                    <input name="verify_code" value="" type="text" placeholder="请输入图形验证码中的结果" autoComplete="off"
                           style="width: 170px;"/>
                    <!-- <div class="btn-getcode-voice">获取语音验证码</div> -->
                    <!-- <div class="btn-getcode-sms">获取短信验证码</div> -->
                    <div class="btn-getcode-sms"><img src="../../statics/images/Sell_img/GeneratePictureUpgrade.png">
                    </div>
                </dd>
            </dl>
        </div>

        <div class="box-r m-deal">
            <div class="hd">
                <div id="tpl-r-dealprice">
                    <div class="tit">广州市 成交均价</div>
                    <div class="sub-tit">

                        <span class="num">30462</span>
                        <span class="unit">元/㎡</span>

                    </div>
                </div>
                <div class="btn-qrcode">
                    <div class="icon-qrcode"></div>
                    <div class="layer-qrcode">
                        <div class="icon-qrcode"></div>
                        <div class="txt">去爱屋吉屋APP提升卖房速度</div>
                        <div class="sub-txt">APP·移动卖房新体验</div>
                    </div>
                </div>
            </div>
            <div id="tpl-r-relatedhouse">


                <ul class="bd">


                    <li>
                        <a href="javascript:void(0)" class="tit" target="_blank">珠江花园 - 2室1厅/80平米</a>
                        <span class="time">

              签约时间 2018-02-11

          </span>
                        <span class="num">212万</span>
                    </li>


                    <li>
                        <a href="javascript:void(0)" class="tit" target="_blank">翠拥华庭锋尚 - 1室0厅/43.98平米</a>
                        <span class="time">

              签约时间 2018-02-11

          </span>
                        <span class="num">196万</span>
                    </li>


                    <li>
                        <a href="javascript:void(0)" class="tit" target="_blank">棠德花园 - 2室1厅/60.39平米</a>
                        <span class="time">

              签约时间 2018-02-11

          </span>
                        <span class="num">153万</span>
                    </li>

                </ul>
                <div class="ft">

                    <a href="javascript:void(0)" target="_blank">查看更多成交明细</a>

                </div>

            </div>
        </div>
    </div>

    <div class="m-submit">
        <div class="wrap">
            <div class="btn-submit">提交委托</div>
            <div class="btn-liwu" style="display:none;">
                <div class="icon-liwu"></div>
                <div class="txt">委托有礼</div>
                <div class="summary">
                    <p>在线委托赠送<b>1000</b>家基金好礼！</p>
                    <p>完成实勘图片采集后，奖励<b>300</b>家基金；</p>
                    <p>签订速销协议后，奖励<b>700</b>家基金。</p>
                </div>
            </div>
        </div>
    </div>
    <div class="m-process">
        <div class="hd">卖房全流程</div>
        <ul class="bd">
            <li><span class="icon icon-1"></span>
                <div class="tit">发布房源</div>
                <div class="sub-tit">在线上免费发布房源</div>
            </li>
            <li><span class="icon icon-2"></span>
                <div class="tit">核对房源</div>
                <div class="sub-tit">30分钟内链家客服联系</div>
            </li>
            <li><span class="icon icon-3"></span>
                <div class="tit">在线销售</div>
                <div class="sub-tit">在链家APP移动管理销售</div>
            </li>
            <li><span class="icon icon-4"></span>
                <div class="tit">签约出售</div>
                <div class="sub-tit">签约过户链家全程服务</div>
            </li>
        </ul>
    </div>


    <div class="m-feature" style="display: none;">
        <ul class="wrap">
            <li><img src="../../statics/images/Sell_img/feature-1.jpg" alt="">
                <div class="tit">推广资源</div>
                <div class="sub-tit">线下10万+专业经纪人，8000+链家门店，线上链家网、链家APP，最大程度上推广您的委托房源。</div>
            </li>
            <li><img src="../../statics/images/Sell_img/feature-2.jpg" alt="">
                <div class="tit">速销服务</div>
                <div class="sub-tit">与链家签定速销协议，链家承诺在一定时间内帮您卖掉房子，否则赔付业主。</div>
            </li>
            <li><img src="../../statics/images/Sell_img/feature-3.jpg" alt="">
                <div class="tit">资金监管</div>
                <div class="sub-tit">使用链家买卖交易资金托管平台--理房通，保障买卖双方在二手房交易中资金安全。</div>
            </li>
        </ul>
    </div>
    <%-- <script id="tpl-dealprice" type="text/html">
    <div class="tit"><%= data.cityName %> 成交均价</div>
    <div class="sub-tit">
        <% if(data.monthTrans) { %>
        <span class="num"><%= data.monthTrans %></span>
        <span class="unit">元/㎡</span>
        <% }else { %>
        暂无数据
        <% } %>
    </div>
</script>--%>
    <%-- <script id="tpl-relatedhouse" type="text/html">
    <% var list = data.list; %>
    <% var submitData = data.submitData; %>
    <% if(list.length) { %>
    <ul class="bd">
        <% for(var i = 0; i < list.length; i++) { %>
        <% var item = list[i]; %>
        <li>
            <a href="<%= item.viewUrl %>" class="tit" target="_blank"><%= item.title %> - <%= item.jushi %>/<%=
                item.area %>平米</a>
            <span class="time">
            <% if(ljConf.city_id == '420100') { %>
              挂牌时间 <%= item.onListDate %>
            <% }else { %>
              签约时间 <%= item.signTime %>
            <% } %>
          </span>
            <span class="num"><%= item.price %>万</span>
        </li>
        <% } %>
    </ul>
    <div class="ft">
        <% if(ljConf.city_id == '420100') { %>
        <a href="<%= submitData.community_id ? ('/ershoufang/c' + submitData.community_id + '/') : '/ershoufang/' %>"
           target="_blank">查看更多在售明细</a>
        <% }else { %>
        <a href="<%= submitData.community_id ? ('/chengjiao/c' + submitData.community_id + '/') : '/chengjiao/' %>"
           target="_blank">查看更多成交明细</a>
        <% } %>
    </div>
    <% } %>
</script>--%>
    <div class="m-success">
        <div class="marsk"></div>
        <div class="box">
            <div class="box-l">
                <div class="icon-weituo-success"></div>
                <div class="tit">提交委托成功！</div>
                <div class="sub-tit">周一至周日9:00-20:00，10109666客服会及时给您回电，请耐心等待</div>
                <div class="line">下载掌上链家APP</div>
                <div class="item bold">
                    <div>去APP管理委托</div>
                    <div>去APP领取家基金</div>
                </div>
                <div class="item">
                    <div>登录业主中心查看同类房子实时成交<br>主动介绍房子吸引更多买家关注</div>
                    <div>完成实勘图片采集后，奖励300家基金<br>签订速销协议后，奖励700家基金</div>
                </div>
            </div>
            <div class="box-r">
                <div class="icon-qrcode"></div>
                <div class="txt">扫一扫·下载掌上链家</div>
            </div>
            <div class="icon-close"></div>
        </div>
    </div>
</div>
<div class="footer">
    <div class="wrapper">
        <div class="f-title">
            <div class="fl">
                <ul>
                    <li><a href="javascript:void(0)" rel="nofollow" target="_blank">了解链家</a></li>
                    <li><a href="javascript:void(0)" rel="nofollow" target="_blank">关于链家</a>
                    </li>
                    <li><a href="javascript:void(0)" rel="nofollow" target="_blank">联系我们</a></li>
                    <li><a href="javascript:void(0)" rel="nofollow" target="_blank">加入我们</a></li>
                    <li><a href="javascript:void(0)" rel="nofollow" target="_blank">隐私声明</a></li>
                    <li><a href="javascript:void(0)" target="_blank">网站地图</a></li>
                    <li><a href="javascript:void(0)" rel="nofollow" target="_blank">友情链接</a></li>
                    <li><a href="javascript:void(0)" rel="nofollow" target="_blank">经纪人登录</a></li>
                </ul>
            </div>
            <div class="fr">官方客服 1010 9666</div>
        </div>
        <div class="lianjia-link-box">
            <div class="fl">
                <div class="tab"><span
                        class="hover">城市二手房</span><span>房产资讯</span><span>城区二手房</span><span>城区租房</span><span>城区小区</span><span>热门小区</span><span>热门问答</span><span>热门百科</span><span>合作与友情链接</span>
                </div>
            </div>
            <div class="footer-t-r">
                <img src="../../statics/images/getDynamicQRImage.png" class="footer-qrcode">
            </div>
        </div>
    </div>
    <div class="footer-bottom" style="height: 100px">
        <div class="footer-inner">
            <div class="footer-b-link">
                <span>友情链接：</span>
                <a href="http://bbs.jia.com/" class="footer-b-item" target="_blank">装修论坛</a>
                <a href="http://zhuangxiu.pchouse.com.cn/" class="footer-b-item" target="_blank">装修</a>
                <a href="http://gz.to8to.com/" class="footer-b-item" target="_blank">广州装修网</a>
                <a href="http://pic.homekoo.com/" class="footer-b-item" target="_blank">装修效果图</a>
                <a href="http://news.17house.com/" class="footer-b-item" target="_blank">建材头条</a>
                <a href="http://sh.wed114.cn/" class="footer-b-item" target="_blank">上海婚纱摄影</a>
                <a href="http://sh.daoxila.com/" class="footer-b-item" target="_blank">上海结婚网</a>
                <a href="http://m.iwjw.com/" class="footer-b-item" target="_blank">爱屋吉屋移动站</a>
                <a href="http://sh.jiwu.com/" class="footer-b-item" target="_blank">上海买房</a>
                <a href="http://www.iwjw.com/caichan/" class="footer-b-item" target="_blank">财产说</a>
                <a href="http://luoyang.focus.cn/" class="footer-b-item" target="_blank">洛阳房产网</a>
                <a href="http://www.juwai.com/" class="footer-b-item" target="_blank">海外房产网</a>
                <a href="http://www.3456.cc/" class="footer-b-item" target="_blank">3456网址导航</a>
                <a href="http://chongqing.tianqi.com/" class="footer-b-item" target="_blank">重庆天气预报</a>
                <a href="http://www.zocai.com/" class="footer-b-item" target="_blank">佐卡伊珠宝</a>
                <a href="http://www.5khouse.com/" class="footer-b-item" target="_blank">昆山房产网</a>
                <a href="http://shenzhen.liebiao.com/" class="footer-b-item" target="_blank">深圳分类信息</a>
                <a href="http://college.liuxue86.com/" class="footer-b-item" target="_blank">院校库</a>
                <a href="http://www.mplife.com/" class="footer-b-item" target="_blank">名品导购</a>
                <a href="http://yingyu.chazidian.com/" class="footer-b-item" target="_blank">查字典英语网</a>
                <a href="http://www.wy100.com/" class="footer-b-item" target="_blank">家具网上商城</a>
                <a href="https://www.iwjw.com/#" class="footer-b-item" target="_blank">友情链接：289479062</a>
                <a href="http://www.yimianmian.com/" class="footer-b-item" target="_blank">意绵绵珠宝</a>
            </div>
        </div>
    </div>
</div>

<script>
    $(".dialog-login-btn").click(function () {
        <%--$.post("${pageContext.request.contextPath}/login/goLogin", "uPhone="+$("#uPhone").val(),"textCode="+$("#codeInput").val());--%>
        var param = {
            "uPhone": $("#uPhone").val(),
            "textCode": $("#codeInput").val()
        }
        $.ajax({
            url: "${pageContext.request.contextPath}/loginAjax/doLogin",
            data: param,
            type: "post",
            success: function (response) {
                window.location = "home";
            }
        });
    })
</script>
<%--搜索--%>
<script type="text/javascript">
    function saleSearch() {
        document.getElementById("searchs").action = "http://localhost:8080/saleController/searchSale";
    }

    function sellSearch() {
        document.getElementById("searchs").action = "${pageContext.request.contextPath}/main/goGfgl";
    }
</script>


<script src="../../statics/js/Sell_js/fe.js"></script>
<script src="../../statics/js/Sell_js/common.js"></script>
<div style="display:none">
    <script src="js/ljanalytics.js"></script>
</div>
<div id="only" data-city="gz" data-page="yezhu_maifang"></div>
<script>var path = 'https://s1.ljcdn.com/feroot/pc/asset?_v=2018031315292164'.split("?");
require.config({
    baseUrl: path[0],
    paths: {
        'echarts': '../../dep/echarts-1.4.1/build/echarts',
        'echarts/chart/bar': '../../dep/echarts-1.4.1/build/echarts',
        'echarts/chart/line': '../../dep/echarts-1.4.1/build/echarts',
        'echarts/chart/pie': '../../dep/echarts-1.4.1/build/echarts',
        'echarts3': '../../dep/echarts3/echarts3',
        'common': 'common',
        'jquery-ui': '../../dep/jquery-ui/jquery-ui.min',
        'zeroclipboard': '../../dep/zeroclipboard-2.2.0/ZeroClipboard'
    },
    urlArgs: path[1]
});
var feData = {
    "cityName": "北京",
    "getFavHouseUrl": "/api/gethousefav",
    "setFavHouseUrl": "/api/sethousefav",
    "getLastSearch": "/api/getlastsearch",
    "getCommunityHistory": "/api/getcommunityhistory",
    "verifyHouse": "/api/verifyHouse",
    "getUser": "/api/getUser",
    "verifyCode": "/verifycode/getVerifyCode",
    "complaint": "/api/complaint",
    "getDecoration": "/api/getDecoration",
    "trendData": "/site/getpicinfo"
}</script>
<script>
    require(['yezhu/maifang/index']);

    require(['common/backtopV3'], function (main) {
        main({
            ucid: '',
            uuid: 'f7bc11a6-8397-4317-a5e4-c0ed292224f3',
            loadingImg: 'https://s1.ljcdn.com/feroot/pc/asset/ershoufang/sellDetail/img/loading.gif?_v=2018031315292164',
            qrImg: '//ajax.api.lianjia.com/qr/getDownloadQr'
        });
    });
</script>
<script>require(['common/suggestion'], function (suggestion) {
    window.defaultSuggest = suggestion.init({
        requestOptions: {cityId: '440100', cityName: '广州'},
        url: '/api/headerSearch?channel=yezhu&q=',
        main: '#keyword-box',
        appendTo: '#suggest-cont',
        redirect: true
    });
});</script>
<div class="loninContaner">
    <div class="overlay_bg"></div>
    <div class="panel_login animated" id="dialog">
        <div class="panel_info"><i class="close_login">&times</i>
            <div class="panel_tab">
                <div class="title">
                    <div class="fl">账号密码登录</div>
                </div>
                <div class="clear"></div>
                <div id="con_login_user">
                    <form action="" method="post">
                        <ul>
                            <li class="item border-t userName"><input type="text" class="the_input topSpecial users"
                                                                      placeholder="请输入手机号" maxlength="11"/></li>
                            <li class="item border-b pwd"><input type="password" class="the_input password"
                                                                 maxlength="20" placeholder="请输入登录密码"/><em
                                    class="password-view"></em></li>
                            <li class="item checkVerimg" style="display:none;"><input type="text"
                                                                                      class="the_input ver-img"
                                                                                      maxlength="6"
                                                                                      placeholder="请输入验证码"/><img
                                    class="verImg"></li>
                            <li class="item drag" style="display:none;">
                                <div id="drag"></div>
                            </li>
                            <li class="show-error">
                                <dd>用户名或密码错误</dd>
                            </li>
                            <li class="li_01"><label class="checkbox-btn"><span class="active"><input type="checkbox"
                                                                                                      name="remember"
                                                                                                      value="1"
                                                                                                      class="mind-login"
                                                                                                      checked/></span>7天内免登录</label><a
                                    href="javascript:;" rel="nofollow" class="toforget">忘记密码</a></li>
                            <li class="li_btn"><a class="login-user-btn">登录</a></li>
                            <li class="footer-link"><a href="javascript:;" rel="nofollow" class="totellogin">手机快捷登录</a>
                            </li>
                        </ul>
                    </form>
                </div>
                <div id="con_login_agent" class="undis">
                    <form action="" method="post">
                        <ul>
                            <li class="item">
                                <dd></dd>
                                <input type="text" class="the_input users" placeholder="输入经纪人ID号码"/></li>
                            <li class="item"><input type="password" class="the_input password" placeholder="登录密码"/></li>
                            <li class="li_01"><label class="checkbox-btn"><span class="active"><input type="checkbox"
                                                                                                      name="remember"
                                                                                                      value="1"
                                                                                                      class="mind-login"
                                                                                                      checked/></span>7天内免登录</label><a
                                    href="https://passport.lianjia.com/register/resources/lianjia/forget.html?service=http://bj.lianjia.com/"
                                    rel="nofollow">忘记密码</a></li>
                            <li><input class="login-agent-btn" value="立即登录"/></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <div class="registered"></div>
    </div>
    <div class="panel_login animated" id="dialog_tel">
        <div class="panel_info"><i class="close_login">&times</i>
            <div class="panel_tab">
                <div class="title">
                    <div class="fl">手机快捷登录</div>
                    <div class="register_text_tel">别担心，无账号自动注册不会导致手机号被泄露</div>
                </div>
                <div class="clear"></div>
                <div id="con_login_user_tel">
                    <form action="" method="post">
                        <ul>
                            <li class="item border-t userName"><input type="text" class="the_input topSpecial users_tel"
                                                                      maxlength="11" placeholder="请输入手机号"/></li>
                            <!-- <li class="item pwd"><input type="password" class="the_input password_tel"  placeholder="请输入短信验证码"/></li> -->
                            <li class="item checkVerimg" style=""><input type="text" class="the_input ver-img"
                                                                         maxlength="6" placeholder="请输入验证码"/><img
                                    class="verImg"></li>
                            <li class="item border-b Verify"><input type="text" class="the_input verifycode"
                                                                    maxlength="6" placeholder="请输入短信验证码"/><a
                                    class="send_verify_code" id="send_verify_code_tel" href="javascript:;"
                                    rel="nofollow"><em>获取验证码</em></a></li>
                            <li class="send_verify_code_s" id="send_verify_code_tel_s" href="javascript:;"
                                rel="nofollow"><em>没有收到验证码？</em><a class="voice_a">发送语音验证码</a></li>
                            <li class="show-error">
                                <dd>用户名或密码错误</dd>
                            </li>
                            <li class="li_01"><label class="checkbox-btn"><span class="active"><input type="checkbox"
                                                                                                      name="remember"
                                                                                                      value="1"
                                                                                                      class="mind-login"
                                                                                                      checked/></span>7天内免登录</label>
                            </li>
                            <li class="li_btn"><a class="login-user-tel-btn">登录</a></li>
                            <li class="footer-link"><a href="javascript:;" rel="nofollow" class="tologin">账号密码登录</a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <div class="registered"></div>
    </div>
    <div class="panel_login animated" id="dialog_reg">
        <div class="panel_info"><i class="close_login">&times</i>
            <div class="panel_tab">
                <div class="title">
                    <div class="fl">手机号码注册</div>
                    <label class="fr register_text">已有账号？<a href="javascript:;" rel="nofollow"
                                                            class="tologin">去登录</a></label></div>
                <div class="clear"></div>
                <div id="con_login_user_reg">
                    <form action="" method="post">
                        <ul>
                            <li class="item border-t userName"><input type="text" class="the_input topSpecial users_reg"
                                                                      maxlength="11" placeholder="请输入手机号"/></li>
                            <li class="item checkVerimg" style=""><input type="text" class="the_input ver-img"
                                                                         maxlength="6" placeholder="请输入验证码"/><img
                                    class="verImg"></li>
                            <li class="item border-c Verify"><input type="text" class="the_input verifycode"
                                                                    maxlength="6" placeholder="请输入短信验证码"/><a
                                    class="send_verify_code" id="send_verify_code_reg" href="javascript:;"
                                    rel="nofollow"><em>获取验证码</em></a></li>
                            <li class="item border-b pwd"><input type="password" class="the_input password_reg"
                                                                 maxlength="20" placeholder="请输入密码（最少8位，数字+字母）"/><em
                                    class="password-view"></em></li>
                            <li class="send_verify_code_s" id="send_verify_code_reg_s" href="javascript:;"
                                rel="nofollow"><em>没有收到验证码？</em><a class="voice_a">发送语音验证码</a></li>
                            <li class="show-error">
                                <dd>用户名或密码错误</dd>
                            </li>
                            <li class="li_01"><label class="checkbox-btn"><span class="active"><input type="checkbox"
                                                                                                      name="read"
                                                                                                      value="1"
                                                                                                      class="read-protocol"
                                                                                                      checked/></span>我已阅读并同意</label><a
                                    class="toprotocol" href="javascript:void(0)" target="_blank">《链家用户使用协议》</a>
                            </li>
                            <li class="li_btn"><a class="register-user-btn">注册</a></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <div class="registered"></div>
    </div>
    <div class="panel_login animated" id="dialog_forget">
        <div class="panel_info"><i class="close_login">&times</i>
            <div class="panel_tab">
                <div class="title">
                    <div class="fl">找回密码</div>
                </div>
                <div class="clear"></div>
                <div id="con_forget_user_tel" class="con_forget_user_tel">
                    <form action="" method="post">
                        <ul>
                            <li class="item border-t userName"><input type="text"
                                                                      class="the_input topSpecial user_forget_phone"
                                                                      placeholder="请输入手机号" maxlength="11"/></li>
                            <li class="item checkVerimg" style=""><input type="text" class="the_input ver-img"
                                                                         maxlength="6" placeholder="请输入验证码"/><img
                                    class="verImg"></li>
                            <li class="item border-b Verify"><input type="text" class="the_input verifycode"
                                                                    maxlength="6" placeholder="请输入短信验证码"/><a
                                    class="send_verify_code" id="send_verify_code_forget" href="javascript:;"
                                    rel="nofollow"><em>获取验证码</em></a></li>
                            <li class="item border-t pwd" style="margin-top:-1px;"><input type="password"
                                                                                          class="the_input password_reg"
                                                                                          maxlength="20"
                                                                                          placeholder="请输入密码（最少8位，数字+字母）"/><em
                                    class="password-view"></em></li>
                            <li class="send_verify_code_s" id="send_verify_code_forget_s"><em>没有收到验证码？</em><a
                                    class="voice_a">发送语音验证码</a></li>
                            <li class="show-error">
                                <dd>用户名或密码错误</dd>
                            </li>
                            <li class="li_btn"><a class="user-forget">修改密码</a></li>
                        </ul>
                    </form>
                </div>
                <div id="con_forget_user_pw" class="con_forget_user_pw">
                    <form action="" method="post">
                        <ul>
                            <li class="item border-t pwd"><input type="password" class="the_input password_reg"
                                                                 maxlength="20" placeholder="请输入密码（最少8位，数字+字母）"/><em
                                    class="password-view"></em></li>
                            <li class="show-error">
                                <dd>用户名或密码错误</dd>
                            </li>
                            <li class="li_btn"><a class="modify-user-pswd">修改密码</a></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <div class="registered"></div>
    </div>
</div>
<!-- LianjiaIM Style -->
<link property='stylesheet' rel="stylesheet" href="css/lianjiaim.css"/>
<script src="../../statics/js/Sell_js/ljim-core.min.js"></script>
<script>(function () {
    var imConf = {
        "ajaxroot": "\/\/ajax.api.lianjia.com\/",
        "imAppid": "LIANJIA_WEB_20160624",
        "imAppkey": "6dfdcee27d78b1107fceeca55d80b7bd"
    };
    $.listener.on('userInfo', function (data) {
        if (data.code === 1) {
            data.ucid = '';
        }
        require(['lianjiaIM/lianjiaim'], function (LianjiaIM) {
            var ljim = new LianjiaIM({
                appid: imConf.imAppid,
                appkey: imConf.imAppkey,
                userData: data,
                staticRoot: 'https://s1.ljcdn.com/feroot/?_v=2018031315292164'
            });
        });
    });
})();</script>
<script type="text/javascript">var advert = 'https://s1.ljcdn.com/feroot/pc/asset/common/advert.js?_v=2018031315292164';
$.listener.on('userInfo', function (data) {
    window.loginData = data;
});
var mvl = document.createElement('script');
mvl.type = 'text/javascript';
mvl.async = true;
mvl.src = advert;
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(mvl, s);
</script>
<script type="text/javascript">(function () {
    var canonicalURL, curProtocol;
    var x = document.getElementsByTagName("link");
    if (x.length > 0) {
        for (i = 0; i < x.length; i++) {
            if (x[i].rel.toLowerCase() == 'canonical' && x[i].href) {
                canonicalURL = x[i].href;
            }
        }
    }
    if (!canonicalURL) {
        curProtocol = window.location.protocol.split(':')[0];
    } else {
        curProtocol = canonicalURL.split(':')[0];
    }
    if (!canonicalURL) canonicalURL = window.location.href;
    (function () {
        var e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi, r = canonicalURL, t = document.referrer;
        if (!e.test(r)) {
            var n = (String(curProtocol).toLowerCase() === 'https') ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
            t ? (n += "?r=" + encodeURIComponent(document.referrer), r && (n += "&l=" + r)) : r && (n += "?l=" + r);
            var i = new Image;
            i.src = n
        }
    })(window);
})();</script><!--cookie mapping--><img src='../../statics/images/Sell_img/cm.fcg' alt="cookie_mapping_url"
                                        style="display: none;"></body>
<script>


    $(".btn-submit").click(function () {
        var address = "" + $(".ldh").val() + $(".dyh").val() + $(".mph").val();

        var code = $("input[name=verify_code]").val();
        if (parseInt(code) != 12) {
            alert("验证码错误");
        } else {
            var jsonObj = {
                "town_city": "广州",
                "town": $(".sugInput").val(),
                "address": address,
                "money": $("input[name=expect_price]").val(),
                "owner_name": $("input[name=owner_name]").val(),
                "phone_num": $("input[name=owner_mobile]").val(),
            };
            var json = JSON.stringify(jsonObj);
            $.post("${pageContext.request.contextPath}/weituo/setWeituo", {"jsonObj": json}, function (d) {
                    window.location="${pageContext.request.contextPath}/userInfo/delegate";
                }
            );
        }
    });

</script>
</html>
