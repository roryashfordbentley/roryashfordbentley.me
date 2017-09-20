'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

const app = document.querySelector("#app");

import Header from './components/header';

import Home from './pages/home';
import Projects from './pages/projects';
import Project from './pages/project';
import About from './pages/about';
import Contact from './pages/contact';

const sw = 'http://' + location.hostname +':3000/portfolio/app/serviceworker.js';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register(sw).then(function(registration) {
            // Registration was successful
        }, function(err) {
            // registration failed
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

class App extends React.Component{
    render(){
        return (
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route path="/projects/:ProjectSlug" component={Project} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter basename="/portfolio/app">
        <App />
    </BrowserRouter>,
    app
);