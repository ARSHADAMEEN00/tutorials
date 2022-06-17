import React, { useState, useEffect } from "react";
import axios from "../src/axios";
import "./Row.css";
import CardComponent from "./MovieCard";
import { API_KEY, Image_Url } from "./requests";

import { Col, Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

// const Row = () => {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(
//         "https://api.themoviedb.org/3/trending/all/day?api_key=04ae7689fc21853d7db93ebc5e887fa0&language=en-US"
//       );

//       console.log(request);
//       setMovies(request.data.results);
//       console.log(request.data.results);
//     }
//     fetchData();
//   }, [
//     "https://api.themoviedb.org/3/trending/all/day?api_key=04ae7689fc21853d7db93ebc5e887fa0&language=en-US",
//   ]);

const Row = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => err);
  }, []);

  return (
    // <Col mg={3} xl={2} lg={2} className="d-flex">
    //   {movies.map((obj) => (
    //     <Card style={{ width: "200px", height: "200px" }}>
    //       <CardImg
    //         className="card-image"
    //         style={{ width: "200px", height: "200px" }}
    //         src={`${movie.backdrop_path}`}
    //         alt={movie.title + " poster"}
    //       />

    //       <CardBody>
    //         <CardTitle className="mt-0">{movie.title}</CardTitle>
    //         <h3>{movie.release_date}</h3>
    //       </CardBody>
    //     </Card>
    //   ))}
    // </Col>
    <div className="row">
      <h2>Netflix Originals</h2>
      <div className="posters">
        {/* {movies.map((movie) => ( */}
        {/* // <Col>
          //   <Card */}
        {/* //     className="card"
          //     style={{ */}
        {/* //       width: "18rem",
          //       height: "33rem",
          //       padding: "3px",
          //       margin: "10px",
          //     }}
          //     //mg={3} xl={2} lg={2}
          //   >
              <CardImg */}
        {/* className="card-img-top h-75"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.backdrop_path}`}
                alt={movie.title + " poster"}
              /> */}
        {/* //https://image.tmdb.org/t/p/w185_and_h278_bestv2/ */}
        {/* //     <CardBody className="card-body">
          //       <h2 */}
        {/* //         className="mt-0 card-title"
          //         style={{ fontSize: "20px", fontWeight: "bold" }}
          //       >
          //         {movie.name}
          //       </h2>
          //       <h3 className="card-text">{movie.first_air_date}</h3> */}
        //{" "}
        {/* <Link
          //           to="#"
          //           className="btn btn-primary"
          //         >font-weight-bold fontsize-15
          //           Button
          //         </Link> */}
        {/* //     </CardBody>
          //   </Card>
          // </Col> */}
        {movies
          // .filter((movie) => movie.poster_path)
          .map((movie) => (
            <CardComponent movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};
export default Row;
//           {/* <Link
//                     to="#"
//                     className="btn btn-primary"
//                   >
//                     Button
//                   </Link> */}
//       {/* </CardBody>
//       </Card>

//         ))}
//       {/* <Card>
//         <CardImg
//           className="card-image"
//           src={`${movies.backdrop_path}`}
//           alt={movies.title + " poster"}
//         />

//         <CardBody>
//           <CardTitle className="mt-0">{movies.title}</CardTitle>
//           <h3>{movies.release_date}</h3>
//           {/* <Link
//                     to="#"
//                     className="btn btn-primary"
//                   >
//                     Button
//                   </Link> */}
//       {/* </CardBody>
//       </Card> */}{" "}

// {/* <Link
//                     to="#"
//                     className="btn btn-primary"
//                   >
//                     Button
//                   </Link> */}
//       {/* </CardBody>
//       </Card>

// ))}
{
  /* <Card>
        <CardImg
          className="card-image"
          src={`${movies.backdrop_path}`}
          alt={movies.title + " poster"}
        />

        <CardBody>
          <CardTitle className="mt-0">{movies.title}</CardTitle>
          <h3>{movies.release_date}</h3>
          {/* <Link
                    to="#"
                    className="btn btn-primary"
                  >
                    Button
                  </Link> */
}
// {/* </CardBody>
// // </Card> */}{" "}
