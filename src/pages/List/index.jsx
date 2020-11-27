import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import Header from '../../components/Header'
import Modal from '../../components/Modal';
import {
  ContainerL,
  AddNews,
  ImgLoad,
  NewsText,
  Title,
  TextContent,
  OpenNews,
  ButtonStyled
} from './styles'
import Login from '../../components/Login'
import {useAuth} from '../../App'


export const List = props => {
  const {authUser} = useAuth()
  const [notices, setNotices] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [loginVisible, setLoginVisible] = useState(false)



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
        <AddNews>
          <Title addnews>Últimas notícias</Title>
          { authUser.authenticated && 
          <ButtonStyled onClick={() => setModalVisible(true)}>Adicionar notícia</ButtonStyled>
          }
          {
            modalVisible &&
            <Modal onClose={() => setModalVisible(false)} />
          }
        </AddNews>
        { authUser.authenticated &&
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
        { !authUser.authenticated &&
          notices.map(notice => (
            <Link onClick={() => setLoginVisible(true)} key={notice.id}>
              {
              loginVisible &&
              <Login onClose={() => setLoginVisible(false)} />
            }
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
