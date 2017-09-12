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

var About = function (_React$Component) {
    _inherits(About, _React$Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'section',
                    { className: 'about-header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'about-header__text' },
                        _react2.default.createElement(
                            'h1',
                            { className: 'about-header__title' },
                            'About'
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'about-content  about-content--who' },
                    _react2.default.createElement(
                        'div',
                        { className: 'about-content__heading' },
                        _react2.default.createElement(
                            'h2',
                            { className: 'about-content__title' },
                            'Who?'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'about-content__info' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'I\u2019m a 32 year old developer with 10 years of experience building websites and apps for a wide range of clients.'
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'about-content  about-content--what' },
                    _react2.default.createElement(
                        'div',
                        { className: 'about-content__heading' },
                        _react2.default.createElement(
                            'h2',
                            { className: 'about-content__title' },
                            'What?'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'about-content__info' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'I began my career as an aspiring graphic designer but it quickly became apparent that I had much more interest in web development and software engineering.'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'I have worked across the spectrum of full stack development but I really enjoy working on frontend projects utilising HTML, Sass, BEM, Javascript, jQuery and recently React. Creating lightweight modular frontends that scale.'
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'about-content  about-content--clients' },
                    _react2.default.createElement(
                        'div',
                        { className: 'about-content__heading' },
                        _react2.default.createElement(
                            'h2',
                            { className: 'about-content__title' },
                            'Clients'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'about-content__info' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Ace Performance, Aire Valley Architectural, Airflow Compressors, Ambrose Hire, Ankerherz, Ann Forshaws, Baie Slings, BARCA Leeds, Baxandalls, Bodycraft, Bradley Bar, CIGA, Cohen & Wilks, The Citizenry, Consultant Medical, Control & Power, CWISC, Elevate Leeds, ERS Medical, Expect Distribution, Flagship Leeds, Hansons Chartered Surveyors, Herculean, Insuletics, Just a Boy, Keystone Healthcare, Kingston Thermal, Lansdowne Motors, MAE Care, Mark Thompson, Ministry Of Sound, NAPA Sports Nutrition, Newgen Power, NiceMartin, Packt Publishing, S+B, School Milk, Trueform Digital, Wetherby Building Systems'
                        )
                    )
                )
            );
        }
    }]);

    return About;
}(_react2.default.Component);

exports.default = About;