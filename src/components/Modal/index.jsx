import React, { useState, useRef } from 'react'
import Logo from '../../assets/logo.png'
import api from '../../services/api'
import { ContainerModal } from './style'

const Modal = ({ id = 'modal', onClose = () => { } }) => {

  const inputFile = useRef(null)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')

  const submitNotice = () => {
    
    api.post('/news', {title, content, file}).then((e) => {
      onClose(false)
    })
  }

  const handleOutSide = (e) => {
    if (e.target.id === id) onClose()
  }
  return (
    <ContainerModal id={id} onClick={handleOutSide}>
      <div className="wrapper">
        <img src={Logo} alt="logo" />
        <form action="">
          <span>Preencha os campos abaixo para adicionar uma notícia.</span>
          <form>
            <div className="input-img">
              <input readOnly={true}
                placeholder="Adicionar foto"
                value={file}
                style={{ cursor: 'pointer' }}
              />
              <input type="file"
                ref={inputFile}
                placeholder="Adicionar foto"
                accept='image/png, image/jpeg'
                style={{ display: 'none' }}
                value={file}
                onChange={e => setFile(inputFile.current.files[0].name)} />
              <button onClick={() => inputFile.current.click()}>Pesquisar</button>
            </div>
            <div className="notice">
              <input placeholder="Título" />
              <textarea placeholder="Conteúdo" className="content-input" />
              <button onClick={submitNotice}>Adicionar</button>
            </div>
          </form>
        </form>
      </div>
    </ContainerModal>
  )
}

export default Modal