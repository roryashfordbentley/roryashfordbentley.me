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

var _projectSingleHeader = require('../project-single-header');

var _projectSingleHeader2 = _interopRequireDefault(_projectSingleHeader);

var _projectSingleCoverImage = require('../project-single-cover-image');

var _projectSingleCoverImage2 = _interopRequireDefault(_projectSingleCoverImage);

var _projectSingleDetailImages = require('../project-single-detail-images');

var _projectSingleDetailImages2 = _interopRequireDefault(_projectSingleDetailImages);

var _projectSingleTechnicalOverview = require('../project-single-technical-overview');

var _projectSingleTechnicalOverview2 = _interopRequireDefault(_projectSingleTechnicalOverview);

var _projectSingleDescription = require('../project-single-description');

var _projectSingleDescription2 = _interopRequireDefault(_projectSingleDescription);

var _codepen = require('../codepen');

var _codepen2 = _interopRequireDefault(_codepen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$Component) {
    _inherits(Projects, _React$Component);

    function Projects(props) {
        _classCallCheck(this, Projects);

        var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

        _this.baseProjectsUrl = _api2.default + 'projects/?slug=';
        _this.slug = _this.props.match.params.ProjectSlug;
        _this.state = {
            title: '',
            taxonomy: '',
            url: '',
            content: '',
            technicalOverview: '',
            coverImg: '',
            detailImg1: '',
            detailImg2: '',
            codepen: ''
        };
        return _this;
    }

    _createClass(Projects, [{
        key: 'getProjectData',
        value: function getProjectData(url, slug) {
            var _this2 = this;

            fetch(url + slug + '&_embed').then(function (response) {
                return response.json();
            }).then(function (data) {

                console.log(data[0].acf.codepen_embed);

                _this2.setState({
                    title: data[0].title.rendered,
                    taxonomy: data[0]._embedded['wp:term'][0][0].name,
                    url: data[0].acf.link_to_project,
                    content: data[0].content.rendered,
                    technicalOverview: data[0].acf.technical_overview,
                    coverImg: data[0].acf.cover_image_landscape ? data[0].acf.cover_image_landscape.sizes.landscape_cropped : '',
                    detailImg1: data[0].acf.detail_image_1 ? data[0].acf.detail_image_1.sizes.landscape_large : '',
                    detailImg2: data[0].acf.detail_image_2 ? data[0].acf.detail_image_2.sizes.landscape_large : '',
                    codepen: data[0].acf.codepen_embed
                });
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getProjectData(this.baseProjectsUrl, this.slug);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'project-single' },
                _react2.default.createElement(_projectSingleHeader2.default, { taxonomy: this.state.taxonomy, title: this.state.title, link: this.state.url }),
                _react2.default.createElement(_projectSingleCoverImage2.default, { img: this.state.coverImg }),
                _react2.default.createElement(_projectSingleDescription2.default, { text: this.state.content }),
                _react2.default.createElement(_codepen2.default, { code: this.state.codepen }),
                _react2.default.createElement(_projectSingleDetailImages2.default, { img1: this.state.detailImg1, img2: this.state.detailImg2 }),
                _react2.default.createElement(_projectSingleTechnicalOverview2.default, { text: this.state.technicalOverview })
            );
        }
    }]);

    return Projects;
}(_react2.default.Component);

exports.default = Projects;