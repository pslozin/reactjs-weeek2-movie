//import { func } from 'prop-types';
import React, { useState } from 'react';
import SimpleDiv from './SimpleDiv';

import './DisplayCard.css'

import DisplayText from './DisplayText';

function DisplayCard(props)
{

    function onClickEvent()
    {
        console.log("TESTING CLICK EVENT")
    }

    console.log("Card props", props)
    
    function deleteHandler(e)
    {
        console.log('Clicked', e.target.id)
        props.dataToDelete(e.target.id)

    }

    return(
       <>
        {props.userData.map((userInfo) => (
            <div className='cardDiv'>
            <h3>info card : {userInfo.id}</h3>
            <h3>first name: {userInfo.firstName}</h3>
            <h3>Last Name: {userInfo.lastName}</h3>
            <DisplayText clickEvent = {onClickEvent}/>
            <button id={userInfo.id} onClick={deleteHandler}>delete card</button>
           
            </div>
            
        ))}
        

        </>

    )



    // return(
    //     <div>
    //     <h3>Info Card:</h3>
    //     <h3>First Name: {props.firstName}</h3>
    //     <h3>Last Name: {props.lastName}</h3>
    //     <button value="button" onClick={deleteHandler}>delete card</button>
    //     </div>
    // )
}

export default DisplayCard