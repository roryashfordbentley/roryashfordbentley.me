'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Key extends React.Component {
    render() {
        return (
            <button id="hamburger" onClick={this.props.onClick} className={this.props.toggle === "open" ? "hamburger hamburger--open" : "hamburger"}>
                <svg className="hamburger__svg" viewBox="0 0 100 100">
                    <line className="hamburger__line  hamburger__line--1" x1="20" y1="50" x2="80" y2="50" />
                    <line className="hamburger__line  hamburger__line--2" x1="20" y1="50" x2="80" y2="50" />
                    <line className="hamburger__line  hamburger__line--3" x1="20" y1="50" x2="80" y2="50" /> 
                </svg>
            </button>
        );
    }
}

export default Key;