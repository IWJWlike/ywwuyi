<%--
  Created by IntelliJ IDEA.
  User: 42958
  Date: 2018/2/8
  Time: 14:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>登陆成功</title>
    <script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/jquery.easydrag.handler.beta2.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/jquery.slider.js"></script>
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/common_72.css">
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/index_74.css">
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/Scroll.css">
    <script type="text/javascript">
        $(document).ready(function(){
            $('#one').click(function(){
                $('#box2').show();
            });
            $('.dialog-close').click(function(){
                $('#box2').hide();
            });
            $('.box').easydrag();
        });
    </script>
</head>
<body>
welcome back
以收益
<input type="text" id="one" class="one" value="点击我查看效果" style="width:150px; height:50px; margin-top:50px; margin-left:300px;" />
<div id="box2" class="mod-dialog ui-draggable" style="width: 640px; left: 202.5px; top: 42px; overflow: visible;display: none;">
    <div class="dialog-close"></div>
    <div class="dialog-content" style="height: 589px;">
        <div id="mod-login" class="mod-login main">
            <div class="change-mode" onselectstart="return false"></div>
            <div class="change-mode-text" onselectstart="return false"></div>
            <div class="container-main"><div class="login-logo"></div>
                <div class="wx-login">
                    <div class="wx-login-icon">
                        <div class="line-word">推荐使用社交账号登录</div>
                        <div class="wx-login-btn">
                            <i class="iconfont if-weixin"></i>
                            <span>微信一键登录</span></div>
                        <div class="line-word">或者</div></div>
                    <div id="login-wrap" class="login-wrap login-transition">
                        <div class="panel-wrap">
                            <div class="block phone-panel">
                                <div class="icon-wrap">
                                    <em class="iconfont if-mobile"></em>
                                </div>
                                <div class="input-wrap">
                                    <input class="login-input" type="tel" name="mobile" maxlength="13" placeholder="输入手机号码" tabindex="1" autocomplete="off">
                                    <!-- <button class="send-btn" type="button" disabled>发送验证码</button> -->
                                </div>
                            </div>
                        </div>
                        <div id="sp-error1" class="sp-error"></div>
                        <%--滑动验证模块开始--%>
                        <div id="login-slider-one" class="login-slider-one login-transition slider-control">
                            <div class="geetest-wrap">
                                <p class="geetest-tip">拖动滑块完成验证</p>
                                <div id="geetest-container" class="geetest-container">
                                    <div class="gt_holder gt_float" style="touch-action: none;">

                                        <div id="slider1" class="slider1 slider-control"></div>
                                        <script type="text/javascript">
                                            $("#slider1").slider({
                                                callback: function(result) {
                                                    if (result){
                                                        alert("1111")
                                                    }
                                                }
                                            });
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
                            <button class="dialog-login-btn" type="button" disabled="" tabindex="3">登录</button>
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
</body>
</html>
