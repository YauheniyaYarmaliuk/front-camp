'use strict';
var result = fetch('https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=5c16623f895c44948812458d23c5396e');

result.then(function (response) {
    return response.json();
}).then(function (json) {
    return generateNews(json);
}).catch(function (ex) {
    return console.error('failed', ex);
});

var generateNews = function generateNews(json) {
    var news = document.getElementById("hacker-news");
    var articles = json.articles;

    var HTML = articles.map(function (article) {
        var articleAuthor = article.author,
            articleUrlToImage = article.urlToImage,
            articleDescription = article.description,
            articleTitle = article.title,
            articleUrl = article.url,
            articlePublishedAt = article.publishedAt;


        var authors = articleAuthor ? '<h5 class="author">' + articleAuthor + '</h5>' : '';
        var img = articleUrlToImage ? '<img class="image-to-logo" src="' + articleUrlToImage + '" />' : '';
        var descriptions = articleDescription ? '<p class="description">' + articleDescription + '</p>' : '';
        var titles = '<h3 class="title">' + articleTitle + '</h3>';
        var link = articleUrl ? '<a href="' + articleUrl + '">more</a>' : '';
        var datetime = articlePublishedAt ? '<time>' + new Date(articlePublishedAt).toLocaleString('en-US').split(', ') + '</time>' : '';
        var element = '<div>\n                ' + authors + '\n                ' + img + '\n                ' + titles + '\n                ' + descriptions + '\n                ' + link + '\n                ' + datetime + '\n            </div>';
        return element;
    }).join('');
    news.innerHTML = HTML;
};
