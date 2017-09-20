'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import FeaturedProject from '../featured-project';

class FeaturedProjects extends React.Component {
    render() {
        return (
            <section className="featured-projects">
                <div className="wrapper">
                    <div className="featured-projects__grid">
                        {
                            this.props.projects.map((project,index) => {
                                let id = project.featured_project;
                                let aspectRatio = project.aspect_ratio;
                                return <FeaturedProject key={index} id={id} aspect={aspectRatio} />
                            })
                        }
                    </div>
                </div>
            </section> 
        );
    }
}

FeaturedProject.propTypes = {
    projects: PropTypes.array,
};

export default FeaturedProjects;