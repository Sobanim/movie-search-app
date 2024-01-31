import React, { type FC } from 'react'
import { Stack, Typography } from '@mui/material'

interface MoviePropertiesProps {
  nameProps: string
  value: string
}

const MovieProperties: FC<MoviePropertiesProps> = ({ nameProps, value }) => {
  return (
      <Stack direction={'row'} spacing={1}>
          <Typography minWidth={'80px'} variant={'overline'}>{nameProps}: </Typography>
          <div>{value}</div>
      </Stack>
  )
}

export default MovieProperties
