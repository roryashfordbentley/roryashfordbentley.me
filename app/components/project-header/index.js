'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';
import RightArrow from '../icons/right-arrow';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

class ProjectHeader extends React.Component {

    linkTitle(){
        if (this.props.taxonomy === 'Work'){
            return 'View Website';
        } else if (this.props.taxonomy === 'Open Source') {
            return 'View On Github';
        } else if (this.props.taxonomy === 'Experiment') {
            return 'View On Codepen';
        } else {
            return 'View Project';
        }
    }

    render() {
        return (
            <section className="project-header">
                <div className="project-header__text">
                    <span className="project-header__taxonomy">
                        <Link to="/projects">Projects</Link>/ 
                        <span className="project-header__taxonomy--bold"> {this.props.taxonomy}</span>
                    </span>
                    <h1 className="project-header__title">{this.props.title}</h1>
                </div>
                <div className="project-header__aside">
                    <Button link={this.props.link}>
                        {this.linkTitle()}
                        <RightArrow />
                    </Button>
                </div>
            </section>              
        );
    }
}

ProjectHeader.propTypes = {
    taxonomy: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string
};

export default ProjectHeader;