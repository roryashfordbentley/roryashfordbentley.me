'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ApiPrefix from '../../lib/api';
import Fetch from 'whatwg-fetch';
import Promise from 'promise-polyfill'; 

class HomeIntro extends React.Component {

    constructor(props) {
        super(props);
        this.url = ApiPrefix + 'pages/5'
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
                <div className="home-intro__text" dangerouslySetInnerHTML={{__html: this.state.text}}></div>
            </div>
        );
    }
}

export default HomeIntro;