import React from 'react'
import { ContainerNotice } from './style'

import ImgNotice from '../../assets/img-notice.svg'
import User from '../../assets/user.png'

function Notice() {
    return (
        <ContainerNotice>
            <div className="notice">
                <img src={ImgNotice} alt="" />
                <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry</strong>

                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

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
    )
}

export default Notice