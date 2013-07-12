<!DOCTYPE html>
<!--[if IE 7]><html class="lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 8]><html class="lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 9]><html class="lt-ie9"><![endif]-->
<!--[if gt IE 9]>--><html><!--<![endif]-->
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>Laravel Project</title>

		{{ HTML::script('app.min.js') }}
		{{ HTML::style('app.min.css') }}

		<script type="text/javascript" charset="utf-8">
			@yield('javascript')
		</script>
	</head>
	<body>
		@yield('content')
	</body>
</html>
