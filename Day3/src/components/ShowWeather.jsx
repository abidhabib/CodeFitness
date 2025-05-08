import { useState } from "react";

const ShowWeather = ({temp})=>{



    const [count , setCount]=useState(0)
    const increment = ()=> setCount(curr=>curr+1)
    const [bg,setBg]=useState("red")
    const [friend,setFriend]=useState(['Elliot','Troy','Jared'])   
    const [fuck,setFuck]=useState('Fuck WindSurf ')
    const [movies,setMovies]=useState([{
        id:1,
        name:"Inception",
        rating:5

    },{
        id:1,
        name:"interstaller",
        rating:7
        }])
    const fuckToFuckYou = (p)=> {
        setFuck(curr=>{
            console.log(curr);
            return curr ==='Fuck WindSurf '? 'Fuck You' : 'Fuck WindSurf ';
            
        })
        return console.log(p);
        
    }
    const changeBg=()=> setBg(q => (q === "red" ? "blue" : "red"))









const updateMovies = ()=>{
    setMovies([...movies,{name:"Inception",rating:5},{name:"Inception",rating:5}])
}





const addFriend=()=> {
    return setFriend([...friend,'Elliot'])
}
const removeFriend=()=>{
setFriend(prev=>prev.filter((_,index)=>prev[index] !== 'Elliot'))
}
const updateFriend = ()=>{
  setFriend(prev=>prev.map((_,index)=>_==='Elliot'?'Elliot Anderson':_ ))
}
    return(
<section style={{
    backgroundColor:bg,
}}>
{count}
    <h1>Today Weather is {`${temp < 15 ? 'Cold' : temp < 25 ? 'Normal' : 'Hot'}`}
<button onClick={increment}>Increment</button>
<button onClick={changeBg}>Change Background</button>
</h1>
<button onClick={fuckToFuckYou}>{fuck}</button>
<ul>
 {friend.map((friend,index)=>{
    return <li key={index}>{friend}</li>
 })}
</ul>
<button onClick={addFriend}>Add Friend</button>
<button onClick={removeFriend}>Remove Friend</button>
<button onClick={updateFriend}>Update Friend</button>
{
movies.map((movie,index)=> <li key={index}>{movie.name} Rating {movie.rating} </li>     

)

}
<button onClick={updateMovies}>Update Movies</button>
</section>


    )
}
export default ShowWeather;