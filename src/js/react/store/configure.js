import { createStore, compose } from 'redux';
import rootReducer from '../reducers/index';
const initState = {
    game: {board: {}},
    user: {isLoggedIn: true}
};

export default function () {
    return compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(rootReducer, initState);
}