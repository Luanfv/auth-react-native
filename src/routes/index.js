import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../hooks/auth';

const Routes = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#151515' 
      }}>
        <ActivityIndicator size="large" color="#136b54" />
      </View>
    );
  }

  return !user.id ? <AuthRoutes /> : <AppRoutes />;
}

export default Routes;
