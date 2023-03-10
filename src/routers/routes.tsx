import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import {
	HOME_ROUTE,
	NOT_FOUND_ROUTE,
	EXERCISE_ROUTE,
	EXERCISE_ROUTE_QUERY,
	EXERCISE_DETAILS_ROUTE_QUERY,
	FAVORITE_ROUTE,
} from 'constants/routes'


const HomePage = lazy(() => import('pages/public/Home'))
const NotFoundPage = lazy(() => import('pages/NotFound'))

const ExercisePage = lazy(() => import('pages/Exercise'))
const ExerciseDetailsPage = lazy(() => import('pages/Exercise/ExerciseDetails'))

const FavoritesPage = lazy(() => import('pages/Favorites'))


export const Routes = () =>
	useRoutes([
		{
			path: HOME_ROUTE,
			element: <HomePage />
		},
		{
			path: EXERCISE_ROUTE,
			children: [
				{
					path: '',
					element: <ExercisePage />
				},
				{
					path: EXERCISE_ROUTE_QUERY,
					element: <ExercisePage />
				},
				{
					path: EXERCISE_DETAILS_ROUTE_QUERY,
					element: <ExerciseDetailsPage />
				},
			]
		},
		{
			path: FAVORITE_ROUTE,
			element: <FavoritesPage />
		},
		{
			path: NOT_FOUND_ROUTE,
			element: <NotFoundPage />
		}
	])
