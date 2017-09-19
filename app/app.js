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
import Home from './components/page-home';
import Projects from './components/page-projects';
import Project from './components/page-project';
import About from './components/page-about';
import Contact from './components/page-contact';
import FeaturedProjects from './components/featured-projects';
import ProjectSingle from './components/project-single';

/*if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}*/

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