import {articlesApp} from '../app.js';
import ArticleById from '../factories/articleById.js';


const GetArticleByIdCtrl = 'GetArticleByIdCtrl';

articlesApp.controller(GetArticleByIdCtrl,['$scope', '$http', '$location', '$routeParams', ArticleById, function($scope, $http, $location, $routeParams, ArticleById) {
   $scope.id = $routeParams.id;
    ArticleById.get({id: $routeParams.id }, function successCb(data) {
     $scope.article = data;
   });
}])

export default GetArticleByIdCtrl;
