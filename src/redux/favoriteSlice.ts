import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface FavoritesState {
  movies: IMovieDetail[]
}

const initialState: FavoritesState = {
  movies: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<IMovieDetail>) => {
      state.movies.push(action.payload)
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter(movie => movie.imdbID !== action.payload)
    }
  }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
