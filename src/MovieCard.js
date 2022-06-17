// import React from 'react';
// import "./Row/RowCard.css";

//  const CardComponent = ({ movie }) => {
//   return (
//     <div className="card">
//       <img
//         className="card-image"
//         src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
//         alt={movie.title + ' poster'}
//       />
//         <h3 className="card-title font-weight-bold">{movie.title}</h3>

//           <h3>{movie.release_date}</h3>

//     </div>

//   );
// }
// export default CardComponent

import React from "react";
import "./Row/RowCard.css";
import { Col, Card, CardBody, CardImg, CardTitle, Row } from "reactstrap";
import { Link } from "react-router-dom";

const CardComponent = ({ movie }) => {
  console.log(movie);
  return (
    <Col>
      <Card
        className="card"
        style={{
          width: "18rem",
          height: "33rem",
          padding: "3px",
          margin: "10px",
        }}
        //mg={3} xl={2} lg={2}
      >
        <CardImg
          className="card-img-top h-75"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
        <CardBody className="card-body">
          <h2
            className="mt-0 card-title"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            {movie?.name}
          </h2>
          <h3 className="card-text">{movie.release_date}</h3>

          {/* <Link
                    to="#"
                    className="btn btn-primary"
                  >font-weight-bold fontsize-15
                    Button
                  </Link> */}
        </CardBody>
      </Card>
    </Col>
  );
};
export default CardComponent;
//style={{ width: "200px", height: "100px" }}
// style={{ width: "400px", height: "300px", position: "cover" }}
{
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}
