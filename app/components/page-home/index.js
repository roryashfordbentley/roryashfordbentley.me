'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ApiPrefix from '../../lib/api';
import HomeIntro from '../home-intro';
import FeaturedProjects from '../featured-projects';
import Preloader from '../preloader';

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
        //.then((data) => this.setState({ introText: data.content.rendered }))
        //.then(data => Promise.resolve(data))
        .catch(function(err) {
            console.log(err);
        });
    }

    getListOfProjects(url) {
        return fetch(url)
        .then((response) => response.json())
        //.then((data) => this.setState({ featuredProjects: data.acf.featured_projects }))
        //.then(data => Promise.resolve(data))
        .catch(function(err) {
            console.log(err);
        });
    }


    componentDidMount() {
        let getData = this.getApiData(this.introTextUrl);
        //let projects = this.getListOfProjects(this.introTextUrl);
        //console.log(Promise.resolve(intro));
        getData.then(data => { 
            console.log(data);
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
                <Preloader loaded={this.state.loaded} />
                <HomeIntro text={this.state.introText} />
                <FeaturedProjects projects={this.state.featuredProjects} />
            </div>
        );
    }
}

export default Home;