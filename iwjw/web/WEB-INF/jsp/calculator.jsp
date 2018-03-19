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
    <meta name="baidu-site-verification" content="rO1Bqg66kn"/>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <link rel="stylesheet" href='../../statics/css/common_72.css'>
    <link rel="stylesheet" href='../../statics/css/calculator_5.3.css'>
    <script>
        ;(function () {
            if (location.hostname.indexOf('iwjw.com') != -1 && location.hostname.indexOf('pcbeta') == -1 && location.protocol == 'http:') {
                location.href = location.href.replace('http://', 'https://')
            }
        })()
        window.pageConfig = {
            siteUrl: "//www.iwjw.com",
            mobileSiteUrl: '//m.iwjw.com',
            mobileSiteUrlHasProtocol: 'https://m.iwjw.com',
            selectCity: false,
            map: {
                province: [{"pname": "上海", "pid": 2, "pinyin": "shanghai"}, {
                    "pname": "北京",
                    "pid": 12438,
                    "pinyin": "beijing"
                }, {"pname": "广州", "pid": 40000, "pinyin": "guangzhou"}, {
                    "pname": "深圳",
                    "pid": 56000,
                    "pinyin": "shenzhen"
                }, {"pname": "杭州", "pid": 71049, "pinyin": "hangzhou"}, {
                    "pname": "天津",
                    "pid": 71099,
                    "pinyin": "tianjin"
                }, {"pname": "南京", "pid": 86724, "pinyin": "nanjing"}, {
                    "pname": "武汉",
                    "pid": 86725,
                    "pinyin": "wuhan"
                }, {"pname": "成都", "pid": 98289, "pinyin": "chengdu"}, {
                    "pname": "重庆",
                    "pid": 98290,
                    "pinyin": "chongqing"
                }]
            },
            datacollectUrl: '//plog.iwjw.com/dataCollect/',
            staticUrl: '' || '//resource.iwjw.com/iwjw-pc/',
            staticTag: 'calculator',
            recommendUrl: '//recommend.iwjw.com',
            videoSerUrl: '//video.iwjw.com/prev/pc/play.html',
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
                    ><img src="picture/iwjwlog.png" alt="爱屋吉屋" class="logo-img"></a>
                    <div class="city none nav-item">
                        <a class="province"></a>
                    </div>
                    <div class="nav-item" data-log="homepage"
                    ><a href="/" class="nav-item-a ">首页</a></div>
                    <div class="nav-item" data-log="secondhouse">
                        <a href="/sale/map/"
                           class="nav-item-a ">二手房</a></div>
                    <div class="nav-item" data-log="rent">
                        <a href="/chuzu/map/"
                           class="nav-item-a ">租房</a></div>


                    <div class="nav-item nav-item-server" data-log="entrust">
                        <a href="/delegation/" rel="nofollow"
                           class="nav-item-a "
                        >业主委托</a>
                    </div>

                    <div class="nav-item" data-log="baike">
                        <a class="nav-item-a " href="/baike/guangzhou/">购房攻略 </a>
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
            <div data-reactid=".0">
                <div class="title" data-reactid=".0.0"><i class="iconfont if-calculator" data-reactid=".0.0.0"></i><span
                        data-reactid=".0.0.1">&nbsp;&nbsp;算房贷</span></div>
                <div class="content clearfix" data-reactid=".0.1">
                    <div class="f-l" data-reactid=".0.1.0">
                        <div class="row" data-reactid=".0.1.0.0"><span class="row-left"
                                                                       data-reactid=".0.1.0.0.0">贷款方式</span><span
                                class="row-right" data-reactid=".0.1.0.0.1"><span class="mod-radio"
                                                                                  data-reactid=".0.1.0.0.1.0"><label
                                class="radio-item" data-reactid=".0.1.0.0.1.0.$radio0"><i class="iconfont if-uncheck"
                                                                                          data-reactid=".0.1.0.0.1.0.$radio0.0"></i><span
                                data-reactid=".0.1.0.0.1.0.$radio0.1">等额本息</span></label><label class="radio-item"
                                                                                                data-reactid=".0.1.0.0.1.0.$radio1"><i
                                class="iconfont if-checkbox-circle" data-reactid=".0.1.0.0.1.0.$radio1.0"></i><span
                                data-reactid=".0.1.0.0.1.0.$radio1.1">等额本金</span></label></span><div class="tip"
                                                                                                     style="margin-left:18px;"
                                                                                                     data-reactid=".0.1.0.0.1.1"><i
                                class="iconfont if-help" data-reactid=".0.1.0.0.1.1.0"></i><div
                                class="tip-info arrow-top" data-reactid=".0.1.0.0.1.1.1"><b
                                data-reactid=".0.1.0.0.1.1.1.0">等额本息</b><span data-reactid=".0.1.0.0.1.1.1.1">:等额本息还款,也称定期付息,即借款人每月按相等的金额偿还贷款本息,其中每月贷款利息按月初剩余贷款本金计算并逐月结清。</span><br
                                data-reactid=".0.1.0.0.1.1.1.2"><b data-reactid=".0.1.0.0.1.1.1.3">等额本金</b><span
                                data-reactid=".0.1.0.0.1.1.1.4">:又称利随本清、等本不等息还款法。贷款人将本金分摊到每个月内,同时付清上一交易日至本次还款日之间的利息。</span></div></div></span>
                        </div>
                        <div class="row" data-reactid=".0.1.0.1"><span class="row-left"
                                                                       data-reactid=".0.1.0.1.0">房源总价</span><span
                                class="row-right" data-reactid=".0.1.0.1.1"><div class="mod-input"
                                                                                 data-reactid=".0.1.0.1.1.0"><label
                                class="input-wrap" data-reactid=".0.1.0.1.1.0.0"><input class="input-value" type="text"
                                                                                        value="0" maxlength="6"
                                                                                        data-reactid=".0.1.0.1.1.0.0.0"><span
                                class="input-unit" data-reactid=".0.1.0.1.1.0.0.1">万</span></label></div></span></div>
                        <div class="row" data-reactid=".0.1.0.2"><span class="row-left"
                                                                       data-reactid=".0.1.0.2.0">首付</span><span
                                class="row-right" data-reactid=".0.1.0.2.1"><div class="mod-sf mod-select"
                                                                                 data-reactid=".0.1.0.2.1.0"><div
                                class="select-input" data-reactid=".0.1.0.2.1.0.0"><span class="select-value"
                                                                                         data-reactid=".0.1.0.2.1.0.0.0"><span
                                data-reactid=".0.1.0.2.1.0.0.0.0"><span
                                data-reactid=".0.1.0.2.1.0.0.0.0.0">3</span><span
                                data-reactid=".0.1.0.2.1.0.0.0.0.1">成</span><span class="gray-light"
                                                                                  data-reactid=".0.1.0.2.1.0.0.0.0.2"><span
                                data-reactid=".0.1.0.2.1.0.0.0.0.2.0">（</span><span
                                data-reactid=".0.1.0.2.1.0.0.0.0.2.1">0</span><span
                                data-reactid=".0.1.0.2.1.0.0.0.0.2.2">万）</span></span></span></span><i
                                class="iconfont if-triangle-down" data-reactid=".0.1.0.2.1.0.0.1"></i></div><span
                                data-reactid=".0.1.0.2.1.0.1"></span><div class="select-dropdown" style="display:none;"
                                                                          data-reactid=".0.1.0.2.1.0.2"><div
                                class="select-price" data-reactid=".0.1.0.2.1.0.2.0"><label class="price-input-wrap"
                                                                                            data-reactid=".0.1.0.2.1.0.2.0.0"><input
                                class="price-input" type="text" maxlength="6" value="0"
                                data-reactid=".0.1.0.2.1.0.2.0.0.0"><span
                                data-reactid=".0.1.0.2.1.0.2.0.0.1">&nbsp;万</span></label><span
                                data-reactid=".0.1.0.2.1.0.2.0.1"></span></div><ul class="select-items"
                                                                                   data-reactid=".0.1.0.2.1.0.2.1"><li
                                class="select-item" data-reactid=".0.1.0.2.1.0.2.1.$sf1"><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf1.0">1</span><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf1.1">成</span></li><li class="select-item"
                                                                                        data-reactid=".0.1.0.2.1.0.2.1.$sf2"><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf2.0">2</span><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf2.1">成</span></li><li class="select-item"
                                                                                        data-reactid=".0.1.0.2.1.0.2.1.$sf2=15"><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf2=15.0">2.5</span><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf2=15.1">成</span></li><li class="select-item selected"
                                                                                           data-reactid=".0.1.0.2.1.0.2.1.$sf3"><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf3.0">3</span><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf3.1">成</span></li><li class="select-item"
                                                                                        data-reactid=".0.1.0.2.1.0.2.1.$sf3=15"><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf3=15.0">3.5</span><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf3=15.1">成</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.2.1.0.2.1.$sf4"><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf4.0">4</span><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf4.1">成</span></li><li class="select-item"
                                                                                        data-reactid=".0.1.0.2.1.0.2.1.$sf5"><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf5.0">5</span><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf5.1">成</span></li><li class="select-item"
                                                                                        data-reactid=".0.1.0.2.1.0.2.1.$sf6"><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf6.0">6</span><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf6.1">成</span></li><li class="select-item"
                                                                                        data-reactid=".0.1.0.2.1.0.2.1.$sf7"><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf7.0">7</span><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf7.1">成</span></li><li class="select-item"
                                                                                        data-reactid=".0.1.0.2.1.0.2.1.$sf8"><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf8.0">8</span><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf8.1">成</span></li><li class="select-item"
                                                                                        data-reactid=".0.1.0.2.1.0.2.1.$sf9"><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf9.0">9</span><span
                                data-reactid=".0.1.0.2.1.0.2.1.$sf9.1">成</span></li></ul></div></div></span></div>
                        <div class="row-divide" data-reactid=".0.1.0.3"></div>
                        <div class="row" data-reactid=".0.1.0.4"><span class="row-left"
                                                                       data-reactid=".0.1.0.4.0">公积金贷款</span><span
                                class="row-right" data-reactid=".0.1.0.4.1"><div class="mod-input"
                                                                                 data-reactid=".0.1.0.4.1.0"><label
                                class="input-wrap" data-reactid=".0.1.0.4.1.0.0"><input class="input-value" type="text"
                                                                                        value="0" maxlength="6"
                                                                                        data-reactid=".0.1.0.4.1.0.0.0"><span
                                class="input-unit" data-reactid=".0.1.0.4.1.0.0.1">万</span></label></div></span></div>
                        <div class="row" data-reactid=".0.1.0.5"><span class="row-left"
                                                                       data-reactid=".0.1.0.5.0">公积金利率</span><span
                                class="row-right" data-reactid=".0.1.0.5.1"><div class="mod-select"
                                                                                 data-reactid=".0.1.0.5.1.0"><div
                                class="select-input" data-reactid=".0.1.0.5.1.0.0"><span class="select-value"
                                                                                         data-reactid=".0.1.0.5.1.0.0.0">3.25%</span><i
                                class="iconfont if-triangle-down" data-reactid=".0.1.0.5.1.0.0.1"></i></div><ul
                                class="select-dropdown" style="display:none;" data-reactid=".0.1.0.5.1.0.1"><li
                                class="select-item selected" data-reactid=".0.1.0.5.1.0.1.$select0">基准利率</li><li
                                class="select-item" data-reactid=".0.1.0.5.1.0.1.$select1">1.1倍基准利率</li></ul></div><div
                                class="tip" data-reactid=".0.1.0.5.1.1"><i class="iconfont if-help"
                                                                           data-reactid=".0.1.0.5.1.1.0"></i><div
                                class="tip-info arrow-top" data-reactid=".0.1.0.5.1.1.1"><span
                                data-reactid=".0.1.0.5.1.1.1.0">根据2015年10月24日最新银行公积金贷款利率： 5年以下：2.75%</span><span
                                class="gray-light" data-reactid=".0.1.0.5.1.1.1.1">（包括5年）</span><br
                                data-reactid=".0.1.0.5.1.1.1.2"><span data-reactid=".0.1.0.5.1.1.1.3">5年以上：3.25%</span></div></div></span>
                        </div>
                        <div class="row" data-reactid=".0.1.0.6"><span class="row-left"
                                                                       data-reactid=".0.1.0.6.0">公积金期限</span><span
                                class="row-right" data-reactid=".0.1.0.6.1"><div class="mod-select"
                                                                                 data-reactid=".0.1.0.6.1.0"><div
                                class="select-input" data-reactid=".0.1.0.6.1.0.0"><span class="select-value"
                                                                                         data-reactid=".0.1.0.6.1.0.0.0"><span
                                data-reactid=".0.1.0.6.1.0.0.0.0">20</span><span
                                data-reactid=".0.1.0.6.1.0.0.0.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.0.0.2">240</span><span
                                data-reactid=".0.1.0.6.1.0.0.0.3">期)</span></span><i class="iconfont if-triangle-down"
                                                                                     data-reactid=".0.1.0.6.1.0.0.1"></i></div><ul
                                class="select-dropdown" style="display:none;" data-reactid=".0.1.0.6.1.0.1"><li
                                class="select-item" data-reactid=".0.1.0.6.1.0.1.$select0"><span
                                data-reactid=".0.1.0.6.1.0.1.$select0.0">1</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select0.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select0.2">12</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select0.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.6.1.0.1.$select1"><span
                                data-reactid=".0.1.0.6.1.0.1.$select1.0">2</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select1.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select1.2">24</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select1.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.6.1.0.1.$select2"><span
                                data-reactid=".0.1.0.6.1.0.1.$select2.0">3</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select2.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select2.2">36</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select2.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.6.1.0.1.$select3"><span
                                data-reactid=".0.1.0.6.1.0.1.$select3.0">4</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select3.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select3.2">48</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select3.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.6.1.0.1.$select4"><span
                                data-reactid=".0.1.0.6.1.0.1.$select4.0">5</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select4.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select4.2">60</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select4.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.6.1.0.1.$select5"><span
                                data-reactid=".0.1.0.6.1.0.1.$select5.0">6</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select5.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select5.2">72</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select5.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.6.1.0.1.$select6"><span
                                data-reactid=".0.1.0.6.1.0.1.$select6.0">7</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select6.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select6.2">84</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select6.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.6.1.0.1.$select7"><span
                                data-reactid=".0.1.0.6.1.0.1.$select7.0">8</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select7.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select7.2">96</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select7.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.6.1.0.1.$select8"><span
                                data-reactid=".0.1.0.6.1.0.1.$select8.0">9</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select8.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select8.2">108</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select8.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.6.1.0.1.$select9"><span
                                data-reactid=".0.1.0.6.1.0.1.$select9.0">10</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select9.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select9.2">120</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select9.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.6.1.0.1.$select10"><span
                                data-reactid=".0.1.0.6.1.0.1.$select10.0">11</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select10.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select10.2">132</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select10.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select11"><span
                                data-reactid=".0.1.0.6.1.0.1.$select11.0">12</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select11.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select11.2">144</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select11.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select12"><span
                                data-reactid=".0.1.0.6.1.0.1.$select12.0">13</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select12.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select12.2">156</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select12.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select13"><span
                                data-reactid=".0.1.0.6.1.0.1.$select13.0">14</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select13.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select13.2">168</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select13.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select14"><span
                                data-reactid=".0.1.0.6.1.0.1.$select14.0">15</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select14.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select14.2">180</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select14.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select15"><span
                                data-reactid=".0.1.0.6.1.0.1.$select15.0">16</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select15.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select15.2">192</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select15.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select16"><span
                                data-reactid=".0.1.0.6.1.0.1.$select16.0">17</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select16.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select16.2">204</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select16.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select17"><span
                                data-reactid=".0.1.0.6.1.0.1.$select17.0">18</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select17.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select17.2">216</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select17.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select18"><span
                                data-reactid=".0.1.0.6.1.0.1.$select18.0">19</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select18.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select18.2">228</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select18.3">期)</span></li><li class="select-item selected"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select19"><span
                                data-reactid=".0.1.0.6.1.0.1.$select19.0">20</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select19.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select19.2">240</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select19.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select20"><span
                                data-reactid=".0.1.0.6.1.0.1.$select20.0">21</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select20.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select20.2">252</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select20.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select21"><span
                                data-reactid=".0.1.0.6.1.0.1.$select21.0">22</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select21.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select21.2">264</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select21.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select22"><span
                                data-reactid=".0.1.0.6.1.0.1.$select22.0">23</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select22.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select22.2">276</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select22.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select23"><span
                                data-reactid=".0.1.0.6.1.0.1.$select23.0">24</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select23.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select23.2">288</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select23.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select24"><span
                                data-reactid=".0.1.0.6.1.0.1.$select24.0">25</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select24.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select24.2">300</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select24.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select25"><span
                                data-reactid=".0.1.0.6.1.0.1.$select25.0">26</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select25.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select25.2">312</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select25.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select26"><span
                                data-reactid=".0.1.0.6.1.0.1.$select26.0">27</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select26.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select26.2">324</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select26.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select27"><span
                                data-reactid=".0.1.0.6.1.0.1.$select27.0">28</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select27.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select27.2">336</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select27.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select28"><span
                                data-reactid=".0.1.0.6.1.0.1.$select28.0">29</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select28.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select28.2">348</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select28.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.6.1.0.1.$select29"><span
                                data-reactid=".0.1.0.6.1.0.1.$select29.0">30</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select29.1">年(</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select29.2">360</span><span
                                data-reactid=".0.1.0.6.1.0.1.$select29.3">期)</span></li></ul></div></span></div>
                        <div class="row-divide" data-reactid=".0.1.0.7"></div>
                        <div class="row" data-reactid=".0.1.0.8"><span class="row-left"
                                                                       data-reactid=".0.1.0.8.0">商业贷款</span><span
                                class="row-right" data-reactid=".0.1.0.8.1"><div class="mod-input"
                                                                                 data-reactid=".0.1.0.8.1.0"><label
                                class="input-wrap" data-reactid=".0.1.0.8.1.0.0"><input class="input-value" type="text"
                                                                                        value="0" maxlength="6"
                                                                                        data-reactid=".0.1.0.8.1.0.0.0"><span
                                class="input-unit" data-reactid=".0.1.0.8.1.0.0.1">万</span></label></div></span></div>
                        <div class="row" data-reactid=".0.1.0.9"><span class="row-left"
                                                                       data-reactid=".0.1.0.9.0">商贷利率</span><span
                                class="row-right" data-reactid=".0.1.0.9.1"><div class="mod-sdll mod-select"
                                                                                 data-reactid=".0.1.0.9.1.0"><div
                                class="select-input" data-reactid=".0.1.0.9.1.0.0"><span class="select-value"
                                                                                         data-reactid=".0.1.0.9.1.0.0.0"><span
                                data-reactid=".0.1.0.9.1.0.0.0.0"><span
                                data-reactid=".0.1.0.9.1.0.0.0.0.0">4.9</span><span data-reactid=".0.1.0.9.1.0.0.0.0.1"> %</span></span></span><i
                                class="iconfont if-triangle-down" data-reactid=".0.1.0.9.1.0.0.1"></i></div><span
                                data-reactid=".0.1.0.9.1.0.1"></span><div class="select-dropdown" style="display:none;"
                                                                          data-reactid=".0.1.0.9.1.0.2"><div
                                class="select-percent" data-reactid=".0.1.0.9.1.0.2.0"><label class="percent-input-wrap"
                                                                                              data-reactid=".0.1.0.9.1.0.2.0.0"><input
                                class="percent-input" type="text" maxlength="5" value="4.9"
                                data-reactid=".0.1.0.9.1.0.2.0.0.0"><span
                                data-reactid=".0.1.0.9.1.0.2.0.0.1">&nbsp;%</span></label><span
                                data-reactid=".0.1.0.9.1.0.2.0.1"></span></div><ul class="select-items"
                                                                                   data-reactid=".0.1.0.9.1.0.2.1"><li
                                class="select-item" data-reactid=".0.1.0.9.1.0.2.1.$sdll0=17">7折</li><li
                                class="select-item" data-reactid=".0.1.0.9.1.0.2.1.$sdll0=18">8折</li><li
                                class="select-item" data-reactid=".0.1.0.9.1.0.2.1.$sdll0=183">8.3折</li><li
                                class="select-item" data-reactid=".0.1.0.9.1.0.2.1.$sdll0=185">8.5折</li><li
                                class="select-item" data-reactid=".0.1.0.9.1.0.2.1.$sdll0=188">8.8折</li><li
                                class="select-item" data-reactid=".0.1.0.9.1.0.2.1.$sdll0=19">9折</li><li
                                class="select-item" data-reactid=".0.1.0.9.1.0.2.1.$sdll0=195">9.5折</li><li
                                class="select-item selected" data-reactid=".0.1.0.9.1.0.2.1.$sdll1">基准利率(4.90%)</li><li
                                class="select-item" data-reactid=".0.1.0.9.1.0.2.1.$sdll1=105">1.05倍</li><li
                                class="select-item" data-reactid=".0.1.0.9.1.0.2.1.$sdll1=11">1.1倍</li><li
                                class="select-item" data-reactid=".0.1.0.9.1.0.2.1.$sdll1=12">1.2倍</li></ul></div></div></span>
                            <div class="tip" data-reactid=".0.1.0.9.2"><i class="iconfont if-help"
                                                                          data-reactid=".0.1.0.9.2.0"></i>
                                <div class="tip-info arrow-top" data-reactid=".0.1.0.9.2.1"><span
                                        data-reactid=".0.1.0.9.2.1.0">根据2015年10月24日最新银行商业贷款利率： 0~1年：4.35%</span><span
                                        class="gray-light" data-reactid=".0.1.0.9.2.1.1">（包括1年）</span><br
                                        data-reactid=".0.1.0.9.2.1.2"><span
                                        data-reactid=".0.1.0.9.2.1.3">1~5年：4.75%</span><span class="gray-light"
                                                                                             data-reactid=".0.1.0.9.2.1.4">（包括5年）</span><br
                                        data-reactid=".0.1.0.9.2.1.5"><span
                                        data-reactid=".0.1.0.9.2.1.6">5年以上：4.90%</span></div>
                            </div>
                        </div>
                        <div class="row" data-reactid=".0.1.0.a"><span class="row-left"
                                                                       data-reactid=".0.1.0.a.0">商贷期限</span><span
                                class="row-right" data-reactid=".0.1.0.a.1"><div class="mod-select"
                                                                                 data-reactid=".0.1.0.a.1.0"><div
                                class="select-input" data-reactid=".0.1.0.a.1.0.0"><span class="select-value"
                                                                                         data-reactid=".0.1.0.a.1.0.0.0"><span
                                data-reactid=".0.1.0.a.1.0.0.0.0">20</span><span
                                data-reactid=".0.1.0.a.1.0.0.0.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.0.0.2">240</span><span
                                data-reactid=".0.1.0.a.1.0.0.0.3">期)</span></span><i class="iconfont if-triangle-down"
                                                                                     data-reactid=".0.1.0.a.1.0.0.1"></i></div><ul
                                class="select-dropdown" style="display:none;" data-reactid=".0.1.0.a.1.0.1"><li
                                class="select-item" data-reactid=".0.1.0.a.1.0.1.$select0"><span
                                data-reactid=".0.1.0.a.1.0.1.$select0.0">1</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select0.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select0.2">12</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select0.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.a.1.0.1.$select1"><span
                                data-reactid=".0.1.0.a.1.0.1.$select1.0">2</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select1.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select1.2">24</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select1.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.a.1.0.1.$select2"><span
                                data-reactid=".0.1.0.a.1.0.1.$select2.0">3</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select2.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select2.2">36</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select2.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.a.1.0.1.$select3"><span
                                data-reactid=".0.1.0.a.1.0.1.$select3.0">4</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select3.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select3.2">48</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select3.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.a.1.0.1.$select4"><span
                                data-reactid=".0.1.0.a.1.0.1.$select4.0">5</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select4.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select4.2">60</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select4.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.a.1.0.1.$select5"><span
                                data-reactid=".0.1.0.a.1.0.1.$select5.0">6</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select5.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select5.2">72</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select5.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.a.1.0.1.$select6"><span
                                data-reactid=".0.1.0.a.1.0.1.$select6.0">7</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select6.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select6.2">84</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select6.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.a.1.0.1.$select7"><span
                                data-reactid=".0.1.0.a.1.0.1.$select7.0">8</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select7.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select7.2">96</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select7.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.a.1.0.1.$select8"><span
                                data-reactid=".0.1.0.a.1.0.1.$select8.0">9</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select8.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select8.2">108</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select8.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.a.1.0.1.$select9"><span
                                data-reactid=".0.1.0.a.1.0.1.$select9.0">10</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select9.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select9.2">120</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select9.3">期)</span></li><li class="select-item"
                                                                                           data-reactid=".0.1.0.a.1.0.1.$select10"><span
                                data-reactid=".0.1.0.a.1.0.1.$select10.0">11</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select10.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select10.2">132</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select10.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select11"><span
                                data-reactid=".0.1.0.a.1.0.1.$select11.0">12</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select11.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select11.2">144</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select11.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select12"><span
                                data-reactid=".0.1.0.a.1.0.1.$select12.0">13</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select12.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select12.2">156</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select12.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select13"><span
                                data-reactid=".0.1.0.a.1.0.1.$select13.0">14</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select13.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select13.2">168</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select13.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select14"><span
                                data-reactid=".0.1.0.a.1.0.1.$select14.0">15</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select14.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select14.2">180</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select14.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select15"><span
                                data-reactid=".0.1.0.a.1.0.1.$select15.0">16</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select15.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select15.2">192</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select15.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select16"><span
                                data-reactid=".0.1.0.a.1.0.1.$select16.0">17</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select16.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select16.2">204</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select16.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select17"><span
                                data-reactid=".0.1.0.a.1.0.1.$select17.0">18</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select17.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select17.2">216</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select17.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select18"><span
                                data-reactid=".0.1.0.a.1.0.1.$select18.0">19</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select18.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select18.2">228</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select18.3">期)</span></li><li class="select-item selected"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select19"><span
                                data-reactid=".0.1.0.a.1.0.1.$select19.0">20</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select19.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select19.2">240</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select19.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select20"><span
                                data-reactid=".0.1.0.a.1.0.1.$select20.0">21</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select20.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select20.2">252</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select20.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select21"><span
                                data-reactid=".0.1.0.a.1.0.1.$select21.0">22</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select21.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select21.2">264</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select21.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select22"><span
                                data-reactid=".0.1.0.a.1.0.1.$select22.0">23</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select22.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select22.2">276</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select22.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select23"><span
                                data-reactid=".0.1.0.a.1.0.1.$select23.0">24</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select23.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select23.2">288</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select23.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select24"><span
                                data-reactid=".0.1.0.a.1.0.1.$select24.0">25</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select24.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select24.2">300</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select24.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select25"><span
                                data-reactid=".0.1.0.a.1.0.1.$select25.0">26</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select25.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select25.2">312</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select25.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select26"><span
                                data-reactid=".0.1.0.a.1.0.1.$select26.0">27</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select26.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select26.2">324</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select26.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select27"><span
                                data-reactid=".0.1.0.a.1.0.1.$select27.0">28</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select27.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select27.2">336</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select27.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select28"><span
                                data-reactid=".0.1.0.a.1.0.1.$select28.0">29</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select28.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select28.2">348</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select28.3">期)</span></li><li class="select-item"
                                                                                            data-reactid=".0.1.0.a.1.0.1.$select29"><span
                                data-reactid=".0.1.0.a.1.0.1.$select29.0">30</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select29.1">年(</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select29.2">360</span><span
                                data-reactid=".0.1.0.a.1.0.1.$select29.3">期)</span></li></ul></div></span></div>
                    </div>
                    <div class="divide arrow-right" data-reactid=".0.1.1"></div>
                    <div class="result" data-reactid=".0.1.2"><h2 class="result-title" data-reactid=".0.1.2.0">计算结果</h2>
                        <ul class="result-wrap" data-reactid=".0.1.2.1">
                            <li class="result-item clearfix" data-reactid=".0.1.2.1.0"><span
                                    data-reactid=".0.1.2.1.0.0">首付</span><span class="f-r"
                                                                               data-reactid=".0.1.2.1.0.1"><span
                                    class="orange" data-reactid=".0.1.2.1.0.1.0"><span class="figure"
                                                                                       data-reactid=".0.1.2.1.0.1.0.0">0</span></span><span
                                    data-reactid=".0.1.2.1.0.1.1"> 万</span></span></li>
                            <li class="result-item clearfix" data-reactid=".0.1.2.1.1"><span
                                    data-reactid=".0.1.2.1.1.0">首月月供</span><span class="f-r"
                                                                                 data-reactid=".0.1.2.1.1.1"><span
                                    class="orange" data-reactid=".0.1.2.1.1.1.0"><span class="figure"
                                                                                       data-reactid=".0.1.2.1.1.1.0.0">0</span></span><span
                                    data-reactid=".0.1.2.1.1.1.1"> 元</span></span></li>
                            <li class="result-item clearfix" data-reactid=".0.1.2.1.2"><span
                                    data-reactid=".0.1.2.1.2.0">每月递减</span><span class="f-r"
                                                                                 data-reactid=".0.1.2.1.2.1"><span
                                    class="orange" data-reactid=".0.1.2.1.2.1.0"><span class="figure"
                                                                                       data-reactid=".0.1.2.1.2.1.0.0">0</span></span><span
                                    data-reactid=".0.1.2.1.2.1.1"> 元</span></span></li>
                            <li class="result-item clearfix" data-reactid=".0.1.2.1.3"><span
                                    data-reactid=".0.1.2.1.3.0">贷款总额</span><span class="f-r"
                                                                                 data-reactid=".0.1.2.1.3.1"><span
                                    class="result-item-num" data-reactid=".0.1.2.1.3.1.0"><span class="figure"
                                                                                                data-reactid=".0.1.2.1.3.1.0.0">0</span></span><span
                                    data-reactid=".0.1.2.1.3.1.1">万</span></span></li>
                            <li class="result-item clearfix" data-reactid=".0.1.2.1.4"><span
                                    data-reactid=".0.1.2.1.4.0">支付利息</span><span class="f-r"
                                                                                 data-reactid=".0.1.2.1.4.1"><span
                                    class="result-item-num" data-reactid=".0.1.2.1.4.1.0"><span class="figure"
                                                                                                data-reactid=".0.1.2.1.4.1.0.0">0</span></span><span
                                    data-reactid=".0.1.2.1.4.1.1">万</span></span></li>
                            <li class="result-item clearfix" data-reactid=".0.1.2.1.5"><span
                                    data-reactid=".0.1.2.1.5.0">还款总额</span><span class="f-r"
                                                                                 data-reactid=".0.1.2.1.5.1"><span
                                    class="result-item-num" data-reactid=".0.1.2.1.5.1.0"><span class="figure"
                                                                                                data-reactid=".0.1.2.1.5.1.0.0">0</span></span><span
                                    data-reactid=".0.1.2.1.5.1.1">万</span></span></li>
                            <li class="result-item clearfix" data-reactid=".0.1.2.1.6"><span
                                    data-reactid=".0.1.2.1.6.0">贷款月数</span><span class="f-r"
                                                                                 data-reactid=".0.1.2.1.6.1"><span
                                    class="result-item-num" data-reactid=".0.1.2.1.6.1.0"><span class="figure"
                                                                                                data-reactid=".0.1.2.1.6.1.0.0">240</span></span><span
                                    data-reactid=".0.1.2.1.6.1.1">月</span></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<!--[if IE 8]>
