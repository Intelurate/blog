import Immutable from 'immutable';

import {
    LOAD_PAGE
} from '../actions/pageActions';

const pageInitialState = {
    user: Immutable.fromJS({
        topUsers: [
            {
                id: 1,
                name: "Janet Jackson",
                imageAuthor: "../../assets/images/post/slider1.jpg",
            },
            {
                id: 2,
                name: "Will Harison",
                imageAuthor: "../../assets/images/post/slider1.jpg",
            }
        ]
    })
};

function socialReducer(state = pageInitialState.user, action) {
    switch (action.type) {

        case LOAD_PAGE:
            state = state.set('users', Immutable.fromJS(action.users));
            return state;

        default:
            return state;
    }
}

export { socialReducer };
