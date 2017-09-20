'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

class ProjectsSlide extends React.Component {

    render() {
        return (
            <div className="project-preview">
                <Link className="project-preview__link" to={'/projects/' + this.props.slug}>
                    <img className="project-preview__img" onLoad={() => {window.dispatchEvent(new Event('resize'));}} src={this.props.img} />
                </Link>
                <h2 className="project-preview__title">
                    <Link to={'/projects/' + this.props.slug}>{this.props.title}</Link>
                </h2>
            </div>
        );
    }
}

ProjectsSlide.propTypes = {
    slug: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
};

export default ProjectsSlide;