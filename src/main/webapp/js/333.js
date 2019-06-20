var myChart11 = echarts.init(document.getElementById("chart11"));
var myChart21 = echarts.init(document.getElementById("chart21"));
var myChart31 = echarts.init(document.getElementById("chart31"));
var myChart41 = echarts.init(document.getElementById("chart41"));
var myChart711 = echarts.init(document.getElementById("chart511"));
var myChart712 = echarts.init(document.getElementById("chart512"));
var fontColor = '#30eee9';
selectAlarm();
option11 = {
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    legend: {
        show: true,
        x: 'center',
        y: '25',
        icon: 'stack',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#1bb4f6'
        },
        data: ['工厂','铸造车间','机加工']
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {
                color: fontColor
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#397cbc'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#195384'
                }
            },
            data: ['04-20', '04-21', '04-22', '04-23', '04-24', '04-25', '04-26']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '稼动率',
            min: 70,
            max: 100,
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: '#2ad1d2'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#27b4c2'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#11366e'
                }
            }
        },
    ],
    series: [
        {
            name: '工厂',
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 2
                    },
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [86.5, 85.4, 75.3, 84.2, 94.6, 84.9, 86.9]
        },{
            name: '铸造车间',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: '#aecb56',
                    lineStyle: {
                        color: "#aecb56",
                    },
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [84.5, 85.4, 75.3, 84.2, 94.6, 84.9, 86.9]
        },
        {
            name: '机加工',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: '#00d4c7',
                    lineStyle: {
                        color: "#00d4c7",
                    },
                }
            },
            data: [82.2, 91.8, 91.9, 82.3, 92.9, 83.3, 91]
        },
    ]
};
myChart11.setOption(option11);

option21 = {
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    legend: {
        show: true,
        x: 'center',
        y: '25',
        icon: 'stack',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#1bb4f6'
        },
        data: ['工厂','铸造车间','机加工']
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {
                color: fontColor
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#397cbc'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#195384'
                }
            },
            data: ['04-20', '04-21', '04-22', '04-23', '04-24', '04-25', '04-26']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '产能效率',
            min: 70,
            max: 100,
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: '#2ad1d2'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#27b4c2'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#11366e'
                }
            }
        },
    ],
    series: [
        {
            name: '工厂',
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 2
                    },
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [92.2, 91.8, 91.9, 82.3, 92.9, 83.3, 91]
        },{
            name: '铸造车间',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: '#aecb56',
                    lineStyle: {
                        color: "#aecb56",
                    },
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [96.5, 85.4, 75.3, 84.2, 94.6, 84.9, 86.9]
        },
        {
            name: '机加工',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: '#00d4c7',
                    lineStyle: {
                        color: "#00d4c7",
                    },
                }
            },
            data: [82.5, 84.4, 89.3, 79.2, 93.6, 82.9, 92.9]
        },
    ]
};
myChart21.setOption(option21)

option31 = {
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    legend: {
        show: true,
        x: 'center',
        y: '25',
        icon: 'stack',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#1bb4f6'
        },
        data: ['工厂','铸造车间','机加工']
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {
                color: fontColor
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#397cbc'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#195384'
                }
            },
            data: ['04-20', '04-21', '04-22', '04-23', '04-24', '04-25', '04-26']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '良品率',
            min: 70,
            max: 100,
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: '#2ad1d2'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#27b4c2'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#11366e'
                }
            }
        },
    ],
    series: [
        {
            name: '工厂',
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 2
                    },
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [82.5, 84.4, 89.3, 79.2, 93.6, 82.9, 92.9]
        },{
            name: '铸造车间',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: '#aecb56',
                    lineStyle: {
                        color: "#aecb56",
                    },
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [91.5, 85.4, 74.3, 84.2, 94.6, 87.9, 89.9]
        },
        {
            name: '机加工',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: '#00d4c7',
                    lineStyle: {
                        color: "#00d4c7",
                    },
                }
            },
            data: [92.2, 91.8, 91.9, 82.3, 92.9, 83.3, 91]
        },
    ]
};
myChart31.setOption(option31)

