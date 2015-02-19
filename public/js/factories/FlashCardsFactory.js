app.factory('FlashCardsFactory', function ($http) {
	var factory = {};

	factory.getFlashCards = function(category) {
		var paramObj = {};

		if (category) paramObj.category = category;

		return $http
		.get('/cards', {params: paramObj})
		.then(function(response) {
			return response.data;
		});
	};

	factory.addNewCard = function(card) {
		return $http.post('/cards', card);
	}

	return factory;
});