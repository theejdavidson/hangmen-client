import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import { fetchCurrentUser } from './actions/index';

const store = configureStore({reducer: rootReducer})

const token = localStorage.getItem('token');
if (token) {
  store.dispatch(fetchCurrentUser())
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