option41 = {
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    legend: {
        show: true,
        x: 'center',
        y: '25',
        icon: 'stack',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#1bb4f6'
        },
        data: ['工厂','铸造车间','机加工']
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {
                color: fontColor
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#397cbc'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#195384'
                }
            },
            data: ['04-20', '04-21', '04-22', '04-23', '04-24', '04-25', '04-26']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'OEE',
            min: 70,
            max: 100,
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: '#2ad1d2'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#27b4c2'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#11366e'
                }
            }
        },
    ],
    series: [
        {
            name: '工厂',
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 2
                    },
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [84.5, 92.4, 79.3, 86.8, 94.8, 84.9, 86.9]
        },{
            name: '铸造车间',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: '#aecb56',
                    lineStyle: {
                        color: "#aecb56",
                    },
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [82.5, 84.4, 89.3, 79.2, 93.6, 82.9, 92.9]
        },
        {
            name: '机加工',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: '#00d4c7',
                    lineStyle: {
                        color: "#00d4c7",
                    },
                }
            },
            data: [94.2, 95.8, 92.9, 89.3, 84.9, 93.3, 90]
        },
    ]
};
myChart41.setOption(option41)
// 数据211111
var dateBase = new Date();
var year = dateBase.getFullYear();
var dottedBase = +dateBase + 1000 * 3600 * 24;
var weekCategory = [];

var radarData = [];
var maxData = 12000;
var weekMaxData = [];
var weekLineData = [];


// 周数据
for (var i = 0; i < 7; i++) {
    // 日期
    var date = new Date(dottedBase -= 1000 * 3600 * 24);
    weekCategory.unshift([
        date.getMonth() + 1,
        date.getDate()
    ].join('/'));

    // 折线图数据
    weekMaxData.push(maxData);
    var distance = Math.round(Math.random() * 11000 + 500);
    weekLineData.push(distance);

    // 雷达图数据
    // 我的指标
    var averageSpeed = +(Math.random() * 10 + 90).toFixed(3);
    var maxSpeed = (+(Math.random() * 10 + 90)).toFixed(2);
    var hour = +(Math.random() * 24).toFixed(1);
    var radarDayData = [distance, averageSpeed, maxSpeed, hour];
    radarData.unshift(radarDayData);
}

// 颜色设置
var color = {
    linearYtoG: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#f5b44d'
        }, {
            offset: 1,
            color: '#28f8de'
        }]
    },
    linearGtoB: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#43dfa2'
        }, {
            offset: 1,
            color: '#28f8de'
        }]
    },
    linearBtoG: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#1c98e8'
        }, {
            offset: 1,
            color: '#28f8de'
        }]
    },
    areaBtoG: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(35,184,210,.2)'
        }, {
            offset: 1,
            color: 'rgba(35,184,210,0)'
        }]
    }
};

var option51 = {
    legend: {
        top: 220,
        left: 80,
        orient: 'vertical',
        itemGap: 15,
        itemWidth: 12,
        itemHeight: 12,
        data: ['平均指标', '当天数据'],
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
    },
    tooltip: {
        trigger: 'item'
    },
    radar: {
        center: ['50%', '27%'],
        radius: '40%',
        name: {
            color: '#fff'
        },
        splitNumber: 8,
        axisLine: {
            lineStyle: {
                color: color.linearYtoG,
                opacity: .6
            }
        },
        splitLine: {
            lineStyle: {
                color: color.linearYtoG,
                opacity: .6
            }
        },
        splitArea: {
            areaStyle: {
                color: '#fff',
                opacity: .1,
                shadowBlur: 25,
                shadowColor: '#000',
                shadowOffsetX: 0,
                shadowOffsetY: 5,
            }
        },
        indicator: [{
            name: '总产量(只)',
            max: maxData
        }, {
            name: '产能效率(%)',
            max: 110
        }, {
            name: '总合格率(%)',
            max: 100
        }, {
            name: '开机时长(h)',
            max: 24
        }]
    },
    grid: {
        left: 50,
        right: 50,
        bottom: 40,
        top: '60%',
    },
    xAxis: {
        type: 'category',
        position: 'bottom',
        axisLine: true,
        axisLabel: {
            color: 'rgba(255,255,255,.8)',
            fontSize: 12
        },
        data: weekCategory,
    },
    yAxis: {
        max: maxData,
        splitNumber: 4,

        axisLine: {
            lineStyle: {
                opacity: 0
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                opacity: .1
            }
        },
        axisLabel: {
            color: 'rgba(255,255,255,.8)',
            fontSize: 12

        }
    },
    series: [{
        name: '每日跑步指标分布与比较',
        type: 'radar',
        symbolSize: 0,
        data: [{
            value: radarData[0],
            name: '当天数据',
            itemStyle: {
                normal: {
                    color: '#43dfa2',
                }
            },
            lineStyle: {
                normal: {
                    opacity: 0,
                }
            },
            areaStyle: {
                normal: {
                    color: color.linearGtoB,
                    shadowBlur: 15,
                    shadowColor: 'rgba(0,0,0,.2)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 5,
                    opacity: .8
                }
            },
        }]
    }, {
        name: '每日跑步里程',
        type: 'line',
        smooth: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        itemStyle: {
            normal: {
                color: '#fff'
            }
        },
        lineStyle: {
            normal: {
                color: color.linearBtoG,
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: color.areaBtoG,
            }
        },
        data: weekLineData,
        lineSmooth: true,
        markLine: {
            silent: true,
            data: [{
                type: 'average',
                name: '标准产能'
            }],
            precision: 0,
            label: {
                normal: {
                    formatter: '标准产能: \n {c}'
                }
            },
            lineStyle: {
                normal: {
                    color: 'rgba(248,211,81,.7)'
                }
            }
        },
        tooltip: {
            position: 'top',
            formatter: '{c} 只',
            backgroundColor: 'rgba(28,152,232,.2)',
            padding: 6
        }
    }, {
        name: '占位背景',
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: '#000',
                opacity: 0
            }
        },
        silent: true,
        barWidth: '50%',
        data: weekMaxData,
        animation: false
    }, {
        name: '占位背景',
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: '#000',
                opacity: .1
            }
        },
        silent: true,
        barWidth: '50%',
        barGap: 0,
        data: weekMaxData,
        animation: false
    }],
};

