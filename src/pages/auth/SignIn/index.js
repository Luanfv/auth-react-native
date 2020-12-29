import React, { useRef, useState, useCallback } from 'react';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { useNetInfo } from '@react-native-community/netinfo';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal/Message';

import Main from '../../../styles/Main';

import { Container } from './style';

import getValidationErrors from '../../../utils/getValidationErrors';

const SignIn = () => {
  const formRef = useRef(null);
  const passwordRef = useRef(null);
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
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log('cheguei no fim');
    }
    catch (err) {
      const errors = getValidationErrors(err);
      formRef.current.setErrors(errors);

      console.log('deu ruim');
    }
  }, [netInfo, getValidationErrors]);

  return (
    <Main contentContainerStyle={{ flex: 1 }}>
      <Container>
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
  );
}

export default SignIn;