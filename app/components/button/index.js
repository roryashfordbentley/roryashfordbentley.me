'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';

class Button extends React.Component {
    render() {
        return (
            <a href={this.props.link} className="btn">
                {this.props.children}
            </a>
        );
    }
}

export default Button;
