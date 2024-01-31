import React, { type FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Box, Container, Stack, Typography } from '@mui/material'

const FilmDetail: FC = () => {
  const { isPending, data } = useQuery<Movie, any>({
    queryKey: ['repoData'],
    queryFn: async () =>
      await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=Batman`).then(async (res) =>
        await res.json()
      )
  })

  if (isPending) return <p>Loading...</p>

  // if (error) return <p>'An error has occurred: ' + {error.message}</p>

  console.log(process.env)

  return (
        <Container maxWidth={'lg'}>
            <h1>{data?.Title} ({data?.Year})</h1>
            <Stack direction={'row'} spacing={2}>
                <div>
                    <img src={data?.Poster} alt={data?.Title}/>
                </div>
                <div>
                    <Stack direction={'row'} spacing={1}>
                        <Typography minWidth={'80px'} variant={'overline'}>Plot</Typography>
                        <div>{data?.Plot}</div>
                    </Stack>

                    <Stack direction={'row'} spacing={1}>
                        <Typography minWidth={'80px'} variant={'overline'}>Released</Typography>
                        <div>{data?.Released}</div>
                    </Stack>
                </div>

            </Stack>

        </Container>
  )
}

export default FilmDetail
