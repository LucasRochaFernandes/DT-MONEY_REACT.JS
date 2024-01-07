import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './contexts/AuthProvider'
import { router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}
