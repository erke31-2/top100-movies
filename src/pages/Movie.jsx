import { useLoaderData, Link } from "react-router-dom";

const Movie = () => {
  const movie = useLoaderData();
  return (
    <section className="max-w-[1280px] mx-auto px-4 py-12 text-slate-100 flex flex-col gap-8 mb-4">
      <div className="font-bold flex justify-between items-end">
        <div className="flex flex-col space-y-2 max-w-[70%]">
          <h2 className="text-2xl lg:text-4xl">
            {movie.rank}. {movie.title}
          </h2>
          <p>IMDb rating: ⭐ {movie.rating}/10</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p>Save</p>
          <p>Year: {movie.year}</p>
        </div>
      </div>
      <div className="my-7 flex flex-col gap-8">
        <div className="flex flex-col gap-2 md:flex-row">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full md:w-[400px]"
          />
          <iframe
            src={movie.trailer}
            allowFullScreen
            className="w-full min-h-[300px]"
          ></iframe>
        </div>

        <p className="font-[500]">{movie.description}</p>
      </div>

      <div className="border-t border-b py-3 border-slate-400">
        <p className="border-b pb-3 border-slate-400">
          Genre: {movie.genre.join(", ")}
        </p>

        <p className="border-b border-slate-400 py-3">
          Writers: {movie.writers.join(", ")}
        </p>

        <p className="pt-3">Director: {movie.director.join(", ")}</p>
      </div>

      <div className="flex justify-center">
        <Link
          to={`https://www.imdb.com/title/${movie.imdbid}`}
          target="_blank"
          className="text-black bg-[#f5c518] font-semibold py-2 px-3 rounded-md"
        >
          Check on IMDb
        </Link>
      </div>
    </section>
  );
};

export default Movie;
