'use strict';

var _renderer = require('renderer.js');

var _renderer2 = _interopRequireDefault(_renderer);

var _apiFetch = require('apiFetch.js');

var _apiFetch2 = _interopRequireDefault(_apiFetch);

var _constants = require('constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var news = function news() {
  _classCallCheck(this, news);
};

var api = new _apiFetch2.default(_constants.API_URL);
var renderer = new _renderer2.default(_constants.ROOT_ELEMENT_ID);
//api.fetch(renderer.generateNews);