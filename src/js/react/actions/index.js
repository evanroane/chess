import action from '../constants/action-names';

export function movePiece (from, to) {
    return {
        type: action.MOVE_PIECE,
        from,
        to
    };
}

export function resetBoard () {
    return {type: action.RESET_BOARD};
}