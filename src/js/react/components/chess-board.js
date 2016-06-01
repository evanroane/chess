import React from 'react';

const ChessBoard = React.createClass({
    render () {
        const square = this.props.game.board;
        return (
            <div className="chess-board">
                <div className="board-row">
                    <div className="square">{square.a1}</div>
                    <div className="square">{square.b1}</div>
                    <div className="square">{square.c1}</div>
                    <div className="square">{square.d1}</div>
                    <div className="square">{square.e1}</div>
                    <div className="square">{square.f1}</div>
                    <div className="square">{square.g1}</div>
                    <div className="square">{square.h1}</div>
                </div>
                <div className="board-row">
                    <div className="square">{square.a2}</div>
                    <div className="square">{square.b2}</div>
                    <div className="square">{square.c2}</div>
                    <div className="square">{square.d2}</div>
                    <div className="square">{square.e2}</div>
                    <div className="square">{square.f2}</div>
                    <div className="square">{square.g2}</div>
                    <div className="square">{square.h2}</div>
                </div>
                <div className="board-row">
                    <div className="square">{square.a3}</div>
                    <div className="square">{square.b3}</div>
                    <div className="square">{square.c3}</div>
                    <div className="square">{square.d3}</div>
                    <div className="square">{square.e3}</div>
                    <div className="square">{square.f3}</div>
                    <div className="square">{square.g3}</div>
                    <div className="square">{square.h3}</div>
                </div>
                <div className="board-row">
                    <div className="square">{square.a4}</div>
                    <div className="square">{square.b4}</div>
                    <div className="square">{square.c4}</div>
                    <div className="square">{square.d4}</div>
                    <div className="square">{square.e4}</div>
                    <div className="square">{square.f4}</div>
                    <div className="square">{square.g4}</div>
                    <div className="square">{square.h4}</div>
                </div>
                <div className="board-row">
                    <div className="square">{square.a5}</div>
                    <div className="square">{square.b5}</div>
                    <div className="square">{square.c5}</div>
                    <div className="square">{square.d5}</div>
                    <div className="square">{square.e5}</div>
                    <div className="square">{square.f5}</div>
                    <div className="square">{square.g5}</div>
                    <div className="square">{square.h5}</div>
                </div>
                <div className="board-row">
                    <div className="square">{square.a6}</div>
                    <div className="square">{square.b6}</div>
                    <div className="square">{square.c6}</div>
                    <div className="square">{square.d6}</div>
                    <div className="square">{square.e6}</div>
                    <div className="square">{square.f6}</div>
                    <div className="square">{square.g6}</div>
                    <div className="square">{square.h6}</div>
                </div>
                <div className="board-row">
                    <div className="square">{square.a7}</div>
                    <div className="square">{square.b7}</div>
                    <div className="square">{square.c7}</div>
                    <div className="square">{square.d7}</div>
                    <div className="square">{square.e7}</div>
                    <div className="square">{square.f7}</div>
                    <div className="square">{square.g7}</div>
                    <div className="square">{square.h7}</div>
                </div>
                <div className="board-row">
                    <div className="square">{square.a8}</div>
                    <div className="square">{square.b8}</div>
                    <div className="square">{square.c8}</div>
                    <div className="square">{square.d8}</div>
                    <div className="square">{square.e8}</div>
                    <div className="square">{square.f8}</div>
                    <div className="square">{square.g8}</div>
                    <div className="square">{square.h8}</div>
                </div>
            </div>
        );
    }
});

export default ChessBoard;