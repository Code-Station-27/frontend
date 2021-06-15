import styled from 'styled-components'

export const ButtonsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 48px;
`

export const Title = styled.h1`
    font-weight: 600;
    text-align: center;
`

export const Logo = styled.img`
    height: 260px;
    width: 260px;
`

export const StyledLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${({theme})=>theme.colors.title};
    font-weight: 600;
    font-size: 18px;
    margin-top: 24px;
    transition: 0.2s;

    &:hover{
        filter: brightness(0.8);
    }
`