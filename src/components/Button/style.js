import styled from 'styled-components/native';

import { colorPrimary, colorSecondary } from '../../utils/colors';

export const Container = styled.TouchableOpacity`
    width: 100%;
    padding: 11px 28px;
    background-color: ${props => !props.isSecondary ? colorSecondary : colorPrimary};
    margin: 14px 0 8px;
    border-radius: 30px;

    justify-content: center;
    align-items: center;

    ${props => props.noMargin && 'margin: 0;'}
`;