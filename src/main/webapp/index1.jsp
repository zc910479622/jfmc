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
		<div id="divTitle">汽轮事业部生产监管</div>
		<div id="divTianQi">
			<div id="divNow"></div>
			<div id="divTianQiIMG"><img src="images/weather/多云.png" /></div>
			<div id="divTianQiMessage1" class="message"></div>
			<div id="divTianQiMessage2" class="message"></div>
		</div>
		<div id="divArea1">
			<div class="t_line_box">
				<i class="t_l_line"></i>
				<i class="l_t_line"></i>
				<i class="t_r_line"></i>
				<i class="r_t_line"></i>
				<i class="l_b_line"></i>
				<i class="b_l_line"></i>
				<i class="r_b_line"></i>
				<i class="b_r_line"></i>
				<div class="main_title">当月订单情况</div>
			</div>

			<div id="chart11" class="chart-box"></div>
		</div>

		<div id="divArea2">
			<div class="t_line_box">
				<i class="t_l_line"></i>
				<i class="l_t_line"></i>
				<i class="t_r_line"></i>
				<i class="r_t_line"></i>
				<i class="l_b_line"></i>
				<i class="b_l_line"></i>
				<i class="r_b_line"></i>
				<i class="b_r_line"></i>
				<div class="main_title">设备运行状况</div>
			</div>
			<div id="chart21" class="chart-box"></div>
		</div>

		<div id="divArea3">
			<div class="t_line_box">
				<i class="t_l_line"></i>
				<i class="l_t_line"></i>
				<i class="t_r_line"></i>
				<i class="r_t_line"></i>
				<i class="l_b_line"></i>
				<i class="b_l_line"></i>
				<i class="r_b_line"></i>
				<i class="b_r_line"></i>
				<div class="main_title">生产计划情况</div>
			</div>
			<div id="chart32" class="chart-box"></div>
		</div>
		<div id="divArea7">
			<div class="t_line_box">
				<i class="t_l_line"></i>
				<i class="l_t_line"></i>
				<i class="t_r_line"></i>
				<i class="r_t_line"></i>
				<i class="l_b_line"></i>
				<i class="b_l_line"></i>
				<i class="r_b_line"></i>
				<i class="b_r_line"></i>
				<div class="main_title">在制品情况</div>
			</div>
			<div id="num71"></div>
			<div id="num72"></div>
			<div id="num73"></div>
			<div id="num74"></div>
			<div id="num75"></div>
			<div id="num76"></div>
            <p class="name71"><span>在制品总数</span></p>
            <p class="name72"><span>库存总数</span></p>
			<p class="name73"><span>综合车间</span></p>
			<p class="name74"><span>机加车间</span></p>
			<p class="name75"><span>涂装车间</span></p>
			<p class="name76"><span>检包车间</span></p>
		</div>
		<div id="divArea6">
			<div class="t_line_box">
				<i class="t_l_line"></i>
				<i class="l_t_line"></i>
				<i class="t_r_line"></i>
				<i class="r_t_line"></i>
				<i class="l_b_line"></i>
				<i class="b_l_line"></i>
				<i class="r_b_line"></i>
				<i class="b_r_line"></i>
				<div class="main_title">铸造车间</div>
			</div>
			<div id="chart61" class="chart-box">

				<div class="scroll">

					<div class="picbox"></div>
					<div class="og_prev"></div>
					<div class="og_next"></div>

				</div>

			</div>
		</div>

		<div id="divArea4">
			<div class="t_line_box">
				<i class="t_l_line"></i>
				<i class="l_t_line"></i>
				<i class="t_r_line"></i>
				<i class="r_t_line"></i>
				<i class="l_b_line"></i>
				<i class="b_l_line"></i>
				<i class="r_b_line"></i>
				<i class="b_r_line"></i>
				<div class="main_title">产品质量情况</div>
			</div>
			<div id="chart41" class="chart-box"></div>
			<div id="chart42" class="chart-box"></div>
			<div id="chart43" class="chart-box"></div>
		</div>

		<div id="divArea5">
			<div class="t_line_box">
				<i class="t_l_line"></i>
				<i class="l_t_line"></i>
				<i class="t_r_line"></i>
				<i class="r_t_line"></i>
				<i class="l_b_line"></i>
				<i class="b_l_line"></i>
				<i class="r_b_line"></i>
				<i class="b_r_line"></i>
				<div class="main_title">人员到岗情况</div>
			</div>
			<div id="chart51" class="chart-box">
				<table>
					<thead>
						<tr>
							<th id="thDate">2018-08-27</th>
							<th>应到</th>
							<th>实到</th>
							<th>缺勤</th>
							<th>到岗率</th>
						</tr>
					</thead>
					<tbody id="tbody"></tbody>
					<tfoot id="tfoot"></tfoot>
				</table>
			</div>
			<div id="chart52" class="chart-box"></div>
		</div>
		
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
        var factoryId = 1;
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
	<script type="text/javascript" src="js/index1_chart1.js"></script>
	<script type="text/javascript" src="js/index1_chart2.js"></script>
	<script type="text/javascript" src="js/index1_chart3.js"></script>
	<script type="text/javascript" src="js/index1_chart4.js"></script>
	<script type="text/javascript" src="js/index1_chart5.js"></script>
	<script type="text/javascript" src="js/index1_chart6.js"></script>
	<script type="text/javascript" src="js/index1_chart7.js"></script>
	<script type="text/javascript" src="js/index1_detailed1.js"></script>
	<script type="text/javascript" src="js/index1_detailed2.js"></script>
	<script type="text/javascript" src="js/index1_detailed3.js"></script>
	<script type="text/javascript" src="js/index1_detailed4.js"></script>
	<script type="text/javascript" src="js/index1_detailed5.js"></script>
	<script type="text/javascript" src="js/index1_detailed6.js"></script>
	<script type="text/javascript" src="js/index1_detailed7.js"></script>
	<script type="text/javascript" src="js/index1_detailed8.js"></script>
	<script type="text/javascript" src="js/index1.js"></script>
	<script type="text/javascript" src="js/base.js"></script>

</html>