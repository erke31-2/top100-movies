import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PosterMovies from "../components/PosterMovies";
import ListMovies from "../components/ListMovies";
import Dropdown from "../components/Dropdown";

const Movies = () => {
  const [isPoster, setIsPoster] = useState(true);
  const movies = useLoaderData();
  const [selected, setSelected] = useState(
    sessionStorage.getItem("selectedGenre") || "All"
  );
  let filterMovies = movies;
  if (selected !== "All") {
    filterMovies = movies.filter((m) => m.genre.includes(selected));
  }

  return (
    <section className="max-w-[1280px] mx-auto mt-8">
      <div className="flex justify-between text-white py-5 px-3 items-center">
        {/* <div>
          <h2 className="text-2xl font-bold bg-red-600 px-3 py-1 rounded-md text-black/90 font-Roboto">
            Top <span className="text-slate-100/90">100</span>
          </h2>
        </div> */}
        <Dropdown setSelected={setSelected} />

        <div className="flex items-center border py-2 px-3 rounded-md">
          <button
            className="mr-2 hover:text-slate-300/80 duration-300 border-r-2 pr-2"
            style={{ color: isPoster ? "#0074d9" : "" }}
            onClick={() => setIsPoster(true)}
          >
            Posters
          </button>

          <button
            className="ml-2 hover:text-slate-300/80 duration-300"
            style={{ color: !isPoster ? "#0074d9" : "" }}
            onClick={() => setIsPoster(false)}
          >
            List
          </button>
        </div>
      </div>
      {isPoster ? (
        <PosterMovies movies={filterMovies} />
      ) : (
        <ListMovies movies={filterMovies} />
      )}
    </section>
  );
};
export default Movies;
