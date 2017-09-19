'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';

class ProjectDescription extends React.Component {
    
    render() {
        return (
            <div className="wrapper">
                <div className="project-single__description" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
            </div>
        );
    }
}

export default ProjectDescription;