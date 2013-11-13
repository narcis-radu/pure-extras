;(function($){
	$.fn.pure_alert = function() {
		return $(this).on("click", function(e) {
			$(this).parent().fadeOut();
			e.preventDefault();
		})
	}

	$('a[rel="pure-alert-dismiss"]').pure_alert();
}(jQuery));