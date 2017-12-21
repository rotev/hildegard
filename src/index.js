import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';

let store = createStore()

ReactDOM.render(
  "hello",
  document.getElementById('root')
);
