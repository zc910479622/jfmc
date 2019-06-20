var city,wenduNow,tianqidate,wenduMax,wenduMin,shidu,pm25,pm10,type
$(function(){
	$.ajax({
		url:"http://wthrcdn.etouch.cn/WeatherApi?city=金华",
		type:"get",
		dataType:"xml",
		success:function(data){
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
			resp.find("forecast>weather").each(function(i){
				tianqidate.push($(this).find("date").text());
				wenduMax.push($(this).find("high").text()) ;
				wenduMin.push($(this).find("low").text());
				type.push($(this).find("day>type").text());
			});
			$("#divTianQiIMG img").attr("src","images/weather/"+type[0]+".png")
			$("#divTianQiMessage1").html(city+"/"+wenduNow+"℃<br/>"+wenduMin[0].split(" ")[1]+"-"+wenduMax[0].split(" ")[1]+"<br/>"+type[0])
			$("#divTianQiMessage2").html("湿度："+shidu+"<br/>pm2.5："+pm25+"<br/>pm10："+pm10);
		}
	})
},1000*60*60);

setInterval(function(){
	var date=new Date();
	var year=date.getFullYear(); //年
	var mon=date.getMonth()+1;	//月
	var day=date.getDate();		//日
	var hh=date.getHours();		//时
	var mm=date.getMinutes();	//分
	var ss=date.getSeconds();	//秒
	var today=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
	var xq=today[date.getDay()];
	var daytime=year +"年"+fnW(mon)+"月"+fnW(day)+"日 ";
	var time= fnW(hh)+":"+ fnW(mm) + ":" +fnW(ss)+" "+xq;
	$("#divNow").html(daytime+"<br/><span style='font-size:0.9em;'>"+time+"</span>");
});

function fnW(str) {
    return (str>=10)?str:"0"+str;
}