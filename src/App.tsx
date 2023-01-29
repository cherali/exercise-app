import { Suspense } from 'react'
import Loading from 'components/Loading'
import Router from 'routers/Router'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router />
    </Suspense>
  )
}

export default App
