import type { FC } from 'react'

interface LoadingProps {
}

const Loading: FC<LoadingProps> = ({ ...props }) => {
	return <span>loading...</span>
}

export default Loading
