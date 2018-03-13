<%--
  Created by IntelliJ IDEA.
  User: kgc
  Date: 2018/3/13
  Time: 14:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/jquery-1.8.3.min.js"></script>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">

    <title>业主委托-广州-爱屋吉屋</title>
    <meta name="keywords" content="">
    <meta name="description" content="">

    <link rel="stylesheet" href="../../statics/css_lease/common.css">
    <link rel="stylesheet" href="../../statics/css_lease/index.css">

    <link rel="apple-touch-icon-precomposed" href="../../statics/images/logo_wx.png">
    <link rel="shortcut icon" href="https://files.iwjw.com/icon/favicon.ico">
    <meta name="baidu-site-verification" content="rO1Bqg66kn">
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="../../statics/css/common_72.css">
    <link rel="stylesheet" href="../../statics/css/entrust_67.css">
    <script charset="utf-8" src="../../statics/js_lease/v.js.下载"></script><script src="../../statics/js_lease/hm.js.下载" async=""></script><script type="text/javascript" async="" src="../../statics/js_lease/vds.js.下载"></script><script>
        ;(function () {
            if(location.hostname.indexOf('iwjw.com') != -1 && location.hostname.indexOf('pcbeta') == -1 && location.protocol == 'http:'){
                location.href = location.href.replace('http://','https://')
            }
        })()
        window.pageConfig = {
            siteUrl: "//www.iwjw.com",
            mobileSiteUrl: '//m.iwjw.com',
            mobileSiteUrlHasProtocol: 'https://m.iwjw.com',
            selectCity : false,
            map :{
                province:[{"pname":"上海","pid":2,"pinyin":"shanghai"},{"pname":"北京","pid":12438,"pinyin":"beijing"},{"pname":"广州","pid":40000,"pinyin":"guangzhou"},{"pname":"深圳","pid":56000,"pinyin":"shenzhen"},{"pname":"杭州","pid":71049,"pinyin":"hangzhou"},{"pname":"天津","pid":71099,"pinyin":"tianjin"},{"pname":"南京","pid":86724,"pinyin":"nanjing"},{"pname":"武汉","pid":86725,"pinyin":"wuhan"},{"pname":"成都","pid":98289,"pinyin":"chengdu"},{"pname":"重庆","pid":98290,"pinyin":"chongqing"}]
            } ,
            datacollectUrl:'//plog.iwjw.com/dataCollect/',
            staticUrl: '' || '//resource.iwjw.com/iwjw-pc/',
            staticTag: 'entrust',
            recommendUrl:'//recommend.iwjw.com',
            videoSerUrl:'//video.iwjw.com/prev/pc/play.html',
            flag: '5',
            provinceId: '40000',
            ht: '',
            cookieUserId: 0,
            signin: '',
            //全局增加是否采用极验验证标志，1-采用，0-不采用
            geetestFlag: '1',
            timestamp: '1520908862727',
            canSellShow: 'true',
            canRentShow: 'true'
        };
        pageConfig["entrust"] = {};
        var _hmt = _hmt || [];
    </script>
</head>
<body>


<!--日志提交功能-->

