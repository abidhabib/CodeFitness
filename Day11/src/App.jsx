import Card from "./Card";
function App() {
  const Details=[

{
  _id:1,
  title:"Card Title1",
  description:"1 popular types of cards in UI design.",
  image:"https://via.placeholder.com/150"

},
{
  _id:2,
  title:"Card Title2",
  description:" 2 popular types of cards in UI design.",
  image:"https://via.placeholder.com/150"

},
{
  _id:3,
  title:"Card Title3",
  description:"3 popular types of cards in UI design.",
  image:"https://via.placeholder.com/150"

},


  ]
   

  
  return (
   
  <>
      <div className="min-h-screen gap-2 flex items- justify- bg-gradient-to-br from-gray-900 to-gray-800 p-4">

{
  Details.map((item,index)=>
     <Card key={index}   image={item.image}
  title={item.title} description={item.description} _id={item._id} />
  )
}
  </div>
  </>
  )
}

export default App
