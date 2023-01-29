import type { FC } from 'react'
import { ToastContainer, ToastOptions, toast, ToastClassName } from 'react-toastify'
import { MessageProviderContainer } from './MessageProvider.styles'

import 'react-toastify/dist/ReactToastify.css'

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
	const cls: ToastClassName = context => `${context?.defaultClassName} toast-container`
	return (

		<MessageProviderContainer>
			<ToastContainer toastClassName={cls} bodyClassName={'toast-body'} icon={false} {...defaultOption} />
		</MessageProviderContainer>
	)
}

export default MessageProvider
