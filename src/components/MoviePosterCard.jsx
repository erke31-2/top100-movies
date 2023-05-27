import { Link } from "react-router-dom";

const MoviePosterCard = ({ movie }) => {
  return (
    <Link
      key={movie.id}
      className="relative cursor-pointer max-w-[500px]"
      to={`/movies/${movie.id}`}
    >
      <img src={movie.image} alt={movie.title} className="rounded-xl" />
      <div className="absolute left-0 right-0 top-0 bottom-0 opacity-0 hover:opacity-100 hover:bg-gray-800/30 text-white flex justify-center items-center rounded-xl">
        <h3 className="bg-gray-800/80 p-5 font-extrabold text-xl w-full h-[20%] mt-auto tracking-wide flex justify-center items-center text-center rounded-b-xl">
          {movie.title}
        </h3>
      </div>
    </Link>
  );
};

export default MoviePosterCard;
