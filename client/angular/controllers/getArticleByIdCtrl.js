angular.module('articlesApp')
.controller('GetArticleByIdCtrl',['$scope', '$http', '$location', '$routeParams', 'ArticleById', function($scope, $http, $location, $routeParams, ArticleById) {
    $scope.id = $routeParams.id;
    ArticleById.get({id: $routeParams.id }, function successCb(data) {
        $scope.article = data;
    });
}])


