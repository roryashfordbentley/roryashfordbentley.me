'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';

class ProjectHeader extends React.Component {
    render() {
        return (
            <section className="project-header">
                <div className="project-header__text">
                    <span className="project-header__taxonomy">
                        Projects/ <span className="project-header__taxonomy--bold"> {this.props.taxonomy}</span>
                    </span>
                    <h1 className="project-header__title">{this.props.title}</h1>
                </div>
                <div className="project-header__aside">
                    <Button link={this.props.link} title="View Project" />
                </div>
            </section>              
        );
    }
}

export default ProjectHeader;