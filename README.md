# refocus

Javascript
<script type="text/javascript" src="jquery.refocus.js"></script>
<script type="text/javascript">
	$(window).load(function () {
		$('.refocus-1').refocus();
	});
</script>

Stylesheet
<link href="refocus.css" rel="stylesheet" media="all">
<style>
	/*only necessary if you want more or less blur*/
	.refocus-1 .focus-out,
	.refocus-1 .refocus-img-bg {
		filter: blur(15px);
		-webkit-filter: blur(15px);
	}
	/*only necessary if you want faster or slower blur*/
	.refocus-1 .focus-in,
	.refocus-1 .focus-out {
		transition: all 2s ease 0.3s;
	}
</style>

Html
<div class="refocus refocus-1">
	<div class="refocus-img-bg"></div>
	<div class="refocus-img focus-in">
		<img src="refocus.jpg" alt=""/>
	</div>
	<div class="refocus-text-container">
		<div class="t">
			<div class="tc">
				<h1 class="focus-out">This is a blur text transition</h1>
			</div>
		</div>
	</div>
</div>
