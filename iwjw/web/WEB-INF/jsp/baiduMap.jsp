<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>map</title>
    <link rel="stylesheet" href="../../statics/mapCss/mapIndex.css">
    <link rel="stylesheet" href="../../statics/fontawesome-5.0.8/fontawesome-all.css">
    <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
    <script type="text/javascript"
            src="http://api.map.baidu.com/api?v=3.0&ak=vGIMmDBGvKlKoQ5l8lXIckDPtkh0UtHa"></script>
    <script type="text/javascript" src="../../statics/mView/zoom.js"></script>

</head>

<body>
<div id="indexMap">
    <div class="indexMap-wrap">
        <!-- Header Start -->
        <div class="mod-header map-header" id="Top">
            <dl class="header-wrap">
                <dt class="header-left">
                    <a class="logo" href="/">
                        <img src="../../statics/images/logo.png" alt="" class="logo-img">
                    </a>
                    <div class="city nav-item">
                        <a class="province" provinceid="40000" provincepy="guangzhou">广州
                            <i class="far fa-angle-down"></i>
                        </a>
                    </div>
                    <div class="nav-item" data-log="homepage">
                        <a href="/" class="nav-item-a ">首页</a>
                    </div>
                    <div class="nav-item" data-log="secondhouse">
                        <a href="/" class="nav-item-a ">二手房</a>
                    </div>
                    <div class="nav-item" data-log="rent">
                        <a href="/" class="nav-item-a active">租房</a>
                    </div>


                    <div class="nav-item nav-item-server" data-log="entrust">
                        <a href="/" rel="nofollow" class="nav-item-a ">业主委托</a>
                    </div>

                    <div class="nav-item" data-log="baike">
                        <a class="nav-item-a " href="/baike/guangzhou/">购房攻略 </a>
                    </div>
                    <div class="nav-item" data-log="ailicai">
                        <a href="/" target="_blank" class="nav-item-a ailicai ">吉爱财</a>
                        <div class="header-new"></div>
                    </div>
                    <div class="nav-item" data-log="dzg">
                        <a href="/" class="nav-item-a  ">贷总管</a>
                    </div>
                    <div class="nav-item" data-log="appDownload">
                        <a href="/" class="nav-item-a ">
                            <i class="iconfont if-mobile"></i>APP</a>
                    </div>
                </dt>
                <dd class="header-right clearfix">
                    <div class="nav-item">
                        <a href="#" class="login none nav-item-a login-require " target="_blank">
                            <i class="nav-item-txt">登录
                                <span class="slash">/</span>注册</i>
                        </a>
                    </div>
                    <div class="nav-item message-nav" id="message-nav">
                        <div class="nav-message-wrap" data-reactid=".1"></div>
                    </div>


                </dd>
            </dl>
        </div>
        <!-- Header End -->
        <div class="mod-map" id="mod-map">
            <div class="mod-layout map-rent">
                <div class="map-wrap">
                    <div id="container" class="map"></div>
                    <div class="mod-selected hide"></div>
                    <!-- 这是一个隐藏的dom -->
                    <div class="mod-list">
                        <div class="mod-list-wrap mod-list-plate">
                            <div class="list-head">
                                <h1 class="list-attribution">
                                    <b class="attr-name">机场路</b>
                                    <span class="attr-price"></span>
                                </h1>
                            </div>
                            <h2 class="list-summary">
                                共找到
                                <b class="fo-red">71</b> 个小区, 在租
                                <b class="fo-red find-num" data-num="720">720</b> 套
                            </h2>
                            <div class="list-result">
                                <div class="map-list-content">
                                    <div class="scrollbar" style="height: 162px;">
                                        <div class="track" style="height: 162px;">
                                            <div class="thumb" style="top: 0px; height: 20px;"></div>
                                        </div>
                                    </div>
                                    <div class="viewport">
                                        <div class="overview list-wrap" style="top: 0px;">
                                            <ul class="list-estate">
                                                <li class="list-item-wrap" data-id="53136" data-index="0" data-g="3">
                                                    <i class="item-name need-cut">又一居花园</i>
                                                    <div class="t-r">
                                                        <i class="item-total">
                                                            <i class="total-num">47</i>套</i>
                                                        <em class="iconfont fo-arrow-r">혨</em>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="mod-zoom unselectable">
                        <a id="bzoom" class="zoom-btn zoom-in iconfont">혱</a>
                        <a id="szoom" class="zoom-btn zoom-out iconfont">홁</a>
                    </div>
                    <div class="mod-floating">
                        <!-- <div class="mod-find-school hide" id="find-school"></div> -->
                        <div class="mod-surround">
                            <div class="surround-select">
                                <ul class="surround-opts">
                                    <li class="surround-item" data-index="0" data-text="公交">
                                        <i class="iconfont">홖</i>
                                        <span class="surround-text">公交</span>
                                    </li>
                                    <li class="surround-item" data-index="1" data-text="地铁">
                                        <i class="iconfont">혭</i>
                                        <span class="surround-text">地铁</span>
                                    </li>
                                    <li class="surround-item" data-index="2" data-text="学校">
                                        <i class="iconfont">확</i>
                                        <span class="surround-text">学校</span>
                                    </li>
                                    <li class="surround-item" data-index="3" data-text="医院">
                                        <i class="iconfont">홗</i>
                                        <span class="surround-text">医院</span>
                                    </li>
                                    <li class="surround-item" data-index="4" data-text="银行">
                                        <i class="iconfont">환</i>
                                        <span class="surround-text">银行</span>
                                    </li>
                                    <li class="surround-item last active" data-index="-1" data-text="无">
                                        <span class="surround-text">无</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="mod-head-map unselectable">
                        <div class="mod-head-leftwrp clearfix">
                            <div class="mod-search-wrap">

                                <form method="get" class="mod-search">
                                    <div class="search">
                                        <label for="kw" class="kw-wrap">
                                            <div class="form-kw">
                                                <input name="kw" placeholder="请输入小区名称或地址" maxlength="50"
                                                       autocomplete="off" type="text">
                                                <i class="iconfont search-close" title="清除内容"
                                                   style="display: none;"></i>
                                            </div>
                                        </label>
                                        <button class="form-btn" type="button">
                                            <i class="iconfont search-font if-message"></i>
                                        </button>
                                    </div>
                                    <p class="hint-wrap" style="display: none;"></p>
                                    <input name="t" value="1" type="hidden">
                                </form>

                            </div>
                            <div class="mod-find-area_line">
                                <span class="mod-find-al-text need-cut">区域</span>
                                <em class="iconfont if-arrow-down"></em>
                                <ul class="mod-find-al-ul">
                                    <span class="arrow-top arrow-top-zero"></span>
                                    <li class="mod-find-area active" id="find-area">
                                        <div class="mod-find single">
                                            <!-- <span class="arrow-top"></span> -->
                                            <div class="find-first">
                                                <div class="list-content mod-border-box">
                                                    <div class="scrollbar" style="height: 368px;">
                                                        <div class="track" style="height: 368px;">
                                                            <div class="thumb"
                                                                 style="top: 0px; height: 347.241px;"></div>
                                                        </div>
                                                    </div>
                                                    <div class="viewport">
                                                        <div class="overview list-wrap" style="top: 0px;">
                                                            <ul class="find-list">
                                                                <li class="list-item" data-id="all">全部</li>
                                                                <li class="list-item" data-id="40001" data-gid="140001"
                                                                    data-g="1" data-lon="113.280019"
                                                                    data-lat="23.166699" data-name="白云"
                                                                    data-lv="1">白云
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="40002" data-gid="140002"
                                                                    data-g="1" data-lon="113.246768"
                                                                    data-lat="23.131438" data-name="荔湾"
                                                                    data-lv="1">荔湾
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="40003" data-gid="140003"
                                                                    data-g="1" data-lon="113.275713"
                                                                    data-lat="23.135127" data-name="越秀"
                                                                    data-lv="1">越秀
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="40004" data-gid="140004"
                                                                    data-g="1" data-lon="113.324571"
                                                                    data-lat="23.090472" data-name="海珠"
                                                                    data-lv="1">海珠
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="40005" data-gid="140005"
                                                                    data-g="1" data-lon="113.368714"
                                                                    data-lat="23.130779" data-name="天河"
                                                                    data-lv="1">天河
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="40006" data-gid="140006"
                                                                    data-g="1" data-lon="113.324053"
                                                                    data-lat="23.029258" data-name="番禺"
                                                                    data-lv="1">番禺
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="61143" data-gid="161143"
                                                                    data-g="1" data-lon="113.128501"
                                                                    data-lat="23.336447" data-name="花都"
                                                                    data-lv="1">花都
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="62757" data-gid="162757"
                                                                    data-g="1" data-lon="113.487048"
                                                                    data-lat="23.188515" data-name="黄埔"
                                                                    data-lv="1">黄埔
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="69715" data-gid="169715"
                                                                    data-g="1" data-lon="113.531696"
                                                                    data-lat="22.808359" data-name="南沙"
                                                                    data-lv="1">南沙
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="69588" data-gid="169588"
                                                                    data-g="1" data-lon="113.609049"
                                                                    data-lat="23.125225" data-name="增城"
                                                                    data-lv="1">增城
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="69603" data-gid="169603"
                                                                    data-g="1" data-lon="113.593361"
                                                                    data-lat="23.555026" data-name="从化"
                                                                    data-lv="1">从化
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="139630"
                                                                    data-gid="1139630" data-g="1" data-lon="113.128358"
                                                                    data-lat="23.027723" data-name="周边"
                                                                    data-lv="1">周边
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="find-second" style="display: none;">
                                                <div class="list-content mod-border-box">
                                                    <div class="scrollbar disable" style="height: 0px;">
                                                        <div class="track" style="height: 0px;">
                                                            <div class="thumb"></div>
                                                        </div>
                                                    </div>
                                                    <div class="viewport">
                                                        <div class="overview list-wrap" style="top: 0px;">
                                                            <ul class="find-list  area-list ">
                                                                <li class="all">
                                                                    <i class=" find-point" data-id="all"
                                                                       data-pid="40001">全部</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">B</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40025" data-cname="白云新城"
                                                                       data-lon="113.27403" data-lat="23.2014">白云新城</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40027" data-cname="白云大道南"
                                                                       data-lon="113.274654"
                                                                       data-lat="23.174987">白云大道南</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">G</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40028" data-cname="广园"
                                                                       data-lon="113.272911" data-lat="23.169173">广园</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40029" data-cname="桂花岗"
                                                                       data-lon="113.273123"
                                                                       data-lat="23.157157">桂花岗</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">H</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40024" data-cname="黄石"
                                                                       data-lon="113.291344" data-lat="23.217895">黄石</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">J</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40034" data-cname="金沙洲"
                                                                       data-lon="113.21344" data-lat="23.162696">金沙洲</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40036" data-cname="机场路"
                                                                       data-lon="113.265043"
                                                                       data-lat="23.178064">机场路</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="70692" data-cname="江高"
                                                                       data-lon="113.269893" data-lat="23.253595">江高</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">L</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40033" data-cname="罗冲围"
                                                                       data-lon="113.228805"
                                                                       data-lat="23.160214">罗冲围</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="70705" data-cname="良田"
                                                                       data-lon="113.457684" data-lat="23.336004">良田</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="70709" data-cname="龙归"
                                                                       data-lon="113.332298" data-lat="23.279616">龙归</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">N</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="70711" data-cname="南湖"
                                                                       data-lon="113.344255" data-lat="23.223446">南湖</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="130558" data-cname="南湖西"
                                                                       data-lon="113.299716"
                                                                       data-lat="23.238842">南湖西</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">R</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="70693" data-cname="人和"
                                                                       data-lon="113.299103" data-lat="23.343576">人和</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">S</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40020" data-cname="石井"
                                                                       data-lon="113.243065" data-lat="23.207071">石井</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40030" data-cname="三元里"
                                                                       data-lon="113.267104"
                                                                       data-lat="23.159122">三元里</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40038" data-cname="沙太北"
                                                                       data-lon="113.334761" data-lat="23.19995">沙太北</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">T</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40022" data-cname="同德围"
                                                                       data-lon="113.246523"
                                                                       data-lat="23.184098">同德围</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40037" data-cname="同德"
                                                                       data-lon="113.242662" data-lat="23.164832">同德</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="70708" data-cname="太和"
                                                                       data-lon="113.367477" data-lat="23.300999">太和</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">W</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40031" data-cname="王圣堂"
                                                                       data-lon="113.251159"
                                                                       data-lat="23.161879">王圣堂</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">X</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40021" data-cname="西槎"
                                                                       data-lon="113.238" data-lat="23.187523">西槎</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40023" data-cname="新市"
                                                                       data-lon="113.263763" data-lat="23.199252">新市</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40026" data-cname="新体育馆"
                                                                       data-lon="113.28273"
                                                                       data-lat="23.189869">新体育馆</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">Y</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40035" data-cname="瑶台"
                                                                       data-lon="113.255669" data-lat="23.172554">瑶台</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40063" data-cname="云台花园"
                                                                       data-lon="113.303621"
                                                                       data-lat="23.161241">云台花园</i>
                                                                </li>
                                                                <li>
                                                                    <span class="letter">Z</span>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="40032" data-cname="增埗"
                                                                       data-lon="113.245149" data-lat="23.151174">增埗</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="70694" data-cname="钟落潭"
                                                                       data-lon="113.409689"
                                                                       data-lat="23.387724">钟落潭</i>
                                                                    <i class="find-point " data-id="40001"
                                                                       data-gid="240001" data-stitle="0" data-name="白云"
                                                                       data-cid="70697" data-cname="竹料"
                                                                       data-lon="113.359847" data-lat="23.371737">竹料</i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 class="P-area-title need-cut">
                                            <span>区域</span>
                                        </h4>
                                    </li>
                                    <li class="mod-find-subway" id="find-subway">
                                        <div class="mod-find single">
                                            <!-- <span class="arrow-top"></span> -->
                                            <div class="find-first">
                                                <div class="list-content mod-border-box">
                                                    <div class="scrollbar disable" style="height: 0px;">
                                                        <div class="track" style="height: 0px;">
                                                            <div class="thumb" style="top: 0px; height: 368px;"></div>
                                                        </div>
                                                    </div>
                                                    <div class="viewport">
                                                        <div class="overview list-wrap" style="top: 0px;">
                                                            <ul class="find-list">
                                                                <li class="list-item" data-id="all">全部</li>
                                                                <li class="list-item" data-id="271" data-gid="4271"
                                                                    data-g="4" data-name="1号线">1号线
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="272" data-gid="4272"
                                                                    data-g="4" data-name="2号线">2号线
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="273" data-gid="4273"
                                                                    data-g="4" data-name="3号线">3号线
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="275" data-gid="4275"
                                                                    data-g="4" data-name="4号线">4号线
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="276" data-gid="4276"
                                                                    data-g="4" data-name="5号线">5号线
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="270" data-gid="4270"
                                                                    data-g="4" data-name="6号线">6号线
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="278" data-gid="4278"
                                                                    data-g="4" data-name="8号线">8号线
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="279" data-gid="4279"
                                                                    data-g="4" data-name="广佛线">广佛线
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                                <li class="list-item" data-id="283" data-gid="4283"
                                                                    data-g="4" data-name="apm线">apm线
                                                                    <span class="arrow-top"></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="find-second" style="display: none;">
                                                <div class="list-content mod-border-box">
                                                    <div class="scrollbar disable" style="height: 0px;">
                                                        <div class="track" style="height: 0px;">
                                                            <div class="thumb"
                                                                 style="top: 0px; height: 180.565px;"></div>
                                                        </div>
                                                    </div>
                                                    <div class="viewport">
                                                        <div class="overview list-wrap" style="top: 0px;">
                                                            <ul class="find-list  line-list ">
                                                                <li class="all">
                                                                    <i class=" find-point" data-id="all" data-pid="272">全部</i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2162" data-cname="广州南站"
                                                                       data-lon="113.276935" data-lat="22.995444">
                                                                        广州南站
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2163" data-cname="石壁"
                                                                       data-lon="113.284718" data-lat="23.000368">
                                                                        石壁
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2164" data-cname="会江"
                                                                       data-lon="113.292953" data-lat="23.019116">
                                                                        会江
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2165" data-cname="南浦"
                                                                       data-lon="113.299986" data-lat="23.040016">
                                                                        南浦
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2166" data-cname="洛溪"
                                                                       data-lon="113.305213" data-lat="23.049312">
                                                                        洛溪
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2167" data-cname="南洲"
                                                                       data-lon="113.304367" data-lat="23.069927">
                                                                        南洲
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2168" data-cname="东晓南"
                                                                       data-lon="113.30085" data-lat="23.077434">
                                                                        东晓南
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2169" data-cname="江泰路"
                                                                       data-lon="113.287004" data-lat="23.088395">
                                                                        江泰路
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2170" data-cname="昌岗"
                                                                       data-lon="113.283304" data-lat="23.096953">
                                                                        昌岗
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2171" data-cname="江南西"
                                                                       data-lon="113.28034" data-lat="23.103578">
                                                                        江南西
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2172" data-cname="市二宫"
                                                                       data-lon="113.276273" data-lat="23.112226">
                                                                        市二宫
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2173" data-cname="海珠广场"
                                                                       data-lon="113.272013" data-lat="23.120701">
                                                                        海珠广场
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2174" data-cname="公园前"
                                                                       data-lon="113.270642" data-lat="23.131645">
                                                                        公园前
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2175" data-cname="纪念堂"
                                                                       data-lon="113.26981" data-lat="23.138256">
                                                                        纪念堂
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2176" data-cname="越秀公园"
                                                                       data-lon="113.267746" data-lat="23.146386">
                                                                        越秀公园
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2177" data-cname="广州火车站"
                                                                       data-lon="113.262848" data-lat="23.153561">
                                                                        广州火车站
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2178" data-cname="三元里"
                                                                       data-lon="113.263705" data-lat="23.165353">
                                                                        三元里
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2179" data-cname="飞翔公园"
                                                                       data-lon="113.270096" data-lat="23.17509">
                                                                        飞翔公园
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2180" data-cname="白云公园"
                                                                       data-lon="113.277335" data-lat="23.18798">
                                                                        白云公园
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2181" data-cname="白云文化广场"
                                                                       data-lon="113.282019" data-lat="23.196198">
                                                                        白云文化广场
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2182" data-cname="萧岗"
                                                                       data-lon="113.28681" data-lat="23.204681">
                                                                        萧岗
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2183" data-cname="江夏"
                                                                       data-lon="113.289643" data-lat="23.217573">
                                                                        江夏
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2184" data-cname="黄边"
                                                                       data-lon="113.29371" data-lat="23.228138">
                                                                        黄边
                                                                    </i>
                                                                </li>
                                                                <li>
                                                                    <i class="find-point " data-id="272" data-gid="5272"
                                                                       data-stitle="1" data-g="5" data-name="2号线"
                                                                       data-cid="2185" data-cname="嘉禾望岗"
                                                                       data-lon="113.295105" data-lat="23.243797">
                                                                        嘉禾望岗
                                                                    </i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 class="P-line-title need-cut">
                                            <span>地铁</span>
                                        </h4>
                                    </li>
                                </ul>
                            </div>
                            <div class="mod-filter">
                                <div class="ui-filter" data-ht="1" data-reactid=".0">
                                    <div class="filter-select filter-single ft-ip" data-alias="ip"
                                         data-reactid=".0.0:$0">
                                        <div class="filter-in" data-reactid=".0.0:$0.0">
                                            <ul class="filter-opts hide filter-opts-width" data-reactid=".0.0:$0.0.$0">
                                                <div data-value="-1" data-txt="全部" class="filter-item   select-item    "
                                                     data-reactid=".0.0:$0.0.$0.0:$0">
                                                    <span data-reactid=".0.0:$0.0.$0.0:$0.$1">全部</span>
                                                </div>
                                                <div data-value="-4" data-txt="1000元以下"
                                                     class="filter-item   select-item    "
                                                     data-reactid=".0.0:$0.0.$0.0:$1">
                                                    <span data-reactid=".0.0:$0.0.$0.0:$1.$1">1000元以下</span>
                                                </div>
                                                <div data-value="-5" data-txt="1000 - 2000元 "
                                                     class="filter-item   select-item    "
                                                     data-reactid=".0.0:$0.0.$0.0:$2">
                                                    <span data-reactid=".0.0:$0.0.$0.0:$2.$1">1000 - 2000元 </span>
                                                </div>
                                                <div data-value="2" data-txt="2000 - 3000元"
                                                     class="filter-item   select-item    "
                                                     data-reactid=".0.0:$0.0.$0.0:$3">
                                                    <span data-reactid=".0.0:$0.0.$0.0:$3.$1">2000 - 3000元</span>
                                                </div>
                                                <div data-value="3" data-txt="3000 - 4000元"
                                                     class="filter-item   select-item    "
                                                     data-reactid=".0.0:$0.0.$0.0:$4">
                                                    <span data-reactid=".0.0:$0.0.$0.0:$4.$1">3000 - 4000元</span>
                                                </div>
                                                <div data-value="4" data-txt="4000 - 5000元"
                                                     class="filter-item   select-item    "
                                                     data-reactid=".0.0:$0.0.$0.0:$5">
                                                    <span data-reactid=".0.0:$0.0.$0.0:$5.$1">4000 - 5000元</span>
                                                </div>
                                                <div data-value="5" data-txt="5000 - 7000元"
                                                     class="filter-item   select-item    "
                                                     data-reactid=".0.0:$0.0.$0.0:$6">
                                                    <span data-reactid=".0.0:$0.0.$0.0:$6.$1">5000 - 7000元</span>
                                                </div>
                                                <div data-value="6" data-txt="7000 - 10000元"
                                                     class="filter-item   select-item    "
                                                     data-reactid=".0.0:$0.0.$0.0:$7">
                                                    <span data-reactid=".0.0:$0.0.$0.0:$7.$1">7000 - 10000元</span>
                                                </div>
                                                <div data-value="7" data-txt="10000元以上"
                                                     class="filter-item   select-item    "
                                                     data-reactid=".0.0:$0.0.$0.0:$8">
                                                    <span data-reactid=".0.0:$0.0.$0.0:$8.$1">10000元以上</span>
                                                </div>
                                                <div class="filter-custom p-r clearfix ft-ip map-down-custom filter-item"
                                                     data-alias="ip" data-reactid=".0.0:$0.0.$0.$ip">
                                                    <ul data-reactid=".0.0:$0.0.$0.$ip.0">
                                                        <li class="filter-more-item-wrap"
                                                            data-reactid=".0.0:$0.0.$0.$ip.0.1">
                                                            <input maxlength="5" name="sp" class="custom-input" value=""
                                                                   data-reactid=".0.0:$0.0.$0.$ip.0.1.0" type="text">
                                                            <span class="input-delimiter"
                                                                  data-reactid=".0.0:$0.0.$0.$ip.0.1.1"></span>
                                                            <input maxlength="5" name="ep" class="custom-input" value=""
                                                                   data-reactid=".0.0:$0.0.$0.$ip.0.1.2" type="text">
                                                            <span class="imput-unit"
                                                                  data-reactid=".0.0:$0.0.$0.$ip.0.1.3">
                                                                    元</span>
                                                            <button class="custom-btn hide" type="button"
                                                                    data-reactid=".0.0:$0.0.$0.$ip.0.1.4">确定
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </ul>
                                            <dl class="filter-dl" data-reactid=".0.0:$0.0.$1">
                                                <dt data-txt="租金" class="filter-dt" data-reactid=".0.0:$0.0.$1.$0">租金
                                                </dt>
                                                <dd class="filter-num" data-reactid=".0.0:$0.0.$1.$1"></dd>
                                                <dd class="filter-icon" data-reactid=".0.0:$0.0.$1.$2">
                                                    <i class="iconfont if-arrow-down"
                                                       data-reactid=".0.0:$0.0.$1.$2.0"></i>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="filter-select filter-multi ft-rn" data-alias="rn"
                                         data-reactid=".0.0:$1">
                                        <div class="filter-in" data-reactid=".0.0:$1.0">
                                            <ul class="filter-opts hide filter-opts-width" data-reactid=".0.0:$1.0.$0">
                                                <div data-value="1" data-txt="一室"
                                                     class="filter-item   checkbox-item    "
                                                     data-reactid=".0.0:$1.0.$0.0:$0">
                                                    <i class="iconfont  if-box" data-reactid=".0.0:$1.0.$0.0:$0.0"></i>
                                                    <span data-reactid=".0.0:$1.0.$0.0:$0.$1">一室</span>
                                                </div>
                                                <div data-value="2" data-txt="二室"
                                                     class="filter-item   checkbox-item    "
                                                     data-reactid=".0.0:$1.0.$0.0:$1">
                                                    <i class="iconfont  if-box" data-reactid=".0.0:$1.0.$0.0:$1.0"></i>
                                                    <span data-reactid=".0.0:$1.0.$0.0:$1.$1">二室</span>
                                                </div>
                                                <div data-value="3" data-txt="三室"
                                                     class="filter-item   checkbox-item    "
                                                     data-reactid=".0.0:$1.0.$0.0:$2">
                                                    <i class="iconfont  if-box" data-reactid=".0.0:$1.0.$0.0:$2.0"></i>
                                                    <span data-reactid=".0.0:$1.0.$0.0:$2.$1">三室</span>
                                                </div>
                                                <div data-value="4" data-txt="四室"
                                                     class="filter-item   checkbox-item    "
                                                     data-reactid=".0.0:$1.0.$0.0:$3">
                                                    <i class="iconfont  if-box" data-reactid=".0.0:$1.0.$0.0:$3.0"></i>
                                                    <span data-reactid=".0.0:$1.0.$0.0:$3.$1">四室</span>
                                                </div>
                                                <div data-value="5" data-txt="四室以上"
                                                     class="filter-item   checkbox-item    "
                                                     data-reactid=".0.0:$1.0.$0.0:$4">
                                                    <i class="iconfont  if-box" data-reactid=".0.0:$1.0.$0.0:$4.0"></i>
                                                    <span data-reactid=".0.0:$1.0.$0.0:$4.$1">四室以上</span>
                                                </div>
                                            </ul>
                                            <dl class="filter-dl" data-reactid=".0.0:$1.0.$1">
                                                <dt data-txt="户型" class="filter-dt" data-reactid=".0.0:$1.0.$1.$0">户型
                                                </dt>
                                                <dd class="filter-num" data-reactid=".0.0:$1.0.$1.$1"></dd>
                                                <dd class="filter-icon" data-reactid=".0.0:$1.0.$1.$2">
                                                    <i class="iconfont if-arrow-down"
                                                       data-reactid=".0.0:$1.0.$1.$2.0"></i>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="filter-select filter-multi ft-dt" data-alias="dt"
                                         data-reactid=".0.0:$2">
                                        <div class="filter-in" data-reactid=".0.0:$2.0">
                                            <ul class="filter-opts hide" data-reactid=".0.0:$2.0.$0">
                                                <div data-value="1" data-txt="毛坯"
                                                     class="filter-item   checkbox-item    "
                                                     data-reactid=".0.0:$2.0.$0.0:$0">
                                                    <i class="iconfont  if-box" data-reactid=".0.0:$2.0.$0.0:$0.0"></i>
                                                    <span data-reactid=".0.0:$2.0.$0.0:$0.$1">毛坯</span>
                                                </div>
                                                <div data-value="3" data-txt="简装"
                                                     class="filter-item   checkbox-item    "
                                                     data-reactid=".0.0:$2.0.$0.0:$1">
                                                    <i class="iconfont  if-box" data-reactid=".0.0:$2.0.$0.0:$1.0"></i>
                                                    <span data-reactid=".0.0:$2.0.$0.0:$1.$1">简装</span>
                                                </div>
                                                <div data-value="4" data-txt="精装"
                                                     class="filter-item   checkbox-item    "
                                                     data-reactid=".0.0:$2.0.$0.0:$2">
                                                    <i class="iconfont  if-box" data-reactid=".0.0:$2.0.$0.0:$2.0"></i>
                                                    <span data-reactid=".0.0:$2.0.$0.0:$2.$1">精装</span>
                                                </div>
                                                <div data-value="5" data-txt="豪装"
                                                     class="filter-item   checkbox-item    "
                                                     data-reactid=".0.0:$2.0.$0.0:$3">
                                                    <i class="iconfont  if-box" data-reactid=".0.0:$2.0.$0.0:$3.0"></i>
                                                    <span data-reactid=".0.0:$2.0.$0.0:$3.$1">豪装</span>
                                                </div>
                                            </ul>
                                            <dl class="filter-dl" data-reactid=".0.0:$2.0.$1">
                                                <dt data-txt="装修" class="filter-dt" data-reactid=".0.0:$2.0.$1.$0">装修
                                                </dt>
                                                <dd class="filter-num" data-reactid=".0.0:$2.0.$1.$1"></dd>
                                                <dd class="filter-icon" data-reactid=".0.0:$2.0.$1.$2">
                                                    <i class="iconfont if-arrow-down"
                                                       data-reactid=".0.0:$2.0.$1.$2.0"></i>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="filter-select filter-more ft-more" data-alias="more"
                                         data-reactid=".0.0:$3">
                                        <div class="filter-in" data-reactid=".0.0:$3.0">
                                            <div class="filter-opts  hide" data-reactid=".0.0:$3.0.$0">
                                                <ul class="p-r clearfix filter-multi ft-ht" data-alias="ht"
                                                    data-reactid=".0.0:$3.0.$0.1:$0">
                                                    <li class="filter-more-label" data-reactid=".0.0:$3.0.$0.1:$0.$1">
                                                        类型:
                                                    </li>
                                                    <li class="filter-more-item-wrap"
                                                        data-reactid=".0.0:$3.0.$0.1:$0.$2">
                                                        <div data-value="1" data-txt="普通租房"
                                                             class="filter-item   checkbox-item    "
                                                             data-reactid=".0.0:$3.0.$0.1:$0.$2.$0">
                                                            <i class="iconfont  if-box"
                                                               data-reactid=".0.0:$3.0.$0.1:$0.$2.$0.0"></i>
                                                            <span data-reactid=".0.0:$3.0.$0.1:$0.$2.$0.$1">普通租房</span>
                                                        </div>
                                                        <div data-value="4" data-txt="品牌公寓"
                                                             class="filter-item   checkbox-item    "
                                                             data-reactid=".0.0:$3.0.$0.1:$0.$2.$1">
                                                            <i class="iconfont  if-box"
                                                               data-reactid=".0.0:$3.0.$0.1:$0.$2.$1.0"></i>
                                                            <span data-reactid=".0.0:$3.0.$0.1:$0.$2.$1.$1">品牌公寓</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul class="p-r clearfix filter-multi ft-rt" data-alias="rt"
                                                    data-reactid=".0.0:$3.0.$0.1:$1">
                                                    <li class="filter-more-label" data-reactid=".0.0:$3.0.$0.1:$1.$1">
                                                        方式:
                                                    </li>
                                                    <li class="filter-more-item-wrap"
                                                        data-reactid=".0.0:$3.0.$0.1:$1.$2">
                                                        <div data-value="0" data-txt="整租"
                                                             class="filter-item   checkbox-item    "
                                                             data-reactid=".0.0:$3.0.$0.1:$1.$2.$0">
                                                            <i class="iconfont  if-box"
                                                               data-reactid=".0.0:$3.0.$0.1:$1.$2.$0.0"></i>
                                                            <span data-reactid=".0.0:$3.0.$0.1:$1.$2.$0.$1">整租</span>
                                                        </div>
                                                        <div data-value="1" data-txt="合租"
                                                             class="filter-item   checkbox-item    "
                                                             data-reactid=".0.0:$3.0.$0.1:$1.$2.$1">
                                                            <i class="iconfont  if-box"
                                                               data-reactid=".0.0:$3.0.$0.1:$1.$2.$1.0"></i>
                                                            <span data-reactid=".0.0:$3.0.$0.1:$1.$2.$1.$1">合租</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul class="p-r clearfix filter-multi ft-fl" data-alias="fl"
                                                    data-reactid=".0.0:$3.0.$0.1:$2">
                                                    <li class="filter-more-label" data-reactid=".0.0:$3.0.$0.1:$2.$1">
                                                        楼层:
                                                    </li>
                                                    <li class="filter-more-item-wrap"
                                                        data-reactid=".0.0:$3.0.$0.1:$2.$2">
                                                        <div data-value="1" data-txt="低层"
                                                             class="filter-item   checkbox-item    "
                                                             data-reactid=".0.0:$3.0.$0.1:$2.$2.$0">
                                                            <i class="iconfont  if-box"
                                                               data-reactid=".0.0:$3.0.$0.1:$2.$2.$0.0"></i>
                                                            <span data-reactid=".0.0:$3.0.$0.1:$2.$2.$0.$1">低层</span>
                                                        </div>
                                                        <div data-value="2" data-txt="中层"
                                                             class="filter-item   checkbox-item    "
                                                             data-reactid=".0.0:$3.0.$0.1:$2.$2.$1">
                                                            <i class="iconfont  if-box"
                                                               data-reactid=".0.0:$3.0.$0.1:$2.$2.$1.0"></i>
                                                            <span data-reactid=".0.0:$3.0.$0.1:$2.$2.$1.$1">中层</span>
                                                        </div>
                                                        <div data-value="3" data-txt="高层"
                                                             class="filter-item   checkbox-item    "
                                                             data-reactid=".0.0:$3.0.$0.1:$2.$2.$2">
                                                            <i class="iconfont  if-box"
                                                               data-reactid=".0.0:$3.0.$0.1:$2.$2.$2.0"></i>
                                                            <span data-reactid=".0.0:$3.0.$0.1:$2.$2.$2.$1">高层</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul class="p-r clearfix filter-multi ft-fe" data-alias="fe"
                                                    data-reactid=".0.0:$3.0.$0.1:$3">
                                                    <li class="filter-more-label" data-reactid=".0.0:$3.0.$0.1:$3.$1">
                                                        特色:
                                                    </li>
                                                    <li class="filter-more-item-wrap"
                                                        data-reactid=".0.0:$3.0.$0.1:$3.$2">
                                                        <div data-value="4" data-txt="电梯房"
                                                             class="filter-item   checkbox-item    "
                                                             data-reactid=".0.0:$3.0.$0.1:$3.$2.$0">
                                                            <i class="iconfont  if-box"
                                                               data-reactid=".0.0:$3.0.$0.1:$3.$2.$0.0"></i>
                                                            <span data-reactid=".0.0:$3.0.$0.1:$3.$2.$0.$1">电梯房</span>
                                                        </div>
                                                        <div data-value="5" data-txt="地铁房"
                                                             class="filter-item   checkbox-item   filter-subway  "
                                                             data-reactid=".0.0:$3.0.$0.1:$3.$2.$1">
                                                            <i class="iconfont  if-box"
                                                               data-reactid=".0.0:$3.0.$0.1:$3.$2.$1.0"></i>
                                                            <span data-reactid=".0.0:$3.0.$0.1:$3.$2.$1.$1">地铁房</span>
                                                        </div>
                                                        <div data-value="6" data-txt="集中式公寓"
                                                             class="filter-item   checkbox-item    "
                                                             data-reactid=".0.0:$3.0.$0.1:$3.$2.$2">
                                                            <i class="iconfont  if-box"
                                                               data-reactid=".0.0:$3.0.$0.1:$3.$2.$2.0"></i>
                                                            <span data-reactid=".0.0:$3.0.$0.1:$3.$2.$2.$1">集中式公寓</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <dl class="filter-dl" data-reactid=".0.0:$3.0.$1">
                                                <dt data-txt="更多" class="filter-dt" data-reactid=".0.0:$3.0.$1.$0">更多
                                                </dt>
                                                <dd class="filter-num" data-reactid=".0.0:$3.0.$1.$1"></dd>
                                                <dd class="filter-icon" data-reactid=".0.0:$3.0.$1.$2">
                                                    <i class="iconfont if-arrow-down"
                                                       data-reactid=".0.0:$3.0.$1.$2.0"></i>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mod-filter-clear">
                                <div class="btn-clear-filter">清空</div>
                            </div>
                            <!-- <div class="mod-find-subway" id="find-subway"></div> --></div>
                        <div class="mod-switch" style="z-index: 0;">
                            <a target="_blank" class="switch-a" href="/chuzu/guangzhou/g2id40036/">
                                <!--<em class="iconfont if-map-list"></em>-->
                                列表模式
                            </a>
                        </div>
                        <div class="mod-head-map-bg"></div>
                    </div>
                </div>
            </div>
            <div class="load-tip hide">
                <i class="load-img">
                    <img src="//resource.iwjw.com/iwjw-pc/loading_2eYVMzz.svg" fill="#fff">
                </i>
                <span style="text-align:center">房源加载中</span>
            </div>
        </div>

    </div>
