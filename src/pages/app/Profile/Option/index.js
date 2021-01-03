import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Txt from '../../../../styles/Txt';

import { colorDark } from '../../../../utils/colors'

import { Container, IconContainer } from './style';

const Option = ({ icon, name, ...rest }) => {
  return (
    <Container {...rest}>
      <IconContainer>
        <Icon name={icon} size={24} color={colorDark} />
      </IconContainer>
      <Txt>
        {name}
      </Txt>
    </Container>
  );
}

export default Option;