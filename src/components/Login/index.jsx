import React, {useState} from 'react'
import Logo from '../../assets/logo.png'
import api from '../../services/api'
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitLogin = () => {
    api.post('/sessions', {email, password}).then(resp => {
      console.log(resp.data)
      if (resp.data.success) {
        onClose(false)
        return alert('login realizado')
      } alert(resp.data.message)
    }).catch((err) => {
      return alert('Erro ao realizar o login!')
    })
  }

  const handleOutSide = (e) => {
    if (e.target.id === id) onClose()
  }
  return (
    <ContainerModal id={id} onClick={handleOutSide}>
      <Wrapper>
        <LogoImg src={Logo} alt="logo" />
        <SpanText>Faça login para continuar</SpanText>
        <Form>
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
          />
          <Button
            submit
            onClick={submitLogin}
          >Entrar</Button>
        </Form>
      </Wrapper>
    </ContainerModal>
  )
}

export default Login