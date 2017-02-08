describe('click directive', function() {
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

  it('Should find a', function() {
    expect(element.find('a')[0].href).toBe('http://localhost:8090/');
  });
});