import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

const [data,SetData]=useState({})

  useEffect(()=>{
async function fetchData(){
const data= await fetch("https://jsonplaceholder.typicode.com/posts")
const res= await data.json()
SetData(res)

}

fetchData()

  },[])


  return (
    <div>


      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
    
  )
}

export default App