import styled from 'styled-components'
import { shade } from 'polished'


export const Container = styled.div`
  display: flex;
`

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 60px;
  background: var(--color-background);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
  padding: 0 30px;
`

export const Link = styled.a`
  text-decoration: none;
  height: 60px;
  width: 200px;
`

export const ImgLogo = styled.img`
  width: 200px;
  height: 60px;
  object-fit: cover;
`

export const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  outline: none;
  background: var(--color-button);
  color: var(--color-background);
  height: 40px;
  border: none;
  border-radius: 25px;
  transition: 0.2s;
  cursor: pointer;
  padding: 0 30px;

  &:hover{
    background: ${shade(0.2, '#53B4CF')};
  }
`