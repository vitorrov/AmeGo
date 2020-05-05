import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { rgba } from 'polished';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

import temporaryData from './temporaryData';

import Search from '@components/Search';
import Text from '@components/Text';
import ListItems from './ListItems';
import { Container, Content } from './styles';

const Tabs = createMaterialTopTabNavigator();
export default function SearchComponents(){
  const themeContext = useContext(ThemeContext).colors;
  const [ stores, setStores ] = useState(temporaryData.stores);

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
            showIcon: true,
            safeAreaInset: { left: 'always', right: 'never' },
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
            name="Restaurantes"
            component={props => <ListItems {...props} array={stores} />}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="food" color={color} size={30} />
              ),
            }}
          />

          <Tabs.Screen
            name="Lojas/Mercados"
            component={props => <ListItems {...props} array={stores} />}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Fontisto name="shopping-store" style={{marginTop: 8}} color={color} size={20} />
              ),
            }}
          />
        </Tabs.Navigator>
      </Content>
    </Container>
  );
}
