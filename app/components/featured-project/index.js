'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class FeaturedProject extends React.Component {

    render() {
        return (
            <div className="featured-project">
                <img className="featured-project__img" src={this.props.img} />
                <span className="featured-project__cat">{this.props.category}</span>
                <h2 className="featured-project__title">{this.props.title}</h2>
            </div>
        );
    }
}

export default FeaturedProject;