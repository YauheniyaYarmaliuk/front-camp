import {articlesApp} from './app.js';
import NewArticleCtrl from './controllers/newArticleCtrl.js';
import EditArticleCtrl from './controllers/editArticleCtrl.js';
import GetArticleByIdCtrl from './controllers/getArticleByIdCtrl.js';
import  './controllers/articlesListCtrl.js';
import './controllers/articleCtrl.js';
import './controllers/deleteArticleCtrl.js';
import './directives/directive.js';

articlesApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })
    $routeProvide
         .when('/new',{
            templateUrl:'client/angular/template/new.html',
            controller: NewArticleCtrl
        })
        .when('/:id/edit',{
            templateUrl:'client/angular/template/edit.html',
            controller: EditArticleCtrl
        })
        .when('/:id',{
            templateUrl:'client/angular/template/show.html',
            controller: GetArticleByIdCtrl
        })
        .otherwise({
            redirectTo:'/'
        });
}]);
