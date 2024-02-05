import React, { type FC, useState } from 'react'
import { Alert, Button, CircularProgress, Container, Snackbar, Stack, Typography } from '@mui/material'
import { EmojiEvents, Favorite, FavoriteBorder } from '@mui/icons-material'
import { useMovieDetailQuery } from '../hooks'
import { useParams } from 'react-router-dom'
import IMDBIcon from '../components/IMDBIcon'
import { StyledIconWrapper } from '../components/style'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../redux/favoriteSlice'
import { type RootState } from '../redux/store'

const FilmDetail: FC = () => {
  const { id } = useParams()
  const { data, isPending, error } = useMovieDetailQuery(id ?? '')
  const dispatch = useDispatch()

  const favorites: IMovieDetail[] = useSelector((state: RootState) => state.favorites.movies)
  const isFavorite = favorites.some((favorites: { imdbID: string }) => favorites.imdbID === data?.imdbID)

  const [openNotification, setOpenNotification] = useState<boolean>(false)

  const toggleFavorite = (): void => {
    if (data && isFavorite) {
      dispatch(removeFavorite(data.imdbID))
    } else {
      dispatch(addFavorite(data as IMovieDetail))
    }
    setOpenNotification(true)
  }

  console.log(favorites)

  const handleClose = (): void => {
    setOpenNotification(false)
  }

  if (isPending) {
    return (
      <Stack alignItems={'center'} justifyContent={'center'} minHeight={'100vh'}>
        <CircularProgress />
      </Stack>

    )
  }

  if (error) return <p>An error has occurred: + {error.message}</p>

  return (
        <Container maxWidth={'md'}>
            <h1>{data?.Title} ({data?.Year})</h1>
            <Stack direction={'row'} spacing={2}>
                <div>
                    <img src={data?.Poster} alt={data?.Title} title={`${data?.Title} (${data?.Year})`}/>
                </div>
                <div>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>Released</Typography>
                        <Typography variant={'body2'}>{data?.Released}</Typography>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>Country</Typography>
                        <Typography variant={'body2'}>{data?.Country}</Typography>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>Genre</Typography>
                        <Typography variant={'body2'}>{data?.Genre}</Typography>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>Director</Typography>
                        <Typography variant={'body2'}>{data?.Director}</Typography>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>Staring</Typography>
                        <Typography variant={'body2'}>{data?.Actors}</Typography>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>Plot</Typography>
                        <Typography variant={'body2'}>{data?.Plot}</Typography>
                    </Stack>

                    { data?.Awards !== 'N/A'
                      ? (
                        <Stack direction={'row'} spacing={1} alignItems={'center'}>
                            <Typography minWidth={'80px'} variant={'overline'}>Awards</Typography>
                            <Typography variant={'body2'}><EmojiEvents htmlColor={'darkorange'} fontSize={'small'} />{data?.Awards}</Typography>
                        </Stack>
                        )
                      : null }

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>Runtime</Typography>
                        <Typography variant={'body2'}>{data?.Runtime}</Typography>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>MPAA</Typography>
                        <Typography variant={'body2'}>{data?.Rated}</Typography>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>DVD</Typography>
                        <Typography variant={'body2'}>{data?.DVD}</Typography>
                    </Stack>

                    <Stack direction={'row'} justifyContent={'space-around'}>
                        <Stack direction={'column'}>
                            <Stack direction={'row'} alignItems={'center'}>
                                <StyledIconWrapper>
                                    <IMDBIcon />
                                </StyledIconWrapper>
                                <Typography variant={'h4'} fontFamily={'fantasy'}>{data?.imdbRating}</Typography>
                            </Stack>
                            <Typography variant={'caption'} align={'center'} color={'darkgray'} fontFamily={'fantasy'}>{data?.imdbVotes}</Typography>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'}>
                            {isFavorite
                              ? (
                                  <Button variant='outlined' color='success' onClick={toggleFavorite} endIcon={<Favorite />}>In favorite</Button>
                                )
                              : (
                                  <Button variant="contained" color="success" onClick={toggleFavorite}
                                          endIcon={ <FavoriteBorder />}
                                    >Add to Favorite</Button>
                                )}
                        </Stack>
                    </Stack>
                </div>
            </Stack>

            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openNotification} autoHideDuration={3000} onClose={handleClose}>
                <Alert variant="filled" severity="success">
                    Successfully added!
                </Alert>
            </Snackbar>
        </Container>
  )
}

export default FilmDetail
