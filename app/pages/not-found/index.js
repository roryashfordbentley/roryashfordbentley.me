'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';

class NotFound extends React.Component {

    componentDidUpdate() {
        if(this.props.toggle === true){
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }

    render() {
        return (
            
             <div className="container">
                <Header />
                <div className="not-found">
                    <h1 className="not-found__text">Sorry, the request could not be found :(</h1>
                    <img src="assets/img/not-found.gif" alt="not found" />
                </div>
                <Footer />
            </div>
        );
    }
}


export default NotFound;