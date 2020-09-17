import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'store/reducers/root';
import {IProfileEntity} from "entities/Profile";
import createSagaMiddleware from "redux-saga";
import MessagesSaga from "./actions/pages/Messages/messagesSagas";
import {IMessagesStore} from "./reducers/pages/Messages/messages";

const sagaMiddleware = createSagaMiddleware()

export interface IStore {
  profile: IProfileEntity
  messages: IMessagesStore
}

export default () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger), applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(MessagesSaga)
  return store
};


