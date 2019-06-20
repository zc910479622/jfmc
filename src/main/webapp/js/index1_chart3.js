var dataTab3 = [];
var myChart32 = echarts.init(document.getElementById("chart32"));
var arrayDate = [];
var arrayPlannedTotal = [];
var arrayQualifiedTotal = [];
var arrayCompletionRate = [];

function getPlanData() {
    dataTab3 = [];
    arrayDate = [];
    average = 0;
    arrayPlannedTotal = [];
    arrayQualifiedTotal = [];
    arrayCompletionRate = [];
    $.post("planinfo/getPlaninfoData.do", {factoryId: factoryId}, function (data) {
        $(data).each(function (i, obj) {
            arrayDate.push(timestampTime(obj.date));
            if (factoryId == 1){
                arrayPlannedTotal.push(5300);
            } else {
                arrayPlannedTotal.push(12919);
            }
            arrayQualifiedTotal.push(obj.realproduction);
            $(JSON.parse(obj.jsondata)).each(function (index, value) {
                dataTab3.push(value)
            })
        });
        $.each(arrayDate, function (index, value) {
            arrayCompletionRate.push((arrayQualifiedTotal[index] * 100 / arrayPlannedTotal[index]).toFixed(2))
        });
    }, "json");
    myChart32.setOption({
        xAxis: [{
            data: arrayDate
        }, {
            data: arrayDate
        }],
        series: [{
            data: arrayPlannedTotal
        }, {
            data: arrayQualifiedTotal
        }, {
            data: arrayCompletionRate
        }]
    });
}

var option32 = {
    title: {
        text: "近十日生产计划完成情况",
        top: "3%",
        left: "6%",
        textStyle: {
            color: "#FFF"
        }
    },
    grid: {
        left: "2%",
        right: "2%",
        top: "16%",
        bottom: "5%",
        containLabel: true
    },
    tooltip: {
        trigger: "axis",
        formatter: function (params) {
            var txt = params[0].name + "<br/>";
            txt += params[2].marker + params[2].seriesName + "：" + params[2].value + "<br/>";
            txt += params[0].marker + params[0].seriesName + "：" + params[0].value + "<br/>";
            txt += params[1].marker + params[1].seriesName + "：" + params[1].value + "%<br/>";
            return txt;
        }
    },
    calculable: true,
    xAxis: [{
        type: "category",
        axisLabel: {
            textStyle: {
                color: "#FFF"
            },
            formatter: function (val) {
                return val.substring(5);
            }
        },
        axisPointer: {
            type: "shadow"
        },
        data: arrayDate
    }, {
        type: "category",
        axisLabel: {
            show: false
        },
        data: arrayDate
    }],
    yAxis: [{
        type: "value",
        axisLabel: {
            textStyle: {
                color: "#FFF"
            }
        },
        splitLine: {
            show: false
        }
    }, {
        type: "value",
        min: 10,
        interval: 20,
        axisLabel: {
            formatter: "{value}%",
            textStyle: {
                color: "#FFF"
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: "计划生产量",
        z:99,
        xAxisIndex: 1,
        yAxisIndex: 0,
        type: "bar",
        data: arrayPlannedTotal,
        itemStyle: {
            normal: {
                color: "rgba(39,122,206,0.3)",
            }
        },
        barWidth: "60%"
    }, {
        name: "实际生产量",
        yAxisIndex: 0,
        type: "bar",
        data: arrayQualifiedTotal,
        itemStyle: {
            normal: {
                color: function (params) {
                    var colorList = [
                        "#C1232B", "#B5C334", "#FCCE10", "#E87C25", "#27727B",
                        "#FE8463", "#9BCA63", "#C1232B", "#B5C334", "#FCCE10",
                        "#E87C25", "#27727B", "#FE8463", "#9BCA63", "#C1232B"
                    ];
                    return colorList[params.dataIndex]
                },
                label: {
                    show: true,
                    position: "insideTop",
                    formatter: "{c}",
                    color:"#000"
                }
            }
        },
        barWidth: "60%"
    }, {
        name: "计划完成率",
        yAxisIndex: 1,
        type: "line",
        data: arrayCompletionRate,
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        itemStyle: {
            normal: {
                color: "rgb(137,189,27)",
                borderColor: "rgba(137,189,2,0.27)",
                borderWidth: 8
            }
        }
    }]
};
myChart32.on("click", function (event) {
    showModel();
    $("#navhead3").addClass("active");
    $("#detailed3").show();
    tab3();
    try {
        window.external.ToControl("13");
    } catch (e) {
    }
});


myChart32.setOption(option32);