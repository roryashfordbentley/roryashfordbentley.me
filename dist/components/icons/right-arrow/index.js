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

var RightArrowIcon = function (_React$Component) {
    _inherits(RightArrowIcon, _React$Component);

    function RightArrowIcon() {
        _classCallCheck(this, RightArrowIcon);

        return _possibleConstructorReturn(this, (RightArrowIcon.__proto__ || Object.getPrototypeOf(RightArrowIcon)).apply(this, arguments));
    }

    _createClass(RightArrowIcon, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'svg',
                { className: 'icon icon--right-arrow', xmlns: 'http://www.w3.org/2000/svg', viewBox: '6930.5 182.146 22.572 10.598', preserveAspectRatio: 'xMinYMax meet' },
                _react2.default.createElement(
                    'g',
                    null,
                    _react2.default.createElement('path', { className: 'icon__path', d: 'M6930.5 187.5h22' }),
                    _react2.default.createElement('path', { className: 'icon__path', d: 'M6947.42 182.5l4.944 4.945-4.945 4.945' })
                )
            );
        }
    }]);

    return RightArrowIcon;
}(_react2.default.Component);

exports.default = RightArrowIcon;