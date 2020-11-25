import React, { useState } from 'react'
import api from '../../services/api'
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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comppass, setComppass] = useState('')

  const addUser = () => {
    if (!name || !email || !password || !comppass) {
      return alert('Todos os campos devem ser preenchidos')
    } if (password != comppass) {
      return alert('As senhas são diferentes')
    }

    api.post('/users', {name, email, password}).then(resp => {
      if (resp.data.sucess) {
        onClose(false)
        return alert('Usuario cadastrado!')
      }
      alert(resp.data.message)

    }).catch((err) => {
      alert('Erro ao criar usuário!')
    })
  }

  const handleOutSide = (e) => {
    if (e.target.id === id) onClose()
  }
  return (
    <ContainerModal id={id} onClick={handleOutSide}>
      <Wrapper>
        <LogoImg src={Logo} alt="logo" />
        <SpanText>Criar uma conta</SpanText>
        <Form>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome"
          />
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            type="password"
          />
          <Input
            value={comppass}
            onChange={e => setComppass(e.target.value)}
            placeholder="Confirmar senha"
            type="password"
          />
          <Button
            submit
            onClick={addUser}
          >Criar</Button>
        </Form>
      </Wrapper>
    </ContainerModal>
  )
}

export default SignUp