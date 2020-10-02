import { combineReducers } from 'redux';

import routes from './routes';
import profile from './pages/Profile/profile';
import messages from './pages/Messages/messages';

export default combineReducers({
    routes,
    profile,
    messages,
});
