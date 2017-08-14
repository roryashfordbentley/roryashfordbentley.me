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
            featuredProjects: []
        }
    }

    /**
     * Get List Of Featured Projects
     *
     * The data is pulled from ACF which is set in WP Admin
     * in the Home page. 
     */
    getListOfProjects(url) {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let projectsData = data.acf.featured_projects;
            console.log(projectsData); // order is correct here
            /**
             * Fetch the actual posts
             */
            this.projects = [];
            
            for(let i = 0; i < projectsData.length; i++){
                fetch(this.projectsUrl + '/' + projectsData[i].featured_project + '/?_embed')
                .then((response) => response.json())
                .then((data) => {
                    data.aspect_ratio = projectsData[i].aspect_ratio;
                    this.projects.push(data);

                    if(i === projectsData.length-1){
                        this.setState({ 
                            featuredProjects: this.projects 
                        });
                    }
                });
            }
        }).catch(function(err) {
            console.log(err);
        });
    }
    
    componentWillMount() {
        this.getListOfProjects(this.postListUrl);
    }

    componentDidUpdate() {
        //console.log(this.state.featuredProjects);
    }

    render() {
        return (
            <section className="home-work-grid">
                <div className="wrapper">
                    <div className="g">
                        {
                            this.state.featuredProjects.map((project,index) => {
                                let cat = project._embedded['wp:term'][0][0].name;
                                let title = project.title.rendered;
                                let imgAspectRatio = project.aspect_ratio;
                                let img = project.acf.cover_image_landscape;

                                if(imgAspectRatio === 'portrait'){
                                    img = project.acf.cover_image_portrait;
                                }
                                
                                return <FeaturedProject key={index} category={cat} title={title} aspect={imgAspectRatio} img={img} />
                            })
                        }
                    </div>
                </div>
            </section> 
        );
    }
}

export default FeaturedProjects;