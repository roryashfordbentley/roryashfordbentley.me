'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../home';
import Projects from '../projects';
import About from '../about';
import Contact from '../contact';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
            
            <nav className={this.props.toggle === "open" ? "nav nav--open" : "nav"}>
                <div className={this.props.toggle === "open" ? "nav__bg nav__bg--open" : "nav__bg"}></div>
                <ul className={this.props.toggle === "open" ? "nav__list nav__list--open" : "nav__list"}>
                    <li className="nav__item"><Link to="/">Home</Link></li>
                    <li className="nav__item"><Link to="/projects">Projects</Link></li>
                    <li className="nav__item"><Link to="/about">About</Link></li>
                    <li className="nav__item"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            
        );
    }
}

export default Navigation;