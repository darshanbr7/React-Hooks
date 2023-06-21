import React, { useState } from 'react'

const CountrewithObject = () => {
    const[name,setName]=useState({firstName:"",lastName:""})
  return (
    <div><form >
        <center>
        <input type='text' value={name.firstName}  onChange={(e)=>{setName({...name,firstName:e.target.value})}}/><br/>
        <input type='text' value={name.lastName}  onChange={(e)=>{setName({...name,lastName:e.target.value})}}/><br/>
      <h2>FirstName :{name.firstName}</h2>
      <h2>LastName :{name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
        </center>
    </form>

    </div>
  )
}

export default CountrewithObject