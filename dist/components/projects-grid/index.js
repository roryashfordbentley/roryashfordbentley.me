'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _projectsGridItem = require('../projects-grid-item');

var _projectsGridItem2 = _interopRequireDefault(_projectsGridItem);

var _nukaCarousel = require('nuka-carousel');

var _nukaCarousel2 = _interopRequireDefault(_nukaCarousel);

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _buttonGroupPrevNext = require('../button-group-prev-next');

var _buttonGroupPrevNext2 = _interopRequireDefault(_buttonGroupPrevNext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectsGrid = function (_React$Component) {
    _inherits(ProjectsGrid, _React$Component);

    function ProjectsGrid(props) {
        _classCallCheck(this, ProjectsGrid);

        var _this = _possibleConstructorReturn(this, (ProjectsGrid.__proto__ || Object.getPrototypeOf(ProjectsGrid)).call(this, props));

        _this.baseProjectsUrl = _api2.default + 'projects?filter[taxonomy]=project_type&filter[term]=';
        _this.state = {
            data: []
        };
        return _this;
    }

    _createClass(ProjectsGrid, [{
        key: 'getListOfProjects',
        value: function getListOfProjects(url, taxonomyTerm) {
            var _this2 = this;

            fetch(url + taxonomyTerm).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this2.setState({ data: data });
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getListOfProjects(this.baseProjectsUrl, this.props.term);
        }
    }, {
        key: 'prevClick',
        value: function prevClick(e) {
            e.preventDefault();
            this.refs.slider.slickPrev();
        }
    }, {
        key: 'nextClick',
        value: function nextClick(e) {
            e.preventDefault();
            this.refs.slider.slickNext();
        }
    }, {
        key: 'outputItems',
        value: function outputItems() {
            var items = this.state.data.map(function (project, index) {
                var title = project.title.rendered;
                var slug = project.slug;
                var image = project.acf.cover_image_landscape ? project.acf.cover_image_landscape.sizes.landscape_large : '';

                return _react2.default.createElement(
                    'div',
                    { key: index },
                    _react2.default.createElement(_projectsGridItem2.default, { key: index, title: title, slug: slug, img: image })
                );
            });

            return items;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                responsive: [{
                    breakpoint: 800,
                    settings: { slidesToShow: 1 }
                }],
                centerMode: true,
                centerPadding: '50px'
            };

            return _react2.default.createElement(
                'div',
                { className: 'projects-grid  projects-grid--' + this.props.term },
                _react2.default.createElement(
                    'header',
                    { className: 'project-grid__header' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'projects-grid__title' },
                        this.props.title
                    ),
                    _react2.default.createElement(_buttonGroupPrevNext2.default, { onClickPrev: function onClickPrev(e) {
                            return _this3.prevClick(e);
                        }, onClickNext: function onClickNext(e) {
                            return _this3.nextClick(e);
                        } })
                ),
                this.outputItems().length > 0 ? _react2.default.createElement(
                    _reactSlick2.default,
                    _extends({ ref: 'slider' }, settings),
                    this.outputItems()
                ) : null
            );
        }
    }]);

    return ProjectsGrid;
}(_react2.default.Component);

exports.default = ProjectsGrid;