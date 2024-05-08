$(function () {
	$(window).on("scroll", function () {
		const scrollProgress = $(window).scrollTop() / ($("#test3").height() - $("#test3").innerHeight());

		// Map progress to the degree range
		var degrees = 40 + (scrollProgress * 80); // 80 = (120 - 40)

		$("#test2").css("transform", "rotateX(" + degrees + "deg)");
	});
});