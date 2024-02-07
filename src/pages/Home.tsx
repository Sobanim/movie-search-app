import React, { type FC, useEffect } from 'react'
import { useFetchMovies } from '../hooks'
import { Button, CircularProgress, Container, Stack } from '@mui/material'
import CustomSearch from '../components/Search/CustomeSearch'
import SearchItem from '../components/Search/SearchItem'
import { SearchResults, SearchWrapper } from '../components/style'
import { useDispatch, useSelector } from 'react-redux'
import {
  addMovies,
  resetSearch,
  selectMovies,
  selectPage,
  selectSearchText,
  setPage,
  setSearchText
} from '../redux/searchSlice'

const Home: FC = () => {
  const dispatch = useDispatch()
  const searchText = useSelector(selectSearchText)
  const page = useSelector(selectPage)
  const movies = useSelector(selectMovies)

  const { data, isFetching, error } = useFetchMovies(searchText, page)

  useEffect(() => {
    if (data?.Search && data?.Search[data?.Search.length - 1]?.imdbID !== movies[movies.length - 1]?.imdbID) {
      dispatch(addMovies(data.Search))
    }
  }, [data, dispatch, searchText])

  useEffect(() => {
    if (searchText.length === 0) {
      dispatch(resetSearch())
    }
  }, [searchText])

  if (error) return <p>An error has occurred: + {error.message}</p>

  return (
      <Container maxWidth={'md'}>
          <SearchWrapper>
              <CustomSearch
                  placeholder={'Search for movies...'}
                  value={searchText}
                  onChange={(e) => { dispatch(setSearchText(e.target.value)) }}
                  onClick={() => dispatch(resetSearch())}
              />
              {isFetching
                ? (
                  <Stack alignItems={'center'} justifyContent={'center'} height={'300px'}>
                      <CircularProgress />
                  </Stack>
                  )
                : null}
              <SearchResults>
                  {movies?.map((resultSearch: ISearchMovie) => (
                    <SearchItem
                        key={resultSearch.imdbID}
                        id={resultSearch.imdbID}
                        title={resultSearch.Title}
                        year={resultSearch.Year}
                        poster={resultSearch.Poster}
                    />
                  ))}
              </SearchResults>

              {movies.length !== 0
                ? (
                  <Stack justifyContent={'center'}>
                      <Button onClick={() => { dispatch(setPage(page + 1)) }}>Load More</Button>
                  </Stack>
                  )
                : null}
          </SearchWrapper>
      </Container>
  )
}

export default Home
