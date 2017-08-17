import { USER_CHANGE, PASS_CHANGE, SHARE, SHOW_NEW, SHARE_CHANGE } from './actions';

export const createUserChange = (value) => ({
    type: USER_CHANGE,
    value
});

export const createPassChange = (value) => ({
    type: PASS_CHANGE,
    value
});

export const createShare = () => ({
    type: SHARE
});

export const createShowNew = () => ({
    type: SHOW_NEW
});

export const createShareChange = (value) => ({
    type: SHARE_CHANGE,
    value
});