import type { FC, ReactNode } from 'react'
import { EXERCISE_ROUTE, FAVORITE_ROUTE, HOME_ROUTE } from 'constants/routes'
import DefaultContent from './DefaultContent'
import DefaultHeader from './DefaultHeader'

interface DefaultLayoutProps {
	children: ReactNode
}

export interface SidebarLinkItem {
	text: string
	linkTo: string
	checkInclude?: Array<string>
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {

	const sidebarLinks: Array<SidebarLinkItem> = [
		{ text: 'Home', linkTo: HOME_ROUTE },
		{ text: 'Exercises', linkTo: EXERCISE_ROUTE, checkInclude: ['detail', 'page'] },
		{ text: 'Favoite Exercies', linkTo: FAVORITE_ROUTE }
	]
	return (
		<div>
			<DefaultHeader sidebarLinks={sidebarLinks} />
			<DefaultContent>{children}</DefaultContent>
		</div>
	)
}

export default DefaultLayout
