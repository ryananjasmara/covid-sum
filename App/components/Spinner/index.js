import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

/**
 *
 * @param {boolean} animating
 * @param {string} color
 * @param {string} size
 * @param {object} style
 */

const Spinner = ({animating, color, size, style}) => {
  return (
    <ActivityIndicator
      animating={animating}
      color={color}
      size={size}
      style={style}
    />
  );
};

Spinner.propTypes = {
  animating: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
};

Spinner.defaultProps = {
  animating: true,
  color: 'blue',
  size: 'large',
};

export default Spinner;
