import { createGlobalStyle, ThemeProvider } from 'styled-components'

import GlobalStyle from '../src/styles/global'

import dark from '../src/styles/themes/dark'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
