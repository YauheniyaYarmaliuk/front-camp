describe('filter upper', () => {
    let filter;

    beforeEach(angular.mock.module('articlesApp'));
    beforeEach(inject(function (_$filter_) {
        filter = _$filter_;
    }));

    it('expect "hello" to equal "HELLO"', function () {
        const upper = filter('upper');
        expect(upper('hello')).toEqual("HELLO");
    });

    it('expect "hello" to not be "hello"', function () {
        const upper = filter('upper');
        expect(upper('hello')).not.toBe("hello");
    });
});