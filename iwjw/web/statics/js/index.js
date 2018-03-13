

$(function(){
    var list=$('.bot-img ul li').length;



    $('.activeimg').css({
        width:list*500,
    });
    $('.right').click(function(){
        next(list)

    })
    $('.left').click(function(){
        prev(list)
    });


})
var index=0;
//下一张图片
function next(list){
    if(index<list-1){
        index++;
        $('.activeimg').animate({left:index*-500},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }else{
        index=0;
        $('.activeimg').animate({left:index*-522},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }
}
//        上一张图片
function prev(list){
    index--;
    if(index<0){
        index=list-1;
        $('.activeimg').animate({left:index*-500},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }else{
        $('.activeimg').animate({left:index*-500},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }
}




