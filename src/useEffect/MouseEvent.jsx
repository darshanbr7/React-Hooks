import React, { useEffect, useState } from 'react'

const MouseEvent = () => {
    const[x ,setX]=useState(0)
    const[y ,setY]=useState(0)
    const [display,setDisplay]=useState(true)
    const logmouseposition=(e)=>{
        console.log("mouseEvent");
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        window.addEventListener('mousemove',logmouseposition)
        return ()=>{
            window.removeEventListener('mousemove',logmouseposition )
        }
    },[])
  return (
    <div>
        
        <button onClick={()=>{setDisplay(!display)}}> Toggle</button>
        <p> x= {x}  , y= {y}</p>
    </div>
  )
}

export default MouseEvent