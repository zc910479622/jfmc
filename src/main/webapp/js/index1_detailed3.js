function tab3() {
            setTable3()
}

function setTable3() {
    $("#tab3").bootstrapTable({
        classes:"table table-striped table-no-bordered table-condensed",
        data:dataTab3,
        pagination: true,
        pageSize: 10,
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
        uniqueId: "day_plan_id",
        columns: [{
            title: "日期",
            field: "day",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        }, {
            title: "生产计划单",
            field: "plan_order_no",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "产品型号",
            field: "product_model",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "计划产量",
            field: "target",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "生产订单编号",
            field: "sc_order_no",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "生产订单项",
            field: "sc_order_sum",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "生产订单量",
            field: "sc_order_num",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "白班产量",
            field: "morning",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "中班产量",
            field:"noon",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "夜班产量",
            field:"evening",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "业务订单总量",
            field:"order_sum",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "客户名称",
            field:"customer_name",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        }]
    });
}