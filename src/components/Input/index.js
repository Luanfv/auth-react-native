import React, { forwardRef } from 'react';

import Input from './Input';

import Txt from './../../styles/Txt';
import { ContainerInput } from './style';

const InputContainer = ({ title, wfull, iconName, ...rest }, ref) => {
    return (
        <ContainerInput>
            { title && <Txt style={!!iconName && { color: '#979797' }}>{ title }</Txt> }
            <Input {...rest} ref={ref} iconName={iconName} />
        </ContainerInput>
    );
}

export default forwardRef(InputContainer);