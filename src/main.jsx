import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie";

//Layout
import RootLayout from "./layouts/RootLayout";

//Loaders
import { randomLoader, MoviesLoader, movieDetailLoader } from "./utils/Loaders";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={randomLoader} />
      <Route path="list" element={<Movies />} loader={MoviesLoader} />
      <Route path="movies/:id" element={<Movie />} loader={movieDetailLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
