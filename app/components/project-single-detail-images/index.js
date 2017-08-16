'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class DetailImages extends React.Component {

    render() {
        return (
            <div className="detail-imgs">
                
                <svg className="detail-imgs__stripes" xmlns="http://www.w3.org/2000/svg" viewBox="-479 61 1994.86 632.861">
                    <g transform="translate(-37 -143)">
                        <rect id="Rectangle_11" className="detail-imgs__stripes__stripe" width="243" height="652" transform="translate(468.034 204) rotate(45)"/>
                        <rect id="Rectangle_14" className="detail-imgs__stripes__stripe" width="243" height="652" transform="translate(19.034 204) rotate(45)"/>
                        <rect id="Rectangle_12" className="detail-imgs__stripes__stripe" width="243" height="652" transform="translate(925.034 204) rotate(45)"/>
                        <rect id="Rectangle_13" className="detail-imgs__stripes__stripe" width="243" height="652" transform="translate(1381.034 204) rotate(45)"/>
                    </g>
                </svg>
                
                <div className="wrapper">
                    <div className="detail-imgs__grid">
                        <div className="g">
                            <div className="gi--1-1  gi--2-3--m">
                                <img className="detail-imgs__img  detail-imgs__img--1" src={this.props.img1} />
                            </div>
                            <div className="gi--1-1  gi--1-3--m">
                                <img className="detail-imgs__img  detail-imgs__img--2" src={this.props.img2} />
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default DetailImages;