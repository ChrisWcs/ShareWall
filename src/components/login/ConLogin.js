import { connect } from 'react-redux';
import Login from './Login';

const mapStateToProps = (state) => ({
    userVal: state.userVal,
    passVal: state.passVal,
});

const mapDispatchToProps = (dispatch) => ({
    userValChange: (event) => {dispatch()}, //event.target.value
    passValChange: (event) => {dispatch()},
    loginFunc: () => {},
});

const ConLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ConLogin;