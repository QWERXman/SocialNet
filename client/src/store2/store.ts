import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";

import rootReducer from './rootReducer';
import RootSaga from "./sagas";

import {IMessagesStore} from "./reducers/pages/Messages/messages";

export interface IRootStore {
    profile: IProfileEntity
    messages: IMessagesStore
}

const sagaMiddleware = createSagaMiddleware()


export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger),
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(RootSaga)



