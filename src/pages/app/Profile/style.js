import styled from 'styled-components/native';

import { colorDark } from '../../../utils/colors';

export const Container = styled.View`
  padding: 20px 0;
`;

export const ProfileContainer = styled.View`
  margin: 20px auto 40px;
  align-items: center;
  justify-content: center;
`;

export const ProfileAvatar = styled.View`
  background-color: ${colorDark};
  border: ${colorDark} solid 1px;
  margin-bottom: 15px;
  border-radius: 75px;
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
`;