let articlesApp = angular.module('articlesApp',['ngRoute']);

articlesApp.config(['$routeProvider', '$locationProvider', function($routeProvide){
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // })
    $routeProvide
         .when('/new',{
            templateUrl:'template/new.html',
            controller:'NewArticles'
        })
        .when('/edit/:id',{
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
    $scope.id = $routeParams.id;

}]);
