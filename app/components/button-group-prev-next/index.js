'use strict';

import React from 'preact-compat';
import ReactDOM from 'preact-compat';

import LeftArrow from '../icons/left-arrow';
import RightArrow from '../icons/right-arrow';

class ButtonGroupPrevNext extends React.Component {
    render() {
        return (
            <nav className="prev-next">
                <button onClick={this.props.onClickPrev} className="prev-next__arrow  prev-next__arrow--left">
                    <LeftArrow />
                </button>
                <button onClick={this.props.onClickNext} className="prev-next__arrow  prev-next__arrow--right">
                    <RightArrow />
                </button>
            </nav> 
        );
    }
}

export default ButtonGroupPrevNext;