import { ThemeProvider } from 'styled-components'

import { AuthProvider } from '../src/contexts/AuthContext'

import GlobalStyle from '../src/styles/global'

import dark from '../src/styles/themes/dark'
import light from '../src/styles/themes/light'


export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={dark}>
        <AuthProvider>
          <GlobalStyle /> 
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

