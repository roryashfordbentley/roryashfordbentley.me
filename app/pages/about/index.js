'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../../components/header';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loaded: false }
    }

    componentDidMount() {
        setTimeout(function(){
            this.setState({ loaded: true })
        }.bind(this),1000); 
    }

    render() {
        return (
            <div className="container">
                <Header loaded={this.state.loaded} />
                <section className="about-header">
                    <div className="about-header__text">
                        <h1 className="about-header__title">About</h1>
                    </div>
                </section>
                <section className="about-content  about-content--who">
                    <div className="about-content__heading">
                        <h2 className="about-content__title">Who?</h2>
                    </div>
                    <div className="about-content__info">
                        <p>I’m a 32 year old developer with 10 years of experience building websites and apps for a wide range of clients.</p>   
                    </div>
                </section>
                <section className="about-content  about-content--what">
                    <div className="about-content__heading">
                        <h2 className="about-content__title">What?</h2>
                    </div>
                    <div className="about-content__info">
                        <p>I began my career as an aspiring graphic designer but it quickly became apparent that I had much more interest in web development and software engineering.</p>
                        <p>I have worked across the spectrum of full stack development but I really enjoy working on frontend projects utilising HTML, Sass, BEM, Javascript, jQuery and recently React. Creating lightweight modular frontends that scale.</p>
                    </div>
                </section>
                <section className="about-content  about-content--clients">
                    <div className="about-content__heading">
                        <h2 className="about-content__title">Clients</h2>
                    </div>
                    <div className="about-content__info">
                        <p>Ace Performance, Aire Valley Architectural, Airflow Compressors, Ambrose Hire, Ankerherz, Ann Forshaws, Baie Slings, BARCA Leeds, Baxandalls, Bodycraft, Bradley Bar, CIGA, Cohen & Wilks, The Citizenry, Consultant Medical, Control & Power, CWISC, Elevate Leeds, ERS Medical, Expect Distribution, Flagship Leeds, Hansons Chartered Surveyors, Herculean, Insuletics, Just a Boy, Keystone Healthcare, Kingston Thermal, Lansdowne Motors, MAE Care, Mark Thompson, Ministry Of Sound, NAPA Sports Nutrition, Newgen Power, NiceMartin, Packt Publishing, S+B, School Milk, Trueform Digital, Wetherby Building Systems</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;