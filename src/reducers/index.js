import { combineReducers } from 'redux';

import { pageReducer } from './pageReducer';
import { socialReducer } from './socialReducer';
// import { routerReducer } from './routerReducer';

const rootReducer = combineReducers({
    pages: pageReducer,
    users: socialReducer
    // router: routerReducer
});

export { rootReducer };
