import { createContext } from 'react'
import type { HTMLTagProviderContextProps } from './index.d'

const emptyFunction = () => { }

export const HTMLTagProviderContext = createContext<HTMLTagProviderContextProps>({
  setTitleTag: emptyFunction,
  setDescriptionTag: emptyFunction,
  setDirection: emptyFunction,
})
