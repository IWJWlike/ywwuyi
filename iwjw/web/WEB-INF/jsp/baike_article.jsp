<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/3/18 0018
  Time: 10:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<!-- saved from url=(0032)https://www.iwjw.com/baike/2110/ -->
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script charset="utf-8" src="./热点城市房价持续降温：很多人等降价-爱屋吉屋_files/v.js.下载"></script>

    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>热点城市房价持续降温：很多人等降价-爱屋吉屋</title>
    <meta name="keywords" content="">
    <meta name="description" content="">

    <link rel="apple-touch-icon-precomposed" href="../../statics/images/logo_wx.png">
    <link rel="shortcut icon" href="https://files.iwjw.com/icon/favicon.ico">
    <meta name="baidu-site-verification" content="rO1Bqg66kn">
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="../../statics/css/common_72.css">
    <link rel="stylesheet" href="../../statics/css/baike_61.css">
    <script src="../../statics/js/hm.js" async=""></script>
    <script type="text/javascript" async="" src="../../statics/js/vds.js"></script>
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
            timestamp: '1521340969960',
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
                    <a class="logo" href="#"><img src="../../statics/images/iwjwlog.png" alt="爱屋吉屋"
                                                  class="logo-img"></a>
                    <div class="city nav-item">
                        <a class="province" provinceid="40000" provincepy="guangzhou">广州<i class="iconfont">혟</i></a>
                    </div>
                    <div class="nav-item" data-log="homepage"><a href="https://www.iwjw.com/" class="nav-item-a active">首页</a>
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
            </dl>
        </div>


        <div class="mod-baike" id="mod-baike">


            <div class="baike-wrap clearfix">
                <div class="detail-left f-l">
                    <div class="detail-content" onselectstart="return false;">
                        <p class="detail-title bold"
                           data-id="http://files.iwjw.com/directwaterbucket/newPurchaseEncy/2017/10/13/fde82646dad344d78eecf400d79924c6">
                            ${article.title}</p>
                        <p class="subtitle">
                            <span class="block">${article.plateId}</span>
                            <span class="date"><fmt:formatDate value='${article.createDate}' pattern='yyyy.MM.dd'/></span>
                            <span class="from">来源：经济参考报</span>
                        </p>
                        <div class="content">
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">“十一”黄金周前，桂林、重庆、南昌、石家庄、西安等超过十个城市楼市调控再次加码。自去年9月底以来，从限购、限贷、限价、限售、限商的“五限”到“购租并举”“租售同权”，已有超百城市发布150余次楼市调控政策。</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">在轮番政策影响下，十一假期期间，以一线城市为代表的全国热点城市房价持续降温。</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">在北京，新房市场颇为冷清，不少楼盘的看房者显得稀稀疏疏。在位于房山长阳镇的一个项目，200套住宅即将入市。“项目交通方便，以小户型为主，适合刚需人群。本以为会十分抢手，但现在关注的人太少了。”一位销售顾问告诉记者，项目在节前就开始推广宣传，现在有购买意向的人还不到200人。</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">在上海新房市场，不少开发商积极蓄客，为后市开盘做准备，多家在售楼盘还利用假期“彻夜”加班。“今年国庆行情萧条许多，很多人都等着降价。”一位置业顾问说，“不少顾客只是顺路来看看，下单的几乎没有。”</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">二手房市场也是寒意逼人。在北京清河附近的一家知名中介门店，经纪人郭先生假期依然十分“忙碌”，与以往忙着带客户看房不同，这次忙的是稳住一些潜在客户，给他们打电话推荐房源。小郭说，长假前6天，他所在的门店已经卖出了两套房。“现在来看房的客户基本都是刚需自住，也有少数投资者电话咨询，但看到房价处于下行通道，观望情绪浓重。”</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">记者走访上海发现，几家大型房产中介门店几乎无人问津。位于市中心城区一家门店店长告诉记者，9月以来，看房人数一直处于低位，买家和卖家的观望气氛均浓厚，看房量急剧下降。</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">随着楼市清冷，记者注意到，在业绩和资金回笼压力之下，一些新房项目开始推出了特价房源以及相关优惠，以让利的方式吸引成交，而二手房方面买家议价能力变强。</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">记者走访广州多个新房项目发现，各楼盘主推的产品均以“刚需”盘为主。“现在没有炒楼客了，都是‘刚需’‘刚改’的客户，各个楼盘的价格也实在了很多。”多位销售告诉记者。记者发现，一些楼盘价格开始降价优惠，如有的项目推出特价房，某楼盘出台存4万抵10万元的优惠。</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">在上海，多家二手房中介负责人说，由于交易清淡，不少房主的挂牌意愿不高，挂牌量一路下滑。但就挂出的房源来看，房主降价动力增强，买家议价幅度在3%-5%。</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><a name="page2" id="page2"></a></p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">黄金周热点城市楼市降温已是不争的事实。据统计数据显示，黄金周前6天，监控的热点30城市网签大幅下调，平均跌幅达到了8成。数据显示其中，北京新建住宅前6日网签78套，二手房网签23套，同比跌幅达到了72%；上海前6日网签新建住宅147套，同比跌幅达到了78%；广州今年十一假期前后总推货量2090套，比去年同比下降65%，总成交货量872套，比去年同期下降78%。另外包括福州、南京、厦门等热点二线城市成交量也明显低于去年同期。</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">数据显示，国庆期间，三四线城市成交同比也仅仅基本持平。</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">黄金周热点城市楼市冷淡，也是今年整个市场行情的延续。中原地产数据显示，1-9月，北京、上海、广州、深圳等一线城市，平均成交跌幅达到了40%，其中北京跌幅达到了45%，深圳达到47%。二线城市之前的热点城市，南京下调了57%，福州下调60%。</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">在分析师看来，今年黄金周楼市清冷开局将给热点城市10月的成交数据带来较大的影响，“银十”或风光不再。“热点城市黄金周楼市萧条的主要原因是政策持续加码，在多地轮番调控加码的背景下，大多数消费者目前处于观望状态。”</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><a name="page3" id="page3"></a></p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">多位业内人士认为，由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。按目前状况来看，四季度提前进入交易平淡期的可能性非常大。</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">专家表示，“在政策并无松动可能的环境下，市场的回温比较有限。由于热点城市前期涨幅较大，目前依然还有下降空间，如果政策继续维持现有力度甚至加码，房价继续下跌的可能性很大。”</span>
                            </p>
                            <p style="line-height:2em;margin-bottom:20px;"><span
                                    style="font-size:18px;font-family:microsoft yahei;">“调控步伐不会停，长效机制是重头戏”，在专家看来，差别化楼市调控会继续收紧，对于政策放松的幻想应该减少，这有助于当前房地产市场的稳定和发展。他认为，在后续政策方面，租赁市场、集体建设用地、共有产权住房、融资等方面预计都会有新的政策内容。</span>
                            </p>
                            <p><br></p>
                        </div>
                    </div>
                    <div class="detail-dot">
                        <p class="dot-circle"><i class="dz iconfont if-spot"></i></p>
                        <p class="dot-desc" data-count="22"><span class="dot-text" data-id="2110">${article.likes}</span>人觉得有用</p>
                        <p class="plus-one hide">+1</p>
                    </div>
                    <div class="detail-share">
                        <i class="wx iconfont if-weixin" data-id="guangzhou/52782/2110"></i>
                        <span class="share">分享至微信</span>
                    </div>
                    <div class="close-article">
                        <h3 class="title-h4 bold">
                            <span class="title-span">相关阅读</span>
                        </h3>
                        <ul class="close-ul clearfix">
                            <li class="close-li f-l">
                                <a class="close-a" href="https://www.iwjw.com/baike/1988/">
                                    <div class="close-img-wrap">
                                        <img src="../../statics/images/link_img/8607a1f724cd41b59135aff3d92a1608.jpg"
                                             class="close-img">
                                    </div>
                                    <h4 class="read-name">我国房地产的开发投资增长速度年内首次出现回落</h4>
                                </a>
                            </li>
                            <li class="close-li f-l">
                                <a class="close-a" href="https://www.iwjw.com/baike/1994/">
                                    <div class="close-img-wrap">
                                        <img src="../../statics/images/link_img/d57944cba6eb4e55a4bd0bc46e62b810.jpg"
                                             class="close-img">
                                    </div>
                                    <h4 class="read-name">银行大幅上调首套房贷利率 这些人最受影响</h4>
                                </a>
                            </li>
                            <li class="close-li f-l">
                                <a class="close-a" href="https://www.iwjw.com/baike/1998/">
                                    <div class="close-img-wrap">
                                        <img src="../../statics/images/link_img/09edecb1af034872914d53db9cfec59b.jpg"
                                             class="close-img">
                                    </div>
                                    <h4 class="read-name">70城楼市稳中有降 热点调控城市“降温”明显</h4>
                                </a>
                            </li>
                            <li class="close-li f-l">
                                <a class="close-a" href="https://www.iwjw.com/baike/2095/">
                                    <div class="close-img-wrap">
                                        <img src="../../statics/images/link_img/a402118a167544de94aa6f7683441fcd.jpg"
                                             class="close-img">
                                    </div>
                                    <h4 class="read-name">二手市场:便宜 30 万的‘’内部转名房‘’可以买吗？</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="right f-l">
                    <a id="ccs-topic-content" class="ccs-topic-content" href="https://www.iwjw.com/caichan/"
                       target="_blank"></a>
                    <a class="special" href="https://www.iwjw.com/baike/1741/" data-logid="8" data-is-detail="1">
                        <img src="../../statics/images/link_img/3a5811d0a5a84a099085033df8e011fd.jpg" class="special-img">
                    </a>
                    <a class="special" href="https://www.iwjw.com/baike/1177/" data-logid="5" data-is-detail="1">
                        <img src="../../statics/images/link_img/1bb768142de940458ae01957c6d2891c.jpg" class="special-img">
                    </a>
                    <div class="hot-article">
                        <h4 class="title-h4 bold"><span class="title-span">热门文章</span></h4>
                        <ul class="hot-list-wrap">
                            <li class="hot-list">
                                <a class="title-a bold" href="https://www.iwjw.com/baike/2098/">最严调控半年：部分城市房价仍轮动上涨</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="https://www.iwjw.com/baike/2097/">多地住房租赁体系将建
                                    一线城市近5年供应超250万套</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="https://www.iwjw.com/baike/2093/">8月一线城市住宅成交疲软
                                    成交面积环比下降6.34%</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="https://www.iwjw.com/baike/2088/">政策红利不断推出 租房市场驶入发展快车道</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="https://www.iwjw.com/baike/2083/">租售同权 年轻人真的不必买房了吗？</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="https://www.iwjw.com/baike/2078/">统计局：7月一线房价趋于稳定
                                    二三线环比涨幅回落</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="https://www.iwjw.com/baike/2075/">央行发布7月金融数据
                                    贷款利率或将上升引发关注</a>
                            </li>
                            <li class="hot-list">
                                <a class="title-a bold" href="https://www.iwjw.com/baike/2074/">统计局：前7月房地产投资增速回落
                                    过热局面降温</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="suspend-wrap" style="bottom: 80px;">

            <!-- feedback -->
            <a href="https://www.iwjw.com/gofeedback#https%3A%2F%2Fwww.iwjw.com%2Fbaike%2F2110%2F"
               class="suspend-div suspend-report j-feedback" target="_blank">
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
            <div class="suspend-div suspend-top" style="display: none;">
                <a class="to-top" href="https://www.iwjw.com/baike/2110/#iwjw">
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

