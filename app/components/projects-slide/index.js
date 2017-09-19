'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

class ProjectsGridItem extends React.Component {

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

export default ProjectsGridItem;