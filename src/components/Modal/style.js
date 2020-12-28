import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    background: #fff;
    padding: 50px 30px;
    align-items: center;
    justify-content: center;
`;

export const ContainerButtons = styled.View`
    margin-top: 30px;
`;

export const Button = styled.TouchableOpacity`
    width: 50%;
    padding: 22px 0;
    background: #f0f0f0;
    color: #414141;

    justify-content: center;
    align-items: center;

    ${props => props.background && `background: ${props.background};`}
    ${props => props.wfull && css`
        flex-direction: row;
        width: 100%;
        margin-top: 30px;
    `}
`;