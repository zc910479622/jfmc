var tBeatsCount = [], realtime = [], str = "", Machinestatusinfo = [], json = [], equipStateData = [];

function getMachinestatusinfo() {
    $.get("tEquipmentInfo/getTEquipmentInfo.do", function (data) {
        Machinestatusinfo = data;
        var leng = parseInt(data.length / 6);
        str = '';
        for (i = 0; i <= (leng); i++) {
            str += '<div class="piclist">';
            if (i == leng) {
                for (j = 0; j < (data.length % 6); j++) {
                    setHtml(i * 6 + j, data[i * 6 + j])
                }
            } else if (i < leng) {
                for (j = 0; j < 6; j++) {
                    setHtml(i * 6 + j, data[i * 6 + j])
                }
            }
            str += '</div>'
        }
        $("#chart81").html(str)
        $($(".piclist")[0]).addClass("active");
        set()

        $(data).each(function (i, v) {
            var myChart811 = echarts.init(document.getElementById("chart81" + i));
            var gantt811 = echarts.init(document.getElementById("gantt" + i));
            option811.title[0].text = v.equipName;
            if (json[i].length > 0) {
                if (json[i][json[i].length - 1].state) {
                    option811.title[0].backgroundColor = "#008c00"
                } else {
                    option811.title[0].backgroundColor = "#d2c622"
                }
            } else {
                option811.title[0].backgroundColor = "#9d9d9d"
            }
            var processTime = 0;
            var allTime = 1
            $(json[i]).each(function (j, k) {
                if (k.endTime == null) {
                    k.endTime = new Date().valueOf()
                }
                if (k.state) {
                    processTime += k.endTime - k.startTime;
                }
                allTime += k.endTime - k.startTime;
            });
            option811.series[5].data = (processTime / allTime * 100).toFixed();
            myChart811.setOption(option811);
            setChart2Data(json[i], gantt811);
        })
    }, "json");
    timing()
}

var timing = function () {
    setTimeout(function () {
        getEquipState();
        // gettBeatsCount();
        set();
        setRunningState();
        selectAlarm();
        setOEETable();
        getRealtime()
        $(json).each(function (i, v) {
            let gantt811 = echarts.getInstanceByDom(document.getElementById("gantt" + i));
            setChart2Data(v, gantt811);
        })
        timing()
    }, 1000 * 60);
}

function setHtml(i) {
    str += '<div id="allBox-' + i + '">' +
        '<div id="chart81' + i + '" class="echart-box" style="float: left"></div>' +
        '<div id="111" style="float:left;width: 100%;height: 40%;">' +
        '<ul class="chart8Ui">' +
        '<li><p id="startUp' + i + '" style="float: left;width:50%;background-color:#64c74b">开机:0</p>' +
        '<p id="shutdown' + i + '" style="float: right;width:50%;background-color: #9d9d9d">关机:0</p></li>' +
        '<li><p style="float: left;">实际产能:0</p></li>' +
        '<li><p id="process' + i + '" style="float: left;background-color:#008c00">加工:0</p>' +
        '<p id="lockout' + i + '" style="float: right;background-color: #ff7500">停工:0</p></li>' +
        '<li><p id="production' + i + '" style="float: left;">生产数:0</p></li>' +
        '<li><p style="float: left;background-color:#f57527">调试:0</p>' +
        '<p style="float: right;background-color: red">故障:0</p></li>' +
        '<li><p id="bad' + i + '" style="float: left;">废品数:0</p></li>' +
        '</ul>' +
        '<div id="gantt' + i + '" style="width: 97.5%;height: 20%"></div>' +
        '</div>' +
        '</div>'
}


