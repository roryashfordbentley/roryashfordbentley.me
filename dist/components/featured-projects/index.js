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

var _featuredProject = require('../featured-project');

var _featuredProject2 = _interopRequireDefault(_featuredProject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeaturedProjects = function (_React$Component) {
    _inherits(FeaturedProjects, _React$Component);

    function FeaturedProjects(props) {
        _classCallCheck(this, FeaturedProjects);

        var _this = _possibleConstructorReturn(this, (FeaturedProjects.__proto__ || Object.getPrototypeOf(FeaturedProjects)).call(this, props));

        _this.postListUrl = _api2.default + 'pages/5', // homepage
        _this.state = {
            featuredProjects: []
        };
        return _this;
    }

    _createClass(FeaturedProjects, [{
        key: 'getListOfProjects',
        value: function getListOfProjects(url) {
            var _this2 = this;

            fetch(url).then(function (response) {
                return response.json();
            }).then(function (data) {
                var projectsData = data.acf.featured_projects;
                _this2.setState({
                    featuredProjects: projectsData
                });
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            //this.getListOfProjects(this.postListUrl);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'featured-projects' },
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'featured-projects__grid' },
                        this.state.featuredProjects.map(function (project, index) {
                            var id = project.featured_project;
                            var aspectRatio = project.aspect_ratio;
                            return _react2.default.createElement(_featuredProject2.default, { key: index, id: id, aspect: aspectRatio });
                        })
                    )
                )
            );
        }
    }]);

    return FeaturedProjects;
}(_react2.default.Component);

exports.default = FeaturedProjects;