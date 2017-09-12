'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _api = require('../../lib/api');

var _api2 = _interopRequireDefault(_api);

var _whatwgFetch = require('whatwg-fetch');

var _whatwgFetch2 = _interopRequireDefault(_whatwgFetch);

var _promisePolyfill = require('promise-polyfill');

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeaturedProject = function (_React$Component) {
    _inherits(FeaturedProject, _React$Component);

    function FeaturedProject(props) {
        _classCallCheck(this, FeaturedProject);

        var _this = _possibleConstructorReturn(this, (FeaturedProject.__proto__ || Object.getPrototypeOf(FeaturedProject)).call(this, props));

        _this.projectsUrl = _api2.default + 'projects';
        _this.state = {
            title: '',
            taxonomy: '',
            url: '',
            img: ''
        };
        return _this;
    }

    _createClass(FeaturedProject, [{
        key: 'getProject',
        value: function getProject(projectId) {
            var _this2 = this;

            var url = this.projectsUrl + '/' + projectId + '/?_embed';
            fetch(url).then(function (response) {
                return response.json();
            }).then(function (data) {
                //console.log(data);

                _this2.setState({
                    title: data.title.rendered,
                    taxonomy: data._embedded['wp:term'][0][0].name,
                    slug: data.slug,
                    img: _this2.aspectRatioImg(data)
                });
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: 'aspectRatioImg',
        value: function aspectRatioImg(data) {
            var img = '';

            if (data.acf.cover_image_landscape) {
                img = data.acf.cover_image_landscape.sizes.landscape_large;
                if (this.props.aspect === 'portrait') {
                    img = data.acf.cover_image_portrait.sizes.portrait_large;
                }
            }

            return img;
        }
    }, {
        key: 'aspectRatioGrid',
        value: function aspectRatioGrid() {
            var gridClass = 'featured-project  featured-project--landscape';
            if (this.props.aspect === 'portrait') {
                gridClass = 'featured-project  featured-project--portrait';
            }

            return gridClass;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getProject(this.props.id);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.aspectRatioGrid() },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/projects/' + this.state.slug },
                    _react2.default.createElement('img', { className: 'featured-project__img', src: this.state.img })
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'featured-project__cat' },
                    this.state.taxonomy
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/projects/' + this.state.slug },
                    _react2.default.createElement(
                        'h2',
                        { className: 'featured-project__title' },
                        this.state.title
                    )
                )
            );
        }
    }]);

    return FeaturedProject;
}(_react2.default.Component);

exports.default = FeaturedProject;