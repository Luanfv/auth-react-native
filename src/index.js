import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import ProviderApp from './hooks';
import Routes from './routes';

import { colorDark, colorError, colorPrimary } from './utils/colors';

const App = () => {
  return (
    <ProviderApp>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={colorDark} />

        <Routes />
      </NavigationContainer>
    </ProviderApp>
  );
}

export default App;