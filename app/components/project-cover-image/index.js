'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ProjectCoverImage extends React.Component {
    render() {
        return (
            <section className="project-cover">
                <img className="project-cover__img" src={this.props.img} />
            </section>           
        );
    }
}

ProjectCoverImage.propTypes = {
    img: PropTypes.string
};

export default ProjectCoverImage;