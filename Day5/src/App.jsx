import React, { useEffect } from 'react'
import { useState } from 'react'
 const App = () => {

const [count,setCount]=useState(()=>{

const fromLocalStorage=localStorage.getItem('count')
return fromLocalStorage?JSON.parse(fromLocalStorage):0

})


useEffect(()=>{

localStorage.setItem('count',10)

},[])

  return (
    <section>
    <p>{count}</p>
    <button onClick={()=>setCount(()=>{
      localStorage.setItem('count',count+1)
      return count+1
    })}>Increment</button>
    </section>
  )
}

export default App