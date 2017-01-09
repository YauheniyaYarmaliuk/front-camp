/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _app = __webpack_require__(1);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = new _app2.default();\napp.run();\n\n//////////////////\n// WEBPACK FOOTER\n// .//client/js/index.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///.//client/js/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(2);\n\n__webpack_require__(7);\n\nvar _news = __webpack_require__(9);\n\nvar _news2 = _interopRequireDefault(_news);\n\nvar _renderer = __webpack_require__(12);\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _constants = __webpack_require__(11);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//Facade\nvar App = function () {\n    function App() {\n        _classCallCheck(this, App);\n    }\n\n    _createClass(App, [{\n        key: 'run',\n        value: function run() {\n            var FETCH_HANDLER_ID = 'news-button';\n            var id_button = document.getElementById(FETCH_HANDLER_ID);\n\n            var onClickHandler = function onClickHandler() {\n                var renderer = new _renderer2.default(_constants.ROOT_ELEMENT_ID);\n                var news = new _news2.default();\n                news.execute('fetch', renderer.generateNews.bind(renderer));\n            };\n            id_button.addEventListener(\"click\", onClickHandler, false);\n            if (true) {\n                console.log(\"dev mode\");\n            }\n        }\n    }]);\n\n    return App;\n}();\n\nexports.default = App;\n\n//////////////////\n// WEBPACK FOOTER\n// .//client/js/app.js\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///.//client/js/app.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// .//client/css/articles.less\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///.//client/css/articles.less?");

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// .//client/css/page.less\n// module id = 7\n// module chunks = 0\n//# sourceURL=webpack:///.//client/css/page.less?");

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _apiFetch = __webpack_require__(10);\n\nvar _apiFetch2 = _interopRequireDefault(_apiFetch);\n\nvar _constants = __webpack_require__(11);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar News = function () {\n    function News() {\n        _classCallCheck(this, News);\n\n        this.components = {};\n        var api = new _apiFetch2.default(_constants.API_URL);\n        this.register(api);\n    }\n\n    _createClass(News, [{\n        key: 'register',\n        value: function register(component) {\n            this.components[component.constructor.name] = component;\n        }\n    }, {\n        key: 'execute',\n        value: function execute(action) {\n            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n                args[_key - 1] = arguments[_key];\n            }\n\n            for (var componentName in this.components) {\n                var component = this.components[componentName];\n                if (action in component) {\n                    component[action].apply(component, args);\n                }\n            }\n        }\n    }]);\n\n    return News;\n}();\n\nexports.default = News;\n\n//////////////////\n// WEBPACK FOOTER\n// .//client/js/news.js\n// module id = 9\n// module chunks = 0\n//# sourceURL=webpack:///.//client/js/news.js?");

/***/ },
/* 10 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ApiFetch = function () {\n    function ApiFetch(apiUrl) {\n        _classCallCheck(this, ApiFetch);\n\n        if (!this.instance) {\n            this.instance = this;\n            this.apiUrl = apiUrl;\n        }\n        return this.instance;\n    }\n\n    _createClass(ApiFetch, [{\n        key: 'fetch',\n        value: function (_fetch) {\n            function fetch(_x) {\n                return _fetch.apply(this, arguments);\n            }\n\n            fetch.toString = function () {\n                return _fetch.toString();\n            };\n\n            return fetch;\n        }(function (responseAction) {\n            return fetch(this.apiUrl).then(function (response) {\n                return response.json();\n            }).then(function (json) {\n                return responseAction(json);\n            }).catch(function (ex) {\n                return console.error('failed', ex);\n            });\n        })\n    }]);\n\n    return ApiFetch;\n}();\n\nexports.default = ApiFetch;\n\n//////////////////\n// WEBPACK FOOTER\n// .//client/js/apiFetch.js\n// module id = 10\n// module chunks = 0\n//# sourceURL=webpack:///.//client/js/apiFetch.js?");

/***/ },
/* 11 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar API_URL = exports.API_URL = 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=5c16623f895c44948812458d23c5396e';\nvar ROOT_ELEMENT_ID = exports.ROOT_ELEMENT_ID = 'hacker-news';\n\n//////////////////\n// WEBPACK FOOTER\n// .//client/js/constants.js\n// module id = 11\n// module chunks = 0\n//# sourceURL=webpack:///.//client/js/constants.js?");

/***/ },
/* 12 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//Singleton\nvar ArticlesRenderer = function () {\n    function ArticlesRenderer(rootElementId) {\n        _classCallCheck(this, ArticlesRenderer);\n\n        if (!this.instance) {\n            this.instance = this;\n            this.rootElementId = rootElementId;\n        }\n        return this.instance;\n    }\n\n    _createClass(ArticlesRenderer, [{\n        key: 'generateNews',\n        value: function generateNews(json) {\n            var news = document.getElementById(this.rootElementId);\n            var articles = json.articles;\n\n            var HTML = articles.map(function (article) {\n                var articleAuthor = article.author,\n                    articleUrlToImage = article.urlToImage,\n                    articleDescription = article.description,\n                    articleTitle = article.title,\n                    articleUrl = article.url,\n                    articlePublishedAt = article.publishedAt;\n\n\n                var authors = articleAuthor ? '<h5 class=\"author\">' + articleAuthor + '</h5>' : '';\n                var img = articleUrlToImage ? '<img class=\"image-to-logo\" src=\"' + articleUrlToImage + ' \" />' : '';\n                var descriptions = articleDescription ? '<p class=\"description\">' + articleDescription + '</p>' : '';\n                var titles = '<a href=\"' + articleUrl + '\"><h3 class=\"title\">' + articleTitle + '</h3></a>';\n                var datetime = articlePublishedAt ? '<time>' + new Date(articlePublishedAt).toLocaleString('en-US').split(', ') + '</time>' : '';\n                var element = '<div>\\n                         ' + authors + '\\n                         ' + img + '\\n                         ' + titles + '\\n                         ' + descriptions + '                     \\n                         ' + datetime + '\\n                     </div>';\n                return element;\n            }).join('');\n            news.innerHTML = HTML;\n        }\n    }]);\n\n    return ArticlesRenderer;\n}();\n\nexports.default = ArticlesRenderer;\n\n//////////////////\n// WEBPACK FOOTER\n// .//client/js/renderer.js\n// module id = 12\n// module chunks = 0\n//# sourceURL=webpack:///.//client/js/renderer.js?");

/***/ }
/******/ ]);