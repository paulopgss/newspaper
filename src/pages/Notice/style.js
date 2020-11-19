import styled from 'styled-components'

export const ContainerNotice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .notice{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 800px;
        background: var(--color-background);
        margin-top: 20px;
        border-radius: 20px;
        margin-bottom: 20px;

        img {
            height: 466px;
            width: 800px;
            border-radius: 20px 20px 0 0;
        }

        strong {
            margin: 20px 52px 20px 52px;
            font-size: 24px;
            text-align: justify;
        }

        p {
            margin: 0 52px 50px 52px;
            text-align: justify;
        }

        hr {
            width: 700px;
        }

        span {
            font-size: 20px;
            margin-top: 20px;
            margin-right: 580px;
        }

        .new-coment {
            display: flex;
            margin-top: 20px;
            width: 700px;

            input {
                flex: 1;
                height: 50px;
                border: 1px solid var(--color-border);
                border-radius: 20px 0 0 20px;
            }

            button {
                width: 150px;
                border: 0;
                border-radius: 0 20px 20px 0;
                background: var(--color-button);
                color: var(--color-background);
                font: 400 14px Roboto;
                border: 0;
                border-radius: 0 20px 20px 0;
                transition: 0.2s;
                cursor: pointer;

                &:hover{
                    background: var(--color-hover);
                }
            }

        }

        .coments {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 50px 20px 50px;

            img {
                width: 40px;
                height: 40px;
                border: 1px solid var(--color-border);
                border-radius: 50%;
            }

            .user-coments {
                display: flex;
                flex-direction: column;

                strong {
                    margin-left: 15px;
                    margin-bottom: 5px;
                }

                p{
                    margin-left: 15px;
                    margin-top: 5px;
                    text-align: justify;
                }
            }
        }
    }
`