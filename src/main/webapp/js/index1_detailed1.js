function tab1() {
        setTable1()
}

function setTable1() {
    $("#tab1").bootstrapTable({
        classes:"table table-striped table-no-bordered table-condensed",
        data:dataTab1,
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
        uniqueId: "orderId",
        columns: [{
            title: "订单编号",
            field: "id",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        }, {
            title: "订单日期",
            field: "deliveryDate",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
            formatter:function (value, row, index) {
                if(value==null||value=="")return "-";
                var arr = value.split(" ")[0].split("/");
                return arr[0]+"-"+(arr[1]<10?+"0"+arr[1]:arr[1])+"-"+(arr[2]<10?+"0"+arr[2]:arr[2])
            }
        },{
            title: "客户名称",
            field: "custname",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "订单计划数量",
            field: "num",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "已入库数",
            field: "completedNum",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "最后入库时间",
            field:"finalStorageTime",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
            formatter:function (value, row, index) {
                if(value==null||value==""){
                    return "-"
                }
                var arr = value.split(" ")[0].split("/");
                return arr[0]+"-"+(arr[1]<10?+"0"+arr[1]:arr[1])+"-"+(arr[2]<10?+"0"+arr[2]:arr[2])
            }
        }]
    });
}