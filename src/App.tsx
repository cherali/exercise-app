import { Suspense } from 'react'
import Loading from 'components/Loading'
import Router from 'routers/Router'
import { EmotionCacheProvider, MainStyles } from 'theme'
import ThemeProvider from 'providers/ThemeProvider'
import HTMLTagProvider from 'providers/HTMLTagProvider'
import MessageProvider from 'providers/MessageProvider'

function App() {
  return (
    <Suspense fallback={<Loading fullScreen size='xLarge' />}>
      <EmotionCacheProvider>
        <ThemeProvider>
          <MainStyles />
          <HTMLTagProvider>
            <MessageProvider />
            <Router />
          </HTMLTagProvider>
        </ThemeProvider>
      </EmotionCacheProvider>
    </Suspense>
  )
}

export default App
