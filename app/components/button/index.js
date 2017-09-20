'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
        return (
            <a href={this.props.link} className="btn">
                {this.props.children}
            </a>
        );
    }
}

Button.propTypes = {
    link: PropTypes.string,
    children: PropTypes.node
};

export default Button;
