import React from 'react'
import {ContainerL} from './style'
import ImgNotice from '../../assets/img-notice.png'

function List() {
    return(
        <ContainerL>
            <a href="/">
                <img src={ImgNotice} alt=""/>
                <div>
                    <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry</strong>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five and ...</span>
                    <p>Ler notícia completa</p>
                </div>
            </a>

            <a href="/">
                <img src={ImgNotice} alt=""/>
                <div>
                    <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry</strong>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five and ...</span>
                    <p>Ler notícia completa</p>
                </div>
            </a>

            <a href="/">
                <img src={ImgNotice} alt=""/>
                <div>
                    <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry</strong>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five and ...</span>
                    <p>Ler notícia completa</p>
                </div>
            </a>
        </ContainerL>
    )
}

export default List