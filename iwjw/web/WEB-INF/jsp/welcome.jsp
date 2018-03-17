<%--
  Created by IntelliJ IDEA.
  User: 42958
  Date: 2018/2/8
  Time: 14:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>

<html>
<head>
    <title>连接成功</title>
    <script type="text/javascript" src="../../statics/js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="../../statics/js/ss.js"></script>
    <link rel="stylesheet" href='../../statics/css/common_72_1.css'>
    <link rel="stylesheet" href='../../statics/css/baike_61_1.css'>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%--    <script type="text/javascript">
        $(document).ready(function () {
            $("#baike1").click(function () {
                var plateName = $("#baike1").html();
                $.post("${pageContext.request.contextPath}/baike/do", "plateName="+plateName, callBack);
            })
            $("#baike2").click(function () {
                var plateName = $("#baike2").html();
                $.post("${pageContext.request.contextPath}/baike/do", "plateName="+plateName, callBack);
            })
            $("#baike3").click(function () {
                var plateName = $("#baike3").html();
                $.post("${pageContext.request.contextPath}/baike/do", "plateName="+plateName, callBack);
            })
            $("#baike4").click(function () {
                var plateName = $("#baike4").html();
                $.post("${pageContext.request.contextPath}/baike/do", "plateName="+plateName, callBack);
            })
            $("#baike5").click(function () {
                var plateName = $("#baike5").html();
                $.post("${pageContext.request.contextPath}/baike/do", "plateName="+plateName, callBack);
            })
            $("#baike6").click(function () {
                var plateName = $("#baike6").html();
                $.post("${pageContext.request.contextPath}/baike/do", "plateName="+plateName, callBack);
            })
            $("#baike7").click(function () {
                var plateName = $("#baike7").html();
                $.post("${pageContext.request.contextPath}/baike/do", "plateName="+plateName, callBack);
            })
            $("#baike8").click(function () {
                var plateName = $("#baike8").html();
                $.post("${pageContext.request.contextPath}/baike/do", "plateName="+plateName, callBack);
            })
            $("#baike9").click(function () {
                var plateName = $("#baike9").html();
                $.post("${pageContext.request.contextPath}/baike/do", "plateName="+plateName, callBack);
            })
            function callBack(title) {
                if (title==0){
                    alert(title)
                    $("#zixun").html(
                        "<c:forEach items='${lists0}' var='li'>"
                        +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                        +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                        +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                        +"<div class='classify-date'>"
                        +"<span class='classify' >${li.plateId}</span>"
                        +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                        +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                        +"</c:forEach>"
                    )
                }
                if (title==1){
                    $("#zixun").html(
                        "<c:forEach items='${lists1}' var='li'>"
                        +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                        +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                        +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                        +"<div class='classify-date'>"
                        +"<span class='classify' >${li.plateId}</span>"
                        +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                        +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                        +"</c:forEach>"
                    )
                }
                if (title==2){
                    $("#zixun").html(
                        "<c:forEach items='${lists2}' var='li'>"
                        +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                        +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                        +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                        +"<div class='classify-date'>"
                        +"<span class='classify' >${li.plateId}</span>"
                        +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                        +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                        +"</c:forEach>"
                    )
                }
                if (title==3){
                    $("#zixun").html(
                        "<c:forEach items='${lists3}' var='li'>"
                        +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                        +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                        +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                        +"<div class='classify-date'>"
                        +"<span class='classify' >${li.plateId}</span>"
                        +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                        +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                        +"</c:forEach>"
                    )
                }
                if (title==4){
                    $("#zixun").html(
                        "<c:forEach items='${lists4}' var='li'>"
                        +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                        +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                        +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                        +"<div class='classify-date'>"
                        +"<span class='classify' >${li.plateId}</span>"
                        +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                        +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                        +"</c:forEach>"
                    )
                }
                if (title==5){
                    $("#zixun").html(
                        "<c:forEach items='${lists5}' var='li'>"
                        +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                        +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                        +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                        +"<div class='classify-date'>"
                        +"<span class='classify' >${li.plateId}</span>"
                        +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                        +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                        +"</c:forEach>"
                    )
                }
                if (title==6){
                    $("#zixun").html(
                        "<c:forEach items='${lists6}' var='li'>"
                        +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                        +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                        +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                        +"<div class='classify-date'>"
                        +"<span class='classify' >${li.plateId}</span>"
                        +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                        +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                        +"</c:forEach>"
                    )
                }
                if (title==7){
                    $("#zixun").html(
                        "<c:forEach items='${lists7}' var='li'>"
                        +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                        +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                        +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                        +"<div class='classify-date'>"
                        +"<span class='classify' >${li.plateId}</span>"
                        +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                        +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                        +"</c:forEach>"
                    )
                }
                if (title==8){
                    $("#zixun").html(
                        "<c:forEach items='${lists8}' var='li'>"
                        +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                        +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                        +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                        +"<div class='classify-date'>"
                        +"<span class='classify' >${li.plateId}</span>"
                        +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                        +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                        +"</c:forEach>"
                    )
                }
            }
        })

    </script>--%>
