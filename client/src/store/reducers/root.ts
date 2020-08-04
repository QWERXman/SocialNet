import { combineReducers } from 'redux';

import routes from './routes';
// import login from '../components/Login/reducers';
import profile from './pages/Profile/profile';
// import news from '../components/News/reducers';

export default combineReducers({
    routes,
    profile
    // news,
    // menu,
    // login,
});
