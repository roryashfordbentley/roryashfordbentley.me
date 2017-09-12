'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _hamburger = require('../hamburger');

var _hamburger2 = _interopRequireDefault(_hamburger);

var _nav = require('../nav');

var _nav2 = _interopRequireDefault(_nav);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = {
            menuToggle: 'closed'
        };

        _this.toggleMenu = _this.toggleMenu.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: 'toggleMenu',
        value: function toggleMenu() {
            if (this.state.menuToggle === 'closed') {
                this.setState({ menuToggle: 'open' });
            } else {
                this.setState({ menuToggle: 'closed' });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                { className: 'site-header' },
                _react2.default.createElement(
                    'h1',
                    { className: this.state.menuToggle === "open" ? "logo logo--alt" : "logo" },
                    'Rory Ashford'
                ),
                _react2.default.createElement(_hamburger2.default, { onClick: this.toggleMenu, toggle: this.state.menuToggle }),
                _react2.default.createElement(_nav2.default, { onClick: this.toggleMenu, toggle: this.state.menuToggle })
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;