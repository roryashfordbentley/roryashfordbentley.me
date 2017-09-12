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

var Hamburger = function (_React$Component) {
    _inherits(Hamburger, _React$Component);

    function Hamburger() {
        _classCallCheck(this, Hamburger);

        return _possibleConstructorReturn(this, (Hamburger.__proto__ || Object.getPrototypeOf(Hamburger)).apply(this, arguments));
    }

    _createClass(Hamburger, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                { name: 'main menu', id: 'hamburger', onClick: this.props.onClick, className: this.props.toggle === "open" ? "hamburger hamburger--open" : "hamburger" },
                _react2.default.createElement(
                    'svg',
                    { className: 'hamburger__svg', viewBox: '0 0 100 100' },
                    _react2.default.createElement('line', { className: 'hamburger__line  hamburger__line--1', x1: '0', y1: '50', x2: '100', y2: '50' }),
                    _react2.default.createElement('line', { className: 'hamburger__line  hamburger__line--2', x1: '0', y1: '50', x2: '100', y2: '50' }),
                    _react2.default.createElement('line', { className: 'hamburger__line  hamburger__line--3', x1: '0', y1: '50', x2: '100', y2: '50' })
                )
            );
        }
    }]);

    return Hamburger;
}(_react2.default.Component);

exports.default = Hamburger;