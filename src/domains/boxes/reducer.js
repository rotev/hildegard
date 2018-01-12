import { List, Record } from 'immutable';
import { handleActions } from 'redux-actions';
import { insertBox, clickBox } from './actions';

const BoxRecord = Record({ color: 'white', opacity: 1 });

const defaultBoxes = [
  new BoxRecord({ color: '#B1517E', opacity: 1 }),
  new BoxRecord({ color: '#8FD25C', opacity: 1 }),
  new BoxRecord({ color: '#33B8BA', opacity: 1 }),
  new BoxRecord({ color: '#F29C34', opacity: 1 }),
  new BoxRecord({ color: '#FE4365', opacity: 1 }),
];

const defaultState = List(defaultBoxes, 'boxes');

export default handleActions({
  [insertBox]: (state, { payload: { color } }) => state.set('boxes', state.boxes.merge({ color })),
  [clickBox]: (state, { payload: { index } }) => {
    const box = state.get(index);
    const opacity = box.opacity - 0.25;

    if (opacity <= 0) {
      return state.delete(index);
    }

    return state.setIn([index, 'opacity'], opacity);
  },
}, defaultState);
