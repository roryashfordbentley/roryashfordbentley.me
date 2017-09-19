'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';

import ApiPrefix from '../../lib/api';
import Header from '../header';
import HomeIntro from '../home-intro';
import FeaturedProjects from '../featured-projects';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.introTextUrl = ApiPrefix + 'pages/5'
        this.state = {
            loaded: false,
            introText: '',
            featuredProjects: []
        }
    }

    getApiData(url){
        return fetch(url)
        .then((response) => response.json())
        .catch(function(err) {
            console.log(err);
        });
    }

    componentDidMount() {
        let getData = this.getApiData(this.introTextUrl);
        getData.then(data => { 
            this.setState({ featuredProjects: data.acf.featured_projects });
            this.setState({ introText: data.content.rendered });
            setTimeout(function(){
                this.setState({ loaded: true })
            }.bind(this),3000);
            
        });
    }

    render(){
        return ( 
            <div className="container">
                <Header loaded={this.state.loaded} />
                <HomeIntro text={this.state.introText} />
                <FeaturedProjects projects={this.state.featuredProjects} />
            </div>
        );
    }
}

export default Home;