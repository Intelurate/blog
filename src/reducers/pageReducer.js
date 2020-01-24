import Immutable from 'immutable';

import {
    LOAD_PAGE
} from '../actions/pageActions';

const pageInitialState = {
    page: Immutable.fromJS({
        mostVisitedPages: [
            {
                theme: "World",
                title: "U.S. marshal killed serving warrant at mobile",
                bgImage: "../../assets/images/post/slider1.jpg",
                share: 643,
                time: 9,

                "visited": 2322, // people who have visited page
                "live": 5367, // people who are currently on this page.
                "categories": [
                    "world",
                    "sports",
                    "health"
                ]
            },
            {
                theme: "World",
                title: "And the most streamed Beatles song on Spotify is...",
                bgImage: "../../assets/images/post/slider1.jpg",
                share: "643",
                time: "9 Hour ago",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.",

                "visited": 4344, // people who have visited page
                "live": 5367, // peopel who are currently on this page.
                "categories": [
                    "world",
                    "sports",
                    "health"
                ]
            }
        ]
    })
};

function pageReducer(state = pageInitialState.page, action) {
    switch (action.type) {

        case LOAD_PAGE:
            state = state.set('pages', Immutable.fromJS(action.pages));
            return state;

        default:
            return state;
    }
}

export { pageReducer };
