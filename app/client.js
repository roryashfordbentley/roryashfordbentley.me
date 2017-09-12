'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

import App from './scripts.js';

/**
 * Components
 */

class Client extends React.Component{
    render(){
        return (
            <BrowserRouter basename="/portfolio/app">
                <App />
            </BrowserRouter>
        );
    }
}

export default Client;

/*ReactDOM.render(
    <BrowserRouter basename="/portfolio/app">
        <App />
    </BrowserRouter>,
    PortfolioApp
);*/