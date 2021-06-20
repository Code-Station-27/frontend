import { AuthProvider } from '../src/contexts/AuthContext'
import { ThemeProvider } from '../src/contexts/ThemeContext'

import GlobalStyle from '../src/styles/global'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <GlobalStyle /> 
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

