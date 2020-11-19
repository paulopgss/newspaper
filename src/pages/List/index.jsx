import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import Header from '../../components/Header'
import { ContainerL } from './style'

export const List = props => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    api.get('/news').then(resp => {
      if(resp.data && resp.data.success){
        setNotices(resp.data.news)
      }
    })
  }, [])

  return (
    <>
      <Header />
      <ContainerL>
        {
          notices.map(notice => (
            <Link to={`news/${notice.id}`} key={notice.id}>
              <img src={notice.image} alt="imagem da noticia" />
              <div>
                <strong>{notice.title}</strong>
                <span>{notice.content}</span>
                <p>Ler notícia completa</p>
              </div>
            </Link>
          ))
        }
      </ContainerL>
    </>
  )
}
