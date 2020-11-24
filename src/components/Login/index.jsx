import React from 'react'
import Logo from '../../assets/logo.png'
import { 
  ContainerModal,
  Wrapper,
  LogoImg,
  SpanText,
  Form,
  Input,
  Button
 } from './styles'

function Login({ id = 'modal', onClose = () => { } }) {

  const handleOutSide = (e) => {
    if (e.target.id === id) onClose()
  }
  return(
    <ContainerModal id={id} onClick={handleOutSide}>
      <Wrapper>
        <LogoImg src={Logo} alt="logo" />
        <SpanText>Faça login para continuar</SpanText>
        <Form>
          <Input
            title
            placeholder="Email"
          />
          <Input
            title
            placeholder="Senha"
          />
          <Button 
            submit
          >Entrar</Button>
        </Form>
      </Wrapper>
    </ContainerModal>
  )
}

export default Login