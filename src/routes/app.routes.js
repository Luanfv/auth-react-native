import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../pages/app/Home';
import Profile from '../pages/app/Profile';

import { colorDark, colorSecondary } from '../utils/colors'

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colorSecondary,
        inactiveTintColor: colorDark,
        activeBackgroundColor: colorDark,
        showLabel: false,
      }}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } 
          else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default AppRoutes;
