'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';

import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

import ApiPrefix from '../../lib/api';
import ProjectsSlider from '../projects-slider';
import Header from '../header';
import ProjectSingle from '../project-single';

class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.baseProjectsUrl = ApiPrefix + 'projects?filter[taxonomy]=project_type&filter[term]=';
        this.state = {
            work: {},
            openSource: {},
            experiments: {},
            loaded: false
        }

        this.projectTypes = [
            'work',
            'open-source',
            'experiment'
        ]
    }

    getProjects(url,taxonomyTerm) {
        return fetch(url + taxonomyTerm)
        .then((response) => response.json())
        .catch(function(err) {
            console.log(err);
        });
    }

    componentDidMount() {
        let projectsPromises = this.projectTypes.map(projectType => {
            return this.getProjects(this.baseProjectsUrl,projectType);
        });

        Promise.all(projectsPromises).then(results => {
            this.setState({
                'work': results[0], 
                'openSource': results[1], 
                'experiments': results[2]
            });

            setTimeout(function(){
                this.setState({ loaded: true })
            }.bind(this),1000);
        });
    }

    render() {
        return (
            <div className="container">
                <Header loaded={this.state.loaded} />
                <Route path={'/projects'} 
                    render={ () => 
                        <div>
                            <ProjectsSlider data={this.state.work} title="Work" />
                            <ProjectsSlider data={this.state.openSource} title="Open Source" />
                            <ProjectsSlider data={this.state.experiments} title="Experiments" />
                        </div>
                    }
                />
                <Route path={'/projects/:ProjectSlug'} component={ProjectSingle}/>
            </div>
        );
    }
}

export default Projects;