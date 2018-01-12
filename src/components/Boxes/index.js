import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getBoxes } from 'domains/boxes/selectors';
import { clickBox } from 'domains/boxes/actions';
import Boxes from './Boxes';

const mapStateToProps = createSelector(
  getBoxes,
  boxes => ({
    boxes,
  }),
);

const mapActionsToProps = dispatch => ({
  onClick: index => dispatch(clickBox(index)),
});

export default connect(mapStateToProps, mapActionsToProps)(Boxes);
