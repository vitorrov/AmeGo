import React from 'react';
import PropTypes from 'prop-types';

import { Image } from './styles';

const Avatar = ({ source, ...props }) => {
  return <Image source={{uri: source}} { ...props }/>;
}

Avatar.propTypes = {
  source: PropTypes.string.isRequired.toString,
  size: PropTypes.number,
  color: PropTypes.string,
}

Avatar.defaultProps = {
  size: 56,
  color: "#333333",
};

export default Avatar;