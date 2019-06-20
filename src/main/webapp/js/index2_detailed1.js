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
            title: "产品编号",
            field: "id",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        }, {
            title: "客户名称",
            field: "custName",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "需求数量",
            field: "num",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "已完成数",
            field: "goodNum",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "交货日期",
            field: "completedNum",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "完成率",
            field:"finalStorageTime",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        }]
    });
}