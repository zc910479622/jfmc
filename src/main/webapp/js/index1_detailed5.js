/*
function getmetnoselect(value) {
    var str = "";
    $(data61).each(function(i,obj){
        str+="<option value='"+i+"'>"+obj.equipName+"</option>";
    });
    $("#detailedSelect").empty();
    $("#detailedSelect").append(str);
    $("#detailedSelect").selectpicker("refresh");
    $("#detailedSelect").selectpicker("val",value)
}

function tab5(){

    var arrayDate=[];
    var arrayMachine=new Array();
    var arrayArtificial=new Array();
	$.post("tBeats/gettBeatsList.do",{equipname:$("#detailedSelect option:selected").text()},function (data) {
		$(data).each(function (i,obj) {
			arrayDate.push(i);
			arrayMachine.push(obj.mechanicalbeats);
			arrayArtificial.push(obj.personbeats);
        })
    },"json");
	
	var myChart = echarts.init(document.getElementById('detailed51'));
	option = {
	    "title": {
	        "text": "节拍统计", 
	        "left": "50",
	       textStyle:{
	       	color:"white"
	       }
	    },
	    "tooltip": {
	        "trigger": "axis", 
	        "axisPointer": {
	            "type": "shadow"
	        },
	    }, 
	    "grid": {
	        "borderWidth": 0, 
	        "y2": 120
	    }, 
	    "legend": {
	        data: ['机器节拍', '人工节拍'],
	        "x": "center",
	        textStyle:{
	        	color:"white"
	        }
	    }, 
	    "calculable": true, 
	    "xAxis": [
	        {
	            "type": "category", 
	            "splitLine": {
	                "show": false
	            }, 
	            "axisTick": {
	                "show": false
	            }, 
	            "splitArea": {
	                "show": false
	            }, 
	            "axisLabel": {
	                "interval": 0, 
	                "show": true, 
	                "splitNumber": 15, 
	                "textStyle": {
	                    "fontFamily": "微软雅黑", 
	                    "fontSize": 12,
	                    "color":"white"
	                }
	            }, 
	            "data": arrayDate,
	        }
	    ], 
	    "yAxis": [
	        {
	            "type": "value", 
	            "splitLine": {
	                "show": false
	            }, 
	            "axisLine": {
	                "show": false
	            }, 
	            "axisTick": {
	                "show": false
	            }, 
	            "splitArea": {
	                "show": false
	            },
	            axisLabel: {
		            formatter: '{value}秒',
	                "color":"white"
		        }
	        }
	    ], 
	    "dataZoom": [
	        {
	            "show": true, 
	            "height": 30, 
	            "xAxisIndex": [
	                0
	            ], 
	            bottom:40,
	            "start": 0, 
	            "end": 100
	        }, 
	        {
	            "type": "inside", 
	            "show": true, 
	            "height": 15, 
	            "xAxisIndex": [
	                0
	            ], 
	            "start": 1, 
	            "end": 35
	        }
	    ], 
	    "series": [
	        {
	            "name": "机器节拍", 
	            "type": "bar", 
	            "stack": "总量", 
	            "barGap": "10%", 
	            "itemStyle": {
	                "normal": {
	                    "barBorderRadius": 0, 
	                    "color": "#72b201", 
	                    "label": {
	                        "show": true, 
	                        "textStyle": {
	                            "color": "rgba(0,0,0,1)"
	                        }, 
	                        "position": "insideTop",
	                        formatter : function(p) {
		                                                return p.value > 0 ? (p.value ): '';
		                                            }
	                    }
	                }
	            }, 
	            "data": arrayMachine, 
	        }, 
	        {
	            "name": "人工节拍", 
	            "type": "bar", 
	            "stack": "总量", 
	            "itemStyle": {
	                "normal": {
	                    "color": "#08a9f2", 
	                    "barBorderRadius": 0, 
	                    "label": {
	                        "show": true, 
	                        "position": "top",
	                        formatter : function(p) {
		                                                return p.value > 0 ? (p.value + ''): '';
		                                            }
	                    }
	                }
	            }, 
	            "data": arrayArtificial
	        }
	    ]
	};
	myChart.setOption(option,true);
}

$("#detailedSelect").on("changed.bs.select", function (e) {
    tab5()
});*/


function tab5() {
    setTable5()
}

function setTable5() {
    $("#tab5").bootstrapTable({
        classes:"table table-striped table-no-bordered table-condensed",
        data:dataTab5,
        pagination: true,
        pageSize: 13,
        singleSelect: true,
        striped: false,
        undefinedText: "",
        search: false,
        height:780,
        showColumns: false,
        showRefresh: false,
        showToggle: false,
        cache: false,
        clickToSelect: false,
        uniqueId: "id",
        columns: [{
            title: "机台号",
            field: "equipNo",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "机台名称",
            field: "equipName",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "当班生产量",
            field: "production",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "不合格数量",
            field:"badWg",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "下转良品数",
            field:"goodProduction",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "铸造机状态",
            field:"equipState",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
			formatter:function (value,row,index) {
				if (value){
					return "加工"
				} else {
					return "停工"
				}
            }
        }]
    });
}
