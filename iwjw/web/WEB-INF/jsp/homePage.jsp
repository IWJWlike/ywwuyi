<%--
  Created by IntelliJ IDEA.
  User: 42958
  Date: 2018/3/13
  Time: 8:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

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
        window.location="${pageContext.request.contextPath}/indexController/goHomePage";
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
</head>
<body >



<!--日志提交功能-->

<div id="iwjw" class="">
    <div class="iwjw-wrap">
        <div class="mod-header " id="Top">
            <dl class="header-wrap clearfix">
                <dt class="header-left clearfix">
                    <a class="logo" href="#"><img src="../../statics/images/iwjwlog.png" alt="爱屋吉屋"
                                                                      class="logo-img"></a>
                    <div class="city nav-item">
                        <a class="province" provinceid="40000" provincepy="guangzhou">广州<i class="iconfont">혟</i></a>
                    </div>
                    <div class="nav-item" data-log="homepage"><a href="${pageContext.request.contextPath}/main/home" class="nav-item-a active">首页</a>
                    </div>
                    <div class="nav-item" data-log="secondhouse">
                        <a href="${pageContext.request.contextPath}/map/goMap" class="nav-item-a ">二手房</a></div>
                    <div class="nav-item" data-log="rent">
                        <a href="${pageContext.request.contextPath}/map/goMap" class="nav-item-a ">租房</a></div>


                    <div class="nav-item nav-item-server" data-log="entrust">
                        <a href="${pageContext.request.contextPath}/sell/goSell" rel="nofollow" class="nav-item-a ">业主委托</a>
                    </div>

                    <div class="nav-item" data-log="baike">
                        <a class="nav-item-a " href="${pageContext.request.contextPath}/baikePage/gfgl" target="_blank">购房攻略 </a>
                    </div>
                    <div class="nav-item" data-log="ailicai">
                        <a href="#" target="_blank" class="nav-item-a ailicai ">吉爱财</a>
                        <div class="header-new"></div>
                    </div>
                    <div class="nav-item" data-log="dzg">
                        <a href="#" class="nav-item-a  ">贷总管</a>
                    </div>
                    <div class="nav-item" data-log="appDownload">
                        <a href="#" class="nav-item-a "><i
                                class="iconfont if-mobile"></i>APP</a>
                    </div>
                </dt>
                <c:if test="${vistor==null}">
                <dd class="header-right clearfix">
                    <div class="nav-item"><a id="one" href="javascript:showBox()"
                                             class="login none nav-item-a login-require " target="_blank"><i
                            class="nav-item-txt">登录<span class="slash">/</span>注册</i></a></div>
                    <div class="nav-item message-nav" id="message-nav">
                        <div class="nav-message-wrap" data-reactid=".0"></div>
                    </div>
                    </c:if>
                    <c:if test="${vistor != null}">
                <dd class="header-right clearfix">
                    <div class="nav-item"><a data-url="/userinfo/" class="login  nav-item-a login-require "
                                             target="_blank"><em class="iconfont if-menu"></em><i class="nav-item-txt">135****0667
                        <span class="shape-circle"></span></i></a>
                        <div class="user-down-wrap arrow-top nav-down-wrap"><a class="user-item" href="/userinfo/"
                                                                               id="username"><span
                                class="iconfont">핰</span>我的账户

                            <i class="follow-point"></i></a><a class="user-item" href="/collectHouseList/"
                                                               id="FollowDynamic"><span class="iconfont">홄</span>关注列表

                        </a><!-- web 6.9 已下线 --><!-- <a class="user-item appoint-list" href="/seeHouseList/" id = "Itinerary"><span class="iconfont">&#xd571;</span>约看清单

   </a> --><a class="user-item house-schedule" href="/appointmentList/" id="Showings"><span class="iconfont">혤</span>看房日程

                        </a><a class="user-item user-item-payorder" href="/order/"><span class="iconfont">퐀</span>合同订单

                        </a><a class="user-item user-item-delegate_mng" href="/delegateManage/"><span
                                class="iconfont">퐁</span>我的委托

                        </a><a class="user-item user-item-agent" href="/agent/"><span class="iconfont">퐄</span>我的经纪人

                        </a><a class="user-item user-item-complains" href="/complains/"><span class="iconfont">퐐</span>我的投诉

                        </a><a class="user-item user-item-logout"><span class="iconfont">퐅</span>退出
                        </a></div><!--  --></div>
                    <div class="nav-item message-nav" <%--id="message-nav"--%>>
                        <div class="nav-message-wrap" data-reactid=".0"><a class="nav-item-a message show-msg-down"
                                                                           data-reactid=".0.$1"><i
                                class="nav-item-txt line" data-reactid=".0.$1.0"><i data-reactid=".0.$1.0.0">消息</i></i></a>
                            <div id="message-down-wrap" class="message-down-wrap nav-down-wrap arrow-top "
                                 data-reactid=".0.$2">
                                <div class="message-list-wrap" data-reactid=".0.$2.0">
                                    <div class="msg-center-wrap" data-reactid=".0.$2.0.0"><a
                                            class="msg-center-a clearfix" href="/message/activity/"
                                            data-reactid=".0.$2.0.0.0">
                                        <div class="bell-bg f-l" data-reactid=".0.$2.0.0.0.0"><i
                                                class="iconfont if-bell" data-reactid=".0.$2.0.0.0.0.0"></i></div>
                                        <p class="msg-center-tt f-l bold" data-reactid=".0.$2.0.0.0.1">消息中心</p></a>
                                    </div>
                                    <ul class="iwjwim-body" data-reactid=".0.$2.0.1"></ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </dd>
                </c:if>


                <script type="text/javascript">
                    function showBox() {
                        $('#one').click(function () {
                            $('#box2').show();
                        });
                        $('.dialog-close').click(function () {
                            $('#box2').hide();
                        });
                    };
                </script>

                </dd>
            </dl>
        </div>


        <div class="mod-index mod-index-type3">
            <div class="banner">
                <div class="w1190">
                    <div class="banner-content">
                        <div class="banner-search">
                            <ul class="search-tabs clearfix unselectable">
                                <li class="search-tab active" onclick="saleSearch()">
                                    <span class="v-middle">二手房</span>
                                </li>
                                <li class="search-tab " onclick="sellSearch()">
                                    <span class="v-middle">租房</span>
                                </li>
                            </ul>


                            <div class="search-form p-r">
                                <p class="banner-describe ht2 ">
                                    <i class="city-name">[广州]</i>
                                    <i class="house-num">${totalHouseSize}</i>
                                    <i class="house-unit">套</i>
                                    二手房在售
                                </p>
                                <p class="banner-describe ht1 hide">
                                    <i class="city-name">[广州]租房</i>
                                    近3天新增
                                    <i class="house-num">59套</i>
                                </p>

                                <form method="get" id="searchs" action="http://localhost:8080/saleController/searchSale"
                                      class="mod-search clearfix" data-provinceid="40000" data-provincepy="guangzhou"
                                      data-quotationdate="$quotationDate" data-provincename="广州" data-housetype="2">
                                    <em class="triangle-top triangle-search p-a " style="left: 13px;"></em>
                                    <input type="hidden" name="t" value="1">
                                    <label class="search-label">
                                        <em class="iconfont fo-search"><img
                                                src="../../statics/images/index_images/glass.jpg"
                                                style="width: 30px;height: 30px;margin-top: 10px;margin-left: -10px">
                                        </em>
                                        <div class="index-kw-wrap">
                                            <input type="text" class="kw-input" name="kw" placeholder="请输入小区、地铁、区域板块…"
                                                   maxlength="50" autocomplete="off" autofocus=""
                                                   style="width: 488px;height: 48px"><i class="iconfont search-close"
                                                                                        title="清除内容">홈</i>
                                        </div>
                                    </label>
                                    <button type="submit" class="btn-map">搜索</button>
                                    <p class="hint-wrap"></p></form>
                            </div>
                        </div>
                        <div class="form-mask mask-input"></div>
                    </div>
                </div>
            </div>


            <div class="index-housetopic"></div>
            <div id="box2" class="mod-dialog ui-draggable"
                 style="width: 640px; left: 404.5px; top: 42px; overflow: visible;display: none;">
                <div class="dialog-close"></div>
                <div class="dialog-content" style="height: 589px;">
                    <div id="mod-login" class="mod-login main">
                        <div class="change-mode" onselectstart="return false"></div>
                        <div class="change-mode-text" onselectstart="return false"></div>
                        <div class="container-main">
                            <div class="login-logo"></div>
                            <div class="wx-login">
                                <div class="wx-login-icon">
                                    <div class="line-word">推荐使用社交账号登录</div>
                                    <div class="wx-login-btn">
                                        <i class="iconfont if-weixin"></i>
                                        <span>微信一键登录</span></div>
                                    <div class="line-word">或者</div>
                                </div>
                                <div id="login-wrap" class="login-wrap login-transition">
                                    <div class="panel-wrap">
                                        <div class="block phone-panel">
                                            <div class="icon-wrap">
                                                <em class="iconfont if-mobile"></em>
                                            </div>
                                            <div class="input-wrap">
                                                <input id="uPhone" class="login-input" type="tel" name="uPhone"
                                                       maxlength="13" placeholder="输入手机号码" tabindex="1"
                                                       autocomplete="off">
                                                <!-- <button class="send-btn" type="button" disabled>发送验证码</button> -->
                                            </div>
                                        </div>
                                    </div>
                                    <%--滑动验证模块开始--%>
                                    <div id="login-slider-one" class="login-slider-one login-transition slider-control">
                                        <div class="geetest-wrap">
                                            <p id="loginTips" class="geetest-tip">拖动滑块完成验证</p>
                                            <div id="geetest-container" class="geetest-container">
                                                <div id="holder" class="gt_holder gt_float" style="touch-action: none;">
                                                    <div id="slider1" class="slider1 slider-control"></div>
                                                    <script type="text/javascript">
                                                        var flag = 120;
                                                        $("#slider1").slider({
                                                            callback: function (result) {
                                                                if (result) {
                                                                    if ((/^1[3|4|5|8][0-9]\d{4,8}$/.test($("#uPhone").val()))) {
                                                                        $("#holder").html("<div class='input-wrap'>"
                                                                            + "<input id='codeInput'  class='login-input' type='tel' maxlength='4'name='code'autocomplete='off' placeholder='填写验证码'tabindex='2'>"
                                                                            + "<button id='send-code-btn' class='send-btn'type='button'>发送验证码</button></div>")
                                                                        $("#uPhone").attr("disabled", true)
                                                                        $("#loginTips").html("根据手机短信输入验证码")
                                                                        $.post("${pageContext.request.contextPath}/login/gotoSendCode", "uPhone=" + $("#uPhone").val(), sendBack());
                                                                    } else {
                                                                        $("#slider1").slider("restore");
                                                                        alert("请输入正确手机号")
                                                                    }
                                                                }
                                                            }
                                                        });

                                                        function sendBack() {
                                                            if (flag < 120) {
                                                                return;
                                                            }
                                                            timer();
                                                        }

                                                        function timer() {
                                                            flag--;
                                                            $("#send-code-btn").html(flag + "秒以后重新获取！");
                                                            $("#send-code-btn").attr("disabled", true);
                                                            if (flag == 0) {
                                                                $("#send-code-btn").html("发送验证码");
                                                                $("#send-code-btn").removeAttr("disabled");
                                                                flag = 120;
                                                            } else {
                                                                setTimeout("timer()", 1000);
                                                            }
                                                        }

                                                        $("#holder").on("blur", "input", function () {
                                                            if ($(this).val().length >= 4) {
                                                                $(".dialog-login-btn").removeAttr("disabled")
                                                            }

                                                        })
                                                    </script>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <%--滑动验证模块结束--%>
                                </div>
                                <div class="login-footer">
                                    <div id="only-wx-phone-error" class="sp-error"></div>
                                    <div class="block login-panel">
                                        <button class="dialog-login-btn" type="button" disabled="true" tabindex="3">登录
                                        </button>
                                    </div>
                                    <div class="cancel-btn">取消</div>
                                </div>
                                <div class="footer-tip">温馨提示：未注册爱屋吉屋账号的手机号，登录时将自动注册，且代表您已同意
                                    <a href="/protocol/u/" target="_blank">《爱屋吉屋用户协议》</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="caichan-wrap">
                <div class="index-inner index-caichan clearfix" style="height: 425px;">
                    <div class="caichan-l">
                        <a class="caichan-imgbox point-link-cc" data-cid="390" data-pos="1"
                           href="https://www.iwjw.com/caichan/390/" target="_blank">
                            <img src="../../statics/images/video_img/d972062ea1d842c0aa5596eeba92ad78.jpg" alt="">
                            <i class="cc-icon-video"></i>
                            <p class="cc-img-des">
                                <span class="cc-img-title fs-nowrap">女人为什么一定要有一套房</span>
                                <span class="cc-img-time">03-09发布</span>
                            </p>
                        </a>
                        <div class="cc-img-bot">
                            <ul class="cc-imgb-ul">
                                <li>
                                    <a class="cc-li-link point-link-cc" data-cid="389" data-pos="2"
                                       href="https://www.iwjw.com/caichan/389/" target="_blank">
                                        <i class="cc-s-video"></i>
                                        <span class="cc-li-t">住房公积金也能交房租？</span>
                                        <span class="cc-li-time">03-06发布</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="cc-li-link point-link-cc" data-cid="388" data-pos="3"
                                       href="https://www.iwjw.com/caichan/388/" target="_blank">
                                        <i class="cc-s-video"></i>
                                        <span class="cc-li-t">还房贷，等额本息，本金选哪个</span>
                                        <span class="cc-li-time">03-06发布</span>
                                    </a>
                                </li>
                                <li class="last">
                                    <a class="cc-li-link point-link-cc" data-cid="386" data-pos="4"
                                       href="https://www.iwjw.com/caichan/386/" target="_blank">
                                        <i class="cc-s-video"></i>
                                        <span class="cc-li-t">新风系统能给你的房子加分么？</span>
                                        <span class="cc-li-time">02-15发布</span>
                                    </a>
                                </li>
                            </ul>
                            <a class="cc-l-btn  point-link-cc" href="https://www.iwjw.com/caichan/" data-cid=""
                               data-pos="5" target="_blank">查看全部</a>
                        </div>
                    </div>
                    <div class="caichan-r">
                        <div class="cc-bk-line"></div>
                        <div class="cc-bk-title clearfix">
                            <h3>购房攻略</h3>
                        </div>

                        <div class="cc-section clearfix">
                            <div class="cc-section-l">


                                <a href="https://www.iwjw.com/baike/2110/" data-cid="2110" data-pos="1" target="_blank"
                                   class="title fs-nowrap point-link-gf">${newst.title}</a>
                                <p class="des">${newst.describeInfo}</p>
                                <p class="time"><fmt:formatDate value="${newst.createDate}" pattern="yyyy-MM-dd"/>发布</p>
                            </div>
                            <div class="cc-section-r">
                                <a href="https://www.iwjw.com/baike/2110/" data-cid="2110" data-pos="1"
                                   class="point-link-gf" target="_blank">
                                    <img src="../../statics/images/link_img/${newst.imgUrl}.jpg" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="cc-section last clearfix">
                            <div class="cc-section-l">
                                <a href="https://www.iwjw.com/baike/2109/" data-cid="2109" data-pos="2" target="_blank"
                                   class="title fs-nowrap point-link-gf">${second.title}</a>
                                <p class="des">${second.describeInfo}</p>
                                <p class="time"><fmt:formatDate value="${second.createDate}" pattern="yyyy-MM-dd"/>发布</p>
                            </div>
                            <div class="cc-section-r">
                                <a href="https://www.iwjw.com/baike/2109/" data-cid="2109" data-pos="2" target="_blank"
                                   class="point-link-gf">
                                    <img src="../../statics/images/link_img/${second.imgUrl}.jpg" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="cc-section-b clearfix">
                            <a href="https://www.iwjw.com/baike/2108/" data-cid="2108" data-pos="3" target="_blank"
                               class="title fs-nowrap point-link-gf">${third.title}</a>
                            <span class="time"><fmt:formatDate value="${third.createDate}"
                                                               pattern="yyyy-MM-dd"/>发布</span>
                            <a href="${pageContext.request.contextPath}/main/goGfgl" data-cid="" data-pos="4" target="_blank"
                               class="all point-link-gf">查看全部&#155</a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="index-like" data-provinceid="40000">
                <div class="index-inner index-like-inner" style="height: 300px;">
                    <div class="index-like-t clearfix">
                        <h5 class="index-like-h5">猜你喜欢</h5>
                        <a href="javascript:void(0);" class="index-like-tab active" data-housetype="2">二手房</a>
                        <a href="javascript:void(0);" class="index-like-tab" data-housetype="1">租房</a>
                    </div>
                    <%--<div class="index-like-con">--%>

                    <%--<div class="index-like-box index-like-box-sale hide clearfix" style="display: block;border: red solid 1px">--%>
                    <%--<div class="pic-slide-wrap"><em class="pic-left unselectable iconfont">&#139</em> <em--%>
                    <%--class="pic-right unselectable iconfont">&#155</em>--%>
                    <%--<div class="pic-wrap" style="border: slateblue solid 1px;">--%>


                    <div class="container">
                        <div id="full" class="carousel slide" data-ride="carousel"
                             style="background-color: greenyellow;width: 1190px;height: 270px">
                            <div class="carousel-inner" style="width: 1190px;height: 265px;border: blue solid 1px">
                                <ul class="row item active" style="border: red solid 1px">
                                   <%-- <c:forEach items="${homeImgLists}" var="img" varStatus="status">
                                        <li class="col-xs-4">
                                        <img src="${img.imgUrl}" class="img-responsive">
                                        </li>
                                    </c:forEach>--%>

                                    <li class="col-xs-4" id="gosale">
                                        <img   src="${pageContext.request.contextPath}/statics/images/house_images/dfd1_1_thumb.jpg" class="img-responsive">
                                    </li>
                                    <li class="col-xs-4">
                                        <img src="${pageContext.request.contextPath}/statics/images/house_images/bl1_1_thumb.jpg" class="img-responsive">
                                    </li>
                                    <li class="col-xs-4">
                                        <img src="${pageContext.request.contextPath}/statics/images/house_images/qianxi1_1_thumb.jpg" class="img-responsive">
                                    </li>
                                    <li class="col-xs-4">
                                        <img src="${pageContext.request.contextPath}/statics/images/house_images/yx1_1_thumb.jpg" class="img-responsive">
                                    </li>
                                </ul>
                                <ul class="row item ">
                                    <li class="col-xs-4">
                                        <img src="${pageContext.request.contextPath}/statics/images/house_images/zsg1_1_thumb.jpg" class="img-responsive">
                                    </li>
                                    <li class="col-xs-4">
                                        <img src="${pageContext.request.contextPath}/statics/images/house_images/zsg1_1_thumb.jpg" class="img-responsive">
                                    </li>
                                    <li class="col-xs-4">
                                        <img src="${pageContext.request.contextPath}/statics/images/house_images/bl1_1_thumb.jpg" class="img-responsive">
                                    </li>
                                    <li class="col-xs-4">
                                        <img src="http://placehold.it/200/6dc066/ffffff&text=8" class="img-responsive">
                                    </li>
                                </ul>
                                <ul class="row item">
                                    <li class="col-xs-4">
                                        <img src="http://placehold.it/200/6dc066/ffffff&text=9" class="img-responsive">
                                    </li>
                                    <li class="col-xs-4">
                                        <img src="http://placehold.it/200/6dc066/ffffff&text=10" class="img-responsive">
                                    </li>
                                    <li class="col-xs-4">
                                        <img src="http://placehold.it/200/6dc066/ffffff&text=11" class="img-responsive">
                                    </li>
                                    <li class="col-xs-4">
                                        <img src="http://placehold.it/200/6dc066/ffffff&text=12" class="img-responsive">
                                    </li>
                                </ul>
                            </div>
                            <a class="carousel-control left" href="#full" data-slide="prev">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            <a class="carousel-control right" href="#full"
                               data-slide="next">&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        </div>
                    </div>
                    <script>
                        $(".col-xs-4").on("click","img",function () {
                            window.location="${pageContext.request.contextPath}/saleController/goSale";
                        })
                    </script>
                </div>
            </div>
                    <%--

   </div></div></div>
        <div class="index-like-box index-like-box-chuzu hide clearfix" style="display: none;"></div>
        <div class="index-like-box index-like-box-brandrent hide clearfix" style="display: none;"></div>
    </div>
