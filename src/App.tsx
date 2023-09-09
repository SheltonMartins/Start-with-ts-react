import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="success" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App