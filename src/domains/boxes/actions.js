import { createActions } from 'redux-actions';

export const {
  insertBox,
  clickBox,
} = createActions({
  INSERT_BOX: color => ({ color }),
  CLICK_BOX: index => ({ index }),
});
