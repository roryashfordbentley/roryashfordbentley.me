'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ApiPrefix from '../../lib/api';
import Fetch from 'whatwg-fetch';
import PropTypes from 'prop-types';

import Slide from '../projects-slide';
import Slider from 'react-slick';
import ButtonGroupPrevNext from '../button-group-prev-next';

class ProjectsSlider extends React.Component {

    prevClick(e) {
        e.preventDefault();
        this.refs.slider.slickPrev();
    }

    nextClick(e) {
        e.preventDefault();
        this.refs.slider.slickNext();
    }

    outputItems(){
        let items = Object.keys(this.props.data).map((key,index) => {
            let project = this.props.data[key],
                title = project.title.rendered,
                slug = project.slug,
                image = project.acf.cover_image_landscape ? project.acf.cover_image_landscape.sizes.landscape_large : '';

            return (
                <div key={index}>
                    <Slide key={index} title={title} slug={slug} img={image} />
                </div>
            )
        });

        return items;
    }

    bgColor(id){
        if(id === 1){
            return 'projects-slider--work';
        } else if (id === 2){
            return 'projects-slider--open-source';
        } else if (id === 3){
            return 'projects-slider--experiments';
        }

        return 'projectspoop';
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
            <div className={'projects-slider ' + this.bgColor(this.props.id)}>
                <header className="project-slider__header">
                    <h1 className="projects-slider__title">{this.props.title}</h1>
                    <ButtonGroupPrevNext onClickPrev={(e)=>this.prevClick(e)} onClickNext={(e)=>this.nextClick(e)} />
                </header>
                {this.outputItems().length > 0 ? <Slider ref="slider" {...settings}>{ this.outputItems() }</Slider> : null}
            </div>
        );
    }
}

ProjectsSlider.propTypes = {
    title: PropTypes.string,
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    id: PropTypes.number
};

export default ProjectsSlider;