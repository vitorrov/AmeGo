import * as React from 'react';
import { View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import RoutesBottomTabs from './RoutesBottomTabs';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={<View />} />
    </Drawer.Navigator>
  );
}