import { createContext } from 'react'
import type { ThemeContextProps } from './index.d'

const emptyFunction = () => { }

export const ThemeContext = createContext<ThemeContextProps>({
  setTheme: emptyFunction,
  isDarkMode: () => false,
  theme: 'system',
})
