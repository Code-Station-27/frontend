import styled from 'styled-components'

export const Container = styled.div`
    
`

export const Form = styled.form`
    width: 100%;
    max-width: 360px;
    margin-top: 64px;
    margin-bottom: 32px;

    div{
        margin-bottom: 24px;
    }
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