function tab6() {
    setTable6()
}

function setTable6(data) {
    $("#tab6").bootstrapTable({
        classes:"table table-striped table-no-bordered table-condensed",
        data:dataTab6,
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
            title: "日期",
            field: "depositDate",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
            formatter: function (value, row, index) {
                return getDay(-value+1,"-")
            }
        }, {
            title: "铸造车间产量",
            field: "castingNum",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "铸造不合格",
            field: "castingBad",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "机加工车间产量",
            field: "machiningNum",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "机加工不合格",
            field: "machiningBad",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "涂装车间产量",
            field: "coatingNum",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "涂装不合格",
            field: "coatingBad",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px"
        },{
            title: "平均合格率",
            field:"",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
            formatter: function (value, row, index) {
                return ((100-(row.coatingBad+row.machiningBad+row.castingBad)/(row.coatingNum+row.machiningNum+row.castingNum)*100)).toFixed(2)+"%"
            }
        }]
    });
}