import { Map, List } from 'immutable';
import { handleActions } from 'redux-actions';
import { insertBox } from './actions';

const defaultState = Map({
  boxes: List(),
}, 'boxes');

export default handleActions({
  [insertBox]: (state, { payload: { color } }) => {
    return state.set('boxes', state.boxes.merge({ color }));
  },
}, defaultState);
