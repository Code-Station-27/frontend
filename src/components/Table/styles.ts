import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    border-radius: 16px;
    
    display: flex;
    flex-direction: column;

    strong{
        color: ${props => props.theme.colors.title};
        font-size: 18px;
    }
`

export const Header = styled.header`
    width: 100%;
    border-radius: 16px 16px 0 0;
    padding: 16px;
    background-color: ${props => props.theme.colors.primary};

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 16px;
`

export const Body = styled.div`
    width: 100%;
    border-radius: 0 0 16px 16px;
    padding: 16px;
    height: 300px;
    background-color: ${props => props.theme.colors.shape};

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 16px;
`