'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';

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