</div>
</div>
--%>
<div class="index-app-w" style="height: 380px;">
<div class="index-inner">
    <div class="index-app">
        <h3 class="index-app-h3"><strong>扫一扫</strong> 下载爱屋吉屋APP</h3>
        <div class="index-app-con clearfix">
            <div class="index-a-c-l">
                <img src="../../statics/images/getDynamicQRImage.png">
            </div>
            <ul class="index-a-c-r">
                <li class="first">
                    <span>&#9745买房先看视频, 真实省力</span>
                </li>
                <li>
                    <span>&#9745看中的房子, 随时预约</span>
                </li>
                <li>
                    <span>&#9745全城带看, 跨区选房</span>
                </li>
                <li class="last">
                    <span>&#9745交易详情, 时刻跟进</span>
                </li>
            </ul>
        </div>
    </div>
</div>
</div></div>


<script>
window.pageConfig.index = {
provinceid: "40000",
data: '',
videoLeftList: '',
yearAndMonth: '',
houseTopicList: '',
duringActivity: 'false',
MapOrList: 'list',
canHousePriceShow:'false',
provincePy:'guangzhou'
}
</script>

<div class="suspend-wrap">

<!-- feedback -->
<a href="https://www.iwjw.com/gofeedback#https%3A%2F%2Fwww.iwjw.com%2F" class="suspend-div suspend-report j-feedback" target="_blank">
<em class="opinion iconfont"></em>
<em class="text">
    意见反馈
    <i class="triangle iconfont if-triangle-right"></i>
