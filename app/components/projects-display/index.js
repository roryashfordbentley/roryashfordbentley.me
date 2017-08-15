'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsGrid from '../projects-grid';

class ProjectsDisplay extends React.Component {
    render() {
        return (
            <div>
                <ProjectsGrid term="work" title="Work" />
                <ProjectsGrid term="open-source" title="Open Source" />
                <ProjectsGrid term="experiments" title="Experiments" />
            </div>
        );
    }
}

export default ProjectsDisplay;