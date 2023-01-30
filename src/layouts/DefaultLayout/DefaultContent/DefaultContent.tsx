import type { FC, ReactNode } from 'react'
import { DefaultContentContainer } from './DefaultContent.styles'

interface DefaultContentProps {
	children: ReactNode
}

const DefaultContent: FC<DefaultContentProps> = ({ children }) => {
	return <DefaultContentContainer>{children}</DefaultContentContainer>
}

export default DefaultContent
