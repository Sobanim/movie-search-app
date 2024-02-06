const BASE = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

export const fetchSearchMovies = async (searchTitle: string): Promise<ISearchMovies> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const response = await fetch(`${BASE}&type=movie&s=${encodeURIComponent(searchTitle)}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return await response.json()
}

export const fetchDetailMovie = async (title: string) => {
  const response = await fetch(`${BASE}&i=${encodeURIComponent(title)}`)
  if (!response.ok) throw new Error('Some things wrong :(')
  return await response.json()
}
