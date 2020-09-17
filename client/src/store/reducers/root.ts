import { combineReducers } from 'redux';

import routes from './routes';
// import login from '../components/Login/reducers';
import profile from './pages/Profile/profile';
import messages from './pages/Messages/messages';

export default combineReducers({
    routes,
    profile,
    messages,
    // menu,
    // login,
});