</div>


</body>

<script>


    // 创建地图实例,并设置最大/小级别
    var indexmap = new BMap.Map("container", {
        //minZoom 表示可以缩小的级别,maxZoom表示可以放大的级别
        minZoom: 12,
        //关闭默认的POI事件
        enableMapClick: false
    });

    //根据IP定位到城市
    var localCity = new BMap.LocalCity();
    localCity.get(function (result) {
        var cityName = result.name;
        console.log("现位于 ::: " + cityName);
        //设置地图中心点
        indexmap.setCenter(cityName);
    });

    $.getJSON("../statics/json/obj.js", function (result) {
        var obj = result.obj;
        console.log(obj);
        var point = new BMap.Point(obj.firstJson.data.lon, obj.firstJson.data.lat); // 创建点坐标
        //创建比例尺
        var tontrol = new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            offset: {
                width: 18,
                height: 20
            }
        });
        indexmap.addControl(tontrol); //添加控制器
        indexmap.centerAndZoom(point, 12); //设置中心点和缩放级别
        indexmap.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        var zb = ""; //周边的行政区域名称
        obj.json.data.markList.forEach(element => {
            obj.json2.data.markList.forEach(element1 => {
                if (element.name == "周边") {
                    if (element.id == element1.parentId) {
                        zb = element1.name;
                    }
                }
            });
            var point1 = new BMap.Point(element.lon, element.lat);
            //创建覆盖物对象，参数1 为经纬度，2 为文本，3 为鼠标移上去的样式
            var myCompOverlay = new ComplexCustomOverlay(point1, element.name, element.houseNum + "套", getBoundary(
                obj.firstJson.data.province.text + element.name), obj);
            //将覆盖物添加到地图
            indexmap.addOverlay(myCompOverlay);
        });

        //监听鼠标滚轮缩放事件
        indexmap.onzoomend = function (type, target) {
            var key = indexmap.getZoom();
            console.log(key);
            switch (key) {
                case 12:
                    indexmap.clearOverlays();
                    console.log("1级点");
                    var zb = ""; //周边的行政区域名称
                    obj.json.data.markList.forEach(element => {
                        obj.json2.data.markList.forEach(element1 => {
                            if (element.name == "周边") {
                                if (element.id == element1.parentId) {
                                    zb = element1.name;
                                }
                            }
                        });
                        var point1 = new BMap.Point(element.lon, element.lat);
                        //创建覆盖物对象，参数1 为经纬度，2 为文本，3 为鼠标移上去的样式
                        var myCompOverlay = new ComplexCustomOverlay(point1, element.name, element.houseNum +
                            "套", getBoundary(
                            obj.firstJson.data.province.text + element.name), obj);
                        //将覆盖物添加到地图
                        indexmap.addOverlay(myCompOverlay);
                    });
                    break;
                case 14:
                    indexmap.clearOverlays();
                    console.log("2级点");
                    // $.getScript('../baiduMap/mView/zoom1.js').done(function () {
                    obj.json3.data.markList.forEach(element => {
                        var point1 = new BMap.Point(element.lon, element.lat);
                        //创建覆盖物对象，参数1 为经纬度，2 为文本，3 为鼠标移上去的样式
                        var myCompOverlays = new ComplexCustomOverlay_small(point1, element.name,
                            element.houseNum + "套", null, obj);
                        // console.log(obj.firstJson.data.province.text+ that._text  + element.name);
                        //将覆盖物添加到地图
                        indexmap.addOverlay(myCompOverlays);
                    });

                    // }).fail(function (jqxhr, settings, exception) {
                    //     // console.log("======error========"+jqxhr+" : "+settings+" : "+exception);
                    // });
                    break;
                case 16:
                    indexmap.clearOverlays();
                    console.log("3级点");
                    // $.getScript('../baiduMap/mView/zoom2.js').done(function () {
                    var i = 0;
                    obj.json4.data.markList.forEach(element => {
                        i++;
                        if (i == 50) {
                            return;
                        }
                        var point1 = new BMap.Point(element.lon, element.lat);
                        //创建覆盖物对象，参数1 为经纬度，2 为文本，3 为鼠标移上去的样式
                        var myCompOverlays1 = new ComplexCustomOverlay_s_small(point1, element.name,
                            element.houseNum + "套");
                        // console.log(obj.firstJson.data.province.text + that._text + element.name);
                        // //将覆盖物添加到地图
                        indexmap.addOverlay(myCompOverlays1);
                    });

                    // }).fail(function (jqxhr, settings, exception) {
                    //     // console.log("======error========"+jqxhr+" : "+settings+" : "+exception);
                    // });
                    break;

                // default:
                // break;
            }
        }

        //获取行政区域
        function getBoundary(name) {
            var bd = new BMap.Boundary();
            var plyarr = [];
            //如果是周边，就使用周边的行政区域名
            if (name == obj.firstJson.data.province.text + "周边") {
                name = zb;
            }
            bd.get(name, function (rs) { //获取行政区域
                var count = rs.boundaries.length; //行政区域的点有多少个
                if (count === 0) {
                    console.log('未能获取当前输入行政区域');
                    return;
                }
                for (var i = 0; i < count; i++) {
                    var ply = new BMap.Polygon(rs.boundaries[i], {
                        strokeWeight: 2,
                        strokeColor: "#ff0000"
                    }); //建立多边形覆盖物
                    indexmap.addOverlay(ply); //添加覆盖物
                    ply.setFillColor(""); //设置多边形覆盖物填充颜色，空字符串表示没有填充
                    ply.hide();
                    plyarr[i] = ply;
                }
            });
            return plyarr;
        }
    });


</script>

</html>