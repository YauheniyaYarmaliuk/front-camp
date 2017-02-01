import {articlesApp} from '../app.js';

const ArticleById = 'ArticleById';
articlesApp.factory( ArticleById, ['$resource', function($resource){
  return $resource('http://localhost:3000/articles/:id')}
]);

export default ArticleById;
