'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FeaturedProject from '../featured-project';

class FeaturedProjects extends React.Component {

    render() {
        return (
            <section className="home-work-grid">
                <div className="wrapper">
                    <div className="g">
                        <div className="gi--1-1  gi--2-3--m">
                            <FeaturedProject category="Work" title="Ankerherz" img="//source.unsplash.com/800x500" />
                        </div>
                        <div className="gi--1-1  gi--1-3--m">
                            <FeaturedProject category="Open Source" title="Gridtacular" img="//source.unsplash.com/400x545" />
                        </div>

                        <div className="gi--1-1  gi--1-3--m">
                            <FeaturedProject category="Experiment" title="WeeGrid" img="//source.unsplash.com/400x545" />
                        </div>
                        <div className="gi--1-1  gi--1-3--m">
                            <FeaturedProject category="Open Source" title="Flexbones" img="//source.unsplash.com/400x545" />
                        </div>
                        <div className="gi--1-1  gi--1-3--m">
                            <FeaturedProject category="Experiment" title="Canvas Particles" img="//source.unsplash.com/400x545" />
                        </div>

                        <div className="gi--1-1  gi--1-3--m">
                            <FeaturedProject category="Open Source" title="WP BEM Menu" img="//source.unsplash.com/400x545" />
                        </div>
                        <div className="gi--1-1  gi--2-3--m">
                            <FeaturedProject category="Work" title="The Citizenry" img="//source.unsplash.com/800x500" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
            </section>
            
        );
    }
}

export default FeaturedProjects;