import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { todos } from './reducers';


import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const store = createStore(todos);

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );