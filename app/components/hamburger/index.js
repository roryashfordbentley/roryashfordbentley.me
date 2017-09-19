'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';

class Hamburger extends React.Component {
    render() {
        return (
            <button name="main menu" id="hamburger" onClick={this.props.onClick} className={this.props.toggle === true ? "hamburger hamburger--open hamburger--alt" : "hamburger"}>
                <svg className="hamburger__svg" viewBox="0 0 100 100">
                    <line className="hamburger__line  hamburger__line--1" x1="0" y1="50" x2="100" y2="50" />
                    <line className="hamburger__line  hamburger__line--2" x1="0" y1="50" x2="100" y2="50" />
                    <line className="hamburger__line  hamburger__line--3" x1="0" y1="50" x2="100" y2="50" /> 
                </svg>
            </button>
        );
    }
}

export default Hamburger;