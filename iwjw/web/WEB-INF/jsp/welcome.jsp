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
</head>
<body>
welcome back
以收益${user_Login.uphone}
<c:forEach items="${dateTitleList}" var="dateTitleList" varStatus="s">
    ${dateTitleList.type}
    ${dateTitleList.dateTime}
</c:forEach>
</body>
</html>
