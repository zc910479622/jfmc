var dataTab1 = null;
var arrdata = [];
var myChart11 = echarts.init(document.getElementById("chart11"));

function getOrderData() {
    $.post("order/getOrderData.do", {factoryId: factoryId}, function (data) {
        $(data).each(function (i, obj) {
            arrdata.push(obj.orderProductionPlan);
            arrdata.push(obj.orderProductionFinish);
            dataTab1 = JSON.parse(obj.json)
        });
    }, "json");

    myChart11.setOption({
        series: [{
            name: "Line 1",
            type: "pie",
            clockWise: false,
            center: centerStyle,
            radius: [95, 110],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [{
                value: 0,
                name: "",
                itemStyle: placeHolderStyle
            }, {
                value: arrdata[0] - arrdata[1],
                name: "产品未完成",
                label: labelShow,
                labelLine: {
                    length: 15,
                    length2: 30
                }
            }, {
                value: arrdata[1],
                name: "",
                itemStyle: placeHolderStyle
            }]
        }, {
            name: "Line 2",
            type: "pie",
            clockWise: false,
            hoverAnimation: false,
            center: centerStyle,
            radius: [110, 125],
            itemStyle: dataStyle,
            data: [{
                value: arrdata[0] - arrdata[1],
                name: "",
                itemStyle: placeHolderStyle
            }, {
                value: arrdata[1],
                name: "产品入库数",
                label: labelShow,
                labelLine: {
                    length: 20,
                    length2: 5
                }
            }, {
                value: 0,
                name: "",
                itemStyle: placeHolderStyle
            }]
        }, {
            type: "bar",
            data: [0],
            coordinateSystem: "polar",
            name: "06a",
            stack: "a"
        }, {
            name: "订单产品总数",
            type: "gauge",
            center: ["34%", "80%"],
            radius: "50%",
            pointer: {
                show: false,
                width: 0
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            startAngle: 0,
            endAngle: 0,
            splitLine: {
                show: false
            },
            title: {
                offsetCenter: ["80", "-130%"],
                textStyle: {
                    color: "#FFFFFF",
                    fontWeight: "bolder",
                    fontSize: 16
                }
            },
            detail: {
                formatter: "{value}",
                offsetCenter: ["80", "-110%"],
                textStyle: {
                    fontSize: 20,
                    color: "#FFFFFF",
                    fontWeight: "bolder"
                }
            },
            data: [{
                value: arrdata[0],
                name: "订单产品总数\n"
            }]
        }]
    });
}

var dataStyle = {
    normal: {
        label: {
            show: true,
            color: "#fff",
            fontSize: 18
        },
        labelLine: {
            length: 40,
            length2: 40
        }
    }
};

var labelShow = {
    show: true,
    color: "#fff",
    fontSize: 15,
    formatter: [
        "{d| {d}% }",
        "{b| {b} }",
        "{c| {c} }"
    ].join("\n"),
    rich: {
        d: {
            fontSize: 16,
            color: "#fff"
        },
        b: {
            fontSize: 18,
            color: "#fff"
        },
        c: {
            fontSize: 18,
            color: "#fff"
        }
    }
};

var placeHolderStyle = {
    normal: {
        color: "rgba(0,0,0,0)",
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: "rgba(0,0,0,0)"
    },
};

var centerStyle = ["50%", "50%"];

var option11 = {
    legend: {
        itemWidth: 14,
        itemHeight: 5,
        bottom: "2%",
        selectedMode: false,
        textStyle: {
            color: "#fff"
        },
        data: ["产品未完成", "产品入库数"]
    },
    color: ["#2078d1", "#8a00ec", "#ff00f3", "#fb0065", "#ff941b"],
    angleAxis: {
        type: "category",
        z: 10,
        axisLine: {
            color: "#fff",
            lineStyle: {
                width: 3,
                color: "#fff"
            }
        }
    },
    radiusAxis: {
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            color: "#fff"
        },
        axisLine: {
            show: false,
            color: "#fff",
            lineStyle: {
                color: "#fff"
            }
        },
        splitLine: {
            color: "#000",
            lineStyle: {
                type: "dotted",
                color: "rgba(170,170,170,.5)"
            }
        }
    },
    polar: {
        center: centerStyle,
        radius: 130
    },
    series: [{
        name: "Line 1",
        type: "pie",
        clockWise: false,
        center: centerStyle,
        radius: [95, 110],
        itemStyle: dataStyle,
        hoverAnimation: false,
        data: [{
            value: 0,
            name: "",
            itemStyle: placeHolderStyle
        }, {
            value: arrdata[0] - arrdata[1],
            name: "产品未完成",
            label: labelShow,
            labelLine: {
                length: 15,
                length2: 30
            }
        }, {
            value: arrdata[1],
            name: "",
            itemStyle: placeHolderStyle
        }]
    }, {
        name: "Line 2",
        type: "pie",
        clockWise: false,
        hoverAnimation: false,
        center: centerStyle,
        radius: [110, 125],
        itemStyle: dataStyle,
        data: [{
            value: arrdata[0] - arrdata[1],
            name: "",
            itemStyle: placeHolderStyle
        }, {
            value: arrdata[1],
            name: "产品入库数",
            label: labelShow,
            labelLine: {
                length: 20,
                length2: 5
            }
        }, {
            value: 0,
            name: "",
            itemStyle: placeHolderStyle
        }]
    }, {
        type: "bar",
        data: [0],
        coordinateSystem: "polar",
        name: "06a",
        stack: "a"
    }, {
        name: "订单产品总数",
        type: "gauge",
        center: ["34%", "80%"],
        radius: "50%",
        pointer: {
            show: false,
            width: 0
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        startAngle: 0,
        endAngle: 0,
        splitLine: {
            show: false
        },
        title: {
            offsetCenter: ["80", "-130%"],
            textStyle: {
                color: "#FFFFFF",
                fontWeight: "bolder",
                fontSize: 16
            }
        },
        detail: {
            formatter: "{value}",
            offsetCenter: ["80", "-110%"],
            textStyle: {
                fontSize: 20,
                color: "#FFFFFF",
                fontWeight: "bolder"
            }
        },
        data: [{
            value: arrdata[0],
            name: "订单产品总数\n"
        }]
    }]
};
myChart11.on("click", function (event) {
    showModel();
    $("#navhead1").addClass("active");
    $("#detailed1").show();
    tab1();
    try {
        window.external.ToControl("11");
    } catch (e) {

    }
});

myChart11.setOption(option11);