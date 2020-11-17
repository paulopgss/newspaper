import styled from 'styled-components'

export const ContainerModal = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0, .8);
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
        overflow: auto;
        width: 600px;

        background: #fff;
        border-radius: 20px;

        img {
            width: 200px;
            height: 200px;
        }

        span {
            margin-top: 27px;
            margin-left: 50px;
        }

        .input-img {
            display: flex;
            margin-top: 29px;
            margin-left: 20px;

            input {
                flex: 1;
                padding: 10px;
                height: 45px;
                border: 1px solid #ccc;
                border-radius: 20px 0 0 20px;
                font: 400 14px Roboto;
            }

            button {
                width: 150px;
                margin-right: 20px;
                margin-bottom: 20px;
                background: #53B4CF;
                color: #fff;
                font: 400 14px Roboto;
                border: 0;
                border-radius: 0 20px 20px 0;
                transition: 0.2s;
                cursor: pointer;

                &:hover{
                    background: #367DD9;
                }
            }
        }

        .notice {
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            margin-right: 20px;

            input {
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
                border: 1px solid #ccc;
                border-radius: 20px;
                font: 400 14px Roboto;
                padding: 10px;
                resize: none;
            }

            button {
                display: flex;
                margin-top: 20px;
                margin-bottom: 20px;
                width: 150px;
                height: 50px;
                border: 0;
                border-radius: 20px;
                color: #fff;
                font: 400 14px Roboto;
                background: #53B4CF;
                transition: 0.2s;
                cursor: pointer;

                &:hover{
                    background: #367DD9;
                }

            }

            
        }
        }

        
    }
`