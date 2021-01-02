import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './../pages/auth/Home';
import SignIn from './../pages/auth/SignIn';
import SignUp from './../pages/auth/SignUp';

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
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;