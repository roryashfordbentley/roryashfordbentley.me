'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Codepen extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="codepen-embed" dangerouslySetInnerHTML={{__html: this.props.code}}></div>
            </div>
        );
    }
}

Codepen.propTypes = {
    code: PropTypes.string,
};

export default Codepen;