'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var articlesRenderer = function () {
    function articlesRenderer(rootElementId) {
        _classCallCheck(this, articlesRenderer);
    }

    _createClass(articlesRenderer, [{
        key: 'generateNews',
        value: function generateNews(json) {
            var news = document.getElementById(this.rootElementId);
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
                var element = '<div>\n                         ' + authors + '\n                         ' + img + '\n                         ' + titles + '\n                         ' + descriptions + '\n                         ' + link + '\n                         ' + datetime + '\n                     </div>';
                return element;
            }).join('');
            news.innerHTML = HTML;
        }
    }]);

    return articlesRenderer;
}();

exports.default = articlesRenderer;