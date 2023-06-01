import { useState, createContext, useEffect} from "react";

import axios from "axios"

import Button from  './components/UI/Button'

import SimpleList from "./components/SimpleList";
import DisplayCard from "./components/DisplayCard";

import Wrapper from "./components/wrapper";

import DisplayMovieCard from "./components/DisplayMovieCard";
import DisplayFavMovies from "./components/displayFavMovies";

import styled from "styled-components";


let newText = "Philip Slozin"

const persons = [
    {
        firstName : "Philip",
        lastName : "Slozin",
        id: 10
    },
    {
        firstName : "Svetlana",
        lastName : "Slozina",
        id : 20
    }
]

const favMovieList = {
    id: 'TEST MOVIE',
    title: 'TEST MOVIE'
}

function App()
{
    
    const [userData, setUserData] = useState(persons)
    const [myData, setMyData] = useState(0)

    const [movieList, setMovieList] = useState([])

    const [favList, setFavList] = useState(7)

    const [slozin, setSlozin] = useState([favMovieList])


  
 

    console.log("TESTTEST",slozin)


    const getData = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=6d23bf44a9ab66a1765fb5e554d4d20c`)
            .then((res) => {
                //console.log(res.data.results);
                setMovieList(res.data.results);
            });
          
    };

   
    
    useEffect(() => {
        getData();
    }, []);

    // function addToFav()
    // {
    //     //setFavList(...favMovieList, data)
    //     //console.log("FAVLIST", setFavList)
    //     setFavList()

    // }

    function displayValue(myValue)
    {
        console.log("with ID :", myValue)
        setUserData([...userData, myValue])

    }


    function deleteValue(myValue)
    {
        console.log("Button ID to delete:", myValue)
        console.log("Looking", userData)
        
        let deleteArry = userData.filter((e) =>{
            return e.id != myValue
            
        })

        console.log("Updated Array",deleteArry)
        setUserData(deleteArry)
        

    }

   

    useEffect(()=>{
      
    },[myData])

    
    return(
        <>
         <SimpleList collectData = {displayValue} />
        <DisplayFavMovies favList = {slozin}></DisplayFavMovies>
       
        {/* <DisplayCard userData = {userData} dataToDelete = {deleteValue}/> */}
        <DisplayMovieCard movieList = {movieList} addToFav = {setSlozin} favDb = {slozin}/>
      
        
        </>
    )
}

export default App;