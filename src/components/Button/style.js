import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled.TouchableOpacity`
    width: 100%;
    padding: 11px 28px;
    background-color: ${props => !props.isSecondary ? '#EFF2FB' : '#136b54'};
    margin: 14px 0;
    border-radius: 3px;

    justify-content: center;
    align-items: center;

    ${props => props.noMargin && 'margin: 0;'}
`;