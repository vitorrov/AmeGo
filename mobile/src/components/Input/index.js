import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

import { Container, Content, Label, TextInput } from './styles';

export default function Input({ 
  showLabel=true,
  label="Label...",
  labelColor= null,

  icon = <Feather name="log-out" size={20}/>,
  inputProps = {}, 
  ...props }) {
  console.log(props)
  return (
    <Container>
      { showLabel ? <Label labelColor={labelColor}>{label}</Label> : null }
      <Content { ...props }>
        { icon }
        <TextInput { ...inputProps }/>
      </Content>
    </Container>
  );
}