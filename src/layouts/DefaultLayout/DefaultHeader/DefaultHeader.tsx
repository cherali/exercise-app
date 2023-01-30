import type { FC } from 'react'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import { Container } from 'components/Container'
import type { SidebarLinkItem } from '../DefaultLayout'
import { DefaultHeaderContainer, DefaultHeaderLI, DefaultHeaderUL } from './DefaultHeader.styles'

interface DefaultHeader {
	sidebarLinks: Array<SidebarLinkItem>
}

const DefaultHeader: FC<DefaultHeader> = ({ sidebarLinks }) => {
	const { pathname } = useLocation()

	return (
		<DefaultHeaderContainer>
			<Container>
				<DefaultHeaderUL>
					{sidebarLinks.map((link, index) => (
						<DefaultHeaderLI key={index}>
							<Link
								className={clsx(
									(pathname === link.linkTo ||
										(link.checkInclude && link.checkInclude.some(item => location.pathname.includes(`${link.linkTo}/${item}`)))

									) && 'active'
								)}
								to={link.linkTo}
							>
								{link.text}
							</Link>
						</DefaultHeaderLI>
					))}
				</DefaultHeaderUL>
			</Container>
		</DefaultHeaderContainer>
	)
}

export default DefaultHeader
