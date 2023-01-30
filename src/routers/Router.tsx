import { FC, Suspense, lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from './routes'
import Loading from 'components/Loading'

const DefaultLayout = lazy(() => import('layouts/DefaultLayout'))

interface RouterProps { }

const Router: FC<RouterProps> = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading fullScreen size='xLarge' />}>
        <DefaultLayout>
          <Suspense fallback={<Loading fullScreen size='xLarge' />}>
            <Routes />
          </Suspense>
        </DefaultLayout>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
