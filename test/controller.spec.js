describe('Controller ArticleCtrl', function() {
    beforeEach(angular.mock.module('articlesApp'));
    let $controller, $rootScope;
    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));
    beforeEach(inject(function(_$rootScope_) {
    $rootScope = _$rootScope_;
    }));

    it('expect "title" to equal "Hacker news"', function() {
        const $scope = $rootScope.$new();
        var controller = $controller('ArticleCtrl', {$scope: $scope});
        expect($scope.title).toEqual('Hacker news');
    });

    it('expect "title" to not equal "hacker news"', function() {
        const $scope = $rootScope.$new();
        var controller = $controller('ArticleCtrl', {$scope: $scope});
        expect($scope.title).not.toEqual('hacker news');
    });
});
