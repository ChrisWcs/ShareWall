import initialState from './initialState';
import { USER_CHANGE, PASS_CHANGE } from '../actions/actions';


const mainReducer = (state = initialState(), action) => {
    switch(action.type){
        case USER_CHANGE:
            return {
                ...state,
                user: {
                    username: action.value,
                    pass: state.user.pass,
                },
            };
        case PASS_CHANGE:
            return {
                ...state,
                user: {
                    username: state.user.username,
                    pass: action.value,
                },
            };
        default:
            return state;
    }
};

export default mainReducer;