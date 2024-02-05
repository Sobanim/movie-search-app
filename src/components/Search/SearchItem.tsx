import React, { type FC } from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

interface SearchItemProps {
  id: string
  title: string
  year: string
  poster: string
}

const SearchItem: FC<SearchItemProps> = ({ id, title, poster, year }) => {
  return (
    <Link key={id} to={`/detail/${id}`}>
        <Stack direction={'column'} spacing={1} mt={2} justifyContent={'space-between'}>
            <h2>{title} ({year})</h2>
            <img src={poster} alt={title} title={title}/>
        </Stack>
    </Link>
  )
}

export default SearchItem
