import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.title};
        -webkit-font-smoothing: antialiased;
        font-family: "Roboto Slab", serif;
        font-size: 16px;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }
    button {
        cursor: pointer;
    }
    textarea {
        font-family: "Roboto Slab", serif;
    }
    /* ::-webkit-scrollbar{
        width: 12px;
    }
    ::-webkit-scrollbar-track{
        background: ${props => props.theme.colors.background};
    }
    ::-webkit-scrollbar-thumb{
        background: ${props => props.theme.colors.shape};
        border-radius: 6px;
    } */
`