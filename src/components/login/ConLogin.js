import { connect } from 'react-redux';
import Login from './Login';

const mapStateToProps = (state) => ({
    userVal: state.userVal,
    passVal: state.passVal,
});

const mapDispatchToProps = (dispatch) => ({
    userValChange: () => {},
    passValChange: () => {},
    loginFunc: () => {},
});

const ConLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ConLogin;