'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Preloader from '../preloader';
import Hamburger from '../hamburger';
import Nav from '../nav';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            menuToggle: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        if(this.state.menuToggle === false){
            this.setState({ menuToggle: true });
        } else {
            this.setState({ menuToggle: false });
        }
    }

    render() {
        return (
            <header className="site-header">
                <h1 className={this.state.menuToggle === true || this.props.loaded === false ? "logo logo--alt" : "logo"}><Link to="/">Rory Ashford-Bentley</Link></h1>
                <Hamburger onClick={this.toggleMenu} toggle={this.state.menuToggle} loaded={this.props.loaded} />
                <Nav onClick={this.toggleMenu} toggle={this.state.menuToggle} />
                <Preloader loaded={this.props.loaded} />
            </header>
        );
    }
}

export default Header;