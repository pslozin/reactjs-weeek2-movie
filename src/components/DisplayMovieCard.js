import React from 'react'
import { useState, createContext, useEffect} from "react";
import './DisplayMovieCard.css'

import AddToFavButton from './AddToFavButton';


export default function DisplayMovieCard(props) {

    var forFavsList = {
        movieId: "",
        movieTitle: "",

    }

    console.log("Movie card - ", props)
    console.log("FOO - ", props.addToFav)
    console.log("FAV DB", props.favDb)
    //props.addToFav("HITHERE")
    
    return (
    
    <>
    {props.movieList.map((movieInfo) => (
        
        <div className = 'movieCard'>
        <h3>id : {movieInfo.id} </h3>
        <h3>name: {movieInfo.original_title}  </h3>
        <h3>release date: {movieInfo.release_date} </h3>
        <h3>raiting: {movieInfo.popularity} </h3>
        
        <AddToFavButton movieTitle = {movieInfo} addTo = {props.addToFav} favDb = {props.favDb}></AddToFavButton>
       
        </div>
    ))}
    

    </>
  )
}
