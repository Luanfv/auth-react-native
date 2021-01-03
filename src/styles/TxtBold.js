import styled from 'styled-components/native';

import { colorDark } from '../utils/colors';

const TxtBold = styled.Text`
    font-family: 'Roboto-Bold';
    font-size: 22px;
    color: ${colorDark};
    flex-wrap: wrap;

    ${props => props.size && `font-size: ${props.size};`}
    ${props => props.color && `color: ${props.color};`}
`;

export default TxtBold;