<div id="iwjw" class="short-footer">
    <div class="iwjw-wrap">
        <div class="mod-header " id="Top">
            <dl class="header-wrap clearfix">
                <dt class="header-left clearfix">
                    <a class="logo" href="https://www.iwjw.com/"><img src="../../statics/images/iwjwlog.png" alt="爱屋吉屋" class="logo-img"></a>
                    <div class="city nav-item">
                        <a class="province" provinceid="40000" provincepy="guangzhou">广州<i class="iconfont"><!--혟--></i></a>
                    </div>
                    <div class="nav-item" data-log="homepage"><a href="https://www.iwjw.com/" class="nav-item-a ">首页</a></div>
                    <div class="nav-item" data-log="secondhouse">
                        <a href="https://www.iwjw.com/sale/map/" class="nav-item-a ">二手房</a></div>
                    <div class="nav-item" data-log="rent">
                        <a href="https://www.iwjw.com/chuzu/map/" class="nav-item-a ">租房</a></div>


                    <div class="nav-item nav-item-server" data-log="entrust">
                        <a href="https://www.iwjw.com/delegation/" rel="nofollow" class="nav-item-a active">业主委托</a>
                    </div>

                    <div class="nav-item" data-log="baike">
                        <a class="nav-item-a " href="https://www.iwjw.com/baike/guangzhou/">购房攻略            </a>
                    </div>
                    <div class="nav-item" data-log="ailicai">
                        <a href="https://www.iwlicai.com/" target="_blank" class="nav-item-a ailicai ">吉爱财</a>
                        <div class="header-new"></div>
                    </div>
                    <div class="nav-item" data-log="dzg">
                        <a href="https://www.iwjw.com/dzg/" class="nav-item-a  ">贷总管</a>
                    </div>
                    <div class="nav-item" data-log="appDownload">
                        <a href="https://www.iwjw.com/appDownPage/" class="nav-item-a "><!--<i class="iconfont if-mobile">--></i>APP</a>
                    </div>
                </dt>
                <dd class="header-right clearfix"><div class="nav-item"><a href="https://www.iwjw.com/delegation/#" class="login none nav-item-a login-require " target="_blank"><i class="nav-item-txt">登录<span class="slash">/</span>注册</i></a></div><div class="nav-item message-nav" id="message-nav"><div class="nav-message-wrap" data-reactid=".1"></div></div>




                </dd>
            </dl>
        </div>


        <div class="header"><div class="wrap"><div class="nav"><ul><li><a href="https://gz.lianjia.com/yezhu/maifang/">我要卖房</a></li><li><a href="http://localhost:63342/AiWu_demo_lease/%E7%88%B1%E5%B1%8B%E5%90%89%E5%B1%8B-%E4%B9%B0%E6%88%BF%E5%85%88%E7%9C%8B%E8%A7%86%E9%A2%91%EF%BC%8C%E3%80%8C%E7%9C%9F%E5%AE%9E%E7%9C%81%E5%8A%9B%E3%80%8D%E7%9A%84%E6%88%BF%E4%BA%A7%E4%B8%AD%E4%BB%8B!.html?_ijt=l83ehajm771f54na5ttotmkl4f" class="active">我要出租</a></li></ul></div></div></div>

        <!--<div class="g-main"><div class="m-jumbotron"><div class="tit">发布出租房源</div><div class="sub-tit">8000+全国链家门店·10万+全国经纪人·链家倾情服务15年+</div></div>--><div class="m-form">
        <div class="box-l m-entry">
            <dl class="compact">
                <dt>小区所在城市</dt>
                <dd>
                    <div>广州</div>
                </dd>
            </dl>
            <dl>
                <dt>小区</dt>
                <dd class="wrap-sug">
                    <div class="u-sug" id="u-sug">
                        <input class="sugInput" name="resblock" type="text" autocomplete="off" placeholder="请输入小区名">
                        <ul></ul>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>房屋地址</dt>
                <dd>
                    <div class="u-select u-select-build" name="building">
                        <input placeholder="楼栋号" class="u-select-selected" type="text" value="">
                        <ul class="u-select-options hide"></ul>
                    </div>
                    <div class="u-select u-select-build" name="unit">
                        <input placeholder="单元号" class="u-select-selected" type="text" value="">
                        <ul class="u-select-options hide"></ul>
                    </div>
                    <div class="u-select u-select-build" name="house">
                        <input placeholder="门牌号" class="u-select-selected" type="text" value="">
                        <ul class="u-select-options hide"></ul>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>期望租金</dt>
                <dd>
                    <input name="expect_price" value="" type="text" placeholder="请输入您期望租出的价格" autocomplete="off" style="width: 210px;">
                    <div class="unit fl">元/月</div>
                </dd>
            </dl>
            <dl>
                <dt>称呼</dt>
                <dd>
                    <input name="owner_name" value="" type="text" placeholder="我们应该如何称呼您" autocomplete="off" style="width: 250px;">
                </dd>
            </dl>
            <dl>
                <dt>手机号码</dt>
                <dd>
                    <input name="owner_mobile" value="" type="text" placeholder="您的联系方式，方便我们及时与您联系" autocomplete="off" style="width: 250px;">
                </dd>
            </dl>
            <dl>
                <dt>图形验证码</dt>
                <dd>
                    <input name="verify_code" value="" type="text" placeholder="请输入图形验证码中的结果" autocomplete="off" style="width: 170px;">
                    <!-- <div class="btn-getcode-voice">获取语音验证码</div> -->
                    <!-- <div class="btn-getcode-sms">获取短信验证码</div> -->
                    <div class="btn-getcode-sms"><img src="../../statics/images/GeneratePictureUpgrade.png" style="width:100%;height:100%;"></div>
                </dd>
            </dl>
        </div>
    </div>

        <div class="m-submit">
            <div class="wrap">
                <div class="btn-submit">提交委托</div>
            </div>
        </div><div class="m-success"><div class="marsk"></div><div class="box"><div class="box-l"><div class="icon-weituo-success"></div><div class="tit">提交委托成功！</div><div class="sub-tit">周一至周日9:00-20:00，10109666客服会及时给您回电，请耐心等待</div><div class="btn-confirm">确定</div></div><div class="box-r"><div class="icon-qrcode"></div><div class="txt">扫一扫·下载掌上链家</div></div><div class="icon-close"></div></div></div></div>

    <!--<div class="mod-entrust" id="mod-entrust"><div class="entrust-container" data-reactid=".0"><div class="entrust-downapp" data-reactid=".0.0"><div class="downapp-container clearfix" data-reactid=".0.0.0"><div class="downapp-left f-l" data-reactid=".0.0.0.0"><img src="./业主委托-广州-爱屋吉屋_files/getImage.action" alt="" class="qr-img" data-reactid=".0.0.0.0.0"></div><div class="downapp-right f-l" data-reactid=".0.0.0.1"><div class="right-text right-text-down" data-reactid=".0.0.0.1.0">下载APP发布房源</div><div class="right-text right-text-price" data-reactid=".0.0.0.1.1">随心调价 · 实时查看动态</div><div class="right-text right-text-phone" data-reactid=".0.0.0.1.2"><span data-reactid=".0.0.0.1.2.0">也可以拨打</span><span class="phone-number" data-reactid=".0.0.0.1.2.1">400-700-6622</span><span data-reactid=".0.0.0.1.2.2">委托</span></div></div></div></div><div class="entrust-step" data-reactid=".0.1"><div class="lookstep-container clearfix" data-reactid=".0.1.0"><div class="lookstep-item f-l" data-reactid=".0.1.0.0"><div class="lookstep-item-title" data-reactid=".0.1.0.0.0">1.发布房源</div><div class="lookstep-item-content" data-reactid=".0.1.0.0.1">线上提交房源信息，免费快速发布房源</div><div class="lookstep-item-bias lookstep-item-bias1" data-reactid=".0.1.0.0.2"></div><div class="lookstep-item-bias lookstep-item-bias2" data-reactid=".0.1.0.0.3"></div></div><div class="lookstep-item f-l" data-reactid=".0.1.0.1"><div class="lookstep-item-title" data-reactid=".0.1.0.1.0">2.客服审核</div><div class="lookstep-item-content" data-reactid=".0.1.0.1.1">发布后客服会回电与您联系，核实房源并确认上架</div><div class="lookstep-item-bias lookstep-item-bias1" data-reactid=".0.1.0.1.2"></div><div class="lookstep-item-bias lookstep-item-bias2" data-reactid=".0.1.0.1.3"></div></div><div class="lookstep-item f-l" data-reactid=".0.1.0.2"><div class="lookstep-item-title" data-reactid=".0.1.0.2.0">3.带客看房</div><div class="lookstep-item-content" data-reactid=".0.1.0.2.1">经纪人与您预约时间，带意向客户上门看房</div><div class="lookstep-item-bias lookstep-item-bias1" data-reactid=".0.1.0.2.2"></div><div class="lookstep-item-bias lookstep-item-bias2" data-reactid=".0.1.0.2.3"></div></div><div class="lookstep-item f-l" data-reactid=".0.1.0.3"><div class="lookstep-item-title" data-reactid=".0.1.0.3.0">4.签约出售</div><div class="lookstep-item-content" data-reactid=".0.1.0.3.1">业主顾问团队在签约过程中将全程为您提供服务</div></div></div></div></div></div>-->
    <div class="suspend-wrap">

        <!-- feedback -->
        <a href="https://www.iwjw.com/gofeedback#https%3A%2F%2Fwww.iwjw.com%2Fdelegation%2F" class="suspend-div suspend-report j-feedback" target="_blank">
            <em class="opinion iconfont"></em>
            <em class="text">
                意见反馈
                <i class="triangle iconfont if-triangle-right"></i>
            </em>
        </a>

        <!-- app qrcode -->
        <div class="suspend-div suspend-code">
            <em class="iconfont code-icon if-saomao"></em>
            <div class="code-content">
                <div>
                    <p class="app-qrcode"></p>
                    <p class="line-1">扫一扫体验APP</p>
                    <em class="triangle iconfont if-triangle-right"></em>
                </div>
                <em class="code-close iconfont if-delete"></em>
            </div>
        </div>

        <!-- to top -->
        <div class="suspend-div suspend-top">
            <a class="to-top" href="https://www.iwjw.com/delegation/#iwjw">
                <em class="iconfont"></em>
            </a>
            <em class="text">回到顶部
                <i class="triangle iconfont if-triangle-right"></i>
            </em>
        </div>

        <!-- 背景 -->
        <div class="suspend-back"></div>
    </div>
