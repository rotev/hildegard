import { List } from 'immutable';
import { handleActions } from 'redux-actions';
import { insertBox } from './actions';

const defaultBoxes = [
  { color: '#B1517E', opacity: 1 },
  { color: '#8FD25C', opacity: 1 },
  { color: '#33B8BA', opacity: 1 },
  { color: '#F29C34', opacity: 1 },
  { color: '#FE4365', opacity: 1 },
];

const defaultState = List(defaultBoxes, 'boxes');

export default handleActions({
  [insertBox]: (state, { payload: { color } }) => state.set('boxes', state.boxes.merge({ color })),
}, defaultState);
