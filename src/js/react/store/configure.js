import { createStore, compose } from 'redux';
import rootReducer from '../reducers/index';
import defaultBoard from '../../constants/default-board';


const initState = {
    game: {board: defaultBoard},
    user: {isLoggedIn: true}
};

export default function () {
    return compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(rootReducer, initState);
}