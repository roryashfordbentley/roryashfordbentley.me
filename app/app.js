'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

const app = document.querySelector("#app");

/**
 * Components
 */

import Header from './components/header';
import Home from './components/page-home';
import Projects from './components/page-projects';
import About from './components/page-about';
import Contact from './components/page-contact';
import FeaturedProjects from './components/featured-projects';
import ProjectSingle from './components/project-single';

class App extends React.Component{
    render(){
        return (
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
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