import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';

import { colorDark } from '../../../utils/colors'

export const Container = styled.View`
  justify-content: space-between;
  flex: 1;
  background-color: ${colorDark};
  padding: 20px;
`;

export const Animation = styled(Lottie)`
  height: 300px;
  width: 100%;
  background-color: ${colorDark};
  margin: 20px auto;
`;
