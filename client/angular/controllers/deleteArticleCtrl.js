angular.module('articlesApp').controller('DeleteArticleCtrl',['$scope', '$http', '$location', '$routeParams', 'Articles', function($scope, $http, $location, $routeParams, Articles) {
   $scope.delete = function (id) {
        Articles.delete({id: id }, function successCb(data) {
            location.reload();
        });
    };
}]);