<script src='../../statics/js/es5-shim-sham_5.5.js'></script><![endif]-->
<script src='../../statics/js/calculator_72.js'></script>
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
                    <a href="/help" rel="nofollow" class="footer-nav-item">帮助中心
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
                    <a class="footer-t-m-item" href="http://weibo.com/u/5132568692/home?wvr=5" rel="nofollow"
                       target="_blank">
                        <i class="iconfont if-weibo"></i>
                        <span>官方微博</span>
                    </a>
                    <a class="footer-t-m-item last footer-wechat" class="wx iconfont">
                        <i class="iconfont if-weixin"></i>
                        <span>微信公众号</span>
                        <b><img src="picture/wxcode.png"></b>
                    </a>
                </div>
                <div class="footer-t-bot">
                    <span class="footer-t-b-item"><a href="http://www.miitbeian.gov.cn" rel="nofollow" target="_blank">沪ICP备14020180</a></span>
                    <span class="footer-t-b-item">增值电信业务经营许可证：<a href="http://www.miit.cc/"
                                                                 target="_blank">沪B2-20160026</a></span>
                    <span class="footer-t-b-item last"><a target="_blank"
                                                          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010702001120"
                    ><img class="v-middle record-img" src="picture/ghs.png"/> 沪公网安备 31010702001120号</a></span>
                </div>
            </div>
            <div class="footer-t-r">
                <img src="picture/getdynamicqrimage.action" class="footer-qrcode"/>
            </div>
        </div>
    </div>
</div>
<div style="display:none">
    <script>
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?3a10bbf8b4afa9e5ab91d66b6944e813";
            hm.async = 1;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();

        var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
        document.write(unescape("%3Cscript async src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fd3a10bbf8b4afa9e5ab91d66b6944e813' type='text/javascript'%3E%3C/script%3E"));
    </script>


</div>
<!-- 百度统计 -->

</body>
</html>
