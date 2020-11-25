import React from 'react'
import Header from '../../components/Header'
import {
  ContainerProfile,
  Wrapper,
  Span,
  ImgProfile,
  Inputs,
  Input,
  Button
} from './styles'

import ProfileImg from '../../assets/profile.jpg'

function Profile() {
  return (
    <>
      <Header />
      <ContainerProfile>
        <Wrapper>
          <Span>Meus dados</Span>
          <ImgProfile src={ProfileImg} />
          <Inputs>
            <Input placeholder="Nome" />
            <Input placeholder="Email" />
            <Span message>Altere os dados abaixo somente para realizar alteração de senha.</Span>
            <Input placeholder="Senha atual" />
            <Input placeholder="Nova senha" />
            <Input placeholder="Confirme a nova senha" />
            <Button>Salva</Button>
          </Inputs>
        </Wrapper>
      </ContainerProfile>
    </>
  )
}

export default Profile