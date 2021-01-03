import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 0;
`;

export const ProfileContainer = styled.View`
  margin: 20px auto 40px;
  align-items: center;
  justify-content: center;
`;

export const ProfileAvatar = styled.View`
  background-color: #151515;
  border: #151515 solid 1px;
  margin-bottom: 15px;
  border-radius: 75px;
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
`;

export const Option = styled.TouchableOpacity`
  padding: 5px 0;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const OptionIcon = styled.View`
  margin-right: 10px;
`;