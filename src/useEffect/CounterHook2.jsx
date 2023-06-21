import React, { useEffect, useState } from 'react'

const CounterHook2 = () => {
 const[count,setCount]= useState(0)
 const[name,setName]=useState("")
 useEffect(()=>{
    document.title=` Clicked ${count} times`
    console.log("title changed")
 },[count])
  return (
    <div>
        <center>
            <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}}/> <br />
            <button onClick={()=>{setCount(preState=>preState+1)}}>cliicked {count} times</button>
        </center>
    </div>
  )
}

export default CounterHook2