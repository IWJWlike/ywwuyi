<%--
  Created by IntelliJ IDEA.
  User: 42958
  Date: 2018/3/12
  Time: 20:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="../../statics/css/Scroll.css" />
    <script type="text/javascript" src="../../statics/js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="../../statics/js/jquery.slider.js"></script>
</head>
<style>
    body {
        background: #1f1e1e;
        font-family: "微软雅黑";
        color: #fff;
    }
    button {
        display: inline-block;
        padding: 6px 12px;
        line-height: 1.4;
        text-align: center;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #fff;
        background-color: #5bc0de;
        border-color: #46b8da;
        cursor: pointer;
        font-size: 15px;
    }
    .container {
        width: 1080px;
        height: 600px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .demo1 {
        width: 48%;
        height: 100%;
        float: left;
        padding: 20px;
        border: 1px dashed #fff;
        border-radius: 4px;
        box-sizing: border-box;
        position: relative;
    }
    .demo2 {
        width: 48%;
        height: 100%;
        float: right;
        padding: 20px;
        border: 1px dashed #fff;
        border-radius: 4px;
        box-sizing: border-box;
        position: relative;
    }
    .btns,
    .slider,
    .result {
        margin-bottom: 40px;
    }
    pre {
        font-size: 13px;
    }
</style>
<body>
<div id="slider1" class="slider"></div>
<div class="result">验证结果：<span id="result1"></span></div>
<div>参数：</div>
<script type="text/javascript">

    $("#slider1").slider({
        callback: function(result) {
            $("#result1").text(result);
        }
    });


</script>
</body>
</html>
