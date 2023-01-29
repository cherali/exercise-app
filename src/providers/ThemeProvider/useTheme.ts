import { useContext } from 'react'
import { ThemeContextProps } from './index.d'
import { ThemeContext } from './ThemeProviderContext'

export const useTheme = (): ThemeContextProps => useContext(ThemeContext)
