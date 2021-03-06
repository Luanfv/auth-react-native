import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';

export const Back = styled.TouchableOpacity`
  margin: 20px 0;
`;

export const Container = styled.View`
  margin: auto 0;
`;

export const ContainerIcon = styled.View`
  height: 200px;
  align-items: center;
  justify-content: center;
`;

export const Animation = styled(Lottie)`
  height: 80px;
  width: 100%;
`;