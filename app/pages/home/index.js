'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ApiPrefix from '../../lib/api';
import Header from '../../components/header';
import Footer from '../../components/footer';
import HomeIntro from '../../components/home-intro';
import FeaturedProjects from '../../components/featured-projects';

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
            }.bind(this),1000);
            
        });
    }

    render(){
        return ( 
            <div className="container">
                <Header loaded={this.state.loaded} />
                <HomeIntro text={this.state.introText} />
                <FeaturedProjects projects={this.state.featuredProjects} />
                <Footer />
            </div>
        );
    }
}

export default Home;