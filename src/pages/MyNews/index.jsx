import React, { useState, useEffect } from 'react'

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
  LinkD
} from './styles'
import EditNews from '../../components/EditNews'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useAuth} from '../../App'


export const MyNews = props => {
  const {authUser} = useAuth()
  const [notices, setNotices] = useState([])
  const [editNews, setEditNews] = useState(null)

  const errorList = () => toast.error("Erro ao carregar as notícias!")

  useEffect(() => {
    api.get('/news', {headers: {user_id: authUser.userId}}).then(resp => {
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
          <Title addnews>Últimas notícias</Title>
        </AddNews>
        {
          notices.map(notice => (
            <LinkD onClick={() => setEditNews(notice)} key={notice.id}>
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
              !!editNews &&
              <EditNews onClose={() => setEditNews(null)} editNews={editNews} />
            }
      </ContainerL>
    </>
  )
}
