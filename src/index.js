import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ProviderApp from './hooks';
import Routes from './routes';

const App = () => {
  return (
    <ProviderApp>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#151515" />

        <Routes />
      </NavigationContainer>
    </ProviderApp>
  );
}

export default App;