let articlesApp = angular.module('articlesApp',['ngRoute']);

articlesApp.config(['$routeProvider', function($routeProvide){
    $routeProvide
        .when('/',{
            templateUrl:'home.html',
            controller:'ArticlesListCtrl'
        })
        .when('/new',{
            templateUrl:'template/new.html',
            controller:'NewArticles'
        })
        .when('/edit/:_id',{
            templateUrl:'template/edit.html',
            controller:'EditArticle'
        })
        .otherwise({
            redirectTo:'/'
        });
}]);

articlesApp.controller('ArticleCtrl', function ($scope) {
    $scope.title = 'Hacker news';
});

articlesApp.controller('ArticlesListCtrl', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/articles'
    }).then(function (success){
        $scope.articles = success.data;
    });
});

articlesApp.controller('EditArticle',['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    $scope._id = $routeParams._id;

}]);
