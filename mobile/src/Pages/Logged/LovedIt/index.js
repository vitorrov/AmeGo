import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { rgba } from 'polished';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Search from '@components/Search';
import Text from '@components/Text';
import ListItem from './ListItems';
import { Container, Content } from './styles';

const Tabs = createMaterialTopTabNavigator();
export default function LoveIt(){
  const themeContext = useContext(ThemeContext).colors;
  const [ products, setProducts ] = useState([]);
  const [ establishments, setEstablishments ] = useState([]);

  return (
    <Container>
      <Search 
        placeholder="O que deseja?"
        background={rgba(themeContext.tertiary, 0.2)}
        placeholderTextColor={rgba(themeContext.secundary, 0.4)}
        buttonColor={themeContext.secundary}
        iconColor={themeContext.secundary}
      />


      <Content>
        <Tabs.Navigator
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
              width: "30%",
              bottom: "0%",
              left: "10%",
            },
            style: {
              elevation: 0, //remove shadow on Android
              shadowOpacity: 0, //remove shadow on iOS
            },
          }}
        >
          <Tabs.Screen
            name="Estabelecimentos"
            component={props => <ListItem {...props} array={products} />}
          />

          <Tabs.Screen
            name="Produtos"
            component={props => <ListItem {...props} array={establishments} />}
          />
        </Tabs.Navigator>
      </Content>
    </Container>
  );
}
