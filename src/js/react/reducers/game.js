import actions from'../actions';
import board from '../../constants/default-board';
import { move } from '../utils';

export default function(state = board, action) {
    switch (action.type) {
        case action.RESET_BOARD:
            return board;
        case action.MOVE_PIECE:
            return Object.assign({}, state, move(state, action.from, action.to));
        default:
            return state;
    }
}