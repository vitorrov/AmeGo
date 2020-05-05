import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity} from 'react-native'
import Feather from '@expo/vector-icons/Feather';

import { Container, Text } from './styles';

export default function Button({ icon, text, textColor = null, ...props }) {
  return (
    <TouchableOpacity>
      <Container { ...props }>
        {text}
        { icon }
      </Container>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  color: PropTypes.oneOfType([ 
    PropTypes.array,    
    PropTypes.string,
  ]),
  icon: PropTypes.string.isRequired.toString,
  text: PropTypes.string.toString,
  width: PropTypes.string.toString,
  height: PropTypes.string.toString,
}

Button.defaultProps = {
  color: ['#170082', '#FC2E52'],
  icon: <Feather name="arrow-right" size={20}/>,
  text: "Clique-me",
  width: '100%',
  height: '50px',
};