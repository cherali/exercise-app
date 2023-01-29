import { Suspense } from 'react'
import Loading from 'components/Loading'
import Router from 'routers/Router'
import { EmotionCacheProvider, MainStyles } from 'theme'
import ThemeProvider from 'providers/ThemeProvider'
import HTMLTagProvider from 'providers/HTMLTagProvider'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <EmotionCacheProvider>
        <ThemeProvider>
          <MainStyles />
          <HTMLTagProvider>
            <Router />
          </HTMLTagProvider>
        </ThemeProvider>
      </EmotionCacheProvider>
    </Suspense>
  )
}

export default App
