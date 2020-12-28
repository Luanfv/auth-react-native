import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled.TouchableOpacity`
    width: 100%;
    padding: 14px 28px;
    background-color: #0080FF;
    margin: 14px 0 20px;
    border-radius: 3px;

    justify-content: center;
    align-items: center;

    ${props => props.noMargin && 'margin: 0;'}
`;