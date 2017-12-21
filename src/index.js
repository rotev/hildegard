/* eslint-env browser */
import ReactDOM from 'react-dom';
import React from 'react';
import createStore from './store';
import VRScene from './components/VRScene';

createStore();

ReactDOM.render(
  <VRScene />,
  document.getElementById('root'),
);
