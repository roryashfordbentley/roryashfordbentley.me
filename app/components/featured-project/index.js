'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

class FeaturedProject extends React.Component {

    constructor(props) {
        super(props);
        this.projectsUrl = 'http://localhost/portfolio/wordpress/wp-json/wp/v2/projects'
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
            console.log(data);

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
        let gridClass = 'gi--1-1  gi--2-3--m';
        if(this.props.aspect === 'portrait') {
            gridClass = 'gi--1-1  gi--1-3--m';
        } 

        return gridClass;
    }

    componentWillMount() {
        this.getProject(this.props.id);
    }

    render() {
        return (
            <div className={this.aspectRatioGrid()}>
                <div className="featured-project">
                    <Link to={'/projects/' + this.state.slug}>
                        <img className="featured-project__img" src={this.state.img} />
                    </Link>
                    <span className="featured-project__cat">{this.state.taxonomy}</span>
                    <Link to={'/projects/' + this.state.slug}>
                        <h2 className="featured-project__title">{this.state.title}</h2>
                    </Link>
                </div>
            </div>
        );
    }
}

export default FeaturedProject;