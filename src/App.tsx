import { Suspense } from 'react'
import Loading from 'components/Loading'
import Router from 'routers/Router'
import { EmotionCacheProvider, MainStyles } from 'theme'
import ThemeProvider from 'providers/ThemeProvider'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <EmotionCacheProvider>
        <ThemeProvider>
          <MainStyles />
          <Router />
        </ThemeProvider>
      </EmotionCacheProvider>
    </Suspense>
  )
}

export default App
