var data61 = [];
var dataTab5 = [];
function getRealtimeData() {
    $.post("Realtime/getRealtimeData.do", {factoryId: factoryId}, function (data) {
        data61 = data;
        dataTab5 = data;
    }, "json");

    var a = 0;
    var leng = parseInt(data61.length / 4);
    var str = '';
    var idArr = [];
    for (i = 0; i < (leng); i++) {
        str += '<div class="piclist">';
        if (i == leng) {
            for (j = 0; j < (data61.length % 4); j++) {
                setHtml()
            }
        } else if (i < leng) {
            for (j = 0; j < 4; j++) {
                setHtml()
            }
        }
        str += '</div>'
    }
    $(".picbox").html(str);
    $($(".piclist")[0]).addClass("active");
    for (i = 0; i < idArr.length; i++) {
        chart61(idArr[i], data61[i].equipState, data61[i].goodProduction)
    }

    function setHtml() {
        var state = 'state' + (data61[a].equipState ? 0 : 1);
        var id = 'chart61' + (a + 1);
        str += '<div class="goodlist">' +
            '<div class="pics">' +
            '<div class="' + state + '">' +
            '<p>' + data61[a].equipName + '</p>' +
            '<p>当天生产数量:' + data61[a].production + '</p>' +
            '</div>' +
            '</div>' +
            '<div class="ss" id="' + id + '">' +
            '</div>' +
            '</div>';
        a++;
        idArr.push(id);
    }
}

function chart61(id, operation_state, turnDown) {
    var myChart61 = echarts.getInstanceByDom(document.getElementById(id));
    if (myChart61 == undefined){
        myChart61 = echarts.init(document.getElementById(id))
    }
    var color = [];
    if (operation_state == 1) {
        color = [{offset: 0, color: '#436e00'}, {offset: 1, color: '#43ff00'}]
    } else if (operation_state == 0) {
        color = [{offset: 0, color: '#ff6e00'}, {offset: 1, color: '#ffff00'}]
    }
    myChart61.clear();
    option61.series[0].itemStyle.normal.color.colorStops = color;
    option61.series[0].data[0].label.normal.formatter = turnDown + '\n下转数';
    myChart61.setOption(option61);


    $(".picbox").click(function () {
        showModel();
        $("#navhead5").addClass("active");
        $("#detailed5").show();
        tab5();
        try {
            window.external.ToControl("15" + value);
        } catch (e) {

        }
    });
}

var option61 = {
    series: [{
        name: '访问来源',
        type: 'pie',
        center: ["50%", "37.5%"], //圆心坐标
        radius: ['55%', '72.5%'], //设置内外环半径
        itemStyle: {
            normal: {
                label: {
                    show: false //不显示指引线
                },
                color: { //渐变颜色处理
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: "",
                    globalCoord: false // 缺省为 false
                }
            }
        },
        data: [{
            value: 1, //随便给一个数字即可
            name: '下转数',
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: "", //显示中间的数字
                    color: "#FFF",
                    fontSize: 16
                }
            }
        }]
    }]
};