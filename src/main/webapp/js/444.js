var chart2Data = [];
var startTime = "";
var endTime = "";

setDefultTime();

function setDefultTime() {
    var now = new Date();
    startTime = now.getFullYear() + "-" + ((now.getMonth() + 1).toString().length == 1 ? ("0" + (now.getMonth() + 1)) : (now.getMonth() + 1)) + "-" + (now.getDate().toString().length == 1 ? ("0" + (now.getDate())) : (now.getDate())) + " 08:00";
    now.setDate(now.getDate() + 1);
    endTime = now.getFullYear() + "-" + ((now.getMonth() + 1).toString().length == 1 ? ("0" + (now.getMonth() + 1)) : (now.getMonth() + 1)) + "-" + (now.getDate().toString().length == 1 ? ("0" + (now.getDate())) : (now.getDate())) + " 08:00";
}

function setChart2Data(json, mychart) {
    chart2Data = [];
    $(json).each(function (i, v) {
        if (v.state) {
            chart2Data.push({
                name: '开始时间',
                type: 'bar',
                barWidth: '400%',
                stack: 'test',
                itemStyle: {
                    normal: {
                        color: "green",
                    }
                },
                data: [
                    new Date(v.startTime)
                ]
            });
            var now = new Date();
            var alarmEndTime = now.getFullYear() + "-" + ((now.getMonth() + 1).toString().length == 1 ? ("0" + (now.getMonth() + 1)) : (now.getMonth() + 1)) + "-" + now.getDate() + " " + now.getHours() + ":00";
            chart2Data.push({
                name: '结束时间',
                type: 'bar',
                stack: 'test',
                itemStyle: {
                    normal: {
                        color: "green",
                    }
                },
                data: [
                    new Date(v.endTime == null ? now : v.endTime)
                ]
            })
        } else {
            chart2Data.push({
                name: '开始时间',
                type: 'bar',
                barWidth: '400%',
                stack: 'test',
                itemStyle: {
                    normal: {
                        color: 'yellow'
                    }
                },
                data: [
                    new Date(v.startTime)
                ]
            })
            var now = new Date()
            var alarmEndTime = now.getFullYear() + "-" + ((now.getMonth() + 1).toString().length == 1 ? ("0" + (now.getMonth() + 1)) : (now.getMonth() + 1)) + "-" + now.getDate() + " " + now.getHours() + ":00";
            chart2Data.push({
                name: '结束时间',
                type: 'bar',
                stack: 'test',
                itemStyle: {
                    normal: {
                        color: 'yellow'
                    }
                },
                data: [
                    new Date(v.endTime == null ? now : v.endTime)
                ]
            })
        }
    });
    setChart2(mychart);
}

function setChart2(mychart) {
    option817 = {
        title: {
            show: false,
        },
        legend: {
            data: ['计划实施时间', '实际实施时间']
        },
        grid: {
            left: '0',
            right: '0%',
            bottom: '-200%',
            top: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'time',
            min: startTime,
            max: endTime,
            show: false,
        },
        yAxis: {
            show: false,
            data: [""]
        },
        series: chart2Data
    };
    mychart.setOption(option817)
}

function timestampTime(str) {
    if (str != null) {
        var date = new Date(str);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + " ";
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y + M + D + h + m + s;
    } else {
        return null
    }
}