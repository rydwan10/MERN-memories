import React from 'react';
import ReactDOM from 'react-dom';

// Import Redux Thing
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import Reducers 
import reducers from './reducers';
import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk, logger)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));