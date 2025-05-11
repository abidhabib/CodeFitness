import React from 'react'
import { useState } from 'react'

const App = () => {
  const [value,setvalue]=useState('Starting')



const handleSetValue=(event)=>{
event.preventDefault(); 
  const value=event.target.value;
  setvalue(value);

console.log(value);



}
const handleShowValue=(event)=>{
  event.preventDefault();
  

}

  return (


    <section>
        
<h1>VALUE {value}</h1>

<input type="text" onChange={handleSetValue} /> 

<button onClick={handleShowValue}>
Submit
</button>
    </section>


  )
}

export default App