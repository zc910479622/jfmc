/********************************data数据********************************/
var type = 0, ReadTime = getDay(0, "-"), order = 0, energyData = [], generalTableNo, pianchaData = [];
var arrayxvalues = [], arrayyvalues = [], backgroundData = [];
var arrworkshop = [], arrseries = [];
var factory = "凯达三工厂";
var name;
var arrayXValues = [];
var zValues = [];
var fValues = [];
var pc = [];
$(document).ready(function () {
    getEnergyData();
    setUl();
});

setInterval(function () {
    getEnergyData();
    ReadTime = getDay(0, "-")
}, 1000 * 60 * 30);

window.onresize = function () {
    setTimeout(function () {
        window.location.reload();
    }, 1300);
};

/*******************************电气水切换*******************************/

var myChart1 = echarts.init(document.getElementById("all-type"));
var myChart2 = echarts.init(document.getElementById("factory-type"));
var myChart3 = echarts.init(document.getElementById("all-pc"));

function setUl() {
    $("#menu ul li").click(function () {
        $("#menu ul li").removeClass("active");
        $(this).addClass("active");
        order = $("#menu ul li").index(this);
        if (order == 0) {
            type = 0
        } else if (order == 1) {
            type = 2
        }
        liclick();
        try {
            window.external.ToControl("7" + order);
        } catch (e) {

        }
    });
}

function getEnergyData() {
    $.ajaxSettings.async = false;
    $.post("energy/nenghao.do", function (data) {
        energyData = data;
        setZArrayData();
        setArrayData();
    }, "json");


    $.post("energy/piancha.do", function (data) {
        pianchaData = data;
        setSelect();
        setpiancha()
    }, "json")

}

function setZArrayData() {
    arrayyvalues = [];
    arrayxvalues = [];
    backgroundData = [];
    $(energyData).each(function (i, obj) {
        if (obj.type == type) {
            if (arrayxvalues.indexOf(timestampTime(obj.endTime)) == -1) {
                arrayxvalues.push(timestampTime(obj.endTime))
            }
        }
    });
    ReadTime = arrayxvalues[arrayxvalues.length-1];
    $(arrayxvalues).each(function (i, value) {
        var yValue = 0;
        $(energyData).each(function (j, obj) {
            if (obj.type == type) {
                if (arrayxvalues[i] == timestampTime(obj.endTime)) {
                    yValue += obj.value
                }
            }
        });
        arrayyvalues.push(yValue);
        backgroundData.push(100)
    });


    if (order == 0) {
        name = factory + "近期耗电量";
    } else if (order == 1) {
        name = factory + "近期用水量";
    }

    option1.xAxis[0].data = arrayxvalues;
    option1.series[0].data = arrayyvalues;
    option1.series[1].data = backgroundData;
    option1.title.text = name;
    myChart1.setOption(option1, true);

    myChart1.on('click', function (params) {
        ReadTime = params.name;
        setArrayData();
        try {
            window.external.ToControl("5" + ReadTime);
        } catch (e) {

        }
    });
}

function setArrayData() {
    arrseries = [];
    arrworkshop = [];
    $(energyData).each(function (i, obj) {
        if (obj.type == type) {
            if (arrworkshop.indexOf(obj.workshopName) == -1) {
                arrworkshop.push(obj.workshopName)
            }
        }
    });
    $.each(arrworkshop, function (index, value) {
        var arrdata = [];
        $(energyData).each(function (i, obj) {
            if (obj.type == type) {
                if (timestampTime(obj.endTime) == ReadTime) {
                    if (value == obj.workshopName) {
                        arrdata.push(obj.value)
                    }
                }
            }
        });
        arrseries.push({
            name: value,
            type: "bar",
            barWidth: 8,
            smooth: true,
            data: arrdata
        })
    });
    option2.title.subtext = ReadTime;
    option2.legend.data = arrworkshop;
    option2.series = arrseries;
    myChart2.setOption(option2, true);
}

