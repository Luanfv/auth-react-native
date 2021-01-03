import React from 'react';
import ModalContainer from 'react-native-modal';

import { Container, ContainerButtons, Button } from './style';
import TxtBold from './../../styles/TxtBold'; 
import TwoColumn from './../../styles/TwoColumn';

const Modal = ({ open, text, yes, no }) => {
    return (
        <ModalContainer isVisible={open}>
            <Container>
                <TxtBold style={{ textAlign: 'center' }}>
                    { text }
                </TxtBold>
                <ContainerButtons>
                    <TwoColumn>
                        <Button 
                            background="#136b54" 
                            onPress={yes}
                        >
                            <TxtBold size="18px" color="#fff">
                                SIM
                            </TxtBold>
                        </Button>
                        <Button 
                            onPress={no}
                        >
                            <TxtBold size="18px">
                                NÃO
                            </TxtBold>
                        </Button>
                    </TwoColumn>
                </ContainerButtons>
            </Container>
        </ModalContainer>
    );
}

export default Modal;