'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav className={this.props.toggle === "open" ? "nav nav--open" : "nav"}>
                <div className={this.props.toggle === "open" ? "nav__bg nav__bg--open" : "nav__bg"}></div>
                <ul className={this.props.toggle === "open" ? "nav__list nav__list--open" : "nav__list"}>
                    <li className="nav__item"><a href="#">Home</a></li>
                    <li className="nav__item"><a href="#">Projects</a></li>
                    <li className="nav__item"><a href="#">About</a></li>
                    <li className="nav__item"><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;