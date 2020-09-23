import { combineReducers } from 'redux';
import { profileReducer } from './common/profile/reducer';

export const rootReducer = combineReducers({
    profile: profileReducer,
});
