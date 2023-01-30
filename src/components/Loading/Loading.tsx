import { FC, useEffect } from 'react'
import clsx from 'clsx'

import classes from './LoadingStyle.module.css'

interface LoadingProps {
	fullScreen?: boolean;
	centerd?: boolean;
	size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'
}

const Loading: FC<LoadingProps> = ({ fullScreen = false, centerd = true, size = 'medium' }) => {

	useEffect(() => {
		if (fullScreen) {
			document.body.className = 'no-scroll'
		}

		return () => {
			if (fullScreen) {
				document.body.classList.remove('no-scroll')
			}
		}
	}, [])

	return (
		<div
			className={
				clsx(
					classes.wrapper,
					classes[`wrapper-${size}`],
					fullScreen && classes.fullscreen,
					centerd && classes.centered
				)
			}
		>
			<span
				className={
					clsx(
						classes.loader,
						classes[`loader-${size}`],
					)
				}>
			</span>
		</div>
	)
}

export default Loading
