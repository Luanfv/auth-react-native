import React, { useRef, useState, useCallback } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { useNetInfo } from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal/Message';

import Main from '../../../styles/Main';

import { Back, Container, ContainerIcon, Animation, AuthIcon } from './style';

import getValidationErrors from '../../../utils/getValidationErrors';

import animationFail from '../../../assets/animations/bio-fail.json';
import animationSuccess from '../../../assets/animations/bio-success.json';

const SignIn = ({ navigation }) => {
  const formRef = useRef(null);
  const passwordRef = useRef(null);
  const netInfo = useNetInfo();

  const [messageOfError, setMessageOfError] = useState(undefined);
  const [isNotConnected, setIsNotConnected] = useState(false);
  const [faseAuth, setFaseAuth] = useState(0);

  const handleSubmit = useCallback(async (data) => {
    try {
      if (!netInfo.isConnected) {
        setIsNotConnected(true);

        return;
      }

      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setFaseAuth(2);

      console.log('cheguei no fim');
    }
    catch (err) {
      const errors = getValidationErrors(err);
      formRef.current.setErrors(errors);

      setFaseAuth(1);

      console.log('deu ruim');
    }
  }, [netInfo, getValidationErrors]);

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
      enabled
    >
      <Main>
        <Back onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} color="#979797" />
        </Back>

        <Container>
          <ContainerIcon>

            {
              faseAuth === 0
              &&
              <AuthIcon source={require('../../../assets/images/auth-bio.png')} resizeMode="contain" loop />
            }

            {
              faseAuth === 1
              &&
              <Animation source={animationFail} resizeMode="cover" autoPlay />
            }


            {
              faseAuth === 2
              &&
              <Animation source={animationSuccess} resizeMode="cover" autoPlay />
            }
          </ContainerIcon>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input 
              name="email" 
              title="E-mail" 
              iconName="envelope" 
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Digite seu e-mail"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordRef.current.focus();
              }}
            />
            <Input 
              ref={passwordRef}
              name="password" 
              title="Senha" 
              iconName="lock"
              secureTextEntry
              placeholder="******" 
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current.submitForm();
              }}
            />
          </Form>

          <Button onPress={() => formRef.current.submitForm()}>
            ENTRAR
          </Button>
        </Container>

        <Modal 
          open={!!messageOfError}
          text={messageOfError}
          action={() => setMessageOfError(undefined)}
        />
        <Modal 
          open={isNotConnected}
          text="Você precisa está com internet para entrar em uma conta"
          action={() => setIsNotConnected(false)}
        />
      </Main>
    </KeyboardAvoidingView>
  );
}

export default SignIn;