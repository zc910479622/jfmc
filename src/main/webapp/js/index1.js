var city,type;


$(function() {
    $.get("weather/getWeatherData.do",function (data) {
        $("#divTianQiIMG img").attr("src", "images/weather/" + data.type + ".png");
        $("#divTianQiMessage1").html(data.city + "/" + data.wendunow + "℃<br/>" + data.wendumin + "℃-" + data.wendumax + "℃<br/>" + data.type);
        $("#divTianQiMessage2").html("湿度：" + data.shidu + "<br/>pm2.5：" + data.pm25 + "<br/>pm10：" + data.pm10);
    },"json");

	/*$.ajax({
		url: "http://wthrcdn.etouch.cn/WeatherApi?city=金华",
		type: "get",
		dataType: "xml",
		success: function(data) {
			wenduMax = [];
			wenduMin = [];
			type = [];
			tianqidate = [];
			var resp = $(data).find("resp");
			city = resp.find("city").text();
			wenduNow = resp.find("wendu").text();
			shidu = resp.find("shidu").text();
			pm25 = resp.find("environment>pm25").text();
			pm10 = resp.find("environment>pm10").text();
			resp.find("forecast>weather").each(function(i) {
				tianqidate.push($(this).find("date").text());
				wenduMax.push($(this).find("high").text());
				wenduMin.push($(this).find("low").text());
				type.push($(this).find("day>type").text());
			});
			$("#divTianQiIMG img").attr("src", "images/weather/" + type[0] + ".png")
			$("#divTianQiMessage1").html(city + "/" + wenduNow + "℃<br/>" + wenduMin[0].split(" ")[1] + "-" + wenduMax[0].split(" ")[1] + "<br/>" + type[0])
			$("#divTianQiMessage2").html("湿度：" + shidu + "<br/>pm2.5：" + pm25 + "<br/>pm10：" + pm10);
		}
	})*/
}, 1000 * 60 * 60);

setInterval(function() {
	var date = new Date();
	var year = date.getFullYear(); //年
	var mon = date.getMonth() + 1; //月
	var day = date.getDate(); //日
	var hh = date.getHours(); //时
	var mm = date.getMinutes(); //分
	var ss = date.getSeconds(); //秒
	var today = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	var xq = today[date.getDay()];
	var daytime = year + "年" + fnW(mon) + "月" + fnW(day) + "日 ";
	var time = fnW(hh) + ":" + fnW(mm) + ":" + fnW(ss) + " " + xq;
	$("#divNow").html(daytime + "<br/><span style='font-size:1.0em;'>" + time + "</span>");
});

setTimeout(function(){window.location.reload()},1000*60*60*5);

function fnW(str) {
	return(str >= 10) ? str : "0" + str;
}

var axisLine = {
	lineStyle: {
		color: "#57617B"
	}
};

getOrderData();
getEquipmentData();
getPlanData();
getQuality();
getPeopleData();
getWipData();
getRealtimeData();

setInterval(function(){
    getOrderData();
    getEquipmentData();
    getPlanData();
    getQuality();
    getPeopleData();
    getWipData();
    getRealtimeData();
    index = 0;
}, 1000*60*10);

setInterval(function(){
    next()
}, 7500);

/****************************弹出页关闭按钮点击事件*****************************/
$(".close").click(function(){
	closeModel();
    try {
        window.external.ToControl("0");
    }catch (e) {

    }
});


/****************************关闭弹出页并删除默认选中class*****************************/
function closeModel() {
    $(".title li").removeClass("active");
    $(".model").hide();
    $(".detailed").hide();
}


/***********************弹出页显示************************/
function showModel(){
	$(".model").show();
}


