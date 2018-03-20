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

var url = "../../statics/json/obj.js";

$.getJSON(url, function (result) {
    var obj = result.obj;
    console.log(obj);
    //城市名
    $(".attr-name").text(obj.firstJson.data.province.text);
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
    let zb = ""; //周边的行政区域名称
    let areaSize = 0, houseTotalNum = 0;
    obj.json.data.markList.forEach(element => {
        obj.json2.data.markList.forEach(element1 => {
            if (element.name == "周边") {
                if (element.id == element1.parentId) {
                    zb = element1.name;
                }
            }
        });
        areaSize++;
        houseTotalNum += parseInt(element.houseNum);
        var point1 = new BMap.Point(element.lon, element.lat);
        //创建覆盖物对象，参数1 为经纬度，2 为文本，3 为鼠标移上去的样式
        var myCompOverlay = new ComplexCustomOverlay(point1, element.name, element.houseNum + "套", getBoundary(
            obj.firstJson.data.province.text + element.name), 2, function () {
            console.log("点击1----")
        });
        //将覆盖物添加到地图
        indexmap.addOverlay(myCompOverlay);
        $(".list-estate").append('<li class="list-item-wrap" data-id="40001" data-index="0" data-g="1"><i class="item-name need-cut">' + element.name + '</i><div class="t-r"><i class="item-total"><i class="total-num">' + element.houseNum + '</i>套</i><em class="fas fa-angle-right iconfont"></em></div></li>');
    });
    //设置总套数和行政区个数
    const listSum = $(".list-summary");
    listSum.children("b").text(areaSize);
    listSum.children(".find-num").text(houseTotalNum);
    //监听鼠标滚轮缩放事件
    indexmap.onzoomend = function (type, target) {
        var key = indexmap.getZoom();
        //标识位
        indexmap.clearOverlays();
        console.log(key);
        if (key <= 13) {
            console.log("1级点");
            isShow = false;
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
                    obj.firstJson.data.province.text + element.name), 2, function () {
                    console.log("点击1----")
                });
                myCompOverlay.initialize(indexmap); //将地图实例传入
                //将覆盖物添加到地图
                indexmap.addOverlay(myCompOverlay);
            });
        } else if (key <= 15 && key > 13) {
            console.log("2级点");
            obj.json3.data.markList.forEach(element => {
                var point1 = new BMap.Point(element.lon, element.lat);
                //创建覆盖物对象，参数1 为经纬度，2 为文本，3 为鼠标移上去的样式
                var myCompOverlays = new ComplexCustomOverlay_small(point1, element.name,
                    element.houseNum + "套", 2, function () {
                        console.log("点击2----")
                    });
                // console.log(obj.firstJson.data.province.text+ that._text  + element.name);
                //将覆盖物添加到地图
                indexmap.addOverlay(myCompOverlays);
            });
        } else if (key >= 16) {
            console.log("3级点");
            var i = 0;
            obj.json4.data.markList.forEach(element => {
                // console.log("------");
                ++i;
                if (i == 50) {
                    return;
                }
                var point1 = new BMap.Point(element.lon, element.lat);
                //创建覆盖物对象，参数1 为经纬度，2 为文本，3 为鼠标移上去的样式
                var myCompOverlays1 = new ComplexCustomOverlay_s_small(point1, element.name,
                    element.houseNum + "套", 2, function () {
                        console.log("点击3----")
                    });
                // console.log(obj.firstJson.data.province.text + that._text + element.name);
                // //将覆盖物添加到地图
                indexmap.addOverlay(myCompOverlays1);
            });
        }

    }
    $(".list-estate").on("click", "li", function () {
        indexmap.zoomTo(indexmap.getZoom() + 3);
        obj.json.data.markList.forEach(element => {
            if (element.name === $(this).text()) {
                let p = new BMap.Point(element.lon, element.lat);
                indexmap.setCenter(p);
            }
        });
    });

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
//选择城市
$(".modal-body").on("click", ".city-item", function () {
    if (!($(this).hasClass("active"))) {
        $(".city-item").removeClass("active");
        $(this).addClass("active");
    }
});
var busline = new BMap.BusLineSearch(indexmap, {
    renderOptions: {map: indexmap},
    onGetBusListComplete: function (result) {
        if (result) {
            var fstLine = result.getBusListItem(0);//获取第一个公交列表显示到map上
            busline.getBusLine(fstLine);
        }
    }
});
//查询公交地铁线路
$(".surround-item").click(function () {
    searchBus("985");
});
function  searchBus(bn) {
    var busName = bn;
    busline.getBusList(busName);
}

//绑定清空输入框事件
$(".form-kw").on("input", "input", function () {
    // console.log($(this).val());
    $(".search-close").show();
    var val = $(this).val();

    if (val === "" || val === null) {
        $(".hint-wrap").hide();
        $(".search-close").hide();
    } else {
        //用户输入时从数据库模糊查询
        $.post("/map/search", "name=" + val, function (data) {
            var moddiv = $(".hint-wrap");
            var result = JSON.parse(data);
            console.log(result);
            if (result !== null && result.length !== 0) {
                moddiv.html("");
                result.forEach(element => {
                    var li = '<a class="hint-item" ><span class="txt-wrap"><span class="key-txt">' + element.community_name + '</span></span></a>';
                    moddiv.append(li);
                });
                moddiv.show();
            }
        });
    }
});
$(".search-close").click(function () {
    $(this).hide();
    $("#hint-wrap").hide();
    //清空搜索框并移出焦点
    $("input[name=kw]").val("").blur();
});

//绑定地图缩放按钮事件
$(".mod-zoom").on("click", ".zoom-btn", function () {
    switch (this.id) {
        case "bzoom":
            indexmap.zoomTo(indexmap.getZoom() + 2);
            break;
        case "szoom":
            indexmap.zoomTo(indexmap.getZoom() - 2);
            break;
    }
});
//message 事件
$("a").on("click", "#hint-item", function () {
    console.log(this);
    $("input[name=kw]").val($(".key-txt").val());
    $("#hint-wrap").hide();
});

window.onload = function () {
    //覆盖城市列表的hover样式
    $(".header-left .city").css({"border-bottom": "0"});
};

//header  点击事件
$(".header-left").on("click", ".nav-item", function () {
    if ($(this).hasClass("city")) {
        //......
    } else {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    }
});
//mod-header mouseover ，mouseout
var dd = $(".mod-find-area_line ,.filter-in");
dd.mouseover(function () {
    let thatc;
    let $this = $(this);
    if ($this.hasClass("filter-in")) {
        thatc = $this.children("dl").children("dd").children(".if-arrow-down");
    } else {
        thatc = $this.children(".if-arrow-down");
    }
    thatc.rotate({
        animateTo: 180, duration: 200, callback: function () {
            $this.children("ul").show();
        }
    });
});
dd.mouseout(function () {
    let thatc;
    let $this = $(this);
    if ($this.hasClass("filter-in")) {
        thatc = $this.children("dl").children("dd").children(".if-arrow-down");
    } else {
        thatc = $this.children(".if-arrow-down");
    }
    thatc.rotate({
        animateTo: 0, duration: 200, callback: function () {
            $this.children("ul").hide();
        }
    });
});
