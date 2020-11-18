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
        background: #fff;
        border-radius: 20px;

        img {
            width: 150px;
            height: 150px;
        }

        form{
          width: 100%;
          padding: 0 20px 20px;

          p{
            margin-bottom: 20px;
          }

          .input-img {
            display: flex;

            input {
                flex: 1;
                padding: 15px;
                height: 45px;
                border: 1px solid #ccc;
                border-radius: 20px 0 0 20px;
                font: 400 14px Roboto;
                outline: none;
            }

            button {
                background: #53B4CF;
                color: #fff;
                font: 400 14px Roboto;
                outline: none;
                height: 45px;
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

            input {
              margin-top: 20px;
              height: 45px;
              border: 1px solid #ccc;
              border-radius: 20px;
              outline: none;
              font: 400 14px Roboto;
              padding: 15px;
            }

            textarea {
                margin-top: 20px;
                border: 1px solid #ccc;
                border-radius: 20px;
                outline: none;
                font: 400 14px Roboto;
                padding: 15px;
                resize: none;
                height: 180px;
            }

            button {
                display: flex;
                align-self: flex-end;
                margin-top: 20px;
                height: 45px;
                outline: none;
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