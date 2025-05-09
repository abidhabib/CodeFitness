import AddMovie from "./components/AddMovie"
import Increment from "./components/Increment"
import Decement from "./components/Decement"
import { useState } from "react"
import RandomTest from "./components/RandomTest"
import RT from "./components/RT"
const App = ()=>{

const [count,setCount]=useState(0)
const increment=()=>setCount(count+1)
const decrement=()=>setCount(count-1)
const [rendom,setRendom]=useState(
Math.floor(Math.random()*100)

)
  return (

<section>
  <h1>
    Hello Movies  World !
  </h1>

  <br />

  <AddMovie />

<Increment count={count} Onincrement={increment} random={rendom}/>
<Decement count={count} Ondecrement={decrement} />
<RandomTest/> 
<RT/>

</section>

  )
}
export default App