/***********生产数据设置**********/
function set() {
    json = [Machinestatusinfo.length];
    $(Machinestatusinfo).each(function (i, v) {
        json[i] = {};
        var completion = 0;
        var badWg = 0;
        var arr = new Array();
        var process = 0;
        var lockout = 0;
        $(equipStateData).each(function (h, value) {
            if (v.equipNo == value.equipCode) {
                var date = new Date(value.startTime);
                var time = new Date();
                if (0 <= new Date().getHours() && new Date().getHours() < 8) {
                    time.setDate(time.getDate() - 1);
                }
                time.setHours(8, 0, 0);
                if (date.valueOf() < time.valueOf()) {
                    value.startTime = time.valueOf();
                } else {
                    value.startTime = date.valueOf();
                }
                var obj = {};
                obj["equipNo"] = value.equipCode;
                obj["endTime"] = value.endTime;
                obj["startTime"] = value.startTime;
                obj["state"] = value.equipState;
                obj["equipName"] = value.equipName;
                arr.push(obj)
                if (value.endTime == null) {
                    value.endTime = new Date().valueOf()
                }
                if (value.equipState) {
                    process += value.endTime - value.startTime;
                } else {
                    lockout += value.endTime - value.startTime;
                }
            }
        });
        json[i] = arr;
        $(tBeatsCount).each(function (j, value) {
            if (v.equipNo == value.equipno) {
                completion += value.count;
                badWg += value.mechanical
            }
        });
        $(realtime).each(function (k, value) {
            if (v.equipNo == value.equipNo) {
                badWg += value.badWg;
            }
        });
        var now = new Date();
        if (now.getHours() < 8) {
            now.setDate(now.getDate() - 1);
            now.setHours(8, 0, 0);
        } else {
            now.setHours(8, 0, 0);
        }

        if (v.equipNo == "322-050") {
            console.log(process)
            console.log(lockout);
        }

        $("#startUp" + i).html("开机:" + ((process / 1000 / 3600) + (lockout / 1000 / 3600)).toFixed(1));
        $("#shutdown" + i).html("关机:" + (Math.abs((new Date().valueOf() - now.valueOf() - process - lockout) / 1000 / 3600).toFixed(1)));
        $("#process" + i).html("加工:" + (process / 1000 / 3600).toFixed(1));
        $("#lockout" + i).html("停工:" + (lockout / 1000 / 3600).toFixed(1));
        $("#production" + i).html("生产数:" + completion);
        $("#bad" + i).html("废品数:" + badWg);
    })
}

var index = 0;

setInterval(function () {
    next();
    let d = new Date();
    if (d.getHours() == 8 && d.getMinutes() == 0 && d.getSeconds() < 10) {
        location.reload();
    }
}, 7500);


function next() {
    let divArr = $(".piclist");
    if (index < (divArr.length - 1)) {
        $(divArr[index]).removeClass("active");
        $(divArr[index]).next().addClass("active");
        index++;
    } else {
        $(divArr[index]).removeClass("active");
        $(divArr[0]).addClass("active");
        index = 0;
    }
}

function gettBeatsCount() {
    $.get("tBeats/gettBeatsCount.do", function (data) {
        tBeatsCount = data;
    }, "json")
}

function getRealtime() {
    $.post("Realtime/getRealtimeData.do", {factoryId: factoryId}, function (data) {
        realtime = data;
    }, "json");
}

function getEquipState() {
    $.get("EquipState/getEquipStateList.do", function (data) {
        equipStateData = data
    }, "json")
}

