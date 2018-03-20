<%--
  Created by IntelliJ IDEA.
  User: 42958
  Date: 2018/3/17
  Time: 13:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>看房顾问-爱屋吉屋</title>
    <meta name="keywords" content="">
    <meta name="description" content="">

    <link rel="apple-touch-icon-precomposed" href="//resource.iwjw.com/iwjw-pc/img/common/logo_wx.png"/>
    <link rel="shortcut icon" href="//files.iwjw.com/icon/favicon.ico">
    <meta name="baidu-site-verification" content="rO1Bqg66kn" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <link rel="stylesheet" href='../../statics/css/common_72.css'>
    <link rel="stylesheet" href='../../statics/css/agent_67.css'>

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
                <dd class="header-right clearfix">
                    <div class="nav-item">
                        <a class="login none nav-item-a">正在读取...</a>
                    </div>


                </dd>
            </dl>
        </div>




        <div class="mod-agent" id="mod-agent">
            <div class="layout-wrap layout-ucenter" data-reactid=".0">
                <div class="layout-row" data-reactid=".0.0">
                    <div class="layout-col-2" data-reactid=".0.0.0">
                        <div id="js-nav-wrap" data-reactid=".0.0.0.0">
                            <div class="wrap-nav" data-reactid=".0.0.0.0.0">
                                <div class="j-nav-label" style="top:81px;" data-reactid=".0.0.0.0.0.0"></div>
                                <ul class="nav-menus" data-reactid=".0.0.0.0.0.1">
                                    <li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$0">
                                        <a href="/order" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$0.0">
                                            <i class="iconfont left-nav-iconfont if-pay-order" data-reactid=".0.0.0.0.0.1.$0.0.0"></i>
                                            <span data-reactid=".0.0.0.0.0.1.$0.0.1">合同订单</span>
                                        </a></li>
                                    <li class="left-menus-item active" data-reactid=".0.0.0.0.0.1.$1">
                                        <a href="/agent" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$1.0">
                                            <i class="iconfont left-nav-iconfont if-house-consultant" data-reactid=".0.0.0.0.0.1.$1.0.0">
                                            </i><span data-reactid=".0.0.0.0.0.1.$1.0.1">我的经纪人</span></a></li>
                                    <li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$2">
                                        <a href="/delegateManage" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$2.0">
                                            <i class="iconfont left-nav-iconfont if-entrust-mgmt" data-reactid=".0.0.0.0.0.1.$2.0.0"></i>
                                            <span data-reactid=".0.0.0.0.0.1.$2.0.1">我的委托</span></a></li>
                                    <li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$3">
                                        <a href="/complains" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$3.0">
                                            <i class="iconfont left-nav-iconfont if-complaints" data-reactid=".0.0.0.0.0.1.$3.0.0"></i>
                                            <span data-reactid=".0.0.0.0.0.1.$3.0.1">我的投诉</span></a></li>
                                    <li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$4">
                                        <a href="/userinfo" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$4.0">
                                            <i class="iconfont left-nav-iconfont if-login-register" data-reactid=".0.0.0.0.0.1.$4.0.0"></i>
                                            <span data-reactid=".0.0.0.0.0.1.$4.0.1">我的账户</span></a></li>
                                    <li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$5">
                                        <a href="javascript:void(0)" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$5.0">
                                            <i class="iconfont left-nav-iconfont if-exit-login" data-reactid=".0.0.0.0.0.1.$5.0.0"></i>
                                            <span data-reactid=".0.0.0.0.0.1.$5.0.1">退出登录</span></a></li></ul></div></div></div>
                    <div class="layout-col-10 iwjw-right" data-reactid=".0.0.1"><div data-reactid=".0.0.1.0">
                        <div class="j-agent-list" data-reactid=".0.0.1.0.0"><span data-reactid=".0.0.1.0.0.0"></span>
                            <noscript data-reactid=".0.0.1.0.0.4"></noscript></div>
                        <div class="j-complaint-box" data-reactid=".0.0.1.0.1"></div></div></div></div></div></div>
    </div>
</div>

<!--[if IE 8]> <script src='../../statics/js/es5-shim-sham_5.5.js'></script><![endif]-->
<script src='../../statics/js/agent_72.js'></script>
<script src='' async></script>
<div class="mod-footer short-shift">
    <div class="footer-inner">
        <div class="footer-top clearfix">
            <div class="footer-t-l">
                <div class="footer-t-nav">
                    <a href="/about/" rel="nofollow" class="footer-nav-item first">关于我们
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="/join/" rel="nofollow" class="footer-nav-item">加入我们
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="/delegation/" rel="nofollow" class="footer-nav-item">业主服务
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="//www.iwlicai.com/about/alc" target="_blank" rel="nofollow" class="footer-nav-item">关于吉爱财
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href = "/help" rel="nofollow" class="footer-nav-item">帮助中心
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="/sitemap/" class="footer-nav-item">网站地图
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="/protocol/u/" rel="nofollow" class="footer-nav-item">网站使用协议
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="/protocol/h/" rel="nofollow" class="footer-nav-item">中介服务协议</a>
                </div>
                <div class="footer-t-mid">
                    <span class="footer-t-m-item footer-t-m-item-copy"><i class="footer-copy">&copy;</i>2014-2017  满懿 (上海) 房地产咨询有限公司</span>
                    <span class="footer-t-m-item">热线：400-700-6622</span>
                    <span class="footer-t-m-item">邮箱：cs@iwjw.com</span>
                    <a class="footer-t-m-item" href="http://weibo.com/u/5132568692/home?wvr=5" rel="nofollow" target="_blank">
                        <i class="iconfont if-weibo"></i>
                        <span>官方微博</span>
                    </a>
                    <a class="footer-t-m-item last footer-wechat" class="wx iconfont">
                        <i class="iconfont if-weixin"></i>
                        <span>微信公众号</span>
                        <b><img src="../../statics/images/picture/wxcode.png"></b>
                    </a>
                </div>
                <div class="footer-t-bot">
                    <span class="footer-t-b-item"><a href="http://www.miitbeian.gov.cn" rel="nofollow" target="_blank">沪ICP备14020180</a></span>
                    <span class="footer-t-b-item">增值电信业务经营许可证：<a href="http://www.miit.cc/" target="_blank">沪B2-20160026</a></span>
                    <span class="footer-t-b-item last"><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010702001120"
                    ><img class="v-middle record-img" src="../../statics/images/picture/ghs.png" /> 沪公网安备 31010702001120号</a></span>
                </div>
            </div>
            <div class="footer-t-r">
                <img src="../../statics/images/picture/getdynamicqrimage.action" class="footer-qrcode" />
            </div>
        </div>
    </div>
</div>
<div style="display:none" >
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
    </script>

</div>


</body>
</html>
