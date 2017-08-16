import { connect } from 'react-redux';
import { createPassChange, createUserChange } from '../../actions/actionCreators';
import Login from './Login';

const mapStateToProps = (state) => ({
    userVal: state.userVal,
    passVal: state.passVal,
});

const mapDispatchToProps = (dispatch) => ({
    userValChange: (event) => {dispatch(createUserChange(event.target.value));}, //event.target.value
    passValChange: (event) => {dispatch(createPassChange(event.target.value));},
    loginFunc: () => {},
});

const ConLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ConLogin;