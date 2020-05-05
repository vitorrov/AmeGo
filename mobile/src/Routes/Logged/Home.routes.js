import React, { useState } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import BottomTabs from './BottomTabs.routes';
import Home from "@pages/Logged/Home";
import Categorie from "@pages/Logged/Categorie";
import SubCategory from "@pages/Logged/SubCategory";

import Header from '@components/HeaderStackNavigation';
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      //headerMode="none"
      headerMode="screen"

      screenOptions={{
        header: (props) => <Header  {...props} />,
        
        headerStyle: {
            // backgroundColor: themeContext.secundary,
            height: 60,
        },
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        // ...TransitionPresets.ModalPresentationIOS,
      }}    
      mode="modal"
    >
      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen name="Categorie" component={Categorie} />
      <Stack.Screen name="SubCategory" component={SubCategory}
        options={{
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </Stack.Navigator>
  );
}
