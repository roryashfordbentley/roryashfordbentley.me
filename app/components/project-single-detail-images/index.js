'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class DetailImages extends React.Component {

    render() {
        return (
            <div className="detail-imgs">
                <div className="wrapper">
                    <div className="detail-imgs__grid">
                        <div className="detail-img  detail-img--landscape">
                            <img className="detail-imgs__img  detail-imgs__img--1" src={this.props.img1} />
                        </div>
                        <div className="detail-img  detail-img--portrait">
                            <img className="detail-imgs__img  detail-imgs__img--2" src={this.props.img2} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailImages;