import {articlesApp} from '../app.js';
import Articles from '../factories/articles.js';
import ArticleById from '../factories/articleById.js';

const EditArticleCtrl = 'EditArticleCtrl';

articlesApp.controller(EditArticleCtrl,['$scope', '$http', '$location', '$routeParams', Articles, ArticleById, function($scope, $http, $location, $routeParams, Articles, ArticleById) {
    $scope.id = $routeParams.id;
    ArticleById.get({id: $routeParams.id }, function successCb(data) {
        $scope.article = data;
    });
    $scope.updateArticle = function () {
        Articles.update({id: $routeParams.id }, $scope.article);
    };
}]);

export default EditArticleCtrl;
