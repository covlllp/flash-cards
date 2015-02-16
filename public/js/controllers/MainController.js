app.controller('MainController', function ($scope, FlashCardsFactory) {
    FlashCardsFactory.getFlashCards().then(function(flashCards) {
        $scope.flashCards = flashCards;
    });

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.selectedCategory = null;

    $scope.selectCategory = function(category) {
        FlashCardsFactory.getFlashCards(category).then(function(flashCards) {
            $scope.flashCards = flashCards;
            $scope.selectedCategory = category;
        });
    };
});