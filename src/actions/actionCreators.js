import { USER_CHANGE, PASS_CHANGE} from './actions';

export const createUserChange = (value) => ({
    type: USER_CHANGE,
    value
});

export const createPassChange = (value) => ({
    type: PASS_CHANGE,
    value
});