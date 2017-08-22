'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

class ProjectsGridItem extends React.Component {

    render() {
        return (
            <div className="project-preview">
                <Link to={'/projects/' + this.props.slug}>
                    <img className="project-preview__img" onLoad={() => {window.dispatchEvent(new Event('resize'));}} src={this.props.img} />
                </Link>
                <h2 className="project-preview__title">{this.props.title}</h2>
            </div>
        );
    }
}

export default ProjectsGridItem;