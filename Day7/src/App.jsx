import React, { useState } from 'react'

const App = () => {
const [value,setvalue]=useState([{
name:"young"


}])
const updateName=(e )=>{
  e.preventDefault()
    console.log("updated");
   setvalue(e.target.value);
    
}
const CopyUpdatedName=(name)=>{
    console.log(name);
    navigator.clipboard.writeText(name)
    
}
console.log(value);

  return (



<div>
<p>{value}</p>
<input type="text" onChange={updateName}  />
<button onClick={updateName}>Update</button>
<button onClick={CopyUpdatedName()}>Copy</button>
</div>

  )
}

export default App