'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preloader = function (_React$Component) {
    _inherits(Preloader, _React$Component);

    function Preloader() {
        _classCallCheck(this, Preloader);

        return _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).apply(this, arguments));
    }

    _createClass(Preloader, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'preloader' },
                _react2.default.createElement(
                    'div',
                    { className: 'loading-animation' },
                    _react2.default.createElement(
                        'svg',
                        { className: 'loading-animation__svg', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' },
                        _react2.default.createElement('path', { className: 'loading-animation__path', d: 'M17.9 91.1V8.9h33.5s28.8-1.4 28.8 24.7c0 19.6-17.5 23.2-17.5 23.2L85 91.2H69.8l-21-33h-8.1V47.1h9.6s16.1 1.6 16.1-13.5-16.1-13.4-16.1-13.4H31.1v70.9H17.9z' })
                    )
                )
            );
        }
    }]);

    return Preloader;
}(_react2.default.Component);

exports.default = Preloader;