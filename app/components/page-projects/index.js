'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsGrid from '../projects-grid';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

import Header from '../header';
import ProjectsDisplay from '../projects-display';
import ProjectSingle from '../project-single';


class Projects extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Route exact path={'/projects'} component={ProjectsDisplay}/>
                <Route path={'/projects/:ProjectSlug'} component={ProjectSingle}/>
            </div>
        );
    }
}

export default Projects;