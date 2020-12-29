import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';

import Button from '../../../components/Button';

import { Container, Animation } from './style';

import animation from '../../../assets/animations/auth-home.json'

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1,}}>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#151515" />
        <Animation resizeMode="contain" source={animation} autoPlay />

        <View>
          <Button onPress={() => navigation.navigate('SignIn')}>
            Entrar
          </Button>
          <Button isSecondary>
            Cadastrar
          </Button>
        </View>
      </Container>
    </ScrollView>
  );
}

export default Home;