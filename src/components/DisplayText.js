
import { useState, createContext, useContext} from "react";

import { colorContext } from "../App";



export default function DisplayText(props)
{
    
    const [firstText, setfirstText] = useState('First Text')
    
    function changheText()
    {
        setfirstText("Hi Philip")
    }

    return(
        <>
        <h3>{firstText}</h3>
        <h3></h3>
        {/* <button onClick={changheText}>click</button> */}
        <button onClick={props.clickEvent}>click</button>
        </>

    )
}