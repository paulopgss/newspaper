import React, { useState } from 'react';
import {
  Container,
  ContainerHeader,
  Link,
  ImgLogo,
  Nav,
  LinkLogin
} from './styles'
import Login from '../Login'
import SignUp from '../SignUp'
import Logo from '../../assets/logo.png'


function Header() {
  const [loginVisible, setLoginVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)


  return (
    <Container>
      <ContainerHeader>
        <Link href="/">
          <ImgLogo src={Logo} />
        </Link>
        <Nav>
          <LinkLogin onClick={() => setSignUpVisible(true)}>Criar conta</LinkLogin>
          {
            signUpVisible &&
            <SignUp onClose={() => setSignUpVisible(false)} />
          }
          <LinkLogin onClick={() => setLoginVisible(true)}>Fazer login</LinkLogin>
          {
            loginVisible &&
            <Login onClose={() => setLoginVisible(false)} />
          }
        </Nav>
      </ContainerHeader>
    </Container>
  );
}

export default Header;