import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getBoxes } from 'domains/boxes/selectors';
import Boxes from './Boxes';

const mapStateToProps = createSelector(getBoxes, boxes => ({ boxes }));

const mapActionsToProps = () => ({
  onClick: () => {

  },
});

export default connect(mapStateToProps, mapActionsToProps)(Boxes);
