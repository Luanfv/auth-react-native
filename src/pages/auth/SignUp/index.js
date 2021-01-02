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

import { Back, Container } from './style';

import getValidationErrors from '../../../utils/getValidationErrors';

const SignUp = ({ navigation }) => {
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmationPasswordRef = useRef(null);
  const netInfo = useNetInfo();

  const [messageOfError, setMessageOfError] = useState(undefined);
  const [isNotConnected, setIsNotConnected] = useState(false);

  const handleSubmit = useCallback(async (data) => {
    try {
      if (!netInfo.isConnected) {
        setIsNotConnected(true);

        return;
      }

      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Senha tem que ter no mínimo 6 digitos'),
        confirmation_password: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas não batem'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log('cheguei no fim');
    }
    catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current.setErrors(errors);

        if (!!errors.name) {
          setMessageOfError(errors.name);
        }
        else if (errors.email) {
          setMessageOfError(errors.email);
        }
        else if (errors.password) {
          setMessageOfError(errors.password);
        }
        else if (errors.confirmation_password) {
          setMessageOfError(errors.confirmation_password);
        }

        return;
      }

      setMessageOfError('Verifique os campos e tente novamente');
    }
  }, [netInfo, getValidationErrors]);

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1}}
      behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
      enabled
    >
      <Main>
        <Back onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} color="#979797" />
        </Back>

        <Container>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input 
              name="name" 
              title="Nome" 
              iconName="user" 
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu nome"
              returnKeyType="next"
              onSubmitEditing={() => {
                emailRef.current.focus();
              }}
            />
            <Input
              ref={emailRef}
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
              returnKeyType="next"
              onSubmitEditing={() => {
                confirmationPasswordRef.current.focus();
              }}
            />
            <Input 
              ref={confirmationPasswordRef}
              name="confirmation_password" 
              title="Confirme sua senha" 
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
            CADASTRAR
          </Button>
        </Container>

        <Modal 
          open={!!messageOfError}
          text={messageOfError}
          action={() => setMessageOfError(undefined)}
        />
        <Modal 
          open={isNotConnected}
          text="Você precisa está com internet para se registrar"
          action={() => setIsNotConnected(false)}
        />
      </Main>
    </KeyboardAvoidingView>
  );
}

export default SignUp;