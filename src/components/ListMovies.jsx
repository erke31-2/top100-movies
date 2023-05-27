import { Link } from "react-router-dom";

const ListMovies = ({ movies }) => {
  return (
    <div className="space-y-5 px-3 py-6">
      {movies.map((movie) => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          className="bg-gray-900 text-white/90 flex shadow-md  rounded-lg px-2 cursor-pointer justify-between items-center hover:bg-gray-800/70"
        >
          <div className="flex items-center space-x-3 max-w-[70%]">
            <h2 className="min-w-[70px]">Rank:{movie.rank}</h2>
            <img src={movie.thumbnail} alt={movie.title} className="w-[50px]" />
            <h2 className="">{movie.title}</h2>
          </div>

          <h2>⭐ {movie.rating}/10</h2>
        </Link>
      ))}
    </div>
  );
};

export default ListMovies;
