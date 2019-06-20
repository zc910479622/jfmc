var data21 = [];

var myChart21 = echarts.init(document.getElementById("chart21"));
var total = 0;
var abnormal = 0;
var arrayLegend = [];
var arrayData = [];
function getEquipmentData() {
    $.post("equipment/getEquipmentData.do", {factoryId: factoryId}, function (data) {
        data21 = data;
    }, "json");
    total = data21.total;
    abnormal = 0;
    arrayLegend = [];
    $.each(data21.abnormal, function (index, value) {
        abnormal += this.value;
        arrayLegend.push(this.name);
    });
    arrayData = data21.abnormal;
    arrayData.push({
        name: "正常",
        value: total - abnormal,
        itemStyle: {
            color: "transparent"
        },
        label: {
            show: false
        }
    });
    option21.series[0].data[0].value = abnormal;
    option21.series[0].data[1].value = total - abnormal;
    option21.series[1].data = arrayData;
    option21.legend.data = arrayLegend;
    myChart21.setOption(option21);
}

var option21 = {
    legend: {
        itemWidth: 14,
        itemHeight: 5,
        bottom: "2%",
        selectedMode: false,
        textStyle: {
            color: "#fff"
        },
        data: arrayLegend
    },
    series: [{
        name: "设备",
        center: ["45%", "58%"],
        type: "pie",
        animation: false,
        radius: ["35%", "60%"],
        label: {
            normal: {
                position: "inside",
                formatter: "{b}\r\n{d}%\r\n{c}台",
                color: "#fff"
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        color: ["#4A6DBF", "#15B3BC"],
        data: [{name: "异常", value: abnormal}, {name: "正常", value: total - abnormal}]
    }, {
        name: "异常设备",
        center: ["45%", "58%"],
        type: "pie",
        radius: ["60%", "75%"],
        animation: false,
        label: {
            normal: {
                length:10,
                position: "outside",
                formatter: "{b}\r\n{d}%\r\n{c}台",
                color: "#909090"
            }
        },
        data: arrayData
    }]
};
myChart21.on("click", function (event) {
    showModel();
    $("#navhead2").addClass("active");
    $("#detailed2").show();
    tab2();
    try {
        window.external.ToControl("12");
    } catch (e) {

    }
});