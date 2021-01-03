import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../hooks/auth';

import { colorDark, colorPrimary } from '../utils/colors';

const Routes = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: colorDark, 
      }}>
        <ActivityIndicator size="large" color={colorPrimary} />
      </View>
    );
  }

  return !user.id ? <AuthRoutes /> : <AppRoutes />;
}

export default Routes;
