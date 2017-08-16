'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class ProjectsCodepen extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="codepen-embed" dangerouslySetInnerHTML={{__html: this.props.code}}></div>
            </div>
        );
    }
}

export default ProjectsCodepen;