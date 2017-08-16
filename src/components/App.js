import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from '../reducers/mainReducer';

import ConLogin from './login/ConLogin';

const App = () => (
    <Provider store={createStore(mainReducer)}>
        <div>
            <ConLogin/>
        </div>
    </Provider>
);

export default App;