import React, { useState, useRef } from 'react'
import Logo from '../../assets/logo.png'
import api from '../../services/api'
import { 
  ContainerModal, 
  Wrapper, 
  LogoImg, 
  SpanText, 
  Form, 
  InputsImg, 
  Input, 
  TextArea, 
  Button } from './styles'

const Modal = ({ id = 'modal', onClose = () => { } }) => {

  const inputFile = useRef(null)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')

  const submitNotice = () => {

    if (!title || !content || !inputFile.current || !inputFile.current.files[0]) {
      return alert('Todos os campos devem ser preenchidos!') }

    const formData = new FormData();
    formData.append('file', inputFile.current.files[0])
    formData.append('title', title)
    formData.append('content', content)
    api.post('/news', formData).then(resp => {
      if (resp.data.success) {
        onClose(false)
        return alert('Notícia adicionada!')
      }
      alert(resp.data.message);

    }).catch((err) => {
      alert('Erro ao adicionar notícia')
    })
  }

  const handleOutSide = (e) => {
    if (e.target.id === id) onClose()
  }
  return (
    <ContainerModal id={id} onClick={handleOutSide}>
      <Wrapper>
        <LogoImg src={Logo} alt="logo" />
        <SpanText>Preencha os campos abaixo para adicionar uma notícia.</SpanText>
        <Form>
          <InputsImg>
            <Input
              readOnly={true}
              placeholder="Adicionar foto"
              value={file}
            />
            <Input
              type="file"
              ref={inputFile}
              placeholder="Adicionar foto"
              accept='image/png, image/jpeg'
              style={{ display: 'none' }}
              onChange={e => setFile(inputFile.current.files[0].name)}
            />
            <Button 
              search
              onClick={() => inputFile.current.click()} 
              type="button">
              Pesquisar
              </Button>
          </InputsImg>
          <Input
            title
            placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Conteúdo"
            className="content-input"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <Button 
            submit
            onClick={submitNotice}>Adicionar</Button>
        </Form>
      </Wrapper>
    </ContainerModal>
  )
}

export default Modal