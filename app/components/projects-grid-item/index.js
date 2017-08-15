'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class ProjectsGridItem extends React.Component {

    render() {
        return (
            <div className="gi--1-1  gi--1-3--m">
                <div className="project-preview">
                    <img className="project-preview__img" src={this.props.img} />
                    <h2 className="project-preview__title">{this.props.title}</h2>
                </div>
            </div>    
        );
    }
}

export default ProjectsGridItem;