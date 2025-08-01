import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import C1 from './components/C1'

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

const a=10
  return (
    <div>


      <C1 value={a}/>
      
    </div>
    
  )
}

export default App