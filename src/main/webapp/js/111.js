var gauge_value = 66;
var myRate1 = 98;
//中间
var highlight = '#03b7c9';
var center1 = ['50%', '50%'];
var radius1 = ['100%', '20%', '55%'];
var myChart111 = echarts.init(document.getElementById("chart111"));
var myChart112 = echarts.init(document.getElementById("chart112"));
var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 15,
        align: 'center'
    },
    total: {
        color: "#ffc72b",
        fontSize: 20,
        align: 'center',
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 14,
        padding: [10, 0]
    },
    blue: {
        color: '#49dff0',
        fontSize: 14,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
var option = {
    title: {
        x: "center",
        text: '设备OEE',
        y:'77%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: "#fff"
        },
    },
    tooltip: {
        show: true,
    },
    series: [{
        type: 'gauge',
        center: center1, // 默认全局居中
        radius: '80%',
        splitNumber: 5, //刻度数量
        min: 0,
        max: 100,
        startAngle: 225,
        endAngle: -45,
        axisLine: {
            show: true,
            lineStyle: {
                width: 5,
                shadowBlur: 0,
                color: [
                    [1, '#fff']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#fff',
                width: 1
            },
            length: 10,
            splitNumber: 10
        },
        splitLine: {
            show: true,
            length: 20,
            lineStyle: {
                color: '#fff',
            }
        },
        axisLabel: {
            distance: 0,
            textStyle: {
                color: "#fff",
                fontSize: "12",
                // fontWeight:"bold"
            }
        },
        pointer: { //仪表盘指针
            show: 0
        },
        detail: {
            formatter: '{value}%',
            textStyle: {
                color: "#fff",
                fontSize: "16",
                fontWeight: "bold"
            },
            offsetCenter: ["0", "35"]
        },
        data: [{
            name: "",
            value: gauge_value
        }]
    }, {
        name: '剩余电量',
        type: 'gauge',
        startAngle: 225,
        endAngle: -45,
        radius: radius1[2],
        center: center1, // 默认全局居中
        min: 0,
        max: 100,
        axisLine: {
            show: false,
            lineStyle: {
                width: 10,
                shadowBlur: 0,
                color: [
                    [0.2, '#E43F3D'],
                    [0.4, '#E98E2C'],
                    [0.6, '#DDBD4D'],
                    [0.8, '#7CBB55'],
                    [1, '#9CD6CE']
                ]
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            length: 20,
        },
        axisLabel: {
            show: false
        },
        pointer: {
            show: true,
            width: 4
        },
        detail: {
            show: false,
        },
        itemStyle: {
            normal: {
                color: "#e2dfe0",
            }
        },
        data: [{
            name: "",
            value: Math.floor(gauge_value)
        }]
    }]
};
myChart112.setOption(option);

var demoData = [{
    name: '稼动率',
    value: 86,
    unit: '%',
    pos: ['23.5%', '60%'],
     range: [0, 100],
    radius:"75%",
    radius1:"50%",
    startAngle:220,
    endAngle:40
},
    {
        name: '产能效率',
        value: 96,
        unit: '%',
        pos: ['50%', '55%'],
        range: [0, 100],
        radius:"90%",
        radius1:"65%",
        startAngle:220,
        endAngle:-45
    },
    {
        name: '良品率',
        value: 93,
        unit: '%',
        pos: ['75%', '60%'],
        range: [0, 100],
        radius:"75%",
        radius1:"50%",
        startAngle:135,
        endAngle:-45
    }
];

option1 = {
    series: (function() {
        var result = [];
        demoData.forEach(function(item) {
            result.push(
                // 外围刻度
                {
                    type: 'gauge',
                    center: item.pos,
                    radius: item.radius,  // 1行3个
                    splitNumber: item.splitNum || 10,
                    min: item.range[0],
                    max: item.range[1],
                    startAngle: item.startAngle,
                    endAngle: item.endAngle,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, highlight]
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: highlight,
                            width: 1
                        },
                        length: 6,
                        splitNumber: 10
                    },
                    splitLine: {
                        show: true,
                        length: 10,
                        lineStyle: {
                            color: highlight,
                        }
                    },
                    axisLabel: {
                        distance:0,
                        textStyle: {
                            color: highlight,
                            fontSize: '14',
                            fontWeight: 'bold'
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    detail: {
                        show: 0
                    }
                },
                // 内侧指针、数值显示
                {
                    name: item.name,
                    type: 'gauge',
                    center: item.pos,
                    radius: item.radius1,
                    startAngle: item.startAngle,
                    endAngle: item.endAngle,
                    min: item.range[0],
                    max: item.range[1],
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 16,
                            color: [
                                [1, 'rgba(255,255,255,.1)']
                            ]
                        }
                    },
                    axisTick: {
                        show: 0,
                    },
                    splitLine: {
                        show: 0,
                    },
                    axisLabel: {
                        show: 0
                    },
                    pointer: {
                        show: true,
                        length: '105%'
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '100%'],
                        textStyle: {
                            fontSize: 20,
                            color: '#fff'
                        },
                        formatter: [
                            '{value} ' + (item.unit || ''),
                            '{name|' + item.name + '}'
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize: 14,
                                lineHeight: 30,
                                color: '#ddd'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: highlight,
                        }
                    },
                    data: [{
                        value: item.value
                    }]
                }
            );
        });

        return result;
    })()
};
myChart111.setOption(option1);
