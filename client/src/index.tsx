import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider} from 'react-redux'
import Axios from 'axios'
import 'antd/dist/antd.css';
import createSagaMiddleware from 'redux-saga'

import {store} from 'store2/store';

import {applyMiddleware} from "redux";

// import { login } from './service/auth'

if (window.localStorage.uathToken) {
    Axios.defaults.headers = {
        'Authorization': 'Token ' + window.localStorage.uathToken,
        'Content-Type': 'application/json'
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
