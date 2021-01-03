import React from 'react';

import { useAuth } from '../../../hooks/auth';

import Main from '../../../styles/Main';
import Txt from '../../../styles/Txt';
import TxtBold from '../../../styles/TxtBold';

import { Container } from './style';

export const Home = () => {
  const { user } = useAuth();

  return (
    <Main>
      <Container>
        <Txt size="22px">
          Seja bem-vindo(a), <TxtBold>{user.name}</TxtBold>!
        </Txt>
      </Container>
    </Main>
  );
}

export default Home;