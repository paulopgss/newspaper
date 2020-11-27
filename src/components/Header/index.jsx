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

import { useAuth } from '../../App';

function Header() {

  const { authUser, setAuthUser } = useAuth();

  const [loginVisible, setLoginVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)


  return (
    <Container>
      <ContainerHeader>
        <Link href="/">
          <ImgLogo src={Logo} />
        </Link>
        {
          !authUser.authenticated &&
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
        }
        {
          authUser.authenticated &&
          <Nav>
            <LinkLogin onClick={() => setSignUpVisible(true)}>Notícias</LinkLogin>

            <LinkLogin >Meus dados</LinkLogin>

            <LinkLogin onClick={() => {
              localStorage.removeItem('user_id_newspaper');
              setAuthUser({ authenticated: false });
            }}>Sair</LinkLogin>
          </Nav>
        }
      </ContainerHeader>
    </Container>
  );
}

export default Header;