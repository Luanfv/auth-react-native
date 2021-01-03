import styled, { css } from 'styled-components/native';
import SimpleLineIcons from 'react-native-vector-icons/Ionicons';

import { colorPrimary, colorError } from '../../utils/colors';

export const InputStyle = styled.TextInput`
    border: #979797;
    font-size: 18px;
    padding: 10px;

    ${props => props.error && css`
        border-color: ${colorError};
    `}

    ${props => props.isFocus && css`
        border-color: ${colorPrimary};
    `}
`;

export const Container = styled.View`
    background: #fff;
    flex-direction: row;
    border: 0;
    border-radius: 8px;
    border-bottom-width: 2px;
    border-color: #979797;
    align-items: center;
    margin-top: 10px;

    ${props => props.error && css`
        border-color: ${colorError};
    `}

    ${props => props.isFocus && css`
        border-color: ${colorPrimary};
    `}
`;

export const InputOfIcon = styled.TextInput`
    font-size: 18px;
    padding: 10px;
    padding-left: 0px;
    flex: 1;
`;

export const Icon = styled(SimpleLineIcons)`
    margin: auto 10px;
    color: #979797;

    ${props => props.error && css`
        color: ${colorError};
    `}

    ${props => props.isFocus && css`
        color: ${colorPrimary};
    `}
`;

export const ContainerInput = styled.View`
    margin-bottom: 20px;
`;