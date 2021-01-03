import styled from 'styled-components/native';

import { colorDark } from '../utils/colors';

const Txt = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 18px;
    color: ${colorDark};
    flex-wrap: wrap;

    ${props => props.size && `font-size: ${props.size};`}
    ${props => props.color && `color: ${props.color};`}
`;

export default Txt;