</head>


<body>

<ul class="baike-nav clearfix">
    <li  class="nav-li f-l" data-reactid=".0.0.$0">
        <a id="baike1" class="nav-a" data-reactid=".0.0.$0.0">全部文章</a></li>
    <li  class="nav-li f-l" data-reactid=".0.0.$1">
        <a id="baike2" class="nav-a" data-reactid=".0.0.$1.0">热点楼市</a></li>
    <li  class="nav-li f-l" data-reactid=".0.0.$2">
        <a id="baike3" class="nav-a" data-reactid=".0.0.$2.0">最新政策</a></li>
    <li  class="nav-li f-l" data-reactid=".0.0.$3">
        <a id="baike4" class="nav-a" data-reactid=".0.0.$3.0">购房须知</a></li>
    <li class="nav-li f-l" data-reactid=".0.0.$4">
        <a id="baike5" class="nav-a" data-reactid=".0.0.$4.0">选房攻略</a></li>
    <li class="nav-li f-l" data-reactid=".0.0.$5">
        <a id="baike6" class="nav-a" data-reactid=".0.0.$5.0">签约要点</a></li>
    <li class="nav-li f-l" data-reactid=".0.0.$6">
        <a id="baike7" class="nav-a" data-reactid=".0.0.$6.0">贷款指南</a></li>
    <li class="nav-li f-l" data-reactid=".0.0.$7">
        <a id="baike8" class="nav-a" data-reactid=".0.0.$7.0">缴税过户</a></li>
    <li class="nav-li f-l" data-reactid=".0.0.$8">
    <a id="baike9" class="nav-a" data-reactid=".0.0.$8.0">典型案例</a></li>
</ul>
<ul id="zixun">
        <c:forEach items="${lists0}" var="li">
            <li class="list-li clearfix">
                <div class="list-left f-l">
                    <h4>
                        <a class="list-title bold" href="https://www.iwjw.com/baike/2110/" target="_blank">${li.title}</a></h4>
                    <div class="list-desc">由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>
                    <div class="classify-date">
                        <span class="classify" >${li.plateId}</span>
                        <span class="pub-date pad-left">2017-10-13</span></div></div>
                <a class="list-right f-l" href="https://www.iwjw.com/baike/2110/" target="_blank"><img src="../../statics/images/fde82646dad344d78eecf400d79924c6.jpg" class="list-img"></a></li>
        </c:forEach>
