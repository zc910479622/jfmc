function setTable8() {
    $("#tab8").bootstrapTable({
        classes:"table table-striped table-no-bordered table-condensed",
        data:dataTab8,
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
            title: "产品编号",
            field: "productNO",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "业务单号",
            field: "scNO",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "调度指令项",
            field: "scITM",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "库存数",
            field:"qty",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        }]
    });
}