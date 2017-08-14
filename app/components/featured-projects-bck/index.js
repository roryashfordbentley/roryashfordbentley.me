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
            featuredProjects: [1,2,3]
        }
    }

    getListOfProjects(url) {
        var self = this;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let projects = data.acf.featured_projects;
            this.projectIds = [];
            
            for(let i = 0; i < projects.length; i++){
                fetch(this.projectsUrl + '/' + projects[i].featured_project + '/?_embed')
                .then((response) => response.json())
                .then((data) => this.projectIds.push(data));
            }

            self.setState({ featuredProjects: this.projectIds });
            console.log(this.state.featuredProjects);
        }).catch(function(err) {
            console.log(err);
        });
    }

    componentDidMount() {
        this.getListOfProjects(this.postListUrl);
    }

    componentDidUpdate() {
        console.log(this.state.featuredProjects);
    }

    render() {
        return (
            <section className="home-work-grid">
                <div className="wrapper">
                    <div className="g">
                        {
                            this.state.featuredProjects.map((project,index) => 
                                <div key={index}>Hello World</div>
                            )
                        }
                    </div>
                </div>
            </section> 
        );
    }
}

export default FeaturedProjects;