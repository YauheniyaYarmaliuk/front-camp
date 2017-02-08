describe('Upper filter', () => {
  let filter;

  beforeEach(angular.mock.module('articlesApp'));
  beforeEach(inject(function (_$filter_) {
    filter = _$filter_;
  }));

  it('I expect all upper letters ', function () {
    const upper = filter('upper');
    expect(upper('hello')).toEqual("HELLO");
  });
});