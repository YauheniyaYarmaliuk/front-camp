angular.module('articlesApp')
.factory('NewArticle', ['$resource', function($resource){
      return $resource('http://localhost:3000/articles',{},
         {
             'save': {method:'POST'}
         });
}]);


