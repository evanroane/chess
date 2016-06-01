import React from 'react';
import ChessBoard from './components/chess-board';

const ChessApp = React.createClass({
    render () {
        return (
            <div id="app">
                <div className="game-title">Chess</div>
                <div>
                    <ChessBoard {...this.props} />
                </div>
            </div>
        );
    }
});

export default ChessApp;