<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="css/demo.css" />
		<link rel="stylesheet" href="css/map.css"/>
		<title></title>
	</head>
	<body>
	<div class="container-flex" tabindex="0" hidefocus="true">
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
		<div id="title">车辆实时追踪</div>
		<div id="allmap"></div>
	</div>

	</body>
	<script type="text/javascript" src="js/jquery-3.2.1.min.js" ></script>
	<script type="text/javascript" src="js/demo.js" ></script>
	<script src="http://api.map.baidu.com/api?v=2.0&ak=HszVx8Pejuld9Uamco4kzHKDeU3GAWho"></script>
	<script type="text/javascript" src="js/json.js" ></script>
	<%--<script type="text/javascript" src="http://api.map.baidu.com/library/LuShu/1.2/src/LuShu_min.js"></script>--%>
	<script type="text/javascript" src="js/LuShu_min.js" ></script>
</html>
