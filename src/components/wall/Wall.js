import React from 'react';
import PropTypes from 'prop-types';

import Column from './styledcomps/Column';
import SInput from './styledcomps/SInput';
import SubButton from './styledcomps/SubButton';

const Wall = ({ thoughtVal, thoughtValChange, shareFunc, thoughts }) => (
    <Column>
        <SInput type="text" value={thoughtVal} onChange={thoughtValChange}/>
        <SubButton onClick={shareFunc}>Share Thought</SubButton>
        {thoughts.map( (thought, i) => <h1 key={i}>{thought}</h1>)}
    </Column>
);

Wall.propTypes = {

};

export default Wall;