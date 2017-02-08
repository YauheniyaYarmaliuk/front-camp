angular.module('articlesApp')
    .factory( 'ArticleById', ['$resource', function($resource){
        return $resource('http://localhost:3000/articles/:id')}
]);

