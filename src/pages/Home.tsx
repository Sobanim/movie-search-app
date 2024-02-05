import React, { type FC, useState } from 'react'
import { useFetchMovies } from '../hooks'
import { Link } from 'react-router-dom'
import { Box, CircularProgress, Container, Stack } from '@mui/material'
import CustomSearch from '../components/CustomeSearch/CustomeSearch'
import { SearchResults, SearchWrapper } from '../components/CustomeSearch/style'

const Home: FC = () => {
  const [searchMovie, setSearchMovie] = useState<string>('')

  const { data, isFetching, error } = useFetchMovies(searchMovie)

  // console.log('error', error)

  if (error) return <p>An error has occurred: + {error.message}</p>

  return (
      <Container maxWidth={'md'}>
          <h1>Home</h1>

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
                      <Link key={resultSearch.imdbID} to={`/detail/${resultSearch.imdbID}`}>
                          <Stack direction={'column'} spacing={1} mt={2} justifyContent={'space-between'}>
                              <h2>{resultSearch.Title} ({resultSearch.Year})</h2>
                              <img src={resultSearch.Poster} alt={resultSearch.Title} title={resultSearch.Title}/>
                          </Stack>

                      </Link>
                  ))}
              </SearchResults>
          </SearchWrapper>
      </Container>
  )
}

export default Home
