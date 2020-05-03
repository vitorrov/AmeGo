import React from 'react';
import { TouchableOpacity} from 'react-native'
import Feather from '@expo/vector-icons/Feather';

import { Container, Text } from './styles';

export default function Button({ 
  icon = <Feather name="arrow-right" size={20}/>,
  text = "Clique-me",
  textColor = null,
  ...props }) {
  return (
    <TouchableOpacity>
      <Container { ...props }>
        <Text textColor={textColor}>{text}</Text>
        { icon }
      </Container>
    </TouchableOpacity>
  );
}