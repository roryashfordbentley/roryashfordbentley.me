'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsGridItem from '../projects-grid-item';
import Carousel from 'nuka-carousel';
import ButtonGroupPrevNext from '../button-group-prev-next';

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

    prevClick(e) {
        e.preventDefault();
        this.refs.carousel.previousSlide();
    }

    nextClick(e) {
        e.preventDefault();
        this.refs.carousel.nextSlide();
    }

    outputItems(){
        let items = this.state.data.map((project,index) => {
            let title = project.title.rendered;
            let slug = project.slug;
            let image = '';
            
            if(project.acf.cover_image_landscape){
                image = project.acf.cover_image_landscape ? project.acf.cover_image_landscape.sizes.landscape_large : ''
            }
            
            return <ProjectsGridItem key={index} title={title} slug={slug} img={image} />
        });

        return items;
    }

    render() {
        return (
            <div className={'projects-grid  projects-grid--' + this.props.term}>
                <header className="project-grid__header">
                    <h1 className="projects-grid__title">{this.props.title}</h1>
                    <ButtonGroupPrevNext onClickPrev={(e)=>this.prevClick(e)} onClickNext={(e)=>this.nextClick(e)} />
                </header>

                <Carousel ref="carousel" decorators={[]} slidesToShow={3} cellSpacing={20} wrapAround={true}>
                    { this.outputItems() }
                </Carousel>

            </div>
        );
    }
}

export default ProjectsGrid;