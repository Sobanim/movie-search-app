import { useQuery } from '@tanstack/react-query'
import { fetchDetailMovie, fetchSearchMovies } from '../services/movie'

export const useMovieDetailQuery = (title: string) => {
  return useQuery<IMovieDetail, Error>({
    queryKey: ['movieDetail', title],
    queryFn: async () => await fetchDetailMovie(title)
  })
}

export const useFetchMovies = (title: string) => {
  return useQuery<any, Error>({
    queryKey: ['searchMovies', title],
    queryFn: async () => await fetchSearchMovies(title),
    enabled: title.length > 2
  })
}
