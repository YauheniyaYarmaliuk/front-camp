describe('Ar ticleCtrl', function() {
   beforeEach(angular.mock.module('articlesApp'));
   let $controller, $rootScope;
  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));
  beforeEach(inject(function(_$rootScope_) {
    $rootScope = _$rootScope_;
  }));

    it('I expect correct value of title', function() {
     const $scope = $rootScope.$new();
      var controller = $controller('ArticleCtrl', {$scope: $scope});
      expect($scope.title).toEqual('Hacker news');
    });
  });
