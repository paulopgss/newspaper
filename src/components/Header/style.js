import styled from 'styled-components'

export const Container = styled.div`

    .container-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        height: 116px;
        background: #fff;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

        img {
            margin-left: 36px;
            width: 250px;
            height: 250px;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 57px;
            text-decoration: none;
            outline: none;
            background: #53B4CF;
            color: #fff;
            width: 181px;
            height: 45px;
            border: none;
            border-radius: 25px;
            transition: 0.2s;
            cursor: pointer;

            &:hover{
                background: #367DD9;
            }
        }
    }
`