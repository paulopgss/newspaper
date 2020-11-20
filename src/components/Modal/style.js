import styled from 'styled-components';

export const ContainerModal = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0, 0.8);
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
        width: 500px;
        background: var(--color-background);
        border-radius: 20px;

        .form{
        width: 100%;
        padding: 0 30px;
        }

        img {
            width: 150px;
            height: 150px;
            object-fit: cover;
        }

        span {
            margin: 27px 20px;
        }

          .input-img {
            display: flex;
            align-items: center;
            margin-top: 20px;

            input {
              flex: 1;
              border: 1px solid var(--color-border);
              border-radius: 20px 0 0 20px;
              padding: 14px;
            }

            button {
                background: var(--color-button);
                color: var(--color-background);
                font: 400 14px Roboto;
                outline: none;
                height: 45px;
                border: 0;
                border-radius: 0 20px 20px 0;
                transition: 0.2s;
                cursor: pointer;

                &:hover{
                    background: var(--color-hover);
                }
            }
          }

          .notice {
            display: flex;
            flex-direction: column;

            input {
              margin-top: 20px;
              height: 45px;
              border: 1px solid var(--color-border);
              border-radius: 20px;
              outline: none;
              font: 400 14px Roboto;
              padding: 15px;
            }

            textarea {
                margin-top: 20px;
                border: 1px solid var(--color-border);
                border-radius: 20px;
                outline: none;
                font: 400 14px Roboto;
                padding: 15px;
                resize: none;
                height: 100px;

                &::placeholder {
                color: var(--color-gray-text);
                font-size: 14px;
              }
            }

            button {
                display: flex;
                align-self: flex-end;
                margin: 20px 0;
                height: 45px;
                outline: none;
                border: 0;
                border-radius: 20px;
                color: var(--color-background);
                font: 400 14px Roboto;
                background: var(--color-button);
                transition: 0.2s;
                cursor: pointer;
                &:hover{
                    background: var(--color-hover);
                }

            }
           
          }
        
        }
`