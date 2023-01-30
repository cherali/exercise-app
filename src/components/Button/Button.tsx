import type { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import { StyledButton } from './Button.styles'

export type ButtonColor = 'primary' | 'secondary'
export type ButtonSize = 'medium'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: ButtonColor;
	size?: ButtonSize;
	disabled?: boolean;
	children?: ReactNode;
}


const Button: FC<ButtonProps> = ({ children, color = 'primary', size = 'medium', disabled = false, ...props }) => {

	return (
		<StyledButton
			color={color}
			size={size}
			disabled={disabled}
			{...props}
		>
			{children}
		</StyledButton>
	)
}

export default Button
