'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class HomeIntro extends React.Component {

    constructor(props) {
        super(props);
        this.url = 'http://localhost/portfolio/wordpress/wp-json/wp/v2/pages/5'
        this.state = {
            results: ''
        }
    }

    getApiData(){
        fetch(this.url)
        .then((response) => response.json())
        .then((data) => this.setState({ results: data.content.rendered }))
        .catch(function(err) {
            console.log(err);
        });
    }

    componentDidMount() {
        this.getApiData();
        console.log(this.state);
    }

    componentDidUpdate() {
        console.log(this.state); // works!!
    }

    render() {
        return (
            <div className="home-intro">
                <div className="wrapper">
                    <div className="home-intro__text" dangerouslySetInnerHTML={{__html: this.state.results}}></div>
                </div>
            </div>
        );
    }
}

export default HomeIntro;