'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsGridItem from '../projects-grid-item';

class ProjectsGrid extends React.Component {

    constructor(props) {
        super(props);
        this.baseProjectsUrl = 'http://localhost/portfolio/wordpress/wp-json/wp/v2/projects?filter[taxonomy]=project_type&filter[term]=';
        this.state = {
            data: []
        }
    }

    getListOfProjects(url,taxonomyTerm) {
        fetch(url + taxonomyTerm)
        .then((response) => response.json())
        .then((data) => {
            this.setState({ 
                data: data
            });
        }).catch(function(err) {
            console.log(err);
        });
    }

    componentWillMount() {
        this.getListOfProjects(this.baseProjectsUrl,this.props.term);
    }

    componentDidUpdate() {
        console.log(this.state.data);
    }

    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <h1>{this.props.title}</h1>

                    <div className="g">
                        {
                            this.state.data.map((project,index) => {
                                let title = project.title.rendered;
                                let image = project.acf.cover_image_landscape.sizes.landscape_large;
                                return <ProjectsGridItem key={index} title={title} img={image} />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsGrid;