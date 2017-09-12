'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _home = require('../home');

var _home2 = _interopRequireDefault(_home);

var _projects = require('../projects');

var _projects2 = _interopRequireDefault(_projects);

var _about = require('../about');

var _about2 = _interopRequireDefault(_about);

var _contact = require('../contact');

var _contact2 = _interopRequireDefault(_contact);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_React$Component) {
    _inherits(Navigation, _React$Component);

    function Navigation() {
        _classCallCheck(this, Navigation);

        return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
    }

    _createClass(Navigation, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { className: this.props.toggle === "open" ? "nav nav--open" : "nav" },
                _react2.default.createElement('div', { className: this.props.toggle === "open" ? "nav__bg nav__bg--open" : "nav__bg" }),
                _react2.default.createElement(
                    'ul',
                    { className: this.props.toggle === "open" ? "nav__list nav__list--open" : "nav__list" },
                    _react2.default.createElement(
                        'li',
                        { onClick: this.props.onClick, className: 'nav__item' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/' },
                            'Home'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { onClick: this.props.onClick, className: 'nav__item' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/projects' },
                            'Projects'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { onClick: this.props.onClick, className: 'nav__item' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/about' },
                            'About'
                        )
                    )
                ),
                _react2.default.createElement(
                    'ul',
                    { className: this.props.toggle === "open" ? "nav__sub-nav nav__sub-nav--open" : "nav__sub-nav" },
                    _react2.default.createElement(
                        'li',
                        { className: 'nav__sub-nav__item' },
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            'Mail'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'nav__sub-nav__item' },
                        _react2.default.createElement(
                            'a',
                            { href: '//github.com/roikles' },
                            'Github'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'nav__sub-nav__item' },
                        _react2.default.createElement(
                            'a',
                            { href: '//codepen.io/roikles/' },
                            'Codepen'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'nav__sub-nav__item' },
                        _react2.default.createElement(
                            'a',
                            { href: '//twitter.com/roikles' },
                            'Twitter'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'nav__sub-nav__item' },
                        _react2.default.createElement(
                            'a',
                            { href: '//instagram.com/roikles' },
                            'Instagram'
                        )
                    )
                )
            );
        }
    }]);

    return Navigation;
}(_react2.default.Component);

exports.default = Navigation;