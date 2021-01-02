import React from 'react';
import { View, ScrollView } from 'react-native';

import Button from '../../../components/Button';

import { Container, Animation } from './style';

import animation from '../../../assets/animations/auth-home.json'

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1,}}>
      <Container>
        <Animation resizeMode="contain" source={animation} autoPlay />

        <View>
          <Button onPress={() => navigation.navigate('SignIn')}>
            Entrar
          </Button>
          <Button isSecondary onPress={() => navigation.navigate('SignUp')}>
            Cadastrar
          </Button>
        </View>
      </Container>
    </ScrollView>
  );
}

export default Home;