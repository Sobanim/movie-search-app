import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoriteSlice'
import searchReducer from './searchSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    search: searchReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
