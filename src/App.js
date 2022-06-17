import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import TmdbHome from "./TmdbHome";
import CardComponent from "./MovieCard";
function App() {
  return (
    <div className="app">
      <TmdbHome />
      <Row />
      <Row />
      {/* <Row title="Trending now" fetchUrl={requests.fetchTrending} /> */}
      {/* <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
