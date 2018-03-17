<%--
  Created by IntelliJ IDEA.
  User: kgc
  Date: 2018/3/13
  Time: 18:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>广州二手房买卖-广州爱屋吉屋</title>
    <meta name="keywords" content="">
    <meta name="description" content="">

    <link rel="apple-touch-icon-precomposed" href="//resource.iwjw.com/iwjw-pc/img/common/logo_wx.png"/>
    <link rel="shortcut icon" href="//files.iwjw.com/icon/favicon.ico">
    <meta name="baidu-site-verification" content="rO1Bqg66kn"/>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <link rel="stylesheet" href='../../statics/css/common_72_1.css'>
    <link rel="stylesheet" href='../../statics/css/baike_61_1.css'>
    <link rel="stylesheet" href="../../statics/css/gfgl_css.css">
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
            staticTag: 'baike',
            recommendUrl: '//recommend.iwjw.com',
            videoSerUrl: '//video.iwjw.com/prev/pc/play.html',
            flag: '29',
            provinceId: '40000',
            ht: '',
            cookieUserId: 0,
            signin: '',
            //全局增加是否采用极验验证标志，1-采用，0-不采用
            geetestFlag: '1',
            timestamp: '1520932928203',
            canSellShow: 'true',
            canRentShow: 'true'
        };
        var _hmt = _hmt || [];
    </script>
</head>
<body>


<!--日志提交功能-->

