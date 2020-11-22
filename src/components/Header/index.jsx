import React, { useState } from 'react';
import {Container, ContainerHeader, Link, ImgLogo, ButtonStyled} from './styles'
import Modal from '../Modal';

import Logo from '../../assets/logo.png'


function Header() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container>
            <ContainerHeader>
                <Link href="/">
                  <ImgLogo src={Logo} />
                </Link>
                <ButtonStyled onClick={() => setModalVisible(true)}>Adicionar notícia</ButtonStyled>
                {
                    modalVisible &&
                    <Modal onClose={() => setModalVisible(false)} />
                }
            </ContainerHeader>
        </Container>
    );
}

export default Header;