<script src="../../statics/js/gt.js"></script>

<script type="text/javascript">
    ;!function () {
        var popTpl = '<div class="ie-pop-wrap">' +
            '<div class="ie-pop-wrap-mask"></div>' +
            '<div class="ie-pop-layer-wrap">' +
            '<div class="ie-pop-layer">' +
            '<img class="ie-pop-layer-qrcode" src="../../statics/images/getDynamicQRImage.png" />' +
            '<div class="ie-pop-layer-links">' +
            '<a target="_blank" href="http://se.360.cn/">360安全</a>' +
            '<a target="_blank" href="http://browser.qq.com/">QQ浏览器</a>' +
            '<a target="_blank" href="http://ie.2345.cc/">2345</a>' +
            '<a target="_blank" href="http://ie.sogou.com/">搜狗高速</a>' +
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
<script src='../../statics/js/es5-shim-sham_5.5.js'></script><![endif]-->
<script src="../../statics/js/common_72.js"></script>
<script src="../../statics/js/baike_72.js"></script>
<script src="https://www.iwjw.com/baike/2110/" async=""></script>
<div class="mod-footer short-shift">
    <div class="footer-inner">
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
                    <a href="https://www.iwlicai.com/about/alc" target="_blank" rel="nofollow" class="footer-nav-item">关于吉爱财
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
                        <i class="iconfont if-weibo"></i>
                        <span>官方微博</span>
                    </a>
                    <a class="footer-t-m-item last footer-wechat">
                        <i class="iconfont if-weixin"></i>
                        <span>微信公众号</span>
                        <b><img src="../../statics/images/WXcode.png"></b>
                    </a>
                </div>
                <div class="footer-t-bot">
                    <span class="footer-t-b-item"><a href="http://www.miitbeian.gov.cn/" rel="nofollow" target="_blank">沪ICP备14020180</a></span>
                    <span class="footer-t-b-item">增值电信业务经营许可证：<a href="http://www.miit.cc/"
                                                                 target="_blank">沪B2-20160026</a></span>
                    <span class="footer-t-b-item last"><a target="_blank"
                                                          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010702001120"><img
                            class="v-middle record-img" src="../../statics/images/ghs.png"> 沪公网安备 31010702001120号</a></span>
                </div>
            </div>
            <div class="footer-t-r">
                <img src="../../statics/images/getDynamicQRImage.png" class="footer-qrcode">
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
    <script async="" src="../../statics/js/h.js" type="text/javascript"></script>
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
<!-- 百度统计 -->


</body>
</html>
