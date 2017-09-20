'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import LeftArrow from '../icons/left-arrow';
import RightArrow from '../icons/right-arrow';

class ButtonGroupPrevNext extends React.Component {
    render() {
        return (
            <nav className="prev-next">
                <button name="left arrow" onClick={this.props.onClickPrev} className="prev-next__arrow  prev-next__arrow--left">
                    <LeftArrow />
                </button>
                <button name="right arrow" onClick={this.props.onClickNext} className="prev-next__arrow  prev-next__arrow--right">
                    <RightArrow />
                </button>
            </nav> 
        );
    }
}

ButtonGroupPrevNext.propTypes = {
    onClickPrev: PropTypes.func.isRequired,
    onClickNext: PropTypes.func.isRequired
};

export default ButtonGroupPrevNext;