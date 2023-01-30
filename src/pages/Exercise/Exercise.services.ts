import { bodyPartUrl, equipmentUrl } from './../../constants/urls';
import { exerciseUrl } from 'constants/urls'
import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from 'utils/apiUtil'
import { convertToUrlString } from 'utils/helpers'

// exercise
interface GetExerciseListParams {
	limit: number | string;
	page: number | string;

	bodyPart: string;
	equipment: string;
}

interface Exersise {
	_id: string;
	bodyPart: string,
	equipment: string,
	gifUrl: string,
	id: string,
	name: string,
	target: string,
}

type GetExerciseResult = Array<Exersise>


// body part
interface BodyPart {
	_id: string;
	title: string;
}

type GetBodyPartResult = Array<BodyPart>


// equipment
interface Equipment {
	_id: string;
	title: string;
}

type GetEquipmentResult = Array<Equipment>


// api
export const exerciseApi = createApi({
	reducerPath: 'exercise',
	baseQuery: axiosBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
	endpoints: build => ({
		getExercise: build.query<GetExerciseResult, GetExerciseListParams>({
			query: ({ limit, page, bodyPart, equipment }) => ({
				url: `${exerciseUrl}?${convertToUrlString({ limit, page, bodyPart, equipment })}`,
				method: 'GET',
			}),
		}),

		getBodyPart: build.query<GetBodyPartResult, null>({
			query: () => ({
				url: bodyPartUrl,
				method: 'GET',
			}),
		}),

		getEquipment: build.query<GetEquipmentResult, null>({
			query: () => ({
				url: equipmentUrl,
				method: 'GET',
			}),
		}),
	})
})

export const {
	useGetExerciseQuery,
	useGetBodyPartQuery,
	useGetEquipmentQuery,
} = exerciseApi
