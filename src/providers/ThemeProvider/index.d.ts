import type { IPallete } from 'theme/index.d'

declare module '@emotion/react' {
  export interface Theme extends ITheme { }
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ITheme {
  pallete: IPallete;
}

export type ThemeMode = 'system' | 'dark' | 'light'


export interface ThemeContextProps {
  setTheme: (theme: ThemeMode) => void;
  theme: ThemeMode;
  isDarkMode: () => boolean;
  pallete?: IPallete;
}
