import React, { useState } from 'react'

const Counter = () => {
    let initial=0
  const [count,setCount]= useState(initial)
  return (
    <div>
        <center>
            {count}<br/>
            <button onClick={()=>{setCount(prevCount=>prevCount+1)}}>Increment</button><br/>
            <button onClick={()=>{setCount(prevCount=>prevCount-1)}}>Decrement</button><br/>
            <button onClick={()=>{setCount(initial)}}>Reset</button><br/>
            <button onClick={()=>{setCount(prevCount=>prevCount+5)}}> Increment 5</button>
        </center>
    </div>
  )
}

export default Counter