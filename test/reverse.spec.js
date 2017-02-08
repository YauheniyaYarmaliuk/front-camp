//import articlesApp from '../client/angular/app.js';

//describe('Articles-Form controller', function () {
//angular.mock.module.sharedInjector();
//  beforeEach(angular.mock.module('articlesApp'));
//  beforeEach(angular.mock.inject(function(_$controller_) {
//    $controller = _$controller_;
//  }));
//  beforeEach(inject(function(_$rootScope_) {
//    $rootScope = _$rootScope_;
//  }));
//
//
//  it('Should be with filled article', function () {
//
//    const scope = $rootScope.$new();
//
//    const controller = $controller('ArticleCtrl', {
//      '$scope': scope
//    });
//
//    expect(controller.$title).toEqual('Hacker news');
//  });
//
//});

describe('ArticleCtrl', function() {
 angular.mock.module.sharedInjector();
   beforeEach(angular.mock.module('articlesApp'));

 var $controller;
  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));
  describe('$scope.title', function() {
    it('I expect correct value of title', function() {
      var $scope = {};
      var controller = $controller('ArticleCtrl', { $scope: $scope });
      $scope.title = 'Hacker news';

      expect($scope.controller).toEqual('Hacker news');
    });
  });
});