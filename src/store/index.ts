import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { exerciseApi } from 'pages/Exercise/Exercise.services'

export const store = configureStore({
	reducer: {
		[exerciseApi.reducerPath]: exerciseApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
		.concat(
			exerciseApi.middleware,
		)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
