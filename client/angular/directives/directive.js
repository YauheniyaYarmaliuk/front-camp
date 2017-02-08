angular.module('articlesApp')
    .directive('click', function () {
       return {
           scope: {
              action: '&'
           },
               template:
                   '<a href="http://localhost:8090"><button ng-click="action()">Hide</button></a>'
       }
});
