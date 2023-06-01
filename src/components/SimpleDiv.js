import React, { useState } from 'react';
import SimpleList from './SimpleList';


function SimpleDiv(props)
{
    const [count, setCount] = useState(props.initCount)

    function UpdateCount()
    {
    setCount(count +1)
    }

    function GetValues(str)
    {
        console.log("HERE AT APP",str)
        props.displayvalue(str)
        return(
            <div>{str}</div>
        )
    }

    return(
        <div>
            <button onClick={UpdateCount}>click here</button>
            <button>{count}</button>
            <SimpleList simpleValue={GetValues}/>
            {GetValues}
           
            
        </div>

    )

}

export default SimpleDiv