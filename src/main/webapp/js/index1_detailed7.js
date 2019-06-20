function tab7() {
        setTable7()
}

function setTable7() {
    $("#tab7").bootstrapTable({
        classes:"table table-striped table-no-bordered table-condensed",
        data:dataTab7,
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
            title: "工作日期",
            field: "workdate",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
            formatter: function (value, row, index) {
                return getDay(-value+1,"-")
            }
        },{
            title: "班次",
            field: "rotattype",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
            formatter: function (value, row, index) {
                switch (value) {
                    case 1:
                        return "早班";
                    case 2:
                        return "中班";
                    case 3:
                        return "晚班";
                }
            }
        },{
            title: "应到人数",
            field: "peoplenum",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "实到人数",
            field: "shidao",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "缺勤人数",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "20px",
            formatter: function (value, row, index) {
                return row.peoplenum-row.shidao
            }
        },{
            title: "工厂",
            field:"locale",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        }]
    });
}