</div>
</div>

<script src="../../statics/js_lease/gt.js.下载"></script>

<script type="text/javascript">
    ;!function(){
        var popTpl = '<div class="ie-pop-wrap">' +
            '<div class="ie-pop-wrap-mask"></div>' +
            '<div class="ie-pop-layer-wrap">' +
            '<div class="ie-pop-layer">' +
            '<img class="ie-pop-layer-qrcode" src="../../statics/images/getDynamicQRImage.png" />' +
            '<div class="ie-pop-layer-links">' +
            '<a target="_blank" href="http://se.360.cn/">360安全</a>' +
            '<a target="_blank" href="http://browser.qq.com/">QQ浏览器</a>' +
            '<a target="_blank" href="http://ie.2345.cc/">2345</a>' +
            '<a target="_blank" href="http://ie.sogou.com/">搜狗高速</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        function isEdge() {
            var userAgent = window.navigator.userAgent;
            return userAgent.indexOf("Edge") > -1;
        }

        function isIE() {
            return !!window.ActiveXObject || ("ActiveXObject" in window);
        }

        if (isIE() || isEdge()) {
            var container = document.createElement('div');
            container.innerHTML = popTpl;
            document.body.appendChild(container.children[0]);
        }
    }();
</script><script type="text/javascript">
    var _vds = _vds || [];
    window._vds = _vds;
    (function(){
        _vds.push(['setAccountId', '9f6117ba867d4d36']);
        (function() {
            try{
                var vds = document.createElement('script');
                vds.type='text/javascript';
                vds.async = true;
                vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(vds, s);
            }catch(error){
            }
        })();
    })();
