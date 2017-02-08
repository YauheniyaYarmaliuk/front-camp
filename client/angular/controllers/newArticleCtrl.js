angular.module('articlesApp')
.controller('NewArticleCtrl', ['$scope', '$http', '$location', '$routeParams', 'Article', function($scope, $http, $location, $routeParams, Article) {
    $scope.saveArticle = function() {
        $scope.entry = new Article();
        Object.assign($scope.entry, {author:$scope.author, title:$scope.title, description:$scope.description, url:$scope.url, urlToImage:$scope.urlToImage, publishedAt:$scope.publishedAt});
        Article.save($scope.entry,function(){
        });
    };
}]);


