//import { string } from 'prop-types';
import React, { useState } from 'react';
import DisplayCard from './DisplayCard';
import Button from  './UI/Button.js'

import './SimpleList.css'

function SimpleList(props)
{
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [isValid, setIsValid] = useState(true)

    function FirstNameChange(event)
    {       
        if(event.target.value.trim().length > 0){
            setIsValid(true)
        }
        setFirstName(event.target.value)           
    }

    function LastNameChange(event)
    {       
        setLastName(event.target.value)
    }

    function OnFormSubmit(e)
    {
        e.preventDefault()

        if (firstName.trim().length === 0 || lastName.trim().length === 0){
            setIsValid(false)
            return;
        }

        const userData = {
        firstName : firstName,
        lastName : lastName,
        id : Math.floor(Math.random() * 300)
        }
    
        props.collectData(userData)
        setFirstName('')
        setLastName('')
    }
    return(

        <div>
            
            <form onSubmit={OnFormSubmit}>
            <div className = {`input-form ${!isValid ? 'invalid' : ''}`}>
            <label style = {{color: !isValid ? "red" : "black"}}>Enter info</label>
            <input style = {{borderColor: !isValid ? "red" : "black"}} onChange={FirstNameChange} type="text" placeholder="first name" value={firstName} />
            <input style = {{borderColor: !isValid ? "red" : "black", background: !isValid ? "red" : "transparent"}}onChange={LastNameChange} type="text" placeholder="last name" value={lastName} />
            </div>
            <Button>submit</Button>
            
            </form>

        </div>

    )
}

export default SimpleList;