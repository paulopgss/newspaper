import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Container } from './style'

import Modal from '../Modal'

function Header() {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <Container>
            <div className="container-header">
                <img src={Logo} alt="" />
                <button onClick={() => setModalVisible(true)}>Adicionar notícia</button>
                {
                    modalVisible &&
                    <Modal onClose={() => setModalVisible(false)} />
                }
            </div>
        </Container>
    )
}

export default Header