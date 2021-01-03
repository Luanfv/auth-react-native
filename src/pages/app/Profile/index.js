import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { useAuth } from '../../../hooks/auth';

import Main from '../../../styles/Main';
import Txt from '../../../styles/Txt';
import TxtBold from '../../../styles/TxtBold';

import { Container, ProfileContainer, ProfileAvatar, Option, OptionIcon } from './style';

export const Profile = () => {
  const { user, signOut } = useAuth();

  return (
    <Main>
      <Container>
        <ProfileContainer>
          <ProfileAvatar>
            <Icon size={65} name="person" color="#fff" />
          </ProfileAvatar>
          <TxtBold>
            {user.name}
          </TxtBold>
        </ProfileContainer>

        <Option>
          <OptionIcon>
            <Icon name="person-outline" size={24} />
          </OptionIcon>
          <Txt>
            Editar perfil
          </Txt>
        </Option>
        <Option>
          <OptionIcon>
            <Icon name="lock-closed-outline" size={24} />
          </OptionIcon>
          <Txt>
            Trocar senha
          </Txt>
        </Option>
        <Option onPress={signOut}>
          <OptionIcon>
            <Icon name="md-exit-outline" size={24} />
          </OptionIcon>
          <Txt>
            Sair
          </Txt>
        </Option>
      </Container>
    </Main>
  );
}

export default Profile;