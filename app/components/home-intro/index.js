'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class HomeIntro extends React.Component {
    render() {
        return (
            <div className="home-intro">
                <div className="home-intro__text" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
            </div>
        );
    }
}

HomeIntro.propTypes = {
    text: PropTypes.string
};

export default HomeIntro;