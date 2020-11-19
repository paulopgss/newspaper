import React, { useState, useEffect } from 'react'
import { ContainerNotice } from './style'
import api from '../../services/api'
import Header from '../../components/Header'
import ImgNotice from '../../assets/img-notice.svg'
import User from '../../assets/user.png'

function Notice({ match }) {

  const [news, setNews] = useState('')

  useEffect(() => {
    api.get(`/news/${match.params.id}`).then(resp => {
      setNews(resp.data.news)
    })
  }, [])

  return (
    <>
      <Header />
      <ContainerNotice>
        <div className="notice">
          <img src={news.image} alt="" />
          <strong>{news.title}</strong>

          <p>{news.content}</p>

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