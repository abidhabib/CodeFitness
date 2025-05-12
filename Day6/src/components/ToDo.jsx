import React, { useState } from 'react'





const ToDo = () => {

    const [items,setItems]=useState([
        {
            id:1,
            name:"1",
            isDone:false,
            details:"1"
        }
    ])

const addItems = ()=>{

setItems([
...items,{
    id:items.length+1,
    name:"Task",
    isDone:false,
    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
}
])


}

const deleteItem=(id)=>{

setItems(()=>
    items.filter((i)=>i.id !==   id)
)
}

  return (
    <section>


<h1>
    TO-DO
</h1>
{
    items.map((i)=>

<li key={i.id}>{i.name}{i.id} <br /> {i.details} <br /> {i.isDone?"Done":"Not Done"} <button onClick={()=>deleteItem(i.id)}>
    Delete
    </button> </li>
    )
}
<button onClick={addItems}>
Add
</button>

    </section>
  )
}

export default ToDo;    