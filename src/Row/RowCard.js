import React, {useState,useEffect} from "react";
import {API_KEY} from '../../constant/constant'
import { imageUrl } from "../../constant/constant";
import './RowCard.css';
import axios from "../axios";
import { Row } from "reactstrap";

const RowCard = (props) =>{
    const[movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
            console.log(response.data);
            setMovies(response.data.results)
        })
    },[])
    return(
     <div className="scrollmenu container-fluid">
         <h2>{props.title}</h2>
         {movies?.map((obj)=>{
            <img className="cardimg"  src={`${movies.poster_path}`} alt="img" />
         })}
      
     </div>
    )
}
export default RowCard;