</script><!--[if IE 8]> <script src='../../statics/js_lease/es5-shim-sham_5.5.js'></script><![endif]-->
<script src="../../statics/js_lease/common_72.js.下载"></script>
<script src="../../statics/js_lease/entrust_72.js.下载"></script>
<script src="https://www.iwjw.com/delegation/" async=""></script>
<div class="mod-footer short-shift">
    <div class="footer-inner">
        <div class="footer-top clearfix">
            <div class="footer-t-l">
                <div class="footer-t-nav">
                    <a href="https://www.iwjw.com/about/" rel="nofollow" class="footer-nav-item first">关于我们
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="https://www.iwjw.com/join/" rel="nofollow" class="footer-nav-item">加入我们
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="https://www.iwjw.com/delegation/" rel="nofollow" class="footer-nav-item">业主服务
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="https://www.iwlicai.com/about/alc" target="_blank" rel="nofollow" class="footer-nav-item">关于吉爱财
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="https://www.iwjw.com/help" rel="nofollow" class="footer-nav-item">帮助中心
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="https://www.iwjw.com/sitemap/" class="footer-nav-item">网站地图
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="https://www.iwjw.com/protocol/u/" rel="nofollow" class="footer-nav-item">网站使用协议
                        <i class="footer-point clearfix">
                            <em class="footer-p-t"></em>
                            <em class="footer-p-b"></em>
                        </i>
                    </a>
                    <a href="https://www.iwjw.com/protocol/h/" rel="nofollow" class="footer-nav-item">中介服务协议</a>
                </div>
                <div class="footer-t-mid">
                    <span class="footer-t-m-item footer-t-m-item-copy"><i class="footer-copy">©</i>2014-2017  满懿 (上海) 房地产咨询有限公司</span>
                    <span class="footer-t-m-item">热线：400-700-6622</span>
                    <span class="footer-t-m-item">邮箱：cs@iwjw.com</span>
                    <a class="footer-t-m-item" href="http://weibo.com/u/5132568692/home?wvr=5" rel="nofollow" target="_blank">
                        <!--<i class="iconfont if-weibo"></i>-->
                        <img src="../../statics/images/if-weibo.PNG" alt="">
                        <span>官方微博</span>
                    </a>
                    <a class="footer-t-m-item last footer-wechat">
                        <!--<i class="iconfont if-weixin"></i>-->
                        <img src="../../statics/images/if-weixin.PNG" alt="">
                        <span>微信公众号</span>
                        <b><img src="../../statics/images/WXcode.png"></b>
                    </a>
                </div>
                <div class="footer-t-bot">
                    <span class="footer-t-b-item"><a href="http://www.miitbeian.gov.cn/" rel="nofollow" target="_blank">沪ICP备14020180</a></span>
                    <span class="footer-t-b-item">增值电信业务经营许可证：<a href="http://www.miit.cc/" target="_blank">沪B2-20160026</a></span>
                    <span class="footer-t-b-item last"><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010702001120"><img class="v-middle record-img" src="../../statics/images/beian.png"> 沪公网安备 31010702001120号</a></span>
                </div>
            </div>
            <div class="footer-t-r">
                <img src="../../statics/images/getDynamicQRImage.png" class="footer-qrcode">
            </div>
        </div>
    </div>
