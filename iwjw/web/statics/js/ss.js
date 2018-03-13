$(document).ready(function () {
        $.ajax({
            "url"       : "getBaikeList",//要提交的路径
            "Type"	 	: "post",//提交方式
            "dataType"  : "json",//指定返回的数据格式
            "success" 	: loop(listString),//响应成功后要执行代码
        })
    })

$("#baike1").click(function () {
    $.ajax({
        "url"       : "getBaikeList",//要提交的路径
        "Type"	 	: "post",//提交方式
        "dataType"  : "json",//指定返回的数据格式
        "success" 	: loop(listString),//响应成功后要执行代码
    })
})
$("#baike2").click(function () {
    var title = this.val();
    $.ajax({
        "url"       : "/baike",//要提交的路径
        "Type"	 	: "post",//提交方式
        "data"	 	: "title="+title,//发送到服务器的数据
        "dataType"  : "json",//指定返回的数据格式
        "success" 	: loop(listString),//响应成功后要执行代码
    })
})
$("#baike3").click(function () {
    $.ajax({
        "url"       : "/baike",//要提交的路径
        "Type"	 	: "post",//提交方式
        "data"	 	: "title="+title,//发送到服务器的数据
        "dataType"  : "json",//指定返回的数据格式
        "success" 	: loop(listString),//响应成功后要执行代码
    })
})
$("#baike4").click(function () {
    $.ajax({
        "url"       : "/baike",//要提交的路径
        "Type"	 	: "post",//提交方式
        "data"	 	: "title="+title,//发送到服务器的数据
        "dataType"  : "json",//指定返回的数据格式
        "success" 	: loop(listString),//响应成功后要执行代码
    })
})
$("#baike5").click(function () {
    $.ajax({
        "url"       : "/baike",//要提交的路径
        "Type"	 	: "post",//提交方式
        "data"	 	: "title="+title,//发送到服务器的数据
        "dataType"  : "json",//指定返回的数据格式
        "success" 	: loop(listString),//响应成功后要执行代码
    })
})
$("#baike6").click(function () {
    $.ajax({
        "url"       : "/baike",//要提交的路径
        "Type"	 	: "post",//提交方式
        "data"	 	: "title="+title,//发送到服务器的数据
        "dataType"  : "json",//指定返回的数据格式
        "success" 	: loop(listString),//响应成功后要执行代码
    })
})
$("#baike7").click(function () {
    $.ajax({
        "url"       : "/baike",//要提交的路径
        "Type"	 	: "post",//提交方式
        "data"	 	: "title="+title,//发送到服务器的数据
        "dataType"  : "json",//指定返回的数据格式
        "success" 	: loop(listString),//响应成功后要执行代码
    })
})
$("#baike8").click(function () {
    $.ajax({
        "url"       : "/baike",//要提交的路径
        "Type"	 	: "post",//提交方式
        "data"	 	: "title="+title,//发送到服务器的数据
        "dataType"  : "json",//指定返回的数据格式
        "success" 	: loop(listString),//响应成功后要执行代码
    })
})
$("#baike9").click(function () {
    $.ajax({
        "url"       : "/baike",//要提交的路径
        "Type"	 	: "post",//提交方式
        "data"	 	: "title="+title,//发送到服务器的数据
        "dataType"  : "json",//指定返回的数据格式
        "success" 	: loop(listString),//响应成功后要执行代码
    })
})
function loop(listString) {
    var data = listString.data;
    var str = "";
    for (i in data){
        str += "<li class='list-li clearfix' >"+
        "<div class='list-left f-l'>"+
        "<h4>"+
        "<a class='list-title bold' href='https://www.iwjw.com/baike/2110/' target='_blank'>"+${li.title}+"</a></h4>"+
            "<div class='list-desc'>由于目前调控政策收紧，让一些投资投机需求的热钱逐渐退出房地产领域，购房者变得更加冷静和理性。</div>"
        "<div class='classify-date'>"+
        "<span class='classify' >"+${li.plateId}+"</span>"+
            "<span class='pub-date pad-left'>2017-10-13</span></div></div>"+
        "<a class='list-right f-l' href='https://www.iwjw.com/baike/2110/' target='_blank' d><img src='../../statics/images/fde82646dad344d78eecf400d79924c6.jpg' class='list-img'></a></li>"
    }
}



