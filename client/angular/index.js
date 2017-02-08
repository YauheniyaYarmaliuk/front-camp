import './app.js';
import './controllers/newArticleCtrl.js';
import './controllers/editArticleCtrl.js';
import  './controllers/getArticleByIdCtrl.js';
import  './controllers/articlesListCtrl.js';
import './controllers/articleCtrl.js';
import './controllers/deleteArticleCtrl.js';
import './directives/directive.js';
import './factories/article.js';
import './filters/upper.js';
import '../css/articles.less';
import '../css/page.less';

angular.module('articlesApp').config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })
    $routeProvide
         .when('/new',{
            templateUrl:'client/angular/template/new.html',
            controller: 'NewArticleCtrl'
        })
        .when('/:id/edit',{
            templateUrl:'client/angular/template/edit.html',
            controller: 'EditArticleCtrl'
        })
        .when('/:id',{
            templateUrl:'client/angular/template/show.html',
            controller: 'GetArticleByIdCtrl'
        })
        .otherwise({
            redirectTo:'/'
        });
}]);
