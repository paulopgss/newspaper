import React from 'react'
import {Link} from 'react-router-dom'
import {ContainerL} from './style'
import ImgNotice from '../../assets/img-notice.png'

function List() {
    return(
        <ContainerL>
            <Link to="/readnotice">
                <img src={ImgNotice} alt=""/>
                <div>
                    <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry</strong>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five and ...</span>
                    <p>Ler notícia completa</p>
                </div>
            </Link>
        </ContainerL>
    )
}

export default List