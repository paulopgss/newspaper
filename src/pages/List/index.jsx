import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import Header from '../../components/Header'
import { ContainerL, ImgLoad, NewsText, Title, TextContent, OpenNews } from './styles'

export const List = props => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    api.get('/news').then(resp => {
      if (resp.data.success) return setNotices(resp.data.news)
      alert(resp.data.message)

    }).catch((err) => {
      alert('Não foi possível buscar a lista de notícias.')
    })
  }, [])

  return (
    <>
      <Header />
      <ContainerL>
        {
          notices.map(notice => (
            <Link to={`news/${notice.id}`} key={notice.id}>
              <ImgLoad src={notice.image} alt="imagem da noticia" />
              <NewsText>
                <Title>{notice.title}</Title>
                <TextContent>{notice.content}</TextContent>
                <OpenNews>Ler notícia completa</OpenNews>
              </NewsText>
            </Link>
          ))
        }
      </ContainerL>
    </>
  )
}
