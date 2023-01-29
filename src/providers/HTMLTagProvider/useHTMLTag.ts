import { useContext } from 'react'
import { HTMLTagProviderContext } from './HTMLTagProviderContext'
import type { HTMLTagProviderContextProps } from './index.d'

export const useTheme = (): HTMLTagProviderContextProps => useContext(HTMLTagProviderContext)
