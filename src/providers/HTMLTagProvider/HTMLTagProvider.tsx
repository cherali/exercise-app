import { FC, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { HTMLTagProviderContext } from './HTMLTagProviderContext'
import type { HTMLTagProviderProps } from './index.d'

interface Tags {
  title: string;
  description: string;
  direction: 'rtl' | 'ltr'
}

const HTMLTagProvider: FC<HTMLTagProviderProps> = ({ children }) => {
  const [tags, setTags] = useState<Tags>({
    title: 'Exercise App',
    description: '',
    direction: 'ltr'
  })

  const setTitleTag = (title: string) => setTags(s => ({ ...s, title }))

  const setDescriptionTag = (description: string) => setTags(s => ({ ...s, description }))

  const setDirection = (direction: 'rtl' | 'ltr') => setTags(s => ({ ...s, direction }))


  return (
    <HTMLTagProviderContext.Provider
      value={{
        setTitleTag,
        setDescriptionTag,
        setDirection,
      }}

    >
      <HelmetProvider>
        <Helmet>
          <html dir={tags.direction} />

          <title>{tags.title}</title>

          <meta charSet="UTF-8" />

          <meta name="description" content={tags.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        </Helmet>
      </HelmetProvider>
      {children}
    </HTMLTagProviderContext.Provider>
  )
}

export default HTMLTagProvider