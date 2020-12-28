import React from 'react';
import ModalContainer from 'react-native-modal';

import { Container, ContainerButtons, Button } from '../style';
import TxtBold from '../../../styles/TxtBold'; 

const Modal = ({ open, text, action }) => {
    return (
        <ModalContainer isVisible={open}>
            <Container>
                <TxtBold style={{ textAlign: 'center' }}>
                    { text }
                </TxtBold>
                <Button 
                    background="#fba91a" 
                    wfull
                    onPress={action}
                >
                    <TxtBold size="18px">
                        OK
                    </TxtBold>
                </Button>
            </Container>
        </ModalContainer>
    );
}

export default Modal;