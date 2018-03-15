// function ZoomControl() {
//     //设置默认停靠位置和偏移量
//     this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
//     this.defaultOffset = new BMap.Size(10, 10);
// }
// ZoomControl.prototype = new BMap.Control();
// ZoomControl.prototype.initialize =function(map){
//     //创建一个DOM元素
//     var div  = document.createElement("div");
//     //添加文字说明
//     div.appendChild(document.createTextNode("放大"));
//     //设置样式
//     div.style.cursor = "pointer";
//     div.style.border = "1px solid gray";
//     div.style.backgroundColor = "white";
//     //绑定事件，点击一次放大两级
//     div.onclick=function(e){
//         map.zoomTo(map.getZoom()+2);
//     }
//     //添加DOM元素到地图中
//     map.getContainer().appendChild(div);
//     //将DOM元素返回
//     return div;
// }


// 自定义覆盖物
function ComplexCustomOverlay(point, text, sub_text, boundary, obj) {
    this._point = point;
    this._text = text;
    this._sub_text = sub_text;
    this._boundary = boundary; //行政区域覆盖物集合
    this._obj = obj;
    // console.log(this._boundary );
}

ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.initialize = function (map) {
    this._map = map;
    var that = this;
    var div = this._div = document.createElement("div");
    div.style.position = "absolute";
    // div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    div.style.backgroundColor = "#6D77DB";
    // div.style.border = "1px solid #BC3B3A";
    div.style.borderRadius = "50%";
    div.style.color = "white";
    div.style.height = "80px";
    div.style.width = "80px";
    div.style.textAlign = "center";
    div.style.lineHeight = "80px";
    div.style.whiteSpace = "nowrap";
    div.style.MozUserSelect = "none";
    div.style.fontSize = "14px"

    var title = this._title = document.createElement("span");
    title.style.width = "81px";
    title.style.height = "20px";
    title.style.lineHeight = "60px";
    title.style.display = "block";
    div.appendChild(title);
    title.appendChild(document.createTextNode(this._text));

    var subTitle = this._subTitle = document.createElement("span");
    subTitle.style.width = "81px";
    subTitle.style.height = "20px";
    subTitle.style.lineHeight = "60px";
    subTitle.style.display = "block";
    subTitle.appendChild(document.createTextNode(this._sub_text));
    div.appendChild(subTitle);

    //鼠标事件
    div.onmouseover = function () {
        this.style.backgroundColor = "#e84a01";
        this.style.zIndex = 999; //最上层显示
        // this.style.borderColor = "#0000ff";
        // this.getElementsByTagName("p")[0].innerHTML = that._overText;
        // this.getElementsByTagName("p")[1].innerHTML = that._overText+"subTitle";
        that._boundary.forEach(element => {
            element.show();
        });
    }

    div.onmouseout = function () {
        this.style.backgroundColor = "#6D77DB";
        this.style.zIndex = 1;
        // this.style.borderColor = "#6D77DB";
        // this.getElementsByTagName("p")[0].innerHTML = that._text;
        // this.getElementsByTagName("p")[1].innerHTML = that._text+"subTitle";
        that._boundary.forEach(element => {
            element.hide();
        });
    }

    div.onclick = function () {
        map.zoomTo(map.getZoom() + 3);
        map.setCenter(that._point);
        map.clearOverlays();
        that.getJS();
    };
    this.getJS = function () {
        //通过jquery获取js
        // $.getScript('../baiduMap/mView/zoom1.js').done(function () {
        obj.json3.data.markList.forEach(element => {
            var point1 = new BMap.Point(element.lon, element.lat);
            //创建覆盖物对象，参数1 为经纬度，2 为文本，3 为鼠标移上去的样式
            var myCompOverlays = new ComplexCustomOverlay_small(point1, element.name, element.houseNum + "套", getBoundary(
                obj.firstJson.data.province.text + that._text + element.name), obj);
            // console.log(obj-bf.firstJson.data.province.text+ that._text  + element.name);
            //将覆盖物添加到地图
            map.addOverlay(myCompOverlays);
        });

        // }).fail(function (jqxhr, settings, exception) {
        //     // console.log("======error========"+jqxhr+" : "+settings+" : "+exception);
        // });
    }
    map.getPanes().labelPane.appendChild(div);
    return div;
}
//绘制覆盖物
ComplexCustomOverlay.prototype.draw = function () {
    var map = this._map;
    //覆盖物坐标
    var pixel = map.pointToOverlayPixel(this._point);
    //覆盖物偏移量
    this._div.style.left = pixel.x - 40 + "px";
    this._div.style.top = pixel.y - 40 + "px";
}




