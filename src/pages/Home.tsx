import React, { type FC, useState } from 'react'
import { useFetchMovies } from '../hooks'
import { Button, CircularProgress, Container, Stack } from '@mui/material'
import CustomSearch from '../components/Search/CustomeSearch'
import SearchItem from '../components/Search/SearchItem'
import { SearchResults, SearchWrapper } from '../components/style'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovies, selectPage, selectSearchText, setPage, setSearchText } from '../redux/searchSlice'

const Home: FC = () => {
  const dispatch = useDispatch()
  const searchText = useSelector(selectSearchText)
  const page = useSelector(selectPage)
  const movies = useSelector(selectMovies)

  const [searchMovie, setSearchMovie] = useState<string>('')

  const { data, isFetching, error } = useFetchMovies(searchText, page)

  console.log(page)

  if (error) return <p>An error has occurred: + {error.message}</p>

  return (
      <Container maxWidth={'md'}>
          <SearchWrapper>
              <CustomSearch
                  placeholder={'Search for movies...'}
                  value={searchText}
                  onChange={(e) => { dispatch(setSearchText(e.target.value)) }}
              />
              {isFetching
                ? (
                  <Stack alignItems={'center'} justifyContent={'center'} height={'300px'}>
                      <CircularProgress />
                  </Stack>
                  )
                : null}
              <SearchResults>
                  {data?.Search?.map((resultSearch: ISearchMovie) => (
                    <SearchItem
                        key={resultSearch.imdbID}
                        id={resultSearch.imdbID}
                        title={resultSearch.Title}
                        year={resultSearch.Year}
                        poster={resultSearch.Poster}
                    />
                  ))}
              </SearchResults>
              <Stack justifyContent={'center'}>
                <Button onClick={() => { dispatch(setPage(page + 1)) }}>Load More</Button>
              </Stack>
          </SearchWrapper>
      </Container>
  )
}

export default Home
