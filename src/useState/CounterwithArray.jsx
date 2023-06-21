import React, { useState } from 'react'

const CounterwithArray = () => {
    const[items,setItems]=useState([])
  return (
    <div>
       <center>
       <button onClick={()=>{
            setItems([...items,{
                id:items.length,
                value:Math.floor(Math.random()*10)+1
            }])
        }}>Click</button>
       {items.map((ele)=>{
        return <li >{ele.value}</li>
       })}
       </center>
    </div>
  )
}

export default CounterwithArray