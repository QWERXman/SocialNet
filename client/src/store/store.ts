import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";

import {rootReducer} from './rootReducer';
import RootSaga from "./sagas";

import {IProfileState} from "./common/profile/state";
import {IMessagesState} from "./common/messages/state";
import {INewsState} from "./common/news/state";

export interface IRootState {
    profile: IProfileState
    dialogs: IMessagesState
    news: INewsState
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