/****************************弹出页顶栏点击事件******************************/
$(".title li").click(function(){
	var num = $(this).index()+1;
	$(".title li").removeClass("active");
	$("#navhead"+num).addClass("active");
	$(".detailed").hide();
	$("#detailed"+num).show();
	var id = "1";
	switch(num){
		case 1:
		   tab1();
		   id += "1";
		  break;
		case 2:
		  tab2();
            id += "2";
		  break;
		case 3:
		  tab3();
            id += "3";
		  break;
		case 4:
		  tab4();
            id += "4";
		  break;
		case 5:
            tab5()
            id += "5";
		  break;
		case 6:
		  tab6();
            id += "6";
		  break;
		case 7:
		  tab7();
            id += "7";
		  break;
        case 8:
            setTable8();
            id += "8";
            break;
	}
    try {
        window.external.ToControl(id);
    }catch (e) {

    }
});
/******************************库存数点击事件******************************/
$("#num72").click(function () {
    showKcTable()
});

function showKcTable() {
    showModel();
    $("#navhead8").addClass("active");
    $("#detailed8").show();
    setTable8()
}

/******************************在制品点击事件******************************/
$("#num71,#num73,#num74,#num75,#num76").click(function () {
    showWipTable()
});

function showWipTable() {
    showModel();
    $("#navhead4").addClass("active");
    $("#detailed4").show();
    tab4();
    try {
        window.external.ToControl("41");
    }catch (e) {

    }
}

/************************铸造点击事件************************/
var index = 0;
$(".og_next").click(function(){
	next();
    try {
        window.external.ToControl("42");
    }catch (e) {
    }
});

$(".og_prev").click(function(){
    prev();
	try {
        window.external.ToControl("41");
    }catch (e) {
    }
});


/********************铸造下一页按钮*********************/
function next() {
    var divArr = $(".piclist");
    if(index<(divArr.length-1)){
        $(divArr[index]).removeClass("active");
        $(divArr[index]).hide();
        $(divArr[index]).next().addClass("active");
        $(divArr[index]).next().show();
        index++;
    }else{
        $(divArr[index]).removeClass("active");
        $(divArr[index]).hide();
        $(divArr[0]).addClass("active");
        $(divArr[0]).show();
        index = 0;
    }
}

/********************铸造上一页按钮*********************/
function prev() {
    var divArr = $(".piclist");
    if(index>0){
        $(divArr[index]).removeClass("active");
        $(divArr[index]).hide();
        $(divArr[index]).prev().addClass("active");
        $(divArr[index]).prev().show();
        index--;
    }else{
        $(divArr[0]).removeClass("active");
        $(divArr[0]).hide();
        $(divArr[divArr.length-1]).addClass("active");
        $(divArr[divArr.length-1]).show();
        index = divArr.length-1;
    }
}

//时间戳转换为日期
function timestampTime(str) {
    var date = new Date(str);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate());
    var h = date.getHours();
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y+M+D;
}

//获取当前时间(小时)
function timestampToTime() {
    var date = new Date( );
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return h;
}

//获取前几天的日期
function getDay(num, str) {
    var today = new Date();
    var nowTime = today.getTime();
    var ms = 24*3600*1000*num;
    today.setTime(parseInt(nowTime + ms));
    var oYear = today.getFullYear();
    var oMoth = (today.getMonth() + 1).toString();
    if (oMoth.length <= 1) oMoth = '0' + oMoth;
    var oDay = today.getDate().toString();
    if (oDay.length <= 1) oDay = '0' + oDay;
    return oYear + str + oMoth + str + oDay;
}

/*
function FormControl(id){
    var strID=id+"";
    var type = strID.charAt(0);
    var index = strID.charAt(1);
    if (type == 0){
		closeModel()
	} else if (type == 1){
        switch(index){
            case 1:
                tab1();
                break;
            case 2:
                tab2();
                break;
            case 3:
                tab3();
                break;
            case 4:
                tab4();
                break;
            case 5:
                tab5();
                break;
            case 6:
                tab6();
                break;
            case 7:
                tab7();
                break;
        }
	}  else if (type == 2){
        ChangeChart(no)
    } else if(type == 3){
        ChangeTable(no)
	} else if (type == 4) {
		if (index == 1){
			prev();
		} else if (index == 2) {
			next()
		}
	}
}

*/
