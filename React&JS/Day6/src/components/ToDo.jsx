import React, { useState } from 'react'


import Popup from './Popup'


const ToDo = () => {
    const [isCopy,setIsCopy]=useState(false)
const [copy,setCopy]=useState([])
    const [items, setItems] = useState([
        {
            id: 1,
            name: "1",
            isDone: false,
            details: "1"
        }
    ])

    const addItems = () => {

        setItems([
            ...items, {
                id: items.length + 1,
                name: "Task",
                isDone: false,
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
        ])


    }

    const deleteItem = (id) => {

        setItems(() =>
            items.filter((i) => i.id !== id)
        )
    }
    const updateItem = (id) => {

        console.log(id);
        setItems(items.map((i) => {
            return i.id == id ? {

                id: id,
                name: "Updated",
                isDone: true,
                details: `${id} is Updated`

            } : i

        }))


    }
    const copyItem=(item)=>{

    console.log(item);

const copyItem=JSON.stringify(item)
setCopy(copyItem)
navigator.clipboard.writeText(copyItem)
.then(()=>{ 
    alert("Copied")
    setIsCopy(true)
    setTimeout(() => {
        setIsCopy(false)
    }, 2000);
    
}).catch(()=>{
    alert("Failed")
})

console.log(copyItem);


    }
    return (
        <section>


            <h1>
                TO-DO
            </h1>
            {
                items.map((i) =>

                    <li key={i.id}>{i.name}{i.id} <br /> {i.details} <br /> {i.isDone ? "Done" : "Not Done"} <button onClick={() => deleteItem(i.id)}>
                        Delete
                    </button>
                        <button onClick={() => updateItem(i.id)}>Update</button>
                        <button onClick={()=>copyItem(i)}>Copy</button>

                    </li>
                )
            }
            <button onClick={addItems}>
                Add
            </button>
<Popup copy={isCopy}/>
        </section>
    )
}

export default ToDo;    