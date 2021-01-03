import React from 'react';
import { View } from 'react-native';

import { useAuth } from '../../../hooks/auth';

import Button from '../../../components/Button';

export const Home = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Button onPress={signOut}>
        Sair da conta
      </Button>
    </View>
  );
}

export default Home;