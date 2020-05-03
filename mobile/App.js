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
        <StatusBar hidden barStyle="light-content" backgroundColor="#7d40e7" />
        <Routes /> 
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

console.disableYellowBox = false;

AppRegistry.registerComponent(appName, () => App);