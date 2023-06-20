import React, { useState } from 'react'

const UseState = () => {
   const[count,setCount]= useState(0)
  return (
    <div>
        <center>
            <button onClick={()=>{setCount(count+1)}} >counter {count}</button>
        </center>
    </div>
  )
}

export default UseState