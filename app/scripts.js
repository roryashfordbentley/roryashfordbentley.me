'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Route } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import FourOhFour from './components/404';

class App extends React.Component{
    render(){
        return (
            <div className="container">
                hello world
            </div>
        );
    }
}

export default App;

/*ReactDOM.render(
    <BrowserRouter basename="/portfolio/app">
        <App />
    </BrowserRouter>,
    PortfolioApp
);*/