import styled from 'styled-components'

export const Container = styled.div`

    .container-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        height: 100px;
        background: #fff;
        box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
        padding: 0 30px;

        img {
            width: 200px;
            height: 200px;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            outline: none;
            background: #53B4CF;
            color: #fff;
            height: 45px;
            border: none;
            border-radius: 25px;
            transition: 0.2s;
            cursor: pointer;
            padding: 0 30px;

            &:hover{
                background: #367DD9;
            }
        }
    }
`