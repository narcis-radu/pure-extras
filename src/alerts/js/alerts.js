;(function($){
	$.fn.pure_alert = function() {
		return $(this).on("click", function(e) {
			e.preventDefault();
			$(this).parent().fadeOut();
		});
	};

	$('.pure-alert > a[rel="pure-alert-dismiss"]').pure_alert();
}(jQuery));
