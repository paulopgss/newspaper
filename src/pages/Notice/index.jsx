import React, { useState, useEffect } from 'react'
import { ContainerNotice } from './style'
import api from '../../services/api'
import Header from '../../components/Header'
import ImgNotice from '../../assets/img-notice.svg'
import User from '../../assets/user.png'

function Notice({ match }) {

  const [news, setNews] = useState('')
  const [text, setText] = useState('')
  const [comments, setComments] = useState([])

  useEffect(() => {
    api.get(`/news/${match.params.id}`).then(resp => {
      setNews(resp.data.news)
      setComments(resp.data.news.comments)
    })
  }, [])

  const submitComment = () => {
    api.post('/comments', { text, news_id: match.params.id }).then(resp => {
      alert('Comentário adicionado')
      setText('')
      setComments([ resp.data.comment ,...comments])
    })
  }

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
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button onClick={submitComment}>Comentar</button>
          </div>
          {
            comments.map(comment => (
              <div className="coments" key={comment.id}>
                <img src={User} alt="" />
                <div className="user-coments">
                  <strong>Paulo</strong>
                  <p>{ comment.text}</p>
                </div>
              </div>
            ))
          }

        </div>

      </ContainerNotice>
    </>
  )
}

export default Notice