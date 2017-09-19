'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';
import ApiPrefix from '../../lib/api';
import Fetch from 'whatwg-fetch';

import ProjectHeader from '../project-single-header';
import ProjectCoverImage from '../project-single-cover-image';
import DetailImages from '../project-single-detail-images';
import TechnicalOverview from '../project-single-technical-overview';
import ProjectDescription from '../project-single-description';
import Codepen from '../codepen';

class Projects extends React.Component {
    
    constructor(props) {
        super(props);
        this.baseProjectsUrl = ApiPrefix + 'projects/?slug=';
        this.slug = this.props.match.params.ProjectSlug;
        this.state = {
            title: '',
            taxonomy: '',
            url: '',
            content: '',
            technicalOverview: '',
            coverImg: '',
            detailImg1: '',
            detailImg2: '',
            codepen: ''
        }
    }

    getProjectData(url,slug) {


        fetch(url + slug + '&_embed')
        .then((response) => response.json())
        .then((data) => {

            console.log(data[0].acf.codepen_embed);

            this.setState({ 
                title: data[0].title.rendered,
                taxonomy: data[0]._embedded['wp:term'][0][0].name,
                url: data[0].acf.link_to_project,
                content: data[0].content.rendered,
                technicalOverview: data[0].acf.technical_overview,
                coverImg: data[0].acf.cover_image_landscape ? data[0].acf.cover_image_landscape.sizes.landscape_cropped : '',
                detailImg1: data[0].acf.detail_image_1 ? data[0].acf.detail_image_1.sizes.landscape_large : '',
                detailImg2: data[0].acf.detail_image_2 ? data[0].acf.detail_image_2.sizes.landscape_large : '',
                codepen: data[0].acf.codepen_embed
            });
        }).catch(function(err) {
            console.log(err);
        });
    }

    componentWillMount() {
        this.getProjectData(this.baseProjectsUrl,this.slug);
    }

    render() {
        return (
            <section className="project-single">
                <ProjectHeader taxonomy={this.state.taxonomy} title={this.state.title} link={this.state.url} />
                <ProjectCoverImage img={this.state.coverImg} />
                <ProjectDescription text={this.state.content} />
                <Codepen code={this.state.codepen} />
                <DetailImages img1={this.state.detailImg1} img2={this.state.detailImg2} />
                <TechnicalOverview text={this.state.technicalOverview} />
            </section>

        );
    }
}

export default Projects;