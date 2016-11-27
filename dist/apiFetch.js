'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var apiFetch = function () {
    function apiFetch(apiUrl) {
        _classCallCheck(this, apiFetch);
    }

    _createClass(apiFetch, [{
        key: 'fetch',
        value: function (_fetch) {
            function fetch(_x) {
                return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
                return _fetch.toString();
            };

            return fetch;
        }(function (responseAction) {
            return fetch(this.apiUrl).then(function (response) {
                return response.json();
            }).then(function (json) {
                return responseAction(json);
            }).catch(function (ex) {
                return console.error('failed', ex);
            });
        })
    }]);

    return apiFetch;
}();

exports.default = apiFetch;