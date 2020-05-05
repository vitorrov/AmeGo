import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components';

import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import Text from '@components/Text';

import Home_routes from '@pages/Logged/Home';LovedIt
import LovedIt from '@pages/Logged/LovedIt';
import Search from '@pages/Logged/Search';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function RoutesBottomTabs({ navigation }) {  
  const themeContext = useContext(ThemeContext).colors;

  navigation.setOptions({
    headerTitle : () => (
      <View style={{ flexDirection: 'row', justifyContent:"center", alignItems:"center" }} >
        <Text text="R. Aramina 412" style={{width: 'auto'}} size={16} color={themeContext.secundary}/>
        <Ionicons style={{ marginLeft: '5%' }} name="ios-arrow-down" size={22} color={themeContext.secundary} />
      </View>
    ),
    headerLeft: () => <Feather name="user" size={28} color={themeContext.secundary} />,
  });

  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      
      keyboardDismissMode="on-drag"
      initialRouteName="Home"
      tabBarOptions={{        
        activeTintColor: themeContext.secundary,
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
          position: 'absolute',
          backgroundColor: themeContext.secundary,
          top: '0%'
        },
        keyboardHidesTabBar: true
      }}>

      <Tab.Screen name="Home" component={Home_routes}
        navigationStack={navigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={25} />
          ),
      }}/>

      <Tab.Screen name="Loved it" component={LovedIt} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color={color} size={25} />
          ),
      }}/>

      <Tab.Screen name="search" component={Search} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-search" color={color} size={25} />
          ),
      }}/>

      <Tab.Screen name="basket" component={View} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-cart" color={color} size={25} />
          ),
      }}/>

      <Tab.Screen name="Settings" component={View} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-help-circle-outline" color={color} size={25} />
          ),
      }}/>
    </Tab.Navigator>
  );
}