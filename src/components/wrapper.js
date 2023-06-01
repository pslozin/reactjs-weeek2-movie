import styled from "styled-components";
import Button from "./UI/Button";
import { useState, createContext, useEffect} from "react";



export default function Wrapper() {

    const [favList, setFavList] = useState('FavList')

  return (

    <div>
    {favList}
    </div>
  )
}

