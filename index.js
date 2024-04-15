/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';

export default function Main() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FA2D5E',
      secondary: 'yellow',
    },
  };
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
