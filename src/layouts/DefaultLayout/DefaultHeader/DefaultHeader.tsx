import type { FC } from 'react'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import { Container } from 'components/Container'
import type { SidebarLinkItem } from '../DefaultLayout'
import { ChangeTheme, DefaultHeaderContainer, DefaultHeaderContent, DefaultHeaderLI, DefaultHeaderUL } from './DefaultHeader.styles'
import { useTheme } from 'providers/ThemeProvider/useTheme'

interface DefaultHeader {
	sidebarLinks: Array<SidebarLinkItem>
}

const DefaultHeader: FC<DefaultHeader> = ({ sidebarLinks }) => {
	const { pathname } = useLocation()

	const { setTheme, isDarkMode } = useTheme()

	const handleChangeTheme = () => {
		setTheme(isDarkMode() ? 'light' : 'dark')
	}

	return (
		<DefaultHeaderContainer>
			<Container>
				<DefaultHeaderContent>
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

					<ChangeTheme onClick={handleChangeTheme}>
						<img alt='chage-theme' src='/images/icons/svg/theme.svg' />
					</ChangeTheme>
				</DefaultHeaderContent>
			</Container>
		</DefaultHeaderContainer>
	)
}

export default DefaultHeader
