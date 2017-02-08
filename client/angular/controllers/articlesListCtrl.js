angular.module('articlesApp')
    .controller('ArticlesListCtrl', ['$scope', '$http', '$location', 'Article', function ($scope, $http, $location, Article) {
        $scope.articles = Article.query();
}]);


