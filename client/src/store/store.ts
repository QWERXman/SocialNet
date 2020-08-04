import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import rootReducer from 'store/reducers/root';

export default () => {
  return createStore(rootReducer, applyMiddleware(logger));
};
