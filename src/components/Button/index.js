import React from 'react';

import { Container } from './style';
import TxtBold from '../../styles/TxtBold';

const Button = ({ children, isSecondary, ...rest }) => {
    return (
        <Container {...rest} isSecondary={!isSecondary}>
            <TxtBold size="18px" color={!isSecondary ? '#EFF2FB' : '#208a4d'}>
                { children }
            </TxtBold>
        </Container>
    );
}

export default Button;