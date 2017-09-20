'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return (
            <footer className="site-footer">
                <h1 className="site-footer__logo"><Link to="/">Rory Ashford-Bentley</Link></h1>

                <ul className="site-footer__nav site-footer__nav--1">
                    <li className="site-footer__nav__item"><Link to="/">Home</Link></li>
                    <li className="site-footer__nav__item"><Link to="/projects">Projects</Link></li>
                    <li className="site-footer__nav__item"><Link to="/about">About</Link></li>
                    <li className="site-footer__nav__item"><a href="#">Mail</a></li>
                </ul>
                
                <ul className="site-footer__nav site-footer__nav--2">
                    <li className="site-footer__nav__item"><a href="//github.com/roikles">Github</a></li>
                    <li className="site-footer__nav__item"><a href="//codepen.io/roikles/">Codepen</a></li>
                    <li className="site-footer__nav__item"><a href="//twitter.com/roikles">Twitter</a></li>
                    <li className="site-footer__nav__item"><a href="//instagram.com/roikles">Instagram</a></li>
                </ul>

            </footer>
        );
    }
}

export default Footer;