import { combineReducers } from 'redux';

import { pageReducer } from './pageReducer';
// import { routerReducer } from './routerReducer';

const rootReducer = combineReducers({
    pages: pageReducer,
    // router: routerReducer
});

export { rootReducer };
