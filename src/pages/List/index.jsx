import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import Header from '../../components/Header'
import { ContainerL } from './style'

export const List = props => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    api.get('/news').then(resp => {
      setNotices(resp.data)
    })
  }, [])

  return (
    <>
      <Header />
      <ContainerL>
        {
          notices.map(notice => {
            <Link to="/readnotice">
              <img src={notice.file} alt="imagem da noticia" />
              <div>
                <strong>{notice.title}</strong>
                <span>{notice.content}</span>
                <p>Ler notícia completa</p>
              </div>
            </Link>
          })
        }
      </ContainerL>
    </>
  )
}
