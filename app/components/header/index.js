'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Hamburger from '../hamburger';
import Nav from '../nav';

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
                <h1 className="logo">Rory Ashford</h1>
                <Hamburger onClick={this.toggleMenu} toggle={this.state.menuToggle} />
                <Nav toggle={this.state.menuToggle} />
            </header>
        );
    }
}

export default Header;