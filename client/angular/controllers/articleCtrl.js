import {articlesApp} from '../app.js';

const ArticleCtrl = 'ArticleCtrl';

articlesApp.controller(ArticleCtrl, function ($scope) {
console.log('11');
  return  $scope.title = 'Hacker news';
});

export default ArticleCtrl;
