import type { ReactNode } from 'react'

export interface HTMLTagProviderProps {
  children: ReactNode
}

export interface HTMLTagProviderContextProps {
  setTitleTag: (title: string) => void;
  setDescriptionTag: (desc: string) => void;
  setDirection: (dir: 'rtl' | 'ltr') => void;
}