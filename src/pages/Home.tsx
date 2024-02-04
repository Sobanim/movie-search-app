import React, { type FC, useState } from 'react'
import { useMovieSearch } from '../hooks'
import { useQuery } from '@tanstack/react-query'

const fetchMovies = async (searchTitle: string): Promise<any> => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${encodeURIComponent(searchTitle)}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data.Search
}

const Home: FC = () => {
  const [title, setTitle] = useState('')

  const { data, isFetching } = useQuery({
    queryKey: ['searchMovies', title],
    queryFn: async () => await fetchMovies(title),
    enabled: title.length > 2
  })

  console.log(data)

  return (
      <div>
          <h1>Home</h1>

          <input
              type="text"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
              placeholder="Search for movies..."
          />
      </div>
  )
}

export default Home
