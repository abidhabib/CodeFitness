import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(()=>


localStorage.getItem('number')?JSON.parse(localStorage.getItem('number')):0



  )
  useEffect(()=>{
    localStorage.setItem('number',JSON.stringify('786'))
  },[count])
console.log(count);


  return (
    <>
    
    </>
  )
}

export default App
