import { Link, useLoaderData } from "react-router-dom";
import MoviePosterCard from "../components/MoviePosterCard";

const Home = () => {
  const movie = useLoaderData();
  return (
    <section className="w-full h-screen bg-gradient-to-tr from-[#000428] to-[#95cdfe]">
      <div className="max-w-[960px] h-[100%] mx-auto flex flex-col justify-center items-center text-white/90 md:flex-row md:justify-between md:items-center">
        <div className="max-w-[300px] md:max-w-[450px] text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 font-extrabold tracking-wide">
            100 Best Movies of All Time That You Should Watch Immediately
          </h2>
          <Link
            to="list"
            className="bg-[#0077c2] px-3 py-2 font-semibold rounded-md hover:bg-[#3399ff] duration-300 mt-3"
          >
            Check Them Now
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2 py-4">
          <p className="font-semibold">Rank: {movie.rank}/100</p>
          <div className="max-w-[285px]">
            <MoviePosterCard movie={movie} />
          </div>
        </div>
      </div>
    </section>
  );
};



export default Home;
