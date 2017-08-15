'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsGrid from '../projects-grid';

class Projects extends React.Component {
    
    constructor(props) {
        super(props);
        this.baseProjectsUrl = 'http://localhost/portfolio/wordpress/wp-json/wp/v2/projects/?slug=';
        this.slug = this.props.match.params.ProjectSlug;
        this.state = {
            title: '',
            taxonomy: '',
            url: '',
            content: '',
            technicalOverview: '',
            coverImg: '',
            detailImg1: '',
            detailImg2: ''
        }
    }

    getProjectData(url,slug) {
        fetch(url + slug + '&_embed')
        .then((response) => response.json())
        .then((data) => {

            console.log(data[0]);

            this.setState({ 
                title: data[0].title.rendered,
                taxonomy: data[0]._embedded['wp:term'][0][0].name,
                url: data[0].acf.link_to_project,
                content: data[0].content.rendered,
                technicalOverview: data[0].acf.technical_overview,
                coverImg: data[0].acf.cover_image_landscape.sizes.landscape_large,
                detailImg1: data[0].acf.detail_image_1.sizes.landscape_large,
                detailImg2: data[0].acf.detail_image_2.sizes.portrait_large
            });
        }).catch(function(err) {
            console.log(err);
        });
    }

    componentWillMount() {
        this.getProjectData(this.baseProjectsUrl,this.slug);
    }

    componentDidUpdate() {
        //console.log(this.state.data);
    }

    render() {
        return (
            <div className="wrapper">
                <section className="project-single">
                    <span className="project-single__taxonomy">{'Project/ ' + this.state.taxonomy}</span>
                    <h1 className="project-single__title">{this.state.title}</h1>
                    <img className="project-single__img" src={this.state.coverImg} />
                    <a className="btn" href={this.state.url}>View Project</a>

                    <div className="project-single__description" dangerouslySetInnerHTML={{__html: this.state.content}}></div>

                    <div className="g">
                        <div className="gi--1-1  gi--2-3--m">
                            <img className="project-single__img" src={this.state.detailImg1} />
                        </div>
                        <div className="gi--1-1  gi--1-3--m">
                            <img className="project-single__img" src={this.state.detailImg2} />
                        </div>
                    </div>
                    <h2>Technical Overview</h2>
                    <div className="project-single__technical-overview" dangerouslySetInnerHTML={{__html: this.state.technicalOverview}}></div>
                </section>
            </div>
        );
    }
}

export default Projects;