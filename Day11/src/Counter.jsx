import React,{useState} from 'react'

function Counter() {
    const  [count,setCount]=useState(0)
    const updateCounter=()=>{
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)

    }
  return (
    <div className='flex gap-2'>
    <div>Counter{count}</div>
    <button className='bg-blue-500 text-white px-2 py-1 rounded' onClick={updateCounter}>Increment</button>
    <button className='bg-blue-500 text-white px-2 py-1 rounded' onClick={()=>setCount(count===0?0:count-1)}>Decrement</button>
    </div>
  )
}

export default Counter