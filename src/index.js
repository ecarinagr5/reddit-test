import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import getStore from './Redux/store/getStore';

import './index.css';


const { store } = getStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>     
  </Provider>,
  document.getElementById('root')
);