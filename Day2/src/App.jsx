import Child from "./components/Child";

const App = ()=>{


return(

<section>
<h2>Revising Props</h2>
<Child
name="Elliot Alderson"
age='20'
gender="male"
country="USA"
Hobbies={[
  "Coding",
  "Gaming",
  "Reading",
  "Traveling",
  "Cooking",
]
}




/>
<Child />

</section>

)

}
export default App ;
