import React, { type FC } from 'react'
import { useSelector } from 'react-redux'
import { Box, Container, Stack } from '@mui/material'
import SearchItem from '../components/Search/SearchItem'
import type { RootState } from '../redux/store'

const Favorites: FC = () => {
  const favoritesMovies: IMovieDetail[] = useSelector((state: RootState) => state?.favorites?.movies)

  console.log(favoritesMovies)

  if (favoritesMovies.length === 0) {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} minHeight={'100dvh'}>
            <h1>You dont have movies in Favorites</h1>
        </Stack>
    )
  }
  return (
        <Container maxWidth={'md'}>
            <h1>Your favorites movie list</h1>
            <Stack flexWrap={'wrap'} flexDirection={'row'} gap={2}>
                {favoritesMovies.map(movie => (
                    <Box key={movie.imdbID} maxWidth={'200px'}>
                        <SearchItem
                            id={movie.imdbID}
                            title={movie.Title}
                            year={movie.Year}
                            poster={movie.Poster}
                        />
                    </Box>

                ))}
            </Stack>
        </Container>
  )
}

export default Favorites