//=================================两级点===================================================

// 自定义覆盖物
function ComplexCustomOverlay_small(point, text, sub_text, boundary, obj) {
    this._point = point;
    this._text = text;
    this._sub_text = sub_text;
    this._boundary = boundary; //行政区域覆盖物集合
    this._obj = obj; //json
}

ComplexCustomOverlay_small.prototype = new BMap.Overlay();
ComplexCustomOverlay_small.prototype.initialize = function (map) {
    this._map = map;
    var that = this;
    var div = this._div = document.createElement("div");
    div.style.position = "absolute";
    div.style.color = "white";
    div.style.height = "80px";
    // div.style.width = "60px";
    div.style.textAlign = "center";
    div.style.lineHeight = "20px";
    div.style.whiteSpace = "nowrap";
    div.style.MozUserSelect = "none";
    div.style.fontSize = "14px";

    var title = this._title = document.createElement("span");
    title.style.display = "block";
    title.style.width = "60px";
    title.style.height = "60px";
    title.style.left = "0";
    title.style.top = "0";
    title.style.backgroundColor = "#6D77DB";
    title.style.position = "relative";
    title.style.borderRadius = "50%";
    title.style.lineHeight = "60px";
    title.appendChild(document.createTextNode(this._sub_text));
    div.appendChild(title);

    var subTitle = this._subTitle = document.createElement("span");
    subTitle.style.display = "block";
    // subTitle.style.width = "60px";
    subTitle.style.height = "20px";
    subTitle.style.left = "0";
    subTitle.style.top = "10px";
    subTitle.style.padding = "0px 3px";
    subTitle.style.backgroundColor = "#6D77DB";
    subTitle.style.position = "relative";
    subTitle.style.borderRadius = "2px";
    subTitle.style.lineHeight = "20px";
    subTitle.appendChild(document.createTextNode(this._text));
    div.appendChild(subTitle);




    //鼠标事件
    div.onmouseover = function () {
        this.childNodes.forEach(element => {
            element.style.backgroundColor = "#e84a01";
            element.style.zIndex = 999; //最上层显示
            // that._boundary.forEach(element => {
            //     element.show();
            // });
        });
    }

    div.onmouseout = function () {
        this.childNodes.forEach(element => {
            element.style.backgroundColor = "#6D77DB";
            element.style.zIndex = 1;
            // that._boundary.forEach(element => {
            //     element.hide();
            // });
        });
    }

    div.onclick = function () {
        map.zoomTo(map.getZoom() + 3);
        map.setCenter(that._point);
        map.clearOverlays();
        that.getJS();
    };
    this.getJS = function () {
        //通过jquery获取js
        // $.getScript('../baiduMap/mView/zoom2.js').done(function () {
        var i = 0;
        obj.json4.data.markList.forEach(element => {
            i++;
            if (i == 50) {
                return;
            }
            var point1 = new BMap.Point(element.lon, element.lat);
            //创建覆盖物对象，参数1 为经纬度，2 为文本，3 为鼠标移上去的样式
            var myCompOverlays1 = new ComplexCustomOverlay_s_small(point1, element.name, element.houseNum + "套");
            // console.log(obj-bf.firstJson.data.province.text + that._text + element.name);
            // //将覆盖物添加到地图
            map.addOverlay(myCompOverlays1);
        });

        // }).fail(function (jqxhr, settings, exception) {
        //     // console.log("======error========"+jqxhr+" : "+settings+" : "+exception);
        // });
    }
    map.getPanes().labelPane.appendChild(div);
    return div;
}
//绘制覆盖物
ComplexCustomOverlay_small.prototype.draw = function () {
    var map = this._map;
    //覆盖物坐标
    var pixel = map.pointToOverlayPixel(this._point);
    //覆盖物偏移量
    this._div.style.left = pixel.x - 40 + "px";
    this._div.style.top = pixel.y - 40 + "px";
}



//====================================三级点=========================================

// 自定义覆盖物
// function ComplexCustomOverlay_s_small(point, text, sub_text, boundary, obj-bf) {
function ComplexCustomOverlay_s_small(point, text, sub_text) {
    this._point = point;
    this._text = text;
    this._sub_text = sub_text;
    // this._boundary = boundary;
    // this._obj = obj-bf;
    // console.log(this._boundary );
}

