jQuery.fn.extend({
	scrollProgress: function () {
		return ($(window).scrollTop() - $(this).position().top) / ($(this).height());
	}
});


$(function () {
	$(window).on("scroll", function () {
		$(".showcase").each(function () {
			var scrollProgress = $(this).scrollProgress();

			$(this).css({
				"--scroll": scrollProgress + "px",
			"--scroll-deg": scrollProgress + "deg" });
		});
	});
});