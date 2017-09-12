import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router'
import App from './scripts';

function handleRender(req, res) {
  // Renders our Hello component into an HTML string
  //const html = renderToString(<MyApp />);
  const context = {};
  const html = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  )

  // Load contents of index.html
  fs.readFile('./app/index.html', 'utf8', function (err, data) {
    if (err) throw err;

    // Inserts the rendered React HTML into our main div
    const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);

    // Sends the response back to the client
    res.send(document);
  });
}

const app = express();

// Serve built files with static files middleware
//app.use('/fonts', express.static(__dirname + '/build/fonts', { redirect: false }))
app.use(express.static(path.join(__dirname, 'assets')));
app.use('/static', express.static(path.join(__dirname, '/')));

// Serve requests with our handleRender function
app.get('*', handleRender);

// Start server
app.listen(3000);