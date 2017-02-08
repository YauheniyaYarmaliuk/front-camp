describe('Article resource', function () {
  let mockResource;
  let $httpBackend;

  beforeEach(angular.mock.module('articlesApp'));

  beforeEach(angular.mock.inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    mockResource = $injector.get('Article');
  }));

  it('expect "author" to equal "Alexis Oke"', (function () {
    $httpBackend.expectGET('http://localhost:3000/articles')
      .respond([{
        "_id": "1",
        "author": "Alexis Oke",
        "title": "Fwalgorithmic editing, Nick Bilton investigates what lies ahead.",
        "description": "Fwalgorithmic editing, Nick Bilton investigates what lies ahead.",
        "url": "http://www.nature.com/news/quantum-computers-ready-to-leap-out-of-the-lab-in-2017-1.21239",
        "urlToImage": "http://www.nature.com/polopoly_fs/7.41460.1483457151!/image/WEB_KMH_0265_Monroe%20lab.jpg_gen/derivatives/nature_homepage/WEB_KMH_0265_Monroe%20lab.jpg",
        "publishedAt": "2017-02-16T21:00:00.000Z"
      }]);

    const result = mockResource.query();

    $httpBackend.flush();

    expect(result[0].author).toEqual("Alexis Oke");
  }));

  it('expect "length" to equal "1"', (function () {
    $httpBackend.expectGET('http://localhost:3000/articles')
      .respond([{
        "_id": "1",
        "author": "Alexis Oke",
        "title": "Fwalgorithmic editing, Nick Bilton investigates what lies ahead.",
        "description": "Fwalgorithmic editing, Nick Bilton investigates what lies ahead.",
        "url": "http://www.nature.com/news/quantum-computers-ready-to-leap-out-of-the-lab-in-2017-1.21239",
        "urlToImage": "http://www.nature.com/polopoly_fs/7.41460.1483457151!/image/WEB_KMH_0265_Monroe%20lab.jpg_gen/derivatives/nature_homepage/WEB_KMH_0265_Monroe%20lab.jpg",
        "publishedAt": "2017-02-16T21:00:00.000Z"
      }]);

    const result = mockResource.query();

    $httpBackend.flush();

    expect(result.length).toEqual(1);
  }));

});