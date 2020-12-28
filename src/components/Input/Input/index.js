import React, { 
    useEffect, 
    useRef, 
    useCallback, 
    useImperativeHandle, 
    forwardRef 
} from 'react';
import { useField } from '@unform/core';

import { InputStyle, Container, InputOfIcon, Icon } from './../style';

const Input = ({ name, onChangeText, rawValue, iconName, ...rest }, ref) => {
    const { registerField, defaultValue = '', fieldName, error } = useField(name);
    const inputValueRef = useRef({ value: defaultValue });
    const inputElementRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        },
    }));

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref, value) {
                inputValueRef.current.value = value;
                inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            },
            getValue(ref) {
                return rawValue || ref.value;
            },
        });
    }, [registerField, fieldName, rawValue]);

    const handleOnChange = useCallback(text => {
        if (inputValueRef.current) 
            inputValueRef.current.value = text;

        if (onChangeText) 
            onChangeText(text);

    }, [onChangeText]);

    return (
        !!iconName
        ?
        <Container error={error}>
            <Icon name={iconName} size={20} error={error} />
            <InputOfIcon 
                ref={inputElementRef}
                name={name} 
                defaultValue={defaultValue}
                onChangeText={value => handleOnChange(value)}
                {...rest}
            /> 
        </Container>
        :
        <InputStyle 
            error={error}
            ref={inputElementRef}
            name={name} 
            defaultValue={defaultValue}
            onChangeText={value => handleOnChange(value)}
            {...rest}
        /> 
    );
}

export default forwardRef(Input);