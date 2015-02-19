app.directive('addFlashCard', function(FlashCardsFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/addflashcard/addflashcard.html',
		scope: {
			cardCategories: '='
		},
		link: function(scope, elem, attr) {
			scope.card = {answers: []};

			scope.radioClick = function(i) {
				scope.card.answers.forEach(function(answer) {
					answer.correct = false;
				});
				scope.card.answers[i].correct = true;
			};

			scope.submitCard = function(card) {
				FlashCardsFactory.addNewCard(card).then(function() {
					scope.card = {answers: []};
				});
			};
		}
	};
});