'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class ProjectOverview extends React.Component {
    render() {
        return (
            <div className="wrapper  wrapper--small">
                <div className="project-overview">
                    <div className="project-overview__text">
                        <span className="project-overview__taxonomy">
                            Projects/
                            <span className="project-overview__taxonomy--bold"> {this.props.taxonomy}</span>
                        </span>
                        <div className="project-overview__title">
                            
                            <svg className="project-overview__stripes" xmlns="http://www.w3.org/2000/svg" viewBox="-479 61 1994.86 632.861">
                              <g transform="translate(-37 -143)">
                                <rect id="Rectangle_11" className="project-overview__stripes__stripe" width="243" height="652" transform="translate(468.034 204) rotate(45)"/>
                                <rect id="Rectangle_14" className="project-overview__stripes__stripe" width="243" height="652" transform="translate(19.034 204) rotate(45)"/>
                                <rect id="Rectangle_12" className="project-overview__stripes__stripe" width="243" height="652" transform="translate(925.034 204) rotate(45)"/>
                                <rect id="Rectangle_13" className="project-overview__stripes__stripe" width="243" height="652" transform="translate(1381.034 204) rotate(45)"/>
                              </g>
                            </svg>

                            <h1 className="project-overview__title__heading">{this.props.title}</h1>
                        </div>
                    </div>
                    
                    <div className="project-overview__cover">
                        <img className="project-overview__cover-img" src={this.props.img} />
                        <a className="btn project-overview__btn" href={this.props.link}>View Project</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectOverview;