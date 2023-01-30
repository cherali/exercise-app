import type { FC } from 'react'
import { ToastContainer, ToastOptions, toast, ToastClassName } from 'react-toastify'
import clsx from 'clsx'
import { MessageProviderContainer } from './MessageProvider.styles'

import 'react-toastify/dist/ReactToastify.css'


const contextClass: Record<string, string> = {
	success: 'message-success',
	error: 'message-error',
	info: 'message-info',
	warning: 'message-warning',
	default: 'message-default',
	dark: 'message-dark'
}

export const defaultOption: ToastOptions = {
	position: toast.POSITION.TOP_RIGHT,
	autoClose: 5000,
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	theme: 'colored'
}

const MessageProvider: FC = () => {
	const cls: ToastClassName = context => clsx(
		context?.defaultClassName,
		contextClass[context?.type || 'default'],
		'toast-container',
	)

	return (

		<MessageProviderContainer>
			<ToastContainer toastClassName={cls} bodyClassName={'toast-body'} icon={false} {...defaultOption} />
		</MessageProviderContainer>
	)
}

export default MessageProvider
