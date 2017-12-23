import { Map, List } from 'immutable';
import { handleActions } from 'redux-actions';
import { insertBox } from './actions';

const defaultBoxes = [
  { color: '#B1517E' },
  { color: '#8FD25C' },
  { color: '#33B8BA' },
  { color: '#F29C34' },
];

const defaultState = Map({
  boxes: List(defaultBoxes),
}, 'boxes');

export default handleActions({
  [insertBox]: (state, { payload: { color } }) => state.set('boxes', state.boxes.merge({ color })),
}, defaultState);
