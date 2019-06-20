<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html lang="zh-CN">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="renderer" content="webkit">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">
		<link rel="icon" href="images/jinfei_32X32.ico">
		<title>今飞生产监管中心</title>
		<link href="assets/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
		<link href="assets/bootstrap-table/bootstrap-table.min.css" rel="stylesheet">
		<link rel="stylesheet" href="css/base.css">
		<link rel="stylesheet" href="css/index1.css">
		<link rel="stylesheet" href="assets/bootstrap-select/css/bootstrap-select.css" />
	</head>

	<body>
		<div class="model" hidden="hidden">
			<div class="close"></div>
			<div class="Middle">
				<div class="t_line_box">
					<i class="t_l_line"></i>
					<i class="l_t_line"></i>
					<i class="t_r_line"></i>
					<i class="r_t_line"></i>
					<i class="l_b_line"></i>
					<i class="b_l_line"></i>
					<i class="r_b_line"></i>
					<i class="b_r_line"></i>
				</div>
				<nav class="headUl">
					<ul class="nav title">
						<li id="navhead1"><a href="#">订单详情</a></li>
						<li id="navhead2"><a href="#">设备详情</a></li>
						<li id="navhead3"><a href="#">生产详情</a></li>
						<li id="navhead4"><a href="#">在制品详情</a></li>
						<li id="navhead5"><a href="#">铸造详情</a></li>
						<li id="navhead6"><a href="#">质量详情</a></li>
						<li id="navhead7"><a href="#">人员详情</a></li>
                        <li id="navhead8"><a href="#">库存详情</a></li>
					</ul>
				</nav>
				<div class="dbody">
					<div class="detailed" id="detailed1">
						<table id="tab1"></table>
					</div>
					<div class="detailed" id="detailed2">
						<table id="tab2"></table>
					</div>
					<div class="detailed" id="detailed3">
						<table id="tab3"></table>
					</div>
					<div class="detailed" id="detailed4">
						<table id="tab4"></table>
					</div>
					<div class="detailed" id="detailed5">
						<table id="tab5"></table>
					</div>
					<div class="detailed" id="detailed6">
						<table id="tab6"></table>
					</div>
					<div class="detailed" id="detailed7">
						<table id="tab7"></table>
					</div>
					<div class="detailed" id="detailed8">
						<table id="tab8"></table>
					</div>
				</div>
			</div>
		</div>
	</body>
	<script type="text/javascript" src="assets/jquery/jquery-3.3.1.min.js"></script>
	<script>
        var factoryId = 2;
        $.ajaxSetup({
            async : false
        });
	</script>
	<script type="text/javascript" src="assets/bootstrap/3.3.7/js/bootstrap.js"></script>
	<script type="text/javascript" src="assets/bootstrap-table/bootstrap-table.js"></script>
	<script type="text/javascript" src="assets/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>
	<script type="text/javascript" src="assets/bootstrap-select/js/bootstrap-select.js"></script>
	<script type="text/javascript" src="assets/bootstrap-select/js/i18n/defaults-zh_CN.js"></script>
	<script type="text/javascript" src="assets/echarts/echarts.min.js"></script>
	<script type="text/javascript" src="js/index2_detailed1.js"></script>
	<script type="text/javascript" src="js/index1_detailed2.js"></script>
	<script type="text/javascript" src="js/index1_detailed3.js"></script>
	<script type="text/javascript" src="js/index1_detailed4.js"></script>
	<script type="text/javascript" src="js/index1_detailed5.js"></script>
	<script type="text/javascript" src="js/index2_detailed6.js"></script>
	<script type="text/javascript" src="js/index1_detailed7.js"></script>
	<script type="text/javascript" src="js/index1_detailed8.js"></script>
	<script type="text/javascript" src="js/index1.js"></script>
	<script type="text/javascript" src="js/base.js"></script>

</html>