import {articlesApp} from '../app.js';

const ArticleCtrl = 'ArticleCtrl';

articlesApp.controller(ArticleCtrl, function ($scope) {
    $scope.title = 'Hacker news';
});

export default ArticleCtrl;
