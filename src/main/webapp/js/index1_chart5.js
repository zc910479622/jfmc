var myChart52 = echarts.init(document.getElementById("chart52"));
var data52 = [];
var arrayDate = [];
var arrayShould = new Array();
var arrayActual = new Array();
var arrayRate = new Array();
var dataTab7 = [];
function getPeopleData() {
    data52 = [];
    $.post("peoplemanage/getPeopleManageData.do", {factoryId: factoryId}, function (data) {
        dataTab7 = data
        var day1 = {}, day2 = {}, day3 = {}, day4 = {}, day5 = {}, day6 = {}, day7 = {}, day1arr = [], day2arr = [],
            day3arr = [], day4arr = [], day5arr = [], day6arr = [], day7arr = [];
        day1.date = getDay(0, "-");
        day2.date = getDay(-1, "-");
        day3.date = getDay(-2, "-");
        day4.date = getDay(-3, "-");
        day5.date = getDay(-4, "-");
        day6.date = getDay(-5, "-");
        day7.date = getDay(-6, "-");
        $(data).each(function (i, obj) {
            var dayDate = {};
            dayDate.should = obj.peoplenum;
            dayDate.actual = obj.shidao;
            switch (obj.workdate) {
                case 1:
                    if (obj.rotattype == 1) {
                        if (timestampToTime() > 7) {
                            day1arr.push(dayDate);
                        }
                    } else if (obj.rotattype == 2) {
                        if (timestampToTime() > 15) {
                            day1arr.push(dayDate);
                        }
                    }
                    break;
                case 2:
                    day2arr.push(dayDate);
                    break;
                case 3:
                    day3arr.push(dayDate);
                    break;
                case 4:
                    day4arr.push(dayDate);
                    break;
                case 5:
                    day5arr.push(dayDate);
                    break;
                case 6:
                    day6arr.push(dayDate);
                    break;
                case 7:
                    day7arr.push(dayDate);
                    break;
            }
        });
        day1.info = day1arr;
        day2.info = day2arr;
        day3.info = day3arr;
        day4.info = day4arr;
        day5.info = day5arr;
        day6.info = day6arr;
        day7.info = day7arr;
        data52.push(day7, day6, day5, day4, day3, day2, day1);
    }, "json");
    for (var i = 0; i < 3; i++) {
        arrayShould[i] = [];
        arrayActual[i] = [];
        arrayRate[i] = [];
    }
    arrayDate = []
    $.each(data52, function (index, value) {
        arrayDate.push(this.date);
        for (var i = 0; i < this.info.length; i++) {
            arrayShould[i].push(this.info[i].should);
            arrayActual[i].push(this.info[i].actual);
            arrayRate[i].push(GetRate(this.info[i]));
        }
    });

    function GetRate(banInfo) {
        return (banInfo.actual * 100 / banInfo.should).toFixed(2);
    }
    option52.xAxis[0].data = arrayDate;
    option52.series[0].data = arrayRate[0];
    option52.series[1].data = arrayRate[1];
    option52.series[2].data = arrayRate[2];
    myChart52.setOption(option52)
    ChangeTable(data52.length - 2);
}





var option52 = {
    backgroundColor:"#142535",
    title: {
        text: "近一周人员到岗率趋势图",
        left: "6%",
        textStyle: {
            color: "#FFF"
        }
    },
    grid: {
        top: "15%",
        left: "2%",
        right: "2%",
        bottom: "5%",
        containLabel: true
    },
    legend: {
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        icon: "rect",
        selectedMode: false,
        right: "5%",
        data: ["早班", "中班", "晚班"],
        textStyle: {
            fontSize: 12,
            color: "#F1F1F3"
        }
    },
    tooltip: {
        show: "true",
        trigger: "axis",
        backgroundColor: "rgba(0,0,0,0.7)", // 背景
        padding: [8, 10], //内边距
        extraCssText: "box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);", //添加阴影
    },
    yAxis: {
        type: "value",
        min:95,
        max:100,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#363e83",
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#363e83 ",
            }
        },
        axisLabel: {
            formatter: "{value}%",
            textStyle: {
                color: "#fff",
                fontWeight: "normal",
                fontSize: "12"
            }
        }
    },
    xAxis: [{
        type: "category",
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#363e83"
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: "#fff",
                fontWeight: "normal",
                fontSize: "12",
            },
            formatter: function (val) {
                return val.substring(5);
            },
        },
        axisPointer: {
            type: "shadow"
        },
        data: arrayDate,
    }],
    series: [{
        name: "早班",
        type: "line",
        smooth: true,
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#1a98f8"
                }, {
                    offset: 1,
                    color: "#7049f0"
                }]),
                barBorderRadius: 50,
                borderWidth: 5,
            }
        },
        zlevel: 2,
        barWidth: "15%",
        data: arrayRate[0]
    }, {
        name: "中班",
        type: "line",
        smooth: true,
        barWidth: "15%",
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#96d668"
                }, {
                    offset: 1,
                    color: "#01babc"
                }]),
                barBorderRadius: 50,
                borderWidth: 5,
            }
        },
        zlevel: 2,
        barGap: "75%",
        data: arrayRate[1]
    }, {
        name: "晚班",
        type: "line",
        smooth: true,
        barWidth: "15%",
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#ffff73"
                }, {
                    offset: 1,
                    color: "#d9d900"
                }]),
                barBorderRadius: 50,
                borderWidth: 5,
            }
        },
        zlevel: 2,
        barGap: "75%",
        data: arrayRate[2]
    }

    ]
};

myChart52.on("click", function (event) {
    var index = event.dataIndex;
    ChangeTable(index);
    try {
        window.external.ToControl("3" + index);
    } catch (e) {

    }
});

function ChangeTable(index) {
    var dateInfo = data52[index];
    $("#thDate").html(dateInfo.date);
    var banName = ["早班", "中班", "晚班", "全天"];
    var htmlContent = "";
    var totalShould = 0;
    var totalActual = 0;
    for (var i = 0; i < dateInfo.info.length; i++) {
        htmlContent += "<tr id=\"trBan" + i + "\"><th>" + banName[i] + "</th><td>" + arrayShould[i][index] + "</td><td>" + arrayActual[i][index] + "</td><td>"
            + (arrayShould[i][index] - arrayActual[i][index]) + "</td><td>" + arrayRate[i][index] + "%</td></tr>";
        totalShould += arrayShould[i][index];
        totalActual += arrayActual[i][index];
    }
    htmlContent += "<tr><td class=\"line\" colspan=\"5\">";
    for (var i = 0; i < 100; i++) htmlContent += "-";
    htmlContent += "</td></tr>";
    $("#tbody").html(htmlContent);
    var totalRate = (totalActual * 100 / totalShould).toFixed(2);
    $("#tfoot").html("<tr><th>" + banName[3] + "</th><td>" + totalShould + "</td><td>" + totalActual + "</td><td>" + (totalShould - totalActual) + "</td><td>" + totalRate + "%</td></tr>");
}

$("#chart51").click(function () {
    showModel();
    $("#navhead7").addClass("active");
    $("#detailed7").show();
    tab7();
    try {
        window.external.ToControl("17");
    } catch (e) {

    }
});