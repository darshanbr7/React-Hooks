import React, { useEffect, useState } from 'react'

const CounterHook1 = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`Clicked ${count} Times`
    })
  return (
    <div>
        <center>
            <button onClick={()=>{setCount(prevStae=>prevStae+1)}}> Clicked {count} times</button>
        </center>
    </div>
  )
}

export default CounterHook1