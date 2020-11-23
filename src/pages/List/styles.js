import styled from 'styled-components'

export const ContainerL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  a{
    width: 800px;
    height: 200px;
    margin-top: 20px;
    background: var(--color-background);
    border-radius: 20px;
    text-decoration: none;
    display: flex;
  }
`

export const ImgLoad = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 20px 20px 0 20px;
  margin-right: 21px;
  object-fit: cover;
`

export const NewsText = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.strong`
  margin-top: 27px;
  margin-right: 27px;
  flex-wrap: wrap;
  color: var(--color-text);
`

export const TextContent = styled.span`
  margin-top: 14px;
  margin-right: 27px;
  color: var(--color-gray-text);
  flex-wrap: wrap;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const OpenNews = styled.p`
  margin-top: 20px;
  margin-left: 350px;
  color: var(--color-button);
`