</em>
</a>

<!-- app qrcode -->
<div class="suspend-div suspend-code">
<em class="iconfont code-icon if-saomao"></em>
<div class="code-content">
    <div>
        <p class="app-qrcode"></p>
        <p class="line-1">扫一扫体验APP</p>
        <em class="triangle iconfont if-triangle-right"></em>
    </div>
    <em class="code-close iconfont if-delete"></em>
</div>
</div>

<!-- to top -->
<div class="suspend-div suspend-top" style="display: block;">
<a class="to-top" href="javascript:scroll(0,0)<%--https://www.iwjw.com/#iwjw--%>">
                    <em class="iconfont"></em>
                    </a>
                    <em class="text">回到顶部
                        <i class="triangle iconfont if-triangle-right"></i>
                    </em>
                </div>

                <!-- 背景 -->
                <div class="suspend-back"></div>
            </div>
        </div>
    </div>


    <script type="text/javascript">
        var _vds = _vds || [];
        window._vds = _vds;
        (function () {
            _vds.push(['setAccountId', '9f6117ba867d4d36']);
            (function () {
                try {
                    var vds = document.createElement('script');
                    vds.type = 'text/javascript';
                    vds.async = true;
                    vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(vds, s);
                } catch (error) {
                }
            })();
        })();
    </script>
    <!--[if IE 8]>
    <script src='./js/es5-shim-sham_5.5.js'></script><![endif]-->
    <%--<script src="../../statics/js/common_72.js"></script>
    <script src="../../statics/js/index_74.js"></script>--%>
    <script src="https://www.iwjw.com/" async=""></script>
    <div class="mod-footer " style="height: 98px">
        <div class="footer-inner" style="height: 100px">
            <div class="footer-top clearfix">
                <div class="footer-t-l">
                    <div class="footer-t-nav">
                        <a href="https://www.iwjw.com/about/" rel="nofollow" class="footer-nav-item first">关于我们
                            <i class="footer-point clearfix">
                                <em class="footer-p-t"></em>
                                <em class="footer-p-b"></em>
                            </i>
                        </a>
                        <a href="https://www.iwjw.com/join/" rel="nofollow" class="footer-nav-item">加入我们
                            <i class="footer-point clearfix">
                                <em class="footer-p-t"></em>
                                <em class="footer-p-b"></em>
                            </i>
                        </a>
                        <a href="https://www.iwjw.com/delegation/" rel="nofollow" class="footer-nav-item">业主服务
                            <i class="footer-point clearfix">
                                <em class="footer-p-t"></em>
                                <em class="footer-p-b"></em>
                            </i>
                        </a>
                        <a href="https://www.iwlicai.com/about/alc" target="_blank" rel="nofollow"
                           class="footer-nav-item">关于吉爱财
                            <i class="footer-point clearfix">
                                <em class="footer-p-t"></em>
                                <em class="footer-p-b"></em>
                            </i>
                        </a>
                        <a href="https://www.iwjw.com/help" rel="nofollow" class="footer-nav-item">帮助中心
                            <i class="footer-point clearfix">
                                <em class="footer-p-t"></em>
                                <em class="footer-p-b"></em>
                            </i>
                        </a>
                        <a href="https://www.iwjw.com/sitemap/" class="footer-nav-item">网站地图
                            <i class="footer-point clearfix">
                                <em class="footer-p-t"></em>
                                <em class="footer-p-b"></em>
                            </i>
                        </a>
                        <a href="https://www.iwjw.com/protocol/u/" rel="nofollow" class="footer-nav-item">网站使用协议
                            <i class="footer-point clearfix">
                                <em class="footer-p-t"></em>
                                <em class="footer-p-b"></em>
                            </i>
                        </a>
                        <a href="https://www.iwjw.com/protocol/h/" rel="nofollow" class="footer-nav-item">中介服务协议</a>
                    </div>
                    <div class="footer-t-mid">
                        <span class="footer-t-m-item footer-t-m-item-copy"><i class="footer-copy">©</i>2014-2017  满懿 (上海) 房地产咨询有限公司</span>
                        <span class="footer-t-m-item">热线：400-700-6622</span>
                        <span class="footer-t-m-item">邮箱：cs@iwjw.com</span>
                        <a class="footer-t-m-item" href="http://weibo.com/u/5132568692/home?wvr=5" rel="nofollow"
                           target="_blank">
                            <img src="../../statics/images/background_img/if-weibo.PNG">
                            <!--<i class="iconfont if-weibo"></i>-->
                            <span>官方微博</span>
                        </a>
                        <a class="footer-t-m-item last footer-wechat">
                            <img src="../../statics/images/background_img/if-weixin.PNG">
                            <!--<i class="iconfont if-weixin"></i>-->
                            <span>微信公众号</span>
                            <b><img src="../../statics/images/WXcode.png"></b>
                        </a>
                    </div>
                    <div class="footer-t-bot">
                        <span class="footer-t-b-item"><a href="http://www.miitbeian.gov.cn/" rel="nofollow"
                                                         target="_blank">沪ICP备14020180</a></span>
                        <span class="footer-t-b-item">增值电信业务经营许可证：<a href="http://www.miit.cc/" target="_blank">沪B2-20160026</a></span>
                        <span class="footer-t-b-item last"><a target="_blank"
                                                              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010702001120"><img
                                class="v-middle record-img"
                                src="../../statics/images/ghs.png"> 沪公网安备 31010702001120号</a></span>
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
    <!-- 百度统计 -->

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
</body>
</html>
