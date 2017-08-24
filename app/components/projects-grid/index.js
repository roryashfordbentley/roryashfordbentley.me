'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'whatwg-fetch';

import ProjectsGridItem from '../projects-grid-item';
import Carousel from 'nuka-carousel';
import Slider from 'react-slick';
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
            this.setState({ data: data });
        }).catch(function(err) {
            console.log(err);
        });
    }

    componentDidMount() {
        this.getListOfProjects(this.baseProjectsUrl,this.props.term);
    }

    prevClick(e) {
        e.preventDefault();
        this.refs.slider.slickPrev();
    }

    nextClick(e) {
        e.preventDefault();
        this.refs.slider.slickNext();
    }

    outputItems(){
        let items = this.state.data.map((project,index) => {
            let title = project.title.rendered;
            let slug = project.slug;
            let image = project.acf.cover_image_landscape ? project.acf.cover_image_landscape.sizes.landscape_large : '';

            return (
                <div key={index}>
                    <ProjectsGridItem key={index} title={title} slug={slug} img={image} />
                </div>
            )
        });

        return items;
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 800,
                settings: { slidesToShow: 1 }
            }],
            centerMode: true,
            centerPadding: '50px',
        };

        return (
            <div className={'projects-grid  projects-grid--' + this.props.term}>
                <header className="project-grid__header">
                    <h1 className="projects-grid__title">{this.props.title}</h1>
                    <ButtonGroupPrevNext onClickPrev={(e)=>this.prevClick(e)} onClickNext={(e)=>this.nextClick(e)} />
                </header>
                {this.outputItems().length > 0 ? <Slider ref="slider" {...settings}>{ this.outputItems() }</Slider> : null}
            </div>
        );
    }
}

export default ProjectsGrid;