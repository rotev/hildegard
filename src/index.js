/* eslint-env browser */
import ReactDOM from 'react-dom';
import createStore from './store';

createStore();

ReactDOM.render(
  'hello',
  document.getElementById('root'),
);
