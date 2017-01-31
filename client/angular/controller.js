let articlesApp = angular.module('articlesApp',['ngRoute', 'ngResource']);

articlesApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })
    $routeProvide
         .when('/new',{
            templateUrl:'client/angular/template/new.html',
            controller:'NewArticles'
        })
        .when('/:id/edit',{
            templateUrl:'client/angular/template/edit.html',
            controller:'EditArticle'
        })
        .when('/:id',{
            templateUrl:'client/angular/template/show.html',
            controller:'GetById'
        })
        .otherwise({
            redirectTo:'/'
        });
}]);

/* Factory */
articlesApp.factory('Article', ['$resource', function($resource){
  return $resource('http://localhost:3000/articles')}
]);

articlesApp.factory('NewArticle', ['$resource', function($resource){
  return $resource('http://localhost:3000/articles',{},
     {
         'save': {method:'POST'}
     });
   }]);


articlesApp.factory('ArticleById', ['$resource', function($resource){
  return $resource('http://localhost:3000/articles/:id')}
]);

articlesApp.factory('Articles',['$resource', function ($resource) {
    return $resource('http://localhost:3000/articles/:id/edit',{},
      {
          'update': {method:'PUT'}
      });
    }]);

articlesApp.controller('ArticleCtrl', function ($scope) {
    $scope.title = 'Hacker news';
});

articlesApp.controller('ArticlesListCtrl', ['$scope', '$http', '$location', 'Article', function ($scope, $http, $location, Article) {
  $scope.articles = Article.query();
}]);

articlesApp.controller('EditArticle',['$scope', '$http', '$location', '$routeParams', 'Articles', 'ArticleById', function($scope, $http, $location, $routeParams, Articles, ArticleById) {
    $scope.id = $routeParams.id;
    ArticleById.get({id: $routeParams.id }, function successCb(data) {
        $scope.article = data;
    });
    $scope.updateArticle = function () {
        Articles.update({id: $routeParams.id }, $scope.article);
    };
}]);

articlesApp.controller('NewArticles',['$scope', '$http', '$location', '$routeParams', 'NewArticle', function($scope, $http, $location, $routeParams, NewArticle) {
    $scope.saveArticle = function() {
      NewArticle.save({},{author:$scope.author, title:$scope.title, description:$scope.description, url:$scope.url, urlToImage:$scope.urlToImage, publishedAt:$scope.publishedAt});
    };
}]);

articlesApp.controller('DeleteArticle',['$scope', '$http', '$location', '$routeParams', 'Articles', function($scope, $http, $location, $routeParams, Articles) {
   $scope.delete = function (id) {
        Articles.delete({id: id }, function successCb(data) {
            location.reload();
        });
    };
}]);

articlesApp.controller('GetById',['$scope', '$http', '$location', '$routeParams', 'ArticleById', function($scope, $http, $location, $routeParams, ArticleById) {
   $scope.id = $routeParams.id;
    ArticleById.get({id: $routeParams.id }, function successCb(data) {
     $scope.article = data;
   });
}])

articlesApp.directive('click', function () {
    return {
        scope: {
           action: '&'
        },
            template:
                '<a href="http://localhost:8090"><button ng-click="action()">Hide</button></a>'
    }
});