</ul>
<script>
    $(document).ready(function () {
        $("#baike1").click(function () {
            var plateName = $("#baike1").html();
            $.post("${pageContext.request.contextPath}/baikeAjax/test", "plateName="+plateName, callBack);
        })
        $("#baike2").click(function () {
            var plateName = $("#baike2").html();
            $.post("${pageContext.request.contextPath}/baikeAjax/test", "plateName="+plateName, callBack);
        })
        $("#baike3").click(function () {
            var plateName = $("#baike3").html();
            $.post("${pageContext.request.contextPath}/baikeAjax/test", "plateName="+plateName, callBack);
        })
        $("#baike4").click(function () {
            var plateName = $("#baike4").html();
            $.post("${pageContext.request.contextPath}/baikeAjax/test", "plateName="+plateName, callBack);
        })
        $("#baike5").click(function () {
            var plateName = $("#baike5").html();
            $.post("/baikeAjax", "plateName="+plateName, callBack);
        })
        $("#baike6").click(function () {
            var plateName = $("#baike6").html();
            $.post("/baikeAjax", "plateName="+plateName, callBack);
        })
        $("#baike7").click(function () {
            var plateName = $("#baike7").html();
            $.post("/baikeAjax", "plateName="+plateName, callBack);
        })
        $("#baike8").click(function () {
            var plateName = $("#baike8").html();
            $.post("/baikeAjax", "plateName="+plateName, callBack);
        })
        $("#baike9").click(function () {
            var plateName = $("#baike9").html();
            $.post("/baikeAjax", "plateName="+plateName, callBack);
        })
        function callBack(title) {
            if (title==0){
                alert(title)
                $("#zixun").html(
                    "<c:forEach items='${lists0}' var='li'>"
                    +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                    +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                    +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                    +"<div class='classify-date'>"
                    +"<span class='classify' >${li.plateId}</span>"
                    +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                    +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                    +"</c:forEach>"
                )
            }
            if (title==1){
                alert(title)
                $("#zixun").html(
                    "<c:forEach items='${lists1}' var='li'>"
                    +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                    +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                    +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                    +"<div class='classify-date'>"
                    +"<span class='classify' >${li.plateId}</span>"
                    +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                    +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                    +"</c:forEach>"
                )
            }
            if (title==2){
                $("#zixun").html(
                    "<c:forEach items='${lists2}' var='li'>"
                    +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                    +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                    +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                    +"<div class='classify-date'>"
                    +"<span class='classify' >${li.plateId}</span>"
                    +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                    +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                    +"</c:forEach>"
                )
            }
            if (title==3){
                $("#zixun").html(
                    "<c:forEach items='${lists3}' var='li'>"
                    +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                    +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                    +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                    +"<div class='classify-date'>"
                    +"<span class='classify' >${li.plateId}</span>"
                    +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                    +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                    +"</c:forEach>"
                )
            }
            if (title==4){
                $("#zixun").html(
                    "<c:forEach items='${lists4}' var='li'>"
                    +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                    +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                    +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                    +"<div class='classify-date'>"
                    +"<span class='classify' >${li.plateId}</span>"
                    +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                    +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                    +"</c:forEach>"
                )
            }
            if (title==5){
                $("#zixun").html(
                    "<c:forEach items='${lists5}' var='li'>"
                    +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                    +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                    +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                    +"<div class='classify-date'>"
                    +"<span class='classify' >${li.plateId}</span>"
                    +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                    +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                    +"</c:forEach>"
                )
            }
            if (title==6){
                $("#zixun").html(
                    "<c:forEach items='${lists6}' var='li'>"
                    +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                    +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                    +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                    +"<div class='classify-date'>"
                    +"<span class='classify' >${li.plateId}</span>"
                    +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                    +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                    +"</c:forEach>"
                )
            }
            if (title==7){
                $("#zixun").html(
                    "<c:forEach items='${lists7}' var='li'>"
                    +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                    +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                    +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                    +"<div class='classify-date'>"
                    +"<span class='classify' >${li.plateId}</span>"
                    +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                    +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                    +"</c:forEach>"
                )
            }
            if (title==8){
                $("#zixun").html(
                    "<c:forEach items='${lists8}' var='li'>"
                    +"<li class='list-li clearfix'> <div class='list-left f-l'>"
                    +"<h4><a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>${li.title}</a></h4>"
                    +"<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
                    +"<div class='classify-date'>"
                    +"<span class='classify' >${li.plateId}</span>"
                    +"<span class='pub-date pad-left'>2017-10-13</span></div></div>"
                    +"<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank'><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
                    +"</c:forEach>"
                )
            }
        }

        var flag = 120;

        $("#slider1").slider({
            callback: function(result) {
                if (result){
                    if ((/^1[3|4|5|8][0-9]\d{4,8}$/.test($("#uPhone")))){
                        $("#holder").html("<div class='input-wrap'>"
                            +"<input  class='login-input' type='tel' maxlength='4' name='code' autocomplete='off' placeholder='填写验证码' tabindex='2'>"
                            +"<button id='send-code-btn' class='send-btn' type='button'>发送验证码</button></div>"
                        )}else {
                        $("#slider1").slider("restore");
                        alert("请输入正确手机号")
                    }

                }
            }
    })
    })




</script>




</body>
</html>