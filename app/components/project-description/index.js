'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ProjectDescription extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="project-single__description" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
            </div>
        );
    }
}


ProjectDescription.propTypes = {
    text: PropTypes.string
};

export default ProjectDescription;