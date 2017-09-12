'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _scripts = require('./scripts');

var _scripts2 = _interopRequireDefault(_scripts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleRender(req, res) {
  // Renders our Hello component into an HTML string
  //const html = renderToString(<MyApp />);
  var context = {};
  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouter.StaticRouter,
    {
      location: req.url,
      context: context
    },
    _react2.default.createElement(_scripts2.default, null)
  ));

  // Load contents of index.html
  _fs2.default.readFile('./app/index.html', 'utf8', function (err, data) {
    if (err) throw err;

    // Inserts the rendered React HTML into our main div
    var document = data.replace(/<div id="app"><\/div>/, '<div id="app">' + html + '</div>');

    // Sends the response back to the client
    res.send(document);
  });
}

var app = (0, _express2.default)();

// Serve built files with static files middleware
//app.use('/fonts', express.static(__dirname + '/build/fonts', { redirect: false }))
app.use(_express2.default.static(_path2.default.join(__dirname, 'assets')));
app.use('/static', _express2.default.static(_path2.default.join(__dirname, '/')));

// Serve requests with our handleRender function
app.get('*', handleRender);

// Start server
app.listen(3000);