function setpiancha(val) {
    if (val != null) {
        generalTableNo = val;
    }
    arrayXValues = [];
    zValues = [];
    fValues = [];
    pc = [];
    $(pianchaData).each(function (i, obj) {
        if (obj.generalTableNo == generalTableNo) {
            arrayXValues.push(getTime(obj.recordDate));
            zValues.push(obj.generalTable);
            fValues.push(obj.subTable);
            pc.push(((obj.generalTable - obj.subTable) / obj.generalTable * 100).toFixed(2))
        }
    });
    option3.xAxis.data = arrayXValues;
    option3.series[0].data = zValues;
    option3.series[1].data = fValues;
    option3.series[2].data = pc;
    myChart3.setOption(option3)
}


var option1 = {
    color: ['#3398DB'],
    title: {
        text: "",
        textStyle: {
            color: '#FFF'
        },
        x: 40
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function (prams) {
            if (prams[0].data === 0) {
                return "耗用量：0"
            } else {
                return "耗用量：" + prams[0].data.toFixed(1)
            }
        }
    },
    grid: {
        left: 40,
        right: '5%',
        bottom: '10%',
        top: '13%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            show: true,
            color: 'rgb(170,170,170)',
            fontSize: 16,
            formatter: function (value, index) {
                return value.substring(5)
            }
        },
        data: arrayxvalues
    }],
    yAxis: [{
        type: 'value',
        gridIndex: 0,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            color: 'rgb(170,170,170)',
            formatter: '{value}'
        }
    },
        {
            type: 'value',
            gridIndex: 0,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
    ],
    series: [{
        type: 'bar',
        barWidth: '50%',
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00feff'
                    },
                        {
                            offset: 0.5,
                            color: '#027eff'
                        },
                        {
                            offset: 1,
                            color: '#0286ff'
                        }
                    ]
                )
            }
        },
        zlevel: 11,
        smooth: true,
        seriesLayoutBy: "row",
        data: arrayyvalues
    },
        {
            name: '背景',
            type: 'bar',
            barWidth: '60%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-110%',
            data: backgroundData,
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        }

    ]
};


var colorList = [
    '#ff2600',
    '#ffc000',
    '#00ad4e',
    '#0073c2',
    '#165868',
    '#e76f00',
    '#316194',
    '#723761',
    '#00b2f1',
    '#4d6022',
    '#4b83bf',
    '#f9c813',
    '#0176c0'
];

var option2 = {
    title: {
        text: '车间每小时耗量',
        subtext: ReadTime,
        textStyle: {
            color: "#FFF"
        },
        x: '2%'
    },
    color: colorList,
    tooltip: {
        trigger: "axis",
        axisPointer: {
            crossStyle: {
                color: "#999"
            }
        }
    },
    legend: {
        top: "1%",
        right: "3%",
        data: arrworkshop,
        selectedMode: false,
        textStyle: {
            color: "#ff9"
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            }
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        top: "13%",
        bottom: 0,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#28316d', //左边线的颜色
                width: '1' //坐标线的宽度
            }
        },
        axisPointer: {
            type: "shadow"
        },
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                //fontFamily: "微软雅黑",
                fontSize: 13,
                color: "#FFF"
            }
        },
        data: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
    }],
    yAxis: [{
        type: 'value',
        name: '',
        splitLine: { //分割线
            show: true,
            // color:"#fff",
            lineStyle: {
                color: '#28316d'
            }
        },
        axisLabel: {
            interval: 0,
            rotate: 0,
            show: true,
            splitNumber: 30,
            // color:"#fff",
            textStyle: {
                //fontFamily: "微软雅黑",
                fontSize: 13,
                color: "#FFF"
            }
        }

    }],
    series: arrseries
};


