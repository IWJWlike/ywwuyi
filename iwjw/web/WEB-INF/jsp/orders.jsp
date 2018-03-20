<%--
  Created by IntelliJ IDEA.
  User: 42958
  Date: 2018/3/17
  Time: 13:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<!-- saved from url=(0026)https://www.iwjw.com/order -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>我的订单</title>
    <meta name="keywords" content="">
    <meta name="description" content="">

    <link rel="apple-touch-icon-precomposed" href="../../statics/images/logo_wx.png">
    <link rel="shortcut icon" href="https://files.iwjw.com/icon/favicon.ico">
    <meta name="baidu-site-verification" content="rO1Bqg66kn">
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="../../statics/css/common_72.css">
    <link rel="stylesheet" href="../../statics/css/payorder_67.css">
    <script charset="utf-8" src="../../statics/js/v.js"></script><script src="../../statics/js/hm.js" async=""></script><script type="text/javascript" async="" src="../../statics/js/vds.js"></script><script>
        ;(function () {
            if(location.hostname.indexOf('iwjw.com') != -1 && location.hostname.indexOf('pcbeta') == -1 && location.protocol == 'http:'){
                location.href = location.href.replace('http://','https://')
            }
        })()
        window.pageConfig = {
            siteUrl: "//www.iwjw.com",
            mobileSiteUrl: '//m.iwjw.com',
            mobileSiteUrlHasProtocol: 'https://m.iwjw.com',
            selectCity : false,
            map :{
                province:[{"pname":"上海","pid":2,"pinyin":"shanghai"},{"pname":"北京","pid":12438,"pinyin":"beijing"},{"pname":"广州","pid":40000,"pinyin":"guangzhou"},{"pname":"深圳","pid":56000,"pinyin":"shenzhen"},{"pname":"杭州","pid":71049,"pinyin":"hangzhou"},{"pname":"天津","pid":71099,"pinyin":"tianjin"},{"pname":"南京","pid":86724,"pinyin":"nanjing"},{"pname":"武汉","pid":86725,"pinyin":"wuhan"},{"pname":"成都","pid":98289,"pinyin":"chengdu"},{"pname":"重庆","pid":98290,"pinyin":"chongqing"}]
            } ,
            datacollectUrl:'//plog.iwjw.com/dataCollect/',
            staticUrl: '' || '//resource.iwjw.com/iwjw-pc/',
            staticTag: 'payorder',
            recommendUrl:'//recommend.iwjw.com',
            videoSerUrl:'//video.iwjw.com/prev/pc/play.html',
            flag: '26',
            provinceId: '40000',
            ht: '',
            cookieUserId: 3852347,
            signin: '',
            //全局增加是否采用极验验证标志，1-采用，0-不采用
            geetestFlag: '1',
            timestamp: '1521270680954',
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
                <dd class="header-right clearfix"><div class="nav-item"><a data-url="/userinfo/" class="login  nav-item-a login-require active" target="_blank"><em class="iconfont if-menu"></em><i class="nav-item-txt">135****0667
                    <span class="shape-circle"></span></i></a><div class="user-down-wrap arrow-top nav-down-wrap"><a class="user-item" href="https://www.iwjw.com/userinfo/" id="username"><span class="iconfont">핰</span>我的账户

                    <i class="follow-point"></i></a><a class="user-item" href="https://www.iwjw.com/collectHouseList/" id="FollowDynamic"><span class="iconfont">홄</span>关注列表

                </a><!-- web 6.9 已下线 --><!-- <a class="user-item appoint-list" href="/seeHouseList/" id = "Itinerary"><span class="iconfont">&#xd571;</span>约看清单

   </a> --><a class="user-item house-schedule" href="https://www.iwjw.com/appointmentList/" id="Showings"><span class="iconfont">혤</span>看房日程

                </a><a class="user-item user-item-payorder" href="https://www.iwjw.com/order/"><span class="iconfont">퐀</span>合同订单

                </a><a class="user-item user-item-delegate_mng" href="https://www.iwjw.com/delegateManage/"><span class="iconfont">퐁</span>我的委托

                </a><a class="user-item user-item-agent" href="https://www.iwjw.com/agent/"><span class="iconfont">퐄</span>我的经纪人

                </a><a class="user-item user-item-complains" href="https://www.iwjw.com/complains/"><span class="iconfont">퐐</span>我的投诉

                </a><a class="user-item user-item-logout"><span class="iconfont">퐅</span>退出
                </a></div><!--  --></div><div class="nav-item message-nav" id="message-nav"><div class="nav-message-wrap" data-reactid=".1"><a class="nav-item-a message show-msg-down" data-reactid=".1.$1"><i class="nav-item-txt line" data-reactid=".1.$1.0"><i data-reactid=".1.$1.0.0">消息</i></i></a><div id="message-down-wrap" class="message-down-wrap nav-down-wrap arrow-top " data-reactid=".1.$2"><div class="message-list-wrap" data-reactid=".1.$2.0"><div class="msg-center-wrap" data-reactid=".1.$2.0.0"><a class="msg-center-a clearfix" href="https://www.iwjw.com/message/activity/" data-reactid=".1.$2.0.0.0"><div class="bell-bg f-l" data-reactid=".1.$2.0.0.0.0"><i class="iconfont if-bell" data-reactid=".1.$2.0.0.0.0.0"></i></div><p class="msg-center-tt f-l bold" data-reactid=".1.$2.0.0.0.1">消息中心</p></a></div><ul class="iwjwim-body" data-reactid=".1.$2.0.1"></ul></div></div></div></div>




                </dd>
            </dl>
        </div>




        <div class="mod-payorder" id="mod-payorder"><div class="layout-wrap layout-ucenter" data-reactid=".0"><div class="layout-row" data-reactid=".0.0"><div class="layout-col-2" data-reactid=".0.0.0"><div id="js-nav-wrap" data-reactid=".0.0.0.0"><div class="wrap-nav" data-reactid=".0.0.0.0.0"><div class="j-nav-label" style="top:16px;" data-reactid=".0.0.0.0.0.0"></div><ul class="nav-menus" data-reactid=".0.0.0.0.0.1"><li class="left-menus-item active" data-reactid=".0.0.0.0.0.1.$0"><a href="https://www.iwjw.com/order" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$0.0"><i class="iconfont left-nav-iconfont if-pay-order" data-reactid=".0.0.0.0.0.1.$0.0.0"></i><span data-reactid=".0.0.0.0.0.1.$0.0.1">合同订单</span></a></li><li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$1"><a href="https://www.iwjw.com/agent" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$1.0"><i class="iconfont left-nav-iconfont if-house-consultant" data-reactid=".0.0.0.0.0.1.$1.0.0"></i><span data-reactid=".0.0.0.0.0.1.$1.0.1">我的经纪人</span></a></li><li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$2"><a href="https://www.iwjw.com/delegateManage" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$2.0"><i class="iconfont left-nav-iconfont if-entrust-mgmt" data-reactid=".0.0.0.0.0.1.$2.0.0"></i><span data-reactid=".0.0.0.0.0.1.$2.0.1">我的委托</span></a></li><li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$3"><a href="https://www.iwjw.com/complains" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$3.0"><i class="iconfont left-nav-iconfont if-complaints" data-reactid=".0.0.0.0.0.1.$3.0.0"></i><span data-reactid=".0.0.0.0.0.1.$3.0.1">我的投诉</span></a></li><li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$4"><a href="https://www.iwjw.com/userinfo" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$4.0"><i class="iconfont left-nav-iconfont if-login-register" data-reactid=".0.0.0.0.0.1.$4.0.0"></i><span data-reactid=".0.0.0.0.0.1.$4.0.1">我的账户</span></a></li><li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$5"><a href="javascript:void(0)" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$5.0"><i class="iconfont left-nav-iconfont if-exit-login" data-reactid=".0.0.0.0.0.1.$5.0.0"></i><span data-reactid=".0.0.0.0.0.1.$5.0.1">退出登录</span></a></li></ul></div></div></div><div class="layout-col-10 iwjw-right" data-reactid=".0.0.1"><div class="mod-order-list" data-reactid=".0.0.1.0"><div class="order-list-wrap" data-reactid=".0.0.1.0.0"><div data-reactid=".0.0.1.0.0.0"><div class="message-box message-empty" data-reactid=".0.0.1.0.0.0.1"><div class="message-in" data-reactid=".0.0.1.0.0.0.1.0"><i class="iconfont message-icon" data-reactid=".0.0.1.0.0.0.1.0.0">퐉</i><p class="message-sub" data-reactid=".0.0.1.0.0.0.1.0.1"></p><p class="message" data-reactid=".0.0.1.0.0.0.1.0.2">当前没有任何订单</p></div></div></div></div></div></div></div></div></div>
        <div class="suspend-wrap">

            <!-- feedback -->
            <a href="https://www.iwjw.com/gofeedback#https%3A%2F%2Fwww.iwjw.com%2Forder" class="suspend-div suspend-report j-feedback" target="_blank">
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
            <div class="suspend-div suspend-top">
                <a class="to-top" href="https://www.iwjw.com/order#iwjw">
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
    ;!function(){
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
</script><script type="text/javascript">
    var _vds = _vds || [];
    window._vds = _vds;
    (function(){
        _vds.push(['setAccountId', '9f6117ba867d4d36']);
        (function() {
            try{
                var vds = document.createElement('script');
                vds.type='text/javascript';
                vds.async = true;
                vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(vds, s);
            }catch(error){
            }
        })();
    })();
</script><!--[if IE 8]> <script src='../../statics/js/es5-shim-sham_5.5.js'></script><![endif]-->
<script src="../../statics/js/common_72.js"></script>
<script src="../../statics/js/payorder_72.js"></script>
<script src="https://www.iwjw.com/order" async=""></script>
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
                    <a class="footer-t-m-item" href="http://weibo.com/u/5132568692/home?wvr=5" rel="nofollow" target="_blank">
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
                    <span class="footer-t-b-item">增值电信业务经营许可证：<a href="http://www.miit.cc/" target="_blank">沪B2-20160026</a></span>
                    <span class="footer-t-b-item last"><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010702001120"><img class="v-middle record-img" src="./我的订单_files/ghs.png"> 沪公网安备 31010702001120号</a></span>
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
        (function() {
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?3a10bbf8b4afa9e5ab91d66b6944e813";
            hm.async = 1;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();

        var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
        document.write(unescape("%3Cscript async src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fd3a10bbf8b4afa9e5ab91d66b6944e813' type='text/javascript'%3E%3C/script%3E"));
    </script><script async="" src="../../statics/js/h.js" type="text/javascript"></script>    <script type="text/javascript">
    //<!-- 其他统计 -->
    // var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1000539121'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s19.cnzz.com/z_stat.php%3Fid%3D1000539121' type='text/javascript'%3E%3C/script%3E"));

    //注册成功
    if(''=='1'){
        _hmt.push(['_trackPageview', '/singup']);
    }
    //登录成功
    if(''=='1'){
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



</body></html>