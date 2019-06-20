function tab2() {
    $.ajax({
        url: "Machinestatusinfo/queryMacinestatusinfo",
        type: "GET",
        data:{factoryId:factoryId},
        success: function (data) {
            setTable2(data)
        }
    });
}

function setTable2(data) {
    $("#tab2").bootstrapTable({
        classes:"table table-striped table-no-bordered table-condensed",
        data:data,
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
        uniqueId: "equipNo",
        columns: [{
            title: "设备编号",
            field: "equipNo",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        }, {
            title: "设备名称",
            field: "equipName",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "所属工序",
            field: "proceCode",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "使用工厂",
            field: "useCompany",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "使用车间",
            field: "useDept",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "使用日期",
            field:"useDate",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "制造厂家",
            field:"madeFact",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "出厂编号",
            field:"factNo",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "设备状态",
            field:"errorType",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
            formatter: function (value, row, index) {
                switch (value) {
                    case 0:
                        return "正常";
                    case 1:
                        return "故障";
                    case 2:
                        return "缺料";
                    case 3:
                        return "缺人";
                    case 4:
                        return "调机超时";
                }
            }
        }]
    });
}