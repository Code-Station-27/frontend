import styled from 'styled-components'

export const Container = styled.div`
    z-index: -4;
    width: 100vw;
    height: 100vh;
    background-image: url("/background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    >div{
        z-index: 4;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 48px;

        height: 100vh;
        width: 50%;
        margin-left: auto;

        &::before{
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 100%;
            height: 100%;
            background-color: ${({theme})=>theme.colors.primary};
            filter: opacity(0.6);
        }

        img{
            height: 260px;
            width: 260px;
        }
    }

    h1{
        font-weight: 600;
    }

    a{
        text-decoration: none;
        color: ${({theme})=>theme.colors.title};
        font-weight: 600;
        font-size: 18px;
        margin-top: 24px;
        transition: 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 48px;
`