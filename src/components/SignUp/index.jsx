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

function SignUp({ id = 'modal', onClose = () => { } }) {

  const handleOutSide = (e) => {
    if (e.target.id === id) onClose()
  }
  return(
    <ContainerModal id={id} onClick={handleOutSide}>
      <Wrapper>
        <LogoImg src={Logo} alt="logo" />
        <SpanText>Criar uma conta</SpanText>
        <Form>
          <Input
            title
            placeholder="Nome"
          />
          <Input
            title
            placeholder="Email"
          />
          <Input
            title
            placeholder="Senha"
          />
          <Input
            title
            placeholder="Confirmar senha"
          />
          <Button 
            submit
          >Criar</Button>
        </Form>
      </Wrapper>
    </ContainerModal>
  )
}

export default SignUp