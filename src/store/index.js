import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

export default function () {
  const store = createStore(reducer, composeWithDevTools());
  return store;
}