<div id="iwjw" class="short-footer">
    <div class="iwjw-wrap">
        <div class="mod-header " id="Top">
            <dl class="header-wrap clearfix">
                <dt class="header-left clearfix">
                    <a class="logo" href="javascript:void(0)"
                    ><img src="../../statics/images/picture/iwjwlog_1.png" alt="爱屋吉屋" class="logo-img"></a>
                    <div class="city none nav-item">
                        <a class="province"></a>
                    </div>
                    <div class="nav-item" data-log="homepage"
                    ><a href="javascript:void(0)" class="nav-item-a ">首页</a></div>
                    <div class="nav-item" data-log="secondhouse">
                        <a href="javascript:void(0)"
                           class="nav-item-a ">二手房</a></div>
                    <div class="nav-item" data-log="rent">
                        <a href="javascript:void(0)"
                           class="nav-item-a ">租房</a></div>


                    <div class="nav-item nav-item-server" data-log="entrust">
                        <a href="javascript:void(0)" rel="nofollow"
                           class="nav-item-a "
                        >业主委托</a>
                    </div>

                    <div class="nav-item" data-log="baike">
                        <a class="nav-item-a active" href="javascript:void(0)">购房攻略 </a>
                    </div>
                    <div class="nav-item" data-log="ailicai">
                        <a href="javascript:void(0)" target="_blank" class="nav-item-a ailicai ">吉爱财</a>
                        <div class="header-new"></div>
                    </div>
                    <div class="nav-item" data-log="dzg">
                        <a href="javascript:void(0)" class="nav-item-a  "
                        >贷总管</a>
                    </div>
                    <div class="nav-item" data-log="appDownload">
                        <a href="javascript:void(0)" class="nav-item-a "
                        ><i class="iconfont if-mobile"></i>APP</a>
                    </div>
                </dt>

                <c:if test="${vistor==null}">
                <dd class="header-right clearfix"><div  class="nav-item"><a id="one" href="javascript:showBox()" class="login none nav-item-a login-require " target="_blank"><i class="nav-item-txt">登录<span class="slash">/</span>注册</i></a></div><div class="nav-item message-nav" id="message-nav"><div class="nav-message-wrap" data-reactid=".0"></div></div>
                    </c:if>
                    <c:if test="${vistor != null}">
                <dd class="header-right clearfix"><div class="nav-item"><a data-url="/userinfo/" class="login  nav-item-a login-require " target="_blank"><em class="iconfont if-menu"></em><i class="nav-item-txt">135****0667
                    <span class="shape-circle"></span></i></a><div class="user-down-wrap arrow-top nav-down-wrap"><a class="user-item" href="/userinfo/" id="username"><span class="iconfont">핰</span>我的账户

                    <i class="follow-point"></i></a><a class="user-item" href="/collectHouseList/" id="FollowDynamic"><span class="iconfont">홄</span>关注列表

                </a><!-- web 6.9 已下线 --><!-- <a class="user-item appoint-list" href="/seeHouseList/" id = "Itinerary"><span class="iconfont">&#xd571;</span>约看清单

   </a> --><a class="user-item house-schedule" href="/appointmentList/" id="Showings"><span class="iconfont">혤</span>看房日程

                </a><a class="user-item user-item-payorder" href="/order/"><span class="iconfont">퐀</span>合同订单

                </a><a class="user-item user-item-delegate_mng" href="/delegateManage/"><span class="iconfont">퐁</span>我的委托

                </a><a class="user-item user-item-agent" href="/agent/"><span class="iconfont">퐄</span>我的经纪人

                </a><a class="user-item user-item-complains" href="/complains/"><span class="iconfont">퐐</span>我的投诉

                </a><a class="user-item user-item-logout"><span class="iconfont">퐅</span>退出
                </a></div><!--  --></div><div class="nav-item message-nav" <%--id="message-nav"--%>><div class="nav-message-wrap" data-reactid=".0"><a class="nav-item-a message show-msg-down" data-reactid=".0.$1"><i class="nav-item-txt line" data-reactid=".0.$1.0"><i data-reactid=".0.$1.0.0">消息</i></i></a><div id="message-down-wrap" class="message-down-wrap nav-down-wrap arrow-top " data-reactid=".0.$2"><div class="message-list-wrap" data-reactid=".0.$2.0"><div class="msg-center-wrap" data-reactid=".0.$2.0.0"><a class="msg-center-a clearfix" href="/message/activity/" data-reactid=".0.$2.0.0.0"><div class="bell-bg f-l" data-reactid=".0.$2.0.0.0.0"><i class="iconfont if-bell" data-reactid=".0.$2.0.0.0.0.0"></i></div><p class="msg-center-tt f-l bold" data-reactid=".0.$2.0.0.0.1">消息中心</p></a></div><ul class="iwjwim-body" data-reactid=".0.$2.0.1"></ul></div></div></div></div>




                </dd>
                </c:if>

            </dl>
        </div>


        <div class="mod-baike" id="mod-baike">


            <div class="baike-wrap clearfix">
                <div class="left f-l">
                    <div class="head-banner clearfix ">


                        <%--333333333333333333333333333333333333333333--%>

                        <div id="slider-wraps" class="slide-wrap f-l">
                            <ul id="sliders">
                                <li class="slide-li f-l">
                                    <a class="banner1-a" data-logid="292"
                                       href="javascript:void(0)" target="_blank">
                                        <img src="../../statics/images/picture/fc835fe0175d4a6189ba034e71a4f570.jpg"
                                             class="slide-img"
                                             data-src="http://files.iwjw.com/directwaterbucket/newPurchaseEncy/2017/2/20/fc835fe0175d4a6189ba034e71a4f570"/>
                                        <div class="title-bg"><p class="banner-title bold">那些年一咬牙一跺脚买房的人，现在过的怎么样？</p>
                                        </div>
                                    </a>
                                </li>

                                <li class="slide-li f-l">
                                    <a class="banner1-a" data-logid="296"
                                       href="javascript:void(0)" target="_blank">
                                        <img src="../../statics/images/picture/284f3cb17d4542a2960aa4b51921847c.jpg"
                                             class="slide-img"
                                             data-src="http://files.iwjw.com/directwaterbucket/newPurchaseEncy/2017/3/13/284f3cb17d4542a2960aa4b51921847c"/>
                                        <div class="title-bg"><p class="banner-title bold">楼层越高噪声越大？错！中间楼层才最吵！</p></div>
                                    </a>
                                </li>

                                <li class="slide-li f-l">
                                    <a class="banner1-a" data-logid="295"
                                       href="javascript:void(0)" target="_blank">
                                        <img src="../../statics/images/picture/47066f86555741839fa282f7ef2e6065.jpg"
                                             class="slide-img"
                                             data-src="http://files.iwjw.com/directwaterbucket/newPurchaseEncy/2017/3/8/47066f86555741839fa282f7ef2e6065"/>
                                        <div class="title-bg"><p class="banner-title bold">零公摊都是在骗人，每平米都要花钱买！</p></div>
                                    </a>
                                </li>
                            </ul>
                            <!--controls-->
                            <div class="btnst" id="nexts"><img src="../../statics/images/house_images/right.png"
                                                               style="margin-top: 10px"></div>
                            <div class="btnst" id="previoust"><img src="../../statics/images/house_images/left.png"
                                                                   style="margin-top: 10px"></div>
                            <%-- 图片右上角显示index  --%>
                            <div id="counter"></div>

                            <%-- <div id="pagination-wraps">

                                 <ul>
                                 </ul>
                             </div>--%>
                            <!--controls-->

                        </div>

                        <%--rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr--%>


                        <%-- <div class="slide-wrap f-l">
                             <ul class="slide-ul clearfix">
                                 <li class="slide-li f-l">
                                     <a class="banner1-a" data-logid="292"
                                        href="javascript:void(0)" target="_blank">
                                         <img src="../../statics/images/picture/fc835fe0175d4a6189ba034e71a4f570.jpg" class="slide-img"
                                              data-src="http://files.iwjw.com/directwaterbucket/newPurchaseEncy/2017/2/20/fc835fe0175d4a6189ba034e71a4f570"/>
                                         <div class="title-bg"><p class="banner-title bold">那些年一咬牙一跺脚买房的人，现在过的怎么样？</p>
                                         </div>
                                     </a>
                                 </li>
                                 <li class="slide-li f-l">
                                     <a class="banner1-a" data-logid="296"
                                        href="javascript:void(0)" target="_blank">
                                         <img src="../../statics/images/picture/284f3cb17d4542a2960aa4b51921847c.jpg" class="slide-img"
                                              data-src="http://files.iwjw.com/directwaterbucket/newPurchaseEncy/2017/3/13/284f3cb17d4542a2960aa4b51921847c"/>
                                         <div class="title-bg"><p class="banner-title bold">楼层越高噪声越大？错！中间楼层才最吵！</p></div>
                                     </a>
                                 </li>
                                 <li class="slide-li f-l">
                                     <a class="banner1-a" data-logid="295"
                                        href="javascript:void(0)" target="_blank">
                                         <img src="../../statics/images/picture/47066f86555741839fa282f7ef2e6065.jpg" class="slide-img"
                                              data-src="http://files.iwjw.com/directwaterbucket/newPurchaseEncy/2017/3/8/47066f86555741839fa282f7ef2e6065"/>
                                         <div class="title-bg"><p class="banner-title bold">零公摊都是在骗人，每平米都要花钱买！</p></div>
                                     </a>
                                 </li>
                                 <li class="slide-li f-l">
                                     <a class="banner1-a" data-logid="292"
                                        href="javascript:void(0)" target="_blank">
                                         <img src="../../statics/images/picture/fc835fe0175d4a6189ba034e71a4f570.jpg" class="slide-img"
                                              data-src="http://files.iwjw.com/directwaterbucket/newPurchaseEncy/2017/2/20/fc835fe0175d4a6189ba034e71a4f570"/>
                                         <div class="title-bg"><p class="banner-title bold">那些年一咬牙一跺脚买房的人，现在过的怎么样？</p>
                                         </div>
                                     </a>
                                 </li>
                                 <li class="slide-li f-l">
                                     <a class="banner1-a" data-logid="296"
                                        href="javascript:void(0)" target="_blank">
                                         <img src="../../statics/images/picture/47066f86555741839fa282f7ef2e6065.jpg" class="slide-img"
                                              data-src="http://files.iwjw.com/directwaterbucket/newPurchaseEncy/2017/3/13/284f3cb17d4542a2960aa4b51921847c"/>
                                         <div class="title-bg"><p class="banner-title bold">楼层越高噪声越大？错！中间楼层才最吵！</p></div>
                                     </a>
                                 </li>

                             </ul>
                             <a class="arrow-common arr-left iconfont if-arrow-left bold">&#139</a>
                          <a class="arrow-common arr-right iconfont&lt;%&ndash; if-arrow-right&ndash;%&gt; bold">&#155</a>
                             <div class="dots-wrap clearfix">
                                 <a class="dots-a f-l active"></a>
                                 <a class="dots-a f-l "></a>
                                 <a class="dots-a f-l "></a>
                             </div>
                         </div>--%>


                        <div class="banner-right f-l">
                            <a class="banner-2" href="javascript:void(0)" target="_blank"
                               data-logid="288">
                                <img src="../../statics/images/picture/bf72657bf41d49d0a678f04eec340c69.jpg"
                                     class="banner-img"
                                     data-src="http://files.iwjw.com/directwaterbucket/newPurchaseEncy/2017/2/15/bf72657bf41d49d0a678f04eec340c69"
                                     data-need-resize="auto"/>
                                <div class="banner23-bg">
                                    <p class="banner23-title bold">80后都偏爱什么样的房子？</p>
                                </div>
                            </a>
                            <a class="banner-3" href="javascript:void(0)" target="_blank"
                               data-logid="289">
                                <img src="../../statics/images/picture/ad332f1611624cd393dd770fc18da959.jpg"
                                     class="banner-img"
                                     data-src="http://files.iwjw.com/directwaterbucket/newPurchaseEncy/2017/2/8/ad332f1611624cd393dd770fc18da959"
                                     data-need-resize="auto"/>
                                <div class="banner23-bg">
                                    <p class="banner23-title bold">精装房VS毛坯房，应该如何选择？</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="baike-content" id="baike-content">
                        <div data-reactid=".0">
                            <ul class="baike-nav clearfix" data-reactid=".0.0">
                                <li class="nav-li f-l active" data-reactid=".0.0.$0"><a class="nav-a"
                                                                                        data-reactid=".0.0.$0.0">全部文章</a>
                                </li>
                                <li class="nav-li f-l" data-reactid=".0.0.$1"><a class="nav-a"
                                                                                 data-reactid=".0.0.$1.0">热点楼市</a></li>
                                <li class="nav-li f-l" data-reactid=".0.0.$2"><a class="nav-a"
                                                                                 data-reactid=".0.0.$2.0">最新政策</a></li>
                                <li class="nav-li f-l" data-reactid=".0.0.$3"><a class="nav-a"
                                                                                 data-reactid=".0.0.$3.0">购房须知</a></li>
                                <li class="nav-li f-l" data-reactid=".0.0.$4"><a class="nav-a"
                                                                                 data-reactid=".0.0.$4.0">选房攻略</a></li>
                                <li class="nav-li f-l" data-reactid=".0.0.$5"><a class="nav-a"
                                                                                 data-reactid=".0.0.$5.0">签约要点</a></li>
                                <li class="nav-li f-l" data-reactid=".0.0.$6"><a class="nav-a"
                                                                                 data-reactid=".0.0.$6.0">贷款指南</a></li>
                                <li class="nav-li f-l" data-reactid=".0.0.$7"><a class="nav-a"
                                                                                 data-reactid=".0.0.$7.0">缴税过户</a></li>
                                <li class="nav-li f-l" data-reactid=".0.0.$8"><a class="nav-a"
                                                                                 data-reactid=".0.0.$8.0">典型案例</a></li>
                            </ul>
                            <ul class="baike-list" data-reactid=".0.1">
                                <li class="list-li clearfix" data-reactid=".0.1.$0">
                                    <div class="list-left f-l" data-reactid=".0.1.$0.0"><h4 data-reactid=".0.1.$0.0.0">
                                        <a
                                                class="list-title bold" href="https://www.iwjw.com/baike/2110/"
                                                target="_blank"
                                                data-reactid=".0.1.$0.0.0.0">热点城市房价持续降温：很多人等降价</a></h4>
                                        <div class="list-desc" data-reactid=".0.1.$0.0.1">
                                            由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。
                                        </div>
                                        <div class="classify-date" data-reactid=".0.1.$0.0.2"><span class="classify"
                                                                                                    data-reactid=".0.1.$0.0.2.0">热点楼市</span><span
                                                class="pub-date pad-left" data-reactid=".0.1.$0.0.2.1">2017-10-13</span>
                                        </div>
                                    </div>

                                    <a class="list-right f-l" href="https://www.iwjw.com/baike/2110/" target="_blank"
                                       data-reactid=".0.1.$0.1"><img
                                            src="../../statics/images/picture/fde82646dad344d78eecf400d79924c6.jpg"
                                            class="list-img"
                                            data-reactid=".0.1.$0.1.$//files=1iwjw=1com/directwaterbucket/newPurchaseEncy/2017/10/13/fde82646dad344d78eecf400d79924c6"></a>
                                </li>
                                <li class="list-li clearfix" data-reactid=".0.1.$1">
                                    <div class="list-left f-l" data-reactid=".0.1.$1.0"><h4 data-reactid=".0.1.$1.0.0">
                                        <a
                                                class="list-title bold" href="https://www.iwjw.com/baike/2109/"
                                                target="_blank"
                                                data-reactid=".0.1.$1.0.0.0">楼市十一遇冷 体现“房住不炒”政策导向</a></h4>
                                        <div class="list-desc" data-reactid=".0.1.$1.0.1">
                                            数据显示，国庆8天长假北京合计新建住宅签约222套，二手房住宅33套。其中，北京新建住宅前7天网签116套，二手房网签27套，均是2009年来的...
                                        </div>
                                        <div class="classify-date" data-reactid=".0.1.$1.0.2"><span class="classify"
                                                                                                    data-reactid=".0.1.$1.0.2.0">热点楼市</span><span
                                                class="pub-date pad-left" data-reactid=".0.1.$1.0.2.1">2017-10-13</span>
                                        </div>
                                    </div>
                                    <a class="list-right f-l" href="https://www.iwjw.com/baike/2109/" target="_blank"
                                       data-reactid=".0.1.$1.1"><img
                                            src="../../statics/images/picture/e42ba18290cc4ab2a03c96e6c268d4e1.jpg"
                                            class="list-img"
                                            data-reactid=".0.1.$1.1.$//files=1iwjw=1com/directwaterbucket/newPurchaseEncy/2017/10/13/e42ba18290cc4ab2a03c96e6c268d4e1"></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div class="right f-l">
                    <a id="ccs-topic-content" class="ccs-topic-content" href="/caichan/" target="_blank"></a>
                    <a class="special" href="javascript:void(0)" target="_blank" data-logid="8"
                       data-is-detail="">
                        <img src="../../statics/images/picture/7484e52f41fb4c5a8a6bdfd59cfc73ae.gif"
                             class="special-img">
                    </a>
                    <a class="special" href="javascript:void(0)" target="_blank" data-logid="5"
                       data-is-detail="">
                        <img src="../../statics/images/picture/745a8faf03b54450968eea51e95e92b3.gif"
                             class="special-img">
                    </a>
                    <div class="hot-article">
                        <h4 class="title-h4 bold"><span class="title-span">热门文章</span></h4>

                        <ul class="hot-list-wrap">
                            <li class="hot-list">
                                <a class="title-a bold" href="javascript:void(0)" target="_blank">最严调控半年：部分城市房价仍轮动上涨</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="javascript:void(0)" target="_blank">多地住房租赁体系将建
                                    一线城市近5年供应超250万套</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="javascript:void(0)" target="_blank">8月一线城市住宅成交疲软
                                    成交面积环比下降6.34%</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="javascript:void(0)" target="_blank">政策红利不断推出
                                    租房市场驶入发展快车道</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="javascript:void(0)" target="_blank">租售同权 年轻人真的不必买房了吗？</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="javascript:void(0)" target="_blank">统计局：7月一线房价趋于稳定
                                    二三线环比涨幅回落</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="javascript:void(0)" target="_blank">央行发布7月金融数据
                                    贷款利率或将上升引发关注</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="javascript:void(0)" target="_blank">统计局：前7月房地产投资增速回落
                                    过热局面降温</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <script type="text/javascript">
                window.pageConfig = window.pageConfig || {};
                window.pageConfig.baike = {
                    plateList: [{"id": 0, "title": "全部文章", "imageUrl": null}, {
                        "id": 52782,
                        "title": "热点楼市",
                        "imageUrl": "//files.iwjw.com/directwaterbucket/newPurchaseEncy/2016/11/21/779ef6c4275e4152b50361daec4ac0b1"
                    }, {
                        "id": 51794,
                        "title": "最新政策",
                        "imageUrl": "//files.iwjw.com/directwaterbucket/newPurchaseEncy/2016/11/21/01842bb6f47d47b2b78f68851c3a6545"
                    }, {
                        "id": 50156,
                        "title": "购房须知",
                        "imageUrl": "//files.iwjw.com/directwaterbucket/newPurchaseEncy/2016/11/21/0e1b9df5d89b46ee98a4bf78c5cfcfe3"
                    }, {
                        "id": 51988,
                        "title": "选房攻略",
                        "imageUrl": "//files.iwjw.com/directwaterbucket/newPurchaseEncy/2016/11/21/027b1f228541440db7fe428de1e5d312"
                    }, {
                        "id": 52126,
                        "title": "签约要点",
                        "imageUrl": "//files.iwjw.com/directwaterbucket/newPurchaseEncy/2016/11/21/c333545b342a4b61ac788118f4f31761"
                    }, {
                        "id": 52208,
                        "title": "贷款指南",
                        "imageUrl": "//files.iwjw.com/directwaterbucket/newPurchaseEncy/2016/11/21/29faa51e65d64ac29ab3e0cec0531e9f"
                    }, {
                        "id": 50035,
                        "title": "缴税过户",
                        "imageUrl": "//files.iwjw.com/directwaterbucket/newPurchaseEncy/2016/11/21/22e9c2e7753d45d6b0442d5f7d0b836e"
                    }, {
                        "id": 50898,
                        "title": "典型案例",
                        "imageUrl": "//files.iwjw.com/directwaterbucket/newPurchaseEncy/2016/11/21/693712899fc844f1b51889882e075fdf"
                    }],
                }
            </script>


        </div>
    </div>
