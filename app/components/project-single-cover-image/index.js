'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';

class ProjectCoverImage extends React.Component {
    render() {
        return (
            <section className="project-cover">
                <img className="project-cover__img" src={this.props.img} />
            </section>
                        
        );
    }
}

export default ProjectCoverImage;