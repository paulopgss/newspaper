import styled from 'styled-components'

export const ContainerModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0 0.5);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    font-family: Roboto;
    

    .wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 600px;
        height: 750px;
        background: #fff;
        border-radius: 20px;

        span {
            margin-top: 27px;
            margin-left: 20px;
        }

        .input-img {
            display: flex;
            margin-top: 29px;
            width: 530px;
            height: 50px;

            input {
                flex: 1;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 20px 0 0 20px;
                font: 400 14px Roboto;
            }

            button {
                width: 150px;
                background: #53B4CF;
                color: #fff;
                font: 400 14px Roboto;
                border: 0;
                border-radius: 0 20px 20px 0;
            }
        }

        .notice {
            display: flex;
            flex-direction: column;

            input {
            width: 525px;
            margin-top: 20px;
            height: 50px;
            border: 1px solid #ccc;
            border-radius: 20px;
            font: 400 14px Roboto;

            &::placeholder {
                padding-left: 10px;
            }
            }

            .content-input {
                margin-top: 25px;
                height: 232px;
                border: 1px solid #ccc;
                border-radius: 20px;
                font: 400 14px Roboto;
                padding: 10px;
            }

            button {
                margin-top: 27px;
                width: 150px;
                height: 50px;
                border: 0;
                border-radius: 20px;
                color: #fff;
                font: 400 14px Roboto;
                background: #53B4CF;
                margin-left: 380px;

            }
        }
    }
`