/* eslint-env browser */
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import VRScene from './components/VRScene';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <VRScene />
  </Provider>,
  document.getElementById('root'),
);
