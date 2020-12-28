import styled from 'styled-components/native';
import { Platform } from 'react-native';

const Main = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${props => props.bg ? props.bg : '#fff'};
  ${Platform.OS === 'ios' && 'padding-top: 45px'};
`;

export default Main;