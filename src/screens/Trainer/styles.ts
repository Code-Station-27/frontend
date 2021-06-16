import styled from "styled-components";

export const  Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    padding: 24px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const UserInfo = styled.div`
    margin: 32px 0;

    header{
        display: flex;
        align-items: center;
        margin-bottom: 24px;

        div{
            background-color: #333;
            height: 52px;
            width: 52px;
            border-radius: 50%;
            margin-right: 24px;
        }
    }

    >div{
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        max-width: 800px;

        p{
            margin-right: 24px;
        }
    }
`