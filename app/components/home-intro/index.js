'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ApiPrefix from '../../lib/api';
import Fetch from 'whatwg-fetch';

class HomeIntro extends React.Component {

    render() {
        return (
            <div className="home-intro">
                <div className="home-intro__text" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
            </div>
        );
    }
}

export default HomeIntro;