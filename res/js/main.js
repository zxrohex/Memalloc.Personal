jQuery.fn.extend({
	scrollProgress: function () {
		return ($(window).scrollTop() - $(this).position().top) / ($(this).height());
	}
});


$(function () {
	$(window).on("scroll", function () {
		$(".scroll-vars").each(function () {
			var scrollProgress = $(this).scrollProgress();

			$(this).css("--scroll-deg", scrollProgress +  "deg");
		});
	});
});