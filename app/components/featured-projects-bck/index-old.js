'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FeaturedProject from '../featured-project';

class FeaturedProjects extends React.Component {

    constructor(props) {
        super(props);
        this.postListUrl = 'http://localhost/portfolio/wordpress/wp-json/wp/v2/pages/5', // homepage
        this.projectsUrl = 'http://localhost/portfolio/wordpress/wp-json/wp/v2/projects' //projects
        this.state = {
            featuredProjects: ''
        }
    }

    /**
     * Get List Of Projects
     *
     * Fetches the featured project IDs for the component
     * Has a nested fetch call in a loop to get the post objects
     * and adds them to featuredProject state
     */
    getListOfProjects(url) {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let projects = data.acf.featured_projects;
            let projectIds = [];
            
            for(let i = 0; i < projects.length; i++){
                fetch(this.projectsUrl + '/' + projects[i].featured_project + '/?_embed')
                .then((response) => response.json())
                .then((data) => projectIds.push(data));
            }
            // extend this to reveal the info we will need here
            this.setState({ featuredProjects: projectIds });
            //console.log(this.state.featuredProjects);
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    /*createProject() {
        let projectsData = this.state.featuredProjects;
        console.log(projects);
        
        let projects = projectsData.map((project,index) =>
            <div className="gi--1-1  gi--2-3--m">
                <FeaturedProject key={index} category="Work" title="Ankerherz" img="//source.unsplash.com/800x500" />
            </div>
        );

        return projects;
    }*/

    componentWillMount() {
        this.getListOfProjects(this.postListUrl);
        //console.log(this.createProject());
    }

    componentDidUpdate() {
        //console.log(this.state);
        //this.createProject();
        //this.createProject();
        
        let projectsData = this.state.featuredProjects;
         
        let projects = projectsData.map((project,index) =>
            <div className="gi--1-1  gi--2-3--m">
                <FeaturedProject key={index} category="Work" title="Ankerherz" img="//source.unsplash.com/800x500" />
            </div>
        );
        console.log(projects);
    }

    render() {
        return (
            <section className="home-work-grid">
                <div className="wrapper">
                    <div className="g">
                        <div className="gi--1-1  gi--2-3--m">
                            <FeaturedProject category="Work" title="Ankerherz" img="//source.unsplash.com/800x500" />
                        </div>
                        <div className="gi--1-1  gi--1-3--m">
                            <FeaturedProject category="Open Source" title="Gridtacular" img="//source.unsplash.com/400x545" />
                        </div>

                        <div className="gi--1-1  gi--1-3--m">
                            <FeaturedProject category="Experiment" title="WeeGrid" img="//source.unsplash.com/400x545" />
                        </div>
                        <div className="gi--1-1  gi--1-3--m">
                            <FeaturedProject category="Open Source" title="Flexbones" img="//source.unsplash.com/400x545" />
                        </div>
                        <div className="gi--1-1  gi--1-3--m">
                            <FeaturedProject category="Experiment" title="Canvas Particles" img="//source.unsplash.com/400x545" />
                        </div>

                        <div className="gi--1-1  gi--1-3--m">
                            <FeaturedProject category="Open Source" title="WP BEM Menu" img="//source.unsplash.com/400x545" />
                        </div>
                        <div className="gi--1-1  gi--2-3--m">
                            <FeaturedProject category="Work" title="The Citizenry" img="//source.unsplash.com/800x500" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
            </section>
            
        );
    }
}

export default FeaturedProjects;