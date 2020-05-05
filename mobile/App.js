import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import Routes from '@app/routes';
import {name as appName} from './app.json';

import usePersistedState from '@app/utils/usePersistedState';
import { themes } from '@app/styles';

export default function App() {
  const [theme, setTheme] = usePersistedState('theme', themes.Light);
  console.log(theme);
  
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme ? theme : {}}>
        <StatusBar 
          // dark-content, light-content and default
          barStyle="dark-content"
          //To hide statusBar
          hidden={false}
          //Background color of statusBar
          backgroundColor={theme.colors.background}
          translucent={false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />
        <Routes /> 
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);