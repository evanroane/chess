import React, { Component, PropTypes } from 'react';

const Square = React.createClass({
    propTypes: {
        black: PropTypes.bool
    },
    render() {
        const { black } = this.props;
        const fill = black ? 'black' : 'white';

        return (<div style={{ backgroundColor: fill }} />);
    }
});

export default Square;