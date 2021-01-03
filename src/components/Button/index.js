import React from 'react';

import { Container } from './style';
import TxtBold from '../../styles/TxtBold';

import { colorPrimary, colorSecondary } from '../../utils/colors';

const Button = ({ children, isSecondary, ...rest }) => {
    return (
        <Container {...rest} isSecondary={!isSecondary}>
            <TxtBold size="18px" color={!isSecondary ? colorSecondary : colorPrimary}>
                { children }
            </TxtBold>
        </Container>
    );
}

export default Button;