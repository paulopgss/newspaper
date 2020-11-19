import React, { useState, useEffect } from 'react'
import { ContainerNotice } from './style'
import api from '../../services/api'
import Header from '../../components/Header'
import ImgNotice from '../../assets/img-notice.svg'
import User from '../../assets/user.png'

function Notice({ match }) {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')

  useEffect(() => {
    api.get(`/news/${match.params.id}`).then(resp => {
      setTitle(resp.data.title)
      setContent(resp.data.content)
      setFile(resp.data.file)
    })
  }, [])

  return (
    <>
      <Header />
      <ContainerNotice>
        <div className="notice">
          <img src={ImgNotice} alt="" />
          <strong value={title} onChange={e => setTitle(e.target.value)}/>

          <p value={content} onChange={e => setContent(e.target.value)} />

          <hr />

          <span>Comentários</span>


          <div className="new-coment">
            <input type="text" />
            <button>Comentar</button>
          </div>

          <div className="coments">
            <img src={User} alt="" />
            <div className="user-coments">
              <strong>Paulo</strong>
              <p>type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
            </div>
          </div>
        </div>

      </ContainerNotice>
    </>
  )
}

export default Notice