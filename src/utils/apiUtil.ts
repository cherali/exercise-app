import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { toast } from 'react-toastify'

interface QueryProps {
	url: string
	method: AxiosRequestConfig['method']
	data?: AxiosRequestConfig['data']
	useAuth?: boolean
	headers?: AxiosRequestHeaders
}

interface AxiosBaseQueryError {
	errors?: object
	status?: number
}

export interface ActionErrorType {
	errors?: object
	status?: number
	message?: string
}

export const axiosBaseQuery =
	({ baseUrl }: { baseUrl?: string } = { baseUrl: '' }): BaseQueryFn<QueryProps, unknown, AxiosBaseQueryError> =>
		async ({ url, method, data, useAuth = false, headers = {} }) => {
			try {
				const instance = axios
				if (useAuth) {
					const { user } = JSON.parse(localStorage.getItem('data') || '{"user":{}}')

					if (user.token) {
						instance.interceptors.request.use(request => {
							if (request && request.headers) {
								request.headers.Authorization = `Token ${user.token}`
							}
							return request
						})
					}
				}

				const config = { url: baseUrl + url, method, data, headers }

				instance.interceptors.response.use(
					response => {
						return response
					},
					error => {
						const { status, data } = error.response

						// if 401 unauthoraized
						if (status === 401) {
							toast.error(data.message)
						}
						// if 403 forbiden
						else if (status === 403) {
							toast.error(data.message)
						}
						// if 500 server error
						else if (status === 500) {
							toast.error(data.message)
						}
					}
				)

				const result = await instance(config)

				return {
					data: result.data
				}
			} catch (axiosError) {
				const err = axiosError as AxiosError
				return {
					error: {
						status: err.response?.status,
						...(err.response?.data || {})
					}
				}
			}
		}
