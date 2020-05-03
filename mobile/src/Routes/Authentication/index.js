import React, { useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { ThemeContext } from "styled-components";

import Icon from "@expo/vector-icons/Entypo";

import Login from "@pages/Authentication/Login";
import Register from "@pages/Authentication/Register";

const { Screen, Navigator } = createMaterialTopTabNavigator();

function Routes() {
  const themeContext = useContext(ThemeContext).colors;

  return (
    <Navigator
      tabBarPosition="top"
      keyboardDismissMode="auto" //on-drag
      initialRouteName="Sign in"
      tabBarOptions={{
        activeTintColor: themeContext.secundary,
        inactiveTintColor: themeContext.quartenary,
        showIcon: false,
        showLabel: true,
        indicatorStyle: {
          position: "absolute",
          backgroundColor: themeContext.secundary,
          width: "20%",
          bottom: "0%",
          left: "15%",
        },
        style: {
          elevation: 0, //remove shadow on Android
          shadowOpacity: 0, //remove shadow on iOS
        },
      }}
    >
      <Screen
        name="Entrar"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={25} />
          ),
        }}
      />

      <Screen
        name="Cadastrar-se"
        component={Register}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="controller-next" color={color} size={25} />
          ),
        }}
      />
    </Navigator>
  );
}

export default Routes;
