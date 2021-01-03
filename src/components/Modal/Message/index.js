import React from 'react';
import ModalContainer from 'react-native-modal';

import { Container, Button } from '../style';
import TxtBold from '../../../styles/TxtBold'; 

import { colorPrimary } from '../../../utils/colors';

const Modal = ({ open, text, action }) => {
    return (
        <ModalContainer isVisible={open}>
            <Container>
                <TxtBold style={{ textAlign: 'center' }}>
                    { text }
                </TxtBold>
                <Button 
                    background={colorPrimary} 
                    wfull
                    onPress={action}
                >
                    <TxtBold size="18px" color="#fff">
                        OK
                    </TxtBold>
                </Button>
            </Container>
        </ModalContainer>
    );
}

export default Modal;