</div>
<div style="display:none">
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
    </script><script async="" src="../../statics/js_lease/h.js.下载" type="text/javascript"></script>    <script type="text/javascript">
    //<!-- 其他统计 -->
    // var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1000539121'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s19.cnzz.com/z_stat.php%3Fid%3D1000539121' type='text/javascript'%3E%3C/script%3E"));

    //注册成功
    if(''=='1'){
        _hmt.push(['_trackPageview', '/singup']);
    }
    //登录成功
    if(''=='1'){
        _hmt.push(['_trackPageview', '/login']);
    }
    //立即约看
    // if('' > 0){
    //     var ht = '';
    //     if(ht=='1'){//出租
    //         _hmt.push(['_trackEvent', 'Look_house', 'apply_now','zufang']);//百度统计
    //     }else if(ht=='2'){//出售
    //         _hmt.push(['_trackEvent', 'Look_house', 'apply_now','esf']);//百度统计
    //     }
    // }
    //预约看房
    // if('' > 0){
    //     var ht = '';
    //     if(ht=='1'){//出租
    //         _hmt.push(['_trackEvent', 'Look_house', 'choose_time','zufang']);//百度统计
    //     }else if(ht=='2'){//出售
    //         _hmt.push(['_trackEvent', 'Look_house', 'choose_time','esf']);//百度统计
    //     }
    // }

    // //约看完成
    // if(''=='1'){
    //     if(''=='1'){//出租
    //         _hmt.push(['_trackEvent', 'Look_house', 'submit_apply','zufang']);//百度统计
    //     }else if(''=='2'){//出售
    //         _hmt.push(['_trackEvent', 'Look_house', 'submit_apply','esf']);//百度统计
    //     }
    //     _hmt.push(['_trackOrder', { "orderId": "", "orderTotal": "", "item": JSON.stringify()} ]);
    // }
</script>

</div>
<!-- 百度统计 -->



</body></html>
