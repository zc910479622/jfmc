var arr = []

function setOEETable() {
    arr = []
    $(json).each(function (i, v) {
        var sound = 0;
        var lockoutTime = 0;
        var obj = new Object();
        $(v).each(function (j, value) {
            if (!value.state) {
                sound++;
                if (value.endTime == null) {
                    value.endTime = new Date().valueOf()
                }
                lockoutTime += value.endTime - value.startTime;
            }
            obj["equipName"] = value.equipName;
            obj["equipNo"] = value.equipNo;
            obj["sound"] = sound;
            obj["lockoutTime"] = (lockoutTime / 1000 / 3600).toFixed(1);
        });
        arr.push(obj)
    });
    arr.sort(function (a, b) {
        if (b.sound == a.sound){
            return b.lockoutTime -a.lockoutTime
        } else {
            return b.sound - a.sound;
        }
    });
    var string = ""
    for (i = 0; i < 5; i++) {
        if (Object.keys(arr[i]).length > 0) {
            string += '<tr>' +
                '<td>' + arr[i].equipName + '</td>' +
                '<td>' + arr[i].sound + '</td>' +
                '<td>' + arr[i].lockoutTime + 'h</td>' +
                '</tr>'
        }
    }
    $("#chart113 tbody").html(string);
}


function setRunningState() {
    let now = new Date();
    if (now.getHours() < 8) {
        now.setDate(now.getDate() - 1);
        now.setHours(8, 0, 0);
    } else {
        now.setHours(8, 0, 0);
    }
    let arr1 = [(new Date().valueOf() - now.valueOf()) * json.length, 0, 0, 0, 0];
    let arr2 = [json.length, 0, 0, 0, 0];
    $(json).each(function (i, v) {
        $(v).each(function (j, value) {
            if (value.endTime == null) {
                value.endTime = new Date().valueOf();
                switch (value.state) {
                    case 0:
                        arr2[1]++;
                        arr2[0]--;
                        break;
                    case 1:
                        arr2[2]++;
                        arr2[0]--;
                        break
                }
            }
            switch (value.state) {
                case 0:
                    arr1[1] += value.endTime - value.startTime;
                    arr1[0] -= value.endTime - value.startTime;
                    break;
                case 1:
                    arr1[2] += value.endTime - value.startTime;
                    arr1[0] -= value.endTime - value.startTime;
                    break
            }
        })
    });
    var chart711 = [
        {
            value: arr2[0],
            name: '关机'
        },
        {
            value: arr2[1],
            name: '停工'
        },
        {
            value: arr2[3],
            name: '调试'
        },
        {
            value: arr2[4],
            name: '故障'
        },{
        value: arr2[2],
        name: '加工',
    }]
    var chart712 = [{
        value: arr1[2],
        name: '加工',
    },
        {
            value: arr1[1],
            name: '停工'
        },
        {
            value: arr1[3],
            name: '调试'
        },
        {
            value: arr1[4],
            name: '故障'
        },
        {
            value: arr1[0],
            name: '关机'
        }
    ];

    option711 = {
        title: {
            text: '设备数',
            left: 'center',
            top: '50%',
            padding: [10, 0],
            textStyle: {
                color: '#fff',
                fontSize: 16,
                align: 'center'
            }
        },
        legend: {
            selectedMode: false,
            formatter: function (name) {
                var total = 0;
                var averagePercent;
                chart711.forEach(function (value, index, array) {
                    total += value.value;
                });
                return '{total|' + total + '}';
            },
            data: [chart711[0].name],
            left: 'center',
            top: '40%',
            icon: 'none',
            align: 'center',
            textStyle: {
                color: "#fff",
                fontSize: 16,
                rich: rich
            },
        },
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['35%', '55%'],
            color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67', '#fc1121'],

            label: {
                normal: {
                    formatter: function (params, ticket, callback) {
                        var total = 0; //考生总数量
                        var percent = 0; //考生占比
                        chart711.forEach(function (value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                    },
                    rich: rich,
                    textStyle: {
                        color: '#777777',
                        fontWeight: 'bold',
                        fontSize: 14
                    }
                }
            },
            data: chart711
        }]
    };

    myChart711.setOption(option711, true);
    option712 = {
        title: {
            text: '当天运行\n\n时间占比',
            left: 'center',
            top: '40%',
            padding: [10, 0],
            textStyle: {
                color: '#fff',
                fontSize: 16,
                align: 'center'
            }
        },
        series: [{
            type: 'pie',
            radius: ['35%', '55%'],
            center: ['50%', '50%'],
            color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
            data: [],
            labelLine: {
                normal: {
                    show: false,
                }
            },
            label: {
                normal: {
                    // formatter: '{b|{b}}\n{hr|}\n{c|{c}}{d|{d}%}',
                    //formatter: '{d|{d}%}\n{hr|}\n{b|{b}}',
                    formatter: function (params, ticket, callback) {
                        var total = 0; //考生总数量
                        var percent = 0;
                        var h = (params.value / 1000 / 3600).toFixed(1) + "h"
                        chart712.forEach(function (value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{white|' + params.name + '}\n{hr|}\n{yellow|' + h + '}\n{blue|' + percent + '%}';
                    },
                    rich: rich
                },

            },

        }]
    };
    option712.series[0].data = chart712
    myChart712.setOption(option712, true);
}
