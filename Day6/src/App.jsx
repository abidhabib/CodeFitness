import React from 'react'
import { useState } from 'react'
import ToDo from './components/ToDo'

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
const ClearData = ()=>{

  setvalue('')
}

  return (


    <section>
        
<h1>VALUE {value}</h1>

<input type="text" onChange={handleSetValue} /> 

<button onClick={handleShowValue}>
Submit
</button>
<button onClick={ClearData}>
Clear
</button>

<ToDo/>




    </section>


  )
}

export default App