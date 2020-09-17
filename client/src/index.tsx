import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider} from 'react-redux'
import Axios from 'axios'
import 'antd/dist/antd.css';
import createSagaMiddleware from 'redux-saga'

import createStore from 'store/store'
import {applyMiddleware} from "redux";

// import { login } from './service/auth'

if (window.localStorage.uathToken) {
    Axios.defaults.headers = {
        'Authorization': 'Token ' + window.localStorage.uathToken,
        'Content-Type': 'application/json'
    }
}


const store = createStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
