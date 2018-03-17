function lll() {
    $("#baike1").click(function () {
        var plateName = $("#baike1").html();
        $.post("/baikeAjax", "plateName="+plateName, callBack);
    })
    $("#baike2").click(function () {
        var plateName = $("#baike2").html();
        $.post("/baikeAjax", "plateName="+plateName, callBack);
    })
    $("#baike3").click(function () {
        var plateName = $("#baike3").html();
        $.post("/baikeAjax", "plateName="+plateName, callBack);
    })
    $("#baike4").click(function () {
        var plateName = $("#baike4").html();
        $.post("/baikeAjax", "plateName="+plateName, callBack);
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
    });
}