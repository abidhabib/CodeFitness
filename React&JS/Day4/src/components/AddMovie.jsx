import { useState } from "react";

const AddMovie =()=>{

const [movies,setMovies]=useState([
    {
        id:1,
        name:"Inception",
        rating:5
    },
    {
        id:2,
        name:"Interstaller",
        rating:7
    },
    {
        id:3,
        name:"The Dark Knight",
        rating:8
    },
    {
        id:4,
        name:"The Godfather",
        rating:9
    }

])
const AddNew=()=>{

    const newMovies=[{
        id:5,
        name:'Inception',
        rating:99
    },{
        id:6,
        name:'Avatar',
        rating:9
    }]
    setMovies(prev=>{
        const existingMovies=new Set(prev.map((movie)=>movie.name))
        const FinalMovies=newMovies.filter((movie)=>!existingMovies.has(movie.name)).map((movie,index)=>{
            return {
              id:prev.length+index+1,
              name:movie.name,
              rating:Math.floor(Math.random()*10)
            }
        })
        return [...prev,...FinalMovies]
    })


}


    return (

<section>

<ul>

{
movies.map((movie,index)=>{

return <li key={index}>{movie.name} {movie.rating}</li>

})

}

</ul>
<button onClick={AddNew}>Add Movie</button>
</section>

    )
}
export default AddMovie;