var myRate1 = 100;
var option811 = {
    title: [{
        x: "center",
        top: 25,
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: "#fff"
        },
        backgroundColor: "#2c58a6",
        borderRadius: 5
    }, {
        x: "5%",
        top: 70,
        text: '产能效率',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: "#fff"
        },
    }, {
        x: "30%",
        top: 60,
        text: '综合利用率',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            color: "#fff"
        },
    }, {
        x: "70%",
        top: 70,
        text: '稼动率',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: "#fff"
        },
    }],
    tooltip: {
        show: true,
    },
    series: [{
        type: 'gauge',
        center: ['50%', '80%'], // 默认全局居中
        radius: '60%',
        splitNumber: 5, //刻度数量
        min: 0,
        max: 100,
        startAngle: 200,
        endAngle: -20,
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                    [1, '#03B7C9']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#03B7C9',
                width: 1
            },
            length: -1,
            splitNumber: 5
        },
        splitLine: {
            show: true,
            length: -2,
            lineStyle: {
                color: '#03B7C9',
            }
        },
        axisLabel: {
            distance: 15,
            textStyle: {
                color: "#03B7C9",
                fontSize: "11"
            }
        },
        pointer: { //仪表盘指针
            show: 0
        },
        detail: {
            show: false
        },
        data: [{
            name: "",
            value: myRate1
        }]
    }, {
        startAngle: 200,
        endAngle: -20,
        type: 'gauge',
        center: ['50%', '80%'], // 默认全局居中
        radius: '55%',
        min: 0,
        max: 100,
        splitNumber: 0,
        axisLine: { // 坐标轴线
            lineStyle: {
                color: [
                    [0.66, '#dddddd'],
                    [1, '#dddddd']
                ], // 属性lineStyle控制线条样式
                width: 4
            }
        },


        axisLabel: { // 坐标轴小标记
            show: false,
            textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                fontSize: 16,
                color: 'rgba(30,144,255,0)',
            }
        },
        splitLine: { // 分隔线
            length: 10, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 0,
                color: '#444'
            }
        },
        pointer: { // 分隔线 指针
            color: '#666666',
            width: 4,
        },
        detail: {
            show: true,
            offsetCenter: [0, '40%'],
            textStyle: {
                fontSize: 16
            }
        },
        itemStyle: {
            normal: {
                color: "#03B7C9",

            }
        },
        data: [{
            value: 93.4
        }]

    }, {
        type: 'gauge',
        center: ['20%', '80%'], // 默认全局居中
        radius: '45%',
        splitNumber: 5, //刻度数量
        min: 0,
        max: 100,
        endAngle: 45,
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                    [1, '#03B7C9']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#03B7C9',
                width: 1
            },
            length: -1,
        },
        splitLine: {
            show: true,
            length: -2,
            lineStyle: {
                color: '#03B7C9',
            }
        },
        axisLabel: {
            show: false,
            distance: 10,
            textStyle: {
                color: "#03B7C9",
                fontSize: "15",
                fontWeight: "bold"
            }
        },
        pointer: { //仪表盘指针
            show: 0
        },
        detail: {
            show: false
        },
        data: [{
            name: "",
            value: myRate1
        }]
    }, {
        type: 'gauge',
        center: ['20%', '80%'], // 默认全局居中
        radius: '40%',
        min: 0,
        max: 100,
        endAngle: 45,
        splitNumber: 0,
        axisLine: { // 坐标轴线
            lineStyle: {
                color: [
                    [0.66, '#dddddd'],
                    [1, '#dddddd']
                ], // 属性lineStyle控制线条样式
                width: 4
            }
        },


        axisLabel: { // 坐标轴小标记
            show: false,
            textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                fontSize: 16,
                color: 'rgba(30,144,255,0)',
            }
        },
        splitLine: { // 分隔线
            length: 10, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 0,
                color: '#444'
            }
        },
        pointer: { // 分隔线 指针
            color: '#666666',
            width: 3,
        },
        detail: {
            show: true,
            offsetCenter: [0, '40%'],
            textStyle: {
                fontSize: 16
            }
        },
        itemStyle: {
            normal: {
                color: "#03B7C9",

            }
        },
        data: [{
            value: 95.7
        }]

    }, {
        type: 'gauge',
        center: ['80%', '80%'], // 默认全局居中
        radius: '45%',
        splitNumber: 5, //刻度数量
        min: 0,
        max: 100,
        startAngle: 140,
        endAngle: -45,
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                    [1, '#03B7C9']
                ]
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            length: -2,
            lineStyle: {
                color: '#03B7C9',
            }
        },
        axisLabel: {
            show: false,
            distance: 10,
            textStyle: {
                color: "#03B7C9",
                fontSize: "15",
                fontWeight: "bold"
            }
        },
        pointer: { //仪表盘指针
            show: 0
        },
        detail: {
            show: false
        },
        data: [{
            name: "",
            value: myRate1
        }]
    }, {
        type: 'gauge',
        center: ['80%', '80%'], // 默认全局居中
        radius: '40%',
        min: 0,
        max: 100,
        startAngle: 140,
        endAngle: -45,
        splitNumber: 0,
        axisLine: { // 坐标轴线
            lineStyle: {
                color: [
                    [0.66, '#dddddd'],
                    [1, '#dddddd']
                ], // 属性lineStyle控制线条样式
                width: 4
            }
        },
        axisLabel: { // 坐标轴小标记
            textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                fontSize: 16,
                color: 'rgba(30,144,255,0)',
            }
        },
        splitLine: { // 分隔线
            length: 10, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 0,
                color: '#444'
            }
        },
        pointer: { // 分隔线 指针
            color: '#666666',
            width: 3,
        },
        detail: {
            show: true,
            offsetCenter: [0, '40%'],
            textStyle: {
                fontSize: 16
            }
        },
        itemStyle: {
            normal: {
                color: "#03B7C9",

            }
        },
        data: [{
            value: 91.6
        }]
    }]
};
getEquipState();
// gettBeatsCount();
getRealtime();
getMachinestatusinfo();
setRunningState();
setOEETable();