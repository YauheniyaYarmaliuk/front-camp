
import Article  from '../factories/article.js';

angular.module('articlesApp',['ngRoute', 'ngResource']).controller('ArticlesListCtrl', ['$scope', '$http', '$location', Article, function ($scope, $http, $location, Article) {
  $scope.articles = Article.query();
}]);


