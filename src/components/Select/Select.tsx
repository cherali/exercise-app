import type { FC } from 'react'
import ReactSelect, { Props } from 'react-select'
import { StyledSelect } from './Select.styles'
import { useTheme } from 'providers/ThemeProvider/useTheme'


const Select: FC<Props> = (props) => {

	const { pallete } = useTheme()

	return (
		<StyledSelect>
			<ReactSelect
				theme={(theme) => ({
					...theme,
					colors: {
						...theme.colors,
						...pallete ? {
							primary: pallete.primary.darkest,
							primary25: pallete.primary.main,
							neutral0: pallete.white.main,
							neutral10: pallete.gray.light,
							neutral20: pallete.primary.main,
							neutral30: pallete.primary.darkest,
							dangerLight: pallete.red.main,
							neutral50: pallete.primary.lightest,
							neutral80: pallete.secondary.main,
							primary50: pallete.primary.lightest,
						} : {}
					}
				})}
				styles={{
					option: (baseStyle, state) => ({
						...baseStyle,
						...pallete ? {
							color: state.isSelected ? '#fff' : state.isFocused ? '#fff' : pallete.black.main

						} : {}
					})
				}}
				{...props}
			/>
		</StyledSelect>
	)
}


export default Select
