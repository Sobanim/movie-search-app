interface IMovieDetail {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: IMovieRating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

interface IMovieRating {
  Source: string
  Value: string
}

interface ISearchMovies {
  Search: ISearchMovie[]
}

interface ISearchResult {
  items: ISearchMovies
  totalResults: number
  page: number
}

interface ISearchMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
