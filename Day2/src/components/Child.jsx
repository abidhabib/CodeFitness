import React from 'react'

const Child = ({name='default',age='default',gender='default',country='default',Hobbies=['default']}) => {
  return (
    
<section>

    <h2>Child Component</h2>
    <p>{name}</p>
    <p>{age}</p>
    <p>{gender}</p>
    <p>{country}</p>
    <ul>
        {
            Hobbies.length>0 ?
            
                Hobbies.map((Hobbies,index)=>{
                return <li key={index}>{Hobbies}</li>
                
                }) :
                <p>No Hobbies Found</p>

                
        }
    </ul>

</section>


  )
}

export default Child