'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Hamburger from '../hamburger';
import Nav from '../nav';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            menuToggle: 'closed'
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        if(this.state.menuToggle === 'closed'){
            this.setState({ menuToggle: 'open' });
        } else {
            this.setState({ menuToggle: 'closed' });
        }
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render() {
        return (
            <header className="site-header">
                <h1 className="logo"><Link to="/">Rory Ashford</Link></h1>
                <Hamburger onClick={this.toggleMenu} toggle={this.state.menuToggle} />
                <Nav onClick={this.toggleMenu} toggle={this.state.menuToggle} />
            </header>
        );
    }
}

export default Header;