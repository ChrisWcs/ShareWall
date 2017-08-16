import React from 'react';
import PropTypes from 'prop-types';

import STitle from './styledcomps/STitle';
import SInput from './styledcomps/SInput';
import SButton from './styledcomps/SButton';
import SSub from './styledcomps/SSub';

import Row from './styledcomps/Row';
import Column from './styledcomps/Column';

// Share wall
// name ___

const Login = ({ userVal, passVal, userValChange, passValChange, loginFunc }) => (
    <Column>
        <STitle>ShareWall</STitle>
        <Row>
            <SSub>UserName : </SSub>
            <SInput type="text" value={userVal} onChange={userValChange} />
        </Row>
        <Row>
            <SSub>Password : </SSub>
            <SInput type="text" value={passVal} onChange={passValChange} />
        </Row>
        <SButton onClick={loginFunc}>Login</SButton>
    </Column>
);

Login.propTypes = {
    userVal: PropTypes.string,
    passVal: PropTypes.string,
    
};

export default Login;