const url = "https://imdb-top-100-movies.p.rapidapi.com/";
const APIKEY = import.meta.env.VITE_API_KEY
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": APIKEY,
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

export const randomLoader = async () => {
  const random = Math.floor(Math.random() * 100) + 1;
  //   const url = `https://imdb-top-100-movies.p.rapidapi.com/top${random}`;
  try {
    const response = await fetch(`${url}top${random}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const MoviesLoader = async () => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Cant fetch movies data");
  return res.json();
};

export const movieDetailLoader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await fetch(`${url}${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
