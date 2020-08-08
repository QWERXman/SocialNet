import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'store/reducers/root';
import {IProfileEntity} from "entities/Profile";

export interface IStore {
  profile: IProfileEntity
}

export default () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
};
