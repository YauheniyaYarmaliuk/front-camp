describe('directive click', function() {
    let element;
    let scope;

    beforeEach(angular.mock.module('articlesApp'));

    beforeEach(inject(function($rootScope, $compile) {
        element = angular.element(
          '<click></click>'
        );

        scope = $rootScope.$new();
        $compile(element)(scope);
        scope.$digest();
    }));

    it('expect "a href" to be "http://localhost:8090/"', function() {
        expect(element.find('a')[0].href).toBe('http://localhost:8090/');
    });

    it('expect "a href" to equal "http://localhost:8090/"', function() {
        expect(element.find('a')[0].href).not.toBeNull();;
    });
});