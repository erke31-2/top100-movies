import MoviePosterCard from './MoviePosterCard'

const PosterMovies = ({movies}) => {
  return (
    <div className="grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6 px-2">
        {movies.map((movie)=> (
          <MoviePosterCard movie={movie} key={movie.id}/> 
        ))}
    </div>
  )
}

export default PosterMovies