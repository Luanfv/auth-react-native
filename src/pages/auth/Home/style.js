import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';

export const Container = styled.View`
  justify-content: space-between;
  flex: 1;
  background-color: #151515;
  padding: 20px;
`;

export const Animation = styled(Lottie)`
  height: 300px;
  width: 100%;
  background-color: #151515;
  margin: 20px auto;
`;
