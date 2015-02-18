app.controller('MainController', function ($scope, FlashCardsFactory) {
    FlashCardsFactory.getFlashCards().then(function(flashCards) {
        $scope.flashCards = flashCards;
        $scope.loading = false;
    });

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.selectedCategory = null;

    $scope.loading = true;

    $scope.selectCategory = function(category) {
        $scope.loading = true;
        $scope.selectedCategory = category;
        FlashCardsFactory.getFlashCards(category).then(function(flashCards) {
            $scope.flashCards = flashCards;
            $scope.loading = false;
        });
    };
});