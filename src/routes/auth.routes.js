import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './../pages/auth/Home';
import SignIn from './../pages/auth/SignIn';

const Auth = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Auth.Navigator 
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <Auth.Screen name="Home" component={Home} />
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;