// myChart51.setOption(option51)


// 点击事件
/*
myChart51.on('click', function(params) {
    if (params.componentType === 'series' && params.seriesType === 'line') {
        var dataIndex = params.dataIndex;
        myChart51.setOption({
            series: [
                {
                    name: '每日跑步指标分布与比较',
                    type: 'radar',
                    symbolSize: 0,
                    data: [{
                        name: '当天数据',
                        value: radarData[6-dataIndex],
                        itemStyle: {
                            normal: {
                                color: '#43dfa2',
                            }
                        },
                        lineStyle: {
                            normal: {
                                opacity: 0,
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: color.linearGtoB,
                                shadowBlur: 15,
                                shadowColor: 'rgba(0,0,0,.2)',
                                shadowOffsetX: 0,
                                shadowOffsetY: 5,
                                opacity: .8
                            }
                        },
                    }]
                }]
        })
    }
});
*/




function selectAlarm() {
    $.ajax({
        async: false,
        url: "http://192.168.152.99:8080/sms/Alarm/AlarmData.do",
        type: "GET",
        dataType: "jsonp", // 返回的数据类型，设置为JSONP方式
        jsonp: 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
        jsonpCallback: 're', //设置回调函数名
        success: function (response, status, xhr) {
            var str = "";
            $(response).each(function (i, v) {
                let long = ((new Date().valueOf()- v.beginTime.time)/3600000).toFixed(0);
                let color = "#4788fb";
                if (4>long&&long>2) {
                    color = "#fff129"
                }else if (8>long&&long>4) {
                    color = "#ffc247"
                }else if (24>long&&long>8) {
                    color = "#ff8a2a"
                }else if (long>24) {
                    color = "#ff0011"
                }
                str += '<tr style="color:'+color+';">' +
                    '<th>' + v.workshopName + '</th>' +
                    '<th>' + v.deviceName + '</th>' +
                    '<th>' + v.alarmTypeName + '</th>' +
                    '</tr>'
            })
            $("#bj").html(str)
            $("#num").html(response.length).css("color", "yellow")
            tableScroll('tableId', 540, 10 * 1000, 7);
        }
    });
}

var MyMarhq;
function tableScroll(tableid, hei, speed, len) {
    clearTimeout(MyMarhq);
    $('#' + tableid).parent().find('.tableid_').remove();
    $('#' + tableid).parent().prepend(
        '<table class="tableid_"><thead>' + $('#' + tableid + ' thead').html() + '</thead></table>'
    ).css({
        'position': 'relative',
        'overflow': 'hidden',
        'height': hei + 'px'
    });
    $(".tableid_").find('th').each(function (i) {
        $(this).css('width', $('#' + tableid).find('th:eq(' + i + ')').width());
    });
    $(".tableid_").css({
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'z-index': 9
    });
    $('#' + tableid).css({
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'z-index': 1
    });

    if ($('#' + tableid).find('tbody tr').length > len) {
        /*$('#' + tableid).find('tbody').html($('#' + tableid).find('tbody').html() + $('#' + tableid).find('tbody').html());*/
        $(".tableid_").css('top', 0);
        $('#' + tableid).css('top', 0);
        var tblTop = 0;
        var outerHeight = $('#' + tableid).find('tbody').find("tr").outerHeight();//行高
        function Marqueehq() {
            if (tblTop <= (-outerHeight * $('#' + tableid).find('tbody').find("tr").length + 480)) {
                tblTop = 0;
            } else {
                tblTop -= 480;
            }
            $('#' + tableid).css('margin-top', tblTop + 'px');
            clearTimeout(MyMarhq);
            MyMarhq = setTimeout(function () {
                Marqueehq()
            }, speed);
        }

        MyMarhq = setTimeout(Marqueehq, speed);
    }
}