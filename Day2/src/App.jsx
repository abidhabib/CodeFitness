import Cart from "../../Day1/src/components/Cart";
import Child from "./components/Child";
import Children from "./components/Children";
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
<Children>
 <h1>Children Component
 </h1>
 <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quasi quae amet. Quidem esse pariatur vero aperiam! Ea deserunt iusto, neque quo reprehenderit sit, culpa perspiciatis, quasi doloremque aperiam iure.</p>

</Children>
<Children>
<h1>Abid Habib</h1>
<p>Full Stack Developer</p>
<ul>  
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
  <li>React</li>
  <li>Node</li>
  <li>Express</li>
  <li>MongoDB</li>
   <li>Git</li>
   <li>GitHub</li>
   <li>GitLab</li>
   
</ul>

  </Children>


<Cart/>


</section>

)

}
export default App ;
