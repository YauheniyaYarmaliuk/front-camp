import {articlesApp} from '../app.js';

const NewArticle = 'NewArticle';
articlesApp.factory(NewArticle, ['$resource', function($resource){
  return $resource('http://localhost:3000/articles',{},
     {
         'save': {method:'POST'}
     });
   }]);

export default NewArticle;
