import React from 'react';

import { Container } from './style';
import TxtBold from '../../styles/TxtBold';

const Button = ({ children, ...rest }) => {
    return (
        <Container {...rest}>
            <TxtBold size="18px" color="#fff">
                { children }
            </TxtBold>
        </Container>
    );
}

export default Button;