describe('Article resource', function () {
  let mockResource;
  let $httpBackend;

  beforeEach(angular.mock.module('articlesApp'));

  beforeEach(angular.mock.inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    mockResource = $injector.get('Article');
  }));

  it('should get articles count', (function () {
    $httpBackend.expectGET('http://localhost:3000/articles')
      .respond([{
       "_id": "1",
       "author": "Darrell Etherington",
       "title": "Open-sourcing Chrome on iOS!",
       "description": "Historically, the code for Chrome for iOS was kept separate from the rest of the Chromium project due to the additional complexity required...",
       "url": "https://blog.chromium.org/2017/01/open-sourcing-chrome-on-ios.html",
       "urlToImage": "http://1.bp.blogspot.com/-vkF7AFJOwBk/VkQxeAGi1mI/AAAAAAAARYo/57denvsQ8zA/s1600-r/logo_chromium.png",
       "publishedAt": null
      }]);

    const result = mockResource.query();

    $httpBackend.flush();

    expect(result[0].author).toEqual("Darrell Etherington");
  }));

});