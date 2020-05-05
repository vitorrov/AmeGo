import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { StatusBar } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import Text from '@components/Text';
import { FormContainer, Form, Input, Button } from "./styles";

export default function Register() {
  const themeContext = useContext(ThemeContext).colors;
  return (
    <FormContainer
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
      bounces={false}
    >
      {/* Background Linear Gradient */}
      <Form>
        <Input
          label="E-mail"
          icon={
            <Feather
              name="log-out"
              size={20}
              color={themeContext.secundary}
            />
          }
          inputProps={{
            placeholder: "example@gmail.com",
            autoCompleteType: "email",
            keyboardType: "email-address",
            textContentType: "emailAddress",
            autoCorrect: true,
          }}
        />

        <Input
          label="Senha"
          icon={
            <Ionicons
              name="ios-lock"
              size={20}
              color={themeContext.secundary}
            />
          }
          inputProps={{
            placeholder: "*****",
            textContentType: "password",
            secureTextEntry: true,
          }}
        />

        <Input
          label="CEP"
          icon={
            <Feather name="map" size={20} color={themeContext.secundary} />
          }
          inputProps={{
            placeholder: "12458965",
          }}
        />

        <Input
          label="Rua"
          icon={
            <Feather name="map" size={20} color={themeContext.secundary} />
          }
          inputProps={{
            placeholder: "Rua Exemplo",
          }}
        />

        <Input
          label="Número"
          icon={
            <Feather name="map" size={20} color={themeContext.secundary} />
          }
          inputProps={{
            placeholder: "444",
          }}
        />

        <Input
          label="Complemento"
          icon={
            <Feather name="map" size={20} color={themeContext.secundary} />
          }
          inputProps={{
            placeholder: "Proximo ao prédio X",
          }}
        />

        <Input
          label="Estado"
          icon={
            <Feather name="map" size={20} color={themeContext.secundary} />
          }
          inputProps={{
            placeholder: "SP",
          }}
        />

        <Input
          label="Cidade"
          icon={
            <Feather name="map" size={20} color={themeContext.secundary} />
          }
          inputProps={{
            placeholder: "São Paulo",
          }}
        />

        <Button 
          color={[themeContext.primary, themeContext.secundary]}
          text={<Text text="Cadastrar" align="center" size={18} color={themeContext.background} />}
          icon={<Feather name="arrow-right" size={20} color={themeContext.background}/>}
          width="90%"
          height="50px"
        />   
      </Form>
    </FormContainer>
  );
}
