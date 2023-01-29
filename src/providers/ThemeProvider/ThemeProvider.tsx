import { FC, useState } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import type { ITheme, ThemeMode, ThemeProviderProps } from './index.d'
import { ThemeContext } from './ThemeProviderContext'
import type { IPallete } from 'theme/index.d'

// pallete
import { darkPallete } from 'theme/palletes/darkPallete'
import { lightPallete } from 'theme/palletes/lightPallete'


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
    pallete
  }



  const changeTheme = (theme: ThemeMode) => setTheme(theme)


  return (
    <ThemeContext.Provider
      value={{
        setTheme: changeTheme,
        theme,
        isDarkMode,
        pallete,
      }}
    >

      <EmotionThemeProvider theme={themeData} >
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider