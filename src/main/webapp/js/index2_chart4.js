var myChart41 = echarts.init(document.getElementById("chart41"));
var myChart42 = echarts.init(document.getElementById("chart42"));
var myChart43 = echarts.init(document.getElementById("chart43"));
var data43 = [];
var arrayDate = [];
var arrayWorkshop = [];
var arrayQualified = [];
var arrayUnqualified = [];
var arrayUnqualifiedList = [];
var lineData = [];
var dataTab6 = [];
function getQuality() {
    data43 = [];
    $.post("quality/getQualityData.do", {factoryId: factoryId}, function (data) {
        dataTab6 = data;
        $(data).each(function (i, obj) {
            var data = {};
            data.date = getDay(-obj.depositDate + 1, "-");
            var arr = [], zz = {}, jj = {}, tz = {},zh = {};
            zz.workshop = "铸造";
            zz.quantity = obj.castingBad;
            zz.total = obj.castingNum;
            zh.workshop = "综合";
            zh.quantity = obj.comprehensiveBad;
            zh.total = obj.comprehensiveNum;
            jj.workshop = "机加工";
            jj.quantity = obj.machiningBad;
            jj.total = obj.machiningNum;
            tz.workshop = "涂装";
            tz.quantity = obj.coatingBad;
            tz.total = obj.coatingNum;
            arr.push(zz, zh, jj, tz);
            data.unqualified = arr;
            data43.push(data);
        })
    }, "json");
    arrayDate = [];
    arrayWorkshop = [];
    arrayQualified = [];
    arrayUnqualified = [];
    arrayUnqualifiedList = [];
    lineData = [];
    $.each(data43, function (i, v) {
        arrayDate.push(this.date);
        var unqualified = 0;
        var unqualifiedList = [];
        var allTotal = 0;
        $.each(this.unqualified, function (ii, vv) {
            if (arrayWorkshop.indexOf(this.workshop) == -1) arrayWorkshop.push(this.workshop);
            unqualified += this.quantity;
            unqualifiedList.push({name: this.workshop, value: this.quantity});
            allTotal += this.total
        });
        var qualified = allTotal - unqualified;
        arrayQualified.push(qualified);
        arrayUnqualified.push(unqualified);
        arrayUnqualifiedList.push(unqualifiedList);
        lineData.push((qualified * 100 / allTotal).toFixed(2));
    });


    var arraySeries = [];
    var color = ["#ffa800", "#ff5b00", "#00cfff","red"];
    $.each(arrayWorkshop, function (i, v) {
        var arrayData = [];
        $.each(data43, function (ii, vv) {
            var value = 0;
            $.each(this.unqualified, function (iii, vvv) {
                if (this.workshop == v) value = ((this.total - this.quantity) * 100 / this.total).toFixed(2);
            });
            arrayData.push(value);
        });
        arraySeries.push({
            name: v,
            type: "line",
            smooth: true,
            data: arrayData,
            itemStyle: {
                normal: {
                    color: color[i]
                }
            }
        });
    });
    arraySeries.push({
        name: "平均合格率",
        type: "line",
        data: lineData,
        itemStyle: {
            normal: {
                color: 'rgb( 255,255,0)'
            }
        },
        lineStyle: {
            type: 'dashed'
        }
    });
    arrayWorkshop.push("平均合格率");

    option43.legend.data = arrayWorkshop;
    option43.xAxis[0].data = arrayDate;
    option43.series = arraySeries;
    myChart43.setOption(option43);
    ChangeChart(data43.length - 1);
}

function chart41(date, unqualified, qualified) {


    var option = {
        title: [{
            text: date,
            x: "29%",
            y: "42%",
            textStyle: {
                fontWeight: "bold",
                fontSize: 16,
                color: "#ffe599"
            }
        }, {
            text: "产品合格率",
            x: "32%",
            y: "52%",
            textStyle: {
                fontWeight: "bold",
                fontSize: 16,
                color: "#73ffdc"
            }
        }],
        color: ["#d93600", "#008c00"],
        series: [{
            type: "pie",
            radius: ["50%", "80%"],
            label: {
                normal: {
                    position: "inner",
                    formatter: "{b}\r\n{d}%",
                    textStyle: {
                        color: "#efefef",
                        fontWeight: "bold",
                        fontSize: 14
                    },
                },
            },
            labelLine: {
                type: 'dashed',
                normal: {
                    show: false
                },
            },
            data: [
                {value: unqualified, name: "不良"},
                {value: qualified, name: "合格"}
            ]
        }]
    };
    myChart41.on("click", function (event) {
        showModel();
        $("#navhead6").addClass("active");
        $("#detailed6").show();
        tab6();
        try {
            window.external.ToControl("16");
        } catch (e) {

        }
    });
    myChart41.setOption(option);
}

function chart42(date, data) {
    var option = {
        title: [{
            text: date,
            x: "29%",
            y: "42%",
            textStyle: {
                fontWeight: "bold",
                fontSize: 16,
                color: "#ffe599"
            }
        }, {
            text: "不良品占比",
            x: "32%",
            y: "52%",
            textStyle: {
                fontWeight: "bold",
                fontSize: 16,
                color: "#d93600"
            }
        }],
        color: ["#ff2626", "#ff4d4d","#ff5c26", "#ff7a4d", "#ff9673", "#ff9326", "#ffa64d", "#ff6973"],
        series: [{
            type: "pie",
            radius: ["50%", "80%"],
            label: {
                normal: {
                    position: "inner",
                    formatter: "{b}\r\n{c}\r\n{d}%",
                    textStyle: {
                        color: "#efefef",
                        fontWeight: "bold",
                        fontSize: 12
                    },
                },
            },
            labelLine: {
                normal: {
                    show: false
                },
            },
            data: data,
        }]
    };
    myChart42.on("click", function (event) {
        showModel()
        $("#navhead6").addClass("active");
        $("#detailed6").show();
        tab6()
        try {
            window.external.ToControl("16");
        } catch (e) {

        }
    });
    myChart42.setOption(option);
}


var option43 = {
    title: {
        text: "近一周车间合格率与平均合格率",
        left: "6%",
        top: "0%",
        textStyle: {
            color: "#fff"
        }
    },
    grid: {
        left: "10%",
        right: "7%",
        top: "20%",
        bottom: "10%",
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "cross",
            crossStyle: {
                color: "#999"
            }
        }
    },
    legend: {
        itemWidth: 14,
        itemHeight: 5,
        icon: "rect",
        top: "10%",
        data: arrayWorkshop,
        selectedMode: false,
        textStyle: {
            color: "#ff9"
        }
    },
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: "#57617B"
            }
        },
        axisLabel: {
            formatter: function (val) {
                return val.substring(5);
            },
        },
        axisPointer: {
            type: "shadow"
        },
        data: arrayDate
    }],
    yAxis: [{
        type: "value",
        min: function (value) {
            return (value.min - 1).toFixed(0);
        },
        max: function (value) {
            return (value.max + 1).toFixed(0);
        },
        axisLine: {
            lineStyle: {
                color: "#57617B"
            }
        },
        splitLine: {
            lineStyle: {
                color: "#57617B"
            }
        },
        axisLabel: {
            formatter: "{value}%"
        }
    }]
};

myChart43.on("click", function (event) {
    var index = event.dataIndex;
    ChangeChart(index);
    try {
        window.external.ToControl("2" + index);
    } catch (e) {

    }
});

function ChangeChart(index) {
    chart41(arrayDate[index], arrayUnqualified[index], arrayQualified[index]);
    chart42(arrayDate[index], arrayUnqualifiedList[index]);
}

