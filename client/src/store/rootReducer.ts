import { combineReducers } from 'redux';
import profileReducer from './common/profile/reducer';
import messagesReducer from './common/messages/reducer';
import newsReduces from './common/news/reducer';

export const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: messagesReducer,
    news: newsReduces
});
