import { useQuery } from '@tanstack/react-query'

export const useMovieDetailQuery = (title: string) => {
  return useQuery<IMovie, Error>({
    queryKey: ['movieDetail', title],
    queryFn: async () => {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${encodeURIComponent(title)}`)
      if (!response.ok) {
        throw new Error('Some things wrong :(')
      }
      return await response.json()
    }
  })
}

export const useMovieSearch = (searchText: string) => {
  return useQuery<any, Error>({
    queryKey: ['searchMovie', searchText],
    queryFn: async () => {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${encodeURIComponent(searchText)}`)
      if (!res.ok) {
        throw new Error('Some things wrong :(')
      }
    },
    enabled: searchText.length >= 3
  })
}
