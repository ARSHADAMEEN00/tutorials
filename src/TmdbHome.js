import React, { useState } from "react";
import CardComponent from "./MovieCard";
import "../src/style.css";

const TmdbHome = () => {
  const [query, setQuery] = useState("a");
  const [movies, setMovies] = useState([]);

  const SearchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=da128f0f40bdeb2660ba6801fe504117&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="header container-fluid">
        <h2>TMDB</h2>
      </div>
      <div className="formback">
        <h1 className="text-start ml-5 font-weight-bold">Welcome.</h1>
        <h3 className="text-start ml-5 ">
          Millions of movies,TV shows and people to discover,Explore now.
        </h3>
        <br />
        <br />
        <div className="mt-5">
          <form className="form" onSubmit={SearchMovies}>
            <label className="" htmlFor="query"></label>
            <input
              className="input"
              type="text"
              name="query"
              placeholder="search a movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="button">Search</button>
          </form>
        </div>
      </div>
      <div className="card-list d-flex flex-wrap">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <CardComponent movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
};
export default TmdbHome;
