<%--
  Created by IntelliJ IDEA.
  User: 42958
  Date: 2018/3/12
  Time: 20:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script src="../../statics/js/jquery-1.9.1.min.js"></script>
<html>
<head>
    <title>Title</title>

    <c:forEach items="${lis}" var="img" varStatus="status">
       ${img.estateName}+++++
    </c:forEach>
</head>

<body>

</body>
</html>
