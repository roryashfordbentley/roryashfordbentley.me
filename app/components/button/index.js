'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    render() {
        return (
            <a href={this.props.link} className="btn">{this.props.title}</a>
        );
    }
}

export default Button;
