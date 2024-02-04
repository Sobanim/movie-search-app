import React, { type FC, useState } from 'react'
import { Alert, Button, CircularProgress, Container, Snackbar, Stack, Typography } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { useMovieDetailQuery } from '../hooks'

const FilmDetail: FC = () => {
  const { data, isPending, error } = useMovieDetailQuery('need for speed')

  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [openNotification, setOpenNotification] = useState<boolean>(false)

  const addToFavorite = (): void => {
    setOpenNotification(true)
  }

  const handleClose = (): void => {
    setOpenNotification(false)
  }

  if (isPending) return <CircularProgress />

  if (error) return <p>An error has occurred: + {error.message}</p>

  return (
        <Container maxWidth={'lg'}>
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
                        <div>{data?.Country}</div>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>Genre</Typography>
                        <div>{data?.Genre}</div>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>Director</Typography>
                        <div>{data?.Director}</div>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>Staring</Typography>
                        <div>{data?.Actors}</div>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>Plot</Typography>
                        <div>{data?.Plot}</div>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>Runtime</Typography>
                        <div>{data?.Runtime}</div>
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Typography minWidth={'80px'} variant={'overline'}>MPAA</Typography>
                        <div>{data?.Rated}</div>
                    </Stack>

                    <div>
                        {data?.Ratings.map((rate) => (
                            <div key={rate.Source}>
                                <div>{rate.Source}</div>
                                <div>{rate.Value}</div>
                            </div>
                        ))}
                    </div>

                    <Stack direction={'row'} justifyContent={'center'}>
                        <Button variant="contained" color="success" size={'large'} onClick={addToFavorite}
                                endIcon={ isFavorite ? <Favorite /> : <FavoriteBorder />}
                        >Add to Favorite</Button>
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
