import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import RouteApp from './App';
import getStore from './Redux/store/getStore';

import './index.css';
import Users from './Views/Users/index';
import Home from './Views/Home';

const { store } = getStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <RouteApp path={'/'} component={Home} />
        <RouteApp path={'/users'} component={Users} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);