ComplexCustomOverlay_s_small.prototype = new BMap.Overlay();
ComplexCustomOverlay_s_small.prototype.initialize = function (map) {
    this._map = map;
    var that = this;
    var div = this._div = document.createElement("div");
    div.style.position = "absolute";
    div.style.color = "white";
    div.style.height = "30px";
    // div.style.width = "60px";
    div.style.textAlign = "center";
    div.style.lineHeight = "20px";
    div.style.whiteSpace = "nowrap";
    div.style.MozUserSelect = "none";
    div.style.fontSize = "14px";

    var title = this._title = document.createElement("span");
    title.style.display = "block";
    title.style.width = "42px";
    title.style.height = "32px";
    title.style.left = "0px";
    // title.style.top = "0px";
    title.style.backgroundColor = "#6D77DB";
    title.border = "5px solid #6D77DB";
    title.style.position = "relative";
    title.style.borderRadius = "2px";
    title.style.lineHeight = "30px";
    title.appendChild(document.createTextNode(this._sub_text));

    var san = this._san = document.createElement("em");
    san.style.display = "block";
    san.style.width = "1px";
    san.style.left = "13px";
    san.style.bottom = "0px";
    san.style.borderWidth = "8px";
    san.style.borderStyle = "solid dashed dashed";
    san.style.borderColor = "#6D77DB transparent transparent";
    san.style.position = "relative";
    san.style.fontSize = "0px";
    san.style.lineHeight = "0px";
    title.appendChild(san);

    div.appendChild(title);


    var subTitle = this._subTitle = document.createElement("span");
    //默认不显示
    subTitle.style.display = "none";
    // subTitle.style.width = "100px";
    subTitle.style.color = "black";
    subTitle.className = "node2";
    subTitle.style.height = "32px";
    subTitle.style.left = "42px";
    subTitle.style.top = "-32px";
    subTitle.style.padding = "0 5px";
    subTitle.style.backgroundColor = "#fff";
    subTitle.style.position = "relative";
    subTitle.style.lineHeight = "30px";
    subTitle.appendChild(document.createTextNode(this._text));

    var heart = this._heart = document.createElement("i");
    heart.style.display = "inline-block";
    heart.style.width = "32px";
    heart.style.height = "32px";
    heart.className = "far fa-heart";
    heart.ariaHidden = "true";
    subTitle.appendChild(heart);

    div.appendChild(subTitle);




    //鼠标事件
    div.onmouseover = function () {
        this.childNodes.forEach(element => {
            if (element.className == "node2") {
                element.style.display = "block";
            } else {
                element.style.backgroundColor = "#e84a01";
                element.style.zIndex = 999; //最上层显示
                element.style.borderTopRightRadius = "0";
                element.style.borderBottomRightRadius = "0";
                //判断是否存在node[1]
                if (element.childNodes[1]) {
                    //node[1]就是绘制的下角标
                    element.childNodes[1].style.borderColor = "#e84a01 transparent transparent";
                    element.childNodes[1].style.zIndex = 999; //最上层显示
                }
            }
            // that._boundary.forEach(element => {
            //     element.show();
            // });
        });
    }

    div.onmouseout = function () {
        this.childNodes.forEach(element => {
            if (element.className == "node2") {
                element.style.display = "none";
            } else {
                element.style.backgroundColor = "#6D77DB";
                element.style.zIndex = 1;
                element.style.borderTopRightRadius = "2px";
                element.style.borderBottomRightRadius = "2px";
                if (element.childNodes[1]) {
                    element.childNodes[1].style.borderColor = "#6D77DB transparent transparent";
                    element.childNodes[1].style.zIndex = 999; //最上层显示
                }
            }
            // that._boundary.forEach(element => {
            //     element.hide();
            // });
        });
    }

    div.onclick = function () {
        map.zoomTo(map.getZoom() + 3);
        map.setCenter(that.point);
        // map.clearOverlays();

    };

    map.getPanes().labelPane.appendChild(div);
    return div;
}
//绘制覆盖物
ComplexCustomOverlay_s_small.prototype.draw = function () {
    var map = this._map;
    //覆盖物坐标
    var pixel = map.pointToOverlayPixel(this._point);
    //覆盖物偏移量
    this._div.style.left = pixel.x - 40 + "px";
    this._div.style.top = pixel.y - 40 + "px";
}