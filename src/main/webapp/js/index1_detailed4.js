function tab4() {
        setTable4()
}

function setTable4() {
    $("#tab4").bootstrapTable({
        classes:"table table-striped table-no-bordered table-condensed",
        data:dataTab4,
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
            title: "综合",
            field: "zh",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "机加工",
            field:"jj",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "涂装",
            field:"tz",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
        },{
            title: "检包",
            field:"jb",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "产品总数",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
            formatter: function (value,row,index) {
                return row.jb+row.zh+row.tz+row.jj
    }
        }]
    });
}