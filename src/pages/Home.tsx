import React, { type FC, useState } from 'react'
import { useFetchMovies } from '../hooks'
import { Link } from 'react-router-dom'
import { CircularProgress, Container, Stack } from '@mui/material'
import CustomSearch from '../components/Search/CustomeSearch'
import { SearchResults, SearchWrapper } from '../components/Search/style'
import SearchItem from '../components/Search/SearchItem'

const Home: FC = () => {
  const [searchMovie, setSearchMovie] = useState<string>('')

  const { data, isFetching, error } = useFetchMovies(searchMovie)

  // console.log('error', error)

  if (error) return <p>An error has occurred: + {error.message}</p>

  return (
      <Container maxWidth={'md'}>
          <SearchWrapper>
              <CustomSearch
                  placeholder={'Search for movies...'}
                  value={searchMovie}
                  onChange={(e) => { setSearchMovie(e.target.value) }}
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
          </SearchWrapper>
      </Container>
  )
}

export default Home
