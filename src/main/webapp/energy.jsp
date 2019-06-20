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
		<link rel="stylesheet" href="assets/bootstrap-select/css/bootstrap-select.css" />
		<link rel="stylesheet" href="css/base.css">
		<link rel="stylesheet" href="css/energy.css">
	</head>

	<body>
		<div class="container-flex" tabindex="0">
			<div class="center_text">
				<div class="t_line_box">
					<i class="t_l_line"></i>
					<i class="l_t_line"></i>
				</div>
				<div class="t_line_box">
					<i class="t_r_line"></i>
					<i class="r_t_line"></i>
				</div>
				<div class="t_line_box">
					<i class="l_b_line"></i>
					<i class="b_l_line"></i>
				</div>
				<div class="t_line_box">
					<i class="r_b_line"></i>
					<i class="b_r_line"></i>
				</div>
				<div class="chart-box">
					<div id="app">
						<p>今飞能源监管中心</p>
						<div id="menu">
							<ul>
								<li class="active"><a>电</a></li>
								<%--<li><a>天然气</a></li>--%>
								<li><a>水</a></li>
							</ul>
						</div>
						<select class="zblist selectpicker" id="zblist" data-style="btn-info">
						</select>
					</div>
					<div class="all-box">
						<div class="echart-box">
							<div id="all-type">
	
							</div>
							<div id="all-pc">
								
							</div>
							<div id="factory-type">
	
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
	<script type="text/javascript" src="assets/jquery/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="assets/echarts/echarts.min.js"></script>
	<script type="text/javascript" src="assets/echarts/china.js"></script>
	<script type="text/javascript" src="assets/bootstrap/3.3.7/js/bootstrap.js"></script>
	<script type="text/javascript" src="assets/bootstrap-select/js/bootstrap-select.js"></script>
	<script type="text/javascript" src="assets/bootstrap-select/js/i18n/defaults-zh_CN.js"></script>
	<script type="text/javascript" src="js/energy.js"></script>
	<script type="text/javascript" src="js/base.js"></script>

</html>