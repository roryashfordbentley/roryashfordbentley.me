'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ApiPrefix from '../../lib/api';
import HomeIntro from '../home-intro';
import FeaturedProjects from '../featured-projects';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.introTextUrl = ApiPrefix + 'pages/5'
        this.state = {
            introText: ''
        }
    }

    getIntroText(url){
        fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({ introText: data.content.rendered }))
        .catch(function(err) {
            console.log(err);
        });
    }

    componentWillMount() {
        this.getIntroText(this.introTextUrl);
    }

    render(){
        return (
            <div className="container">
                <HomeIntro text={this.state.introText} />
                <FeaturedProjects />
            </div>
        );
    }
}

export default Home;