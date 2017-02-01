import {articlesApp} from '../app.js';
import Article  from '../factories/article.js';


const ArticlesListCtrl = 'ArticlesListCtrl';

articlesApp.controller(ArticlesListCtrl, ['$scope', '$http', '$location', Article, function ($scope, $http, $location, Article) {
  $scope.articles = Article.query();
}]);

export default ArticlesListCtrl;
