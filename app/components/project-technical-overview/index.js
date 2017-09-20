'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class TechnicalOverview extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="technical-overview">
                    <h2 className="technical-overview__title">Technical Overview</h2>
                    <div className="technical-overview__text" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                </div>
            </div>
        );
    }
}

TechnicalOverview.propTypes = {
    text: PropTypes.string,
};

export default TechnicalOverview;