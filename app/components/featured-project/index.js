'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ApiPrefix from '../../lib/api';
import Fetch from 'whatwg-fetch';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../button';
import RightArrow from '../icons/right-arrow';

class FeaturedProject extends React.Component {

    constructor(props) {
        super(props);
        this.projectsUrl = ApiPrefix + 'projects'
        this.state = {
            title: '',
            taxonomy: '',
            url: '',
            img: ''
        }
    }

    getProject(projectId) {
        let url = this.projectsUrl + '/' + projectId + '/?_embed';
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);

            this.setState({ 
                title: data.title.rendered,
                taxonomy: data._embedded['wp:term'][0][0].name,
                slug: data.slug,
                img: this.aspectRatioImg(data)
            });
        }).catch(function(err) {
            console.log(err);
        });
    }

    aspectRatioImg(data){
        let img = '';

        if(data.acf.cover_image_landscape){
            img = data.acf.cover_image_landscape.sizes.landscape_large;
            if(this.props.aspect === 'portrait') {
                img = data.acf.cover_image_portrait.sizes.portrait_large;
            }
        }
        

        return img;
    }

    aspectRatioGrid(){
        let gridClass = 'featured-project  featured-project--landscape';
        if(this.props.aspect === 'portrait') {
            gridClass = 'featured-project  featured-project--portrait';
        } 
        return gridClass;
    }

    componentWillMount() {
        this.getProject(this.props.id);
    }

    render() {
        return (
            <div className={this.aspectRatioGrid()}>
                <figure className="featured-project__item">
                    <Link className="featured-project__link" to={'/projects/' + this.state.slug}>
                        <img className="featured-project__img" src={this.state.img} alt={this.state.title + ' project image'} />
                    </Link>
                    <div className="feature-project__button-overlay">
                        <Button link={'/projects/' + this.state.slug}>
                            View Project
                            <RightArrow />
                        </Button>
                    </div>
                </figure>
                <span className="featured-project__cat">{this.state.taxonomy}</span>
                <Link to={'/projects/' + this.state.slug}>
                    <h2 className="featured-project__title">{this.state.title}</h2>
                </Link>
            </div>
        );
    }
}

FeaturedProject.propTypes = {
    aspect: PropTypes.string,
    id: PropTypes.number
};

export default FeaturedProject;