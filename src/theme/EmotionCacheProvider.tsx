import { FC, useMemo } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache, { StylisPlugin } from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import type { EmotionCacheProviderProps } from './index.d'

// Create cache
const cache = createCache({
  key: 'css',
  stylisPlugins: [prefixer],
  prepend: true,
})

const cacheRtl = createCache({
  key: 'css',
  stylisPlugins: [prefixer, (rtlPlugin as unknown as StylisPlugin)],
  prepend: true,
})

const EmotionCacheProvider: FC<EmotionCacheProviderProps> = ({ children }) => {
  const languageDircetion = 'ltr'

  const providerCache = useMemo(() => languageDircetion === 'ltr' ? cache : cacheRtl, [languageDircetion])

  return (
    <>
      <CacheProvider value={providerCache}>
        {children}
      </CacheProvider>
    </>
  )
}

export default EmotionCacheProvider