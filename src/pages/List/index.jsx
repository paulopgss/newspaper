import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import { ContainerL } from './style'
import ImgNotice from '../../assets/img-notice.png'



export const List = props => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        api.get('/news').then(resp => {
            setNotices(resp.data)
        })
    }, [])

    return (
        <ContainerL>
            {
                notices.map(notice => {
                    <Link to="/readnotice">
                        <img src={ImgNotice} alt=""/>
                            <div>
                                <strong>{notice.title}</strong>
                                <span>{notice.content}</span>
                                <p>Ler notícia completa</p>
                            </div>
                    </Link>
                })
            }
        </ContainerL>
    )
}
