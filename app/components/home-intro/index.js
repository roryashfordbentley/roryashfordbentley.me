'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class HomeIntro extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-intro">
                <div className="wrapper">
                    <p className="home-intro__text">Frontend Developer from West Yorkshire building scalable, responsive websites for medium to large companies around the world.</p>
                </div>
            </div>
        );
    }
}

export default HomeIntro;