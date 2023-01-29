import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import {
	HOME_ROUTE,
	NOT_FOUND_ROUTE,
} from 'constants/routes'


const HomePage = lazy(() => import('pages/public/Home'))
const NotFoundPage = lazy(() => import('pages/NotFound'))


export const Routes = () =>
	useRoutes([
		{
			path: HOME_ROUTE,
			element: <HomePage />
		},
		{
			path: NOT_FOUND_ROUTE,
			element: <NotFoundPage />
		}
	])
