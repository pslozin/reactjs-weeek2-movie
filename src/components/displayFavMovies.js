import React from 'react'
import { useState, createContext, useEffect} from "react";


export default function DisplayFavMovies(props) {

    //const [favList, setFavList] = useState('FavList')
    console.log("DispFavMov",props.favList)

  return (
    // <div>{props.favList}</div>
<>
{props.favList.map((movieInfo) => (
        
        <div className = ''>
        <h3>id : {movieInfo.id} </h3>
        <h3>name: {movieInfo.title}  </h3>
      
      
        </div>
    ))}




</>

  )
}
