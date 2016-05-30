import React from 'react';
import ChessBoard from './components/chess-board';

const ChessApp = React.createClass({
    render () {
        return (
            <div>
                Hello world!
                {this.props.name}
                <ChessBoard />
            </div>
        );
    }
});

export default ChessApp;