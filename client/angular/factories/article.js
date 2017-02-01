import {articlesApp} from '../app.js';

const Article = 'Article';
articlesApp.factory(Article, ['$resource', function($resource){
  return $resource('http://localhost:3000/articles')}
]);

export default Article;