</div>

<script src="js/gt_1.js"></script>

<script type="text/javascript">
    ;!function () {
        var popTpl = '<div class="ie-pop-wrap">' +
            '<div class="ie-pop-wrap-mask"></div>' +
            '<div class="ie-pop-layer-wrap">' +
            '<div class="ie-pop-layer">' +
            '<img class="ie-pop-layer-qrcode" src="../../statics/images/picture/getdynamicqrimage_1.action" />' +
            '<div class="ie-pop-layer-links">' +
            '<a target="_blank" href="javascript:void(0)">360安全</a>' +
            '<a target="_blank" href="javascript:void(0)">QQ浏览器</a>' +
            '<a target="_blank" href="javascript:void(0)">2345</a>' +
            '<a target="_blank" href="javascript:void(0)">搜狗高速</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        function isEdge() {
            var userAgent = window.navigator.userAgent;
            return userAgent.indexOf("Edge") > -1;
        }

        function isIE() {
            return !!window.ActiveXObject || ("ActiveXObject" in window);
        }

        if (isIE() || isEdge()) {
            var container = document.createElement('div');
            container.innerHTML = popTpl;
            document.body.appendChild(container.children[0]);
        }
    }();
</script>
<script type='text/javascript'>
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
<script src='js/es5-shim-sham_5.5_1.js'></script><![endif]-->
<script src='js/common_72_1.js'></script>
<script src='js/baike_72_1.js'></script>
<script src='' async></script>
<div class="mod-footer short-shift">
    <div class="footer-inner">
        <div class="footer-top clearfix">
            <div class="footer-t-l">
                <div class="footer-t-nav">
                    <a href="javascript:void(0)" rel="nofollow" class="footer-nav-item first">关于我们
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="javascript:void(0)" rel="nofollow" class="footer-nav-item">加入我们
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="javascript:void(0)" rel="nofollow" class="footer-nav-item">业主服务
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="javascript:void(0)" target="_blank" rel="nofollow" class="footer-nav-item">关于吉爱财
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="javascript:void(0)" rel="nofollow" class="footer-nav-item">帮助中心
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="javascript:void(0)" class="footer-nav-item">网站地图
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="javascript:void(0)" rel="nofollow" class="footer-nav-item">网站使用协议
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="javascript:void(0)" rel="nofollow" class="footer-nav-item">中介服务协议</a>
                </div>
                <div class="footer-t-mid">
                    <span class="footer-t-m-item footer-t-m-item-copy"><i class="footer-copy">&copy;</i>2014-2017  满懿 (上海) 房地产咨询有限公司</span>
                    <span class="footer-t-m-item">热线：400-700-6622</span>
                    <span class="footer-t-m-item">邮箱：cs@iwjw.com</span>
                    <a class="footer-t-m-item" href="javascript:void(0)" rel="nofollow"
                       target="_blank">
                        <i class="iconfont if-weibo"></i>
                        <span>官方微博</span>
                    </a>
                    <a class="footer-t-m-item last footer-wechat" class="wx iconfont">
                        <i class="iconfont if-weixin"></i>
                        <span>微信公众号</span>
                        <b><img src="../../statics/images/picture/wxcode_1.png"></b>
                    </a>
                </div>
                <div class="footer-t-bot">
                    <span class="footer-t-b-item"><a href="javascript:void(0)" rel="nofollow" target="_blank">沪ICP备14020180</a></span>
                    <span class="footer-t-b-item">增值电信业务经营许可证：<a href="http://www.miit.cc/"
                                                                 target="_blank">沪B2-20160026</a></span>
                    <span class="footer-t-b-item last"><a target="_blank"
                                                          href="javascript:void(0)"
                    ><img class="v-middle record-img" src="../../statics/images/picture/ghs_1.png"/> 沪公网安备 31010702001120号</a></span>
                </div>
            </div>
            <div class="footer-t-r">
                <img src="../../statics/images/picture/getdynamicqrimage_1.action" class="footer-qrcode"/>
            </div>
        </div>
    </div>
