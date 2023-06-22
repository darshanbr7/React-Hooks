import React, { useContext } from 'react'
import {UserContext,PlaceContext} from "./ComponentA"
const ComponentC = () => {
  const user=useContext(UserContext)
 const place= useContext(PlaceContext)
  return (
    <div>
      {user} - {place}
    </div>
  )
}

export default ComponentC