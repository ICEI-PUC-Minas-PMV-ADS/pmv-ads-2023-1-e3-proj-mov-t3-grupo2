import { ThemeProvider } from 'styled-components/native';
import theme from './src/themes'

import { News } from '@screens/News'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <News />
    </ThemeProvider>
  )
}
