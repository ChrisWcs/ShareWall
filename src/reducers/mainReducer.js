import initialState from './initialState';
import { USER_CHANGE, PASS_CHANGE } from '../actions/actions';

import userReducer from './userReducer';

const mainReducer = (state = initialState(), action) => {
    switch(action.type){
        case USER_CHANGE:
            return {
                ...state,
                user: userReducer(state.user, action)
            };
        case PASS_CHANGE:
            return {
                ...state,
                user: userReducer(state.user, action)
            };
        default:
            return state;
    }
};

export default mainReducer;