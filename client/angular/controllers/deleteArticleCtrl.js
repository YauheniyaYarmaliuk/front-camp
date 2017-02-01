import {articlesApp} from '../app.js';
import Articles from '../factories/articles.js';


const DeleteArticleCtrl = 'DeleteArticleCtrl';

articlesApp.controller(DeleteArticleCtrl,['$scope', '$http', '$location', '$routeParams', Articles, function($scope, $http, $location, $routeParams, Articles) {
   $scope.delete = function (id) {
        Articles.delete({id: id }, function successCb(data) {
            location.reload();
        });
    };
}]);

export default DeleteArticleCtrl;
