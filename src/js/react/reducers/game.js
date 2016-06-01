import actions from'../constants/action-names';
import board from '../../constants/default-board';
import { move } from '../utils';

export default function(state = board, action) {
    switch (action.type) {
        case actions.RESET_BOARD:
            return state.board;
        case actions.MOVE_PIECE:
            return Object.assign({}, state.board, move(state.board, action.from, action.to));
        default:
            return state;
    }
}