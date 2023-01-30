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
  secondary: IColor;
  white: IColor;
  black: IColor;
  gray: IColor;
  green: IColor;
  red: IColor;
}

type TTypography = ClassAttributes<HTMLParagraphElement>

export interface ITypography {
  h1: TTypography;
  h2: TTypography;
  h3: TTypography;
  h4: TTypography;
  h5: TTypography;
  h6: TTypography;

  body1: TTypography;
  body2: TTypography;

  subtitle1: TTypography;
  subtitle2: TTypography;
}
