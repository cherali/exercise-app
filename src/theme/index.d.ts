import type { ReactNode } from 'react'

export interface EmotionCacheProviderProps {
  children: ReactNode;
}


interface IColor {
  main: string;
  light?: string;
  lightest?: string;
  dark?: string;
  darkest?: string;
}

export interface IPallete {
  primary: IColor;
  white: IColor;
  black: IColor;
  gray: IColor;
  green: IColor;
  red: IColor;
}

