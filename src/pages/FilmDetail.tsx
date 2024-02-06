import React, { type FC, useState } from 'react'
import { Alert, Button, CircularProgress, Container, IconButton, Snackbar, Stack, Typography } from '@mui/material'
import { EmojiEvents, Favorite, FavoriteBorder } from '@mui/icons-material'
import { useMovieDetailQuery } from '../hooks'
import { useParams } from 'react-router-dom'
import IMDBIcon from '../components/icons/IMDBIcon'
import { StyledIconWrapper } from '../components/style'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../redux/favoriteSlice'
import { type RootState } from '../redux/store'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const FilmDetail: FC = () => {
  const { id } = useParams()
  const { data, isPending, error } = useMovieDetailQuery(id ?? '')
  const dispatch = useDispatch()

  const favorites: IMovieDetail[] = useSelector((state: RootState) => state.favorites.movies)
  const isFavorite = favorites.some((favorites: { imdbID: string }) => favorites.imdbID === data?.imdbID)

  const [addToFavorite, setAddToFavorite] = useState<boolean>(false)
  const [removeFromFavorites, setRemoveFromFavorites] = useState<boolean>(false)

  const toggleFavorite = (): void => {
    if (data && isFavorite) {
      dispatch(removeFavorite(data.imdbID))
      setRemoveFromFavorites(true)
    } else {
      dispatch(addFavorite(data as IMovieDetail))
      setAddToFavorite(true)
    }
  }

  const handleCloseAddToFavorite = (): void => {
    setAddToFavorite(false)
  }

  const handleCloseRemoveFromFavorites = (): void => {
    setRemoveFromFavorites(false)
  }

  if (isPending) {
    return (
      <Stack alignItems={'center'} justifyContent={'center'} minHeight={'100vh'}>
        <CircularProgress />
      </Stack>

    )
  }

  if (error) return <p>Somethings wrong :( + {error.message}</p>

  return (
        <Container maxWidth={'md'}>
            <h1>
                {data?.Title} ({data?.Year})
                { isFavorite
                  ? (
                    <IconButton title={'In Favorites'} onClick={toggleFavorite}>
                        <StarIcon htmlColor={'darkorange'}/>
                    </IconButton>
                    )
                  : (
                    <IconButton title={'Add to favorite'} onClick={toggleFavorite}>
                        <StarBorderIcon htmlColor={'darkorange'}/>
                    </IconButton>
                    ) }
            </h1>

            <Stack direction={{ sm: 'column', md: 'row' }} spacing={2}>
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
                                  <Button variant='outlined' color='success' onClick={toggleFavorite} endIcon={<Favorite />}>In favorites</Button>
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

            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={addToFavorite} autoHideDuration={3000} onClose={handleCloseAddToFavorite}>
                <Alert variant="filled" severity="success">
                    Successfully added!
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={removeFromFavorites} autoHideDuration={3000} onClose={handleCloseRemoveFromFavorites}>
                <Alert variant="filled" severity="info">
                    Removed from Favorites
                </Alert>
            </Snackbar>
        </Container>
  )
}

export default FilmDetail
