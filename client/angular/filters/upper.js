angular.module('articlesApp')
  .filter('upper', function() {
    return function(input) {
      return input.toUpperCase();
    };
  });