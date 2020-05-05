import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



import Authentication from "@app/Pages/Authentication";
import Logged from "@app/Routes/Logged";

const Stack = createStackNavigator();

export default function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator headerMode="none">
              {isLoggedIn ? (
                <>
                  <Stack.Screen name="Logged" component={Logged} />
                </>
              ) : (
                <Stack.Screen name="Authentication" component={Authentication} />
              )}
            </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
