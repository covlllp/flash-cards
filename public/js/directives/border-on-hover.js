app.directive('borderOnHover', function() {
	return {
		restrict: 'A',
		link: function(scope, elem, attr) {
			elem.on('mouseenter', function() {
				elem.attr('style', 'border: 2px black solid');
			});

			elem.on('mouseleave', function() {
				elem.removeAttr('style');
			});
		}
	};
});