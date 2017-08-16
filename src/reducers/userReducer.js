import { USER_CHANGE, PASS_CHANGE } from '../actions/actions';

const userReducer = (user, action) => {
    switch(action.type){
        case USER_CHANGE:
            return {
                username: action.value,
                pass: user.pass,
            };
        case PASS_CHANGE:
            return {
                username: user.username,
                pass: action.value,
            };
        default:
            return user;
    }
};

export default userReducer;