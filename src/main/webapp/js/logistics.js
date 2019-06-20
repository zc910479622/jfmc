var color=["#ffeb40","#2ef358","#ff5c26","#dcbf71","#9ae5fc"];

var planePath="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";

var geoCoordMap = {
	"金华": 	[119.64,	29.12,	16,	"bottom",	0],
	"富源": 	[104.26,	25.68,	8,	"left",		1],
	"贵阳": 	[106.71,	26.57,	4,	"bottom",	1],
	"银川": 	[106.27,	38.47,	4,	"top",		1],
	"上海": 	[121.48,	31.22,	12,	"top",		2],
	"广州": 	[113.23,	23.16,	4,	"left",		2],
	"重庆": 	[106.54,	29.59,	12,	"top",		2],
    "台州": 	[121.42,	28.65,	4,	"right",	2],
	"北京": 	[116.46,	39.92,	4,	"top",		2],
	"天津": 	[117.2,		39.13,	4,	"top",		2],
	"东京":	[139.72,	35.78,	12,	"top",		2],
	"洛杉矶":	[154.00,	34.00,	12,	"top",		2],
};

var cityLine1=[{
	"srcName":"富源",
	"destName":"金华"
},{
	"srcName":"贵阳",
	"destName":"金华"
},{
	"srcName":"银川",
	"destName":"金华"
}];

var cityLine2=[{
	"srcName":"金华",
	"destName":"上海"
},{
	"srcName":"金华",
	"destName":"台州"
},{
	"srcName":"金华",
	"destName":"天津"
},{
	"srcName":"金华",
	"destName":"北京"
},{
	"srcName":"富源",
	"destName":"重庆"
},{
	"srcName":"金华",
	"destName":"重庆"
},{
	"srcName":"金华",
	"destName":"广州"
},{
	"srcName":"金华",
	"destName":"东京"
},{
	"srcName":"金华",
	"destName":"洛杉矶"
}];

chartMap();

function chartMap() {
    var seriesData = [];
    var mapChart = echarts.init(document.getElementById("chartMap"));
    window.addEventListener("resize", function () {
        mapChart.resize();
    });
	
	function getPointData(){
		var geoData=[];
		for(var obj in geoCoordMap){
			geoData.push({
				name: obj,
        		value: geoCoordMap[obj],
				symbolSize: geoCoordMap[obj][2],
        		label: {
            		normal: {
                		show: true,
						position: geoCoordMap[obj][3],
						formatter: "{b}"
            		}
        		},
				itemStyle: {
					normal: {
						color: color[2 + geoCoordMap[obj][4]],
					}
				}
			});
		}
		return geoData;
	}
	
	function getLineData(cityLine){
		var geoData=[];
		for(var i=0;i<cityLine.length;i++){
			geoData.push({
				coords: [geoCoordMap[cityLine[i].srcName], geoCoordMap[cityLine[i].destName]],
            });
		}
		return geoData;
	}
	
	function pushLine(index,cityLine){
        seriesData.push({
            type: "lines",
            zlevel: index*2-1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: "#fff",
                symbolSize: 3,
            },
            lineStyle: {
                normal: {
                    color: color[index-1],
                    width: 0,
                    curveness: 0.2
                }
            },
			data:getLineData(cityLine)
        },{
			type: "lines",
			zlevel: index*2,
			symbol: ["none", "arrow"],
			symbolSize: 10,
			effect: {
				show: true,
				period: 6,
				trailLength: 0,
				symbol: planePath,
				symbolSize: 15
			},
			lineStyle: {
				normal: {
					color: color[index-1],
					width: 1,
					opacity: 0.6,
 					curveness: 0.2
				}
			},
			data: getLineData(cityLine)
		});
	}
    
	pushLine(1,cityLine1);
	pushLine(2,cityLine2);
	
	seriesData.push({
    	type: "effectScatter",
    	coordinateSystem: "geo",
    	zlevel: 5,
    	rippleEffect: {
        	brushType: "stroke"
    	},
    	data: getPointData()
	});

    var option = {
        title:{
			show: true,
			text: "　 今飞物流图示",
			subtext: "今飞车轮滚滚　飞驰东西南北",
			left: 20,
			top: 20,
			backgroundColor: "#002040",//"#bfffbf",
			borderColor: "#bfefff",
			borderWidth: 2,
            padding: [12,80,12,80],
            itemGap: 12,
            textStyle: {
				color: "#efefef",//"#4d7aff",
                fontFamily: "Arial, 微软雅黑, sans-serif",
				align: "center",
                fontSize: 32,
                fontWeight: "bold"
			},
            subtextStyle: {
				color: "#ff4000",
                fontFamily: "Arial, 黑体, sans-serif",
                fontSize: 20,
                fontWeight: "bold"
			}
		},
        geo: {
            map: "china",
			aspectScale:0.8,
            silent: true,
            itemStyle: {
                normal: {
                    areaColor: "transparent",
                    borderColor: "#0e94ea",
                    shadowBlur: 10,
                    shadowColor: "#0e94ea"
                }
            },
            left: 20,
            right: 460
        },
        series: seriesData
    };

	mapChart.setOption(option);
}