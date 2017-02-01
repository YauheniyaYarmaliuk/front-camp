import {articlesApp} from '../app.js';

const Articles = 'Articles';
articlesApp.factory(Articles,['$resource', function ($resource) {
return $resource('http://localhost:3000/articles/:id/edit',{},
  {
      'update': {method:'PUT'}
  });
}]);

export default Articles;
