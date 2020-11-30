import React, { useState, useRef } from 'react'
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
  Button
} from './styles'
import { useAuth } from '../../App'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdAddAPhoto, MdClose } from 'react-icons/md'


const EditNews = ({ id = 'modal', onClose = () => { } }) => {
  const errorAdd = () => toast.error("Erro ao carregar a notícia!")
  const errorNotice = () => toast.error("Todos os campos devem ser preenchidos")

  const { authUser } = useAuth()

  const inputFile = useRef(null)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')
  const [removePhoto, setRemovePhoto] = useState(false)


  const submitNotice = () => {

    if (!title || !content || !inputFile.current || !inputFile.current.files[0]) {
      return errorNotice()
    }

    const formData = new FormData();
    formData.append('file', inputFile.current.files[0])
    formData.append('title', title)
    formData.append('content', content)
    formData.append('user_id', authUser.userId)
    api.post('/news', formData).then(resp => {
      if (resp.data.success) {
        onClose(false)
        return
      }
      alert(resp.data.message);

    }).catch((err) => {
      errorAdd()
    })
  }

  const handleOutSide = (e) => {
    if (e.target.id === id) onClose()
  }
  return (
    <ContainerModal id={id} onClick={handleOutSide}>
      <ToastContainer />
      <Wrapper>
        <SpanText>Editar notícia</SpanText>
        <MdClose
            size={20}
            onClick={e => {
              setFile(null)
              setRemovePhoto(true)}}
            style={{
              marginRight: '100',
              color: 'var(--color-comments)',
              borderRadius: '50%',
              border: '1px solid #ccc', cursor: 'pointer'
            }} />
        <LogoImg src="" alt="Imagem da notícia" />
        <MdAddAPhoto
            size={20}
            onClick={() => inputFile.current.click()}
            style={{
              marginLeft: '100',
              color: 'var(--color-comments)', cursor: 'pointer'
            }} />
        <Form>
          <InputsImg>
            <Input
              type="file"
              ref={inputFile}
              placeholder="Adicionar foto"
              accept='image/png, image/jpeg'
              style={{ display: 'none' }}
              onChange={e => {
                const linkImage = URL.createObjectURL(inputFile.current.files[0])
                setFile(linkImage)}}
            />
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

export default EditNews