import Card from "./Card";
import Counter from "./Counter";
import PasswordGentrator from "./PasswordGentrator";
function App() {
  const Details=[

{
  _id:1,
  title:"Card Title1",
  color:'red',
  description:"1 popular types of cards in UI design.",
  image:"https://via.placeholder.com/150"

},
{
  _id:2,
  title:"Card Title2",
  color:'cyan',
  description:" 2 popular types of cards in UI design.",
  image:"https://via.placeholder.com/150"

},
{
  _id:3,
  title:"Card Title3",
  color:'blue',

  description:"3 popular types of cards in UI design.",
  image:"https://via.placeholder.com/150"

},


  ]
   

  
  return (
   
  <>
  <Counter/>
  <PasswordGentrator/>

      <div className="min-h-screen gap-2 flex flex-col w-full bg-gradient-to-br from-gray-900 to-gray-800 p-4">

{
  Details.map((item,index)=>
     <Card key={index}   image={item.image}
  title={item.title} description={item.description} _id={item._id} color={item.color} />
  )
}
  </div>
  
  </>
  )
}

export default App
