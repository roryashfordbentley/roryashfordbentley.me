'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class HomeIntro extends React.Component {

    constructor(props) {
        super(props);
        this.url = 'http://localhost/portfolio/wordpress/wp-json/wp/v2/pages/5'
        this.state = {
            text: ''
        }
    }

    getApiData(url){
        fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({ text: data.content.rendered }))
        .catch(function(err) {
            console.log(err);
        });
    }

    componentWillMount() {
        this.getApiData(this.url);
    }

    render() {
        return (
            <div className="home-intro">
                <div className="wrapper">
                    <div className="home-intro__text" dangerouslySetInnerHTML={{__html: this.state.text}}></div>
                </div>
            </div>
        );
    }
}

export default HomeIntro;