var option3 = {
    title: [{
        text: '总分关系偏差比',
        textStyle: {
            color: "#FFF"
        },
        x: 40
    }],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['总表', '分表', '偏差'],
        textStyle: {
            color: '#FFF'
        }
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            formatter: function (value, index) {
                return value.substring(5)
            },
            textStyle: {
                color: "#FFF",
                fontsize: 13
            }
        },
        data: arrayXValues
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: "#FFF"
            }
        }
    }, {
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}%',
            textStyle: {
                color: "#FFF"
            }
        },
        position: 'right',
        max: 100
    }],
    series: [
        {
            yAxisIndex: 0,
            name: '总表',
            type: 'line',
            lineStyle: {
                color: '#00e5ff'
            },
            data: zValues
        },
        {
            yAxisIndex: 0,
            name: '分表',
            type: 'line',
            lineStyle: {
                color: '#00e5ff',
                type: 'dashed'
            },
            data: fValues
        },

        {
            yAxisIndex: 1,
            name: '偏差',
            lineStyle: {
                color: '#00e5ff',
                type: 'dotted'
            },
            type: 'line',
            data: pc
        }
    ]
};

function setSelect() {
    var arrSelect = [];
    $.each(pianchaData, function (i, obj) {
        if (arrSelect.indexOf(obj.generalTableNo) == -1) {
            arrSelect.push(obj.generalTableNo);
        }
    });
    var str = "";
    var a = 0;
    $(arrSelect).each(function (i, value) {
        str += "<option value='" + value + "'>" + value + "</option>";
        if (a == 0) {
            generalTableNo = value;
        }
        a++;
    });
    $("#zblist").empty();
    $("#zblist").append(str);
    $("#zblist").selectpicker("refresh");
}

function liclick() {
    $("#all-type,#all-pc").remove();
    $(".echart-box").prepend("<div id='all-type'></div>");
    if (order == 0) {
        $("#all-type").after("<div id='all-pc'></div>");
        $("#all-type").width("50%");
        $("#app .zblist").show();
        myChart3 = echarts.init(document.getElementById("all-pc"));
        setpiancha()
    } else {
        $("#all-type").width("100%");
        $("#app .zblist").hide();
    }
    myChart1 = echarts.init(document.getElementById("all-type"));
    setZArrayData();
    setArrayData()
}

$(document).on("change", 'select#zblist', function () {
    generalTableNo = $(this).val();
    setpiancha();
    try {
        window.external.ToControl("6" + generalTableNo);
    } catch (e) {

    }
});


function getTime(time) {
    var date = new Date(time);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate();
    return Y + M + D;
}

/*function FormControl(id) {
    var strID = id + "";
    var type = strID.charAt(0);
    if (type == 5) {
        var readtime = strID.substring(1);
    } else if (type == 6) {
        var val = strID.substring(1);
        piancha(generalTableNo);
    } else if (type == 7) {
        var index = strID.charAt(1);

        $("#menu ul li").removeClass("active");
        $("#menu ul li").index(index).addClass("active");
        $("#all-type,#all-pc").remove();
        $(".echart-box").prepend("<div id='all-type'></div>");
        if (index == 0) {
            $("#all-type").after("<div id='all-pc'></div>");
            $("#all-type").width("50%");
            $("#app .zblist").show();
            myChart3 = echarts.init(document.getElementById("all-pc"));
        } else {
            $("#all-type").width("100%");
            $("#app .zblist").hide()
        }
        myChart1 = echarts.init(document.getElementById("all-type"));
    }
}*/

function timestampTime(str) {
    var date = new Date(str);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    var h = date.getHours();
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y + M + D;
}

function getDay(num, str) {
    var today = new Date();
    var nowTime = today.getTime();
    var ms = 24 * 3600 * 1000 * num;
    today.setTime(parseInt(nowTime + ms));
    var oYear = today.getFullYear();
    var oMoth = (today.getMonth() + 1).toString();
    if (oMoth.length <= 1) oMoth = '0' + oMoth;
    var oDay = today.getDate().toString();
    if (oDay.length <= 1) oDay = '0' + oDay;
    return oYear + str + oMoth + str + oDay;
}