import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function RoutesBottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={<View />} />
      <Tab.Screen name="Settings" component={<View />} />
    </Tab.Navigator>
  );
}