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
            //props.addTo("")
            }
            else
            {
            props.addTo([...props.favDb, props.movieTitle])
            setAddtoFav("Remove from Fav`s")

            }
        }
        }>{addToFav}</button>
    </div>
  )
}
