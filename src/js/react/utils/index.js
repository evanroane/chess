export function move (board, from, to) {
    board[to] = board[from];
    board[from] = '';
    return board;
}