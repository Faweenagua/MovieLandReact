import { logDOM } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e9c724ca";

let movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYjU2YzY5NDEtM2M3NC00NGM0LTg3MmItNWQ1OWY2ZmNkZTU0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  Title: "Bean",
  Type: "movie",
  Year: "1997",
  imdbID: "tt0118689",
};

export default function App() {
  let [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);

    //console.log(movies);
  };

  useEffect(() => {
    searchMovies("Bean");
  }, []);
  //console.log(movie1.Year);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for a movie"
          value="Bean"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No movies found</h2>
        </div>
      )}
    </div>
  );
}
