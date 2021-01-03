import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { useAuth } from '../../../hooks/auth';

import Main from '../../../styles/Main';
import Txt from '../../../styles/Txt';
import TxtBold from '../../../styles/TxtBold';

import Modal from '../../../components/Modal';

import { Container, ProfileContainer, ProfileAvatar, Option, OptionIcon } from './style';

export const Profile = () => {
  const [isModal, setIsModal] = useState(false);

  const { user, signOut } = useAuth();

  const logout = useCallback(() => {
    setIsModal(false);

    setTimeout(() => {
      signOut();
    }, 600);
  }, [signOut]);

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
            <Icon name="person-outline" size={24} color="#151515" />
          </OptionIcon>
          <Txt>
            Editar perfil
          </Txt>
        </Option>
        <Option>
          <OptionIcon>
            <Icon name="lock-closed-outline" size={24} color="#151515" />
          </OptionIcon>
          <Txt>
            Trocar senha
          </Txt>
        </Option>
        <Option onPress={() => setIsModal(true)}>
          <OptionIcon>
            <Icon name="md-exit-outline" size={24} color="#151515" />
          </OptionIcon>
          <Txt>
            Sair
          </Txt>
        </Option>
      </Container>

      <Modal 
        open={isModal}
        text="Tem certeza que deseja sair dessa conta ?"
        yes={logout}
        no={() => setIsModal(false)}
      />
    </Main>
  );
}

export default Profile;