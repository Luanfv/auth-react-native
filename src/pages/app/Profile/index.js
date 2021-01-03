import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { useAuth } from '../../../hooks/auth';

import Main from '../../../styles/Main';
import TxtBold from '../../../styles/TxtBold';

import Modal from '../../../components/Modal';

import Option from './Option';
import { Container, ProfileContainer, ProfileAvatar } from './style';

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

        <Option 
          icon="person-outline" 
          name="Editar perfil" 
        />
        <Option 
          icon="lock-closed-outline" 
          name="Trocar senha" 
        />
        <Option 
          icon="md-exit-outline" 
          name="Sair" 
          onPress={() => setIsModal(true)} 
        />
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