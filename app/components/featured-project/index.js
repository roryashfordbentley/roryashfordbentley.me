'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class FeaturedProject extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    aspectRatioImg(){
        let img = '';
        if(this.props.aspect === 'portrait') {
            img = this.props.img.sizes.portrait_large;
        } else {
            img = this.props.img.sizes.landscape_large;
        }

        return img;
    }

    aspectRatioGrid(){
        let gridClass = '';
        if(this.props.aspect === 'portrait') {
            gridClass = 'gi--1-1  gi--1-3--m';
        } else {
            gridClass = 'gi--1-1  gi--2-3--m';
        }

        return gridClass;
    }

    render() {
        return (
            <div className={this.aspectRatioGrid()}>
                <div className="featured-project">
                    <img className="featured-project__img" src={this.aspectRatioImg()} />
                    <span className="featured-project__cat">{this.props.category}</span>
                    <h2 className="featured-project__title">{this.props.title}</h2>
                </div>
            </div>
        );
    }
}

export default FeaturedProject;