import styled from 'styled-components'

export const Container = styled.div`

    .container-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        height: 60px;
        background: var(--color-background);
        box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
        padding: 0 30px;

        img {
            width: 200px;
            height: 200px;
            object-fit: cover;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            outline: none;
            background: var(--color-button);
            color: var(--color-background);
            height: 45px;
            border: none;
            border-radius: 25px;
            transition: 0.2s;
            cursor: pointer;
            padding: 0 30px;

            &:hover{
                background: var(--color-hover);
            }
        }
    }
`