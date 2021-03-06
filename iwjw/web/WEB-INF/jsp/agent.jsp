<%--
  Created by IntelliJ IDEA.
  User: 42958
  Date: 2018/3/17
  Time: 13:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
                                             target="_blank"><em class="iconfont if-menu"></em><i class="nav-item-txt">${vistor.uPhone}
                        <span class="shape-circle"></span></i></a>
                        <div class="user-down-wrap arrow-top nav-down-wrap"><a class="user-item" href="${pageContext.request.contextPath}/userInfo/account"
                                                                               id="username"><span
                                class="iconfont">핰</span>我的账户

                            <i class="follow-point"></i></a><a class="user-item" href="/collectHouseList/"
                                                               id="FollowDynamic"><span class="iconfont">홄</span>关注列表

                        </a><!-- web 6.9 已下线 --><!-- <a class="user-item appoint-list" href="/seeHouseList/" id = "Itinerary"><span class="iconfont">&#xd571;</span>约看清单

   </a> --><a class="user-item house-schedule" href="/appointmentList/" id="Showings"><span class="iconfont">혤</span>看房日程

                        </a><a class="user-item user-item-payorder" href="${pageContext.request.contextPath}/userInfo/orders"><span class="iconfont">퐀</span>合同订单

                        </a><a class="user-item user-item-delegate_mng" href="${pageContext.request.contextPath}/userInfo/delegate"><span
                                class="iconfont">퐁</span>我的委托

                        </a><a class="user-item user-item-agent" href="${pageContext.request.contextPath}/userInfo/agent"><span class="iconfont">퐄</span>我的经纪人

                        </a><a class="user-item user-item-complains" href="${pageContext.request.contextPath}/userInfo/complains"><span class="iconfont">퐐</span>我的投诉

                        </a><a class="user-item user-item-logout" href="${pageContext.request.contextPath}/userInfo/logout"><span class="iconfont">퐅</span>退出
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




        <div class="mod-agent" id="mod-agent">
            <div class="layout-wrap layout-ucenter" data-reactid=".0">
                <div class="layout-row" data-reactid=".0.0">
                    <div class="layout-col-2" data-reactid=".0.0.0">
                        <div id="js-nav-wrap" data-reactid=".0.0.0.0">
                            <div class="wrap-nav" data-reactid=".0.0.0.0.0">
                                <div class="j-nav-label" style="top:276px;" data-reactid=".0.0.0.0.0.0"></div>
                                <ul class="nav-menus" data-reactid=".0.0.0.0.0.1">
                                    <li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$0">
                                        <a href="${pageContext.request.contextPath}/userInfo/order" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$0.0">
                                            <i class="iconfont left-nav-iconfont if-pay-order" data-reactid=".0.0.0.0.0.1.$0.0.0"></i>
                                            <span data-reactid=".0.0.0.0.0.1.$0.0.1">合同订单</span></a></li>
                                    <li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$1">
                                        <a href="${pageContext.request.contextPath}/userInfo/agent" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$1.0">
                                            <i class="iconfont left-nav-iconfont if-house-consultant" data-reactid=".0.0.0.0.0.1.$1.0.0"></i>
                                            <span data-reactid=".0.0.0.0.0.1.$1.0.1">我的经纪人</span></a></li>
                                    <li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$2">
                                        <a href="${pageContext.request.contextPath}/userInfo/orders" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$2.0">
                                            <i class="iconfont left-nav-iconfont if-entrust-mgmt" data-reactid=".0.0.0.0.0.1.$2.0.0"></i>
                                            <span data-reactid=".0.0.0.0.0.1.$2.0.1">我的委托</span></a></li>
                                    <li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$3">
                                        <a href="${pageContext.request.contextPath}/userInfo/complaints" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$3.0">
                                            <i class="iconfont left-nav-iconfont if-complaints" data-reactid=".0.0.0.0.0.1.$3.0.0"></i>
                                            <span data-reactid=".0.0.0.0.0.1.$3.0.1">我的投诉</span></a></li>
                                    <li class="left-menus-item active" data-reactid=".0.0.0.0.0.1.$4">
                                        <a href="${pageContext.request.contextPath}/userInfo/account" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$4.0">
                                            <i class="iconfont left-nav-iconfont if-login-register" data-reactid=".0.0.0.0.0.1.$4.0.0"></i>
                                            <span data-reactid=".0.0.0.0.0.1.$4.0.1">我的账户</span></a></li>
                                    <li class="left-menus-item" data-reactid=".0.0.0.0.0.1.$5">
                                        <a href="${pageContext.request.contextPath}/userInfo/logout" class="left-nav-link" data-reactid=".0.0.0.0.0.1.$5.0">
                                            <i class="iconfont left-nav-iconfont if-exit-login" data-reactid=".0.0.0.0.0.1.$5.0.0"></i>
                                            <span data-reactid=".0.0.0.0.0.1.$5.0.1">退出登录</span></a></li>
                                </ul></div></div></div><div class="layout-col-10 iwjw-right" data-reactid=".0.0.1"><div class="userinfo-container" data-reactid=".0.0.1.0"><div id="wxlogin" data-reactid=".0.0.1.0.0"></div><div class="mod-w" data-reactid=".0.0.1.0.1"><div class="userinfo" data-reactid=".0.0.1.0.1.0"><h3 class="my-account-title" data-reactid=".0.0.1.0.1.0.0">我的账户</h3><dl class="" data-reactid=".0.0.1.0.1.0.1"><dt data-reactid=".0.0.1.0.1.0.1.0"><i class="left" data-reactid=".0.0.1.0.1.0.1.0.0">姓名</i><span class="info" data-reactid=".0.0.1.0.1.0.1.0.1"><i class="no-username" data-reactid=".0.0.1.0.1.0.1.0.1.0">未填写</i><div class="userinfo-input" data-reactid=".0.0.1.0.1.0.1.0.1.1"><input type="text" placeholder="请输入姓名" class="realName" maxlength="20" name="realName" data-reactid=".0.0.1.0.1.0.1.0.1.1.0"></div></span></dt><dd data-reactid=".0.0.1.0.1.0.1.1"><i class="save-btn" data-reactid=".0.0.1.0.1.0.1.1.0">保存</i><i class="cancel-btn" data-reactid=".0.0.1.0.1.0.1.1.1">取消</i><i class="edit edit-name" data-reactid=".0.0.1.0.1.0.1.1.2">修改</i></dd></dl><dl data-reactid=".0.0.1.0.1.0.2"><dt data-reactid=".0.0.1.0.1.0.2.0"><i class="left" data-reactid=".0.0.1.0.1.0.2.0.0">性别</i><span class="info" data-reactid=".0.0.1.0.1.0.2.0.1"><label class="mod-check-box" value="1" data-reactid=".0.0.1.0.1.0.2.0.1.0"><em class="iconfont if-checked" data-reactid=".0.0.1.0.1.0.2.0.1.0.0"></em><input type="radio" name="gender" value="1" data-reactid=".0.0.1.0.1.0.2.0.1.0.1"><span data-reactid=".0.0.1.0.1.0.2.0.1.0.2">先生</span></label><label class="mod-check-box" value="2" data-reactid=".0.0.1.0.1.0.2.0.1.1"><em class="iconfont if-uncheck" data-reactid=".0.0.1.0.1.0.2.0.1.1.0"></em><input type="radio" name="gender" value="2" data-reactid=".0.0.1.0.1.0.2.0.1.1.1"><span data-reactid=".0.0.1.0.1.0.2.0.1.1.2">女士</span></label></span></dt></dl><dl data-reactid=".0.0.1.0.1.0.3"><dt data-reactid=".0.0.1.0.1.0.3.0"><i class="left" data-reactid=".0.0.1.0.1.0.3.0.0">电话</i><i data-reactid=".0.0.1.0.1.0.3.0.1">135****0667</i></dt><dd data-reactid=".0.0.1.0.1.0.3.1"><i class="edit sendCode" data-reactid=".0.0.1.0.1.0.3.1.0">修改</i></dd></dl><dl data-reactid=".0.0.1.0.1.0.4"><dt data-reactid=".0.0.1.0.1.0.4.0"><i class="left" data-reactid=".0.0.1.0.1.0.4.0.0"><span data-reactid=".0.0.1.0.1.0.4.0.0.0">社交账号 </span><i class="ucenter-point" data-reactid=".0.0.1.0.1.0.4.0.0.1"></i></i><span class="info" data-reactid=".0.0.1.0.1.0.4.0.1"><span class="account-item not-bind-account" data-reactid=".0.0.1.0.1.0.4.0.1.0"><i class="iconfont if-weixin" data-reactid=".0.0.1.0.1.0.4.0.1.0.0"></i></span></span></dt><dd data-reactid=".0.0.1.0.1.0.4.1"><i class="edit bind-btn" data-reactid=".0.0.1.0.1.0.4.1.0">绑定</i></dd></dl></div></div></div></div></div></div>
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
