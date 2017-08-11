'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const app = document.querySelector("#app");

/**
 * Components
 */

import Header from './components/header';
import HomeIntro from './components/home-intro';
import FeaturedProjects from './components/featured-projects';

class App extends React.Component{
    
    render(){
        return (
            <div className="container">
                <Header />
                <HomeIntro />
                <FeaturedProjects />
            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  app
);