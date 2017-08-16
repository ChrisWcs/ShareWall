import userReducer from './userReducer';
import { createPassChange, createUserChange} from '../actions/actionCreators';

describe('userReducer test', () => {
    it('testing USER_CHANGE path', () => {

        const expected = {
            username: "DoctorStrange",
            pass: "",
        };

        const actual = userReducer({
            username: "",
            pass: "",
        }, createUserChange("DoctorStrange"));

        expect(actual).toEqual(expected);
    });

    it('testing PASS_CHANGE path', () => {

        const expected = {
            username: "",
            pass: "doctorisin",
        };

        const actual = userReducer({
            username: "",
            pass: "",
        }, createPassChange("doctorisin"));

        expect(actual).toEqual(expected);
    });
});