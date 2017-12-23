import { createActions } from 'redux-actions';

const {
  insertBox,
} = createActions({
  INSERT_BOX: color => ({ color }),
});

export default { insertBox };
