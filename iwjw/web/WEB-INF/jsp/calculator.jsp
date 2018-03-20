<%--
  Created by IntelliJ IDEA.
  User: 42958
  Date: 2018/3/18
  Time: 10:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>房贷计算器</title>
    <meta name="keywords" content="">
    <meta name="description" content="">

    <link rel="apple-touch-icon-precomposed" href="//resource.iwjw.com/iwjw-pc/img/common/logo_wx.png"/>
    <link rel="shortcut icon" href="//files.iwjw.com/icon/favicon.ico">
    <meta name="baidu-site-verification" content="rO1Bqg66kn" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <link rel="stylesheet" href='../../statics/css/common_72.css'>
    <link rel="stylesheet" href='../../statics/css/calculator_5.3.css'>
    <script>
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
            staticTag: 'calculator',
            recommendUrl:'//recommend.iwjw.com',
            videoSerUrl:'//video.iwjw.com/prev/pc/play.html',
            flag: '',
            provinceId: '40000',
            ht: '',
            cookieUserId: 0,
            signin: '',
            //全局增加是否采用极验验证标志，1-采用，0-不采用
            geetestFlag: '1',
            timestamp: '1521336263102',
            canSellShow: 'true',
            canRentShow: 'true'
        };
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
                    <a class="logo" href="/"
                    ><img src="../../statics/images/picture/iwjwlog.png" alt="爱屋吉屋" class="logo-img"></a>
                    <div class="city none nav-item">
                        <a class="province"></a>
                    </div>
                    <div class="nav-item" data-log="homepage"
                    ><a href="/" class="nav-item-a ">首页</a></div>
                    <div class="nav-item" data-log="secondhouse">
                        <a href="/sale/map/"
                           class="nav-item-a " >二手房</a></div>
                    <div class="nav-item" data-log="rent">
                        <a href="/chuzu/map/"
                           class="nav-item-a " >租房</a></div>


                    <div class="nav-item nav-item-server"  data-log="entrust">
                        <a href="/delegation/" rel="nofollow"
                           class="nav-item-a "
                        >业主委托</a>
                    </div>

                    <div class="nav-item" data-log="baike">
                        <a class="nav-item-a "  href="/baike/guangzhou/">购房攻略            </a>
                    </div>
                    <div class="nav-item" data-log="ailicai">
                        <a href="//www.iwlicai.com" target="_blank" class="nav-item-a ailicai ">吉爱财</a>
                        <div class="header-new"></div>
                    </div>
                    <div class="nav-item" data-log="dzg">
                        <a href="/dzg/" class="nav-item-a  "
                        >贷总管</a>
                    </div>
                    <div class="nav-item" data-log="appDownload">
                        <a href="/appDownPage/" class="nav-item-a "
                        ><i class="iconfont if-mobile"></i>APP</a>
                    </div>
                </dt>
                <dd class="header-right clearfix">
                    <div class="nav-item">
                        <a class="login none nav-item-a">正在读取...</a>
                    </div>


                </dd>
            </dl>
        </div>




        <div class="mod-calculator" id="mod-calculator">
        </div>
    </div>
</div>

<script src="../../statics/js/gt.js"></script>

<script type='text/javascript'>
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
</script><!--[if IE 8]> <script src='../../statics/js/es5-shim-sham_5.5.js'></script><![endif]-->
<script src='../../statics/js/common_72.js'></script>
<script src='../../statics/js/calculator_72.js'></script>
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
                        <%--<i class="iconfont if-weibo"></i>--%>
                            <img src="../../statics/images/background_img/if-weibo.PNG" alt="">
                        <span>官方微博</span>
                    </a>
                    <a class="footer-t-m-item last footer-wechat" class="wx iconfont">
                        <%--<i class="iconfont if-weixin"></i>--%>
                            <img src="../../statics/images/background_img/if-weixin.PNG" alt="">
                        <span>微信公众号</span>
                        <b><img src="../../statics/images/WXcode.png"></b>
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

<!-- 百度统计 -->

</body>
</html>
