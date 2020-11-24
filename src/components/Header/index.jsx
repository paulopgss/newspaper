import React, { useState } from 'react';
import {
  Container, 
  ContainerHeader, 
  Link, 
  ImgLogo,
  Nav, 
  LinkLogin} from './styles'

import Logo from '../../assets/logo.png'


function Header() {

    return (
        <Container>
            <ContainerHeader>
                <Link href="/">
                  <ImgLogo src={Logo} />
                </Link>
                <Nav>
                  <LinkLogin >Criar conta</LinkLogin>
                  <LinkLogin >Fazer login</LinkLogin>
                </Nav>
            </ContainerHeader>
        </Container>
    );
}

export default Header;