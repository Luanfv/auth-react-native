import React, { useRef, useState, useCallback } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { useNetInfo } from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/Ionicons';

import { useAuth } from '../../../hooks/auth';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal/Message';

import Main from '../../../styles/Main';

import { Back, Container, ContainerIcon, Animation, AuthIcon } from './style';

import getValidationErrors from '../../../utils/getValidationErrors';

import animationFail from '../../../assets/animations/bio-fail.json';
import animationSuccess from '../../../assets/animations/bio-success.json';

import { colorDark } from '../../../utils/colors';

const SignIn = ({ navigation }) => {
  const formRef = useRef(null);
  const passwordRef = useRef(null);
  const netInfo = useNetInfo();

  const [messageOfError, setMessageOfError] = useState(undefined);
  const [isNotConnected, setIsNotConnected] = useState(false);
  const [faseAuth, setFaseAuth] = useState(0);

  const { signIn } = useAuth();

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

      const messageOfError = await signIn(formRef);

      if (!!messageOfError) {
        setFaseAuth(1);
        setMessageOfError(messageOfError);

        return;
      }

      setFaseAuth(2);
    }
    catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current.setErrors(errors);
        
        if (errors.email) {
          setMessageOfError(errors.email);
        }
        else if (errors.password) {
          setMessageOfError(errors.password);
        }
      }
    }
  }, [netInfo, getValidationErrors, signIn]);

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
      enabled
    >
      <Main>
        <Back onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color={colorDark} />
        </Back>

        <Container>
          <ContainerIcon>

            {
              faseAuth === 0
              &&
              <AuthIcon source={require('../../../assets/images/auth-bio.png')} resizeMode="contain" />
            }

            {
              faseAuth === 1
              &&
              <Animation source={animationFail} resizeMode="cover" autoPlay />
            }


            {
              faseAuth === 2
              &&
              <Animation source={animationSuccess} resizeMode="cover" autoPlay loop={false} />
            }
          </ContainerIcon>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input 
              name="email" 
              title="E-mail" 
              iconName="mail-outline" 
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
              iconName="lock-closed-outline"
              secureTextEntry
              placeholder="******" 
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current.submitForm();
              }}
            />
          </Form>

          <Button onPress={() => formRef.current.submitForm()}>
            Entrar
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