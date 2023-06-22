import React from 'react'
import ComponentB from './ComponentB'

//  step 1 create context 
// step 2   export the context
 export const UserContext=React.createContext()
 export const PlaceContext=React.createContext()
const ComponentA = () => {
  return (
    <div>
        <UserContext.Provider value={"darshan"}>
                <PlaceContext.Provider value={"bolare"}>
                     <ComponentB/> 
                </PlaceContext.Provider>
        </UserContext.Provider>

    </div>
  )
}

export default ComponentA