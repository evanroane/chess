import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './react/containers/app';
import configureStore from './react/store/configure';
import defaultBoard from './constants/default-board';

const store = configureStore();
console.log('log the store >>> ',store);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('app'));