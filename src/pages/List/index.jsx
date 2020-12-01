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
  NewsAdd,
  Search,
  Input,
  TextContent,
  OpenNews,
  ButtonStyled,
  LinkD
} from './styles'
import Login from '../../components/Login'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useAuth} from '../../App'


export const List = props => {
  const {authUser} = useAuth()
  const [notices, setNotices] = useState([])
  const [search, setSearch] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [loginVisible, setLoginVisible] = useState(false)

  const errorList = () => toast.error("Erro ao carregar as notícias!")

  useEffect(() => {
    api.get('/news').then(resp => {
      if (resp.data.success) return setNotices(resp.data.news)
      alert(resp.data.message)

    }).catch((err) => {
      errorList()
    })
  }, [])

  return (
    <>
      <Header />
      <ToastContainer />
      <ContainerL>
        <AddNews>
          <NewsAdd>
          <Title addnews>Últimas notícias</Title>
          { authUser.authenticated && 
          <ButtonStyled onClick={() => setModalVisible(true)}>Adicionar notícia</ButtonStyled>
          }
          {
            modalVisible &&
            <Modal onClose={() => setModalVisible(false)} />
          }
          </NewsAdd>
          <Search>
            <Input placeholder="Buscar notícia por título ou conteúdo" />
            <ButtonStyled searchButton>Pesquisar</ButtonStyled>
          </Search>
        </AddNews>
        { authUser.authenticated &&
          notices.map(notice => (
            <Link to={`news/${notice.id}`} key={notice.id}>
              <ImgLoad src={notice.image} alt="imagem da noticia" />
              <NewsText>
                <Title news>{notice.title}</Title>
                <TextContent>{notice.content}</TextContent>
                <OpenNews>Ler notícia completa</OpenNews>
              </NewsText>
            </Link>
          ))
        }
        { !authUser.authenticated &&
          notices.map(notice => (
            <LinkD onClick={() => setLoginVisible(true)} key={notice.id}>
              <ImgLoad src={notice.image} alt="imagem da noticia" />
              <NewsText>
                <Title>{notice.title}</Title>
                <TextContent>{notice.content}</TextContent>
                <OpenNews>Ler notícia completa</OpenNews>
              </NewsText>
            </LinkD>
          ))
        }
         {
              loginVisible &&
              <Login onClose={() => setLoginVisible(false)} />
            }
      </ContainerL>
    </>
  )
}
