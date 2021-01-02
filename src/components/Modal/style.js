import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    background: #fff;
    padding: 50px 30px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const ContainerButtons = styled.View`
    margin-top: 30px;
`;

export const Button = styled.TouchableOpacity`
    width: 50%;
    padding: 11px 28px;
    background: #f0f0f0;
    color: #414141;
    border-radius: 30px;

    justify-content: center;
    align-items: center;

    ${props => props.background && `background: ${props.background};`}
    ${props => props.wfull && css`
        flex-direction: row;
        width: 100%;
        margin-top: 30px;
    `}
`;