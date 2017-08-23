'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FeaturedProject from '../featured-project';

class FeaturedProjects extends React.Component {

    constructor(props) {
        super(props);
        this.postListUrl = 'http://localhost/portfolio/wordpress/wp-json/wp/v2/pages/5', // homepage
        this.state = {
            featuredProjects: []
        }
    }

    getListOfProjects(url) {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let projectsData = data.acf.featured_projects;
            this.setState({ 
                featuredProjects: projectsData
            });
        }).catch(function(err) {
            console.log(err);
        });
    }

    componentWillMount() {
        this.getListOfProjects(this.postListUrl);
    }

    render() {
        return (
            <section className="home-work-grid">

                <div className="g">
                    {
                        this.state.featuredProjects.map((project,index) => {
                            let id = project.featured_project;
                            let aspectRatio = project.aspect_ratio;
                            return <FeaturedProject key={index} id={id} aspect={aspectRatio} />
                        })
                    }
                </div>

            </section> 
        );
    }
}

export default FeaturedProjects;