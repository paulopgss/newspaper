import React, { useState, useRef } from 'react'
import Logo from '../../assets/logo.png'
import api from '../../services/api'
import { ContainerModal } from './style'

const Modal = ({ id = 'modal', onClose = () => { }, history }) => {

  const inputFile = useRef(null)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')

  const submitNotice = () => {
    const formData = new FormData();
    formData.append('file', inputFile.current.files[0])
    formData.append('title', title)
    formData.append('content', content)
    api.post('/news', formData).then((e) => {
      history.goBack()
    })
  }

  const handleOutSide = (e) => {
    if (e.target.id === id) onClose()
  }
  return (
    <ContainerModal id={id} onClick={handleOutSide}>
      <div className="wrapper">
        <img src={Logo} alt="logo" />
          <span>Preencha os campos abaixo para adicionar uma notícia.</span>
          <form>
            <div className="input-img">
              <input 
                readOnly={true}
                placeholder="Adicionar foto"
                value={file}
                style={{ cursor: 'pointer' }}
              />
              <input 
                type="file"
                ref={inputFile}
                placeholder="Adicionar foto"
                accept='image/png, image/jpeg'
                style={{ display: 'none' }}
                onChange={e => setFile(inputFile.current.files[0].name)} 
                />
              <button onClick={() => inputFile.current.click()} type="button">
                Pesquisar
              </button>
            </div>
            <div className="notice">
              <input 
                placeholder="Título"
                value={title}
                onChange={e => setTitle(e.target.value)} 
              />
              <textarea 
                placeholder="Conteúdo" 
                className="content-input"
                value={content}
                onChange={e => setContent(e.target.value)} 
              />
              <button onClick={submitNotice}>Adicionar</button>
            </div>
          </form>
      </div>
    </ContainerModal>
  )
}

export default Modal