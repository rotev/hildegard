import React from 'react';
import PropTypes from 'prop-types';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity } from 'aframe-react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import './boxes.styl';

class Boxes extends React.Component {
  renderBox = () => {
    const { onClick } = this.props;

    return (
      <Entity
        geometry={{ primitive: 'box' }}
        material={{ color: '#66296b' }}
        position={{ x: 0, y: 0, z: -5 }}
        class="clickable"
        events={{ click: onClick }}
      />
    );
  }

  render() {
    const { boxes } = this.props;
    return boxes.map(this.renderBox);
  }
}

Boxes.propTypes = {
  // eslint-disable-next-line react/no-typos
  boxes: ImmutablePropTypes.list.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Boxes;
