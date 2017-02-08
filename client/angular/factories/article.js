angular.module('articlesApp')
    .factory('Article', ['$resource', function($resource){
        return $resource('http://localhost:3000/articles')}
]);
