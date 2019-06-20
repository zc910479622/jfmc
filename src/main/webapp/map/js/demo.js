//百度地图API功能
function loadJScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=HszVx8Pejuld9Uamco4kzHKDeU3GAWho&callback=init";
    document.body.appendChild(script);
}

function init() {

    var map = new BMap.Map("allmap");            // 创建Map实例

    var mapStyle = {
        styleJson:
            [{
                "featureType": "land",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#091220ff"
                }
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#113549ff"
                }
            }, {
                "featureType": "green",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#0e1b30ff"
                }
            }, {
                "featureType": "building",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "building",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#ffffffb3"
                }
            }, {
                "featureType": "building",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#dadadab3"
                }
            }, {
                "featureType": "subwaystation",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#b15454B2"
                }
            }, {
                "featureType": "education",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#e4f1f1ff"
                }
            }, {
                "featureType": "medical",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#f0dedeff"
                }
            }, {
                "featureType": "scenicspots",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "color": "#e2efe5ff"
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "weight": 4
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#f7c54dff"
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#fed669ff"
                }
            }, {
                "featureType": "highway",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "highway",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#8f5a33ff"
                }
            }, {
                "featureType": "highway",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "highway",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "arterial",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "weight": 2
                }
            }, {
                "featureType": "arterial",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#d8d8d8ff"
                }
            }, {
                "featureType": "arterial",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#ffeebbff"
                }
            }, {
                "featureType": "arterial",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "arterial",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#525355ff"
                }
            }, {
                "featureType": "arterial",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "local",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "weight": 1
                }
            }, {
                "featureType": "local",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#d8d8d8ff"
                }
            }, {
                "featureType": "local",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "local",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "local",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#979c9aff"
                }
            }, {
                "featureType": "local",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "railway",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "weight": 1
                }
            }, {
                "featureType": "railway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#123c52ff"
                }
            }, {
                "featureType": "railway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#12223dff"
                }
            }, {
                "featureType": "subway",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on",
                    "weight": 1
                }
            }, {
                "featureType": "subway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#d8d8d8ff"
                }
            }, {
                "featureType": "subway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#ffffff00"
                }
            }, {
                "featureType": "subway",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "subway",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#979c9aff"
                }
            }, {
                "featureType": "subway",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "continent",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "continent",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "continent",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "continent",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "city",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "city",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "city",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#0094ffff"
                }
            }, {
                "featureType": "city",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#005fff00"
                }
            }, {
                "featureType": "town",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "town",
                "elementType": "labels",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "town",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#454d50ff"
                }
            }, {
                "featureType": "town",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#12223dff"
                }
            }, {
                "featureType": "poilabel",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "districtlabel",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#ffffff00"
                }
            }, {
                "featureType": "district",
                "elementType": "labels",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "poilabel",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "poilabel",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#2dc4bbff"
                }
            }, {
                "featureType": "poilabel",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffff00"
                }
            }, {
                "featureType": "manmade",
                "elementType": "geometry",
                "stylers": {
                    "color": "#12223dff"
                }
            }, {
                "featureType": "districtlabel",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#ffffff00"
                }
            }, {
                "featureType": "entertainment",
                "elementType": "geometry",
                "stylers": {
                    "color": "#ffffffff"
                }
            }, {
                "featureType": "shopping",
                "elementType": "geometry",
                "stylers": {
                    "color": "#12223dff"
                }
            }, {
                "featureType": "country",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "districtlabel",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "village",
                "elementType": "labels",
                "stylers": {
                    "visibility": "on"
                }
            }, {
                "featureType": "districtlabel",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#00edffff"
                }
            }]
    }
    map.setMapStyle(mapStyle);
    // 定义一个控件类,即function
    function ZoomControl(){
        // 默认停靠位置和偏移量
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new BMap.Size(10, 10);
    }
    // 通过JavaScript的prototype属性继承于BMap.Control
    ZoomControl.prototype = new BMap.Control();

    var pointArray = new Array();

    // map.centerAndZoom("襄阳",7);

    map.enableScrollWheelZoom();                 //启用滚轮放大缩小


    // 编写自定义函数,创建标注
    function addMarker(point) {
        var myIcon = new BMap.Icon("img/car02.png", new BMap.Size(31, 32));
        var marker = new BMap.Marker(point, {icon: myIcon});
        var text ="<div class='message'>"+
                    "<span>车牌："+123456+"</span><br/>"+
                    "<span>起点："+123456+"</span><br/>"+
                    "<span>终点："+123456+"</span><br/>"+
                    "<span>货物："+123456+"</span><br/>"+
                    "<span>单号："+123456+"</span><br/>"+
                    "<span>司机："+123456+"</span><br/>"+
                    "<span>联系方式："+123456+"</span><br/>"+
                    "</div>"+
                    "<div class='triangle-down'></div>";

        var label = new BMap.Label(text,{offset:new BMap.Size(-75,-115)});
        label.setStyle({
            border: '1px solid #000',
            borderRadius:'10px',
            width:'180px',
            height:'105px',
            padding:'5px',
            float:'left'
    })
        marker.setLabel(label);
        map.addOverlay(marker);
    }





    $.each(pointArray,function(i,v){
        addMarker(v);
    })

    var view = map.getViewport(eval(pointArray));
    var mapZoom = view.zoom;
    var centerPoint = view.center;
    map.centerAndZoom(centerPoint, mapZoom);


    window.setInterval(function () {
        pointArray = [];
        $.ajax({
            type:"get",
            url:"../Logistics/SelectLogistics.do",
            dataType:"JSON",
            success:function(data){
                $.each(data, function (i, v){
                    console.log(v)
                    // map.clearOverlays();
                    // var point = new BMap.Point(v.beidouLongitude, v.beidouLatitude);
                    // pointArray.push(point);

                });
            }
        })
        map.clearOverlays();
        $.each(pointArray,function(i,v){
            addMarker(v);
        })

        var view = map.getViewport(eval(pointArray));
        var mapZoom = view.zoom;
        var centerPoint = view.center;
        map.centerAndZoom(centerPoint, mapZoom);
    }, 1000*2)

}


window.onload = loadJScript;  //异步加载地图
	
	