'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _rightArrow = require('../icons/right-arrow');

var _rightArrow2 = _interopRequireDefault(_rightArrow);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectHeader = function (_React$Component) {
    _inherits(ProjectHeader, _React$Component);

    function ProjectHeader() {
        _classCallCheck(this, ProjectHeader);

        return _possibleConstructorReturn(this, (ProjectHeader.__proto__ || Object.getPrototypeOf(ProjectHeader)).apply(this, arguments));
    }

    _createClass(ProjectHeader, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'project-header' },
                _react2.default.createElement(
                    'div',
                    { className: 'project-header__text' },
                    _react2.default.createElement(
                        'span',
                        { className: 'project-header__taxonomy' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/projects' },
                            'Projects'
                        ),
                        '/',
                        _react2.default.createElement(
                            'span',
                            { className: 'project-header__taxonomy--bold' },
                            ' ',
                            this.props.taxonomy
                        )
                    ),
                    _react2.default.createElement(
                        'h1',
                        { className: 'project-header__title' },
                        this.props.title
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'project-header__aside' },
                    _react2.default.createElement(
                        _button2.default,
                        { link: this.props.link },
                        'View Project',
                        _react2.default.createElement(_rightArrow2.default, null)
                    )
                )
            );
        }
    }]);

    return ProjectHeader;
}(_react2.default.Component);

exports.default = ProjectHeader;