</div>
<div style="display:none">
    <script>
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?3a10bbf8b4afa9e5ab91d66b6944e813";
            hm.async = 1;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();

        var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
        document.write(unescape("%3Cscript async src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fd3a10bbf8b4afa9e5ab91d66b6944e813' type='text/javascript'%3E%3C/script%3E"));
    </script>
    <script type="text/javascript">
        //
        <!-- 其他统计 -->
        // var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1000539121'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s19.cnzz.com/z_stat.php%3Fid%3D1000539121' type='text/javascript'%3E%3C/script%3E"));

        //注册成功
        if ('' == '1') {
            _hmt.push(['_trackPageview', '/singup']);
        }
        //登录成功
        if ('' == '1') {
            _hmt.push(['_trackPageview', '/login']);
        }
        //立即约看
        // if('' > 0){
        //     var ht = '';
        //     if(ht=='1'){//出租
        //         _hmt.push(['_trackEvent', 'Look_house', 'apply_now','zufang']);//百度统计
        //     }else if(ht=='2'){//出售
        //         _hmt.push(['_trackEvent', 'Look_house', 'apply_now','esf']);//百度统计
        //     }
        // }
        //预约看房
        // if('' > 0){
        //     var ht = '';
        //     if(ht=='1'){//出租
        //         _hmt.push(['_trackEvent', 'Look_house', 'choose_time','zufang']);//百度统计
        //     }else if(ht=='2'){//出售
        //         _hmt.push(['_trackEvent', 'Look_house', 'choose_time','esf']);//百度统计
        //     }
        // }

        // //约看完成
        // if(''=='1'){
        //     if(''=='1'){//出租
        //         _hmt.push(['_trackEvent', 'Look_house', 'submit_apply','zufang']);//百度统计
        //     }else if(''=='2'){//出售
        //         _hmt.push(['_trackEvent', 'Look_house', 'submit_apply','esf']);//百度统计
        //     }
        //     _hmt.push(['_trackOrder', { "orderId": "", "orderTotal": "", "item": JSON.stringify()} ]);
        // }
    </script>

</div>

<script src="../../statics/js/jquery.min.js"></script>
<script type="text/javascript" src="../../statics/js/slide.js"></script>
</body>
</html>
