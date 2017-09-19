'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Navigation extends React.Component {

    componentDidUpdate() {
        if(this.props.toggle === true){
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }

    render() {
        return (
            <nav className={this.props.toggle === true ? "nav nav--open" : "nav"}>
                <div className={this.props.toggle === true ? "nav__bg nav__bg--open" : "nav__bg"}></div>
                <ul className={this.props.toggle === true ? "nav__list nav__list--open" : "nav__list"}>
                    <li onClick={this.props.onClick} className="nav__item"><Link to="/">Home</Link></li>
                    <li onClick={this.props.onClick} className="nav__item"><Link to="/projects">Projects</Link></li>
                    <li onClick={this.props.onClick} className="nav__item"><Link to="/about">About</Link></li>
                </ul>
                <ul className={this.props.toggle === true ? "nav__sub-nav nav__sub-nav--open" : "nav__sub-nav"}>
                    <li className="nav__sub-nav__item"><a href="#">Mail</a></li>
                    <li className="nav__sub-nav__item"><a href="//github.com/roikles">Github</a></li>
                    <li className="nav__sub-nav__item"><a href="//codepen.io/roikles/">Codepen</a></li>
                    <li className="nav__sub-nav__item"><a href="//twitter.com/roikles">Twitter</a></li>
                    <li className="nav__sub-nav__item"><a href="//instagram.com/roikles">Instagram</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;