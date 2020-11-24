import React, { useState, useEffect } from 'react'
import { 
  ContainerNotice, 
  News, 
  Img, 
  Title, 
  ContentNews, 
  TitleComment, 
  NewComment, 
  Input, Button, 
  Comments, 
  ImgComment, 
  UserComment, 
  NameUser, 
  CommentUser } from './styles'
import api from '../../services/api'
import Header from '../../components/Header'
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
      if (resp.data.success) {
        setText('')
        setComments([ resp.data.comment ,...comments])
        return alert('Comentário adicionado')
      }
    }).catch((err) => {
      alert('Erro ao adicionar o comentário')
    })
  }

  return (
    <>
      <Header />
      <ContainerNotice>
        <News>
          <Img src={news.image} alt="" />
          <Title>{news.title}</Title>

          <ContentNews>{news.content}</ContentNews>

          <hr />

          <TitleComment>Comentários</TitleComment>


          <NewComment>
            <Input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <Button onClick={submitComment}>Comentar</Button>
          </NewComment>
          {
            comments.map(comment => (
              <Comments key={comment.id}>
                <ImgComment src={User} alt="" />
                <UserComment className="user-coments">
                  <NameUser>Paulo</NameUser>
                  <CommentUser>{ comment.text}</CommentUser>
                </UserComment>
              </Comments>
            ))
          }

        </News>

      </ContainerNotice>
    </>
  )
}

export default Notice