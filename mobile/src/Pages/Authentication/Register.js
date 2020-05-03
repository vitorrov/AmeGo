import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';


import { FormContainer, Form, Input, Button } from './styles';


export default function Register() {
  const themeContext = useContext(ThemeContext).colors;
  return (
    <FormContainer>
      {/* Background Linear Gradient */}
      <Form>
        <Input 
          label="E-mail"
          icon={<Feather name="log-out" size={20} color={themeContext.secundary}/>}
          inputProps={{
            placeholder: "example@gmail.com",            
            autoCompleteType: 'email',
            keyboardType: "email-address",
            textContentType: "emailAddress",
            autoCorrect: true,
          }}
        />
        <Input
          label="CEP"
          icon={<Feather name="map" size={20} color={themeContext.secundary}/>}
          inputProps={{
            placeholder: "12458965",
          }}
        />
        <Input
          label="Senha"
          icon={<Ionicons name="ios-lock" size={20} color={themeContext.secundary}/>}
          inputProps={{
            placeholder: "*****",
            textContentType: "password",
            secureTextEntry: true,
          }}
        />

        <Button 
          text="Cadastrar"
          icon ={<Feather name="arrow-right" size={20} color={themeContext.background}/>}
        />
      </Form>
    </FormContainer>
  );
}
