import { useState } from "react";

const ShowWeather = ({temp})=>{



    const [count , setCount]=useState(0)
    const increment = ()=> setCount(curr=>curr+1)
    const [bg,setBg]=useState("red")
    const changeBg=()=> setBg(q => (q === "red" ? "blue" : "red"))

















    return(
<section style={{
    backgroundColor:bg,
}}>
{count}
    <h1>Today Weather is {`${temp < 15 ? 'Cold' : temp < 25 ? 'Normal' : 'Hot'}`}
<button onClick={increment}>Increment</button>
<button onClick={changeBg}>Change Background</button>
</h1>
</section>


    )
}
export default ShowWeather;