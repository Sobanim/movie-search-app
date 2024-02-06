import { useQuery } from '@tanstack/react-query'
import { fetchDetailMovie, fetchSearchMovies } from '../services/movieFetch'

export const useMovieDetailQuery = (title: string) => {
  return useQuery<IMovieDetail, Error>({
    queryKey: ['movieDetail', title],
    queryFn: async () => await fetchDetailMovie(title)
  })
}

export const useFetchMovies = (title: string, page: number) => {
  return useQuery<ISearchMovies, Error>({
    queryKey: ['searchMovies', title, page],
    queryFn: async () => await fetchSearchMovies(title, page),
    enabled: title.length > 2
  })
}
