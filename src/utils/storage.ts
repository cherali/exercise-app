import type { Exersise } from 'pages/Exercise/Exercise.services'

const _localStorageName = 'exersice-favorites'

export const getFavoriteList = (): Array<Exersise> => JSON.parse(localStorage.getItem(_localStorageName) || '[]')

export const setFavorite = (exercise: Exersise) => {
  const favoriteList = getFavoriteList()

  favoriteList.push(exercise)
  localStorage.setItem(_localStorageName, JSON.stringify(favoriteList))
}

export const removeFavorite = (exerciseId: string) => {
  const favoriteList = getFavoriteList()

  const newFavoriteList = favoriteList.filter(f => f.id !== exerciseId)
  localStorage.setItem(_localStorageName, JSON.stringify(newFavoriteList))
}