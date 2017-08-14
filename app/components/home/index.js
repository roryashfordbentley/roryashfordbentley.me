'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import HomeIntro from '../home-intro';
import FeaturedProjects from '../featured-projects';

class Home extends React.Component {

    render(){
        return (
            <div className="container">
                <HomeIntro />
                <FeaturedProjects />
            </div>
        );
    }
}

export default Home;