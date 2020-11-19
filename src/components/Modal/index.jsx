import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import api from '../../services/api'
import { ContainerModal } from './style'

const Modal = ({ id = 'modal', onClose = () => { } }) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')

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
              <label for="arquivo">Arquivo</label>
              <input type="file" name="arquivo" id="arquivo" />
              <button>Pesquisar</button>
            </div>
            <div className="notice">
              <input placeholder="Título" />
              <textarea placeholder="Conteúdo" className="content-input" />
              <button>Adicionar</button>
            </div>
          </form>
        </form>
      </div>
    </ContainerModal>
  )
}

export default Modal