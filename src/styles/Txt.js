import styled from 'styled-components/native';

const Txt = styled.Text`
    /* font-family: 'Roboto-Regular'; */
    font-size: 18px;
    color: #414141;
    flex-wrap: wrap;

    ${props => props.size && `font-size: ${props.size};`}
    ${props => props.color && `color: ${props.color};`}
`;

export default Txt;