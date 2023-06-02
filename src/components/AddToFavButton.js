import React from 'react'
import { useState, createContext, useEffect} from "react";

import Wrapper from './wrapper';



export default function AddToFavButton(props) {
    

    const [addToFav, setAddtoFav] = useState("Add to Fav")

  return (
    <div>
        <button onClick={(e) =>
        {
            
            if(addToFav === "Remove from Fav`s")
            {
            setAddtoFav("Add to Fav")
            console.log("Deleting", props.movieTitle.id)
            console.log("Deletin From Temp DB", props.favDb)
            console.log("index is --", props.favDb.indexOf(502356))

            let indexOfFavs = props.favDb.findIndex(function (favind) {
                return favind.id === props.movieTitle.id;
            });

            console.log("index is :",indexOfFavs)
          
            props.addTo(props.favDb.splice(indexOfFavs,1))
            
            }
            else
            {
            let movieArr = [...props.favDb, props.movieTitle]
            props.addTo(movieArr)
            setAddtoFav("Remove from Fav`s")

            }
        }
        }>{addToFav}</button>
    </div>
  )
}
