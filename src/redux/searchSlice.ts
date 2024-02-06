import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  searchText: string
  page: number
  movies: ISearchMovie[]
}

const initialState: SearchState = {
  searchText: '',
  page: 1,
  movies: []
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setMovies: (state, action: PayloadAction<ISearchMovie[]>) => {
      state.movies = action.payload
    },
    addMovies: (state, action: PayloadAction<ISearchMovie[]>) => {
      state.movies = [...state.movies, ...action.payload]
    },
    resetSearch: (state) => {
      state.searchText = ''
      state.page = 1
      state.movies = []
    }
  }
})

export const { setSearchText, setPage, setMovies, addMovies, resetSearch } = searchSlice.actions

export const selectSearchText = (state: { search: SearchState }) => state.search.searchText
export const selectPage = (state: { search: SearchState }) => state.search.page
export const selectMovies = (state: { search: SearchState }) => state.search.movies

export default searchSlice.reducer
