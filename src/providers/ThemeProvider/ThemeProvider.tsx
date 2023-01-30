import { FC, useState } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import type { ITheme, ThemeMode, ThemeProviderProps } from './index.d'
import { ThemeContext } from './ThemeProviderContext'
import type { IPallete } from 'theme/index.d'

// pallete
import { darkPallete } from 'theme/palletes/darkPallete'
import { lightPallete } from 'theme/palletes/lightPallete'


const typography = {
  h1: {
    'fontSize': '5rem',
    'lineHeight': '5.5rem',
    'fontWeight': 'bold',
  },
  h2: {
    'fontSize': '4rem',
    'lineHeight': '4.4rem',
    'fontWeight': 'bold',
  },
  h3: {
    'fontSize': '3rem',
    'lineHeight': '3.3rem',
    'fontWeight': 'bold',
  },
  h4: {
    'fontSize': '2rem',
    'lineHeight': '2.2rem',
    'fontWeight': 'bold',
  },
  h5: {
    'fontSize': '1rem',
    'lineHeight': '1.1rem',
    'fontWeight': 'bold',
  },
  h6: {
    'fontSize': '0.5rem',
    'lineHeight': '0.6rem',
    'fontWeight': 'bold',
  },

  body1: {
    'fontSize': '1rem',
    'lineHeight': '1.1rem',
  },
  body2: {
    'fontSize': '0.7rem',
    'lineHeight': '0.85rem',
  },

  subtitle1: {
    'fontSize': '0.5rem',
    'lineHeight': '0.6rem',
  },

  subtitle2: {
    'fontSize': '0.25rem',
    'lineHeight': '0.3rem',
  },
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {

  const [theme, setTheme] = useState<ThemeMode>('system')

  const isDarkMode = () => {
    const isBrowserUsingDarkTheme = Boolean(window.matchMedia('(prefers-color-scheme: dark)').matches)
    return Boolean(theme === 'system') ? isBrowserUsingDarkTheme : Boolean(theme === 'dark')
  }

  const getPallete = (): IPallete => {
    switch (theme) {
      case 'dark':
        return darkPallete
      case 'light':
        return lightPallete

      default:
        return isDarkMode() ? darkPallete : lightPallete
    }
  }


  const pallete = getPallete()

  const themeData: ITheme = {
    pallete,
    typography
  }


  const changeTheme = (theme: ThemeMode) => setTheme(theme)


  return (
    <ThemeContext.Provider
      value={{
        setTheme: changeTheme,
        theme,
        isDarkMode,
        pallete,
        typography,
      }}
    >

      <EmotionThemeProvider theme={themeData} >
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider