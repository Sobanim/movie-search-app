const BASE = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

export const fetchSearchMovies = async (searchTitle: string): Promise<ISearchMovies> => {
  const response = await fetch(`${BASE}&type=movie&s=${encodeURIComponent(searchTitle)}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const result = await response.json()
  return result.Search
}

export const fetchDetailMovie = async (title: string) => {
  const response = await fetch(`${BASE}&i=${encodeURIComponent(title)}`)
  if (!response.ok) throw new Error('Some things wrong :(')
  return await response.json()
}
